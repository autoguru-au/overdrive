# Wave 3 — Opt-in restyles (execution plan)

> **Parent plan:** [`../../design-system-2026-migration-plan.md`](../../design-system-2026-migration-plan.md) — this file **expands** that document's Wave 3 (W3-P0 + sub-waves 3a/3b/3c). It never overrides it. Where this file and the master disagree, the master wins and the discrepancy is logged in [Deviations & open items](#deviations--open-items).
> **Repo:** `@autoguru/overdrive` @ `4.59.0` · branch `feature/AG-19959-overdrive-colour`.
> **Audience:** Sonnet-class Spec/Builder/Reviewer/Verify agents whose ONLY inputs are this repo, this file, and the master plan. Everything an executor needs is inlined; no Figma/chat/research-note access is assumed.

---

## 0. Overview & how to execute Wave 3

Wave 3 turns the additive foundation (Waves 0–1) and the semantic colour contract (Track C) into **opt-in restyles** of the existing components. The non-negotiable constraint from the master (§1, §3, Golden rule §0):

- **Base default is pixel-identical.** Every existing MFE screen renders byte-for-byte the same until the single Wave-4 major. Chromatic **zero-diff on base-theme stories** is the hard gate for every package.
- **The quad, with a SPEC step.** Every restyle package runs **Spec → Builder → Reviewer → Verify** (§4.0.2 of the master). Spec (the only Figma-enabled agent) writes `docs/ds2026-specs/<Component>.md` so the Builder never touches Figma.
- **New capability is additive only.** New look arrives via (a) the opt-in `ds2026` theme carrying 2026 token values, and/or (b) **new prop *values*** added to existing unions with `defaultVariants`/defaults **unchanged**. Nothing that flips a default or renames/removes a prop, token key, or directory ships before Wave 4.
- **Track C repoint folds into each restyle.** A component is "2026-capable" only once it is (a) repointed off legacy `colours.*`/`typography.colour`/legacy-sprinkles onto semantic `color.*` tokens (Track C, §4.C of the master) and (b) the `ds2026` theme carries the Figma values for those tokens. Base carries the value-preserving (legacy) value. The value-split rule, the token-collision rule, and the Golden-rule exception (§4.C) are restated in every Builder/Reviewer prompt below.
- **§6 open questions are designed around, not resolved here.** Especially **Q5** (Button 7-intent → 3-Class mapping and the fate of `variant`): this file adds the new `class`/`style` axes *additively alongside* `variant`, never resolves the eventual mapping. It flags the collision for Reviewer scrutiny.

### 0.1 Execution order within the wave

1. **W3-P0 first — it blocks everything.** It creates the `ds2026` theme scaffold (a pure passthrough clone of base; applying it is a visual no-op) and ratifies the opt-in ADR. No restyle or Track C repoint can proceed without it, because they write `ds2026/tokens.ts` overrides.
2. **C-P1 (sprinkles parity) next** — a Track-C prerequisite owned by the master, not re-specified here. It ensures every legacy sprinkles colour value has a semantic equivalent at the identical base value. Restyle packages that repoint sprinkles-driven components assume C-P1 has landed.
3. **Then the three sub-waves, parallelised** per §0.6 below. Within a sub-wave, packages that touch **shared files serialise** (notably every 3b input package touches `private/InputBase` — see §0.6).

### 0.2 The dependency shape for every restyle package

Each `W3a/3b/3c-*` package **Depends on:** `W3-P0` (theme scaffold + ADR) **+ its own Track C repoint** (folded into the same PR unless a standalone C-package already landed it) **+ the relevant Wave-1 token packages** (`W1-P1` semantic colours; `W1-P2` button colours for W3a-P1/W3c-P2; `W1-P3` radius/shadow/spacing for any shape/elevation work). This matches the master §5.2 row "W3a/3b/3c-* → W3-P0, paired C repoint, relevant W1 tokens".

### 0.3 The additive-classification method (apply to every mapping table)

For each Figma variant/axis of a component, classify it:

- **additive-now** — can ship in this wave because it is *either* a brand-new prop value added to an existing union (legacy default preserved) *or* a colour/radius/shadow value delivered purely through the `ds2026` theme. Base is untouched.
- **major-only** — cannot ship additively because it would flip an existing default, change existing prop semantics, or remove a prop/value. It is documented in the package's "Major-only deferrals" list and belongs to Wave 4 (W4-P4). Do **not** implement it now.

The litmus test: *"If I set no new props and stay on the base theme, does the component render exactly as it does on `main`?"* If any change makes the answer "no", that change is major-only.

### 0.4 Gates (identical for every package — from master §4.0.1)

```bash
yarn lint                      # eslint + tsc — MUST be clean
yarn test run <Scope>          # unit + storybook vitest for the touched component(s)
yarn test run <Scope> -u       # ONLY after Reviewer confirms churn is hash-only or intended
yarn test:a11y                 # storybook a11y project — MUST pass
# Chromatic runs in CI (visual_test) — the source of truth for visual diffs.
```

**Snapshot-churn procedure (mandatory):** a token/style edit renumbers Vanilla-Extract `__hash` suffixes → mass style-identical diffs. Strip suffixes before concluding a diff is real:

```bash
git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g' > /tmp/stripped.diff
# Empty stripped.diff ⇒ hash-only churn ⇒ safe to -u, note "hash-only churn" in the PR.
# Non-empty ⇒ a real declaration change ⇒ must be intended; for base-theme additive work it MUST be empty.
```

**Chromatic policy:** additive packages are **zero-diff on base-theme stories**; intended visual deltas appear **only on `ds2026`-theme stories** (new stories added by this wave). Never `autoAcceptChanges` off `main`.

### 0.5 Release & OU (per package)

- **Release:** one **minor** changeset per component (`.changeset/<slug>.md`, type `minor`), per master Appendix A. Summary form: *"Restyle `<Component>` for DS-2026 (opt-in via ds2026 theme + additive prop values); repoint onto semantic colour tokens (base pixel-identical)."*
- **OU mapping** (master §8.1): W3a → **OU-8/OU-34**; W3b → **OU-8**; W3c → **OU-9/OU-10/OU-11**. W3-P0 → **OU-25/OU-2**. (Resolve the OU-8/OU-34 overlap before scheduling W3a — master §8.2.)

### 0.6 Parallelisation & shared-file serialisation

| Group | Packages | Parallel? | Shared-file hazard |
|---|---|---|---|
| **3a** | Button, CheckBox, Radio, Switch, StarRating | Button is independent; CheckBox/Radio/Switch share visual language & the `size`/`color` axis pattern but live in separate dirs → parallel-safe. StarRating independent. | None cross-package (each owns its dir). |
| **3b** | TextInput/TextArea, Compound field, Select/DropDown, Selection input group, Date set, Slider/Stepper | **SERIALISE all input packages on `private/InputBase`.** TextInput, TextAreaInput, SelectInput (and Compound field, Selection-input-group) all render through `private/InputBase` — its restyle/repoint must land **once, first (W3b-P1)**, then the others rebase onto it. Slider/Stepper and the Date set are independent of InputBase and may run in parallel. | `lib/components/private/InputBase/*`, `lib/styles/sprinkles` (via C-P1). |
| **3c** | Badge, TextLink, Tooltip, Tabs, Toggles, Pagination, Toast/Alert, Progress/Loaders | All independent dirs → fully parallel. Pagination (W3c-P6) must coordinate token/story naming with the Wave-2 Pagination-picker (W2-P10) since they augment the **same dir**. | `lib/components/Pagination/*` shared with W2-P10. |

**Suggested wave order:** `W3-P0` → `C-P1` → **3a**: Button, then CheckBox+Radio+Switch (parallel), StarRating → **3b**: W3b-P1 (InputBase+TextInput/TextArea) first, then Select/DropDown, Slider/Stepper, Selection-input-group, Compound field, Date set → **3c**: all parallel (Badge, TextLink, Tooltip, Tabs, Toggles, Pagination, Toast/Alert, Progress) — schedule Alert & ProgressSpinner early (mandatory Track C repoint, highest 3c legacy counts).

---

## W3-P0 — ADR: the opt-in vehicle (`ds2026` theme + additive prop values)

**Blocks:** every W3a/3b/3c restyle and every Track C `ds2026/tokens.ts` write. **Depends on:** Wave 1 (master §5.2: `W3-P0 → W1-P1`). **OU:** OU-25/OU-2. **Release:** minor — *"Add opt-in ds2026 theme scaffold + adoption mechanism (no default change)."*

### W3-P0.1 — ADR skeleton (pre-filled from the master's grounded reasoning)

Write this ADR into the governance docs home (G-P1 / `docs/adr/` per master §4 G-P1). Pre-filled content:

**Title:** ADR-00XX — Opt-in vehicle for DS-2026 restyles.

**Status:** Accepted (ratifies master §W3-P0).

**Context.**
- The release pipeline has **no partial-rollout mechanism** (master §2.1): every merged changeset ships in the next version, and the MFE monorepo pins overdrive to **one version in a single `bun.lock`** (master §0.1). So a published minor reaches all 100 apps at once when the monorepo bumps — opt-in must live in the **API/token design**, not release engineering.
- **`ThemeOverrideProvider` is fiction as an adoption vehicle:** it has **ZERO MFE usage** and is a deprecated no-op alias of `FallbackProvider` (`lib/components/.../FallbackProvider.tsx:7-13`; master §2.4, §W3-P0). `OverdriveProvider` is mounted **once per app across 99 files** with theme selection scattered (most apps ride the default base theme, no explicit `theme=`).
- Two colour systems coexist (master §2.2): legacy `colours.*` (390 MFE refs) and the incomplete semantic `color.*` (1 MFE ref). Track C completes the semantic layer via value-preserving repoints.

**Decision.**
1. **Value-expressible changes (colour / radius / shadow / spacing)** ride a **new opt-in `ds2026` theme** — a new dir `lib/themes/ds2026/` mirroring `base`/`flat_red`/`neutral` exactly. It ships initially as a **pure passthrough** (a `deepmerge(baseTokens, {})` clone) so applying it is a visual no-op; each restyle/Track-C package adds its own token overrides.
2. **Structural changes (Button pill-default, Class×Style matrix, new sizes/states)** ride **new prop *values* added to existing unions**, with `defaultVariants` and all existing defaults **unchanged until the major**.
3. **Adoption is per-app theme swap + per-component new prop values** (master §W3-P0):
   - *Per-app:* set `<OverdriveProvider theme={ds2026Theme}>` at each app's single mount point (99 mechanical, codemod-able sites — W4-P1). Flips a whole app to 2026 at once.
   - *Per-component:* new prop values opt a single instance into the 2026 look while the app stays on base.
   - *Plumbing points needing a `ds2026` flavour:* the 4 tenant theme packages + `apps/cb-portal` + `apps/ag-merchant-finder` (tenant-theme migration = W4-P6). Recommend a shared MFE theme wrapper so a future swap touches 1 file not 99.

**Consequences.**
- Base defaults never move before the major; MFE screens are pixel-identical by default (the product-owner constraint, master §1).
- The `ds2026` theme is the single place that carries real 2026 values; Track C's value-split rule keeps base = legacy value while `ds2026` = Figma value.
- The eventual major (W4-P4) flips defaults, folds `ds2026` into base, and deletes the legacy dual system.
- A component is only 2026-capable once repointed (Track C) **and** `ds2026` carries its Figma values — restyle packages must do both.

### W3-P0.2 — The exact `ds2026` theme scaffold (real code)

The scaffold mirrors `flat_red` (a `deepmerge` theme with **no** global-theme/light selector — only `base` declares `createGlobalTheme`). Four files + two registrations.

**File 1 — `lib/themes/ds2026/tokens.ts`** (initially a passthrough; restyle/Track-C packages extend the second `deepmerge` arg):

```ts
import deepmerge from 'deepmerge';

import { tokens as baseTokens } from '../base/tokens';
import type { ThemeTokens } from '../theme.css';

/**
 * DS-2026 opt-in theme tokens.
 *
 * Ships as a pure passthrough of base so that applying <OverdriveProvider theme={ds2026Theme}>
 * is a visual no-op until restyle / Track C packages add their 2026 overrides here.
 *
 * Each restyle package adds its component's Figma values (plan §3.1) to the override object
 * below (the `ds2026/tokens.ts[T] = V_2026` half of the §4.C value-split rule).
 */
export const tokens = deepmerge(baseTokens, {
	// (empty on scaffold; restyle packages add color.*, border.radius.*, elevation.* overrides here)
}) satisfies ThemeTokens;
```

**File 2 — `lib/themes/ds2026/theme.css.ts`** (mirror `flat_red/theme.css.ts`; the master allows an optional `createGlobalTheme` on `[data-od-theme=ds2026]` — **omit it on the scaffold** to keep the theme opt-in via class only, matching flat_red/neutral, and avoid a `:root`-level global that could leak):

```ts
import { createTheme } from '@vanilla-extract/css';

import { themeTokensWithLayer } from '../makeTheme';
import { overdriveTokens } from '../theme.css';

import { tokens } from './tokens';

export const ds2026ThemeClass = createTheme(
	overdriveTokens,
	themeTokensWithLayer(tokens),
	'OD_ds2026',
);
```

**File 3 — `lib/themes/ds2026/index.ts`** (identical shape to `base/index.ts` / `flat_red/index.ts`):

```ts
import { overdriveTokens } from '../theme.css';

import { ds2026ThemeClass } from './theme.css';
import { tokens } from './tokens';

export default {
	name: 'ds2026Theme',
	themeRef: ds2026ThemeClass,
	vars: overdriveTokens,
	tokens,
};
```

**Registration 1 — `lib/themes/index.ts`** (add the import, the named re-export, and the `themes[]` entry):

```ts
import { default as baseTheme } from './base';
import { default as ds2026Theme } from './ds2026';       // ADD
import { default as flatRedTheme } from './flat_red';
import { default as neutralTheme } from './neutral';

export { default as baseTheme } from './base';
export { default as ds2026Theme } from './ds2026';        // ADD
export { default as flatRedTheme } from './flat_red';
export { default as neutralTheme } from './neutral';

export const themes = [baseTheme, ds2026Theme, flatRedTheme, neutralTheme]; // ADD ds2026Theme
// …existing contrastGuide / overdriveTokens / type re-exports unchanged…
```

**Registration 2 — `package.json` `exports`** (add a `./themes/ds2026` block mirroring `./themes/base`, placed before the `./themes/*` wildcard so it wins):

```jsonc
"./themes/ds2026": {
	"types": "./dist/themes/ds2026/index.d.ts",
	"default": "./dist/themes/ds2026/index.js"
},
```

**`sideEffects` note:** the `package.json` `sideEffects` array already globs `./lib/themes/**/*` and `./dist/themes/**/*` (verified lines 88/90), so the new `ds2026/*.css.ts` is covered automatically — **no `sideEffects` edit needed**. Reviewer confirms the glob covers the new dir.

**Do NOT** add `createGlobalTheme` targeting `:root` for ds2026 (that would apply it by default and break pixel-identity). Applying ds2026 is strictly opt-in via `theme={ds2026Theme}` on a provider, or a nested `<OverdriveProvider theme={ds2026Theme}>`.

### W3-P0.3 — How nested providers scope CSS vars (documented from `OverdriveProvider.tsx`)

Verified in `lib/components/OverdriveProvider/OverdriveProvider.tsx`:

