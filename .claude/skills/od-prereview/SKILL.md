---
name: od-prereview
description: Review a PR for Overdrive (OD) design system compliance before it goes up for review. Use this when a designer or engineer marks a PR "ready for review", asks to run the OD compliance check, or wants to know whether their styling changes follow Overdrive standards without breaking downstream MFEs. Runs static checks only — no visual snapshots, no pre-commit hooks. Trigger it at the ready-for-review stage, not on every save.
---

# Overdrive Pre-Review Compliance Check

This skill checks a PR against Overdrive design system standards so the author can catch problems *before* a human reviewer sees it. It runs at the **ready-for-review** stage — after the work is done, not on every commit. It is intentionally cheap and repeatable: it does static analysis only and never triggers visual snapshot runs.

The goal is to reduce back-and-forth on review by confirming four things up front: styling goes through OD, tokens are reused (not duplicated or hardcoded), touched components still build and pass their tests, and nothing breaks the MFEs that consume them.

## When to run

Run when the author says the PR is ready for review, or explicitly asks for the OD check. Do **not** wire this into a pre-commit hook — it would fire far too early and just annoy the author on every save. Do **not** run `yarn chromatic` or any visual-diff tooling as part of this skill; that is a separate, gated step that happens later, and this repo is on a metered Chromatic snapshot quota.

## Repo shape you're working in

Two facts drive every command below:

- **This repo is the Overdrive library alone.** Source lives under `lib/` — there is no `apps/` or `packages/` directory here. Anything that greps `apps/` in *this* repo will silently return nothing.
- **The consuming MFEs live in a separate repo**, by default a sibling at `../mfe`, with ~99 apps under `apps/`. Check 4 has to cross that repo boundary or it will report "no impact" for a genuinely breaking change.

Token surface, for Checks 1 and 2:

| What | Where |
|---|---|
| Token contract (names) | `lib/themes/theme.css.ts` → `overdriveTokens` via `createGlobalThemeContract` |
| Concrete values | `lib/themes/base/tokens.ts`, `lib/themes/base/colours.ts` |
| Per-brand themes | `lib/themes/{base,neutral,flat_red}/theme.css.ts` via `createTheme` |
| Sprinkles utilities | `lib/styles/sprinkles.css.ts` (see `.claude/commands/sprinkles.md`) |
| Idiom in components | `import { overdriveTokens as vars } from '../../themes/theme.css'` |

## Scope the diff first

Get the set of files the PR actually touches, so every check runs against the diff and not the whole repo.

```bash
git fetch origin main --quiet
BASE=origin/main...HEAD
git diff --name-only $BASE
```

From that list, identify style-bearing files (`*.css.ts`, theme files), changed components under `lib/components/`, and any raw `.css` / `.scss` / inline `style={{ }}` additions.

Most checks need **added lines with real file:line numbers**. Piping `git diff` straight into `grep -n` numbers the *diff stream*, not the file, which gives the author useless line numbers. Use this helper instead — it walks hunk headers and emits true `file:line:content`:

```bash
added() {  # added <base> [pathspec...]
  git diff -U0 "$@" | awk '
    /^\+\+\+ b\// { file = substr($0, 7); next }
    /^@@/ { match($0, /\+[0-9]+/); ln = substr($0, RSTART+1, RLENGTH-1); next }
    /^\+/ { print file ":" ln ":" substr($0,2); ln++ }
  '
}
```

Then work through the four checks in order. Report each as **pass / fail / needs a look**, with the specific file and line so the author can jump straight to it. Don't just say "found custom CSS" — say where.

## Check 1 — No custom CSS

All styling must go through Overdrive components, sprinkles, and tokens. Raw CSS defeats the point of the design system: it drifts from the tokens, doesn't respond to theme changes, and can't be centrally updated.

Flag anything in the diff that is:
- A new or modified plain `.css` or `.scss` file
- An inline `style={{ ... }}` prop with literal values
- A `*.css.ts` rule that sets a visual property (color, spacing, radius, typography, shadow) to a **literal** instead of a token — e.g. `color: '#1a1a1a'`, `padding: '12px'`, `fontSize: '14px'`

Structural / layout-only properties that OD doesn't tokenize (`display`, `position`, `overflow`, `flexDirection`, non-tokenized `zIndex`) are fine — don't flag those. The target is *visual* values that should come from a token.

```bash
# literal colours and dimensions in style files, excluding comments and story/test scaffolding
added $BASE -- 'lib/**/*.css.ts' ':!lib/stories' ':!lib/test' \
  | grep -vE ':[0-9]+:[[:space:]]*(//|\*|/\*)' \
  | grep -iE "#[0-9a-f]{3,8}\b|rgba?\(|['\"][0-9.]+(px|rem|em)['\"]"

# new or modified raw stylesheets
git diff --name-only $BASE -- '*.css' '*.scss'

# new inline style props
added $BASE -- '*.tsx' '*.jsx' | grep -F 'style={{'
```

Two exclusions in that first command are deliberate, and dropping them makes the check noisy enough that authors stop trusting it:

- **Comment lines are skipped.** Token definitions are routinely documented with the hex they resolve to (`// gray900 (#212338 — DS-2026 "Tarmac Black")`). Those are correct code and must not be flagged.
- **`lib/stories/` and `lib/test/` are skipped.** Story helpers are demo scaffolding, not shipped surface, and legitimately use literals.

For each real hit, the fix is to route the value through `vars.*`, a sprinkles prop, or an OD component prop rather than the literal.

