#!/usr/bin/env bash
#
# report-findings.sh: turn a gitleaks JSON report into a failure that names
# itself: a per-finding GitHub annotation, a plain-text digest on stdout, and a
# table in the job summary.
#
# Why: gitleaks on its own prints only the number of leaks, which cannot be
# triaged without re-running the scan by hand.
#
# The digest deliberately reads only RuleID, Description, File, StartLine,
# Commit, Author, Date and Fingerprint. It never reads Secret or Match, so it
# cannot print credential material into a public log even if a future edit drops
# --redact from the scan step. That is a security property, not a formatting
# choice.
#
# Email is not read at all. Commit and Author already say who introduced a
# finding, so an address buys no triage and would spread personal data through
# both a public log and the job summary: a surface built to print as little as
# it can get away with.
#
# Fingerprint is included because it is the value a genuine fixture false
# positive is allowlisted on in .gitleaks.toml, so the log hands you the fix
# rather than only the complaint.
#
# jq is the only external command this needs, and a missing one is reported as
# the distinct thing it is. Collapsing dead reporting tooling into "the scanner
# died" or "the report will not parse" is the same one-message-for-three-faults
# defect this script exists to remove, a level further up.
#
# Usage: report-findings.sh <report.json> <scan-exit-code> [scan-label]
# Exit:  0 when the scan passed and reported nothing, 1 otherwise.

set -euo pipefail

REPORT_PATH="${1:?usage: report-findings.sh <report.json> <scan-exit-code> [scan-label]}"
SCAN_EXIT="${2:?usage: report-findings.sh <report.json> <scan-exit-code> [scan-label]}"
SCAN_LABEL="${3:-secret scan}"

# Checked before the report is, and fails closed even on a passing scan: a run
# that cannot summarise findings cannot certify their absence either, and a
# broken runner is worth surfacing on the first clean scan rather than on the
# first leaking one.
if ! command -v jq > /dev/null 2>&1; then
  echo "::error title=Secret scan report tooling missing::jq is not installed, so the ${SCAN_LABEL} report at ${REPORT_PATH} cannot be summarised. This is a missing dependency on the runner: not a leak, not a scanner failure, and not an unreadable report. Install jq and re-run."
  exit 1
fi

# A non-zero scan with no readable report is a different failure from a leak  - 
# gitleaks died, or wrote nothing. Saying so beats reporting zero findings and
# letting the bare exit code carry the whole message.
if [[ ! -s "$REPORT_PATH" ]]; then
  if [[ "$SCAN_EXIT" -ne 0 ]]; then
    echo "::error title=Secret scan failed without a report::The ${SCAN_LABEL} exited ${SCAN_EXIT} but produced no findings report at ${REPORT_PATH}. Read the scan step's own output: this is a scanner failure, not a leak."
    exit 1
  fi
  echo "No findings reported by the ${SCAN_LABEL}."
  exit 0
fi

if ! jq empty "$REPORT_PATH" 2>/dev/null; then
  echo "::error title=Unreadable secret scan report::${REPORT_PATH} is not valid JSON, so the ${SCAN_LABEL} could not be summarised. Read the scan step's own output."
  exit 1
fi

COUNT="$(jq 'length' "$REPORT_PATH")"

if [[ "$COUNT" -eq 0 ]]; then
  if [[ "$SCAN_EXIT" -ne 0 ]]; then
    echo "::error title=Secret scan failed with no findings::The ${SCAN_LABEL} exited ${SCAN_EXIT} while reporting no findings. Read the scan step's own output: this is a scanner failure, not a leak."
    exit 1
  fi
  echo "No findings reported by the ${SCAN_LABEL}."
  exit 0
fi

# One annotation per finding, anchored to the file and line so it surfaces on the
# run page and against the diff without opening the log.
jq -r '
  .[] |
  "::error file=\(.File // "unknown"),line=\(.StartLine // 1),title=Secret scan: \(.RuleID // "unknown-rule")::" +
  "\(.Description // .RuleID // "Possible credential") detected in \(.File // "unknown") at line \(.StartLine // 1)" +
  " (rule \(.RuleID // "unknown-rule"), commit \((.Commit // "working tree")[0:8]), fingerprint \(.Fingerprint // "n/a"))." +
  " If this is a test fixture rather than a credential, allowlist that fingerprint in .gitleaks.toml; otherwise rotate the credential before anything else."
' "$REPORT_PATH"

printf '\nThe %s found %s finding(s):\n\n' "$SCAN_LABEL" "$COUNT"

jq -r '
  to_entries[] |
  "  \(.key + 1). \(.value.RuleID // "unknown-rule"): \(.value.File // "unknown"):\(.value.StartLine // 1)\n" +
  "     description: \(.value.Description // "n/a")\n" +
  "     commit:      \(.value.Commit // "working tree")\n" +
  "     author:      \(.value.Author // "n/a") \(.value.Date // "")\n" +
  "     fingerprint: \(.value.Fingerprint // "n/a")"
' "$REPORT_PATH"

printf '\nSecret values are not printed here by design. Inspect the named file and line to judge each finding.\n'

summary_table() {
  printf '## Secret scan: %s finding(s)\n\n' "$COUNT"
  printf 'Reported by the %s.\n\n' "$SCAN_LABEL"
  printf '| Rule | File | Line | Commit | Fingerprint |\n'
  printf '| --- | --- | --- | --- | --- |\n'
  jq -r '
    .[] |
    "| `\(.RuleID // "unknown-rule")` | `\(.File // "unknown")` | \(.StartLine // 1) | `\((.Commit // "working tree")[0:8])` | `\(.Fingerprint // "n/a")` |"
  ' "$REPORT_PATH"
  printf '\nSecret values are omitted deliberately. A fixture false positive is allowlisted by its fingerprint in `.gitleaks.toml`; a genuine credential is rotated first and removed second.\n'
}

if [[ -n "${GITHUB_STEP_SUMMARY:-}" ]]; then
  summary_table >> "$GITHUB_STEP_SUMMARY"
fi

exit 1