- The provider renders a wrapping `<div className={theme.themeRef} data-od-component="provider">` (`:166-172`). `theme.themeRef` is the vanilla-extract class from `createTheme` (e.g. `ds2026ThemeClass`). **CSS vars are scoped to that div's subtree**, so a **nested** `<OverdriveProvider theme={ds2026Theme}>` re-declares the `overdriveTokens` vars for its children only — this is the real per-subtree override path (the ADR's "per-component/per-screen" opt-in without swapping the whole app).
- **Body-level theming caveat (`:135-147`):** unless `noBodyLevelTheming` is set, the provider also adds `theme.themeRef` to `document.body`. With **nested** providers the inner one will also try to toggle the body class — for scoped opt-in, mount the inner provider with **`noBodyLevelTheming`** so it only themes its own subtree and does not fight the app-level provider over the body class. The ADR must call this out; the W3-P0 stories demonstrate a nested `ds2026` provider with `noBodyLevelTheming` wrapping one component while the page stays on base.
- `theme` defaults to `baseTheme` (`:115`); `theme.vars` is always `overdriveTokens` (same contract object for every theme — only the *values* differ per theme class), so the contract is stable across themes and only the resolved CSS-var values change.
- `colorOverrides` → `useColorOverrides` → `assignInlineVars` inline style on the same div (`:121,168`) is an existing finer-grained override path; the ADR notes it but the 2026 vehicle is the theme, not per-var inline overrides.

### W3-P0.4 — Pixel-identical proof procedure (the W3-P0 done-gate)

Because the scaffold adds a theme but changes no base value, adding it must be **provably** a no-op on base:

1. **Token diff:** `git diff lib/themes/base/tokens.ts lib/themes/theme.css.ts` must be **empty** (W3-P0 adds only the `ds2026/` dir + two registrations; it touches no base value and no contract key).
2. **Passthrough proof:** `ds2026/tokens.ts` is `deepmerge(baseTokens, {})` → assert `deepEqual(ds2026Theme.tokens, baseTheme.tokens)` in a unit test committed with the package (a guard so a later package that adds overrides here is a conscious act). Alternatively assert the override object is `{}` on the scaffold.
3. **Snapshot churn:** run the stripped-`__hash` procedure (§0.4). Adding a new `createTheme` call renumbers hashes globally → expect **hash-only** churn; stripped diff must be empty.
4. **Chromatic:** all existing **base-theme** stories must be **zero-diff**. New `ds2026` stories may exist but on the scaffold they render identically to base (passthrough), so even those should be zero-diff vs a base render.
5. **Nesting proof:** a Storybook story mounting `<OverdriveProvider theme={ds2026Theme} noBodyLevelTheming>` around one component, inside a page on base, renders identically (passthrough) and does not alter the surrounding base content — proves scoping works before any real overrides exist.

### W3-P0.5 — Agent prompts (fully filled)

**SPEC** — *not required for W3-P0* (no Figma surface; the scaffold is pure infra). Skip the Spec agent for this package only.

**BUILDER** (`opus` — infra + ADR judgement):
```
You are the Builder for W3-P0 — "Add opt-in ds2026 theme scaffold + adoption ADR" — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feature/ds2026-w3p0-theme-scaffold off main (do not touch other branches). Do NOT switch off feature/AG-19959-overdrive-colour's lineage per the orchestrator; create your branch from the current main tip.

HARD RULE (additive/opt-in): Do NOT change the value of any existing token key, do NOT rename/remove any token key, do NOT change any component default prop or prop semantics, do NOT rename/remove any component directory, do NOT change the shape of ColourMap/ThemeTokens or any existing elevation value. New capability = the new ds2026 theme only. If you cannot do it additively, STOP and report.

FILES TO CREATE:
  - lib/themes/ds2026/tokens.ts     (deepmerge(baseTokens, {}) passthrough — see TARGET SHAPE)
  - lib/themes/ds2026/theme.css.ts  (createTheme only, class 'OD_ds2026' — mirror flat_red/theme.css.ts)
  - lib/themes/ds2026/index.ts      (default export { name:'ds2026Theme', themeRef, vars: overdriveTokens, tokens } — mirror flat_red/index.ts)
  - docs/adr/ADR-ds2026-opt-in-vehicle.md  (the ADR skeleton from wave-3.md §W3-P0.1)
  - a passthrough guard test asserting ds2026Theme.tokens deep-equals baseTheme.tokens
  - ds2026 Storybook story demonstrating a NESTED <OverdriveProvider theme={ds2026Theme} noBodyLevelTheming> scoping (renders identical to base on the scaffold)
FILES TO MODIFY:
  - lib/themes/index.ts     (import + named re-export + add ds2026Theme to themes[])
  - package.json            (add "./themes/ds2026" export block BEFORE the "./themes/*" wildcard)
DO NOT edit package.json "sideEffects" — the "./lib/themes/**/*" and "./dist/themes/**/*" globs already cover the new dir.

TARGET SHAPE (implement exactly the code in wave-3.md §W3-P0.2): tokens.ts = deepmerge(baseTokens, {}) satisfies ThemeTokens; theme.css.ts = createTheme(overdriveTokens, themeTokensWithLayer(tokens), 'OD_ds2026'); index.ts default export shape identical to flat_red/index.ts with name 'ds2026Theme'. Do NOT add createGlobalTheme / a :root or [data-od-theme=ds2026] global selector.

STEPS:
  1. Read lib/themes/flat_red/{tokens,theme.css,index}.ts and lib/themes/base/index.ts as the exact template.
  2. Create the four ds2026 files + guard test + story.
  3. Register in lib/themes/index.ts and package.json.
  4. Prove pixel-identity per wave-3.md §W3-P0.4 (empty base token diff; passthrough deep-equal; stripped-hash churn empty; nesting story identical).
DONE-CRITERIA: `git diff lib/themes/base/tokens.ts lib/themes/theme.css.ts` is empty; ds2026Theme.tokens deep-equals baseTheme.tokens; new ./themes/ds2026 export resolves; nested-provider story renders identical to base; gates green.

Then run gates yourself: `yarn lint`; `yarn test run themes`; `yarn test:a11y`. Follow the stripped-suffix snapshot procedure (expect hash-only churn — do not blanket -u). Report what changed, gate results, and any assumption.
```

**REVIEWER** (`opus`):
```
You are the adversarial Reviewer for W3-P0. Inspect branch feature/ds2026-w3p0-theme-scaffold. Produce PASS/FAIL with file:line evidence:
1. Did any EXISTING token key change value or get renamed/removed? Diff lib/themes/theme.css.ts + all lib/themes/*/tokens.ts — MUST be NO (base/tokens.ts and theme.css.ts diffs empty).
2. Did any component default prop / prop semantics change? MUST be NO (W3-P0 touches no component).
3. Any component dir renamed/removed, or export removed from lib/index.ts / lib/components/index.ts? MUST be NO.
4. Was any :root or global createGlobalTheme added for ds2026 (which would apply it by default)? MUST be NO — ds2026 must be class-only (createTheme), so it stays opt-in.
5. Any new peer dependency in package.json? MUST be NO. (deepmerge & @vanilla-extract/css already deps.)
6. PKG-SPECIFIC: (a) Prove pixel-identical-by-default: ds2026Theme.tokens deep-equals baseTheme.tokens (run the guard test); the override object in ds2026/tokens.ts is {}. (b) Verify <OverdriveProvider> nesting scopes vars correctly: the div className={theme.themeRef} at OverdriveProvider.tsx:166-172 re-declares vars for its subtree; the story uses noBodyLevelTheming so the nested provider does not fight the body class. (c) Confirm "./themes/ds2026" export block is present and precedes "./themes/*"; confirm sideEffects globs already cover lib/themes/ds2026. (d) themes[] in lib/themes/index.ts includes ds2026Theme.
7. Base-theme Chromatic MUST be zero-diff (scaffold is a passthrough). Confirm the Builder's stripped-hash triage is empty.
FAIL if any of 1–5 is violated or 6a fails.
```

**VERIFY** (`sonnet`):
```
You are the Verify agent for W3-P0. On branch feature/ds2026-w3p0-theme-scaffold, run and report (do not fix):
  yarn lint
  yarn test run themes
  yarn test:a11y
Interpret snapshot failures with the stripped-__hash procedure (plan §4.0.1) — a new createTheme renumbers hashes globally, so expect hash-only churn; state whether churn is style-identical or a real diff. Confirm CI Chromatic (visual_test) is zero-diff on base stories once the PR is open. Report PASS/FAIL per gate.
```

### W3-P0.6 — Done-criteria
- `lib/themes/ds2026/` exists with the four files; `ds2026Theme` registered in `themes[]` and exported from `lib/themes/index.ts`; `./themes/ds2026` in `package.json` exports.
- `ds2026Theme.tokens` deep-equals `baseTheme.tokens` (passthrough guard test green).
- `git diff` of `base/tokens.ts` and `theme.css.ts` empty; base-theme Chromatic zero-diff.
- ADR committed under `docs/adr/`; nested-provider scoping story present.
- Gates green (hash-only churn accepted with note).

---

## Shared prompt boilerplate (used by every W3a/3b/3c package)

Every restyle package runs the **quad**. The Spec/Builder/Reviewer/Verify prompts below each **prepend** one of these concrete boilerplate blocks, then add the package-specific body given in that package's section. The blocks are literal text (not placeholders); paste them verbatim.

**[SPEC-BOILERPLATE]**
```
You are the Spec agent for this Overdrive → DS-2026 restyle package.
You have Figma MCP access to file ZkQlQcJkF7NTnZomVrPRN5 ("AutoGuru Design System 2026"). Extract a spec the Builder can implement WITHOUT Figma:
1. get_screenshot for each node listed below (attach to the spec file).
2. get_design_context / get_metadata per node: per-variant dimensions, paddings, gaps, border radii, border widths, icon sizes, typography styles, and state deltas (Default/Hover/Pressed/Disabled/Selected/Filled/Active/Error as applicable).
3. Map every colour surface to a §3.1 token key from the master plan (design-system-2026-migration-plan.md §3.1): record `surface → token key → hex`. Source hex from BOUND VARIABLES, never drawn swatch labels. If a colour has no §3.1 token, FLAG it — do NOT invent a token.
4. Write docs/ds2026-specs/<Component>.md (create the dir if missing): screenshot ref, variant×property table, surface→token mapping, ambiguities flagged for the Reviewer.
Commit the spec file with the package PR. Write NO component code.
```

**[BUILDER-BOILERPLATE]**
```
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Create the package branch off main; touch no other branch.

HARD RULE (additive/opt-in): Do NOT change the value of any existing token key; do NOT rename/remove any token key; do NOT change any component's default prop VALUES or prop semantics (extend unions only; leave defaultVariants and prop defaults unchanged); do NOT rename/remove any component directory; do NOT change the shape of ColourMap/ThemeTokens or any existing elevation value. New capability = new prop VALUES with legacy defaults preserved + the ds2026 theme only. If you cannot do it additively, STOP and report.

TRACK C EXCEPTION (the ONLY sanctioned break of the hard rule): a semantic color.* key INTRODUCED BY WAVE 1 MAY be revalued in lib/themes/base/tokens.ts per the master §4.C value-split rule, PROVIDED you prove (a) zero MFE usage of that key path — grep /Users/timamehro/grit/github.com/autoguru/mfe for the key and paste the (empty) output into the PR — and (b) Chromatic base-theme zero-diff. Legacy colours.*, typography.colour, space, radius, elevation 1–5 are NEVER revalued — no exception.

VALUE-SPLIT RULE (Track C repoint, deterministic): for each repointed token T — base/tokens.ts[T] = V_legacy (the exact value the component renders TODAY for that surface) when repointing an existing component and V_2026 ≠ V_legacy; ds2026/tokens.ts[T] = V_2026 (Figma hex, master §3.1) ALWAYS. Grey-derived tokens have V_2026 == V_legacy post-W0-P1 so base = Figma is fine for them.

TOKEN-COLLISION RULE: before assigning base[T], grep lib/themes/base/tokens.ts for T. If T already carries a repoint-assigned V_legacy(A) and this component's V_legacy(B) differs: do NOT overwrite. Resolve in order — (1) repoint B onto a different existing semantic token whose base already equals V_legacy(B); (2) if Figma genuinely maps B to T, defer B's colour delta to ds2026 (base keeps A's value, B looks 2026-correct only under ds2026); (3) only if B has no restyle, add a component-scoped token color.<component>.<role> (base=V_legacy(B), ds2026=V_2026) and record it in master §6.

SILENT-FAILURE WARNING: vars.space[...] is used 556× and colours.* 390× in the MFE with NO compile error on value drift. Only ADD keys; never renumber/revalue existing space/radius/elevation/colour keys.

ADDITIVE-CLASSIFICATION: implement ONLY the rows marked "additive-now" in the mapping table below. Rows marked "major-only" are deferred to Wave 4 — do NOT implement them (do not flip any default).

STORIES: keep every existing base story rendering identically; ADD ds2026 stories (wrap in <OverdriveProvider theme={ds2026Theme} noBodyLevelTheming>) that show the new look. Import ds2026Theme from '../../themes' (or the barrel).

Then run gates yourself: yarn lint; yarn test run <Scope>; yarn test:a11y. Follow the stripped-__hash snapshot procedure (master §4.0.1) — base-theme stripped diff MUST be empty. Report changes, gate results, assumptions.
```

**[REVIEWER-BOILERPLATE]**
```
You are the adversarial Reviewer. Inspect the Builder's branch. PASS/FAIL with file:line evidence for each:
1. Did any EXISTING token key change value or get renamed/removed? (diff lib/themes/theme.css.ts + all lib/themes/*/tokens.ts) — must be NO, with ONE exception: a Track C revalue of a Wave-1 semantic color.* key per §4.C, ONLY if the PR records (a) mfe-repo grep proving zero usage and (b) Chromatic base zero-diff. Legacy colours.*/typography.colour/space/radius/elevation changes = automatic FAIL.
2. Did any component default prop VALUE or prop semantics change (defaultVariants, prop defaults)? — must be NO. New prop VALUES added to unions are fine.
3. Was any component dir renamed/removed, or any export removed from lib/index.ts / lib/components/index.ts? — must be NO.
4. Is every ds2026 hex sourced from the master §3.1 VARIABLE tables (not swatch labels)? Flag mismatches to §6.
5. Any new peerDependency in package.json? — must be NO.
6. COLLISION CHECK: for every token this package assigns in base/tokens.ts, grep base/tokens.ts to confirm it was not already assigned a different V_legacy by an earlier repoint; confirm the value-split (base=V_legacy, ds2026=V_2026) holds per repointed token.
7. Base-theme Chromatic MUST be zero-diff; confirm the Builder's stripped-hash base diff is empty. ds2026 stories may diff (intended).
8. PACKAGE-SPECIFIC CHECKS: <see the package section>.
FAIL if any of 1–5 or the package-specific checks are violated.
```

**[VERIFY-BOILERPLATE]**
```
You are the Verify agent. On the package branch, run and report (do not fix): yarn lint; yarn test run <Scope>; yarn test:a11y. Interpret snapshot failures with the stripped-__hash procedure (master §4.0.1); state whether churn is style-identical or a real diff (base-theme must be style-identical). Confirm CI Chromatic (visual_test) status once the PR is open: base stories zero-diff, ds2026 stories intended-delta. Report PASS/FAIL per gate.
```