## Check 2 — Tokens are reused, not duplicated

Overdrive defines token *names* in a `createGlobalThemeContract` and token *values* per theme. The failure mode here isn't just hardcoded values (Check 1) — it's someone defining a *new* token that duplicates one that already exists, or picking a near-miss value that should map to an existing token.

```bash
# new or changed token declarations and theme wiring
added $BASE -- 'lib/themes/**' 'lib/styles/**' \
  | grep -E 'createTheme|createGlobalTheme|createGlobalThemeContract|^[^:]+:[0-9]+:[[:space:]]*[a-zA-Z]+:'
```

For each new token or theme value:
- Confirm it isn't a rename/duplicate of an existing name in `lib/themes/theme.css.ts`.
- Confirm the value it resolves to isn't already covered. Search `lib/themes/base/colours.ts` and `tokens.ts` for the same value — if `vars.colours.*` already resolves to that hex, the new token is a duplicate and should be dropped in favour of the existing one.
- New tokens are legitimate when they represent a genuinely new semantic role (a new brand theme value via `createTheme`, a new intent), not a second name for something OD already has.

When flagging a suspected duplicate, name the existing token it collides with so the author can just swap to it. A near-miss that is *intentional* (a Figma value that deliberately differs from the legacy token) is a pass — but it should carry a note in the PR saying so, because the next reviewer will ask.

## Check 3 — Touched components build and pass their tests

Use the repo's own scripts — there is no bare `tsc --noEmit` script here.

```bash
yarn lint:tsc                     # tsc --noEmit --skipLibCheck
yarn lint:eslint                  # eslint over lib/**, --fix --quiet

# tests for touched components only, not the whole suite
yarn test run ComponentName       # repeat per changed component
```

Derive the component list from the diff (`lib/components/<Name>/`) and run only those. Running the full suite at pre-review is slow and unnecessary. Report any type error or failing test with the file and the failure message.

Note that `yarn lint:eslint` writes fixes (`--fix`). If the author wants a read-only check, run `yarn eslint "lib/**/*.+(ts|tsx)" --quiet` instead. Do **not** run `yarn format` — it reformats the whole repo and drags ~30 unrelated files of pre-existing drift into the diff; format only the paths this PR touches.

## Check 4 — MFE impact and breaking changes

~78 of the MFE apps import Overdrive. A change that's fine in isolation can still break a consumer if it alters a component's public API. This check answers two questions: *which MFEs use the changed components*, and *is the change backwards-compatible*.

Locate the MFE repo first, and if it isn't there, report this check as **needs a look** — never as a pass:

```bash
MFE=${OD_MFE_REPO:-../mfe}
[ -d "$MFE/apps" ] || echo "MFE repo not found at $MFE — Check 4 cannot run; set OD_MFE_REPO"
```

Do not grep for the bare import path. `from '@autoguru/overdrive'` is a barrel import used by 78 apps, so it tells you nothing about which apps touch *your* component. Match actual usage of the component identifier:

```bash
# consumers of a specific component — JSX usage or a named import
C=Button
grep -rlE "<${C}[[:space:]/>]|\b${C}\b[,[:space:]]*\}" "$MFE/apps" \
  --include='*.tsx' --include='*.ts' 2>/dev/null \
  | sed 's|.*/apps/\([^/]*\)/.*|\1|' | sort -u
```

That distinguishes real blast radius from noise — on a recent check `Button` resolved to 41 apps while a brand-new `FilterChip` resolved to 0.

Also check deep imports, which break on file moves even when the barrel export is untouched:

```bash
grep -rn "@autoguru/overdrive/\(components\|themes\|utils\|hooks\)/" "$MFE/apps" \
  --include='*.tsx' --include='*.ts' 2>/dev/null | grep -F "$C"
```

Then classify the change to each touched component's public surface:

- **Backwards-compatible** (safe): added an optional prop, added a new variant, internal-only style refactor, new additive token. No consumer action needed.
- **Breaking** (flag loudly): removed or renamed a prop, changed a prop's type, changed a default that alters rendered output, removed a variant, renamed or moved an export, renamed a token in the contract. Every consuming MFE needs to be listed and the author warned that those MFEs must be updated in lockstep or the change gated behind a major version bump and a changeset.

Renaming a token in the contract counts as breaking even though it looks internal — MFEs import `@autoguru/overdrive/themes/theme.css` directly (~240 references) and read `vars.*` themselves.

A global restyle is a breaking change even when the API is untouched: DS changes ship as additive, opt-in tokens, never as a silent global reskin of every MFE.

For each breaking change, output the component, what broke, and the list of consuming MFEs. That list is the blast radius the reviewer needs to see.

## Output format

Summarize as a short checklist the author can paste into the PR description:

```
## OD pre-review check
- [ ] Check 1 — No custom CSS: <pass / N issues, see below>
- [ ] Check 2 — Token reuse (no duplicates): <pass / N issues>
- [ ] Check 3 — Build + tests on touched components: <pass / fail>
- [ ] Check 4 — MFE impact: <no breaking changes / breaking — blast radius listed / needs a look>

### Issues
<file:line — what to fix, one per line>

### MFE blast radius (if any breaking changes)
<component → consuming MFEs>
```

Keep the write-up tight. Point to the exact file and line for every issue so the author can act immediately, and lead with anything that would actually block review (breaking changes, failing build) rather than burying it under the cosmetic stuff. If a check was skipped or couldn't run, say so explicitly — a check reported as passing when it never executed is worse than no check at all.
