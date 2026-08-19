---
description: 'Run Overdrive precommit gates - format, lint, test, build, changeset'
disable-model-invocation: true
---

# Precommit Checks

Run each step one at a time, in order. Stop at the first ❌.

## Arguments

- `/precommit` — the full gate: Format, Lint, Test, Build, Changeset.
- `/precommit <base-branch>` — compare against that branch instead of the
  auto-detected PR base (used by the Changeset step).

## Steps

| # | Step | Command |
|---|------|---------|
| 1 | Format | `yarn format:staged <changed files>` |
| 2 | Lint | `yarn lint` |
| 3 | Test | `yarn test:ci` |
| 4 | Build | `yarn build` |
| 5 | Changeset | git inspection (below) |

Step 4 has no PR equivalent in CI — `ci.yml` runs lint and tests only, and
`yarn build` runs at publish time. A broken Babel build sails through PR CI
green and detonates at publish, so this is the only gate on it.

## Visual testing is not part of this gate

**Never run Chromatic or `storybook:build` from this command.** Both were
considered and deliberately left out:

- Chromatic snapshots come out of a finite monthly OSS quota that the project
  has exhausted in past months. `ci.yml` already runs Chromatic once per review
  round — on `ready_for_review`, because `pr-auto-draft.yml` re-drafts the PR
  on every push. A local run spends that quota a second time for the same
  review and publishes an extra build into the project's history.
- CI runs with `onlyChanged: true` (TurboSnap) and `autoAcceptChanges: 'main'`.
  The local `yarn chromatic` script has neither, so a local run behaves
  differently from the gate that actually decides the PR — a green locally
  would not mean what a reviewer thinks it means.

Visual regressions are CI's job, and CI is where the baseline lives. If you
want visual coverage on a change, push and mark the PR ready for review.

`yarn storybook:build` is out for the same practical reason: it costs minutes
per run to catch a class of breakage (a story that fails a production build)
that is rare and that the release workflow catches anyway. Run it by hand when
you have actually touched stories.

## Step 0 — establish the base and the changed files

Do this before Step 1; several steps depend on it.

```bash
BASE_BRANCH="${1:-}"
if [ -z "$BASE_BRANCH" ]; then
  BASE_BRANCH=$(/opt/homebrew/bin/gh pr view --json baseRefName -q '.baseRefName' 2>/dev/null || true)
fi
BASE_BRANCH="${BASE_BRANCH:-main}"
git fetch --no-tags origin "$BASE_BRANCH"
BASE_REF="origin/$BASE_BRANCH"

CHANGED=$(git diff --name-only --diff-filter=ACMR "${BASE_REF}...HEAD"; git diff --name-only --diff-filter=ACMR HEAD; git ls-files --others --exclude-standard)
CHANGED=$(printf '%s\n' "$CHANGED" | sort -u | grep -v '^$')
printf '%s\n' "$CHANGED"
```

`CHANGED` deliberately unions the committed branch diff, the uncommitted
working tree and untracked files — a precommit gate that only looked at
committed work would miss exactly the edits you are about to commit.

Use `/opt/homebrew/bin/gh`, not bare `gh`: in this shell `gh` is a directory
helper function, not the GitHub CLI.

Then check the install is current, because a stale `node_modules` produces
failures in later steps that look like code errors but aren't:

```bash
if [ .yarn/install-state.gz -ot yarn.lock ] || [ .yarn/install-state.gz -ot package.json ]; then
  echo "STALE INSTALL — node_modules predates yarn.lock/package.json"
fi
```

If it reports stale, say so and run `yarn --immutable` before Step 1. Yarn only
puts the bins of *declared, installed* dependencies on PATH, so a lockfile
bump that was never installed surfaces as `command not found: <tool>` even
though the binary sits in `node_modules/.bin`. Diagnosing that as a broken
build script sends you down a long wrong road — the tell is that
`./node_modules/.bin/<tool>` works while `yarn <script>` does not.

## Step 1 — Format (scoped)

Format **only the changed files**, never the whole repo:

```bash
printf '%s\n' "$CHANGED" \
  | grep -E '\.(js|jsx|ts|tsx|json|yml|md|mdx|html)$' \
  | while read -r f; do [ -f "$f" ] && printf '%s\n' "$f"; done \
  | xargs -r yarn format:staged
```

Do **not** run `yarn format`. That script is repo-wide and rewrites roughly
thirty files of pre-existing Prettier drift that have nothing to do with your
change, burying the real diff and making the PR unreviewable. The husky
`pre-commit` hook does run the repo-wide version, so formatting your own files
first keeps the hook's output empty and the diff clean.

Step 1 is ❌ only if the command errors. Files being rewritten is a pass — but
mention which ones, since they are now part of the commit.

## Step 2 — Lint

```bash
yarn lint
```

That is `eslint "lib/**/*.+(ts|tsx)" --fix --quiet` followed by
`tsc --noEmit --skipLibCheck`. Two things follow from that:

- **`--fix` mutates your files.** If ESLint auto-fixed anything, say so and
  show `git diff --stat` — the human needs to know their tree changed.
- **`--quiet` hides warnings entirely.** A clean Step 2 means no *errors*.
  Don't report it as "no lint issues"; report it as "no lint errors".

❌ on non-zero exit. Show the offending file:line and rule before reporting.

## Step 3 — Test (BLOCKING verification)

```bash
yarn test:ci
```

(`vitest run --no-cache --coverage --project=unit-tests` — `--no-cache` makes
it authoritative rather than fast, which is what a gate wants.)

Exit code 0 alone does **not** mean the tests passed. A misconfigured project
filter or a collection error can produce a zero-exit run that executed nothing.
Parse the summary:

```
 Test Files  93 passed (93)
      Tests  926 passed (926)
```

The summary is **not** at the end of the output — the v8 coverage table prints
after it and runs for a hundred-odd lines. Reading the tail will miss it
entirely. Grep instead:

```bash
yarn test:ci 2>&1 | tee "$LOGFILE" | grep -E "Test Files|Tests  |FAIL "
```

Use `tee`, not `>`. Under zsh's `noclobber` a plain `>` onto an existing log
fails silently-ish, and you end up grepping the *previous* run's output while
reading the redirect's exit code as the test result. That is a false green
manufactured by the harness rather than the suite.

All three must hold, or **Step 3 is ❌**:

1. The summary line exists and parses. "No test files found", a missing
   summary, or `Test Files 0 passed (0)` → ❌.
2. `Test Files` passed count is `>= 60`. The suite currently runs 93 files /
   926 tests in about 35 seconds; a collapse to a handful means the run was
   filtered down to nothing, not that the suite shrank. If the real count ever
   drifts far above this floor, raise it — a stale floor stops catching
   anything.
3. Failed count is exactly zero — `Y passed (Z)` must satisfy `Y == Z`, and any
   `X failed` → ❌.

On ❌, grep the output for `FAIL ` lines and list the failing files by name
before reporting. A failure count without file names is not actionable.

Note the `--project=unit-tests` filter: this does **not** run the a11y suite
(`yarn test:a11y`, the `storybook` project). If the diff touches roles, labels,
focus management or keyboard interaction, run `yarn test:a11y` too and report
it as an extra line.

## Step 4 — Build

```bash
yarn build
```

Babel-compiles `lib` to `dist`, ignoring stories, tests and `lib/test`. It is
the only local check that the published artefact actually compiles, since CI
runs it at publish time and not on PRs.

❌ on non-zero exit or any Babel error in the output. Note that `dist/` is now
populated — that is expected and gitignored.

`command not found: babel` is **not** a code failure. It means `@babel/cli`
was never installed at the version the lockfile pins, so yarn has no bin shim
for it. Run `yarn --immutable` and retry the step rather than reporting a
broken build.

## Step 5 — Changeset

Overdrive publishes `@autoguru/overdrive` from changesets, so a source change
without one ships nothing to consumers and silently skips the release.