**Grep helper the Track C repoint uses** (Builder runs this per repointed key to satisfy the exception evidence):
```bash
grep -rIn "color\.<namespace>\.<key>" /Users/timamehro/grit/github.com/autoguru/mfe   # expect zero hits
```

---

## Sub-wave 3a — Buttons & controls (`710:3712`)

**Packages:** W3a-P1 Button · W3a-P2 CheckBox · W3a-P3 Radio · W3a-P4 Switch · W3a-P5 StarRating. **Parallelisation:** Button independent; CheckBox/Radio/Switch parallel (separate dirs, shared `color`/`size` axis pattern); StarRating independent. All depend on **W3-P0 + W1-P1 + W1-P2 (Button, StarRating) + W1-P3 (radius/shape) + their C repoint**.

> **Note on the CheckBox/Radio/Switch shared "green/black" axis:** Figma models Checkbox/Radio/Switch identically — `State × Color{Green,Black} × Size{Large,Small} × Selected × Enabled`. Today all three render a single black/gray look (their accent is `colours.foreground.body` = gray900). The `color:'green'|'black'` and `size:'large'|'small'` **prop axes are net-new** and default to the current look ("black", current size), so they are **additive-now**. The green look and any size change to the default are delivered via new prop values + ds2026 tokens; flipping the default is major-only.

### W3a-P1 — Button (`362:2275`) · Builder `opus` (mapping is ambiguous — §6-Q5)

**(a) Current API** (`lib/components/Button/Button.tsx`, `Button.css.ts`):

| Prop | Type / values | Default | Ref |
|---|---|---|---|
| `variant` | `'primary'\|'brand'\|'secondary'\|'danger'\|'information'\|'warning'\|'success'` (→ recipe `intent`) | `'secondary'` (component passes it; recipe `defaultVariants.intent='primary'`) | `Button.tsx:137`, `Button.css.ts:113-208,410-415` |
| `size` | `'small'\|'medium'\|'xsmall'` | `'medium'` | `Button.tsx:135`, `css.ts:72-99` |
| `rounded` | `boolean` → recipe `shape:'rounded'` (borderRadius `pill`) | `false` | `Button.tsx:70,135`, `css.ts:102,224` |
| `minimal` | `boolean` | `false` | `Button.tsx:133`, `css.ts:212-221` |
| `isFullWidth` | `boolean` | `false` | `Button.tsx:66,131` |
| `isLoading` | `boolean` | `false` | `Button.tsx:65,130` |
| `withDoubleClicks` | `boolean` | `false` | `Button.tsx:71,138` |
| `disabled`,`as`,`type`,`localeText`, picked aria | native | — | `Button.tsx:41-76` |

- **Styling:** vanilla-extract **`recipe()`** `button` (`css.ts:27-416`) with variants `size`/`shape`/`intent`/`minimal`/`rounded`/`isFullWidth`/`isLoading` + `compoundVariants` + `defaultVariants` (`:410-415`).
- **`shape` is internal-only** (derived `'iconOnly'|'rounded'|'default'`, `Button.tsx:166-169`); base default `borderRadius:'md'` (`css.ts:31`).

**(b) Figma target axes** (node `362:2275`, frame `396:7105`; research-figma line 45): `Class{Primary,Secondary,Critical} × Style{Solid,Outlined,Ghost} × Size{Large,Small,Extra small} × Shape{Square,Round} × Icon{None,Left,Right,Icon only} × State{Default,Hover,Pressed,Disabled}`. Ships: Primary=Solid+Outlined; Secondary=Outlined+Ghost; Critical=Solid+Outlined. **No Medium size.** Button colours come from `color.button.*` (master §3.1 button table; W1-P2).

**(c) Current→Figma mapping + classification:**

| Figma axis/value | Current equivalent | Classification | Action |
|---|---|---|---|
| `Class{Primary,Secondary,Critical}` | 7-intent `variant` | **additive-now** as a NEW `class` prop; **major-only** to remove/remap `variant` | Add `class?: 'primary'\|'secondary'\|'critical'` union; do NOT touch `variant`. §6-Q5 owns the eventual 7→3 mapping — do not resolve. |
| `Style{Solid,Outlined,Ghost}` | none (intents bake fill+border) | **additive-now** new `style` prop | Add `style?: 'solid'\|'outlined'\|'ghost'`. |
| `Shape{Square,Round}` | `rounded` boolean (Round=pill) | Round= **additive-now** (already `rounded`); making Round the default = **major-only** | Keep `rounded`; optionally add `shape?:'square'\|'round'` alias mapping to existing internal shape, default unchanged. |
| `Size{Large,Small,Extra small}` | `small\|medium\|xsmall` | **additive-now** add `'large'`; **major-only** to drop `medium`/rename | Add `'large'` to the size union (new compoundVariant dims); keep `medium` default. |
| `Icon{None,Left,Right,Icon only}` | icon handled via children + internal `iconOnly` shape | **additive-now** if exposed as new prop values; else no-op | Add `iconPosition?:'left'\|'right'` if Spec shows geometry deltas; iconOnly already internal. |
| `State{Hover,Pressed,Disabled}` | recipe pseudo-states | **additive-now** via ds2026 `color.button.*` values | Delivered through ds2026 token overrides, not new props. |
| Colours | `colours.intent.*` | Track C repoint (below) | base=legacy, ds2026=`color.button.*`. |

**Major-only deferrals (do NOT implement):** flipping default `shape` to round; making the new `class` model replace `variant`; removing `medium`; the 7→3 intent collapse (§6-Q5).

**(d) Track C repoint scope** (master §9.1: Button = 3 direct refs; C-P/3a-P1):
- `Button.css.ts:11` `intentColors = vars.colours.intent` — all 7 intents' `background.standard/strong/mild` + `foreground` + `secondary.border` (`css.ts:116-408`).
- `css.ts:217` `vars.typography.colour.neutral` (minimal base); `css.ts:335` `vars.typography.colour.secondary` (secondary minimal hover).
- **Old→new mapping (repoint the primary/secondary/critical surfaces the new `class`/`style` use; leave the untouched legacy intents on `colours.intent.*` until the major since §6-Q5 is unresolved):**

| Surface (new class/style) | Old legacy ref | New semantic token | base (V_legacy) | ds2026 (V_2026) |
|---|---|---|---|---|
| primary solid fill | `intent.primary.background.standard` (green600 `#01C68C`… see note) | `color.button.primary.solid.default` | current green600 | `#71EDC2` |
| primary solid hover | derived | `color.button.primary.solid.hover` | current hover | `#36E5AA` |
| primary solid pressed/border | `intent.primary.border` | `color.button.primary.solid.pressed`/`.border` | current | `#01C68C` |
| primary outlined text/border | — | `color.button.primary.outlined.text`/`.border` | current | `#18856F` |
| critical solid fill | `intent.danger.background.standard` | `color.button.critical.solid.default` | current red | `#E12E28` |

> **Note:** the exact `V_legacy` per surface is whatever the recipe resolves TODAY (read `base/tokens.ts` intent values). The Spec agent records the precise current hex per surface. `color.button.linkedText.*` and any WIP-namespace token are **excluded** until §6-Q3 resolves (master W1-P2).

**(e) ds2026 token overrides** (`lib/themes/ds2026/tokens.ts`, added to the deepmerge object): set `color.button.primary.solid.{default:#71EDC2,hover:#36E5AA,pressed:#01C68C,border:#01C68C}`, `color.button.primary.outlined.{border:#18856F,text:#18856F}`, `color.button.critical.solid.default:#E12E28`. Radius: ds2026 Button uses `border.radius.small`(=8px)/round → confirm from Spec; base stays `md`.

**(f) Proposed TS (additive unions — append, do not replace):**

> **⚠ NAMING COLLISION — do NOT ship props named `class` or `style`.** Both Figma axis names collide in React: **`style` is the universal React pass-through prop typed `CSSProperties`** — redefining it as a string union on ButtonProps breaks/conflicts with every consumer passing inline styles and confuses tsc/tooling; **`class`** risks confusion with DOM `className`/JSX. **Primary recommendation: `buttonClass` + `buttonStyle`** (symmetric, unambiguous). Alternates the W3a-P1 Builder+Reviewer may choose instead: `tone`/`fill`, or `kind`/`appearance`. Whichever pair ships, **the final prop NAMES MUST be recorded in the G-P1 ADR log** — the W4-P1 MFE codemod reads its target prop names from its JSON config, so the ADR-recorded names propagate directly into the wave-4 codemod configuration. (Elsewhere in this file, "class/style axes" refers to the Figma axes; the shipped prop names are the ADR-recorded ones.)

```ts
// Button.css.ts recipe variants — ADD (do not remove intent/size/shape):
export type ButtonClass = 'primary' | 'secondary' | 'critical';   // NEW, no default set (undefined = legacy variant path)
export type ButtonStyle = 'solid' | 'outlined' | 'ghost';          // NEW
export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';  // ADD 'large'; default stays 'medium'
// Button.tsx props — ADD (names per the ADR decision; primary recommendation shown):
buttonClass?: ButtonClass;   // when set, opts into the DS-2026 Class×Style model (ds2026 colours); when unset, legacy `variant` path is used unchanged
buttonStyle?: ButtonStyle;   // paired with `buttonClass`. NEVER `style` — that shadows React's CSSProperties prop
iconPosition?: 'left' | 'right';  // only if Spec shows geometry deltas
```

**(g) Done-criteria:** new `class`/`style`/`large`/(iconPosition) prop values exist and are typed; `variant`, `size` default `medium`, `shape` default, `defaultVariants` unchanged; base Chromatic zero-diff; ds2026 stories show Class×Style look; repointed surfaces render byte-identical on base; §6-Q5 explicitly NOT resolved (noted in PR).

**Prompts (prepend the shared boilerplate blocks; Builder `opus`):**
- **SPEC:** `[SPEC-BOILERPLATE]` + `Node IDs: 362:2275 (frame 396:7105). Component: Button. Axes to capture: Class{Primary,Secondary,Critical} × Style{Solid,Outlined,Ghost} × Size{Large,Small,Extra small} × Shape{Square,Round} × Icon × State{Default,Hover,Pressed,Disabled}. Record the exact current base hex per surface by reading lib/themes/base/tokens.ts colours.intent. Spec file: docs/ds2026-specs/Button.md.`
- **BUILDER:** `[BUILDER-BOILERPLATE]` + `Package W3a-P1 Button. Branch feature/ds2026-w3a-p1-button. Scope=Button. Implement ONLY the additive-now rows in wave-3.md §W3a-P1(c): add ButtonClass/ButtonStyle unions + 'large' size; add the new Class/Style/iconPosition props using NON-COLLIDING names — NEVER 'style' (shadows React's CSSProperties pass-through) and not bare 'class'; primary recommendation buttonClass/buttonStyle, alternates tone/fill or kind/appearance (§W3a-P1(f)). Record the chosen prop names in the G-P1 ADR log — the W4-P1 MFE codemod reads its target prop names from its JSON config, so the ADR-recorded names feed the wave-4 codemod configuration. DO NOT touch variant, defaultVariants, or default shape. Fold in the Track C repoint per §W3a-P1(d) (value-split; base=current intent value, ds2026=color.button.* from §3.1). Add ds2026 token overrides per §W3a-P1(e). Do NOT resolve §6-Q5 (7→3 intent mapping) — leave legacy intents on colours.intent.* untouched. Add ds2026 stories for Class×Style. INLINE_DATA = master §3.1 button table + docs/ds2026-specs/Button.md.`
- **REVIEWER:** `[REVIEWER-BOILERPLATE]` + `Package-specific: (a) confirm defaultVariants (size:medium, shape:default, intent:primary, minimal:false) UNCHANGED at Button.css.ts:410-415; (b) confirm variant union still has all 7 intents; (c) confirm the new Class/Style props are NEW optional props with no default, and FAIL the review if any shipped prop shadows React's built-in 'style' (CSSProperties) or uses bare 'class' without an ADR-recorded justification; confirm the chosen prop names are recorded in the G-P1 ADR log (they feed the W4-P1 codemod JSON config); (d) confirm §6-Q5 is NOT resolved (legacy intents still route through colours.intent.*); (e) confirm color.button.* base values equal the current rendered intent values (value-split).`
- **VERIFY:** `[VERIFY-BOILERPLATE]` (Scope=Button).

### W3a-P2 — CheckBox (`438:15383`) · Builder `sonnet`

**(a) Current API** (`lib/components/CheckBox/CheckBox.tsx`): `checked` (def false), `disabled` (def false), `isIndeterminate` (def false), `name`, `value` (req), `children`, `onClick`, `onChange`, `className`. **No size/color props.** Icon hardcoded `size="medium"` (`tsx:81`). Styling: **`styleVariants()`** `checkbox{default,selected}` (`CheckBox.css.ts:17-43`) + `style()` `icon`. Uses shared `private/CheckableBase`.

**(b) Figma axes** (node `438:15383`): `State × Color{Green,Black} × Size{Large,Small} × Selected × Enabled`.

**(c) Mapping + classification:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| `Color{Green,Black}` | single look (accent=`colours.foreground.body`=gray900 → "black") | **additive-now** new `color` prop, default `'black'` | Add `color?:'green'\|'black'` (default `'black'`). Green accent from ds2026/green tokens. |
| `Size{Large,Small}` | fixed `space['6']` (24px) | **additive-now** new `size` prop, default = current | Add `size?:'small'\|'large'` (default = whichever matches current 24px; Spec confirms which Figma size == current, likely `large`). |
| `Selected` | `checkbox.selected` | already exists | no change |
| `State/Enabled` | disabled prop | exists | ds2026 colour deltas only |

**Major-only deferrals:** flipping default `color` to green or default `size`.

**(d) Track C repoint** (master §9.1: CheckBox 3 direct refs; C-P/3a-P2): `CheckBox.css.ts:9-11` `colorAccent=colours.foreground.body`, `colorContrast=colours.background.body`, `colorMid=colours.background.neutral`. Plus shared `CheckableBase.css.ts:9` `colours.background.body`, `:15` `typography.colour.dark` (dead `intent.primary.background.strong` at `:50,53`).

| Old ref | New semantic token | base (V_legacy) | ds2026 (V_2026) |
|---|---|---|---|
| `colours.foreground.body` (gray900) | `color.foreground.primary` | `#212338` (grey-derived → V_2026==V_legacy) | `#212338` |
| `colours.background.body` (white) | `color.background.default` | `#FFFFFF` | `#FFFFFF` |
| `colours.background.neutral` (gray300) | `color.border.default` | `#D4D9DD` | `#D4D9DD` |

> Grey-derived → base=Figma is safe (zero drift post-W0-P1). The **green** accent is a NEW ds2026-only value tied to the `color:'green'` prop (e.g. `color.button.primary.*` green or `color.gamut.green.*`) — Spec maps the exact green surface; do not overwrite the black default.

**(e) ds2026 overrides:** foreground/background/border grey tokens already equal Figma (no override needed if base already carries them post-W1-P1). Green-variant surfaces: add whatever green token the Spec identifies (likely `color.gamut.green.600/300`), scoped to the `color:'green'` variant styles — not a base default change.

**(f) Proposed TS:**
```ts
// CheckBox.tsx props — ADD:
color?: 'green' | 'black';   // default 'black' (current look)
size?: 'small' | 'large';    // default matches current 24px box (Spec confirms name)
```
Implement by extending `styleVariants` into a small `recipe()` OR adding `styleVariants` keyed by color/size, defaulting to current. Keep `checkbox.default`/`.selected` semantics.

