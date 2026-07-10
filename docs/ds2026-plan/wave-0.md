# Wave 0 — Consolidate in-flight work (execution plan)

> **Parent:** [`../../design-system-2026-migration-plan.md`](../../design-system-2026-migration-plan.md) — this file EXPANDS the master's Wave 0 section (§4 → W0-P1, W0-P2, W0-P3) into a fully executable wave. It never overrides the master; where the real repo diverges from the master's assumptions it is recorded in **§ Deviations & open items** at the bottom, not silently changed.
> **Repo:** `/Users/timamehro/grit/github.com/autoguru/overdrive` · **Base branch for all PRs:** `main` (tip `d429dfc5`).
> **Audience:** an orchestrator running Sonnet-class Spec/Builder/Reviewer/Verify agents that have ONLY the repo + this file + the master plan.
> **Verified against the real diffs on 2026-07-07** (`git diff main...HEAD`, `git diff main...AG-19972-typography`, and an in-memory 3-way `git merge-tree`).

---

## Wave overview

| Package | Title | Model roster | Depends on | Release | OU | Gate expectation |
|---|---|---|---|---|---|---|
| **W0-P1** | Land `feature/AG-19959-overdrive-colour` (colour ramps + `black900` alias + contrast guide) | Builder `sonnet` · Reviewer `opus` · Verify `sonnet` | — | **minor** | OU-3 (Done) | Intended ramp-story Chromatic diffs (reviewed, NOT auto-accepted). **Human sign-off from Tima required before merge.** |
| **W0-P2** | Reconcile + land `AG-19972-typography` (named text styles h1–h4 / p1–p4) | **Builder `opus`** (merge judgement) · Reviewer `opus` · Verify `sonnet` | **W0-P1** | **minor** | OU-4 | Base-theme Chromatic zero-diff; snapshot churn is hash-only + intended default-refactor parity. |
| **W0-P3** | Retire `feat/design-system-2026-palette` (stale branch) | Builder `sonnet` · Reviewer `sonnet` | — (parallel with P1/P2) | **none** | OU-2 | No gates (no code merge). ADR/decision-log entry only. |

**Sequencing.** W0-P1 and W0-P3 are independent and may run in parallel. W0-P2 is blocked on W0-P1 being merged to `main` (it must rebase onto the colour-landed contract). Landing Wave 0 removes the standing 3-way-merge tax on `theme.css.ts` / `base/tokens.ts` and unblocks all of Wave 1 (master §5.1).

**Release-independence note (coupling check).** All three packages publish under the single `@autoguru/overdrive` npm package (master §2.1) — a "release" is independent only if its changeset reaches `publish.yml` on its own. Do **not** open/merge W0-P2's PR to `main` until W0-P1's **Version Packages PR has been merged and published**, not merely W0-P1's feature PR landing on `main`. Otherwise a second changeset queued behind an unmerged Version Packages PR silently collapses into the same npm minor (master Appendix A step 5: "multiple minor changesets merged before the Version Packages PR is merged collapse into one minor bump"), which would make W0-P1 impossible to post-publish-verify in the MFE in isolation. This precondition is repeated in W0-P2's own release section below.

**Independence guarantee.** Each Wave-0 package that ships (W0-P1, W0-P2) publishes as its own minor version and is MFE-verifiable in isolation — pre-publish via the local-link build (`yarn overdrive:local`) and post-publish via a throwaway version bump — via the "Post-release MFE verification" procedure in each package's section below.

**Headline finding that shapes this wave (see § Deviations item D1).** An in-memory 3-way merge of the two feature branches — `git merge-tree --write-tree HEAD AG-19972-typography` (merge base `d429dfc5` = current `main`) — returns **exit 0 with no conflict markers**. The two branches touch **disjoint regions** of both shared files, so there is **no textual git conflict**. The master's W0-P2 phrasing ("which hunks conflict and how to resolve each") does not match reality: the real reconciliation work is (a) **snapshot re-generation** (Vanilla-Extract `__hash` churn, because both branches change the emitted CSS) and (b) **behavioural verification of a default-prop refactor** in `Text.tsx`/`Heading.tsx` that the typography branch introduces. Both are handled explicitly in W0-P2 below.

---

## W0-P1 — Land the colour branch + `black900` alias + contrast guide

### Work order

**Goal.** Verify and merge `feature/AG-19959-overdrive-colour` (25 commits ahead of `main`) to `main`, **plus** add a `black900` deprecated alias so the two MFE files that pass `backgroundColour="black900"` keep resolving after the black ramp's removal.

**Exact files on the branch today (verified — `git diff main...HEAD --stat`).** The branch is already built; W0-P1's *new* code is only the `black900` alias + its guard test + a changeset-wording fix. The branch changes:

Token / theme source (the substantive change):
- `lib/themes/base/colours.ts` — black ramp deleted; green 900/800/500 and blue 400/300/200 revalued to DS-2026 hex (this is the intended OU-3 revalue).
- `lib/themes/base/tokens.ts` — `content.info`→`blue900`, `content.danger`→`red800`, `content.success`→`green900` (AA-safe repoint). **Only lines ~49–56 change.**
- `lib/themes/flat_red/tokens.ts` — black ramp block removed (−11 lines).
- `lib/themes/neutral/tokens.ts` — black ramp removed; green/blue ramps revalued; `intent.primary.background` and `typography.colour.primary` repointed off `black*` onto `gray*`.
- `lib/themes/theme.css.ts` — the nested `black: { 900… }` block deleted from the `colours` contract const (−11 lines, lines ~7–17). **Nothing else in this file changes.**
- `lib/themes/base/contrastGuide.ts` (new, +143) and `lib/themes/base/contrastGuide.spec.ts` (new, +129) — DS-2026 contrast guide as data + WCAG-AA spec.
- `lib/themes/index.ts` — exports `contrastGuide`, `contrastGuideColour`, and its types.

