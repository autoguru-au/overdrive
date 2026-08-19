---
description: 'Run Overdrive precommit gates - format, lint, test, build, changeset (+ storybook/Chromatic with --visual)'
disable-model-invocation: true
---

# Precommit Checks

Run each step one at a time, in order. Stop at the first ❌.

## Arguments

- `/precommit` — the default gate: Format, Lint, Test, Build, Changeset.
- `/precommit --visual` — adds Storybook build + Chromatic (steps 6 and 7).
- `/precommit <base-branch>` — compare against that branch instead of the
  auto-detected PR base (used by the Changeset step).

`--visual` is opt-in on purpose. Chromatic snapshots come out of a finite
monthly OSS quota, and `ci.yml` already fires Chromatic once per review round
(on `ready_for_review`, because `pr-auto-draft.yml` re-drafts the PR on every
push). A local run on top of that spends the same quota twice for the same
review. Reach for `--visual` when the diff actually moves pixels — tokens,
sprinkles, layout, a new component — and skip it for logic, types, tests or
docs.

## Steps

| # | Step | Command | Default |
|---|------|---------|---------|
| 1 | Format | `yarn format:staged <changed files>` | ✅ |
| 2 | Lint | `yarn lint` | ✅ |
| 3 | Test | `yarn test:ci` | ✅ |
| 4 | Build | `yarn build` | ✅ |
| 5 | Changeset | git inspection (below) | ✅ |
| 6 | Storybook | `yarn storybook:build` | `--visual` |
| 7 | Chromatic | `yarn chromatic --only-changed` | `--visual` |

Steps 4, 6 and 7 have no PR equivalent in CI — `ci.yml` runs lint and tests
only; `yarn build` runs at publish time and `storybook:build` on release or
manual dispatch. That means a broken Babel build or a story that fails to
compile sails through PR CI green and detonates later. These local steps are
the only gate on that, which is why they belong here rather than in CI.

## Step 0 — establish the base and the changed files

Do this before Step 1; several steps depend on it.

```bash
BASE_BRANCH=""
for ARG in "$@"; do
  case "$ARG" in
    --visual) ;;
    *) BASE_BRANCH="$ARG"; break ;;
  esac
done
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
yarn test:ci 2>&1 | tee /tmp/od-test.log | grep -E "Test Files|Tests  |FAIL "
```

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

## Step 6 — Storybook build (`--visual` only)

```bash
yarn storybook:build
```

Catches stories and MDX that compile in dev but fail a production build —
broken imports, bad args, a component that throws at module scope. Nothing in
PR CI covers this.

❌ on non-zero exit or a build error. Show the failing story file. Warnings
about chunk size are noise, not failures.

## Step 7 — Chromatic (`--visual` only, BLOCKING verification)

First confirm the token, because without it the CLI fails in a way that is
easy to misread as a build problem:

```bash
[ -n "$CHROMATIC_PROJECT_TOKEN" ] || echo "MISSING CHROMATIC_PROJECT_TOKEN"
```

If it is missing, Step 7 is **blocked, not passed**. Report it as ⚠️ with the
fix (export the token, same value as the `CHROMATIC_APP_CODE` repo secret) and
do not claim visual coverage.

Then:

```bash
yarn chromatic --only-changed
```

`--only-changed` is not optional. The `chromatic` package script has no
TurboSnap flag, so a bare run snapshots every story in the library; CI runs
with `onlyChanged: true`, and matching it keeps a local run to the stories your
diff can actually affect. On a finite OSS quota that difference is the whole
ballgame.

**The exit code is meaningless here.** The script hardcodes
`--exit-zero-on-changes`, so a build with fifty unreviewed visual diffs exits
0. Parse the output instead:

- `Build N published` plus a **captured/changed** summary and a build URL → read
  the change count.
- **0 changes** → ✅. Report the snapshot count so the quota spend is visible.
- **N > 0 changes** → ⚠️, never ✅. Print the build URL and say the diffs need
  human review in the Chromatic UI. You cannot judge from the terminal whether
  a visual change is intended, and reporting a green here is exactly the false
  green this step exists to prevent.
- No build URL, an auth error, or no parseable summary → ❌.

## Output format

Show an inline status line, updated after each step:

```
⏳ Format
```

```
✅ Format ✅ Lint ✅ Test ⏳ Build
```

### Success

Only when every step in scope is ✅, append the parsed numbers:

```
✅ Format ✅ Lint ✅ Test (93 files / 926 tests) ✅ Build ✅ Changeset (calendar-ds2026-tokens.md)

🚀 Ship it!
```

With `--visual`:

```
✅ Format ✅ Lint ✅ Test (93 files / 926 tests) ✅ Build ✅ Changeset (tabs-segmented.md) ✅ Storybook ✅ Chromatic (0 changes, 84 snapshots)

🚀 Ship it!
```

When a step was legitimately skipped, say why inline:

```
✅ Format ✅ Lint ✅ Test (93 files / 926 tests) ✅ Build ✅ Changeset (skipped — no publishable source changed)

🚀 Ship it!
```

The counts are mandatory. A "Ship it!" without test counts and the changeset
name (or an explicit skip reason) is malformed — the human reading it has no
way to spot a false green, which is the only thing this line is for.

### Visual diffs pending

Chromatic changes are not a failure, but they are not a pass either:

```
✅ Format ✅ Lint ✅ Test (93 files / 926 tests) ✅ Build ✅ Changeset (tabs-segmented.md) ✅ Storybook ⚠️ Chromatic (12 changes)

⚠️ Review the visual diffs before pushing: <build URL>
```

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
4. Steps 3, 5 and 7 have verification blocks that a zero exit code does not
   satisfy. Parse the output.
5. Steps 6 and 7 run only with `--visual`. Never run Chromatic without
   `--only-changed`.
6. A missing `CHROMATIC_PROJECT_TOKEN` is ⚠️ blocked, not ✅.
7. Chromatic reporting changes is ⚠️ with the build URL, never ✅.
8. "🚀 Ship it!" requires every in-scope step ✅ **and** the parsed counts
   appended. If you could not parse a summary, you do not have a pass.
9. Never commit or push as part of this command — it reports, the human
   decides.