**(g) Done-criteria:** `color`/`size` props exist, default to current look; base Chromatic zero-diff; ds2026 + `color:'green'` story shows green; repoint byte-identical on base.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 438:15383. Component CheckBox. Capture State×Color{Green,Black}×Size{Large,Small}×Selected×Enabled; record which Figma size equals the current 24px box. Spec: docs/ds2026-specs/CheckBox.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3a-P2. Branch feature/ds2026-w3a-p2-checkbox. Scope=CheckBox. Add color/size props (defaults preserve current look) per §W3a-P2(c,f); repoint per §W3a-P2(d) (grey-derived, base=Figma). Green accent is ds2026/variant-only. ALSO repoint the shared private/CheckableBase refs IF and only if W3a-P3 (Radio) has not already — coordinate: whichever of CheckBox/Radio runs first repoints CheckableBase; the second confirms no re-assignment (collision rule). INLINE_DATA=§3.1 + docs/ds2026-specs/CheckBox.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: default color='black' & default size == current 24px; checkbox.default/selected unchanged; CheckableBase repoint done once (no double-assignment).` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=CheckBox).

> **Shared-file coordination (CheckableBase):** CheckBox and Radio both consume `private/CheckableBase`. The CheckableBase repoint must land in exactly ONE of W3a-P2/W3a-P3 (whichever runs first) and the other confirms via the collision rule. Recommend doing it in **W3a-P2 (CheckBox)** and having W3a-P3 depend on it.

### W3a-P3 — Radio (`438:15441`) · Builder `sonnet`

**(a) Current API** (`lib/components/Radio/Radio.tsx`, `RadioGroup.tsx`): Radio `value` (req), `className`, `disabled`, `children` — checked derived from `RadioGroup` context. RadioGroup: `name` (req), `value` (req), `onChange`, `className`, `children`. **No size/color props.** Styling: bare **`style()`** only (`Radio.css.ts`: `radio`/`radioSelected`/`inner`/`innerSelected`); selected via `clsx`. Uses `CheckableBase`.

**(b) Figma axes** (`438:15441`): same as CheckBox — `State × Color{Green,Black} × Size{Large,Small} × Selected × Enabled`.

**(c) Mapping:** identical pattern to CheckBox — add `color?:'green'|'black'` (default `'black'`) and `size?:'small'|'large'` (default = current, outer `space['6']`=24px, inner `space['3']`). Additive-now; default flips major-only.

**(d) Track C repoint** (master §9.1: Radio 3 direct refs; C-P/3a-P3): `Radio.css.ts:9-11` same trio (`colours.foreground.body`, `colours.background.body`, `colours.background.neutral`) → same mapping as W3a-P2(d). CheckableBase already repointed by W3a-P2.

**(e) ds2026 overrides:** same grey tokens (already Figma); green variant tokens per Spec.

**(f) Proposed TS:** `color?: 'green'|'black'` (default `'black'`); `size?: 'small'|'large'` (default current). Refactor `style()` exports into color/size-keyed `styleVariants` while preserving current default class output.

**(g) Done-criteria:** as CheckBox; base zero-diff; CheckableBase not re-assigned (depends on W3a-P2).

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 438:15441. Component Radio. docs/ds2026-specs/Radio.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3a-P3. Branch feature/ds2026-w3a-p3-radio. Scope=Radio. Depends on W3a-P2 (CheckableBase already repointed — DO NOT re-assign those base tokens; grep base/tokens.ts to confirm). Add color/size props defaulting to current; repoint Radio.css.ts trio per §W3a-P3(d). INLINE_DATA=§3.1 + docs/ds2026-specs/Radio.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: default color='black' & size==current; radio/radioSelected class output unchanged on base; no CheckableBase token re-assignment.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=Radio).

### W3a-P4 — Switch (`462:2521`) · Builder `sonnet`

**(a) Current API** (`lib/components/Switch/Switch.tsx`): extends react-aria `AriaSwitchProps` — `isSelected`(=deprecated `toggled`), `isDisabled`(=deprecated `disabled`), `name`, `value`, `onChange`, `aria-labelledby`, `className`. **No size/color props.** Styling: `style()` + `styleVariants()` `handle{default,active}` (`Switch.css.ts:67-101`); `toggleOn`/`disabled` classes. Track dims: `height=space['6']`, `handleSize='24px'` hardcoded, padding hardcoded; transitions hardcoded cubic-bezier (not tokens).

**(b) Figma axes** (`462:2521`): same control set — `State × Color{Green,Black} × Size{Large,Small} × Selected × Enabled`.

**(c) Mapping:** add `color?:'green'|'black'` (default `'black'`), `size?:'small'|'large'` (default current). Additive-now; default flip major-only. Note the hardcoded transition literals and `handleSize` are out-of-token — leave as-is (changing them is not required; only colour repoint + new axes).

**(d) Track C repoint** (master §9.1: Switch 4 direct refs; C-P/3a-P4): `Switch.css.ts:9-12` `colorAccent=colours.foreground.body`, `colorContrast=colours.background.body`, `colorMid=colours.background.neutral`, `colorLight=colours.background.light`.

| Old ref | New token | base | ds2026 |
|---|---|---|---|
| `colours.foreground.body` (gray900) | `color.foreground.primary` | `#212338` | `#212338` |
| `colours.background.body` (white) | `color.background.default` | `#FFFFFF` | `#FFFFFF` |
| `colours.background.neutral` (gray300) | `color.border.default` | `#D4D9DD` | `#D4D9DD` |
| `colours.background.light` (gray200) | `color.background.emphasisInactive` | `#EEF0F2` | `#EEF0F2` |

> All grey-derived (base=Figma safe). Green "on" state = ds2026/variant-only token per Spec.

**(e) ds2026 overrides:** grey tokens already Figma; green track/handle-on token per Spec (scoped to `color:'green'`).

**(f) Proposed TS:** `color?:'green'|'black'` (default `'black'`); `size?:'small'|'large'` (default current). Extend `handle` styleVariants and add color/size dims; preserve current default output.

**(g) Done-criteria:** props exist w/ current defaults; base zero-diff; deprecated `toggled`/`disabled` still work; ds2026 green story present.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 462:2521. Component Switch. docs/ds2026-specs/Switch.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3a-P4. Branch feature/ds2026-w3a-p4-switch. Scope=Switch. Add color/size props (defaults=current) per §W3a-P4; repoint the 4 refs per §W3a-P4(d) (grey-derived). Do NOT alter the hardcoded transition literals or handleSize. INLINE_DATA=§3.1 + docs/ds2026-specs/Switch.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: default color='black' & size==current; handle{default,active} + toggleOn base output unchanged; deprecated toggled/disabled aliases intact.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=Switch).

### W3a-P5 — StarRating (`428:15257`) · Builder `sonnet`

**(a) Current API** (`lib/components/StarRating/StarRating.tsx`): `rating` (req number), `size` (`EStarRatingSize` → `'medium'|'small'`, default `Medium`), `label` (default = rating), `className`. 5 stars hardcoded. Styling: **`styleVariants()`** `star{default,empty}` (`StarRating.css.ts:5-12`).

**(b) Figma axes** (`428:15257`): rating 0–5 in **0.5 steps** (half-stars).

**(c) Mapping:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| 0.5-step (half stars) | integer fill only (rating→full/empty) | **additive-now** — support fractional `rating` render (half-star) | Half-star rendering is additive (no prop change; `rating` already number). Add half-fill visual. |
| ds2026 colours | `colours.intent.shine.*` | Track C repoint | base=legacy shine, ds2026=Figma yellow |

**Major-only:** none flagged (StarRating has no default-flip axis per master 3a table).

**(d) Track C repoint** (master §9.1: StarRating 2 direct refs; C-P/3a-P5): `StarRating.css.ts:7` `colours.intent.shine.foreground` (filled star), `:10` `colours.intent.shine.background.standard` (empty star).

| Old ref | New token | base (V_legacy) | ds2026 (V_2026) |
|---|---|---|---|
| `intent.shine.foreground` (yellow500 `#FFC001`) | `color.warning.backgroundDark` (`#FFC001`) OR component-scoped `color.starRating.filled` | current yellow500 | Figma star yellow (Spec; likely `#FFC001`/`#FCB30B`) |
| `intent.shine.background.standard` (gray200 `#EEF0F2`) | `color.background.emphasisInactive` (`#EEF0F2`) | `#EEF0F2` | `#EEF0F2` |

> **Collision caution:** `color.warning.backgroundDark` is a shared chromatic token also used by Toast/Alert warning (W3c-P7). Its base value from W1-P1 is Figma `#FFC001`, which equals current shine yellow500 — so no collision (V_legacy==base). If Spec finds the star yellow differs, use a **component-scoped** `color.starRating.filled` (collision rule step 3) and record in §6. The empty-star grey maps cleanly to `color.background.emphasisInactive`.

**(e) ds2026 overrides:** filled-star token = Figma star yellow; empty = grey (already Figma). Add to ds2026/tokens.ts only if V_2026≠base.

**(f) Proposed TS:** no new props required. If Spec shows a distinct DS-2026 look toggled per-instance, add nothing — the ds2026 theme carries it. (Optionally add `size:'large'` if Figma shows one; Spec confirms.)

**(g) Done-criteria:** half-star rendering supported; base zero-diff; ds2026 star colour correct; repoint byte-identical on base.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 428:15257. Component StarRating. Capture the filled/empty star hex (bound vars) and whether half-stars are a distinct asset; note if a size beyond medium/small exists. docs/ds2026-specs/StarRating.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3a-P5. Branch feature/ds2026-w3a-p5-starrating. Scope=StarRating. Add half-star (0.5-step) rendering (additive; rating is already number). Repoint the 2 shine refs per §W3a-P5(d); if the Figma star yellow differs from current shine yellow, use component-scoped color.starRating.filled and record in master §6. INLINE_DATA=§3.1 + docs/ds2026-specs/StarRating.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: star{default,empty} base output unchanged; half-star is additive (no default look change at integer ratings); confirm no collision on color.warning.backgroundDark (base==current shine yellow) or a component-scoped token was used.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=StarRating).

---

## Sub-wave 3b — Forms & inputs (`710:3713`)

**Packages:** W3b-P1 TextInput/TextArea (InputBase) · W3b-P2 Compound field/group · W3b-P3 Select/DropDown/menu/list · W3b-P4 Selection input group · W3b-P5 Date picker set · W3b-P6 Slider/Stepper.

> **CRITICAL SERIALISATION — the InputBase spine.** There is **no `InputBase.tsx`**. The shared input primitive is the directory `lib/components/private/InputBase/` = `withEnhancedInput.tsx` (the HoC that owns all input styling orchestration) + `NotchedBase.tsx` (border/notch geometry) + **`InputState.css.ts`** (the state→colour map that drives border+text colour for every text-family input). TextInput, TextAreaInput, SelectInput, **and DateInput** are all produced by `withEnhancedInput(...)`. The **24 legacy colour refs** (master §9.1) live here: `InputState.css.ts` (20), `NotchedBase.css.ts` (2), `withEnhancedInput.css.ts` (2). **W3b-P1 restyles + repoints this spine ONCE, first.** W3b-P2/P3/P5 (compound, select, date) rebase onto the repointed spine and must NOT re-assign its base tokens (collision rule). Slider/Stepper (W3b-P6) are independent of the spine and parallel-safe.

### W3b-P1 — TextInput / TextAreaInput (via `private/InputBase`) (`660:8789`, `674:9427`) · Builder `opus` (spine, highest legacy density)

**(a) Current API:**
- **Shared `EnhanceInputPrimitiveProps`** (`withEnhancedInput.tsx:55-77`): `name` (req), `id?`(=name), `value?`, `className?`, `hintText?`, `autoFocus?`, `disabled?`(def false), `reserveHintSpace?`(def false), `isLoading?`(def false), `notch?`(def true), `fieldIcon?`, `prefixIcon?`, `suffixIcon?`, `wrapperRef?`, `testId`, `isTouched?`, `isValid?`, and `size?: InputSize` = **`'small'|'medium'|'large'`** (default `'medium'`, `withEnhancedInput.css.ts:144`), plus a **legacy sprinkles `backgroundColour`** prop (default `'transparent'`, `:61,152`).
- **NotchedBase** (`NotchedBase.tsx:10-26`): `attach?: BordersAttach` = `'ALL'|'BOTTOM'|'LEFT'|'NONE'|'RIGHT'|'TOP'` (default `'NONE'`), `borderMerged?: BordersMerged` (same 6, default `'NONE'`).
- **TextInput** (`TextInput.tsx`): adds `type`(def `'text'`), `maxLength`(def 2000); `primitiveType:'text'`. **TextAreaInput**: `maxLength`(def 4000); `primitiveType:'textarea'`, no icons.
- **Styling:** `withEnhancedInput.css.ts` — `styleVariants()`+`style()`+size objects (`inputItselfSize` keyed small/medium/large). `NotchedBase.css.ts` — border geometry styleVariants. `InputState.css.ts` — `disabled` styleVariants + `natural`/`active`/`success`/`error` trees each `{default,hover,active}×{colour,borderColour}`. `withEnhancedInput.tsx` owns orchestration via `derivedColourIntent()` (`:194-203,401-417`).

**(b) Figma target axes** (`660:8789` text field, `674:9427` text area): `Size{Large,Small} × State{Default,Filled,Active,Error,Disabled}`. (Note: Figma has **no Medium**; current default is `medium` — see mapping.)

**(c) Mapping + classification:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| `Size{Large,Small}` | `small\|medium\|large` (default medium) | **additive-now** (large/small already exist) | Keep the union & `medium` default. ds2026 sizing deltas via theme; no default flip. |
| `State{Default,Filled,Active,Error,Disabled}` | `natural/active/success/error/disabled` in InputState | **additive-now** — states already modelled; only colours change | Repoint state colours (below); ds2026 carries Figma state hex. |
| Notch/border radius | `border.radius.md` throughout | **additive-now** via ds2026 radius | ds2026 sets input radius per Spec; base stays `md`. |

**Major-only deferrals:** dropping `medium` / making a Figma size the default; changing the notch mechanism.

**(d) Track C repoint scope — the 24 refs** (master §9.1: private/InputBase 24; C-P/3b-P1). Old→new mapping:

| File:line | Old ref | New semantic token | base (V_legacy) | ds2026 (V_2026) |
|---|---|---|---|---|
| `InputState.css.ts:6,10` | `typography.colour.dark` (gray900) | `color.foreground.primary` | `#212338` | `#212338` |
| `InputState.css.ts:15,28` | `border.colours.gray` (gray300) | `color.border.default` | `#D4D9DD` | `#D4D9DD` |
| `InputState.css.ts:18` | `colours.gamut.gray200` | `color.border.emphasisInactive`→ use `color.background.emphasisInactive` (`#EEF0F2`) | `#EEF0F2` | `#EEF0F2` |
| `InputState.css.ts:25` | `typography.colour.muted` (gray400) | `color.foreground.tertiaryInactive` | `#8F95A1` | `#8F95A1` |
| `InputState.css.ts:58-74` | `typography.colour.success` (green600) | `color.success.foreground` | current green600 | `#01C68C` |
| `InputState.css.ts:82-97` | `typography.colour.danger` (red600) | `color.alert.foreground` | current red600 | `#D42B26` |
| `NotchedBase.css.ts:184` | `colours.background.neutral` (gray300) | `color.border.default` | `#D4D9DD` | `#D4D9DD` |
| `NotchedBase.css.ts:187` | `typography.colour.muted` | `color.foreground.tertiaryInactive` | `#8F95A1` | `#8F95A1` |
| `withEnhancedInput.css.ts:13` | `colours.background.neutral` | `color.border.default` | `#D4D9DD` | `#D4D9DD` |
| `withEnhancedInput.css.ts:17` | `typography.colour.muted` (placeholder) | `color.foreground.tertiaryInactive` | `#8F95A1` | `#8F95A1` |

