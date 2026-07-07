# Track C — Legacy → Semantic Colour Internalisation (execution plan)

> **Parent:** [`../../design-system-2026-migration-plan.md`](../../design-system-2026-migration-plan.md) — this file **expands** the master's Track C section (§4.C, §9.1, §0 Golden-rule exception). It never overrides the master; where the two disagree, the master wins and the disagreement is logged in [Deviations & open items](#deviations--open-items).
> **Repo:** `@autoguru/overdrive` @ `4.59.0` · branch context `feature/AG-19959-overdrive-colour` (do NOT switch branches; this doc is the only deliverable).
> **Audience:** Sonnet-class Builder / Reviewer / Verify agents with ONLY the repo, this file, and the master plan. Everything needed to execute a package is inlined here.
> **Measured:** all counts and file:line refs below were gathered read-only from this repo on 2026-07-07 (grep commands reproduced in [§ The measured inventory](#the-measured-inventory)).

---

## 1. Mechanism recap (self-contained)

Track C moves every Overdrive component off the **legacy** colour contract (`colours.*`, `typography.colour`, and the legacy sprinkles props `colour` / `backgroundColour` / `border*Colour`) onto the **semantic** contract (`color.*`, and the semantic sprinkles props `color` / `backgroundColor` / `border*Color`), **without shifting a single base-theme pixel**, and in doing so makes each component "2026-capable" under the opt-in `ds2026` theme.

Two parallel colour systems exist in the contract today (`lib/themes/theme.css.ts`):

- **Legacy `colours.*`** — `gamut` (flat keys `gray900…red100`, `white`), `foreground` (`body`, `link`), `background` (`body`, `light`, `neutral`, `neutralDark`), `intent` (9 intents × `{background.{standard,mild,strong}, foreground, border}`). Plus `typography.colour.*` (14 named text colours). This is what components render **today**.
- **Semantic `color.*`** — `gamut` (nested `{gray:{900…100}, …, white}`), `surface`, `content`, `interactive` (2025, partially wired), **plus** the DS-2026 namespaces `foreground` / `background` / `border` / `info` / `success` / `warning` / `alert` / `button` added by Wave 1 (W1-P1, W1-P2).

### 1.1 Value-preserving repoint (the chosen mechanism, ratified by W3-P0 ADR)

For each component: replace every legacy token ref with the equivalent semantic `color.*` token; set that token's **base** value to the exact value the legacy token resolves to **today** (`V_legacy`), and its **`ds2026`** value to the Figma value (`V_2026`, §3.1 of master). The base theme renders **byte-identical** pixels — Chromatic base-theme zero-diff is the per-package gate — and the same repoint carries the real 2026 look under `ds2026`.

### 1.2 Value-split rule (deterministic — executors follow exactly)

- `V_2026` = Figma hex (master §3.1). `V_legacy(component)` = the value the component renders today for that token.
- **`base/tokens.ts[T]`** = `V_legacy` when an existing component is being repointed onto `T` in this package **and** `V_2026 ≠ V_legacy`; otherwise `V_2026`. (Grey-/red-derived tokens have `V_2026 == V_legacy` post-W0-P1, so the split is moot for them — see the equalities table in §1.6.)
- **`ds2026/tokens.ts[T]`** = `V_2026` **always**.

### 1.3 Golden-rule exception (verbatim from master §0)

> **EXCEPTION (Track C only):** a semantic `color.*` key **introduced by Wave 1** MAY be revalued in `base/tokens.ts` per the §4.C value-split rule PROVIDED the package proves **(a)** zero MFE usage of that key (grep the mfe repo for the key path — record the grep output in the PR) and **(b)** Chromatic base-theme zero-diff. Legacy `colours.*`, `space`, `radius`, `elevation` 1–5, and typography keys are **NEVER** revalued — no exception.

Restated for the value-split (master §4.C): "revaluing `base[T]` here is the ONE sanctioned exception to the §0 Golden Rule … It applies ONLY to semantic `color.*` keys introduced by Wave 1, and ONLY with the two pieces of evidence recorded in the PR: (a) mfe-repo grep output proving zero MFE usage of the key path, and (b) Chromatic base-theme zero-diff."

### 1.4 Token-collision rule (deterministic)

Two components repointing onto the **same** shared semantic token `T` can carry different `V_legacy`. If `T` is already base-assigned `V_legacy(A)` from an earlier repoint and component B's `V_legacy(B) ≠ base[T]`: **do NOT change `base[T]`.** Resolve, in order:

1. If `V_legacy(B)` equals some **other** existing semantic token's base value → repoint B onto that token instead.
2. If the Figma spec genuinely maps B's surface to `T` → **defer** B's repoint into B's Wave-3 restyle package (change is intended + opt-in via `ds2026`).
3. Only if B has no Wave-3 restyle → add a component-scoped token (`color.<component>.<role>`) with `base=V_legacy(B)`, `ds2026=V_2026`, and record it in master §6 for the design team.

The **Reviewer must grep `base/tokens.ts` for the token key before any assignment**; if it already carries a repoint-assigned value, follow this rule — never overwrite.

### 1.5 The gamut fallback (Track-C-local refinement — deterministic, keeps the collision/value-split trivial for standalone repoints)

**Semantic-replacement priority for every repointed ref:**

1. A **named** semantic token whose current **base** value equals `V_legacy` exactly (see §1.6 equalities). Use this for components that have a Wave-3 restyle (the value-split then gives `ds2026` the Figma value).
2. **Else the raw `color.gamut.<name>.<grade>`** whose hex equals `V_legacy` exactly.

`color.gamut.*` **is** part of the semantic contract (`color.gamut === colours.gamut` hex-for-hex in the base theme, same source `colourMap`), so a gamut repoint (a) moves the ref off `colours.*`/`typography.colour`, (b) is guaranteed zero base-drift, and (c) needs **no** value-split and **triggers no collision**. Standalone components (no Wave-3 restyle, no designed 2026 look) therefore repoint onto `color.gamut.*` and render identically under both base and `ds2026` — the Track-C goal is *getting off legacy*, not restyling. The named-semantic upgrade + `ds2026` divergence is deferred to a future restyle if/when one is designed.

> **⚠ Correction (theme-bridge, C-theme-bridge corrective package).** An earlier draft asserted the semantic gamut "already holds its final value in every theme". That is **false without the theme-bridge**: `flat_red`, `neutral`, and every MFE tenant theme override **only** the legacy `colours.gamut` (and `colours.intent`) — they set **nothing** under semantic `color.*`. A raw-hex `color.gamut` would therefore drift under those themes (it would keep base's grey/green ramp while the tenant re-tinted the legacy gamut). The corrective package fixes this by making **`base/tokens.ts` `color.gamut` alias the legacy `colours.gamut` CSS vars** (each leaf = `var(--od-colours-gamut-*)`; see `lib/themes/base/tokens.ts`). Because tenants deep-merge over base, overriding `colours.gamut` now transparently drives the semantic gamut too — computed values stay byte-identical in base, and gamut repoints are theme-correct under all themes. The alias flips back to raw hex at the DS-2026 major (W4-P4), once tenants populate the semantic gamut directly.

> **Rule — intent-derived legacy refs are NEVER repointed in Track C (major-only).** A legacy ref that reads from `colours.intent.*` (or a legacy JSX intent prop value such as `backgroundColour="neutral"`/`"primary"`) **stays on the legacy contract until the DS-2026 major.** No semantic `color.*` slot can follow a theme's per-intent override: `flat_red`/tenants override `colours.intent` with custom palettes, `neutral` overrides `colours.intent.primary` to grey, and runtime brand overrides (`useColorOverrides`) write **only** the legacy intent vars. Repointing an intent-derived ref onto a fixed semantic gamut grade (even one that equals the base intent hex) would freeze the base value and silently drop those per-theme / runtime-branding overrides. The theme-bridge only rescues **gamut→gamut** repoints; **intent→gamut** repoints must be reverted to their legacy `colours.intent.*` refs and left there until the major.
>
> **Extension — tenant-variant namespace keys are also retained.** A named legacy namespace key is repointable only if NO theme — including the MFE tenant themes — overrides it to a value that diverges from the (unbridged) semantic target. Known tenant-variant key: **`colours.background.light`** (smartFleet + ampol override it to their custom `gray['100']`, while `color.background.emphasisInactive` is raw base `#eef0f2`) — RETAINED wherever found (first hit: AutoSuggest C-P8, corrected in review; also retained on BulletText `:16` in C-P4). **`colours.background.neutral`** is **theme-variant** too: the in-repo `neutral` theme overrides it to `gray400` while `color.background.inactive` is raw base `gray300` → RETAINED (Stack C-P4). Before any namespace repoint, check the tenant theme packages (`mfe/packages/themes/*/lib/*/tokens.ts`), not just the in-repo themes. Verified still-safe today: `background.body`, `foreground.body`, `typography.colour.{dark,neutral,muted}` (no theme/tenant overrides these three — C-P4 repointed the default text path onto `color.foreground.{primary,secondary,tertiaryInactive}`), `border.colours.gray` (no tenant/in-repo divergence).

> Consequence: **standalone Track C batches never invoke the Golden-rule exception** — gamut repoints don't revalue anything. The exception is only exercised by repoints folded into Wave-3 restyles, where a named chromatic token (e.g. `color.info.foreground`) gets `base=V_legacy`, `ds2026=V_2026`.

### 1.6 Base-value equalities (measured — drives every "V_legacy==V_2026?" cell)

Post-W0-P1 the base ramp hex (`lib/themes/base/colours.ts`) already equals the DS-2026 Figma variables for the grey/red-derived semantic tokens, so those repoints are value-safe with **no** split:

| Semantic token | base hex (V_legacy source) | Figma V_2026 (§3.1) | Equal? |
|---|---|---|---|
| `color.background.default` | `#ffffff` (white) | `#FFFFFF` | ✅ |
| `color.background.inactive` | `#d4d9dd` (gray300) | `#D4D9DD` | ✅ |
| `color.background.emphasisInactive` | `#eef0f2` (gray200) | `#EEF0F2` | ✅ |
| `color.foreground.primary` | `#212338` (gray900) | `#212338` | ✅ |
| `color.foreground.secondary` | `#484c5f` (gray700) | `#484C5F` | ✅ |
| `color.foreground.tertiaryInactive` | `#8f95a1` (gray400) | `#8F95A1` | ✅ |
| `color.foreground.tertiaryInactiveLight` | `#d4d9dd` (gray300) | `#D4D9DD` | ✅ |
| `color.foreground.reverse` | `#ffffff` (white) | `#FFFFFF` | ✅ |
| `color.border.default` | `#d4d9dd` (gray300) | `#D4D9DD` | ✅ |
| `color.border.emphasis` | `#8f95a1` (gray400) | `#8F95A1` | ✅ |
| `color.border.selected` | `#5c6172` (gray600) | `#5C6172` | ✅ |
| `color.border.strong` | `#212338` (gray900) | `#212338` | ✅ |
| `color.alert.foreground` | `#d42b26` (red600) | `#D42B26` | ✅ |
| `color.info.text` | `#0d47a1` (blue900) | `#0D47A1` | ✅ |
| `color.info.foreground` | `#0d54e5` (blue600) | `#0D54E5` | ✅ (but legacy `typography.colour.information` = `#0d59fc` blue500 ✗ — see below) |

**Known drift (needs value-split OR gamut fallback):**
- `typography.colour.information` = `blue500 #0d59fc`, whereas `color.info.foreground` Figma = `blue600 #0d54e5`. → standalone consumer (AutoSuggest) uses the **gamut fallback** `color.gamut.blue['500']`; a future Wave-3 info restyle uses `color.info.foreground` with a value-split.
- Legacy `intent.*` backgrounds/borders and `typography.colour.{primary,link,success,neutral,light,muted,shine,warning,danger}` map to specific ramp grades — repoint via §1.5 (gamut fallback for standalone, named token for restyled).

### 1.7 The base-Chromatic zero-diff gate

Every Track C package (C-P1 and every C-Pn repoint) is **additive on the base theme**: base-theme Chromatic stories must be **zero-diff**. Intended visual deltas are permitted **only** on `ds2026`-theme stories (which appear when a repoint is folded into a Wave-3 restyle). Use the master §4.0.1 stripped-`__hash` procedure to prove that mass snapshot churn is style-identical before running `-u`. Never `autoAcceptChanges` off `main`.

### 1.8 Interaction with Wave-3 restyles (fold vs standalone)

- **A component that has a Wave-3 restyle package** (W3a/3b/3c) folds its Track C repoint **into that package** — the repoint and the restyle ship together, no double work, and the named-semantic + value-split path (§1.5 rule 1) is used because `ds2026` will carry the designed look.
- **A component with no Wave-3 restyle** gets a **standalone Track C package** (C-P2…C-Pn) so nothing is stranded on legacy at the major; it uses the gamut fallback (§1.5 rule 2), base==ds2026.
- Ordering: if flipping `base[T]` to `V_legacy` (a folded value-split) changes the base look of a net-new Wave-2 component sharing `T`, re-run that component's Chromatic in the package and record it.

### 1.9 Track C package map

| Package | Scope | Depends on |
|---|---|---|
| **W1-P0** | Legacy-usage inventory (master prerequisite; the measured table below supersedes the master's seed §9.1). | W0 landed |
| **C-P1** | Semantic sprinkles parity + base value-preservation (the crux — §2). | W1-P1 (W3-P0 dependency dropped — ratified in master §5.2: C-P1 touches only `sprinkles.css.ts`, writes no `ds2026` tokens) |
| **C-P2…C-Pn** | Per-component **standalone** repoints, batched 3-6 (§4). | C-P1 |
| **C-P9** | ~~Shared style utilities repoint~~ **SUPERSEDED — retained until the major** (intent rule: both utilities are intent-derived/theme-overridden; see the C-P9 work order's supersession note). W3c-P1's C-P9 dependency dissolved. | — (no code ships) |
| _(folded)_ | Repoints for components with a Wave-3 restyle happen inside W3a/3b/3c (not a C-Pn). | C-P1 + paired W3 pkg |
| **C-final** | Inside W4-P4 (the major): delete `colours.*`, `typography.colour`, `sprinklesLegacyText`, legacy sprinkles props. | all C-Pn + all folded repoints complete |

**Release independence (master Appendix A batching rule):** Track C standalone batches (C-P2…C-P9) are release-independent — any subset merged before a Version Packages PR may batch into one minor (build-order is a dependency concern, not a release-coupling one); **C-P1 SHOULD publish in isolation** — it renumbers every vanilla-extract class hash and widens the sprinkles type surface, so its post-release MFE verification must run against exactly its delta, not mixed with other packages' changes.

---

## 2. C-P1 — semantic sprinkles parity + base value-preservation (the crux)

**Goal:** extend the **semantic** sprinkles property maps in `lib/styles/sprinkles.css.ts` so that **every legacy colour value has a semantic equivalent at the identical base value**. This unblocks every downstream repoint: components (and MFEs) can move `colour`/`backgroundColour`/`border*Colour` → `color`/`backgroundColor`/`border*Color`. Purely additive — no legacy property is removed, no existing semantic key changes value.

### 2.1 Exact current binding (measured — `lib/styles/sprinkles.css.ts`)

**Legacy properties (bind to `tokens.colours.*` / `typography.colour`) — enumerate every property + value key:**

| Legacy property | Source expression (line) | Value keys (base resolution) |
|---|---|---|
| `colour` | `mappedColours` ← `colours` (`:68-74, :105`) | Merge order `…colours.foreground` → `…typography.colour` → `…intentForegroundColours` → `unset` → `white`. **Resolved keys:** `body`(gray900), `link`(green600), `primary`(→intent white), `secondary`(→intent gray900), `brand`(→intent white), `shine`(→intent yellow500), `dark`(gray900), `muted`(gray400), `neutral`(→intent white), `light`(gray600), `danger`(→intent white), `warning`(→intent white), `success`(→intent white), `information`(→intent white), `white`(white), `unset`. ⚠ intent foregrounds OVERRIDE the typography.colour values for the 9 shared keys. |
| `backgroundColour` | `mappedBackgroundColours` ← `backgroundColours` (`:40-54, :82-85`) | `…intentBackgroundColoursStandard` (`primary`=green600, `brand`=green700, `secondary`=white, `shine`=gray200, `danger`=red600, `warning`=yellow800, `neutral`=gray700, `success`=green700, `information`=blue800) + **`…tokens.colours.gamut`** (flat `gray900…gray100, green900…green100, blue…, yellow…, red…, white`) + `transparent`. |
| `borderBottomColour` | `mappedBorderBottomColours` ← `borderColours` (`:63-66, :87-90`) | `…border.colours` (`light`=gray200, `gray`=gray300, `dark`=gray900) + `…intentBorderColours` (`primary`=green900, `brand`=gray900, `secondary`=gray300, `shine`=gray300, `danger`=red800, `warning`=yellow900, `neutral`=gray900, `success`=green900, `information`=blue900). |
| `borderLeftColour` | `mappedBorderLeftColours` ← `borderColours` (`:92-94`) | same as `borderBottomColour`. |
| `borderRightColour` | `mappedBorderRightColours` ← `borderColours` (`:96-99`) | same. |
| `borderTopColour` | `mappedBorderTopColours` ← `borderColours` (`:101-103`) | same. |

Legacy shorthands: `borderColour` / `borderColourX` / `borderColourY` (`:160-167`). Legacy type export `SprinklesLegacyColours` (`:335-344`). `sprinklesLegacyText` (a separate sprinkles set in `lib/styles/typography.css.ts:8-18`, values = `tokens.typography.colour` + `unset`).

**Semantic properties (bind to `tokens.color.*`) — enumerate every property + value key:**

| Semantic property | Source expression (line) | Value keys (base resolution) |
|---|---|---|
| `color` | `tokens.color.content` (`:125`) | `normal`(gray900), `soft`(gray700), `inverse`(white), `info`(blue900), `danger`(red800), `success`(green900), `warning`(yellow800). |
| `backgroundColor` | `{…tokens.color.surface, transparent}` (`:127-130`) | `page`(white), `hard`(gray900), `soft`(gray700), `accent`(green400), `success`(green700), `info`(blue600), `danger`(red600), `warning`(yellow800), `transparent`. |
| `borderBottomColor` | `borderColors` (`:56-61, :112`) | `default`(gray300), `muted`(gray200), `disabled`(gray100) + `…tokens.color.surface` (page/hard/soft/accent/success/info/danger/warning). |
| `borderLeftColor` | `borderColors` (`:113`) | same. |
| `borderRightColor` | `borderColors` (`:114`) | same. |
| `borderTopColor` | `borderColors` (`:115`) | same. |

Semantic shorthands: `borderColor` / `borderColorX` / `borderColorY` (`:152-159`), `bg`→`backgroundColor`, `fg`→`color` (`:150-151`).

**Gap:** the semantic maps expose neither the flat colour ramp (`gray900`, `green300`, … — which legacy `backgroundColour` exposes and MFEs use 297×) nor the Wave-1 DS-2026 namespaces (`foreground`/`background`/`border`/`info`/`success`/`warning`/`alert`). C-P1 closes this.

### 2.2 The additions (write these into `sprinkles.css.ts`)

These reference the Wave-1 tokens (`tokens.color.foreground/background/border/info/success/warning/alert`) added by **W1-P1** — hence C-P1 depends on W1-P1. `buildColourGamut` (`lib/themes/makeTheme.ts:51`) flattens a nested `ColourMap` to flat `name+grade` keys; reuse it on the semantic `color.gamut` so the flat keys are **hex-identical** to the legacy `colours.gamut` flat keys.

Add near the existing `borderColors` definition (after line ~61), replacing the three inline semantic maps with named, expanded ones:

```ts
// --- SEMANTIC COLOUR PARITY (C-P1) ---
// Flat semantic ramp: every legacy gamut key (gray900, green300, …) gets a
// semantic equivalent at the IDENTICAL base value (color.gamut === colours.gamut).
const semanticGamut = buildColourGamut({
	gray: tokens.color.gamut.gray,
	green: tokens.color.gamut.green,
	blue: tokens.color.gamut.blue,
	yellow: tokens.color.gamut.yellow,
	red: tokens.color.gamut.red,
});

// `color` (text/foreground) semantic value space
const semanticColor = {
	...tokens.color.content, // normal, soft, inverse, info, danger, success, warning (existing)
	...tokens.color.foreground, // primary, secondary, reverse, tertiaryInactive, tertiaryInactiveLight (W1-P1)
	infoText: tokens.color.info.text,
	infoForeground: tokens.color.info.foreground,
	successText: tokens.color.success.text,
	successForeground: tokens.color.success.foreground,
	warningText: tokens.color.warning.text,
	warningForeground: tokens.color.warning.foreground,
	alertText: tokens.color.alert.text,
	alertForeground: tokens.color.alert.foreground,
	...semanticGamut, // gray900 … red100
	white: tokens.color.gamut.white,
	unset: 'unset',
};

// `backgroundColor` semantic value space
const semanticBackgroundColor = {
	...tokens.color.surface, // page, hard, soft, accent, success, info, danger, warning (existing)
	...tokens.color.background, // default, reverse, inactive, emphasisInactive (W1-P1)
	infoBackground: tokens.color.info.background,
	successBackgroundDark: tokens.color.success.backgroundDark,
	successBackgroundLight: tokens.color.success.backgroundLight,
	warningBackgroundDark: tokens.color.warning.backgroundDark,
	warningBackgroundLight: tokens.color.warning.backgroundLight,
	alertBackground: tokens.color.alert.background,
	...semanticGamut,
	white: tokens.color.gamut.white,
	transparent: 'transparent',
};

// `border*Color` semantic value space
const semanticBorderColor = {
	default: tokens.color.interactive.border, // existing (gray300)
	muted: tokens.color.interactive.borderMuted, // existing (gray200)
	disabled: tokens.color.interactive.borderDisabled, // existing (gray100)
	...tokens.color.surface, // existing
	...tokens.color.border, // W1-P1: default(=gray300, same), emphasis, selected, strong
	...semanticGamut,
	white: tokens.color.gamut.white,
	transparent: 'transparent',
};
```

Then wire them into `baseProperties.properties` (replace the current inline bindings at `:112-131`):

```ts
			borderBottomColor: semanticBorderColor,
			borderLeftColor: semanticBorderColor,
			borderRightColor: semanticBorderColor,
			borderTopColor: semanticBorderColor,
			// … legacy border*Colour props UNCHANGED …
			color: semanticColor,
			// … legacy `colour` prop UNCHANGED …
			backgroundColor: semanticBackgroundColor,
			// … legacy `backgroundColour` prop UNCHANGED …
```

Update the `valueArrays` export (`:348-362`) additively if Storybook controls need the new keys (optional; do not remove existing entries).

### 2.3 Compatibility constraints (hard)

1. **Legacy properties untouched.** `colour`, `backgroundColour`, `borderBottomColour`/`Left`/`Right`/`Top` + their shorthands + `SprinklesLegacyColours` + `sprinklesLegacyText` stay **exactly** as they are. C-P1 only *adds* to the semantic maps. Both systems coexist until the major (C-final).
2. **No existing semantic key changes value.** `semantic*` maps are strict supersets of the current inline maps. Collision check: `color.border.default` (W1-P1, `#D4D9DD`) is spread after `color.interactive.border` (`gray300 #d4d9dd`) — **same hex**, zero drift. No other key collides (`content`↔`foreground`, `surface`↔`background`, gamut keys are all disjoint).
3. **Snapshot churn is total and expected.** Adding value keys to a sprinkles `defineProperties` block **renumbers every Vanilla-Extract `__hash` suffix** across the whole library (all `*.css.ts`). Expect mass snapshot diffs that are **style-identical**. Apply the master §4.0.1 procedure:
   ```bash
   yarn test run   # capture failures
   git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g' > /tmp/stripped.diff
   # stripped.diff empty of meaningful +/- ⇒ hash-only churn ⇒ safe to `yarn test run -u`
   ```
   The stripped diff MUST be empty (no declaration changes) — C-P1 adds no consumer, so no rendered rule changes, only class-name hashes move. Chromatic base-theme must be **zero-diff**.
4. **No new peer dependency.** `buildColourGamut` and `mapValues` are already imported.
5. **Type surface.** `Sprinkles` widens (more accepted keys) — purely additive; `SprinklesLegacyColours` unchanged.

### 2.4 Done-criteria (C-P1)

- Every legacy colour value has a semantic equivalent at the **identical base value**: the flat ramp (`gray900`…`red100`, `white`) on `color`/`backgroundColor`/`border*Color`; the Wave-1 namespaces on the semantically-appropriate prop.
- `yarn lint` clean; `yarn test run` churn is hash-only (stripped diff empty); `yarn test:a11y` passes; Chromatic base-theme zero-diff.
- Legacy props + `sprinklesLegacyText` still exported and unchanged.
- No `base/tokens.ts` / `theme.css.ts` value edited (C-P1 touches only `sprinkles.css.ts`; the token *values* it references were assigned in W1-P1).

### 2.5 C-P1 agent prompts (fully filled)

**BUILDER — `opus`** (shapes the whole track)
```
You are the Builder for work package C-P1 — Semantic sprinkles colour parity + base value-preservation — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feat/track-c-p1-sprinkles-parity off main (do not touch other branches).

HARD RULE (additive/opt-in): Do NOT change the value of any existing token key, do NOT rename/remove any token key, do NOT change any component's default prop values or prop semantics, do NOT rename/remove any component directory, do NOT change the shape of exported ColourMap/ThemeTokens or any elevation value. New capability = new keys / new sprinkles VALUE keys only. Legacy sprinkles props (colour/backgroundColour/border*Colour) and sprinklesLegacyText must remain byte-for-byte as they are.
EXCEPTION (Track C only): a semantic color.* key introduced by Wave 1 MAY be revalued in base/tokens.ts per the value-split rule — BUT C-P1 does NOT revalue anything (it only references W1-P1 tokens from sprinkles.css.ts). If you find yourself editing base/tokens.ts, STOP: that is out of scope for C-P1.
SILENT-FAILURE WARNING: vars.space[...] (556×) and colours.* (390×) drift with no compile error — you are not touching them; keep it that way.

FILES TO MODIFY: lib/styles/sprinkles.css.ts (only).
TARGET SHAPE (implement exactly): add `semanticGamut = buildColourGamut({gray:tokens.color.gamut.gray, green:…, blue:…, yellow:…, red:…})`; add maps `semanticColor` (= tokens.color.content + tokens.color.foreground + info/success/warning/alert .text/.foreground as infoText/infoForeground/…/alertForeground + semanticGamut + white + unset), `semanticBackgroundColor` (= tokens.color.surface + tokens.color.background + info/success/warning/alert background(s) as infoBackground/successBackgroundDark/successBackgroundLight/warningBackgroundDark/warningBackgroundLight/alertBackground + semanticGamut + white + transparent), `semanticBorderColor` (= interactive.border/borderMuted/borderDisabled as default/muted/disabled + tokens.color.surface + tokens.color.border + semanticGamut + white + transparent). Bind `color: semanticColor`, `backgroundColor: semanticBackgroundColor`, `border{Bottom,Left,Right,Top}Color: semanticBorderColor` in baseProperties. Leave all legacy props unchanged. (Full source is in Track C plan §2.2.)
DATA (use verbatim — do NOT fetch Figma): the W1-P1 semantic tokens already exist in lib/themes/theme.css.ts + base/tokens.ts; buildColourGamut is exported from lib/themes/makeTheme.ts. Base equalities that guarantee zero drift are in Track C plan §1.6 (grey/red-derived tokens already equal the Figma values; color.border.default == color.interactive.border == gray300).
STEPS: 1) confirm W1-P1 tokens (color.foreground/background/border/info/success/warning/alert) exist in theme.css.ts + base/tokens.ts; if absent, STOP (C-P1 depends on W1-P1). 2) add the three maps + semanticGamut. 3) rebind the four semantic props. 4) run gates.
DONE-CRITERIA: Track C plan §2.4 — every legacy colour value has a semantic equivalent at identical base value; legacy props unchanged; lint clean; snapshot churn hash-only (stripped diff empty); Chromatic base zero-diff.

Then run gates yourself before handing off: `yarn lint`; `yarn test run`; `yarn test:a11y`.
For snapshot churn follow the stripped-suffix procedure in the plan §2.3 — the stripped diff MUST be empty (do not blanket -u without confirming). Report what changed, gate results, and any assumption.
```

**REVIEWER — `opus`**
```
You are the adversarial Reviewer for C-P1 in the Overdrive → DS-2026 migration. Inspect branch feat/track-c-p1-sprinkles-parity. Produce PASS/FAIL with file:line evidence per check:
1. Did any EXISTING token key change value or get renamed/removed? Diff lib/themes/theme.css.ts + all */tokens.ts — must show NO changes at all (C-P1 must touch only lib/styles/sprinkles.css.ts). FAIL if any tokens.ts or theme.css.ts line changed.
2. Are the legacy sprinkles props (colour, backgroundColour, border{Bottom,Left,Right,Top}Colour), their shorthands (borderColour/X/Y), SprinklesLegacyColours, and sprinklesLegacyText byte-for-byte unchanged? Must be YES.
3. Are the new semantic maps strict SUPERSETS of the prior inline maps (no prior key dropped, no prior value changed)? Verify color.border.default (from tokens.color.border, #D4D9DD) equals the prior color.interactive.border (gray300 #d4d9dd) — confirm zero drift on the one colliding key.
4. Does semanticGamut produce flat keys hex-identical to colours.gamut (gray900…)? Confirm buildColourGamut is applied to color.gamut, not re-hardcoded.
5. No component default prop / prop semantics changed; no component dir renamed; no export removed from lib/index.ts. Must be NO.
6. No new peerDependency in package.json. Must be NO.
7. PKG-SPECIFIC: confirm the snapshot churn is hash-only — run the stripped-__hash diff (plan §2.3); it MUST be empty. Confirm base-theme Chromatic zero-diff on the PR (no component consumes the new keys yet, so there must be no rendered change).
FAIL if any of 1–6 is violated or the stripped diff shows real declaration changes.
```

**VERIFY — `sonnet`**
```
You are the Verify agent for C-P1. On branch feat/track-c-p1-sprinkles-parity, run and report objective results (do not fix):
  yarn lint
  yarn test run
  yarn test:a11y
Interpret snapshot failures with the stripped-__hash procedure (plan §2.3 / master §4.0.1): git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g' — state whether the churn is style-identical (empty stripped diff) or a real diff. Confirm CI Chromatic (visual_test) base-theme status once the PR is open. Report PASS/FAIL per gate.
```

**Release:** minor. Changeset: *"Add semantic sprinkles colour parity — expose the colour ramp and DS-2026 semantic namespaces on `color`/`backgroundColor`/`border*Color` (additive; legacy props unchanged)."* **OU:** OU-3/OU-13. **Depends on:** W1-P1, W3-P0.

---

## The measured inventory

Reproduced read-only on 2026-07-07. Commands:

```bash
# direct references (excl specs/stories)
grep -rIn --include='*.ts' --include='*.tsx' \
  -E "vars\.colours\.|tokens\.colours\.(gamut|foreground|background|intent)|typography\.colour|sprinklesLegacyText" \
  lib/components/ | grep -vE "\.spec\.(ts|tsx):|\.stories\.tsx:"

# transitive: legacy sprinkles colour props (resolve to tokens.colours.* per sprinkles.css.ts:35-74)
grep -rIn --include='*.tsx' -E "\bcolour[:=]|\bbackgroundColour[:=]|\bborderColour[:=]|border(Top|Right|Bottom|Left)Colour[:=]" \
  lib/components/ | grep -vE "\.spec\.tsx:|\.stories\.tsx:"
```

**Measured totals:**
- **Direct legacy refs:** **38 files** (excl specs/stories), of which **33 under `lib/components/`** + 5 style files (`sprinkles.css.ts`, `typography.css.ts`, `typography.ts`, `intentColorset.css.ts`, `focusOutline.css.ts`). **29 distinct component dirs** carry direct refs (`private` counts once but contains InputBase + CheckableBase).
- **Via-sprinkles (JSX legacy props):** **31 distinct component dirs**.
- **Total distinct component dirs touching legacy colour (direct OR via-sprinkles):** **48 of 78** component dirs. The other 30 are `clean` (barrel/semantic-only) — classify any newcomer with the two greps above.
- Per-dir direct ref counts (measured): `private` 24, OptionGrid 19, Calendar 15, Tabs 12, OptionList 10, SearchBar 6, ProgressSpinner 6, Pagination 5, Table 4, Switch 4, Slider 4, BulletText 4, TextLink 3, ScrollPane 3, Radio 3, CheckBox 3, Button 3, BulletList 3, AutoSuggest 3, Stepper 2, StarRating 2, Popover 2, OverdriveProvider 2, Meta 2, DataTable 2, Alert 2, Stack 1, EditableText 1, DropDown 1.

> **⚠ Deviation from master §9.1 seed:** the master's seed **omits** OptionGrid (19), Calendar (15), OptionList (10), SearchBar (6), Popover (2), and the CheckableBase share of `private` — because the seed grepped only `vars.colours.*`, while these dirs use `tokens.colours.*` (they `import { overdriveTokens as tokens }`). The master's "Text 1 / Heading 1" direct entries are **stories** files (`Text.stories.tsx`, `Heading.stories.tsx` iterate `overdriveTokens.typography.colour`) — excluded here as non-shipping. Logged in [Deviations](#deviations--open-items).

> **Branch status (`feature/AG-19959-overdrive-colour`, verified 2026-07-07 at branch tip).** Re-running both inventory greps at the branch tip reproduces the per-dir counts above **exactly** (33 direct-ref files / 29 dirs under `lib/components/`), so the inventory is **not stale**. The branch's four black→gray `.css.ts` repoints (DateTimeField, OptionGrid, Slider, Table/TableCell) stayed on the **legacy** `colours.gamut.*` contract (verified: `overdriveTokens.colours.gamut.gray400`, `tokens.colours.gamut.gray900`, `vars.colours.gamut.gray900`, `vars.colours.gamut.gray100`) — they do **not** reduce any legacy count, so OptionGrid still reads 19, Slider 4, Table 4, all pending a Track C repoint. **One genuine omission found:** `DateTimeField` (2 direct refs — `DateTimeField.css.ts:106,138`, `overdriveTokens.colours.gamut.gray{400,300}`) is a legacy-touching dir that **both** inventory greps miss — the direct-ref grep matches only `vars.colours.` / `tokens.colours.` (lowercase) and not the un-aliased `overdriveTokens.colours.*` import name, and DateTimeField uses no legacy JSX props. It was already legacy on `main` (`black{400,300}`); the branch's repoint kept it on legacy. Corrected totals: **34 direct-ref files / 30 dirs**, and **49 of 78** total legacy-touching dirs (DateTimeField moves out of the "clean" bucket → 29 clean). DateTimeField is a form-field surface (grey ramp only) → add to a standalone batch alongside the C-P8 stragglers or the form-field family near W3b (see Deviations item 11). W1-P1 semantic namespaces (`color.foreground`/`background`/`border`/`info`/…) are **confirmed absent** from the contract at this tip (`lib/themes/theme.css.ts` `color.*` = `gamut`/`surface`/`content`/`interactive` only), so all of C-P1+ remains blocked; only W0-P1's remaining alias work is landable here.

### Typography colour / `sprinklesLegacyText` usage sites (measured)

- `lib/styles/typography.ts:8,84` — `typography()` calls `sprinklesLegacyText({ color })` as the fallback whenever no semantic `color` is passed (`:83-87`); `textStyles()` defaults headings to `colour:'dark'` (`:120`). This is the **library-wide legacy text path**: every `Text`/`Heading`/`textStyles` consumer that doesn't pass `color` renders through `sprinklesLegacyText` → `typography.colour.*`. Repointing this is the highest-leverage single change (folded into the Text/Heading standalone repoint, C-P4) but must preserve the exact default (`neutral`→gray700 for body, `dark`→gray900 for headings, `strong`→`dark`).
- `lib/styles/typography.css.ts:8-18` — defines `sprinklesLegacyText` from `tokens.typography.colour` (+`unset`). Stays exported until C-final.
- `lib/components/Alert/Alert.tsx:13,51` — `sprinklesLegacyText({ color: intent })` (intent ∈ danger/information/success/warning). **Alert is the only component importing `sprinklesLegacyText` directly** → folded into W3c-P7.
- Direct `vars.typography.colour.*` in css.ts: BulletList (dark), BulletText (dark), Button (neutral, secondary), EditableText (muted), Meta (dark), ProgressSpinner (danger/white/primary/secondary/warning), Table/TableHeadCell (dark), TextLink (link), private/InputBase (dark/muted/success/danger).

### Per-component burn-down (measured)

`RepPri` = replacement priority (§1.5): **N** = named semantic token (used when a Wave-3 restyle exists → value-split), **G** = gamut fallback (standalone, base==ds2026). "V==?" = does `V_legacy == V_2026` for the primary named token (§1.6); n/a for gamut (always exact).

| Component | Legacy refs (file:line) | Legacy token / prop used | Proposed semantic replacement | RepPri | V==? | Paired W3 / standalone | Batch |
|---|---|---|---|---|---|---|---|
| **private/InputBase** | `InputState.css.ts:6,10,18,25,58-97`, `NotchedBase.css.ts:184,187`, `withEnhancedInput.css.ts:13,17` (+HintText `colour="unset"`) | `typography.colour.{dark,muted,success,danger}`, `colours.gamut.gray200`, `colours.background.neutral`, sprinkles `colour` | `color.foreground.primary`(dark), `color.foreground.tertiaryInactive`(muted), `color.success.foreground`(success), `color.alert.foreground`(danger), `color.gamut.gray['200']`, `color.background.inactive`(neutral=gray300) | N | ✅ (success/alert/fg equalities hold; success.foreground green600 vs green? verify) | **W3b-P1** (TextInput/TextArea) | folded 3b |
| **CheckableBase** (private) | `CheckableBase.css.ts:9,15,50,53` | `colours.background.body`, `typography.colour.dark`, `colours.intent.primary.background.strong`(green700) | `color.background.default`, `color.foreground.primary`, `color.gamut.green['700']` | N/G | ✅ | shared by CheckBox/Radio/Switch → **W3a-P2/3/4** | folded 3a |
| **Tabs** | `Tab.css.ts:19,34,42,67,69,78,79,107,124,141,150,151` | `colours.foreground.body`, `colours.gamut.gray200`, `colours.intent.neutral.background.strong`(gray900), `colours.background.{light,neutral,body}`; JSX `colour`/`backgroundColour` | `color.foreground.primary`, `color.gamut.gray['200']`, `color.gamut.gray['900']`, `color.background.emphasisInactive`(light), `color.background.inactive`(neutral), `color.background.default`(body) | N | ✅ | **W3c-P4** | folded 3c |
| **ProgressSpinner** | `ProgressSpinner.css.ts:46,49,52,55,58,61` | `typography.colour.{danger,white,primary,secondary,warning}`, `colours.foreground.body` | `color.alert.foreground`(danger), `color.foreground.reverse`(white), `color.gamut.green['600']`(primary), `color.foreground.secondary`(gray700), `color.warning.foreground`? (yellow800 vs Figma F69A1F → drift; use `color.gamut.yellow['800']`), `color.foreground.primary`(body) | N/G | mixed | **W3c-P8** | folded 3c |
| **Pagination** | `Pagination.css.ts:8,24,25,28,29`; `Bubble.tsx:32,39,51`; `Pagination.tsx:62` | `colours.background.{neutral,body}`, `colours.intent.primary.background.strong`(green700); JSX `backgroundColour`/`colour` | `color.background.inactive`, `color.background.default`, `color.gamut.green['700']`; JSX→`color`/`backgroundColor` semantic keys | N/G | ✅ | **W3c-P6** + W2-P10 | folded 3c |
| **Table** | `TableCell.css.ts:6,28`, `TableHeadCell.css.ts:10,26`; `TableCell.tsx:52` (`colour="dark"`) | `colours.gamut.gray100`, `typography.colour.dark`; JSX `colour` | `color.gamut.gray['100']`, `color.foreground.primary` | G/N | ✅ | standalone | **C-P3** |
| **Switch** | `Switch.css.ts:9-12` | `colours.foreground.body`, `colours.background.{body,neutral,light}` | `color.foreground.primary`, `color.background.default`, `color.background.inactive`, `color.background.emphasisInactive` | N | ✅ | **W3a-P4** | folded 3a |
| **Slider** | `Slider.css.ts:59,62,80,97` | `colours.gamut.{gray300,gray200,gray900,gray500}` | `color.gamut.gray['{300,200,900,500}']` | G | n/a | **W3b-P6** | folded 3b |
| **BulletText** | `BulletText.css.ts:12,16,20,24` | `colours.intent.primary.background.{mild(green200),standard(green600)}`, `colours.background.light`(gray200), `typography.colour.dark` | **DONE (C-P4):** `:24` `typography.colour.dark`→`color.foreground.primary`. **RETAINED:** `:12,20` `colours.intent.primary.*` (intent rule), `:16` `colours.background.light` (tenant-variant — smartFleet/ampol → gray100) | G/N | ✅ | standalone | **C-P4 ✅** |
| **BulletList** | `Bullet.css.ts:23,35,42` | `typography.colour.dark` | **DONE (C-P4):** `typography.colour.dark`→`color.foreground.primary` (×3) | N | ✅ | standalone | **C-P4 ✅** |
| **TextLink** | `TextLink.css.ts:7,13,32`; `TextLink.tsx:76,113` | `typography.colour.link`(green600); JSX `colour` | `color.interactive.link`(green600) / `color.button.linkedText.*` (W1-P2, unconfirmed §6-Q3) | N | ✅ (interactive.link) | **W3c-P2** | folded 3c |
| **ScrollPane** | `ScrollPane.css.ts:6,20,28` | `colours.gamut.{gray300,gray400}` | **DONE (C-P4):** `colours.gamut.gray300`→`color.gamut.gray['300']` (`:6,20`), `gray400`→`color.gamut.gray['400']` (`:28`) — gamut bridge-safe | G | n/a | standalone | **C-P4 ✅** |
| **Radio** | `Radio.css.ts:9,10,11` | `colours.foreground.body`, `colours.background.{body,neutral}` | `color.foreground.primary`, `color.background.default`, `color.background.inactive` | N | ✅ | **W3a-P3** | folded 3a |
| **CheckBox** | `CheckBox.css.ts:9,10,11` | same as Radio | same | N | ✅ | **W3a-P2** | folded 3a |
| **Button** | `Button.css.ts:11,217,335`; `Button.tsx:84` | `colours.intent` (all), `typography.colour.{neutral(gray700),secondary(gray700)}`; ProgressSpinner `colour` | `color.button.*` (W1-P2) + `color.foreground.secondary`(gray700) | N | per-intent | **W3a-P1** | folded 3a |
| **AutoSuggest** | `AutoSuggest.css.ts:19,101,102`; `.tsx:398,567,759,761` | `colours.intent.secondary.background.standard`(white), `colours.background.light`(gray200), `typography.colour.information`(blue500); JSX `backgroundColour`/`borderColour` | `color.background.default`, `color.background.emphasisInactive`, **`color.gamut.blue['500']`** (info drift), JSX→semantic | G | drift→G | standalone | **C-P8** |
| **Stepper** | `Stepper.css.ts:17,20`; `.tsx:66,68,162,189` | `colours.intent.primary.background.strong`(green700); JSX `colour`/`backgroundColour`/`borderColour` | `color.gamut.green['700']`; JSX→semantic | G/N | n/a | **W3b-P6** | folded 3b |
| **StarRating** | `StarRating.css.ts:7,10` | `colours.intent.shine.{foreground(yellow500),background.standard(gray200)}` | `color.gamut.yellow['500']`, `color.gamut.gray['200']` | G | n/a | **W3a-P5** | folded 3a |
| **OverdriveProvider** | `ThemeOverrideDebugger.tsx:16,19,87`; `useColorOverrides.ts:51,59,87` | `colours.intent.primary.{background.standard,foreground}`; JSX `colour` (dev tool) | `color.gamut.green['600']`/`color.foreground.reverse`; JSX→semantic. **Dev-only debugger** — lowest priority | G/N | n/a | standalone | **C-P8** |
| **Meta** | `Meta.css.ts:7,10` | `colours.intent.primary.background.strong`(green700), `typography.colour.dark` | **`colours.intent.primary.background.strong` — intent ref retained, major-only** (reverted by C-theme-bridge); `color.foreground.primary` | G/N | ✅ | standalone | **C-P3** |
| **DataTable** | `DataTable.css.ts:8,32` | `colours.intent.primary.background.standard`(green600), `colours.background.body` | **`colours.intent.primary.background.standard` — intent ref retained, major-only** (reverted by C-theme-bridge); `color.background.default` | G/N | ✅ | standalone | **C-P3** |
| **Alert** | `Alert.tsx:13,51,57,59,80,99` | `sprinklesLegacyText({color:intent})`, JSX `backgroundColour="white"`/`borderColour="gray"`/`colour` | `color.info/success/warning/alert.*` (value-split); JSX→`color.background.default`/`color.border.default` | N | drift (intents) | **W3c-P7** | folded 3c |
| **Stack** | `Stack.css.ts:13` | `colours.background.neutral`(gray300) | **RETAINED (C-P4, major-only):** the `neutral` in-repo theme overrides `colours.background.neutral`→gray400, whereas semantic `color.background.inactive` is raw base gray300 (unbridged) → repoint would drift under `neutral`. Left on legacy. | N | ✅→drift | standalone | **C-P4 (retained)** |
| **EditableText** | `EditableText.css.ts:11`; `.tsx:182` | `typography.colour.muted`(gray400); JSX `colour` | **DONE (C-P4):** `:11` `typography.colour.muted`→`color.foreground.tertiaryInactive` (gray400, un-overridden in all themes/tenants). **RETAINED:** `.tsx:182` `colour={colour}` — pass-through of the public union-typed `colour` prop (intent-capable) → intent/union rule. | N | ✅ | standalone | **C-P4 ✅ (tsx retained)** |
| **DropDown** | `DropDownOption.css.ts:10`; `.tsx:33` | `colours.background.light`(gray200); JSX via `textStyles({colour})` | `color.background.emphasisInactive`; textStyles→`color` | N | ✅ | **W3b-P3** | folded 3b |
| **OptionGrid** | `OptionGrid.css.ts:139,152,160,174,182,184,224,225,229,230,233,258,261,280,284,289,290,293,294` | `colours.background.body`, `colours.gamut.{gray900,gray100,gray500,gray300,gray200,white}`, `colours.foreground.body` | `color.background.default`, `color.gamut.gray['*']`, `color.gamut.white`, `color.foreground.primary` | G/N | ✅ | standalone | **C-P2** |
| **OptionList** | `OptionList.css.ts:29,51,65,69,72,103,111,113,117,118` | `colours.background.body`, `colours.gamut.{gray400,gray200,gray900,gray300}` | `color.background.default`, `color.gamut.gray['*']` | G/N | ✅ | standalone | **C-P2** |
| **Calendar** | `Calendar.css.ts:43,44,48,51,52,55,58,59,86,87,91,94,97,99,112` | `colours.background.body`, `colours.foreground.body`, `colours.gamut.{gray200,gray400,gray600,gray300}` | `color.background.default`, `color.foreground.primary`, `color.gamut.gray['*']` | G/N | ✅ | standalone | **C-P3** |
| **SearchBar** | `SearchBar.css.ts:29,32,44,49,56,60` | `colours.background.body`, `colours.gamut.{gray400,gray300,gray900}` | `color.background.default`, `color.gamut.gray['*']` | G/N | ✅ | standalone | **C-P2** |
| **Popover** | `Popover.css.ts:21,50` | `colours.background.body` | `color.background.default` | N | ✅ | standalone | **C-P2** |
| **Anchor** | `Anchor.tsx:51,66` (`colour:'link'`) | sprinkles `colour='link'`(green600) | `color` = `color.interactive.link` | N | ✅ | standalone | **C-P6** |
| **DividerLine** | `DividerLine.tsx:25` | `backgroundColour={colour}` (pass-through) | migrate prop to `backgroundColor` semantic keys | N | ✅ | standalone | **C-P6** |
| **IntentStripe** | `IntentStripe.tsx:23` | `backgroundColour={intent}` | `backgroundColor` semantic intent (value-split w/ Alert) | N | drift | standalone | **C-P6** |
| **NumberBubble** | `NumberBubble.tsx:53` (`colour:textColour`) | sprinkles `colour` | `color` semantic | N/G | ✅ | standalone | **C-P6** |
| **OrderedList** | `OrderedList.tsx:56` (`colour:'dark'`) | `textStyles({colour:'dark'})` | textStyles→`color` (fg.primary) | N | ✅ | standalone | **C-P6** |
| **MarkdownRenderer** | `MarkdownHorizontalRule.tsx:20` (`colour="neutral"`) | sprinkles `colour='neutral'` | `color` (resolves intent white → `color.foreground.reverse`; verify) | N | ✅ | standalone | **C-P6** |
| **Modal** | `Modal.tsx:137` | `backgroundColour={hideBackdrop ? 'transparent' : 'neutral'}` | **`backgroundColour="neutral"` — intent ref retained, major-only** (`neutral`←`colours.intent.neutral`; reverted by C-theme-bridge — `transparent` needs no repoint) | N | ✅ | standalone | **C-P5** |
| **StandardModal** | `StandardModal.tsx:106,128,142` | `backgroundColour="white"`, `borderColour="light"`, `textStyles({colour:'muted'})` | `backgroundColor` white, `borderColor` (gray200), `color` fg.tertiaryInactive | N | ✅ | standalone | **C-P5** |
| **Flyout** | `Flyout.tsx:23,27` | `backgroundColour="white"`, `borderColour="gray"` | `backgroundColor`/`borderColor` semantic | N | ✅ | standalone | **C-P5** |
| **StickyBox** | `StickyBox.tsx:66` | `backgroundColour` | `backgroundColor` | N | ✅ | standalone | **C-P5** |
| **LoadingBox** | `LoadingBox.tsx:28` | `backgroundColour` | `backgroundColor` | N | ✅ | standalone | **C-P5** |
| **TextBubble** | `TextBubble.tsx:51,71` | `backgroundColour="gray900"`, `colour` | `backgroundColor=gamut.gray900`, `color` | G/N | n/a | standalone | **C-P5** |
| **ProgressBar** | `ProgressBar.tsx:36,41` | `backgroundColour="gray100"`, `backgroundColour={map}` | `backgroundColor` semantic gamut | G | n/a | standalone | **C-P7** |
| **ProgressBarGroup** | `ProgressBarGroup.tsx:41,44,45` | `colour="light"` on Text | `color` (gray600) | N/G | n/a | standalone | **C-P7** |
| **SliderProgress** | `ProgressStep.tsx:44,59`, `SliderProgress.tsx:44` | `backgroundColour` (public prop, intent-capable) | **`backgroundColour` — intent ref retained, major-only** on `ProgressStep` (public prop accepts the 9 legacy intents → reverted by C-theme-bridge; leaf renders via legacy prop). The `SliderProgress.stories.tsx` decorator's pure-gamut `backgroundColor="gray800"` stays semantic (bridge-safe). | N | ✅ | standalone | **C-P7** |
| **HorizontalAutoScroller** | `HorizontalAutoScroller.tsx:197` | `backgroundColour={sliderProgressColour}` | `backgroundColor` | N | ✅ | standalone | **C-P7** |
| **LinearProgressIndicator** | `LinearProgressIndicator.tsx:19,31` | `backgroundColour="gray200"`, `backgroundColour="green300"` | `backgroundColor=gamut.gray200/green300` | G | n/a | standalone | **C-P7** |
| **DateInput** | `DateInput.tsx:226` (`colour:'muted'`) | sprinkles `colour='muted'` | `color` fg.tertiaryInactive | N | ✅ | (near W3b) standalone | **C-P8** |
| **Tooltip** | `useTooltip.tsx:144,149` | `backgroundColour="gray900"`, `colour="white"` | `backgroundColor=gamut.gray900`, `color=fg.reverse` | G/N | n/a | **W3c-P3** | folded 3c |
| **Badge** | `Badge.css.ts` `colour` is a **recipe variant NAME**, not a sprinkles prop — **false positive**; Badge renders via its own recipe. Repoint the recipe's colour values in **W3c-P1**. | recipe variants | recipe colour values → gamut/semantic | N | — | **W3c-P1** | folded 3c |

> **False positives noted (do NOT treat as sprinkles usage):** `Badge.css.ts` and `InputState.css.ts` use `colour:` as a **recipe `variants` key name**; `useColorOverrides.ts` uses `colour:` inside runtime override maps. These still ultimately resolve colour, but they are repointed as part of their component's normal repoint (Badge→W3c-P1, InputState→W3b-P1), not via a blind prop rename.

---

## Standalone batch composition (C-P2 … C-P8)

Only components **without** a Wave-3 restyle are batched here (the rest fold into W3a/3b/3c per the table). Ordered highest-ref-first; 3-6 components each; grouped by surface family so a batch shares a semantic vocabulary.

| Batch | Components | Rationale | ~direct refs |
|---|---|---|---|
| **C-P2** | OptionGrid (19), OptionList (10), SearchBar (6), Popover (2) | Menu / option / overlay surfaces — all `colours.background.body` + grey ramp. Highest-density cluster. | 37 |
| **C-P3** | Calendar (15), Table (4), DataTable (2), Meta (2) | Data-display grids — `background.body`/`foreground.body`/grey ramp + one green accent. | 23 |
| **C-P4** | BulletText (4), BulletList (3), ScrollPane (3), Stack (1), EditableText (1), **`styles/typography.ts` default path** | Text-flow + the library-wide default text-colour repoint (`typography()`/`textStyles()`). Highest **leverage** (touches every Text consumer) → `opus` Builder, extra Chromatic breadth. **DEFAULT PATH REPOINTED ✅** — see decision note below. `Text.tsx`/`Heading.tsx` component defaults left untouched (out of C-P4 file scope; pixel-identical either way). | 12 + text path |
| **C-P5** | Modal, StandardModal, Flyout, StickyBox, LoadingBox, TextBubble | Container/surface `backgroundColour`/`borderColour` JSX pass-through → semantic props. | via-sprinkles |
| **C-P6** | Anchor, DividerLine, IntentStripe, NumberBubble, OrderedList, MarkdownRenderer | Foreground/link + divider/stripe JSX props. IntentStripe shares the intent value-split with Alert (defer intent semantics to W3c-P7; use gamut here). | via-sprinkles |
| **C-P7** | ProgressBar, ProgressBarGroup, SliderProgress, HorizontalAutoScroller, LinearProgressIndicator | Progress/scroll `backgroundColour` (mostly raw ramp → gamut fallback). | via-sprinkles |
| **C-P8** | AutoSuggest (3), OverdriveProvider/ThemeOverrideDebugger (2), DateInput (1) | Stragglers: AutoSuggest info-drift (gamut.blue500), the dev-only debugger, and DateInput's single `colour='muted'`. | 6 |
| **C-P9** | `lib/styles/intentColorset.css.ts` + `lib/styles/focusOutline.css.ts` | **Shared style utilities** (orchestrator decision; not folded into Badge/Alert — one utility feeding multiple components must not be coupled to a single component's package). Widest shared blast radius → **Builder `opus`**; see the C-P9 work order below. | 7 (5+2) |

> **C-P4 default-path decision (repointed — recorded 2026-07-07).** The per-key theme-variance check was run for the two default-path keys (`typography.colour.dark`, `typography.colour.neutral`) plus `muted` (EditableText), across **base, flat_red, neutral (in-repo) and all MFE tenants (smartFleet, ampol, fleetGuru; dynamicGuru has no `tokens.ts`)**:
>
> | key | base | flat_red | neutral | smartFleet | ampol | fleetGuru | semantic target | target value (all themes) | equal? |
> |---|---|---|---|---|---|---|---|---|---|
> | `typography.colour.dark` | gray900 `#212338` | inherits base | gray900 `#212338` | inherits (flatRed→base) | inherits | inherits (base) | `color.foreground.primary` | raw gray900 `#212338` (unbridged, no theme overrides `color.*`) | ✅ everywhere |
> | `typography.colour.neutral` | gray700 `#484c5f` | inherits base | gray700 `#484c5f` | inherits | inherits | inherits | `color.foreground.secondary` | raw gray700 `#484c5f` | ✅ everywhere |
> | `typography.colour.muted` | gray400 `#8f95a1` | inherits base | gray400 `#8f95a1` | inherits | inherits | inherits | `color.foreground.tertiaryInactive` | raw gray400 `#8f95a1` | ✅ everywhere |
>
> No theme overrides `dark`/`neutral`/`muted` (they only override `primary`/`link`/`secondary`/`information`), and no theme touches semantic `color.foreground.*` — so the three keys are value-identical to their semantic targets in every theme. **Decision: repoint the default path.** `typography()` now routes its default colour through the semantic `sprinkles({color})` path — body default `neutral`→`secondary`, `strong`/heading default `dark`→`primary`; an explicitly-supplied legacy `colour` still resolves through `sprinklesLegacyText` (intent keys are theme-overridden — NEVER repointed). `sprinklesLegacyText` and the legacy `colour` arg of `textStyles` remain exported/functional (Alert still uses them). `DEFAULT_TEXT_COLOUR` stays exported; new `DEFAULT_TEXT_COLOR`/`DEFAULT_HEADING_COLOR` semantic constants added.
>
> **Ordering guidance for the orchestrator:** run C-P2 → C-P8 in listed order (highest-ref clusters first). Each is independent given C-P1; up to ~3 in flight. C-P4 should ideally land before/with the Text-heavy Wave-2 components' Chromatic baselines settle (the `sprinklesLegacyText` default repoint is library-wide). **C-P9 is a hard predecessor of W3c-P1 (Badge)** — schedule it any time after C-P1 but before the W3c sub-wave starts; it has no ordering constraint against C-P2…C-P8.

### C-P9 work order — shared style utilities (`intentColorset.css.ts`, `focusOutline.css.ts`)

> **⛔ SUPERSEDED BY THE INTENT RULE (orchestrator ruling, post-theme-bridge — no code ships for C-P9).** Both utilities are intent-derived machinery and are **RETAINED on the legacy contract until the major**: `intentColorset.css.ts` reads `tokens.colours.intent.*` for all 9 intents — repointing any chromatic entry to a fixed gamut grade would freeze base values and silently drop tenant/runtime intent overrides (e.g. Badge `primary` under smartFleet would turn base-green instead of tenant purple); `focusOutline.css.ts` reads `colours.foreground.link`, which is theme-overridden (neutral → blue500, fleetGuru → yellow500) and therefore intent-like. The per-intent measured table below is preserved as the **W3c/W4 reference data** — the intent→semantic mapping (with its value-split + Golden-rule-exception evidence) is the job of the opt-in W3c restyles (Badge W3c-P1, Alert W3c-P7) and the major. **W3c-P1's dependency on C-P9 is dissolved** — Badge's restyle package handles intentColorset itself via the ds2026 value-split.

**Why standalone (ratified orchestrator decision, resolving Deviations item 8 — historical, pre-supersession):** the wave-3 plan's cross-package serialisation table establishes `intentColorset` as feeding Badge (W3c-P1), Alert (W3c-P7) and IntentStripe; folding it into any one component's package couples unrelated components. **Measured consumer evidence (grep 2026-07-07):** the only *direct* importer of `styledIntentionalElement`/`variantIntentionalColors` today is `lib/components/Badge/Badge.css.ts` (Alert and IntentStripe currently render intents via the sprinkles `backgroundColour={intent}` path, not via intentColorset — the wave-3 serialisation additionally routes them through it). `focusOutline` is imported by **14+ files**: `lib/styles/elementReset.css.ts` plus Button, Tabs (Tab/TabPane), Calendar, SearchBar, Slider, Switch, CheckableBase, OptionList, OptionGrid, ToggleButtons, DateTimeField, Anchor. Either way the blast radius is multi-component — hence Builder `opus` and the widened Chromatic scope below.

**`intentColorset.css.ts` repoint (value-preserving; replacement per §1.5 priority, spelled out per intent entry).** The utility builds two CSS-var sets per intent from `tokens.colours.intent` via `styleVariants` (`:12-40`): *standard* = `{bg: background.standard, border: border, color: foreground}`, *inverted* = `{bg: background.mild, border: border, color: background.standard}`. Repoint = replace the source map with a local `intentColorSets` object keyed by the **same 9 intent names** (recipe variant keys and the exported `StyledIntentionalContainerProps` type stay identical), each value referencing the semantic token of the **identical measured base hex**:

| Intent | bg standard (V_legacy) | → semantic | bg mild (V_legacy) | → semantic | foreground | → semantic | border | → semantic |
|---|---|---|---|---|---|---|---|---|
| primary | green600 `#01c68c` | `color.gamut.green['600']` (G) | green200 `#e3f8f0` | `color.gamut.green['200']` (G) | white | `color.foreground.reverse` (N ✅) | green900 `#00574c` | `color.gamut.green['900']` (G) |
| brand | green700 `#03af83` | `color.gamut.green['700']` (G) | green200 | `color.gamut.green['200']` (G) | white | `color.foreground.reverse` (N ✅) | gray900 `#212338` | `color.border.strong` (N ✅) |
| secondary | white `#ffffff` | `color.background.default` (N ✅) | white | `color.background.default` (N ✅) | gray900 | `color.foreground.primary` (N ✅) | gray300 `#d4d9dd` | `color.border.default` (N ✅) |
| shine | gray200 `#eef0f2` | `color.background.emphasisInactive` (N ✅) | gray100 `#fafbfc` | `color.gamut.gray['100']` (G) | yellow500 `#ffc001` | `color.gamut.yellow['500']` (G) | gray300 | `color.border.default` (N ✅) |
| danger | red600 `#d42b26` | `color.gamut.red['600']` (G — equals `color.alert.foreground` `#D42B26`, but use gamut: the intent→alert namespace mapping belongs to the W3c restyles, not this pixel-preserving batch) | red100 `#fdf4f4` | `color.gamut.red['100']` (G — Figma `alert.background` is `#FFD4D4` red200 → drift; gamut mandatory) | white | `color.foreground.reverse` (N ✅) | red800 `#96110e` | `color.gamut.red['800']` (G) |
| warning | yellow800 `#f69a1f` | `color.gamut.yellow['800']` (G — equals Figma `warning.foreground`, but keep the map uniform-gamut for chromatics; see note) | yellow100 `#fffcf2` | `color.gamut.yellow['100']` (G — Figma `warning.backgroundLight` is `#FFEDB5` yellow200 → drift) | white | `color.foreground.reverse` (N ✅) | yellow900 `#f38e29` | `color.gamut.yellow['900']` (G) |
| neutral | gray700 `#484c5f` | `color.foreground.secondary` used as bg is wrong semantics → `color.gamut.gray['700']` (G) | gray200 | `color.background.emphasisInactive` (N ✅) | white | `color.foreground.reverse` (N ✅) | gray900 | `color.border.strong` (N ✅) |
| success | green700 `#03af83` | `color.gamut.green['700']` (G — Figma `success.backgroundDark` is `#18856F` green800 → drift) | green200 `#e3f8f0` | `color.gamut.green['200']` (G — equals Figma `success.backgroundLight` `#E3F8F0`; gamut kept for uniformity) | white | `color.foreground.reverse` (N ✅) | green900 | `color.gamut.green['900']` (G) |
| information | blue800 `#0d4bb7` | `color.gamut.blue['800']` (G — Figma `info.foreground` is `#0D54E5` blue600 → drift) | blue200 `#bad4ff` | `color.gamut.blue['200']` (G — Figma `info.background` is `#E1EDFE` → drift) | white | `color.foreground.reverse` (N ✅) | blue900 `#0d47a1` | `color.gamut.blue['900']` (G — equals `color.info.text`) |

**Ruling per §1.5:** grey-derived + white entries use the equal-valued **named** tokens (N ✅ — no split, values already identical per §1.6); **all chromatic entries use the gamut fallback (G)** — the legacy intent chromatics mostly drift from the Figma `info/success/warning/alert` values (see cells), and the few exact-equal coincidences (danger·standard, warning·standard, success·mild, information·border) are deliberately NOT bound to the named chromatic namespace here: assigning the intent→`{info,success,warning,alert}` semantic mapping (with its `base=V_legacy` / `ds2026=V_2026` value-split and Golden-rule-exception evidence) is the job of the W3c restyles (Badge W3c-P1, Alert W3c-P7), where the `ds2026` divergence is designed and intended. C-P9 therefore revalues **nothing** — no `base/tokens.ts` or `ds2026/tokens.ts` edit, no Golden-rule exception.

**`focusOutline.css.ts` repoint:** `tokens.colours.foreground.link` (green600 `#01c68c`, at `:8` and `:15`) → `tokens.color.interactive.link` (green600 `#01c68c` — exact equal, N ✅). Two-line change; no split.

**`useColorOverrides.ts` decision:** stays in **C-P8** (not moved into C-P9). Justification: it is component-scoped runtime code inside the `OverdriveProvider` component dir — not a `lib/styles` shared utility — and it has no cross-component build-time consumers and zero MFE usage (`ThemeOverrideProvider` 0 hits), so it does not share C-P9's multi-consumer blast-radius profile that motivated this batch. Deviations item 9 unchanged.

**Chromatic / test scope (widened — hard requirement):** because these utilities render through other components, the zero-diff gate for C-P9 covers **ALL consumers' stories, not just the touched files**: **Badge, Alert, IntentStripe** (per the ratified decision) **plus** the focusOutline consumer set (Button, Tabs, Calendar, SearchBar, Slider, Switch, CheckBox/Radio via CheckableBase, OptionList, OptionGrid, ToggleButtons, DateTimeField, Anchor) — in practice run the **full** suite (`yarn test run` unscoped) and review the whole base-theme Chromatic build, not a TurboSnap subset. Reviewer must additionally verify the recipe variant keys (`intention`, `inverted`) and `StyledIntentionalContainerProps` are type-identical before/after.

**Agents:** Builder **`opus`** (shared blast radius), Reviewer `opus`, Verify `sonnet` — use the shared triad prompts below with: FILES = `lib/styles/intentColorset.css.ts`, `lib/styles/focusOutline.css.ts`; the mapping = the per-intent table above; SCOPE = full suite + all-consumer Chromatic; and the extra Reviewer check "recipe variant keys + exported types unchanged; grep confirms Badge.css.ts compiles against the unchanged recipe API".
**Release:** minor. Changeset: *"Internalise Track C: repoint shared style utilities (intent colour sets, focus outline) onto semantic `color.*` tokens (pixel-identical; consumed by Badge and all focus-ring components)."*

### Per-batch Builder / Reviewer / Verify prompts

All standalone batches share this filled triad; substitute the batch's component list + the mapping rows from the inventory table. Standalone batches use the **gamut fallback** (§1.5 rule 2) for any ref whose `V_legacy` has no equal-valued named semantic token, so **no `ds2026/tokens.ts` edit and no Golden-rule exception is needed** — base == ds2026 == exact current hex.

**BUILDER — `sonnet`** (`opus` for C-P4 only — library-wide text default)
```
You are the Builder for work package C-P<N> — Track C standalone colour repoint: <COMPONENT LIST> — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feat/track-c-p<N>-<slug> off main.

HARD RULE (additive/opt-in): Do NOT change any existing token key value, name, or the shape of ColourMap/ThemeTokens; do NOT change component default props/semantics; do NOT rename/remove any dir. You are ONLY replacing legacy colour refs with semantic ones of the IDENTICAL current value.
GOLDEN-RULE EXCEPTION: NOT USED in this package. Standalone repoints use the gamut fallback, which revalues nothing. If you find a ref whose current value has NO equal-valued semantic token, repoint it onto the exact-matching color.gamut.<name>.<grade> (color.gamut hex === colours.gamut hex). Do NOT revalue base/tokens.ts. Do NOT edit ds2026/tokens.ts (base == ds2026 for standalone).
SILENT-FAILURE WARNING: never touch space/radius/elevation/legacy colours.* values.

FILES TO MODIFY: the <COMPONENT>/*.css.ts and *.tsx files listed in the mapping below (Track C plan inventory table).
TARGET SHAPE — apply this exact old→new mapping per component (from the plan inventory, RepPri G = gamut, N = named token that already equals the current value per plan §1.6):
  <PASTE the component's rows: e.g.
   OptionGrid.css.ts: tokens.colours.background.body → tokens.color.background.default (both #ffffff);
     tokens.colours.gamut.gray900 → tokens.color.gamut.gray['900']; gray100→gray['100']; gray500→gray['500'];
     gray300→gray['300']; gray200→gray['200']; white→color.gamut.white; colours.foreground.body → color.foreground.primary (#212338).
   ...one block per component...>
  For JSX legacy props: colour="X" → color="<semantic key>", backgroundColour="Y" → backgroundColor="<semantic key>",
    borderColour="Z" → borderColor="<semantic key>". Semantic value keys available after C-P1: the flat ramp (gray900…),
    color.foreground.* (primary/secondary/reverse/tertiaryInactive/tertiaryInactiveLight), color.background.*
    (default/reverse/inactive/emphasisInactive), color.border.* (default/emphasis/selected/strong), plus content/surface.
  Mapping crib for common legacy→semantic (all equal-value per plan §1.6):
    background.body→background.default; background.light→background.emphasisInactive; background.neutral→background.inactive;
    foreground.body→foreground.primary; typography.colour.dark→foreground.primary; typography.colour.muted→foreground.tertiaryInactive;
    typography.colour.secondary/neutral→foreground.secondary; typography.colour.white→foreground.reverse;
    typography.colour.link→interactive.link; any colours.gamut.<grade> / intent-background→ the exact color.gamut.<name>.<grade>.
DATA (verbatim — no Figma): plan §1.6 equalities + the sprinkles semantic vocabulary added by C-P1 (plan §2.2).
STEPS: 1) confirm C-P1 landed (semantic props expose the flat ramp + Wave-1 namespaces). 2) apply the mapping per file. 3) leave legacy props/keys defined. 4) run gates; expect hash-only snapshot churn (stripped diff empty) since values are identical.
DONE-CRITERIA: each component renders byte-identical under base theme (Chromatic zero-diff); no legacy colour ref remains in the listed files; legacy colours.* keys still exported.

Then run: `yarn lint`; `yarn test run <COMPONENT LIST>`; `yarn test:a11y`. Follow the stripped-__hash procedure; the stripped diff MUST be empty. Report per-file old→new applied, gate results, assumptions.
```

**REVIEWER — `opus`**
```
You are the adversarial Reviewer for C-P<N> (Track C standalone repoint: <COMPONENT LIST>). Inspect branch feat/track-c-p<N>-<slug>. PASS/FAIL with file:line evidence:
1. Did any EXISTING token key change value / get renamed/removed? Diff lib/themes/**; must be NO. Confirm base/tokens.ts and ds2026/tokens.ts are UNTOUCHED (standalone repoints must not revalue anything — the Golden-rule exception must NOT appear here).
2. TOKEN-COLLISION / VALUE-EQUALITY: for EVERY repointed ref, confirm base[new semantic token] == the exact value the legacy ref rendered before (plan §1.6, or an exact color.gamut grade). Any repoint onto a named token whose base ≠ V_legacy is a FAIL (they must have used the gamut fallback instead).
3. Legacy props/keys still exported and unchanged (colour/backgroundColour/border*Colour, colours.*, typography.colour, sprinklesLegacyText)? Must be YES.
4. No component default prop / semantics changed; no dir renamed; no lib/index.ts export removed. Must be NO.
5. No new peerDependency. Must be NO.
6. Base-theme Chromatic must be ZERO-DIFF. Confirm the Builder's stripped-__hash snapshot triage is empty (style-identical). Any real declaration change on a base story = FAIL (a standalone repoint is pixel-preserving by construction).
7. Grep the touched files for `colours\.`, `typography\.colour`, `sprinklesLegacyText`, and JSX `colour=`/`backgroundColour=`/`borderColour=` — there must be ZERO remaining legacy colour refs in the files this package claims to have migrated.
FAIL if any of 1–6 is violated.
```

**VERIFY — `sonnet`**
```
You are the Verify agent for C-P<N>. On branch feat/track-c-p<N>-<slug>, run and report (do not fix):
  yarn lint
  yarn test run <COMPONENT LIST>
  yarn test:a11y
Interpret snapshot failures with the stripped-__hash procedure (plan §2.3): the churn MUST be style-identical (empty stripped diff) for a standalone repoint. Confirm CI Chromatic (visual_test) base-theme zero-diff on the PR. Report PASS/FAIL per gate.
```

**Release (each C-Pn):** minor, one changeset. Text: *"Internalise Track C: repoint `<components>` onto semantic `color.*` tokens (pixel-identical base; off legacy `colours.*`/`typography.colour`)."* **OU:** OU-3/OU-13.

---

## Definition of done (Track C)

1. **Every component classified & migrated.** All 48 legacy-touching dirs are either (a) repointed in a standalone C-Pn, or (b) repointed inside their paired W3a/3b/3c package. Re-run the two inventory greps: **zero** matches remain under `lib/components/` outside deliberately-retained shims. The 30 currently-clean dirs stay clean.
2. **The library-wide text default is repointed** (`styles/typography.ts` `sprinklesLegacyText` fallback → semantic `color`, C-P4) with the exact defaults preserved (`neutral`/`dark`/`strong`).
3. **`ds2026` carries all Figma values** for every named token a folded restyle repointed onto (value-split satisfied); standalone components render base==ds2026 (acceptable — no designed 2026 look).
4. **Lint rule blocking new legacy usage is live** (see below) — enforced in CI, so no new `colours.*` / `typography.colour` / legacy-sprinkles usage can be introduced (master R4).
5. **C-final handoff to W4-P4** is ready: with every consumer migrated, the major can delete `colours.*`, `typography.colour`, `sprinklesLegacyText`, and the legacy sprinkles properties + shorthands + `SprinklesLegacyColours` type in one release.

### Lint rule proposal (master R4 — spec)

Add to the repo ESLint config (flat config or `.eslintrc`), scoped to `lib/**` (excluding `lib/themes/**` and `lib/styles/{sprinkles,typography}.css.ts` where the legacy definitions themselves live, and excluding `*.spec.*`/`*.stories.*` during the migration). Two complementary rules:

**(a) `no-restricted-imports`** — block importing the legacy text sprinkles:
```js
'no-restricted-imports': ['error', {
  paths: [{
    name: '../../styles/typography.css',
    importNames: ['sprinklesLegacyText'],
    message: 'Legacy colour path. Use semantic `color` on sprinkles / `color.*` tokens (Track C).',
  }],
}],
```

**(b) `no-restricted-syntax`** — block new legacy token member-access and legacy sprinkles props:
```js
'no-restricted-syntax': ['error',
  // vars.colours.* / tokens.colours.* / overdriveTokens.colours.*
  {
    selector: "MemberExpression[property.name='colours'][object.name=/^(vars|tokens|overdriveTokens|themeContractVars)$/]",
    message: 'Legacy `colours.*` is frozen (Track C). Repoint onto semantic `color.*` (plan §1.5).',
  },
  // *.typography.colour
  {
    selector: "MemberExpression[property.name='colour'] > MemberExpression[property.name='typography']",
    message: 'Legacy `typography.colour.*` is frozen (Track C). Use `color.*`.',
  },
  // legacy sprinkles JSX props: colour / backgroundColour / border*Colour
  {
    selector: "JSXAttribute[name.name=/^(colour|backgroundColour|borderColour|border(Top|Right|Bottom|Left)Colour|borderColour[XY])$/]",
    message: 'Legacy sprinkles colour prop. Use `color`/`backgroundColor`/`border*Color` (semantic; C-P1 provides parity).',
  },
  // legacy sprinkles object keys passed to sprinkles()/style props
  {
    selector: "Property[key.name=/^(colour|backgroundColour|borderColour|border(Top|Right|Bottom|Left)Colour)$/]",
    message: 'Legacy sprinkles colour key. Use the semantic equivalent (C-P1).',
  },
],
```

Rollout: introduce as **`warn`** in G-P1 (contribution notes), flip to **`error`** once Track C burn-down reaches zero, add a scoped `eslint-disable` only on the legacy definition files. This is the guard that prevents R4 (dual-system re-contamination). Note the `Property` selector will also flag Badge/InputState recipe-variant keys named `colour` — add per-file `// eslint-disable-next-line` there (those are recipe variant names, not sprinkles props) or tighten the selector to `CallExpression[callee.name='sprinkles'] Property[key.name=...]`.

### C-final handoff (into W4-P4)

Once DoD 1-4 hold, hand W4-P4 a checklist: delete (1) `colours` + `intent` + legacy `foreground`/`background` from `THEME_CONTRACT` and every `*/tokens.ts`; (2) `typography.colour` from contract + tokens + `sprinklesLegacyText` (`typography.css.ts`) + the `!color && sprinklesLegacyText(...)` fallback in `typography.ts`; (3) the legacy sprinkles properties (`colour`/`backgroundColour`/`border*Colour`), their shorthands, and `SprinklesLegacyColours`; (4) `buildColourGamut(colours)` under `colours.gamut` (keep it under `color.gamut`); (5) the black900 deprecated alias (W0-P1). Ship with the codemod (W4-P1) + changelog. This is a **major** and the only place these removals are allowed.

---

## Gates, release, OU mapping, dependencies

- **Gates (every C package):** master §4.0.1 suite — `yarn lint`; `yarn test run <Scope>`; `yarn test:a11y`; CI Chromatic. **Base-theme Chromatic zero-diff is the hard gate.** Snapshot churn resolved via the stripped-`__hash` procedure; never blanket `-u`.
- **Release:** **minor** per package (C-P1, each C-Pn). Folded repoints ship inside their Wave-3 package's minor (no separate C changeset). Changeset texts inlined per package above. Appendix A of the master governs the mechanical release.
- **OU mapping:** Track C = **OU-3 / OU-13** (colour internalisation) throughout (master §8.1). Folded repoints inherit their Wave-3 package's OU additionally (e.g. Button repoint → OU-8/OU-34 via W3a-P1).
- **Dependencies (master §5.2):** `C-P1 ← W1-P1` (W3-P0 dropped — ratified relaxation). `C-P2…n ← C-P1` (+ paired W3 package for folded repoints). `C-P9 ← C-P1`; **`W3c-P1 (Badge) ← C-P9`** (shared intent colourset must be repointed first — orchestrator decision). `W3a/3b/3c ← W3-P0 + paired C repoint + relevant W1 tokens`. `C-final ⊂ W4-P4 ← all C-Pn + all folded repoints complete`. Lint-rule flip-to-error is gated on burn-down = zero (feeds W4-P2 deprecation + G-P1 governance).

### Post-release MFE verification (every Track C package)

Product-owner requirement (applies to all wave files). One shared checklist — do **not** duplicate per batch. Runnable by an agent in the MFE monorepo at `/Users/timamehro/grit/github.com/autoguru/mfe` (single `bun.lock`, manual overdrive bumps, local-link via `.scripts/copy-overdrive.js`; the mfe repo-wide type-check is `bun run lint:tsgo`).

1. **Pre-publish smoke (local link, before the Version Packages PR merges):**
   ```bash
   # in overdrive, on the package branch
   yarn build
   # in the mfe monorepo
   cd /Users/timamehro/grit/github.com/autoguru/mfe
   yarn overdrive:local          # copies the local overdrive build in (.scripts/copy-overdrive.js)
   bun run lint:tsgo             # repo-wide type-check — MUST be clean
   ```
   Then spot-check 2-3 high-traffic screens (start the relevant app dev servers — ask the human to start them if not already running; never start one before tests). **Pixel-identical is the whole contract of a Track C repoint** — any visible shift on a base-theme screen = **FAIL**: pin overdrive back and investigate before publishing.
2. **Legacy-surface regression probe:** the MFE still consumes the legacy paths heavily (`colours.*` 390 refs; legacy sprinkles props). Pick a screen that demonstrably consumes legacy tokens/props (e.g. any of the 297 `vars.colours.gamut.*` usages) and confirm it renders identically — legacy stays exported and byte-identical until the major.
3. **C-P1 only — semantic-parity probe:** in one throwaway mfe package, add a scratch usage of a NEW semantic sprinkles value — `<Box backgroundColor="gray900">` plus a `color` set to a Wave-1 namespace key (e.g. the `foreground`-derived key exposed by C-P1) — it must **type-check and render**; then delete the probe (never commit it).
4. **Post-publish confirmation:** on a throwaway mfe branch, bump `@autoguru/overdrive` to the published minor → `bun install` → repeat `bun run lint:tsgo` + the step-1/step-2 spot-checks against the published artifact (not the local link).
5. **Tenant guard:** the 4 tenant theme packages (`smartFleetTheme`, `ampolTheme`, `fleetGuruTheme`, `dynamicGuruTheme`) compile and their elevation unit tests pass (they assert **exact** elevation values — any failure means a token value moved and the package must not ship).
6. **Rollback:** revert the version bump in `package.json` + `bun.lock` (pin-back) — one commit; because every Track C release is additive/pixel-preserving, no code migration exists to unwind in the MFE.

---

## Deviations & open items

1. **Master §9.1 seed under-counts direct usage.** The seed grep (`vars.colours.*` only) **missed** OptionGrid (19 refs), Calendar (15), OptionList (10), SearchBar (6), Popover (2), and the CheckableBase share of `private` — all of which use `tokens.colours.*` (imported as `overdriveTokens as tokens`). This plan's inventory uses the master W1-P0 pattern (`tokens.colours.*` included) and supersedes the seed. Recommend the master §9.1 table be updated to add these five+ dirs. **These are not in any Wave-3 sub-wave** in the master, so they are handled as standalone C-P2/C-P3.
2. **Master §9.1 "Text 1 / Heading 1 direct" are stories.** `Text.stories.tsx:93` / `Heading.stories.tsx:76` iterate `overdriveTokens.typography.colour` (non-shipping). The *real* Text/Heading legacy dependency is **indirect**, via `styles/typography.ts`'s `sprinklesLegacyText` default path — repointed in C-P4. Logged so the burn-down isn't considered incomplete when the stories still reference the token (stories can keep iterating the legacy map until C-final).
3. **`typography.colour` intent-override subtlety.** The sprinkles `colour` prop's 9 intent-named keys resolve to the *intent foreground* (mostly `white`), NOT the same-named `typography.colour.*` value — because `intentForegroundColours` is spread last (`sprinkles.css.ts:68-74`). Builders repointing a JSX `colour="primary"` (→white) vs a css.ts `vars.typography.colour.primary` (→green600) must use the **resolved** value, not the key name. Flagged in the Builder prompt; Reviewer check 2 enforces value-equality.
4. **`color.info.foreground` drift.** `typography.colour.information = blue500 #0d59fc` ≠ Figma `color.info.foreground = blue600 #0d54e5`. AutoSuggest (C-P8, standalone) uses the gamut fallback `color.gamut.blue['500']` (exact). A future info restyle (no current Wave-3 package explicitly covers AutoSuggest's info surface) would use the named token with a value-split. Recommend a design-team confirm (master §6-Q1 touches Blue-200; add info-foreground grade to that question).
5. **`color.warning.foreground` vs legacy warning.** ProgressSpinner `typography.colour.warning = yellow800 #f69a1f`; Figma `color.warning.foreground = #F69A1F` (yellow800) — actually equal, but Figma `warning.backgroundDark = #FFC001` (yellow500). Confirm during W3c-P8 folding; ProgressSpinner's repoint uses `color.gamut.yellow['800']` to be value-exact regardless.
6. **`private/InputBase` success colour.** `typography.colour.success = green600 #01c68c`; Figma `color.success.foreground = #01C68C` (green600) — equal. But `color.success.text = #00574C` (green900). Ensure W3b-P1 maps the field-success *foreground* to `success.foreground`, not `success.text`. Value-exact fallback: `color.gamut.green['600']`.
7. **`ds2026` theme dir does not yet exist.** W3-P0 scaffolds `lib/themes/ds2026/` (a base passthrough). **RESOLVED — ratified and reconciled into master §5.2:** C-P1 depends only on W1-P1 (it touches only `sprinkles.css.ts` and writes no `ds2026/tokens.ts`), and the standalone batches C-P2…C-P9 (gamut fallback, no `ds2026` edit) run on the `C-P1 ← W1-P1` chain regardless of W3-P0. Only the folded value-split repoints (W3a/3b/3c) truly need `ds2026`/W3-P0.
8. **`intentColorset.css.ts` + `focusOutline.css.ts`** — **resolved — C-P9 created per orchestrator decision (aligned with the wave-3.md cross-package serialisation table).** These shared utilities get a standalone batch (see the C-P9 work order) rather than being folded into Badge/Alert: intentColorset feeds Badge (W3c-P1), Alert (W3c-P7) and IntentStripe per the wave-3 serialisation, so folding it into one component's package would couple unrelated components. **W3c-P1 (Badge) now depends on C-P9 landing first.** Measured note retained for the record: the only *direct* importer of the intent recipe today is `Badge/Badge.css.ts`; Alert/IntentStripe currently reach intents via sprinkles `backgroundColour={intent}` — the C-P9 Chromatic gate nonetheless covers all three plus the 14-file focusOutline consumer set.
9. **`OverdriveProvider/useColorOverrides.ts`** builds runtime colour-override objects keyed `colour`/`backgroundColour` that feed the (unused-in-MFE) `colorOverrides` path. Repointing it is low-value (0 MFE usage of `ThemeOverrideProvider`); placed in C-P8 but could be deferred to C-final. Flag for orchestrator.
10. **Effort vs master estimate.** Master §5.4 estimates "~30 repoints." Measured: 48 legacy-touching dirs (≈20 folded into Wave-3, ≈28 standalone across 8 batches — C-P2…C-P8 components + C-P9 shared utilities). The standalone count is higher than the seed implied (see deviation 1); batches sized 3-6 keep each package reviewable.
11. **Inventory grep blind spot — `overdriveTokens.colours.*` import alias (found on `feature/AG-19959-overdrive-colour`, 2026-07-07).** The measured direct-ref grep matches `vars\.colours\.` and `tokens\.colours\.` but **not** the un-aliased `overdriveTokens\.colours\.` import name (case-sensitive; `overdriveTokens` has a capital `T`, so the `tokens\.` alternative does not substring-match it). This missed exactly one legacy-touching dir: **`DateTimeField`** (`DateTimeField.css.ts:106,138` → `overdriveTokens.colours.gamut.gray{400,300}`, 2 refs, grey ramp only). It was already legacy on `main` (`black{400,300}`) and the branch's black→gray repoint kept it on legacy `colours.gamut.*`. **Correction:** direct-ref totals become **34 files / 30 dirs**; total legacy-touching dirs become **49 of 78** (29 clean). DateTimeField needs a standalone Track C repoint (`gray400`→`color.gamut.gray['400']`, `gray300`→`color.gamut.gray['300']`, gamut fallback per §1.5 rule 2) — assign it to the C-P8 straggler batch or a form-field family batch near W3b. The DoD-1 burn-down grep (§ Definition of done) should add `overdriveTokens\.colours\.` (and `overdriveTokens\.typography\.colour`) to its pattern so DateTimeField and any future `overdriveTokens`-importing dir are not silently treated as clean.
12. **Base-theme-only verification gap — corrective package `C-theme-bridge` (found on `feature/AG-19959-overdrive-colour`, 2026-07-07).** Track C repoints were value-verified against the **base theme only**. Investigation of the theme layer found the verification was blind to per-theme overrides: **`flat_red` and all 4 MFE tenant themes override ONLY the legacy `colours.gamut` / `colours.intent`** (custom palettes) and set **nothing** under semantic `color.*`; **`neutral` overrides `colours.intent.primary` to grey**; and **runtime brand overrides (`useColorOverrides`) write only the legacy intent CSS vars.** Consequences: **(a) gamut→gamut** repoints drift under `flat_red`/tenants (raw-hex `color.gamut` ignores the tenant's re-tinted legacy gamut); **(b) intent→gamut** repoints drift under `neutral`/`flat_red`/tenants/runtime-branding (a fixed gamut grade cannot follow the per-theme/runtime intent override). **Fixes shipped by this package:** (a) the **theme-bridge** — `base/tokens.ts` `color.gamut` now aliases the legacy `colours.gamut` CSS vars (each leaf = `var(--od-colours-gamut-*)`), so tenants overriding `colours.gamut` transparently drive the semantic gamut; base computed values are byte-identical, and the alias flips to raw hex at the DS-2026 major (W4-P4). See §1.5 correction + the "intent-derived legacy refs are never repointed" rule. (b) **Revert list** — the four intent-derived swaps returned to legacy `colours.intent.*` refs (major-only): **DataTable** (`DataTable.css.ts` focus-outline → `colours.intent.primary.background.standard`), **Meta** (`Meta.css.ts` → `colours.intent.primary.background.strong`), **SliderProgress/ProgressStep** (removed the `legacyIntentToSemanticBackgroundColor` translation table; the leaf renders via the legacy `backgroundColour` prop again — the pure-gamut `SliderProgress.stories.tsx` decorator stays semantic), and **Modal** (backdrop → `backgroundColour="neutral"`, which also revalidated the previously-stale `MinimalModal` snapshot). W1-P1 semantic namespaces (`foreground`/`background`/`border`/`info`/`success`/`warning`/`alert`) and `color.surface`/`content`/`interactive` were **left raw** — investigation confirmed no theme overrides their legacy sources today.