Component `.css.ts` black→gray repoints (they directly referenced now-removed `gamut.black*` vars — **these are NOT in the master's W0-P1 file list; see D4**):
- `lib/components/DateTimeField/DateTimeField.css.ts` — `gamut.black400`→`gray400`, `black300`→`gray300`.
- `lib/components/OptionGrid/OptionGrid.css.ts` — `black900`→`gray900`, `black500`→`gray500`.
- `lib/components/Slider/Slider.css.ts` — `black900`→`gray900`.
- `lib/components/Table/TableCell.css.ts` — `black100`→`gray100`.

Storybook / decorator / stories (docs only): `.storybook/overdriveDecorator.tsx`, `lib/stories/{palette,theme,borders,space}.stories.tsx`, `lib/stories/helpers/styles.css.ts`.

Changeset already on the branch: `.changeset/ds-2026-colour-ramps.md` (type **minor**).

**The new W0-P1 work — the `black900` alias (master §4 W0-P1 + R12).**

Where the Box prop value space lives: the `backgroundColour` Box/sprinkles prop resolves through `lib/styles/sprinkles.css.ts`. The value map is the local const `backgroundColours` (sprinkles.css.ts ~line 50), consumed by `mappedBackgroundColours` → the `backgroundColour: mappedBackgroundColours` property (~line 128):

```ts
const backgroundColours = {
	...intentBackgroundColoursStandard,
	...tokens.colours.gamut,     // <-- black900 USED to arrive here
	transparent: 'transparent',
};
```

`tokens.colours.gamut` is the **flattened** gamut (`buildColourGamut` in `lib/themes/makeTheme.ts:51` joins name+grade, e.g. `gray`+`900` → `gray900`). Before the branch, `gamut.black900` existed and flowed into `backgroundColours`, so `backgroundColour="black900"` resolved. The branch removes the black ramp, so `gamut.black900` is gone and the two MFE call sites would fail to resolve. **The `colour` prop is unaffected** — its map (`colours`, sprinkles.css.ts ~line 66) is built from `colours.foreground` / `typography.colour` / intent foregrounds + white, never from the gamut — so only the `backgroundColour` value space needs the alias.

Exact alias code shape to add to `backgroundColours`:

```ts
const backgroundColours = {
	...intentBackgroundColoursStandard,
	...tokens.colours.gamut,
	/**
	 * @deprecated Use `gray900`. `black900` is retained only as an alias of
	 * `gray900` (#212338 — the DS-2026 "Tarmac Black") so existing
	 * `backgroundColour="black900"` usages keep resolving after the black
	 * ramp was removed. Scheduled for removal in the DS-2026 major (W4-P4).
	 */
	black900: tokens.colours.gamut.gray900,
	transparent: 'transparent',
};
```

The alias's value is `tokens.colours.gamut.gray900` (the same CSS var the gray ramp emits), so the rendered colour is byte-identical to `gray900`. Survey shows **only `black900`** is referenced by MFEs (both via the string prop value, not raw token/CSS-var access), so no other black grade needs an alias.

Guard test (master R12 — "assert `black900` resolves to `gray900`"). Add a deterministic unit spec. Recommended shape: add a **test-only named export** of the alias map so the assertion is exact and cannot silently rot, e.g. in `sprinkles.css.ts`:

```ts
/** Test-only: deprecated colour-value aliases retained until the DS-2026 major. */
export const __deprecatedBackgroundColourAliases = { black900: tokens.colours.gamut.gray900 };
```

then reference it from `backgroundColours` (`...__deprecatedBackgroundColourAliases`) and assert in a new `lib/styles/sprinkles.spec.ts` (model after `lib/themes/base/contrastGuide.spec.ts` — `import { describe, expect, it } from 'vitest'`):

```ts
import { overdriveTokens } from '../themes/theme.css';
import { __deprecatedBackgroundColourAliases } from './sprinkles.css';

describe('deprecated backgroundColour aliases (R12 guard)', () => {
	it('black900 resolves to the gray900 token value', () => {
		expect(__deprecatedBackgroundColourAliases.black900).toBe(
			overdriveTokens.colours.gamut.gray900,
		);
	});
});
```

Acceptable alternative if the Builder prefers not to add a public-module export: a `@testing-library/react` render of `<Box backgroundColour="black900" />` vs `<Box backgroundColour="gray900" />` asserting the generated declaration references the same `--od-color-gamut-gray-900` var. The export-based guard is preferred (deterministic under vitest/jsdom).

**Also reconcile the on-branch changeset (see D3).** `.changeset/ds-2026-colour-ramps.md` currently claims *"The `black*` tokens (and `--od-color-gamut-black-*` CSS vars) are aliased to the `gray` ramp for backwards compatibility."* That is **not true of the code** — the branch *removed* the black contract vars; nothing is aliased until W0-P1 adds the `backgroundColour` alias above. Rewrite the deprecation paragraph to describe the real behaviour: the black ramp and its `--od-color-gamut-black-*` CSS vars are **removed**; only the `backgroundColour="black900"` prop value is retained as a deprecated alias of `gray900`. Keep the changeset type **minor** and align the summary with the master's W0-P1 line.

### Step-by-step implementation sequence (git mechanics)

1. `git checkout feature/AG-19959-overdrive-colour` (do not create a new branch — this is the branch we are landing).
2. Add the `black900` alias to `backgroundColours` in `lib/styles/sprinkles.css.ts` with the `@deprecated` JSDoc + the test-only export, exactly as above.
3. Add the guard spec `lib/styles/sprinkles.spec.ts`.
4. Rewrite the deprecation paragraph of `.changeset/ds-2026-colour-ramps.md` to match the real behaviour (removal + `backgroundColour` alias only).
5. Run the gates yourself (below). Resolve any snapshot churn on `DateTimeField` / `OptionGrid` / `Slider` / `Table` (they were repointed black→gray; if they carry snapshots the class hash changes — see D5) with the stripped-`__hash` procedure, and only then `-u`.
6. Push; ensure the PR (base `main`) is up to date. **Do not merge** until the Reviewer passes AND Tima has signed off in the PR description (below).

> **⚠️ VISUAL BLAST-RADIUS WARNING — CONSCIOUS SIGN-OFF REQUIRED.** Landing AG-19959 changes the legacy ramp **HEX VALUES** (grey/green/blue/yellow/red 100–900 move to the 2026 palette). This **WILL shift rendering across the MFE's 297 `vars.colours.gamut.*` references — plus every component that resolves through those ramps — on the monorepo's next overdrive version bump.** This is an intended, Tima-owned OU-3 decision that predates the additive rule (which binds from Wave 1 onward), but it is the single largest intentional visual change in the whole plan and must not ship as an aside.
>
> **Done-criterion: "Confirm with Tima before merging W0-P1."** Record the sign-off in the PR description. Recommend pairing the merge with an MFE smoke-check of high-traffic screens via `yarn overdrive:local` (`.scripts/copy-overdrive.js`) before the monorepo bumps overdrive.

### Done-criteria

- `black900` present in the `backgroundColour` value space, resolving to `gray900` (#212338), with `@deprecated` JSDoc.
- Guard spec passes (`black900` === `gray900` token value).
- `.changeset/ds-2026-colour-ramps.md` deprecation wording matches real behaviour; type **minor**.
- The two named MFE files (`apps/fcp-booking/.../supplier-list/Badge.tsx:16`, `packages/supported-browser-boundary/.../SupportedBrowsersBoundary.tsx:64`) would still type-check against the alias (Reviewer confirms `black900` is a valid `backgroundColour` value).
- `yarn lint` clean; `yarn test run` green (ramp-story visual diffs acknowledged as intended); `yarn test:a11y` pass.
- PR carries Tima's explicit sign-off note.

### Rollback note

If a gate fails post-merge or the MFE smoke-check surfaces an unacceptable shift: revert the merge commit on `main` (`git revert -m 1 <merge-sha>`), which cleanly restores the pre-2026 ramps and the black contract vars (the branch is self-contained — no other Wave-0 package has landed yet, so nothing depends on it). The `black900` alias and its guard test revert with it. Because W0-P2 depends on W0-P1, a P1 rollback blocks P2 until re-landed.

### OU mapping + dependencies

OU-3 (Colour — marked Done on the board). **Depends on:** none.

### Agent prompts (copy-paste, no placeholders)

**BUILDER — `sonnet`**
```
You are the Builder for W0-P1 — Land the DS-2026 colour branch + black900 alias — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Work ON the existing branch feature/AG-19959-overdrive-colour (git checkout it; do NOT create a new branch, do NOT touch other branches).

HARD RULE (additive/opt-in): Do NOT change the value of any EXISTING token key, do NOT rename/remove any token key beyond the black ramp already removed on this branch, do NOT change any component default prop values or prop semantics, do NOT rename/remove any component directory, do NOT change the shape of the exported ColourMap/ThemeTokens types or any existing elevation value (4 tenant theme packages depend on these). New capability = new keys / new prop values / the ds2026 theme only.
SILENT-FAILURE WARNING: vars.space[...] is used 556x in the consumer monorepo and colours.* 390x with NO compile error on value drift. This package deliberately revalues the legacy colour RAMPS (an intended, Tima-owned OU-3 decision already committed on this branch) — you are NOT to add to that; your only new change is the black900 alias below.

TASK — three edits only (the colour branch is already built):
1. In lib/styles/sprinkles.css.ts add a deprecated black900 alias to the `backgroundColours` const so `backgroundColour="black900"` keeps resolving after the black ramp removal. The Box backgroundColour prop resolves through: backgroundColours -> mappedBackgroundColours -> `backgroundColour: mappedBackgroundColours` (~line 128). Add exactly:
     /**
      * @deprecated Use `gray900`. `black900` is retained only as an alias of
      * `gray900` (#212338) so existing `backgroundColour="black900"` usages keep
      * resolving after the black ramp was removed. Removed in the DS-2026 major.
      */
     black900: tokens.colours.gamut.gray900,
   Place it inside `backgroundColours` (after `...tokens.colours.gamut`, before `transparent`). Also add a test-only named export:
     export const __deprecatedBackgroundColourAliases = { black900: tokens.colours.gamut.gray900 };
   and spread it into backgroundColours (`...__deprecatedBackgroundColourAliases`) so the alias and the tested value are the same object. Do NOT add black900 to the `colours` map (the `colour` prop) — only backgroundColour needs it (survey: both MFE usages are backgroundColour="black900").
2. Add lib/styles/sprinkles.spec.ts (model on lib/themes/base/contrastGuide.spec.ts) asserting:
     expect(__deprecatedBackgroundColourAliases.black900).toBe(overdriveTokens.colours.gamut.gray900)
   (import overdriveTokens from '../themes/theme.css').
3. Rewrite the deprecation paragraph of .changeset/ds-2026-colour-ramps.md: the black ramp and its --od-color-gamut-black-* CSS vars are REMOVED (not aliased); only the `backgroundColour="black900"` PROP VALUE is retained as a deprecated alias of gray900. Keep type: minor.

CONTEXT — do NOT re-fetch Figma; the ramp values are already committed. buildColourGamut (lib/themes/makeTheme.ts:51) flattens gray.900 -> gray900, so tokens.colours.gamut.gray900 is a valid flat key.

Then run gates yourself: `yarn lint`; `yarn test run Box`; `yarn test run Slider`; `yarn test run OptionGrid`; `yarn test run DateTimeField`; `yarn test run Table`; `yarn test:a11y`.
The colour branch's black->gray css.ts repoints (DateTimeField/OptionGrid/Slider/Table) may churn those components' snapshots. Follow the stripped-__hash procedure from master §4.0.1: `git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g'` — if empty, run `yarn test run <Comp> -u` and note "hash-only churn"; if it shows real declaration changes, STOP and report (colour repoint changes those pixels — expected but must be confirmed intended).
Report what you changed, gate results, and the snapshot triage outcome. Do NOT merge; note that Tima sign-off is required first.
```

**REVIEWER — `opus`**
```
You are the adversarial Reviewer for W0-P1 in the Overdrive → DS-2026 migration. Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Inspect branch feature/AG-19959-overdrive-colour vs main.
Produce PASS/FAIL with file:line evidence for each:
1. black900 alias: confirm `backgroundColour="black900"` resolves to gray900. Check lib/styles/sprinkles.css.ts — black900 must be present in the `backgroundColours`/mappedBackgroundColours value space with @deprecated JSDoc, value === tokens.colours.gamut.gray900. FAIL if it is missing, points to a hardcoded hex, or was added to the `colour` map instead.
2. MFE compile safety: confirm the value `'black900'` is a valid `backgroundColour` prop value (so apps/fcp-booking/src/features/fcp-booking-draft-supplier/components/supplier-list/Badge.tsx:16 and packages/supported-browser-boundary/SupportedBrowsersBoundary/SupportedBrowsersBoundary.tsx:64 still type-check). FAIL if the alias is only a runtime value not surfaced in the sprinkles type.
3. Guard test: lib/styles/sprinkles.spec.ts exists and asserts black900 === gray900 token value (R12). FAIL if absent.
4. No OTHER existing token key renamed/removed beyond the black ramp already removed on this branch (diff lib/themes/theme.css.ts + all */tokens.ts). The green/blue ramp revalues + content-token repoints + the 4 css.ts black->gray repoints are the intended OU-3 change — confirm they are the ONLY value changes and no gray/yellow/red key was accidentally revalued beyond the committed set.
5. No component default prop / prop semantics changed; no component directory renamed/removed; no export removed from lib/index.ts / lib/themes/index.ts (index.ts should ADD contrastGuide exports only).
6. No new peer dependency in package.json.
7. Changeset: .changeset/ds-2026-colour-ramps.md type=minor and its deprecation wording matches real behaviour (removal + backgroundColour alias, NOT "black* tokens and CSS vars aliased"). FAIL if it still claims the black CSS vars are aliased.
8. Snapshot triage: confirm the Builder's DateTimeField/OptionGrid/Slider/Table snapshot changes are either hash-only (stripped-suffix diff empty) or the intended black->gray colour repoint, and are not an unrelated regression.
FAIL the review if 1, 2, 3, 5, or 6 is violated.
```

**VERIFY — `sonnet`**
```
You are the Verify agent for W0-P1. On branch feature/AG-19959-overdrive-colour run and report objective results (do not fix):
  yarn lint
  yarn test run Box
  yarn test run Slider
  yarn test run OptionGrid
  yarn test run DateTimeField
  yarn test run Table
  yarn test run sprinkles
  yarn test:a11y
Interpret snapshot failures with the stripped-__hash procedure from master §4.0.1 and state, per component, whether churn is style-identical (hash-only) or a real declaration change. Confirm the R12 guard spec (black900 === gray900) passes. Confirm the CI Chromatic (visual_test) status once the PR is open — expect INTENDED diffs on ramp/palette/theme stories (these are reviewed, NOT auto-accepted; the branch is NOT main so autoAcceptChanges does not apply). Report PASS/FAIL per gate. Do NOT run `-u`. Do NOT start a dev server.
```

### Gates & release

Commands + expected outcomes:
- `yarn lint` → **clean** (eslint + tsc).
- `yarn test run <Box|Slider|OptionGrid|DateTimeField|Table|sprinkles>` → **green**. Snapshot churn on the 4 repointed components is expected; triage with the stripped-`__hash` procedure. The new `sprinkles` guard spec passes.
- `yarn test:a11y` → **pass**.
- **Chromatic (CI `visual_test`):** **intended diffs** on ramp/palette/theme/contrast-guide stories (the 2026 ramp change). **Reviewed and accepted deliberately — NOT auto-accepted.** Branch ≠ `main`, so `autoAcceptChanges:'main'` does not fire; `exitZeroOnChanges` keeps CI green while a human reviews.
- **Changeset:** type **minor**; summary equivalent to *"Adopt DS-2026 colour ramps + 2026 contrast guide; retain `black900` as a deprecated alias of `gray900`."* (align the existing file's wording per step 4).

Release walk-through (master Appendix A): merge PR → `main` (only after Tima sign-off) → `release.yml` opens/updates the **"Version Packages" PR** (bumps `4.59.0`→`4.60.0` if first this cycle) → merge Version Packages PR → `publish.yml` runs `yarn changeset publish` → npm (OIDC) + git tag + GitHub release + Storybook to Pages. The minor does **not** auto-flow to MFEs (single `bun.lock`, manual bump); apps pick it up on the next monorepo-wide overdrive bump. **Merge and publish this Version Packages PR before opening W0-P2's PR** (see wave overview "Release-independence note") so W0-P1 ships as its own minor.

### Post-release MFE verification

**Pre-publish smoke (before merging the Version Packages PR).** Repo: `/Users/timamehro/grit/github.com/autoguru/mfe`.
1. In `overdrive`, on `feature/AG-19959-overdrive-colour`: `yarn build` — must exit 0 (this is also what `overdrive:local` invokes under the hood).
2. In `mfe`, on a scratch branch: `yarn overdrive:local` — runs `node .scripts/copy-overdrive.js`, which shells `yarn build` inside the overdrive checkout and copies `overdrive/dist` + `package.json` into `mfe/node_modules/@autoguru/overdrive/dist`.
3. Check:
   - `apps/fcp-booking/src/features/fcp-booking-draft-supplier/components/supplier-list/Badge.tsx:16` and `packages/supported-browser-boundary/SupportedBrowsersBoundary/SupportedBrowsersBoundary.tsx:64` still compile (`turbo run lint:mfe --filter=@autoguru/fcp-booking --filter=@autoguru/supported-browser-boundary`) and render `black900` as the same colour as `gray900`.
   - **REVIEWED visual pass on high-traffic screens for the intended 2026 ramp shift** — this is the one intentional visual change in Wave 0 (the "⚠️ VISUAL BLAST-RADIUS WARNING" above). This visual pass is evidence *for* that same "Confirm with Tima before merging W0-P1" done-criterion, not a separate approval.
4. Do not start a dev server yourself — confirm one is already running (per project convention), then browse the smoke-checked screens.

**Post-publish verification (after `npm publish`, before/with the monorepo bump).**
1. Confirm the release: `npm view @autoguru/overdrive version` (or the GitHub release) shows the new version (`4.60.0` if this is the cycle's first minor).
2. In `mfe`, on a throwaway branch (e.g. `git checkout -b verify/od-4.60.0-w0-p1`): bump the pinned overdrive version to the published one, then `bun install` (single `bun.lock` — one edit reaches all 100 apps).
3. Repo-wide type-check: `bun run lint:tsgo` (or `turbo run lint:mfe --concurrency=50%` for a full non-`--affected` pass) — must be clean.
4. Targeted checks: re-run the two black900 file checks from step 3 above, this time against the published bits (not the local-link copy), plus the reviewed high-traffic-screen visual pass.
5. Discard the throwaway branch (`git branch -D verify/od-4.60.0-w0-p1`) — do not merge it.

**Rollback.** If verification fails at either stage: do not bump the monorepo. If it has already been bumped, pin `bun.lock` back to the prior version (`4.59.x`) and re-run `bun install` — a single-lockfile edit, since the whole monorepo resolves to one overdrive version (master §0.1).

---

## W0-P2 — Reconcile + land the typography branch (named text styles)

### Work order

**Goal.** Land `AG-19972-typography` (a single commit `995f4766`, +34/+33 on the two shared files, +new stories, +43 updated snapshots) on top of the **colour-landed `main`**, delivering opt-in named text styles `h1`–`h4` (bold) / `p1`–`p4` (normal) without changing any existing rendering.

**Target API (already on the branch — preserve, do not reinvent).** `TypographyProps.size` union widened with `NamedTextStyle = 'h1'|'h2'|'h3'|'h4'|'p1'|'p2'|'p3'|'p4'`; existing numeric sizes `'1'`–`'9'` untouched. Values per master §3.1: h1 40/50, h2 32/40, h3 24/30, h4 20/25, p1 16/22.4, p2 14/19.6, p3 12/16.8, p4 10/14. New exports `TEXT_STYLES`, `NamedTextStyle`, `namedTextStyleMap` from `lib/styles/index.ts` and re-exported from `lib/index.ts`.

**Exact files the branch touches (verified — `git diff main...AG-19972-typography --stat`).**
- `lib/styles/typography.ts` (+65/−) — `TEXT_STYLES`, `NamedTextStyle`, `namedTextStyleMap`, `isNamedTextStyle`, `TypographyProps.size` widened, and the **defaulting refactor** (see the crux below).
- `lib/themes/base/tokens.ts` (+34) — adds `typography.size.{h1..h4,p1..p4}` blocks **at lines ~238–278** (immediately after the `size.9` block).
- `lib/themes/theme.css.ts` (+33) — adds the matching `typography.size.{h1..p4}` contract var names **at lines ~316–355** (after the `size.9` block, before the `colour:` block).
- `lib/styles/index.ts` (+3), `lib/index.ts` (+3) — new exports.
- `lib/components/Heading/Heading.tsx` (2 lines), `lib/components/Text/Text.tsx` (6 lines) — **default-prop refactor** (the behavioural risk — D2).
- `lib/stories/typography.stories.tsx` (+157, new), `lib/stories/typography.mdx` (+76, new), `lib/stories/styling.mdx` (+17).
- **43 `__snapshots__` files** updated (Actions, Alert, Anchor, Badge, Box, BulletText, Button, CheckBox, ColourInput, DividerLine, DropDown, EditableText, HorizontalAutoScroller, Icon, Inline, IntentStripe, LinearProgressIndicator, Meta, MinimalModal, NumberBubble, NumberInput, Pagination, ProgressBar, ProgressBarGroup, Radio, Section, SelectInput, SimplePagination, Stack, StandardModal, StarRating, Stepper, Switch, Table, Tabs, TextAreaInput, TextBubble, TextInput, Tooltip, NotchedBase).
- `.changeset/design-system-2026-typography.md` (type **minor**, already present).

**The actual conflict picture (verified — this replaces the master's "enumerate the conflicting hunks").** There are **NO textual git conflicts** between the two branches. Proof:
- `base/tokens.ts`: W0-P1 changes only lines ~49–56 (`content.{info,danger,success}`); AG-19972 adds only lines ~238–278 (`typography.size` block). Disjoint; W0-P1's change is net-zero-line (3 replaced by 3), so it does not even shift AG-19972's line numbers.
- `theme.css.ts`: W0-P1 removes only the black block (lines ~7–17, top of the `colours` const); AG-19972 adds only in `THEME_CONTRACT.typography.size` (lines ~316–355). Disjoint regions; git 3-way merge matches by content, not line number.
- In-memory verification run 2026-07-07: `git merge-tree --write-tree HEAD AG-19972-typography` → **exit 0, tree `d42c1ba4…`, zero `CONFLICT`/`<<<<<<<` markers.**

So the reconciliation is **not** hunk-resolution. It is two real tasks:

1. **Snapshot re-generation (mechanical, high volume).** The 43 committed snapshots were generated on `AG-19972`'s base = **old `main`** (before the colour branch). Once rebased onto colour-landed `main`, the emitted CSS differs (W0-P1 removed the black ramp → fewer CSS vars → renumbered Vanilla-Extract `__hash` suffixes; AG-19972 itself adds 8 typography vars → also renumbers hashes). The committed snapshots will therefore **not match** freshly-generated ones. This is the master §4.0.1 hash-churn gotcha at scale. Resolve by: run the suite, apply the stripped-`__hash` procedure to confirm each diff is style-identical, then regenerate with `-u`. Any snapshot whose **stripped** diff is non-empty is a real change and must be justified against task 2 or STOP.

2. **Verify the `Text.tsx`/`Heading.tsx` default-prop refactor is byte-identical for un-annotated usages (the crux — D2).** AG-19972 moves default resolution out of the component props into `typography()`/`textStyles()`:
   - `Text.tsx`: removes `size = DEFAULT_TEXT_SIZE` and `weight = DEFAULT_TEXT_WEIGHT` prop defaults; passes bare `size`/`weight` through. `typography()` now applies `DEFAULT_TEXT_SIZE='4'` and `DEFAULT_TEXT_WEIGHT='normal'` as the final fallback (`typography.ts` lines ~114/~120). Net render for `<Text>` with no size/weight must stay size 4 / normal.
   - `Heading.tsx`: removes its own `weight = 'bold'` prop default; relies on `textStyles({ as, … })` where `weight = isHeadingTag(as) ? 'bold' : undefined` supplies bold for heading tags (`typography.ts` textStyles, verified). Net render for `<Heading>` with no weight must stay **bold**.
   This is a behavioural refactor of the **two highest-volume components in the MFE** (Text 2,443 / Heading 473 JSX sites) and is NOT purely additive at the file level, so the Reviewer must prove default parity, not wave it through.

**Do NOT** change `fontWeight.semiBold` (500→600 is master §6-Q6, deferred to the major).

### Step-by-step implementation sequence (git mechanics)

Preconditions: W0-P1 merged to `main`. Choose **rebase** (keeps the single-commit history clean); merge is an acceptable fallback.

1. `git fetch origin && git checkout AG-19972-typography`.
2. Create a safety copy of the branch pointer: `git branch AG-19972-typography-prerebase-backup`.
3. `git rebase main`. **Expect it to apply cleanly** (the merge-tree proved no conflict). If — contrary to the verification — a conflict surfaces in `base/tokens.ts` or `theme.css.ts`, resolve by **keeping both sides**: W0-P1's black-ramp removal + `content.*` repoint AND AG-19972's `typography.size.{h1..p4}` additions (they never overlap; a conflict would only be spurious context). Never drop the colour branch's ramp/contrast work and never drop the typography additions.
4. Build the suite and reconcile snapshots (they were baked on old `main`):
   - `yarn test run` (full) → capture failures.
   - `git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g' > /private/tmp/claude-501/.../scratchpad/stripped.diff` (or any scratch path).
   - If `stripped.diff` has no meaningful `+/-` declaration lines → churn is hash-only → `yarn test run <Scope> -u` to regenerate; note "hash-only churn from colour+typography contract vars" in the PR.
   - If `stripped.diff` shows a real declaration change on any component → it must be explained by the intended default refactor (task 2) on Text/Heading-derived output only; anything else → STOP and report.
5. Confirm `lib/index.ts` / `lib/styles/index.ts` export `TEXT_STYLES`, `NamedTextStyle`, `namedTextStyleMap` (they do on the branch — verify they survived the rebase).
6. Force-push the rebased branch (`git push --force-with-lease`). Keep the changeset `.changeset/design-system-2026-typography.md` (type **minor**).
7. Open/update the PR (base `main`). Gates below.

### Done-criteria

- Rebased onto colour-landed `main` with the colour ramp/contrast work intact **and** the named-style additions intact (Reviewer diff-checks both sides).
- `typography.size` contract has `h1`–`h4` + `p1`–`p4` (contract in `theme.css.ts`, values in `base/tokens.ts`); numeric `'1'`–`'9'` unchanged; `fontWeight.semiBold` unchanged (still 500).
- `<Text>` (no props) renders size 4 / normal; `<Heading>` (no weight) renders **bold** — proven byte-identical to pre-refactor (Reviewer + snapshot).
- All snapshot churn is either hash-only or the intended, listed default-refactor parity; base-theme Chromatic zero-diff.
- New `TEXT_STYLES` / `NamedTextStyle` / `namedTextStyleMap` exported publicly.
- `yarn lint` clean; `yarn test run` green; `yarn test:a11y` pass.

### Rollback note

If a gate fails post-merge: revert the merge/rebase landing commit on `main` (`git revert`). Because the typography change is additive tokens + a self-contained default refactor, reverting restores pre-P2 behaviour without touching W0-P1's colour work. If the *default refactor* specifically is found to shift rendering, the narrower rollback is to restore the `size = DEFAULT_TEXT_SIZE` / `weight = DEFAULT_TEXT_WEIGHT` / `weight = 'bold'` prop defaults in `Text.tsx`/`Heading.tsx` while keeping the additive `namedTextStyleMap` — but only if that still yields correct named-style behaviour (verify). Keep `AG-19972-typography-prerebase-backup` until the release publishes.

### OU mapping + dependencies

OU-4. **Depends on:** W0-P1 (must rebase onto the colour-landed contract).

### Agent prompts (copy-paste, no placeholders)

**BUILDER — `opus`** (opus-tier: merge/reconciliation is judgement-heavy — snapshot triage at scale + proving the default-prop refactor preserves rendering)
```
You are the Builder for W0-P2 — Reconcile + land the DS-2026 typography branch — in the Overdrive → DS-2026 migration. This is an OPUS-tier task because the reconciliation requires judgement: high-volume snapshot triage and proving a default-prop refactor is render-identical.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. PRECONDITION: W0-P1 is merged to main.

HARD RULE (additive/opt-in): the named text styles are ADDITIVE (new size union members + new token keys). Do NOT change fontWeight.semiBold (500 stays — 500->600 is master §6-Q6, deferred). Do NOT change any existing numeric typography size value. Do NOT change any component's DEFAULT rendered output: <Text> with no props must stay size '4' / weight 'normal'; <Heading> with no weight must stay bold. The branch refactors WHERE those defaults are applied (out of Text.tsx/Heading.tsx props into typography()/textStyles()) — your job is to prove the net render is unchanged, not to alter it.

GIT MECHANICS:
1. git fetch; git checkout AG-19972-typography; git branch AG-19972-typography-prerebase-backup.
2. git rebase main. It WILL apply cleanly — verified via `git merge-tree --write-tree HEAD AG-19972-typography` = exit 0, no conflict markers. The two branches touch DISJOINT regions: W0-P1 changed base/tokens.ts lines ~49-56 (content.info/danger/success) and removed the black block in theme.css.ts (~lines 7-17); AG-19972 ADDS typography.size.{h1..p4} to base/tokens.ts (~lines 238-278) and theme.css.ts (~lines 316-355). If a conflict spuriously appears, KEEP BOTH SIDES (colour ramp/contrast work AND the typography additions) — never drop either.
3. The 43 committed __snapshots__ were baked on OLD main (pre-colour). After rebase they will mismatch because both branches renumber Vanilla-Extract __hash suffixes. Reconcile:
   - yarn test run  (full suite) to capture failures.
   - git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g' > /tmp/stripped.diff
   - If stripped.diff has no real declaration +/- lines -> hash-only churn -> yarn test run <Scope> -u to regenerate; note "hash-only churn (colour + typography contract vars)" in the PR.
   - If stripped.diff shows a REAL declaration change on any component, it must be explained ONLY by the intended Text/Heading default refactor being render-identical. Anything else -> STOP and report.
4. Confirm lib/index.ts and lib/styles/index.ts still export TEXT_STYLES, NamedTextStyle, namedTextStyleMap.
5. git push --force-with-lease. Keep .changeset/design-system-2026-typography.md (type minor).

VERIFY THE DEFAULT REFACTOR (do not skip): read lib/styles/typography.ts — `typography()` applies fallback `text = namedStyle?.size ?? size ?? DEFAULT_TEXT_SIZE` and `fontWeight = weight ?? (strong ? 'bold' : namedStyle?.weight ?? DEFAULT_TEXT_WEIGHT)`; `textStyles()` sets `weight = isHeadingTag(as) ? 'bold' : undefined`. Confirm Heading.tsx routes through textStyles with `as` so headings stay bold, and Text with no size/weight stays 4/normal.

Then run: `yarn lint`; `yarn test run` (full); `yarn test:a11y`. Report what changed, gate results, snapshot triage per component, and the default-parity proof.
```

**REVIEWER — `opus`**
```
You are the adversarial Reviewer for W0-P2 in the Overdrive → DS-2026 migration. Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Inspect the rebased AG-19972-typography vs main (colour already landed).
PASS/FAIL with file:line evidence:
1. Both sides intact (R3): the colour ramp revalues + contrast guide (W0-P1) AND the typography additions (h1-h4/p1-p4) both present. Diff base/tokens.ts + theme.css.ts: black ramp still removed, content.info/danger/success still repointed, AND typography.size.{h1..p4} added. FAIL if the rebase reverted either side.
2. Additive typography: numeric sizes '1'-'9' unchanged; fontWeight.semiBold still 500 (NOT 600 — §6-Q6). TypographyProps.size is a widened union, not a replacement. FAIL on any existing-value change.
3. DEFAULT-PROP REFACTOR PARITY (the crux): confirm the Text.tsx/Heading.tsx change (removal of `size = DEFAULT_TEXT_SIZE`/`weight = DEFAULT_TEXT_WEIGHT`/`weight = 'bold'` prop defaults) yields IDENTICAL rendered output for un-annotated usages: <Text> -> size '4' / weight 'normal'; <Heading> -> bold. Trace it through lib/styles/typography.ts (typography() fallback + textStyles() `weight = isHeadingTag(as) ? 'bold' : undefined`). FAIL if any default path now differs (e.g. Heading could go non-bold, or Text default size/weight changes).
4. New exports present in lib/index.ts and lib/styles/index.ts: TEXT_STYLES, NamedTextStyle, namedTextStyleMap. No export removed.
5. Snapshot triage: for every changed snapshot, confirm the stripped-__hash diff is empty (hash-only) OR is the intended, listed default-refactor parity. FAIL if any snapshot carries an unexplained real declaration change.
6. No new peer dependency in package.json. No component directory renamed/removed.
7. Changeset type=minor; summary describes opt-in named styles with no visual change to existing usage.
FAIL if 1, 2, 3, or 6 is violated. Base-theme Chromatic must be zero-diff (this is additive) — confirm.
```

**VERIFY — `sonnet`**
```
You are the Verify agent for W0-P2. On the rebased branch AG-19972-typography run and report objective results (do not fix):
  yarn lint
  yarn test run           (full unit + storybook)
  yarn test:a11y
Interpret snapshot failures with the stripped-__hash procedure (master §4.0.1): `git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g'` — state whether the churn across the ~43 affected components is style-identical (hash-only) or contains real declaration changes, and list any real ones. Confirm base-theme Chromatic (visual_test) is ZERO-diff once the PR is open (additive package). Report PASS/FAIL per gate. Do NOT run `-u`. Do NOT start a dev server.
```

### Gates & release

- `yarn lint` → clean.
- `yarn test run` (full) → green after snapshot reconciliation (hash-only churn + intended default parity).
- `yarn test:a11y` → pass.
- **Chromatic:** **base-theme zero-diff** (additive; opt-in named styles have no existing consumer). New typography stories establish new baselines only.
- **Changeset:** keep `.changeset/design-system-2026-typography.md`, type **minor**, summary *"Add opt-in named text styles (h1–h4, p1–p4)."* (the on-branch wording already matches).

Release walk-through (master Appendix A): **precondition — W0-P1's Version Packages PR is already merged and published** (see wave overview "Release-independence note"; do not merge W0-P2's PR to `main` before that lands, or the two changesets collapse into one npm minor and W0-P1 can no longer be post-publish-verified in isolation). Merge PR → `main` → `release.yml` opens a fresh "Version Packages" PR bumping `4.60.0`→`4.61.0` (its own minor, not batched with W0-P1) → merge it → `publish.yml` → npm/tag/release/Storybook. Additive minor; no MFE auto-flow.

### Post-release MFE verification

**Pre-publish smoke (before merging the Version Packages PR).** Repo: `/Users/timamehro/grit/github.com/autoguru/mfe`.
1. On the rebased `AG-19972-typography` branch: `yarn build` in `overdrive`.
2. In `mfe`, on a scratch branch: `yarn overdrive:local` (`.scripts/copy-overdrive.js` builds `overdrive` and copies `dist` + `package.json` into `mfe/node_modules/@autoguru/overdrive`).
3. Check:
   - `<Text>` / `<Heading>` default rendering is unchanged on 2–3 text-heavy screens (Text 2,443 / Heading 473 usages — spot-check, not exhaustive; pick screens with dense body copy plus headings, e.g. a booking-detail/summary screen and a settings/profile screen).
   - The new `size="h1"…"p4"` values are accepted by `tsc`: add a throwaway usage such as `<Text size="p2">x</Text>` / `<Heading size="h1">x</Heading>` in a scratch file inside `mfe` and confirm it compiles (`turbo run lint:mfe --filter=<the app the scratch file lives in>`), then delete the scratch file.
4. Do not start a dev server yourself — confirm one is already running (per project convention), then browse the spot-checked screens.

**Post-publish verification (after `npm publish`, before/with the monorepo bump).**
1. Confirm precondition: W0-P1 is already published and (if bumped) verified in the MFE per its own section above — W0-P2 must not be the first place a W0-P1 regression surfaces.
2. In `mfe`, on a throwaway branch (e.g. `git checkout -b verify/od-4.61.0-w0-p2`): bump the pinned overdrive version to the published `4.61.0`, then `bun install`.
3. Repo-wide type-check: `bun run lint:tsgo` (or `turbo run lint:mfe --concurrency=50%` for a full non-`--affected` pass) — must be clean.
4. Targeted checks: re-run the Text/Heading spot-check and the `size="h1"…"p4"` scratch-usage compile check from step 3 above against the published bits.
5. Discard the throwaway branch — do not merge it.

**Rollback.** Same single-file `bun.lock` pin-back to the prior version (`4.60.0`, i.e. W0-P1 without W0-P2) if verification fails; because W0-P2 depends on W0-P1 but not vice versa, pinning back to `4.60.0` retains the colour work and only drops the typography additions.

---

## W0-P3 — Retire the stale palette branch

### Work order

**Goal.** Confirm `feat/design-system-2026-palette` (single commit `ce274ca9`) is superseded, delete/archive it (local + origin), and record the decision in the ADR/decision log (OU-25). **No code merge, no release.**

**Evidence it is stale (verified in research + master §2.5).** Its diff vs `main` **deletes SplitButton entirely** and **deletes `lib/stories/iconCategories.ts` (~1,612 lines)**, and it **predates the icons 2.0 Phosphor rename** (icons 2.0.1/2.1.0 are already on `main`). Everything valuable it might have carried (palette direction) is superseded by `feature/AG-19959-overdrive-colour` (W0-P1). It is a merge *anti-source*.

### Step-by-step sequence

1. Confirm nothing unique: `git log --oneline main..feat/design-system-2026-palette` and `git diff main...feat/design-system-2026-palette --stat`. Verify the diff is dominated by deletions of things now on `main` (SplitButton, `iconCategories.ts`) and carries no unique DS-2026 token/component work absent from `main` + the W0-P1 branch.
2. Record the retirement in the ADR/decision log (the G-P1 governance home once it exists; until then, a short entry noting: branch, commit `ce274ca9`, reason superseded by AG-19959 + icons 2.x, date, decider).
3. Delete the branch:
   - Local: `git branch -D feat/design-system-2026-palette` (if a local copy exists).
   - Origin: `/opt/homebrew/bin/gh` or `git push origin --delete feat/design-system-2026-palette`. **Optional archive first** (preferred for auditability): `git tag archive/feat-design-system-2026-palette feat/design-system-2026-palette && git push origin archive/feat-design-system-2026-palette`, then delete the branch. The tag preserves the commit if anyone ever needs it.

> Note: the user's environment shadows `gh` with a shell function — use the absolute path `/opt/homebrew/bin/gh` for any GitHub CLI operation (per project memory).

### Done-criteria

- Diff confirmed to contain nothing unique worth keeping (Reviewer signs off).
- Decision recorded in the ADR/decision log (OU-25).
- Branch deleted on origin (and locally); optionally archived as a tag.

### Rollback note

Trivial: if the branch is ever needed, restore from the `archive/*` tag (or GitHub's branch-restore within its retention window). No code on `main` changes, so there is nothing else to roll back.

### OU mapping + dependencies

OU-2 (housekeeping); decision recorded under OU-25. **Depends on:** none — runs in parallel with W0-P1/P2.

### Agent prompts

**BUILDER — `sonnet`**
```
You are the Builder for W0-P3 — Retire the stale palette branch — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Do NOT switch working branches; do NOT modify code; this is a branch-housekeeping task.
1. Confirm feat/design-system-2026-palette is superseded: run `git log --oneline main..feat/design-system-2026-palette` and `git diff main...feat/design-system-2026-palette --stat`. Verify the diff is dominated by deletions of things now on main (SplitButton, lib/stories/iconCategories.ts) and carries NO unique DS-2026 token/component work missing from main or the W0-P1 colour branch. Report the evidence.
2. Record the retirement decision in the ADR/decision log (or, if the governance doc home does not exist yet, propose the entry text: branch name, commit ce274ca9, reason "superseded by feature/AG-19959-overdrive-colour + icons 2.x; deletes SplitButton and predates icons 2.0", date, decider = Tima).
3. Archive then delete the branch: `git tag archive/feat-design-system-2026-palette feat/design-system-2026-palette && git push origin archive/feat-design-system-2026-palette`, then `git push origin --delete feat/design-system-2026-palette` (use /opt/homebrew/bin/gh if you use the GitHub CLI — plain `gh` is shadowed). Delete any local copy with `git branch -D`.
Report the confirmation evidence and the exact commands you ran. No changeset, no release.
```

**REVIEWER — `sonnet`**
```
You are the Reviewer for W0-P3. Repo: /Users/timamehro/grit/github.com/autoguru/overdrive.
Confirm nothing unique is lost by deleting feat/design-system-2026-palette:
1. Re-run `git diff main...feat/design-system-2026-palette --stat` and spot-check that its changes are deletions of assets already present/renamed on main (SplitButton, iconCategories.ts) and pre-icons-2.0 state — NOT unique unmerged DS-2026 work.
2. Confirm the retirement is recorded in the ADR/decision log.
3. Confirm an archive tag exists before the branch delete (auditability).
PASS/FAIL with evidence. FAIL if the branch holds any unique work not superseded by main + W0-P1.
```

(No Verify agent — there are no code gates. The Reviewer's confirmation is the gate.)

### Gates & release

**None.** No code merged, no changeset, no version bump. The only artefact is the ADR/decision-log entry and the deleted (archived) branch.

### Post-release MFE verification

**n/a, no release.** W0-P3 merges no code and ships no changeset, so there is nothing to build, publish, or bump into the MFE. The Reviewer's confirmation (above) is the entire gate.

---

## Deviations & open items

Recorded here rather than changing course; each reflects the REAL repo diff vs the master's Wave-0 text.

- **D1 — No textual merge conflict between the two branches (contradicts the master's W0-P2 "enumerate the conflicting hunks").** The master directs the executor to enumerate and resolve conflicting hunks on `base/tokens.ts` / `theme.css.ts`. The verified reality: `git merge-tree --write-tree HEAD AG-19972-typography` (merge base `d429dfc5`) returns **exit 0, no conflict markers** — the two branches edit **disjoint regions** (colour: `content.*` at `base/tokens.ts:~49` + black block at `theme.css.ts:~7`; typography: `typography.size` additions at `base/tokens.ts:~238` and `theme.css.ts:~316`). W0-P2 above therefore reframes the reconciliation as (a) large-scale **snapshot re-generation** (hash churn) and (b) **default-prop refactor parity verification**, which is where the real risk lives. The rebase step still carries a "keep both sides" instruction in case a spurious context conflict ever appears.

- **D2 — The typography branch is NOT purely additive at the file level (master says "additive union + new map, MFE impact: none").** `AG-19972` refactors default-prop resolution in `Text.tsx` (removes `size = DEFAULT_TEXT_SIZE`, `weight = DEFAULT_TEXT_WEIGHT`) and `Heading.tsx` (removes `weight = 'bold'`), moving the defaults into `typography()`/`textStyles()`. The net render is *intended* to be identical (defaults now applied downstream; headings still bold via `textStyles({ as })`), but this touches the two highest-volume MFE components (Text 2,443 / Heading 473) and is the true source of the 43 snapshot updates on the branch. W0-P2 adds an explicit Reviewer check + done-criterion proving byte-identical default rendering. Flagged as a risk, not blocked — the mechanism is sound on inspection.

- **D3 — The W0-P1 on-branch changeset overstates the black-ramp handling.** `.changeset/ds-2026-colour-ramps.md` currently claims *"The `black*` tokens (and `--od-color-gamut-black-*` CSS vars) are aliased to the `gray` ramp."* The code does the opposite: the branch **removed** the black contract vars (`theme.css.ts`, `base/colours.ts`, `flat_red`/`neutral` tokens) and, until W0-P1's new work, aliases **nothing**. W0-P1 both implements the real alias (the `backgroundColour="black900"` prop value only) and corrects the changeset wording. Recorded so the discrepancy is fixed deliberately, not perpetuated.

- **D4 — Master's W0-P1 "Files" list is incomplete.** It omits the four component `.css.ts` files the branch had to repoint off the removed black vars (`DateTimeField`, `OptionGrid`, `Slider`, `Table/TableCell`) and the new `contrastGuide.spec.ts`. This wave file lists them so the Reviewer/Verify scope is accurate. (These repoints are value-changing black→gray swaps, e.g. `black400 #ADB1B5` → `gray400`; they are part of the intended OU-3 ramp change.)

- **D5 — Uncommitted snapshot risk on W0-P1's four repointed components.** The colour branch committed **no** `__snapshots__` changes, yet it repointed four components' `.css.ts` from `gamut.black*` to `gamut.gray*` (different CSS vars → different class hashes → potential snapshot churn) and revalued several ramp grades. W0-P1's Builder/Verify must run those four components' specs and reconcile any churn with the stripped-`__hash` procedure before merge; do not assume the absence of committed snapshot diffs means the suite is green on those components.

- **D6 — `black900` alias lives in the Box prop value space, not the token contract.** Per the master's own W0-P1 note and the measured MFE usage (both hits are the string prop value `backgroundColour="black900"`, zero raw `var(--od…)` usage), the alias is added to `backgroundColours` in `lib/styles/sprinkles.css.ts` (which flows into the `backgroundColour` Box prop), **not** back into `THEME_CONTRACT.color.gamut`. The contract-key removal stands (0 raw-token MFE usage). This matches the master's intent; recorded for clarity because the two live in different files.

- **D7 — `git merge-tree` writes loose objects.** The verification merge (`--write-tree`) writes tree/blob objects into the object DB but touches **no ref and no working tree** (read-only w.r.t. branch state, per the task's "do not modify code" constraint). No cleanup required; the objects are unreferenced and will be GC'd.