> Grey-derived rows: base=Figma safe. **Chromatic ones (success green, alert/error red):** base MUST = current rendered value (value-split); ds2026 = Figma. **Collision note:** `color.success.foreground` / `color.alert.foreground` are shared with Alert/Toast (W3c-P7) and status controls — the collision rule applies: if W3c-P7 lands first with a different V_legacy, follow the rule. Recommend the reviewer greps `base/tokens.ts` for both keys. The `backgroundColour='transparent'` legacy sprinkles prop on the HoC stays (transparent has no semantic equivalent; pivot to `backgroundColor` semantic prop is C-P1 territory).

**(e) ds2026 overrides:** `color.foreground.primary`, `color.border.default`, `color.foreground.tertiaryInactive`, `color.background.emphasisInactive` already equal Figma post-W1-P1 (grey). Add `color.success.foreground:#01C68C`, `color.alert.foreground:#D42B26` to ds2026 (base keeps current green600/red600). Input radius per Spec.

**(f) Proposed TS:** no new prop unions required — sizes/states already exist. (If Spec surfaces a Figma-only look toggle, deliver via ds2026, not props.)

**(g) Done-criteria:** all 24 refs repointed; base Chromatic zero-diff across TextInput/TextAreaInput/SelectInput/DateInput (all consume the spine — verify ALL four); ds2026 shows Figma state colours; success/alert base==current.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 660:8789 (text field), 674:9427 (text area), template 757:24294. Capture Size{Large,Small}×State{Default,Filled,Active,Error,Disabled}: border colour/width per state, text colour, radius, paddings, notch geometry. Map each state surface to a §3.1 token. docs/ds2026-specs/InputBase.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3b-P1 (InputBase spine). Branch feature/ds2026-w3b-p1-inputbase. Scope="private TextInput TextAreaInput SelectInput DateInput" (test ALL — they share the spine). Repoint the 24 refs per §W3b-P1(d) using the value-split rule (grey=base=Figma; success/alert base=current green600/red600, ds2026=Figma). Do NOT change InputSize union/default, notch mechanism, or the transparent backgroundColour default. Add ds2026 overrides per §W3b-P1(e). INLINE_DATA=§3.1 + docs/ds2026-specs/InputBase.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: all 24 legacy refs gone from InputState/NotchedBase/withEnhancedInput css; base Chromatic zero-diff on TextInput+TextAreaInput+SelectInput+DateInput; color.success.foreground & color.alert.foreground base == current green600/red600 (value-split); collision-grep base/tokens.ts for both before assigning; InputSize default still medium.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope="private TextInput TextAreaInput SelectInput DateInput").

### W3b-P2 — Compound field / group (`686:9940`, `686:13077`) · Builder `opus` (new subcomponent — PROPOSE, flag for Reviewer)

**(a) Current API:** **No `CompoundField`/`InputGroup` component exists.** Field joining is done ad-hoc today via the `attach`/`borderMerged` props on `NotchedBase` (the 6-literal border unions). This package must PROPOSE a component.

**(b) Figma axes:** Compound field `686:9940` (`Size × State × Position{Left,Middle,Right}`); Compound input group `686:13077` (`Variants{2,3}` = 2- or 3-field groups).

**(c) Mapping + classification:** Entirely **net-new / additive** (nothing to flip). **Proposed API (mark for Reviewer scrutiny):**
```ts
// lib/components/CompoundField/CompoundField.tsx (NEW dir, net-new export)
interface CompoundFieldProps {
  children: ReactNode;          // 2 or 3 input children (TextInput/SelectInput/…)
  size?: 'small' | 'medium' | 'large';   // default 'medium' (mirror InputSize)
  testId?: string;
}
// Internally maps child position → NotchedBase attach/borderMerged:
//   first child  → borderMerged/attach RIGHT-flattened
//   middle child → both sides flattened
//   last child   → LEFT-flattened
```
This is a **thin composition over the existing `attach`/`borderMerged` mechanism** — it introduces no new token or default; it wires child position to the existing border unions. **Reviewer must scrutinise:** whether it should be a new dir (net-new, R6-safe) vs a new prop on an existing input; the master (§4 W3b-P2) says "likely new subcomponent" — proceed as a new dir but flag.

**(d) Track C repoint:** none of its own — inherits the spine (W3b-P1). Depends on W3b-P1.

**(e) ds2026 overrides:** none of its own (radius/colour inherited from spine + ds2026).

**(g) Done-criteria:** `CompoundField` new dir + `index.ts`/`default.ts`, exported from `lib/components/index.ts` + `lib/index.ts`; renders 2/3 joined fields via existing NotchedBase border props; base + ds2026 stories; no default/token change to existing components.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 686:9940 (compound field), 686:13077 (group variants 2/3). Capture how adjacent fields join (border radii flattening per Position Left/Middle/Right), gaps, and any shared border. docs/ds2026-specs/CompoundField.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3b-P2. Branch feature/ds2026-w3b-p2-compound. Depends on W3b-P1. Create NEW lib/components/CompoundField/ per §W3b-P2(c) proposed API — thin composition over NotchedBase attach/borderMerged; NO new tokens, NO change to existing inputs. Export from lib/components/index.ts + lib/index.ts + add ./components/CompoundField default entry pattern. INLINE_DATA=§3.1 + docs/ds2026-specs/CompoundField.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: SCRUTINISE the new-subcomponent decision (new dir vs prop); confirm it only composes existing attach/borderMerged (no new border/radius tokens); confirm no existing input default/prop changed; new export added, no export removed.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=CompoundField).

### W3b-P3 — Select / DropDown / menu / list item (`710:3782`, `686:13893/14234/14681`) · Builder `sonnet`

**(a) Current API:**
- **SelectInput** (`SelectInput.tsx`): `withEnhancedInput` select; adds `fieldIcon`(def `CaretDownIcon`), `children`; `primitiveType:'select'`. Styling `SelectInput.css.ts` `style()` only (`input`/`paddedInput`/`arrow`/`arrowDisabled`) — spacing + `border.width['1']`, no colour tokens (colour from spine).
- **DropDown** (`DropDown.tsx`): NOT an input — a Button+Flyout menu. `DropDownProps` extends `ButtonProps` + `FlyoutProps`: `label`(req), `icon?`(def `CaretDownIcon`), `isOpen?`, `onOpenChange?`, `alignment`(def BOTTOM_LEFT). `DropDownOption` (`DropDownOption.tsx`): `label`(req), `icon?`, `iconColour?`(def `'dark'`), `as`(def button), `disabled`(def false). Styling `style()` only.

**(b) Figma axes:** Dropdowns `710:3782` — list item `686:13893` (`Position{First,Middle,Last,n/a}×Size×Selected×Single-option`), list `686:14234`, menu `686:14681` (`Field type{Text,Compound}×Size×List-open×Position`).

**(c) Mapping + classification:**
- SelectInput field: inherits the spine restyle (W3b-P1) — no own axes. **additive-now** via ds2026.
- DropDownOption `Position{First,Middle,Last}` + `Selected`: **additive-now** — add `position?:'first'|'middle'|'last'` and rely on existing `disabled`; `selected` state as new prop value. Defaults preserve current (no position styling by default).
- **Major-only:** none flips a default.

**(d) Track C repoint** (master §9.1: DropDown 1 direct ref; C-P/3b-P3): `DropDownOption.css.ts:11` `colours.background.light` (hover) → `color.background.emphasisInactive` (`#EEF0F2`, grey → base=Figma). `DropDownOption.tsx:28,33` `iconColour='dark'`→`textStyles({colour})` legacy typography colour — repoint to semantic when C-P1 sprinkles-text parity lands; otherwise keep default `'dark'` and note. SelectInput: no own colour refs.

**(e) ds2026 overrides:** hover grey already Figma; selected/position colours per Spec (list-item selected likely `color.background.emphasisInactive` / `color.border.selected`).

**(f) Proposed TS:**
```ts
// DropDownOption.tsx — ADD:
position?: 'first' | 'middle' | 'last';  // default undefined (current flat look)
selected?: boolean;                       // default false
```

**(g) Done-criteria:** DropDownOption gains position/selected additively; SelectInput inherits spine; base zero-diff; ds2026 list-item look present; DropDown hover repointed.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 710:3782, 686:13893 (list item), 686:14234 (list), 686:14681 (menu). Capture list-item Position{First,Middle,Last}×Selected×Size, list container radius/shadow, menu open state. docs/ds2026-specs/DropDown.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3b-P3. Branch feature/ds2026-w3b-p3-select-dropdown. Depends on W3b-P1. Scope="SelectInput DropDown". Add DropDownOption position/selected props (defaults preserve current) per §W3b-P3(f); repoint DropDownOption hover grey per §W3b-P3(d). SelectInput inherits the spine — no own colour changes. INLINE_DATA=§3.1 + docs/ds2026-specs/DropDown.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: DropDownOption defaults unchanged (position undefined, selected false, iconColour 'dark'); SelectInput no base colour drift; hover grey repoint base==#EEF0F2.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope="SelectInput DropDown").

### W3b-P4 — Selection input group (`710:3797`, `744:11493/11752`) · Builder `opus` (likely new subcomponent — PROPOSE)

**(a) Current API:** No dedicated "selection input group" component exists. Figma models a labelled row wrapping a Switch/Checkbox/Radio with a border and side placement — today built ad-hoc with `CheckableBase` + layout. This package PROPOSES a wrapper.

**(b) Figma axes:** `744:11493` (`Control type{Switch,Checkbox,Radio} × Control side{L,R} × Size × Enabled`); field `744:11752` (`State{Default,Selected,Disabled} × Multiple × Border{Y,N}`).

**(c) Mapping + classification:** net-new / additive. **Proposed API (flag for Reviewer):**
```ts
// lib/components/SelectionField/SelectionField.tsx (NEW dir) — a bordered labelled row
interface SelectionFieldProps {
  control: 'switch' | 'checkbox' | 'radio';  // which control to render
  controlSide?: 'left' | 'right';            // default 'left'
  bordered?: boolean;                        // default true (Figma Border Y)
  selected?: boolean;                        // default false
  disabled?: boolean;                        // default false
  size?: 'small' | 'large';                  // default 'large' (match current control size)
  children: ReactNode;                       // label content
}
```
Composes the existing CheckBox/Radio/Switch (post-W3a) — introduces no new control logic. **Reviewer scrutinises** whether this should compose vs be a variant of existing controls; master (§4 W3b-P4) leaves it open.

**(d) Track C repoint:** none of its own; the border uses `color.border.*` (grey, base=Figma). Depends on W3a-P2/P3/P4 (the controls) + W3b-P1 (border tokens available).

**(g) Done-criteria:** new `SelectionField` dir + exports; composes controls; bordered/side/selected/disabled additive; base + ds2026 stories.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 710:3797, 744:11493 (control×side×size×enabled), 744:11752 (state×multiple×border). Capture row padding, border colour/width/radius, control side placement, selected/disabled deltas. docs/ds2026-specs/SelectionField.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3b-P4. Branch feature/ds2026-w3b-p4-selection-field. Depends on W3a-P2/P3/P4 + W3b-P1. Create NEW lib/components/SelectionField/ per §W3b-P4(c); compose existing CheckBox/Radio/Switch; border via color.border.* (grey). No change to the controls' defaults. Export from index files. INLINE_DATA=§3.1 + docs/ds2026-specs/SelectionField.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: SCRUTINISE compose-vs-variant decision; confirm no control default changed; border tokens grey (base=Figma); new export only.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=SelectionField).

### W3b-P5 — Date picker set (`710:3801`, `755:18063`, `752:17710`, `757:21451`) · Builder `opus`

**(a) Current API:** `DateInput` (built on `withEnhancedInput` — part of the spine), `DatePicker` (`forwardRef`, react-aria; `calendarOptions?`, `defaultValue?` ISO, `disabled?`, `icon?`, `min?`/`max?`), `Calendar` (react-aria `useCalendar`; `calendarOptions?`, `allowPastDate?`, `onChange`, `lang?`), `DateTimeField` (layout wrapper containing `DateField`/`TimeField`). react-aria is an existing peer (no new dep).

**(b) Figma axes:** Date picker `755:18063` (`Style{Outline,Shadow}`); Date button `752:17710` (`State{Selected,Default,Disabled,Unavail/Booked,Hover}`); Date dropdown `757:21451` (`State×Variant{Date,Date+time,Date range}×Dropdown{Left,Right,Calendar,n/a}`).

**(c) Mapping + classification:**
- Date button states: **additive-now** via ds2026 colours + existing selected/disabled states; "Unavailable/Booked" may be a **new state prop value** on the calendar day button (additive).
- Picker `Style{Outline,Shadow}`: **additive-now** new `style?:'outline'|'shadow'` prop (default = current outline look) — elevation via `elevation.z*` (W1-P3) under ds2026.
- **Major-only:** any default flip.

**(d) Track C repoint:** DateInput inherits the spine (W3b-P1) — DateInput adds no own colour refs beyond the spine. Calendar/DatePicker: repoint any own `colours.*` the Spec/grep finds (master §9.1 lists neither Calendar nor DatePicker in the seed direct-ref table → likely `via-sprinkles`/clean; the Builder greps to confirm and repoints day-button selected/today colours onto `color.interactive.*`/`color.border.selected`). Depends on W3b-P1.

**(e) ds2026 overrides:** day-button selected/today/booked colours per Spec (likely `color.border.selected` `#5C6172`, green for selected); picker shadow via `elevation.z*`.

**(f) Proposed TS:** `DatePicker.style?: 'outline' | 'shadow'` (default `'outline'`); calendar day `state?:'unavailable'` additive if Spec requires. Flag for Reviewer.

**(g) Done-criteria:** date set 2026-capable under ds2026; DateInput byte-identical on base (spine); Calendar/DatePicker own refs repointed; new `style` prop additive; no react-aria version bump.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 755:18063 (picker Style Outline/Shadow), 752:17710 (date button states incl Unavail/Booked & Hover), 757:21451 (dropdown Variant Date/Date+time/Date range). Capture day-button selected/today/booked/hover colours, picker radius/shadow. docs/ds2026-specs/DatePicker.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3b-P5. Branch feature/ds2026-w3b-p5-date. Depends on W3b-P1 + W1-P3 (elevation.z*). Scope="DateInput DatePicker Calendar DateTimeField". Add DatePicker style:'outline'|'shadow' (default outline) + optional calendar day state 'unavailable' (additive). Grep Calendar/DatePicker for colours.* and repoint any found (value-split). DateInput inherits spine — no own colour changes. Do NOT bump react-aria. INLINE_DATA=§3.1 + docs/ds2026-specs/DatePicker.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: default style='outline'; DateInput base byte-identical; no react-aria peer bump; any repointed calendar colour base==current.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope="DateInput DatePicker Calendar DateTimeField").