```bash
# Publishable source: what `yarn build` actually compiles into dist.
PUBLISHABLE=$(printf '%s\n' "$CHANGED" \
  | grep -E '^lib/.*\.(ts|tsx|css)$' \
  | grep -v -E '(\.spec\.tsx?|\.stories\.tsx?)$' \
  | grep -v -E '^lib/(stories|test)/')

# A changeset added on this branch — not one that already sat on the base.
NEW_CHANGESETS=$(git diff --name-only --diff-filter=A "${BASE_REF}...HEAD" -- '.changeset/*.md'; \
  git diff --name-only --diff-filter=A HEAD -- '.changeset/*.md'; \
  git ls-files --others --exclude-standard -- '.changeset/*.md')
NEW_CHANGESETS=$(printf '%s\n' "$NEW_CHANGESETS" | sort -u | grep -v '^$' | grep -v 'README.md$')

printf 'publishable:\n%s\nchangesets:\n%s\n' "$PUBLISHABLE" "$NEW_CHANGESETS"
```

Apply:

1. **No publishable source changed** → Step 5 is ✅ (skipped). Say
   "no publishable source changed" so the human can see it was a real skip and
   not a missed check.
2. **Publishable source changed and `NEW_CHANGESETS` is non-empty** → ✅. Read
   each changeset and sanity-check it: the bump line must name
   `'@autoguru/overdrive'`, and the body should describe the consumer-visible
   effect. A body that says "fix stuff" is a ✅ for the gate but worth calling
   out — it becomes the public changelog entry.
3. **Publishable source changed and no new changeset** → ❌. Name the source
   files that need one and offer to write it, matching the house style: a
   `Component: what changed` opener, then what a consumer sees, then the blast
   radius (which components and consumers are affected). Pick `patch` for
   fixes and pixel-neutral refactors, `minor` for new props or components.

`.changeset/pre.json` means a prerelease is in progress — mention it, since the
bump lands in the prerelease line rather than a normal release.

## Output format

Show an inline status line, updated after each step:

```
⏳ Format
```

```
✅ Format ✅ Lint ✅ Test ⏳ Build
```

### Success

Only when every step is ✅, append the parsed numbers:

```
✅ Format ✅ Lint ✅ Test (93 files / 926 tests) ✅ Build (456 files) ✅ Changeset (calendar-ds2026-tokens.md)

🚀 Ship it!
```

When the changeset step was legitimately skipped, say why inline:

```
✅ Format ✅ Lint ✅ Test (93 files / 926 tests) ✅ Build (456 files) ✅ Changeset (skipped — no publishable source changed)

🚀 Ship it!
```

The counts are mandatory. A "Ship it!" without test counts and the changeset
name (or an explicit skip reason) is malformed — the human reading it has no
way to spot a false green, which is the only thing this line is for.

Say plainly that visual regressions were not checked. This gate does not cover
them, and a bare "Ship it!" can read as though it did.

### Failure

```
✅ Format ✅ Lint ❌ Test

❌ Do not push! Fix errors first.
```

Then list what broke — file paths and error excerpts, not a summary — and ask:
"Want me to fix it?"

## Rules

1. Run the steps in order and stop at the first ❌. Later steps waste minutes
   proving something you already know is broken.
2. Update the inline status after every step.
3. Step 1 formats changed files only. `yarn format` (repo-wide) is never
   correct here.
4. Steps 3 and 5 have verification blocks that a zero exit code does not
   satisfy. Parse the output.
5. Never run Chromatic or `storybook:build` from this command, and never add
   them back. Visual regression is CI's job and CI owns the baseline.
6. "🚀 Ship it!" requires every step ✅ **and** the parsed counts appended. If
   you could not parse a summary, you do not have a pass.
7. When a step's output looks impossible — a failure that does not match the
   code, a summary from a run you did not just do — suspect the harness (a
   failed redirect, a stale log) before reporting the result. Re-run cleanly.
8. Never commit or push as part of this command — it reports, the human
   decides.
9. Never revert someone's uncommitted work to make a step pass. If the fix for
   a red step is "undo what they were doing", say so and let them choose.