### W3b-P6 — Slider / Stepper (`710:3803`, `757:24191/24109`, `761:25311/25571`) · Builder `sonnet`

**(a) Current API:**
- **Slider** (`Slider.tsx`): react-aria; `label?`, `unitText?`, `step?`(def 5), `formatOptions?`, plus AriaSlider range/value/`isDisabled`/`onChange`. Styling `sprinkles()` + `style()`; **already on `colours.gamut.*`** (track gray300/gray200, thumb gray900/gray500) + hardcoded rgba shadows; sprinkles `color:'normal'`, radius `pill`/`full`.
- **Stepper** (`Stepper.tsx`): `value?`(def 0), `min?`/`max?`/`step?`(def 1), `disabled?`(def false), `isFullWidth?`(def false), `format?`, `onChange?`. Styling `style()`+`styleVariants()` `handle{default,disabled}`. Uses **legacy sprinkles props** heavily.

**(b) Figma axes:** Slider `757:24191` (Value 0–100%), sliderKnob `757:24109`, Slider `761:25571` (`Size`); Stepper `761:25311` (`Variant 0/1/2 × Size`).

**(c) Mapping + classification:**
- Slider `Size`: **additive-now** new `size?` prop if Figma shows sizes (default = current); else no prop.
- Stepper `Variant 0/1/2 × Size`: **additive-now** add `variant?:0|1|2` (or named) + `size?` (default = current). Defaults preserve current look.
- **Major-only:** default flips.

**(d) Track C repoint:**
- **Slider** (master §9.1: Slider 4 direct refs; C-P/3b-P6): `Slider.css.ts:63` `colours.gamut.gray300` (track), `:65` gray200 (track disabled), `:81` gray900 (thumb), `:98` gray500 (thumb disabled). Map to `color.border.default`(#D4D9DD? note gray300)/`color.background.emphasisInactive`(gray200)/`color.foreground.primary`(gray900)/`color.foreground.tertiaryInactive`(gray400≠gray500 — see caution). All grey → base=Figma safe **except** thumb-disabled gray500 (`#6C7283`) which has no exact §3.1 grey token → use a component-scoped `color.slider.thumbDisabled` (base=gray500, ds2026=Figma) per collision rule step 3, record in §6.
- **Stepper** (master §9.1: Stepper 2 direct refs; C-P/3b-P6): `Stepper.css.ts:17,20` `colours.intent.primary.background.strong` (handle hover/active). Plus legacy sprinkles props in `Stepper.tsx`: `:68` `backgroundColour={disabled?'neutral':'primary'}`, `:66` `textStyles({colour:'white'})`, `:162` `borderColour="gray"`, `:189` `<Text colour="dark">`. Repoint `intent.primary.background.strong` → `color.button.primary.solid.pressed` (or component token); legacy sprinkles props pivot to semantic via C-P1.

**(e) ds2026 overrides:** Slider greys already Figma; thumb-disabled component token if used. Stepper primary handle → ds2026 green `#01C68C`.

**(f) Proposed TS:** `Stepper.variant?: 0|1|2` + `Stepper.size?` (defaults current); `Slider.size?` if Figma shows it. Flag for Reviewer.

**(g) Done-criteria:** Slider/Stepper repointed; base zero-diff; Stepper variant/size additive; ds2026 green Stepper handle; slider thumb-disabled handled via component token if no §3.1 match.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 757:24191/24109/761:25571 (Slider/knob/size), 761:25311 (Stepper Variant 0/1/2 × Size). Capture track/thumb colours, stepper handle fill per variant, sizes. Map to §3.1; FLAG greys with no exact token (e.g. gray500 thumb-disabled). docs/ds2026-specs/SliderStepper.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3b-P6. Branch feature/ds2026-w3b-p6-slider-stepper. Independent of the InputBase spine. Scope="Slider Stepper". Repoint Slider 4 gamut refs + Stepper intent.primary + legacy sprinkles props per §W3b-P6(d) (value-split; component-scoped color.slider.thumbDisabled for gray500). Add Stepper variant/size (+ Slider size if Figma) as additive props defaulting to current. INLINE_DATA=§3.1 + docs/ds2026-specs/SliderStepper.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: Slider/Stepper base byte-identical; new variant/size default to current; gray500 thumb-disabled uses a component-scoped token (recorded in §6) not a forced §3.1 grey; Stepper primary handle base==current intent.primary.strong.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope="Slider Stepper").

---

## Sub-wave 3c — Data display + navigation + feedback

**Packages:** W3c-P1 Badge · W3c-P2 TextLink · W3c-P3 Tooltip · W3c-P4 Tabs · W3c-P5 Toggles · W3c-P6 Pagination · W3c-P7 Toast/Alert · W3c-P8 Progress/Loaders. All independent dirs → fully parallel, EXCEPT W3c-P6 Pagination coordinates the shared `Pagination/` dir with Wave-2 W2-P10 (pagination picker). **Schedule Alert (W3c-P7) and ProgressSpinner (W3c-P8) early** — mandatory Track C repoints, highest 3c legacy counts.

### W3c-P1 — Badge (`572:3980`) · Builder `sonnet`

**(a) Current API** (`lib/components/Badge/Badge.tsx`): `label`(req), `colour?:'neutral'|'red'|'green'|'blue'|'yellow'`(def `'neutral'`), `look?:'standard'|'inverted'`(def `'standard'`), `size?:'small'|'standard'|'large'`(def `'standard'`), `className?`, `testId?`. Styling: **`recipe()`** `styledBadge` (`Badge.css.ts:6`) with variants `colour`/`inverted`/`size`; colours via 10 `compoundVariants` delegating to shared `styledIntentionalElement` (`lib/styles/intentColorset.css.ts`) which reads `colours.intent.*`. `Box borderRadius="1"`.

**(b) Figma axes** (`572:3980`): `Style{Standard,Inverted,Ghost} × Size{Small,Large} × Color{Yellow,Grey,Blue,Green,Red} × Icon{None,Left,Right}`.

**(c) Mapping + classification:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| `Style` adds `Ghost` | `look:standard\|inverted` | **additive-now** add `'ghost'` to `look` | `look?:'standard'\|'inverted'\|'ghost'`, default `'standard'`. |
| `Color{Grey}` | `colour:neutral` (grey) | naming — neutral==grey | keep `neutral` as current; do NOT rename. Map Figma "Grey"→`neutral`. |
| `Size{Small,Large}` | `small\|standard\|large` | **additive-now** (already has small/large) | keep union + `standard` default. |
| `Icon{None,Left,Right}` | label-only today | **additive-now** add `icon?`/`iconPosition?` | add `icon?: IconType`, `iconPosition?:'left'\|'right'`. |

**Major-only:** dropping/renaming `neutral`→`grey`, `standard`→a Figma size; flipping defaults.

**(d) Track C repoint** (master §9.1: Badge not in seed direct list — colour is **via** `styledIntentionalElement`→`colours.intent.*`; C-P/3c-P1): repoint the shared `intentColorset.css.ts` is a **standalone C-package** touching many components — do NOT repoint the shared file inside Badge's package (collision blast radius). Instead: Badge's package repoints Badge-owned surfaces if any; the intent surface repoint is deferred to the shared C-P for `intentColorset`. Record dependency.

**(e) ds2026 overrides:** badge colours (yellow/grey/blue/green/red per style) via ds2026 semantic tokens once intentColorset is repointed; ghost style = transparent bg + coloured text/border per Spec.

**(f) Proposed TS:** `look?:'standard'|'inverted'|'ghost'` (def standard); `icon?: IconType`; `iconPosition?:'left'|'right'`.

**(g) Done-criteria:** ghost + icon additive; base zero-diff; ds2026 look; no rename of `neutral`/`standard`.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 572:3980. Capture Style{Standard,Inverted,Ghost}×Size{Small,Large}×Color{Yellow,Grey,Blue,Green,Red}×Icon. Map each colour×style surface (fill/text/border) to §3.1. docs/ds2026-specs/Badge.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P1. Branch feature/ds2026-w3c-p1-badge. Scope=Badge. Add look:'ghost' + icon/iconPosition additively (defaults unchanged); DO NOT rename colour 'neutral' or size 'standard'. DO NOT repoint the shared lib/styles/intentColorset.css.ts here (that is a standalone C-package) — only Badge-owned surfaces. INLINE_DATA=§3.1 + docs/ds2026-specs/Badge.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: colour default 'neutral', look default 'standard', size default 'standard' unchanged; ghost/icon are new values; shared intentColorset.css.ts NOT edited in this package.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=Badge).

### W3c-P2 — TextLink (`739:8560`) · Builder `sonnet`

**(a) Current API** (`lib/components/TextLink/TextLink.tsx`): `children?`, `as?`, `muted?`(def false), `icon?`, plus typography passthroughs `color`/`colour`/`noWrap`/`size`/`strong`/`transform`/`weight`(def `'semiBold'`). Styling `style()`+`sprinkles()`; inner `<Text colour={muted?'muted':'link'}>`.

**(b) Figma axes** (`739:8560`): `State × Size × Icon{L,R,Only,None} × Colour{Blue,Black}`. Uses `color.button.linkedText.*` (master §3.1; NOTE those values are partly under §6-Q3 WIP — leave unconfirmed keys unassigned).

**(c) Mapping + classification:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| `Colour{Blue,Black}` | link colour (green `link` today) | **additive-now** new `linkColour?:'blue'\|'black'` | default = current; blue/black via `color.button.linkedText.*` under ds2026. |
| `Icon{L,R,Only,None}` | `icon?` (position via layout) | **additive-now** add `iconPosition?` / icon-only | additive props. |
| `State` (hover/pressed) | `:hover` box-shadow underline | ds2026 colours | via linkedText tokens. |

**Major-only:** flipping the base link colour (green→blue/black).

**(d) Track C repoint** (master §9.1: TextLink 3 direct refs; C-P/3c-P2): `TextLink.css.ts:7,13,32` `typography.colour.link` (green600) → `color.button.linkedText.primary` (base=current green link; ds2026=Figma) **IF §6-Q3 confirms linkedText values; else** keep on `typography.colour.link` and defer the repoint, noting the block. `TextLink.tsx:76` `colour={muted?'muted':'link'}` and passthrough `color`/`colour` → pivot via C-P1. Hardcoded hover `color:'white'` (`css.ts:34`) stays.

**(e) ds2026 overrides:** `color.button.linkedText.*` per §3.1 (pending §6-Q3). Blue/black variants map to the linkedText namespace.

**(f) Proposed TS:** `linkColour?:'blue'|'black'` (def current); `iconPosition?:'left'|'right'|'only'`.

**(g) Done-criteria:** additive linkColour/icon; base zero-diff; ds2026 link look; repoint gated on §6-Q3 (documented).

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 739:8560. Capture State×Size×Icon{L,R,Only,None}×Colour{Blue,Black}. Map to color.button.linkedText.* (§3.1) — FLAG that linkedText values are under §6-Q3; do not invent. docs/ds2026-specs/TextLink.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P2. Branch feature/ds2026-w3c-p2-textlink. Scope=TextLink. Add linkColour/iconPosition additively (defaults=current). Repoint typography.colour.link → color.button.linkedText.primary ONLY IF §6-Q3 has confirmed linkedText values in W1-P2; else keep legacy ref and note the block in the PR. INLINE_DATA=§3.1 + docs/ds2026-specs/TextLink.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: default link look unchanged; linkedText repoint only if §6-Q3 resolved; no invented tokens.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=TextLink).

### W3c-P3 — Tooltip (`798:3655`/`798:3461`) · Builder `sonnet`

**(a) Current API** (`lib/components/Tooltip/Tooltip.tsx`): `label`(req), `size?:'medium'|'large'`(def `'medium'`), `isOpen?`, `alignment?`(def RIGHT), `closeAfter?`(def null), `wrapper?`, `children`. Styling `style()` (root maxWidth) + Box sprinkles in `useTooltip.tsx` (`backgroundColour="gray900"`, `boxShadow="4"`, `borderRadius="1"`, `<Text colour="white">`).

**(b) Figma axes** (`798:3655` tooltip, `798:3461` modal): `Modal position{Above,Side} × Size{Standard,Large,Small} × Open × Icon-only`.

**(c) Mapping + classification:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| `Size{Standard,Large,Small}` | `medium\|large` | **additive-now** add `'small'` (Standard==medium) | `size?:'small'\|'medium'\|'large'`, default `medium`. |
| `Modal position{Above,Side}` | `alignment` (EAlignment) | already positional | map Above/Side to existing alignment values. |
| `Icon-only` | — | **additive-now** if Spec shows an icon-only trigger variant | add prop if needed. |

**(d) Track C repoint** (Tooltip not in §9.1 seed direct list — colour via legacy sprinkles props): `useTooltip.tsx:144` `backgroundColour="gray900"`, `:149` `<Text colour="white">` → pivot to semantic `backgroundColor`/`color` (C-P1). `color.background.reverse` (`#212338`) is the semantic match for the gray900 surface, `color.foreground.reverse` (`#FFFFFF`) for the text. base=current gray900/white (grey → base=Figma safe).

**(e) ds2026 overrides:** `color.background.reverse`/`color.foreground.reverse` already Figma greys. Radius/shadow per Spec.

**(f) Proposed TS:** `size?:'small'|'medium'|'large'` (def medium).

**(g) Done-criteria:** small size + positions additive; base zero-diff; surface repointed to reverse tokens.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 798:3655, 798:3461. Capture Size{Standard,Large,Small}, Modal position{Above,Side}, Icon-only, surface bg/text/radius/shadow. docs/ds2026-specs/Tooltip.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P3. Branch feature/ds2026-w3c-p3-tooltip. Scope=Tooltip. Add size 'small' additively (default medium); map Above/Side to alignment. Repoint gray900 surface→color.background.reverse, white text→color.foreground.reverse (grey, base=Figma). INLINE_DATA=§3.1 + docs/ds2026-specs/Tooltip.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: size default 'medium' unchanged; surface repoint base==gray900/white.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=Tooltip).

### W3c-P4 — Tabs (`611:7545`/`611:7568`) · Builder `opus` (heaviest 3c legacy; partial migration exists)

**(a) Current API:** `Tabs` (`Tabs.tsx`): `active`(def 0), `appearance?:'underlined'|'pill'|'minimal'`(def `'underlined'`), `onChange?`, `id?`, `children`. `Tab`: `children`, `id?`, `as?`(def button), `indication?:number`. `TabList`: `stretch?`(def false), `scrollable?`(def false, mutually exclusive). `TabPanes/TabPane`: `renderInactivePanes?`, `paddingTop?`(def '6'), `paddingBottom?`(def '6'). Styling: **`recipe()`×3** (`styledTab`/`indication`/`styledTabList`) with `appearance`/`active`/`scroll` variants; `defaultVariants.appearance='underlined'`.

**(b) Figma axes** (`611:7545` tab-nav, `611:7568` tab): `Class{Primary-Pill, Secondary-Line} × State{Selected,Hover,Default,Disabled} × Badge{None,Notification,Number,Icon right}`.

**(c) Mapping + classification:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| `Class{Primary-Pill,Secondary-Line}` | `appearance{pill,underlined,minimal}` | **map to existing** (Primary-Pill→`pill`, Secondary-Line→`underlined`) — additive-now, no new axis needed | keep `appearance`; ds2026 colours. |
| `Badge{Notification,Number,Icon right}` | `indication?:number` (number only) | **additive-now** add badge-slot values | add `badge?:'notification'\|'number'\|'icon'` or extend `indication` — Spec-driven; default = current number behaviour. |
| `State{Disabled}` | not a Tab prop today | **additive-now** add `disabled?` on Tab | additive. |

**Major-only:** none flips a default (appearance stays underlined).

**(d) Track C repoint** (master §9.1: Tabs 12 direct refs; C-P/3c-P4) — the largest 3c repoint. 14 refs in `Tab.css.ts` + 1 in `TabList.css.ts`:

| File:line | Old ref | New token | base | ds2026 |
|---|---|---|---|---|
| `Tab.css.ts:19,34` | `colours.foreground.body` (gray900) | `color.foreground.primary` | `#212338` | `#212338` |
| `Tab.css.ts:42` | `colours.gamut.gray200` | `color.background.emphasisInactive` | `#EEF0F2` | `#EEF0F2` |
| `Tab.css.ts:67,69,141` | `colours.intent.neutral.background.strong` (gray900) | `color.foreground.primary` / `color.border.strong` | `#212338` | `#212338` |
| `Tab.css.ts:78` | `colours.foreground.body` (pill active bg) | `color.background.reverse` | `#212338` | `#212338` |
| `Tab.css.ts:79` | `colours.background.body` (white) | `color.background.default` / `color.foreground.reverse` | `#FFFFFF` | `#FFFFFF` |
| `Tab.css.ts:107,150` | `colours.background.light` (gray200) | `color.background.emphasisInactive` | `#EEF0F2` | `#EEF0F2` |
| `Tab.css.ts:124` | `colours.background.neutral` (gray300) | `color.border.default` | `#D4D9DD` | `#D4D9DD` |
| `TabList.css.ts:11` | `border.colours.gray` (gray300) | `color.border.default` | `#D4D9DD` | `#D4D9DD` |
| `Tab.tsx:120` | `colour={isActive?'white':'dark'}` | pivot via C-P1 | — | — |

> All grey-derived → base=Figma safe. `Tab.css.ts:88-89` already uses new `color.content.normal` (leave; it is already migrated). This package finishes the migration.

**(e) ds2026 overrides:** all grey (already Figma). Pill/underlined 2026 colour deltas per Spec (mostly grey; any accent per Figma).

**(f) Proposed TS:** `Tab.disabled?: boolean`; `Tab` badge slot (`badge?` or extended `indication`), Spec-driven. Keep `appearance` union.

**(g) Done-criteria:** all 15 legacy refs repointed; base zero-diff; disabled + badge additive; `appearance` default `underlined` unchanged.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 611:7545, 611:7568. Capture Class{Primary-Pill,Secondary-Line}→appearance{pill,underlined}, State{Selected,Hover,Default,Disabled}, Badge slot{Notification,Number,Icon right}. Map every tab surface colour to §3.1. docs/ds2026-specs/Tabs.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P4. Branch feature/ds2026-w3c-p4-tabs. Scope=Tabs. Repoint all 15 legacy refs per §W3c-P4(d) (all grey → base=Figma; leave the already-migrated color.content.normal at Tab.css.ts:88-89). Add Tab.disabled + badge slot additively; map Primary-Pill→appearance:pill, Secondary-Line→underlined. Keep appearance default 'underlined'. INLINE_DATA=§3.1 + docs/ds2026-specs/Tabs.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: zero remaining colours.*/typography.colour in Tab.css.ts & TabList.css.ts; appearance default unchanged; base zero-diff across all 3 appearances; new disabled/badge are additive.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=Tabs).

### W3c-P5 — Toggles / ToggleButtons (`633:3823`/`633:4107`, `787:9575`) · Builder `sonnet`

**(a) Current API** (`lib/components/ToggleButtons/ToggleButtons.tsx`): `children`(req), `iconOnly?`(def false), `selectionMode?:'single'|'multiple'`(def single), `disallowEmptySelection?`(def true), `selectedKeys?`/`defaultSelectedKeys?`/`onSelectionChange?`, `isDisabled?`, `orientation?`(auto). Child `ToggleButton` (req `id`). Styling: `recipe()` `toggleButtonGroup`(variant `iconOnly`) + `style()`/`sprinkles()` + container queries. **Already on the new `color.*` system** (gray500/gray200/surface.hard/content.normal/content.inverse).

**(b) Figma axes** (`633:3823` toggle, `633:4107` toggle-nav, `787:9575` overflow): `Position × State × Type{Text,Icon}`; toggle-nav `Type × Selection 1-5 × Options x2/x3/x5`; overflow.

**(c) Mapping + classification:** ToggleButtons is **largely already migrated**. `Type{Text,Icon}` maps to existing `iconOnly`. `Selection 1-5 / Options x2/x3/x5` are runtime child counts, not props. **Additive-now:** any new ds2026 colour delta via theme; overflow handling if Spec requires. **Major-only:** none.

**(d) Track C repoint** (ToggleButtons NOT in §9.1 seed direct list — already on `color.*`): minimal. Legacy sprinkles props `backgroundColor:'page'`, `borderColour:'gray'` (`ToggleButtons.css.ts:69-76`) pivot to semantic via C-P1. No `colours.*`/`typography.colour` to repoint.

**(e) ds2026 overrides:** selected fill uses `color.surface.hard`/`color.content.inverse` — ds2026 provides 2026 values if they differ; mostly grey.

**(f) Proposed TS:** none required beyond Spec-driven overflow; keep existing API.

**(g) Done-criteria:** base zero-diff; ds2026 look; sprinkles pivot only.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 633:3823, 633:4107, 787:9575. Capture toggle Type{Text,Icon}, selected/hover/disabled colours, overflow behaviour. docs/ds2026-specs/ToggleButtons.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P5. Branch feature/ds2026-w3c-p5-toggles. Scope=ToggleButtons. Component is already on color.*; pivot only the legacy sprinkles props (backgroundColor 'page', borderColour 'gray') to semantic per C-P1. Add ds2026 colour overrides only where Figma differs. Keep the existing API. INLINE_DATA=§3.1 + docs/ds2026-specs/ToggleButtons.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: no defaults changed; confirm already-migrated color.* refs untouched in value; base zero-diff.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=ToggleButtons).

### W3c-P6 — Pagination (page-level) (`790:10048`/`790:10316`) · Builder `sonnet` (shares dir with W2-P10)

**(a) Current API** (`lib/components/Pagination/Pagination.tsx`): `numPagesDisplayed?`(def 5), `activePage`/`total`/`pageSize`(req), `loading?`(def false), `onChange?`. `Bubble` (`Bubble.tsx`): `selected?`, `disabled?`, `gap?`, `onClick?`. Styling `style()` only; layout via `inline()` + Box sprinkles (`borderRadius="pill"`). SimplePagination composes `Button` only (no own css).

**(b) Figma axes:** Page number `790:10048` (`State{Selected,Default,Hover}`); Pagination picker `790:10316` (`Selected position{First,Middle,Last}×Type{Page sequence,Simple,Jump-to-page}`).

**(c) Mapping + classification:** Page-level state styling (Selected/Default/Hover) — **additive-now** via ds2026 colours. The picker Types are the **W2-P10** net-new work (augments the same dir); W3c-P6 restyles the existing page bubbles. **Coordinate story/token naming with W2-P10.** No default flip.

**(d) Track C repoint** (master §9.1: Pagination 5 direct refs; C-P/3c-P6):

| File:line | Old ref | New token | base | ds2026 |
|---|---|---|---|---|
| `Pagination.css.ts:8` | `colours.background.neutral` (gray300) | `color.foreground.tertiaryInactive`/`color.border.default` | grey | grey (Figma) |
| `Pagination.css.ts:24,28` | `colours.background.body` (white) | `color.background.default` | `#FFFFFF` | `#FFFFFF` |
| `Pagination.css.ts:25,29` | `colours.intent.primary.background.strong` (green700) | `color.button.primary.solid.border` or component token | current green700 | `#01C68C` |
| `Bubble.tsx:32-39` | legacy sprinkles `green900`/`gray200`/`transparent`; `colour` white/light | pivot via C-P1 | current | Figma |

> The `intent.primary.background.strong` (green700) selected-ring is chromatic → value-split (base=current, ds2026=Figma green). If it collides with another repoint, component-scoped `color.pagination.selected`.

**(e) ds2026 overrides:** selected-ring green per Figma; greys already Figma.

**(f) Proposed TS:** none required (Bubble already has `selected`/`disabled`). Page-hover state via ds2026.

**(g) Done-criteria:** base zero-diff; ds2026 page states; repoint value-split; no clash with W2-P10 dir additions.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 790:10048 (page number State{Selected,Default,Hover}); coordinate with 790:10316 (picker — W2-P10). Capture selected ring/fill/text colours. docs/ds2026-specs/Pagination.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P6. Branch feature/ds2026-w3c-p6-pagination. Scope=Pagination. Coordinate with W2-P10 (same dir) — do not clash on story/token names. Repoint the 5 refs per §W3c-P6(d) (greys base=Figma; green selected-ring value-split, component-scoped if collision). Pivot Bubble legacy sprinkles props via C-P1. INLINE_DATA=§3.1 + docs/ds2026-specs/Pagination.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: base byte-identical; green selected-ring base==green700; no conflict with W2-P10 additions; Bubble defaults unchanged.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope=Pagination).

### W3c-P7 — Toast / Alert intents (`772:26311`) · Builder `opus` (mandatory `sprinklesLegacyText` repoint)

**(a) Current API:**
- **Alert** (`lib/components/Alert/Alert.tsx`): `intent?:'danger'|'information'|'success'|'warning'`(def `'success'`), `inline?`(def false), `dismissible?`(def = has onRequestClose), `onRequestClose?`, `children?`, `className?`. Styling `style()` (single `contained`) + Box sprinkles + **`sprinklesLegacyText({color: intent})`** (`Alert.tsx:13,51`) — the `typography.colour` pathway. Legacy sprinkles: `backgroundColour="white"`, `borderColour="gray"`, `borderRadius="1"`, `boxShadow`, content `sprinkles({colour:'dark'})`, dismiss `sprinkles({colour:'muted'})`. Intent bar via `<IntentStripe intent>` → `backgroundColour={intent}`.
- **Toaster** (`Toast.tsx`): `ToastProvider`, `useToast()` returning `fn` + `.success/.danger/.information/.warning`; renders via `<Alert>` (inherits all Alert legacy debt). Own css `vars.space['3']`, easing — no colour.

**(b) Figma axes** (`772:26311`, frame `772:26311`): `Intent{Info-Blue,Success-Green,Warning-Yellow,Error-Red} × Size{Large,Small}`.

**(c) Mapping + classification:**

| Figma | Current | Classification | Action |
|---|---|---|---|
| `Intent{Info,Success,Warning,Error}` | `intent{information,success,warning,danger}` | naming map (Error==danger, Info==information) | keep union; do NOT rename. ds2026 intent colours. |
| `Size{Large,Small}` | none | **additive-now** add `size?:'small'|'large'` | default = current (Large likely). |

**Major-only:** renaming `danger`→`error`/`information`→`info`; flipping default intent.

**(d) Track C repoint** (master §9.1: Alert 2 direct + `sprinklesLegacyText`; C-P/3c-P7) — **mandatory**: replace `sprinklesLegacyText({color: intent})` with semantic intent text colours. Map intent→semantic:

| Intent | Legacy (`typography.colour.<intent>`) | New token | base (V_legacy) | ds2026 (V_2026) |
|---|---|---|---|---|
| information | `typography.colour.information` (blue500) | `color.info.text` | current blue500 | `#0D47A1` |
| success | `typography.colour.success` (green600) | `color.success.text` | current green600 | `#00574C` |
| warning | `typography.colour.warning` (yellow800) | `color.warning.text` | current yellow800 | `#96110E` |
| danger | `typography.colour.danger` (red600) | `color.alert.text` | current red600 | `#96110E` |
| surface white | `backgroundColour="white"` | `color.background.default` | `#FFFFFF` | `#FFFFFF` |
| border gray | `borderColour="gray"` (gray300) | `color.border.default` | `#D4D9DD` | `#D4D9DD` |

> Chromatic text tokens (info/success/warning/alert `.text`): **value-split** — base=current typography.colour value, ds2026=Figma. **Collision:** `color.success.text`/`color.alert.text` may be shared with InputBase (W3b-P1 used `.foreground`, not `.text`, so no clash) — Reviewer greps. IntentStripe bar `backgroundColour={intent}` pivots via C-P1.

**(e) ds2026 overrides:** `color.info.text:#0D47A1`, `color.success.text:#00574C`, `color.warning.text:#96110E`, `color.alert.text:#96110E`; alert backgrounds per Spec (`color.*.background*`). base keeps current.

**(f) Proposed TS:** `Alert.size?: 'small' | 'large'` (def matches current, likely `'large'`). Toast passes through.

**(g) Done-criteria:** `sprinklesLegacyText` removed from Alert; intents on semantic `.text` tokens (value-split); base zero-diff for Alert AND Toaster; size additive; no intent rename.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Node 772:26311 (frame 772:26311). Capture Intent{Info,Success,Warning,Error}×Size{Large,Small}: text colour, bg, border, icon per intent; which size == current. Map to color.{info,success,warning,alert}.{text,foreground,background}. docs/ds2026-specs/Alert.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P7. Branch feature/ds2026-w3c-p7-alert-toast. Scope="Alert Toaster". MANDATORY: replace sprinklesLegacyText({color: intent}) with semantic color.{info,success,warning,alert}.text per §W3c-P7(d) (value-split: base=current typography.colour, ds2026=Figma). Repoint white/gray surfaces. Add Alert size additively (default=current). DO NOT rename intent values. Verify Toaster (renders via Alert) base byte-identical. INLINE_DATA=§3.1 + docs/ds2026-specs/Alert.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: sprinklesLegacyText gone from Alert; intent default 'success' & union unchanged; .text tokens base==current typography.colour; Toaster base zero-diff; collision-grep color.success.text/color.alert.text.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope="Alert Toaster").

### W3c-P8 — Progress / Steps / Loaders / Spinner (`816:7775`/`816:7833`/`816:8124`, `828:8460`/`828:8483`) · Builder `sonnet`

**(a) Current API (family):**
- **ProgressSpinner** (`ProgressSpinner.tsx`): `size?:'small'|'medium'|'large'`(def medium), `colour?:'danger'|'default'|'light'|'primary'|'secondary'|'warning'`(def primary), `className?`. Styling `styleVariants()` `colours` + per-size objects.
- **ProgressBar** (`ProgressBar.tsx`): `value?`(def 0), `colour?:'red'|'green'|'blue'|'yellow'|'neutral'`(def green). Colour via JS `backgroundColorMap` → legacy sprinkles values.
- **ProgressBarGroup**: `values`(req), `count?`, `prefixLabels?`/`suffixLabels?`, `colour?`. `LinearProgressIndicator`: `className?` only. `SliderProgress`/`ProgressStep`: consumer `backgroundColour` passthrough.

**(b) Figma axes:** Step `816:7775` (`Size×Arrangement{V,H,Default}×Number-only×Selected`); Step progress `816:7833` (`Steps x3/x4/x5×Size×Layout`); Stages `816:8124` (`Selected stage 1-4`); Loader spinner `828:8460` (`Progress 1-4`); Loader strip `828:8483` (`Stage 0/50/100`).

**(c) Mapping + classification:** These are largely restyle-via-colour. **Additive-now:** ds2026 colour deltas; any new size/arrangement values added to unions with current defaults. Note Step/Step-progress/Stages Figma nodes largely correspond to net-new Wave-2 work (StagesLoader = W2-P8) — W3c-P8 focuses on the **existing** ProgressSpinner/ProgressBar/LinearProgressIndicator/SliderProgress restyle+repoint. **Major-only:** default colour flips.

**(d) Track C repoint** (master §9.1: ProgressSpinner 6 direct refs; C-P/3c-P8):
- **ProgressSpinner** (`ProgressSpinner.css.ts:44-63`): `:46` `typography.colour.danger`→`color.alert.foreground`; `:49` `colours.foreground.body`→`color.foreground.primary`; `:52` `typography.colour.white`→`color.foreground.reverse`; `:55` `typography.colour.primary`(green600)→`color.button.primary.solid.pressed` or component token; `:58` `typography.colour.secondary`(gray700)→`color.foreground.secondary`(gray? note gray700=#484C5F=`color.foreground.secondary`); `:61` `typography.colour.warning`→`color.warning.foreground`. Value-split for chromatic (danger/primary/warning); grey-derived (body/white/secondary) base=Figma.
- **ProgressBar** `backgroundColorMap` (red500/green500/blue500/yellow600/gray500) — legacy sprinkles values; pivot to semantic via C-P1; value-split for the chromatic mappings. **LinearProgressIndicator** hardcoded `green300`/`gray200` sprinkles → semantic. **SliderProgress** consumer-driven (no repoint).

**(e) ds2026 overrides:** spinner/bar chromatic colours per Figma (green `#01C68C`, red `#D42B26`, yellow `#F69A1F`, blue `#0D54E5`); greys already Figma.

**(f) Proposed TS:** none required beyond Spec-driven size/arrangement; keep existing `colour`/`size` unions.

**(g) Done-criteria:** ProgressSpinner 6 refs repointed (value-split); ProgressBar/LinearProgressIndicator colour pivot; base zero-diff across the family; ds2026 chromatic colours; SliderProgress untouched.

**Prompts:** SPEC `[SPEC-BOILERPLATE]` + `Nodes 816:7775/7833/8124, 828:8460/8483. Capture spinner/bar/strip colours per state, sizes, arrangements. Map chromatic colours to color.{success,alert,warning,info}.foreground and greys to color.foreground.*. docs/ds2026-specs/Progress.md.` · BUILDER `[BUILDER-BOILERPLATE]` + `Package W3c-P8. Branch feature/ds2026-w3c-p8-progress. Scope="ProgressSpinner ProgressBar ProgressBarGroup LinearProgressIndicator SliderProgress". Repoint ProgressSpinner 6 refs per §W3c-P8(d) (value-split chromatic; grey base=Figma). Pivot ProgressBar backgroundColorMap + LinearProgressIndicator hardcoded greens to semantic via C-P1 (value-split). Leave SliderProgress (consumer-driven). Keep colour/size unions & defaults. INLINE_DATA=§3.1 + docs/ds2026-specs/Progress.md.` · REVIEWER `[REVIEWER-BOILERPLATE]` + `Package-specific: ProgressSpinner default colour 'primary'/size 'medium' unchanged; 6 legacy refs gone; chromatic base==current; base zero-diff across family; SliderProgress untouched.` · VERIFY `[VERIFY-BOILERPLATE]` (Scope="ProgressSpinner ProgressBar ProgressBarGroup LinearProgressIndicator SliderProgress").

---

## Package summary — dependencies, gates, OU

Every package's gate suite is identical (§0.4): `yarn lint` + `yarn test run <Scope>` + `yarn test:a11y` + Chromatic (base zero-diff, ds2026 intended-delta). Every package ships a **minor** changeset. Dependencies below are IN ADDITION to the universal `W3-P0` + relevant W1 tokens.

| Pkg | Component(s) | Builder | Extra deps (beyond W3-P0 + W1) | Track C refs | OU |
|---|---|---|---|---|---|
| W3-P0 | ds2026 theme scaffold + ADR | opus | W1-P1 | — | OU-25/OU-2 |
| W3a-P1 | Button | opus | W1-P2 (button colours), C-P1 | 3 (intent + 2 typo) | OU-8/OU-34 |
| W3a-P2 | CheckBox | sonnet | C-P1 | 3 (+CheckableBase) | OU-8 |
| W3a-P3 | Radio | sonnet | **W3a-P2** (CheckableBase repointed) | 3 | OU-8 |
| W3a-P4 | Switch | sonnet | C-P1 | 4 | OU-8 |
| W3a-P5 | StarRating | sonnet | C-P1 | 2 | OU-8 |
| W3b-P1 | TextInput/TextArea (InputBase spine) | opus | C-P1 | **24** | OU-8 |
| W3b-P2 | CompoundField (net-new) | opus | **W3b-P1** | 0 (inherits spine) | OU-8 |
| W3b-P3 | SelectInput/DropDown | sonnet | **W3b-P1** | 1 (DropDown) | OU-8 |
| W3b-P4 | SelectionField (net-new) | opus | W3a-P2/P3/P4 + W3b-P1 | 0 | OU-8 |
| W3b-P5 | Date set | opus | **W3b-P1** + W1-P3 (elevation.z*) | spine + Calendar grep | OU-8 |
| W3b-P6 | Slider/Stepper | sonnet | C-P1 | 4 (Slider) + 2 (Stepper) | OU-8 |
| W3c-P1 | Badge | sonnet | shared intentColorset C-package | via intentColorset | OU-10/OU-11 |
| W3c-P2 | TextLink | sonnet | W1-P2 + **§6-Q3** (linkedText) | 3 | OU-11 |
| W3c-P3 | Tooltip | sonnet | C-P1 | via sprinkles | OU-10 |
| W3c-P4 | Tabs | opus | C-P1 | ~15 (14 Tab + 1 TabList) | OU-9 |
| W3c-P5 | ToggleButtons | sonnet | C-P1 | ~0 (already migrated) | OU-9 |
| W3c-P6 | Pagination | sonnet | **W2-P10** coordination | 5 | OU-9 |
| W3c-P7 | Toast/Alert | opus | C-P1 | 2 + sprinklesLegacyText | OU-10 |
| W3c-P8 | Progress/Loaders | sonnet | C-P1 | 6 (ProgressSpinner) | OU-9/OU-10 |

**Cross-package shared-file serialisation (must respect):**
- `private/InputBase/*` → **W3b-P1 first**; W3b-P2/P3/P5 (and any input consumer) rebase; no re-assignment of spine base tokens.
- `private/CheckableBase/*` → repointed **once in W3a-P2**; W3a-P3 depends on it.
- `lib/styles/intentColorset.css.ts` → repointed in a **standalone shared C-package** (not inside Badge); W3c-P1 Badge depends on it. Also feeds any other intent-coloured component.
- `lib/components/Pagination/*` → shared by **W2-P10** (picker, net-new) and **W3c-P6** (page restyle) — coordinate names.
- `lib/themes/ds2026/tokens.ts` → **every** package appends to the same deepmerge override object; serialise commits or expect merge conflicts (mechanical). The collision rule governs `base/tokens.ts` writes.

---

## Deviations & open items

Items where the real repo diverged from what the master plan assumed, plus concrete proposals flagged for Reviewer scrutiny and unresolved blocks. None contradicts the master; each is logged here per the master's instruction.

### D. Repo reality vs master assumptions

1. **"InputBase" is not a single primitive.** Master §9.1/§4 W3b-P1 says "`private/InputBase`, 24 refs". Confirmed **exactly 24**, but there is **no `InputBase.tsx`** — the primitive is `withEnhancedInput.tsx` (HoC, owns styling orchestration) + `NotchedBase.tsx` (border geometry) + **`InputState.css.ts`** (20 of the 24 refs, the state→colour map). **DateInput** also flows through this spine (master only listed TextInput/TextArea/SelectInput). W3b-P1 must test all four consumers. *(Plan updated: W3b-P1 Scope includes DateInput.)*

2. **Button's effective default `variant` is `'secondary'`, not `'primary'`.** Master §2.3 lists Button "defaultVariants … intent primary". True at the recipe level (`Button.css.ts:410-415` `intent:'primary'`), but the component **always passes `variant='secondary'`** (`Button.tsx:137`), so the rendered default is **secondary**. This matters for the MFE stat (secondary 276 usages) and for pixel-identity: the Reviewer must assert **both** the recipe defaultVariants AND the component-level `variant` default (`'secondary'`) are unchanged. *(Captured in W3a-P1(a) and its Reviewer checks.)*

3. **CheckBox / Radio / Switch have NO `size` or `color` props today.** The Figma `Color{Green,Black} × Size{Large,Small}` axes are **entirely net-new** additive prop axes. The current single look is "black" (accent = `colours.foreground.body` = gray900) at a fixed 24px box. The Spec agent must confirm **which Figma size equals the current 24px** (likely `large`) so the default maps correctly. **Radio is styled with bare `style()` (no variants)** and **Switch/StarRating/CheckBox use `styleVariants()`** — adding the color/size axes requires refactoring these into variant-keyed styles (or a `recipe`) while preserving byte-identical default output. Only **Button** has a real variant `recipe` with `defaultVariants`.

4. **`CompoundField` and the "Selection input group" do not exist.** Master W3b-P2/W3b-P4 hinted "likely new subcomponent". Confirmed absent — field joining is done ad-hoc via `attach`/`borderMerged` on `NotchedBase`. **Proposed concrete APIs** for both (`CompoundField` §W3b-P2(c); `SelectionField` §W3b-P4(c)) are **flagged for Reviewer scrutiny** (new dir vs new prop; compose vs variant). These are net-new dirs (R6-safe, barrel + `default.ts` export).

5. **ToggleButtons and Tabs are already partly on the semantic `color.*` system.** ToggleButtons is **fully migrated** (uses `color.gamut/content/surface.*`; only legacy *sprinkles props* remain) — its Track C work is far lighter than the "Toggles" line implies. Tabs already uses `color.content.normal` for the `minimal`-active state (`Tab.css.ts:88-89`); W3c-P4 finishes the rest.

6. **Track C direct-ref counts differ slightly from §9.1 seed.** Tabs: master says **12**, actual is **~15** (14 in `Tab.css.ts` + 1 in `TabList.css.ts`, excluding the 2 already-migrated `color.*`). ProgressSpinner **6** confirmed; Pagination **5** confirmed; Switch **4** confirmed; private/InputBase **24** confirmed; Button **3** confirmed. The Tabs count delta is a seed-count artefact (master §9.1 is "seeded, complete in W1-P0"); W3c-P4 repoints all found refs regardless.

7. **`SimplePagination` and `Toaster` have no own colour/styling to repoint.** SimplePagination composes `Button` only (no `.css.ts`); Toaster renders through `Alert`. Their look is 2026-capable transitively once Button (W3a-P1) and Alert (W3c-P7) land — no standalone package needed, but W3c-P7 must verify **Toaster** Chromatic (it inherits Alert).

8. **Slider is already off legacy `typography.colour`** — it uses `colours.gamut.*` directly (gray300/gray200/gray900/gray500) + hardcoded rgba shadows. The **thumb-disabled `gray500` (`#6C7283`) has no exact §3.1 semantic grey token** (§3.1 greys are gray900/700/600/400/300/200/100 semantic roles; gray500 is not mapped to a role) → W3b-P6 uses a **component-scoped `color.slider.thumbDisabled`** (collision rule step 3) and records it in master §6.

### E. Concrete proposals flagged for Reviewer (not resolved here)

- **Button Class/Style prop names.** BOTH Figma axis names collide in React: `style` is the built-in pass-through prop typed `CSSProperties` (redefining it as a string union breaks consumers passing inline styles), and `class` risks confusion with DOM `className`/JSX. Primary recommendation `buttonClass` + `buttonStyle`; alternates `tone`/`fill` or `kind`/`appearance` (§W3a-P1(f)). The W3a-P1 Builder+Reviewer choose and **record the final names in the G-P1 ADR log** — the W4-P1 MFE codemod reads its target prop names from its JSON config, so the ADR-recorded names propagate into the wave-4 codemod configuration.
- **CompoundField / SelectionField APIs** (§W3b-P2(c), §W3b-P4(c)) — proposed as thin compositions over existing mechanisms; Reviewer confirms the subcomponent-vs-prop decision.
- **StarRating filled-star token** — proposed `color.warning.backgroundDark` (`#FFC001`, == current shine yellow500) or component-scoped `color.starRating.filled` if Spec finds a different Figma star yellow.
- **Badge intent-colour repoint** deferred to the shared `intentColorset.css.ts` C-package (not Badge's package) to avoid blast-radius; Badge depends on it.

### F. Unresolved master §6 questions that block/shape Wave-3 packages (design around; do NOT resolve)

- **§6-Q5 (Button 7-intent → 3-Class mapping; fate of `variant`).** W3a-P1 adds `class`/`style` **alongside** `variant`; leaves the 7 legacy intents routing through `colours.intent.*` untouched. The eventual 7→3 collapse + `variant` removal is **major-only** (W4-P4). Do not resolve.
- **§6-Q3 (`color.button.linkedText.*` values / WIP namespace).** **Blocks the TextLink (W3c-P2) repoint of `typography.colour.link`.** If unresolved when W3c-P2 runs, keep TextLink on the legacy `link` colour and ship only the additive `linkColour`/`icon` props + note the block. Never ship WIP-namespace tokens.
- **§6-Q1 (palette label vs variable hex; Blue-200/info-background).** All ds2026 hex use the **variable** values from master §3.1; Spec agents source from bound variables. Any mismatch flagged, proceed on the variable.
- **§6-Q2 (radius `medium` 8-vs-12; `small`/`md` both 8).** Affects any package taking a `medium`/`small` radius from ds2026 (Button, inputs, Badge). Use the additive W1-P3 radius aliases (`small`=8, `medium`=12); do not dedupe. Where a component's ds2026 radius is ambiguous, Spec records the measured px and the Builder uses the matching W1-P3 alias.
- **§6-Q4 (size naming inconsistency: Button Large/Small/XSmall, Badge S/L, controls Large/Small).** Wave-3 keeps each component's **existing** size union and adds Figma sizes as new values; no unified scale is imposed pre-major.
- **§6-Q6 (semibold 600 vs current 500).** TextLink defaults `weight:'semiBold'` (currently 500). Do NOT change `fontWeight.semiBold` globally; if ds2026 TextLink needs 600, deliver via a component style, not a global token change. Flag.

### G. Assumptions the executors should re-verify

- **C-P1 (semantic sprinkles parity) is a prerequisite** for every package that pivots a legacy sprinkles prop (`colour`/`backgroundColour`/`border*Colour`) to the semantic equivalent (Stepper, DropDownOption, Tooltip, Alert/IntentStripe, ProgressBar, LinearProgressIndicator, ToggleButtons, Bubble). It is owned by Track C (master §4.C), not re-specified here. If a package needs a semantic sprinkles value that C-P1 has not yet added, that package is **blocked on C-P1** — do not add legacy usage.
- **`color.button.*` base values (W1-P2)** must exist before W3a-P1/W3c-P6 can value-split onto them. Confirm W1-P2 landed and the `linkedText` keys are absent-until-Q3.
- **ds2026 elevation `z1–z4` (W1-P3)** must carry the real blur/spread/rgba (fetched from Figma node `360:12800`) before W3b-P5 (date picker "Shadow" style) and any shadowed surface can use them.

