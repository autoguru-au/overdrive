# Wave 1 — Complete the token foundation (execution plan)

> **Parent plan:** [`../../design-system-2026-migration-plan.md`](../../design-system-2026-migration-plan.md) — this file **expands** the Wave 1 section (W1-P0 → W1-P3). It never overrides the master; where the two diverge, the master wins and the divergence is logged in [§ Deviations & open items](#deviations--open-items).
> **Repo:** `/Users/timamehro/grit/github.com/autoguru/overdrive` · **Branch of record for this planning doc:** `feature/AG-19959-overdrive-colour` (executors branch off `main` per each package).
> **Audience:** an orchestrator running Sonnet-class Builder/Reviewer/Verify agents with **only** the repo + this file + the master plan. Everything an executor needs is inlined here.
> **Figma file key (single allowed access, W1-P3 only):** `ZkQlQcJkF7NTnZomVrPRN5` ("AutoGuru Design System 2026").

---

## Wave overview

Wave 1 completes the semantic `color.*` token layer and the radius/shadow/spacing/motion foundation. **Everything is additive** (Golden Rule, master §0): new contract keys, new token values, never a change to an existing key's value/name and never a component/API change. The one sanctioned exception (Track C `color.*` revalue) is **not** exercised in Wave 1 — see the W1-P2 note.

| Pkg | Title | Files touched | Depends on | Release |
|---|---|---|---|---|
| **W1-P0** | Legacy-usage inventory (analysis only) | none (writes §9.1 of master) | W0-P1, W0-P2 | none |
| **W1-P1** | Semantic colour namespaces (foreground/background/border/info/success/warning/alert) | `theme.css.ts`, `base/tokens.ts` | W1-P0 | minor |
| **W1-P2** | Button-scoped semantic colour tokens (`color.button.*`) | `theme.css.ts`, `base/tokens.ts` | W1-P1 | minor |
| **W1-P3** | Radius aliases + 20px radius, `z1`–`z4` shadows, missing spacing steps, motion/focus | `theme.css.ts`, `base/tokens.ts`, `flat_red/tokens.ts` | W1-P1 | minor |

### Architecture facts every Wave-1 executor must know (verified in-repo 2026-07-07)

1. **`THEME_CONTRACT` is a plain object literal** (`lib/themes/theme.css.ts:78-351`) fed to `createGlobalThemeContract`. Adding a key adds a CSS-var name to the public contract and **auto-widens** `overdriveTokens` (alias `themeContractVars`, public export `tokens`). No manual type edit is needed for the var names.
2. **`ThemeTokens = TokensFromContract<typeof overdriveTokens>`** (`theme.css.ts:365`, helper `helpers.ts:26-32`). `TokensFromContract` maps **every** contract leaf to a **required** value. ⇒ Adding a contract leaf makes that value **required** in `ThemeTokens`, so **`base/tokens.ts` MUST assign it** (it is `satisfies ThemeTokens`, `base/tokens.ts:283`) or `tsc` fails.
3. **`flat_red` and `neutral` inherit via `deepmerge(baseTokens, { …overrides… }) satisfies ThemeTokens`** (`flat_red/tokens.ts:68`, `neutral/tokens.ts:69`). Any key you add to `base/tokens.ts` **flows into both themes automatically** through the merge and satisfies the widened `ThemeTokens` **without editing those files**. You edit `flat_red`/`neutral` **only** where that theme must *diverge* from base (e.g. `flat_red` zeroes shadows/small radii). This is what "mirror flat_red/neutral" means in the master — for most Wave-1 additions the mirror is a no-op inherited through `deepmerge`.
4. **`ColourMap` (`types.ts:7`) is `Record<string, ColourValue | string>`** and is used only for the raw ramps (`color.gamut.*` / legacy `colours.gamut`). The new `color.foreground/background/border/info/success/warning/alert/button.*` namespaces live under `color:` in the contract and are **not** part of `ColourMap` — so **`ColourMap`'s shape does not change** (satisfies R10). Do not touch `ColourMap`, `buildColourGamut`, `FlattenedColours`, or `breakpoints`.
5. **Sprinkles bindings are auto-derived** from tokens (`lib/styles/sprinkles.css.ts`): `borderRadius: tokens.border.radius`, `boxShadow: tokens.elevation`, `paddingX/marginX/gap/width/height` from `tokens.space`. New radius/elevation/space keys therefore become valid sprinkle prop values **automatically and additively** with no sprinkles edit. Conversely the new `color.*` namespaces are **not** bound to any sprinkle in Wave 1 — binding `color`/`backgroundColor`/`border*Color` onto them is **Track C / C-P1**, explicitly **out of scope** here.
6. **Post-W0-P1 the base grey/green/blue/yellow/red ramps already equal the DS-2026 Figma values** (`base/colours.ts` = the §3.1 hex). So every grey-derived semantic token has `V_2026 == V_legacy` — assigning the Figma hex to base is zero-drift.

### Base value source of truth (used across W1-P1/P2/P3)

`base/tokens.ts` imports `{ colourMap }` from `./colours` (`base/colours.ts`). Verified `colourMap` hex (use references, not raw literals, to keep a single source of truth):

```
gray  900 #212338  800 #34384c  700 #484c5f  600 #5c6172  500 #6c7283  400 #8f95a1  300 #d4d9dd  200 #eef0f2  100 #fafbfc
green 900 #00574c  800 #18856f  700 #03af83  600 #01c68c  500 #00dda5  400 #36e5aa  300 #71edc2  200 #e3f8f0  100 #f2fdf9
blue  900 #0d47a1  800 #0d4bb7  700 #0d50ce  600 #0d54e5  500 #0d59fc  400 #4a86ff  300 #81afff  200 #bad4ff  100 #f3f8ff
yellow900 #f38e29  800 #f69a1f  700 #f9a715  600 #fcb30b  500 #ffc001  400 #ffcf3d  300 #ffde79  200 #ffedb5  100 #fffcf2
red   900 #780502  800 #96110e  700 #b51e1a  600 #d42b26  500 #e12e28  400 #e85f5b  300 #ef918e  200 #ffd4d4  100 #fdf4f4
white #ffffff
```

### Shared verification gate suite (master §4.0.1)

```bash
yarn lint                 # eslint + tsc — MUST be clean
yarn test run themes      # theme/token unit + storybook vitest (Wave-1 scope is the theme layer)
yarn test:a11y            # storybook a11y project — MUST pass
# Chromatic runs in CI on the PR (visual_test). Additive Wave-1 packages MUST be base-theme ZERO-DIFF.
# Never start a dev server before running tests — assume it is already running; ask the human if not.
```

**Snapshot-churn (`__hash`) procedure** — a token edit renumbers Vanilla-Extract class hashes and churns many snapshots that are *style-identical*:
```bash
git diff -- '**/__snapshots__/**' | sed -E 's/__[a-z0-9]{6,7}[0-9]?//g' > /tmp/stripped.diff
# stripped.diff empty of meaningful +/- lines  ⇒ hash-only churn ⇒ safe to `yarn test run themes -u`, note "hash-only churn" in PR.
# stripped.diff shows real declaration changes ⇒ genuine visual change ⇒ for additive Wave-1 work this must be EMPTY on base theme; investigate.
```
Only run `yarn test run themes -u` **after** the Reviewer confirms the churn is hash-only. Never blanket-`-u`. Never `autoAcceptChanges` off `main`.

### Shared changeset / release (master Appendix A)

Each shipping package (W1-P1/P2/P3): `yarn changeset` → select `@autoguru/overdrive` → **minor** → paste that package's summary → commit `.changeset/<slug>.md` with the code → PR to `main` (CI: `yarn lint`, `yarn test --run --coverage`, `visual_test`/Chromatic all green, base-theme zero-diff) → merge → merge the auto-opened **Version Packages** PR → `publish.yml` publishes to npm. A minor moves `4.59.0`→`4.60.0` (further Wave-1 minors accumulate). **Rollback:** revert the feature PR on `main` before the Version Packages PR is merged; if already published, ship a follow-up minor that removes the added keys (safe — they have no MFE consumer at Wave 1) rather than a version yank.

---

## W1-P0 — Legacy-usage inventory (Track C prerequisite; deliverable = the inventory)

### Work order

**Objective:** produce the authoritative per-component legacy-colour inventory that Track C burns down, and commit it into **master §9.1**. Analysis only — **no code, no token, no snapshot changes.**

**Files:** none in `lib/`. The single output is the populated table in `../../design-system-2026-migration-plan.md` §9.1 (Builder edits the master **for this row only** — the §9.1 table — this is the master's own instruction for W1-P0, not a plan change).

**Exact grep commands (from master §4.C / W1-P0):**
```bash
cd /Users/timamehro/grit/github.com/autoguru/overdrive

# (A) DIRECT references to the legacy colour contract / legacy typography colour / legacy text sprinkles
grep -rIn --include='*.ts' --include='*.tsx' \
  -E "vars\.colours\.|\.colours\.(gamut|foreground|background|intent)|typography\.colour|sprinklesLegacyText" lib/

# (B) TRANSITIVE: legacy sprinkles colour PROPS (these resolve to tokens.colours.* per sprinkles.css.ts:35-74,63-74,116-131)
grep -rIn --include='*.tsx' \
  -E "colour:|backgroundColour:|border(Top|Right|Bottom|Left)Colour:" lib/components/

# Helper: list every component dir so none is missed
ls -1 lib/components
```

**Classification rubric (assign exactly one per component dir):**
- **`legacy-direct`** — matches grep (A): imports `vars.colours.*`/`tokens.colours.*`, `typography.colour`, or `sprinklesLegacyText` in the component's own `*.ts`/`*.tsx`/`*.css.ts`.
- **`legacy-via-sprinkles`** — no (A) hit, but matches grep (B): uses the legacy sprinkle props (`colour=`/`backgroundColour=`/`border*Colour=`) which bind to `tokens.colours.*`. (Note: the *new* props `color=`/`backgroundColor=`/`border*Color=` are **not** legacy — do not flag them.)
- **`clean`** — no (A) and no (B) hit; renders only via semantic `color.*`, layout sprinkles, or no colour at all.
- Tie-break: a dir with **both** (A) and (B) is `legacy-direct` (the stronger coupling). Record the (A) direct-ref count regardless.

**Output format — replace the master §9.1 table body with one row per component dir:**

| Component | Uses legacy | Direct refs | Repoint pkg | Wave |
|---|---|---|---|---|
| `<dir>` | `legacy-direct` \| `legacy-via-sprinkles` \| `clean` | `<int from grep A>` | `<C-P… / paired W3 pkg / "C-P (standalone)" / "—" if clean>` | `<3a/3b/3c/4 / "—">` |

- Keep the master's already-seeded `legacy-direct` rows (they are the grep-(A) counts of record; re-verify each count and correct if drift). Fill the `~55 other dirs` line by classifying **every** remaining dir as `legacy-via-sprinkles` or `clean`.
- **Repoint pkg / Wave** columns: reuse the master's existing assignments for seeded rows; for newly-classified rows assign `C-P (standalone)` + the wave of the component's paired W3 sub-wave if it has one, else `4`. Where a component has a Wave-3 restyle (master §W3a/3b/3c tables) the repoint folds into that package; otherwise it is standalone Track C.

**Seed counts to reconcile (master, 44 files, direct refs):** `private`=24, Tabs=12, ProgressSpinner=6, Pagination=5, Table=4, Switch=4, Slider=4, BulletText=4, TextLink=3, ScrollPane=3, Radio=3, CheckBox=3, Button=3, BulletList=3, AutoSuggest=3, Stepper=2, StarRating=2, OverdriveProvider=2, Meta=2, DataTable=2, Alert=2 (+`sprinklesLegacyText`), Text=1, Stack=1, Heading=1, EditableText=1, DropDown=1.

**Done-criteria:** master §9.1 has one row for **every** dir in `lib/components`; every dir carries exactly one classification; the `legacy-direct` counts match a fresh run of grep (A); no `lib/` source file changed.

### DO-NOT list (with MFE-measured reasons)
- **Do NOT edit any `lib/` source, token, contract, snapshot, or story.** This is a read-only survey; any code diff is an automatic FAIL. (Reason: contract is imported by 334 MFE files — no accidental churn.)
- **Do NOT reclassify the new semantic props** (`color=`/`backgroundColor=`/`border*Color=`) as legacy — only `colour=`/`backgroundColour=`/`border*Colour=` are legacy.
- **Do NOT run Chromatic / `-u`** — there is nothing visual to accept.

### Agent prompts

**BUILDER (`sonnet`)**
```
You are the Builder for W1-P0 — Legacy-usage inventory — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Do NOT create a code branch; this is analysis only. Do NOT edit any file under lib/. The ONLY file you may edit is design-system-2026-migration-plan.md, and ONLY its §9.1 table.

TASK: classify every directory in lib/components as legacy-direct, legacy-via-sprinkles, or clean, and populate master §9.1.

RUN EXACTLY:
  cd /Users/timamehro/grit/github.com/autoguru/overdrive
  grep -rIn --include='*.ts' --include='*.tsx' -E "vars\.colours\.|\.colours\.(gamut|foreground|background|intent)|typography\.colour|sprinklesLegacyText" lib/
  grep -rIn --include='*.tsx' -E "colour:|backgroundColour:|border(Top|Right|Bottom|Left)Colour:" lib/components/
  ls -1 lib/components

RUBRIC:
  legacy-direct        = a hit in grep (A) inside the component's own files.
  legacy-via-sprinkles = no (A) hit but a (B) hit (legacy sprinkle props colour=/backgroundColour=/border*Colour=).
  clean                = neither. (color=/backgroundColor=/border*Color= are the NEW props — NOT legacy.)
  A dir with both (A)+(B) = legacy-direct; still record its (A) direct-ref count.

OUTPUT: rewrite the §9.1 table so there is one row per lib/components dir with columns Component | Uses legacy | Direct refs | Repoint pkg | Wave. Preserve the master's seeded legacy-direct rows and their Repoint pkg/Wave; re-verify each direct-ref count against grep (A) and correct drift. For newly-classified dirs use "C-P (standalone)" + the wave of its paired W3 sub-wave (master §W3a/3b/3c) or 4 if none.

DONE: every dir classified; legacy-direct counts match a fresh grep (A); zero changes under lib/.
Report: total dirs, count per classification, any count that drifted from the master seed, and the full table.
```

**REVIEWER (`opus` — spot-check, master §4.0.2 Reviewer template, package-specific)**
```
You are the adversarial Reviewer for W1-P0. Verify the inventory, do not rewrite it.
1. `git status` / `git diff --stat` shows ZERO changes under lib/ (any lib/ diff = FAIL).
2. Re-run grep (A) and (B) from the plan. Spot-check 10 dirs (incl. all seeded legacy-direct rows): does each row's classification and direct-ref count match the greps? Any mismatch = FAIL that row.
3. Every dir in `ls -1 lib/components` appears exactly once in §9.1 (no missing/duplicate dir).
4. No dir flagged legacy for using the NEW props (color=/backgroundColor=/border*Color=).
Report PASS/FAIL with the dirs you spot-checked and any correction.
```

**VERIFY (`sonnet`)**
```
You are the Verify agent for W1-P0. There is no code change, so run only:
  cd /Users/timamehro/grit/github.com/autoguru/overdrive && git diff --stat
Confirm no lib/ file changed. Re-run the two greps and report the total direct-ref file count (expect ~44) and the component-dir count. No Chromatic, no unit tests, no -u. Report PASS/FAIL.
```

### Gates & release
- **Gates:** greps reproduce; no `lib/` diff. No `yarn lint`/Chromatic needed (no code).
- **Changeset:** none (analysis; no API).
- **Rollback:** revert the §9.1 edit if wrong.

### OU mapping + dependencies
- **OU:** OU-3 / OU-13. **Depends on:** W0-P1, W0-P2 landed (so the ramp/typography state the inventory measures is final). **Blocks:** C-P1 and every Track C repoint (sizes the burn-down); informs W1-P1/P2 net-new-vs-replacement.

---

## W1-P1 — Semantic colour namespaces (foreground / background / border / info / success / warning / alert)

### Work order

**Objective:** add the §3.1 semantic namespaces as **new keys** under `THEME_CONTRACT.color.*` and assign their base values. All grey-derived tokens equal both the current rendered grey and the Figma value post-W0-P1 (zero drift); the chromatic namespaces (info/success/warning/alert) have **no existing consumer** (components still use `colours.intent.*`), so assigning the Figma hex is zero-Chromatic-diff at Wave 1.

**Files:**
- `lib/themes/theme.css.ts` — add the contract block inside the existing `color: { … }` object (after `interactive: { … }`, before the closing `},` of `color`).
- `lib/themes/base/tokens.ts` — add the matching value block inside the existing `color: { … }` object (after `interactive: { … }`).
- `lib/themes/flat_red/tokens.ts`, `lib/themes/neutral/tokens.ts` — **NO edit** (they `deepmerge(baseTokens, …)`; the new `color.*` keys flow through automatically and satisfy the widened `ThemeTokens`). Diverge only if design later wants a themed override — not in this package.
- `lib/themes/types.ts` — **NO edit** (`ColourMap` unchanged; `ThemeTokens` auto-widens from the contract).

**Contract addition — paste verbatim into `theme.css.ts` inside `color:` (matches master §W1-P1):**
```ts
foreground: {
    primary: 'color-foreground-primary',
    secondary: 'color-foreground-secondary',
    reverse: 'color-foreground-reverse',
    tertiaryInactive: 'color-foreground-tertiary-inactive',
    tertiaryInactiveLight: 'color-foreground-tertiary-inactive-light',
},
background: {
    default: 'color-background-default',
    reverse: 'color-background-reverse',
    inactive: 'color-background-inactive',
    emphasisInactive: 'color-background-emphasis-inactive',
},
border: {
    default: 'color-border-default',
    emphasis: 'color-border-emphasis',
    selected: 'color-border-selected',
    strong: 'color-border-strong',
},
info: {
    text: 'color-info-text',
    foreground: 'color-info-foreground',
    background: 'color-info-background',
},
success: {
    text: 'color-success-text',
    foreground: 'color-success-foreground',
    backgroundDark: 'color-success-background-dark',
    backgroundLight: 'color-success-background-light',
},
warning: {
    text: 'color-warning-text',
    foreground: 'color-warning-foreground',
    backgroundDark: 'color-warning-background-dark',
    backgroundLight: 'color-warning-background-light',
},
alert: {
    text: 'color-alert-text',
    foreground: 'color-alert-foreground',
    background: 'color-alert-background',
},
```

**Base value addition — paste verbatim into `base/tokens.ts` inside `color:` (uses `colourMap` refs; hex in comments is the §3.1 authoritative variable value):**
```ts
foreground: {
    primary: colourMap.gray['900'],               // #212338
    secondary: colourMap.gray['700'],             // #484c5f
    reverse: colourMap.white,                     // #ffffff
    tertiaryInactive: colourMap.gray['400'],      // #8f95a1
    tertiaryInactiveLight: colourMap.gray['300'], // #d4d9dd
},
background: {
    default: colourMap.white,                     // #ffffff
    reverse: colourMap.gray['900'],               // #212338
    inactive: colourMap.gray['300'],              // #d4d9dd
    emphasisInactive: colourMap.gray['200'],      // #eef0f2
},
border: {
    default: colourMap.gray['300'],               // #d4d9dd
    emphasis: colourMap.gray['400'],              // #8f95a1
    selected: colourMap.gray['600'],              // #5c6172
    strong: colourMap.gray['900'],                // #212338
},
info: {
    text: colourMap.blue['900'],                  // #0d47a1
    foreground: colourMap.blue['600'],            // #0d54e5
    background: '#e1edfe',                         // Figma info SURFACE — NOT blue-200 (#bad4ff); literal per §3.1 note + §6-Q1
},
success: {
    text: colourMap.green['900'],                 // #00574c
    foreground: colourMap.green['600'],           // #01c68c
    backgroundDark: colourMap.green['800'],       // #18856f
    backgroundLight: colourMap.green['200'],      // #e3f8f0
},
warning: {
    text: colourMap.red['800'],                   // #96110e  (Figma warning/text is RED, not yellow)
    foreground: colourMap.yellow['800'],          // #f69a1f
    backgroundDark: colourMap.yellow['500'],      // #ffc001
    backgroundLight: colourMap.yellow['200'],     // #ffedb5
},
alert: {
    text: colourMap.red['800'],                   // #96110e
    foreground: colourMap.red['600'],             // #d42b26
    background: colourMap.red['200'],             // #ffd4d4
},
```

**Steps:**
1. Branch `feat/w1-p1-semantic-colour-namespaces` off `main`.
2. Add the contract block to `theme.css.ts`; add the value block to `base/tokens.ts`.
3. `yarn lint` — expect clean; if `tsc` errors that a `color.*` key is missing on some `ThemeTokens` object, that object is a hand-authored full token literal (not a `deepmerge` of base) — STOP and report (it means a theme/tenant path constructs `ThemeTokens` directly; see Deviations #2).
4. `yarn test run themes` → apply the `__hash`-strip procedure; expect hash-only churn.
5. `yarn test:a11y`.
6. Add changeset (minor) + summary below. Open PR; confirm Chromatic base-theme zero-diff.

**Done-criteria:** contract + base carry all 26 new leaves; `yarn lint` clean; theme snapshots are hash-only churn (stripped diff empty); Chromatic base-theme zero-diff; `git diff lib/themes/theme.css.ts` and `git diff lib/themes/base/tokens.ts` show **only additions** (no edited/deleted existing lines); `flat_red`/`neutral`/`types.ts` unchanged.

### DO-NOT list (with MFE-measured reasons)
- **Do NOT change or rename any existing `color.*`, `colours.*`, `space`, `radius`, `elevation`, or `typography` key/value.** `themeContractVars` is imported by **334 MFE files** (325 `vars` occurrences); legacy `colours.*` is referenced **390×**, `vars.space[...]` **556× (silent-failure)**. Any edit to an existing line is an automatic FAIL.
- **Do NOT touch `lib/styles/sprinkles.css.ts`.** Binding the new namespaces to `color`/`backgroundColor`/`border*Color` is **Track C / C-P1**. Wave 1 adds contract+tokens only.
- **Do NOT edit `flat_red/tokens.ts` or `neutral/tokens.ts`** — they inherit via `deepmerge`. Editing them risks accidental divergence.
- **Do NOT change `ColourMap`, `ThemeTokens` (by hand), `buildColourGamut`, `FlattenedColours`, or `breakpoints`** — 4 MFE tenant theme packages import these; shape changes break them at compile (R10).
- **Do NOT source hex from Figma swatch labels.** Use the §3.1 variable values (grey/green/yellow/red match the ramp; `info.background` is the literal `#e1edfe`). `#e1edfe` is intentionally **not** blue-200 (`#bad4ff`).

### Agent prompts

**BUILDER (`opus`)**
```
You are the Builder for W1-P1 — Semantic colour namespaces — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feat/w1-p1-semantic-colour-namespaces off main (touch no other branch).

HARD RULE (additive): Do NOT change the value or name of ANY existing token key; do NOT change component defaults/semantics; do NOT rename/remove any dir or export; do NOT change the shape of ColourMap/ThemeTokens (by hand) or any elevation value. New capability = new contract keys + new base values ONLY. If you cannot do it additively, STOP and report.
NO TRACK-C EXCEPTION IN THIS PACKAGE: every value here is assigned to a brand-new key with zero consumers; there is nothing to revalue.
SILENT-FAILURE WARNING: vars.space[...] is used 556× and colours.* 390× in the MFE with NO compile error on value drift; themeContractVars is imported by 334 files. Only ADD keys.

FILES:
  lib/themes/theme.css.ts   — add the contract block inside color:{…} (after interactive:{…}).
  lib/themes/base/tokens.ts — add the value block inside color:{…} (after interactive:{…}).
  DO NOT edit flat_red/tokens.ts, neutral/tokens.ts, types.ts, or sprinkles.css.ts (they inherit / are out of scope).

CONTRACT BLOCK (verbatim):
  foreground:{primary:'color-foreground-primary',secondary:'color-foreground-secondary',reverse:'color-foreground-reverse',tertiaryInactive:'color-foreground-tertiary-inactive',tertiaryInactiveLight:'color-foreground-tertiary-inactive-light'},
  background:{default:'color-background-default',reverse:'color-background-reverse',inactive:'color-background-inactive',emphasisInactive:'color-background-emphasis-inactive'},
  border:{default:'color-border-default',emphasis:'color-border-emphasis',selected:'color-border-selected',strong:'color-border-strong'},
  info:{text:'color-info-text',foreground:'color-info-foreground',background:'color-info-background'},
  success:{text:'color-success-text',foreground:'color-success-foreground',backgroundDark:'color-success-background-dark',backgroundLight:'color-success-background-light'},
  warning:{text:'color-warning-text',foreground:'color-warning-foreground',backgroundDark:'color-warning-background-dark',backgroundLight:'color-warning-background-light'},
  alert:{text:'color-alert-text',foreground:'color-alert-foreground',background:'color-alert-background'},

BASE VALUE BLOCK (verbatim; colourMap already imported at top of base/tokens.ts):
  foreground:{primary:colourMap.gray['900'],secondary:colourMap.gray['700'],reverse:colourMap.white,tertiaryInactive:colourMap.gray['400'],tertiaryInactiveLight:colourMap.gray['300']},
  background:{default:colourMap.white,reverse:colourMap.gray['900'],inactive:colourMap.gray['300'],emphasisInactive:colourMap.gray['200']},
  border:{default:colourMap.gray['300'],emphasis:colourMap.gray['400'],selected:colourMap.gray['600'],strong:colourMap.gray['900']},
  info:{text:colourMap.blue['900'],foreground:colourMap.blue['600'],background:'#e1edfe'},
  success:{text:colourMap.green['900'],foreground:colourMap.green['600'],backgroundDark:colourMap.green['800'],backgroundLight:colourMap.green['200']},
  warning:{text:colourMap.red['800'],foreground:colourMap.yellow['800'],backgroundDark:colourMap.yellow['500'],backgroundLight:colourMap.yellow['200']},
  alert:{text:colourMap.red['800'],foreground:colourMap.red['600'],background:colourMap.red['200']},
NOTE: info.background is the literal '#e1edfe' (Figma info surface — NOT blue-200 #bad4ff). warning.text/alert.text are RED (#96110e).

STEPS: add both blocks; run `yarn lint`; `yarn test run themes` (apply the __hash-strip procedure from plan §4.0.1 — expect hash-only churn, do NOT blanket -u); `yarn test:a11y`; add a minor changeset with summary "Add DS-2026 semantic colour tokens (foreground/background/border/info/success/warning/alert) — additive." Open PR to main.
DONE: lint clean; snapshot churn is hash-only; git diff of the two files shows ONLY additions. Report gate results, the stripped-diff outcome, and any tsc error (esp. a missing-color.* error meaning a hand-authored ThemeTokens object exists — STOP and report it).
```

**REVIEWER (`opus`)**
```
You are the adversarial Reviewer for W1-P1. Inspect branch feat/w1-p1-semantic-colour-namespaces. Produce PASS/FAIL with file:line evidence.
1. `git diff lib/themes/theme.css.ts` and `git diff lib/themes/base/tokens.ts` must show ONLY added lines — no existing key's name/value edited or deleted. Any modified existing line = FAIL. No Track-C exception is permitted in this package (all keys are new).
2. `git diff lib/themes/flat_red/tokens.ts lib/themes/neutral/tokens.ts lib/themes/types.ts lib/styles/sprinkles.css.ts` must be EMPTY = FAIL if not.
3. Every base value matches §3.1 variable hex: verify each of the 26 leaves against the colourMap hex table in this file. Specifically confirm info.background === '#e1edfe' (NOT #bad4ff), warning.text===red-800 (#96110e), warning.foreground===yellow-800 (#f69a1f). Any swatch-label value = FAIL, flag to §6-Q1.
4. Contract var-name strings match the block above exactly (kebab-case, `color-…`).
5. ColourMap/ThemeTokens not hand-edited; no new peerDependency in package.json.
6. Base-theme Chromatic zero-diff; confirm the Builder's stripped-__hash diff is empty for base-theme stories (no real declaration change).
FAIL if any of 1–5 is violated. Report specifics.
```

**VERIFY (`sonnet`)**
```
You are the Verify agent for W1-P1 on branch feat/w1-p1-semantic-colour-namespaces. Run and report objective results (do not fix):
  yarn lint
  yarn test run themes
  yarn test:a11y
Interpret snapshot failures with the stripped-__hash procedure (plan §4.0.1): state whether churn is style-identical or a real diff. Confirm CI Chromatic (visual_test) is base-theme zero-diff on the PR once opened. Report PASS/FAIL per gate.
```

### Gates & release
- **Gates:** full suite; churn = pure `__hash` renumber; Chromatic base-theme zero-diff.
- **Changeset:** minor — *"Add DS-2026 semantic colour tokens (foreground/background/border/info/success/warning/alert) — additive."*
- **Release/rollback:** master Appendix A; rollback = revert PR (keys have no consumer, safe).

### OU mapping + dependencies
- **OU:** OU-3 / OU-1. **Depends on:** W1-P0. **Blocks:** W1-P2, W1-P3, W3-P0, C-P1, all Wave-2 components (they consume `vars.color.*`).

---

## W1-P2 — Button-scoped semantic colour tokens (`color.button.*`)

### Work order

**Objective:** add the confirmed §3.1 button tokens as **new keys** under `THEME_CONTRACT.color.button.*` and assign base values. **Exclude** the `Theme colours (WIP)/…` namespace (§6-Q3) and **omit** every `color.button.linkedText.*` key and every `secondary`/`ghost`/`critical.outlined` key whose value §3.1 does **not** confirm — leave them **absent** until §6-Q3 resolves (adding a key later is additive; shipping a guessed value is not).

**Base value decision (read this — it resolves a master internal inconsistency):** the master's §4.C value-split *rule* says base = `V_2026` unless a component is repointed onto the token **in this package**; W1-P2 repoints nothing (Button stays on legacy `colours.intent.*` until W3a-P1). The master's W1-P2 *parenthetical* says "base = current Button colours". These conflict. **Decision for W1-P2: follow the §4.C rule text → base = the Figma value (`V_2026`) from §3.1.** Rationale: at Wave 1 `color.button.*` has **zero consumers** (Button is not repointed; no Wave-2 component uses it), so base=`V_2026` is guaranteed zero-Chromatic-diff and does not depend on the unresolved Button→Class mapping (§6-Q5) or on the `ds2026` theme (which does not exist until W3-P0). The value-preserving split is then applied **at W3a-P1**, where Button is actually repointed: that package sets `base[T]=V_legacy(Button)` under the Track-C exception (grep proving zero MFE usage of `color.button.*` — trivially true, brand-new keys — + Chromatic base zero-diff) and `ds2026[T]=V_2026`. Logged in Deviations #1.

**Files:**
- `lib/themes/theme.css.ts` — add a `button: { … }` block inside `color:` (after the `alert:` block from W1-P1).
- `lib/themes/base/tokens.ts` — add the matching `button: { … }` value block inside `color:`.
- `flat_red`/`neutral`/`types.ts`/`sprinkles.css.ts` — **NO edit** (inherit via `deepmerge`; not sprinkle-bound in Wave 1).

**Contract addition — paste into `theme.css.ts` inside `color:`:**
```ts
button: {
    primary: {
        solid: {
            default: 'color-button-primary-solid-default',
            hover: 'color-button-primary-solid-hover',
            pressed: 'color-button-primary-solid-pressed',
            border: 'color-button-primary-solid-border',
        },
        outlined: {
            border: 'color-button-primary-outlined-border',
            text: 'color-button-primary-outlined-text',
        },
    },
    critical: {
        solid: {
            default: 'color-button-critical-solid-default',
        },
    },
},
```

**Base value addition — paste into `base/tokens.ts` inside `color:` (Figma hex per §3.1; `colourMap` refs where the value equals a ramp entry):**
```ts
button: {
    primary: {
        solid: {
            default: colourMap.green['300'],  // #71edc2  Green-300
            hover: colourMap.green['400'],    // #36e5aa  Green-400
            pressed: colourMap.green['600'],  // #01c68c  Green-600 (= border)
            border: colourMap.green['600'],   // #01c68c  Green-600
        },
        outlined: {
            border: colourMap.green['800'],   // #18856f  Green-800 (= text)
            text: colourMap.green['800'],     // #18856f  Green-800
        },
    },
    critical: {
        solid: {
            default: colourMap.red['500'],    // #e12e28  Red-500
        },
    },
},
```

**Steps:** as W1-P1 (branch `feat/w1-p2-button-colour-tokens`), adding the `button` blocks; lint; `yarn test run themes` (hash-strip); a11y; minor changeset; PR; Chromatic base zero-diff.

**Done-criteria:** contract + base carry the 7 confirmed button leaves; no WIP/linkedText/secondary/ghost/critical-outlined keys present; lint clean; hash-only churn; Chromatic base zero-diff; `git diff` shows only additions; other theme files unchanged.

### DO-NOT list (with MFE-measured reasons)
- **Do NOT ship WIP-namespace tokens** (`Theme colours (WIP)/…`) or any unconfirmed `linkedText`/`secondary`/`ghost`/`critical.outlined` value (§6-Q3). Absent keys are additive later; wrong values are not.
- **Do NOT touch Button** (`lib/components/Button/*`) or its `defaultVariants`/`variant`→`intent` mapping. Button is used in **576 JSX sites** (`variant=` in **407 files**); it stays on legacy `intent` until W3a-P1. Any Button change here = FAIL.
- **Do NOT change any existing token key** (same 334-file / 390× / 556× reasons as W1-P1).
- **Do NOT edit `flat_red`/`neutral`/`sprinkles.css.ts`/`types.ts`.**
- **Do NOT apply the §4.C value-split here** (no consumer to preserve) — base = Figma value; the split lands at W3a-P1.

### Agent prompts

**BUILDER (`opus`)**
```
You are the Builder for W1-P2 — Button-scoped semantic colour tokens — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feat/w1-p2-button-colour-tokens off main.

HARD RULE (additive): change no existing token key value/name; change no component/default; rename/remove no dir/export; do not hand-edit ColourMap/ThemeTokens; touch no elevation value. New capability = new contract keys + new base values ONLY.
BASE VALUE POLICY: color.button.* has ZERO consumers at Wave 1 (Button stays on legacy colours.intent.* until W3a-P1), so assign base = the Figma value from plan §3.1. Do NOT try to reverse-engineer "current Button colours" and do NOT create a ds2026 override (that theme does not exist yet); the value-preserving split happens later in W3a-P1.
EXCLUDE: the Theme colours (WIP) namespace and every linkedText/secondary/ghost/critical.outlined key whose value §3.1 does not confirm — leave them ABSENT (§6-Q3).
SILENT-FAILURE WARNING: themeContractVars imported by 334 files; only ADD keys.

FILES:
  lib/themes/theme.css.ts   — add button:{…} inside color:{…} (after alert:{…}).
  lib/themes/base/tokens.ts — add button:{…} inside color:{…}.
  Edit nothing else.

CONTRACT BLOCK (verbatim):
  button:{primary:{solid:{default:'color-button-primary-solid-default',hover:'color-button-primary-solid-hover',pressed:'color-button-primary-solid-pressed',border:'color-button-primary-solid-border'},outlined:{border:'color-button-primary-outlined-border',text:'color-button-primary-outlined-text'}},critical:{solid:{default:'color-button-critical-solid-default'}}},

BASE VALUE BLOCK (verbatim):
  button:{primary:{solid:{default:colourMap.green['300'],hover:colourMap.green['400'],pressed:colourMap.green['600'],border:colourMap.green['600']},outlined:{border:colourMap.green['800'],text:colourMap.green['800']}},critical:{solid:{default:colourMap.red['500']}}},
  // #71edc2 / #36e5aa / #01c68c / #01c68c / #18856f / #18856f / #e12e28

STEPS: add both blocks; `yarn lint`; `yarn test run themes` (hash-strip procedure, no blanket -u); `yarn test:a11y`; minor changeset "Add DS-2026 button colour tokens (additive)."; PR to main.
DONE: 7 leaves present, no WIP/linkedText/secondary/ghost keys; lint clean; hash-only churn; git diff shows only additions. Report gate results + any assumption.
```

**REVIEWER (`opus`)**
```
You are the adversarial Reviewer for W1-P2. Inspect branch feat/w1-p2-button-colour-tokens. PASS/FAIL with evidence.
1. `git diff lib/themes/theme.css.ts` + `git diff lib/themes/base/tokens.ts` show ONLY additions (the button block). Any edit to an existing line = FAIL.
2. `git diff` of Button/ (lib/components/Button/*), flat_red/tokens.ts, neutral/tokens.ts, types.ts, sprinkles.css.ts is EMPTY. Any change = FAIL.
3. Base button values match §3.1 (green-300 #71edc2, green-400 #36e5aa, green-600 #01c68c ×2, green-800 #18856f ×2, red-500 #e12e28). Verify against the colourMap hex table. Swatch-label values = FAIL → §6-Q1.
4. NO WIP-namespace token, NO linkedText/secondary/ghost/critical.outlined key present (§6-Q3). Any such key = FAIL.
5. Confirm no ds2026 override was added and no §4.C revalue attempted here (base = Figma is correct; there is no consumer to preserve).
6. No new peerDependency; base-theme Chromatic zero-diff; stripped-__hash diff empty on base.
FAIL if any of 1–5 violated. Report specifics.
```

**VERIFY (`sonnet`)** — identical body to the W1-P1 Verify prompt, branch `feat/w1-p2-button-colour-tokens`, scope `themes`.

### Gates & release
- **Gates:** full suite; hash-only churn; Chromatic base zero-diff.
- **Changeset:** minor — *"Add DS-2026 button colour tokens (additive)."*
- **Rollback:** revert PR (no consumer).

### OU mapping + dependencies
- **OU:** OU-8 / OU-34. **Depends on:** W1-P1. **Blocks:** W3a-P1 (Button restyle consumes these + applies the §4.C split), FavouriteButton (W2-P9) if it reuses button tokens.

---

## W1-P3 — Radius, shadow, spacing, motion/focus additions

### Work order

**Objective (all additive — never renumber/revalue an existing key):**
- **Radius** — add `xsmall/small/medium/large/xlarge` to `border.radius` (contract + `base/tokens.ts`). `xlarge` (20px) is a genuinely new value; the rest are aliases of existing px. Keep `none/min/sm/md/lg/xl/2xl/1/pill/full` untouched (no `sm`/`1` dedupe — that is major cleanup; §6-Q2 label mismatch carried).
- **Shadow** — add `z1/z2/z3/z4` to `elevation` alongside `1`–`5`. Offsets are in §3.1; **blur/spread/rgba must be fetched from Figma node `360:12800`** (see the Spec step below) and recorded before shipping. Legacy `1`–`5` untouched.
- **Spacing** — add the missing Figma steps `2px, 40px, 64px, 80px` to `space` as **px-suffixed string keys** (`'2px' '40px' '64px' '80px'`), decided below (§6-Q7, pending). Existing `1`–`9`/`none` keep their exact value **and ordinal**.
- **Motion / focus (OU-7)** — `animation.easing.*` already exists; `color.interactive.focusOutline` (blue-500) already exists. Figma metadata (nodes `360:12800/360:12801/360:12802`) exposes **no** motion duration or dedicated focus-ring variables. **Decision: add nothing; record the deferral** (see below). If the Spec step (which is already in Figma for the shadow fetch) surfaces duration/focus variables on node `360:12800`, add `animation.duration.*` as new keys and record their values here; otherwise note "no motion/focus variables found — deferred to a later package".

**Spacing-key naming — recommendation (pending §6-Q7): px-suffixed string keys `'2px' | '40px' | '64px' | '80px'`.** Reasons:
- The existing scale is **already non-ordinal** (`8`=48px, `9`=96px — no 64/80), so appending `10/11/12/13` would make `10`=40px *smaller* than `9`=96px and `10`<`8` — an ordinal that lies. `'2px'` is also smaller than key `1` (4px), so no ordinal slot fits it.
- Px-suffixed keys are self-documenting (`padding="40px"` reads as exactly 40px), collide with nothing, and — because `sprinkles.css.ts` derives padding/margin/gap/width/height straight from `tokens.space` — become valid prop values automatically with no sprinkles edit.
- Trade-off: `padding="2px"` *looks* like a raw CSS value though it is a token; acceptable and self-describing, and it keeps `1`–`9` frozen (the 556× silent-failure surface is untouched). CSS-var names are then `space-2px/space-40px/space-64px/space-80px`, distinct from `space-1…space-9`.

**Files:**
- `lib/themes/theme.css.ts` — add radius/elevation/space contract keys.
- `lib/themes/base/tokens.ts` — add radius/elevation/space values (elevation blur/spread/rgba filled from the Figma fetch).
- `lib/themes/flat_red/tokens.ts` — **override for divergence only:** zero `radius.xsmall`/`radius.small` (mirrors its existing `sm/md → 'none'`) and zero `elevation.z1..z4` (mirrors its existing `1..5 → flatElevation`). See block below.
- `lib/themes/neutral/tokens.ts` — **NO edit** (its `space`/`radius`/`elevation` blocks don't mention the new keys, so `deepmerge` keeps base's new keys; neutral's shadows/radii already equal base).

**Contract additions — `theme.css.ts`:**
```ts
// inside border.radius (after full):
xsmall: 'border-radius-xsmall',
small: 'border-radius-small',
medium: 'border-radius-medium',
large: 'border-radius-large',
xlarge: 'border-radius-xlarge',

// inside elevation (after '5'):
z1: 'elevation-z1',
z2: 'elevation-z2',
z3: 'elevation-z3',
z4: 'elevation-z4',

// inside space (after '9'):
'2px': 'space-2px',
'40px': 'space-40px',
'64px': 'space-64px',
'80px': 'space-80px',
```

**Base value additions — `base/tokens.ts`:**
```ts
// inside border.radius:
xsmall: '4px',
small: '8px',
medium: '12px',   // §6-Q2: "Medium boxes 8px" label disagrees with variable=12px; variable used
large: '16px',
xlarge: '20px',   // genuinely new value (2xl=24 ≠ 20)

// inside space:
'2px': '2px',
'40px': '40px',
'64px': '64px',
'80px': '80px',

// inside elevation — 3-layer composites; offsets fixed, blur/spread/rgba FILLED FROM FIGMA 360:12800 (see Spec step).
// Offsets (x/y) per §3.1:  z1 0/3,0/2,0/1 · z2 0/2,0/4,0/1 · z3 0/5,0/8,0/3 · z4 0/8,0/16,0/6
z1: '<FETCH 360:12800: "0 3px <blur>px <spread>px <rgba>, 0 2px <blur>px <spread>px <rgba>, 0 1px <blur>px <spread>px <rgba>">',
z2: '<FETCH 360:12800: "0 2px …, 0 4px …, 0 1px …">',
z3: '<FETCH 360:12800: "0 5px …, 0 8px …, 0 3px …">',
z4: '<FETCH 360:12800: "0 8px …, 0 16px …, 0 6px …">',
```

**`flat_red/tokens.ts` divergence override (add to the existing `deepmerge` overrides object):**
```ts
border: {
    radius: {
        // existing: min/sm/md/'1' -> 'none'
        xsmall: 'none',   // mirrors sm (4px) -> none
        small: 'none',    // mirrors md (8px) -> none
        // medium/large/xlarge inherit base (flat_red already leaves lg/xl non-zero)
    },
},
elevation: {
    // existing: '1'..'5' -> flatElevation
    z1: flatElevation,
    z2: flatElevation,
    z3: flatElevation,
    z4: flatElevation,
},
```

### W1-P3 Figma fetch (the ONE allowed Figma access in Wave 1) — Spec-agent step, runs BEFORE the Builder

Only the shadow blur/spread/rgba for `z1`–`z4` are missing from all inlined data; they are **not** in the metadata dumps. A **Spec agent** (`sonnet`, WITH Figma MCP access) fetches them from node `360:12800` and records them into **both** this file's base-value block above **and** master §3.1's shadow table, then commits. The Builder never touches Figma.

> Figma MCP tools are deferred in this environment — the Spec agent must first `ToolSearch` with `select:mcp__claude_ai_Figma__get_design_context,mcp__claude_ai_Figma__get_variable_defs,mcp__claude_ai_Figma__get_screenshot,mcp__claude_ai_Figma__get_metadata` before calling them.

**SPEC-AGENT PROMPT (copy-paste):**
```
You are the Spec agent for W1-P3 (shadow fetch) in the Overdrive → DS-2026 migration. You have Figma MCP access to file ZkQlQcJkF7NTnZomVrPRN5 ("AutoGuru Design System 2026"). Target node: 360:12800 ("Borders & shadows"). Load the Figma tools first: ToolSearch select:mcp__claude_ai_Figma__get_design_context,mcp__claude_ai_Figma__get_variable_defs,mcp__claude_ai_Figma__get_screenshot,mcp__claude_ai_Figma__get_metadata.

GOAL: extract the exact box-shadow composite for each of Shadow/z1, z2, z3, z4. Each is a 3-layer shadow. For EVERY layer capture: x-offset, y-offset, blur radius, spread radius, and colour (as rgba() with alpha). Source from the BOUND effect variables / dev-mode inspect values, NEVER a drawn label.

CROSS-CHECK the y-offsets against the known set (fail loudly and report if Figma disagrees):
  z1: layers y = 3, 2, 1 (x=0)   z2: y = 2, 4, 1   z3: y = 5, 8, 3   z4: y = 8, 16, 6

ALSO on node 360:12800 (and 360:12801 hairlines / 360:12802 breakpoints if visible): check for any MOTION duration variables or dedicated FOCUS-RING variables. Report whether any exist; if none, say so explicitly.

OUTPUT — do all three:
1. get_screenshot of 360:12800, save under docs/ds2026-specs/foundation-shadows.md (create dir if missing) with the screenshot reference.
2. Write each z1–z4 as a ready-to-paste CSS box-shadow string, e.g.
   z1: "0 3px 8px 0 rgba(33,35,56,0.08), 0 2px 4px 0 rgba(33,35,56,0.06), 0 1px 2px 0 rgba(33,35,56,0.04)"
   (illustrative — use the REAL fetched blur/spread/rgba).
3. Record the four strings into BOTH:
     - docs/ds2026-plan/wave-1.md  (replace the <FETCH …> placeholders in the W1-P3 base-value block)
     - design-system-2026-migration-plan.md §3.1 shadow table (fill the "blur / spread / rgba" column for z1–z4)
   Commit these edits with the package PR.
Report the four strings, the y-offset cross-check result, and the motion/focus-variable finding. Write NO token code (that is the Builder).
```

**Steps (Builder, after Spec):** branch `feat/w1-p3-radius-shadow-spacing`; add contract keys; add base values (paste the Spec agent's z1–z4 strings over the placeholders); add the `flat_red` divergence overrides; leave `neutral` untouched; lint; `yarn test run themes` (hash-strip); a11y; minor changeset; PR; Chromatic base zero-diff.

**Done-criteria:** radius has `xsmall/small/medium/large/xlarge`; elevation has `z1–z4` with real fetched values; space has `'2px'/'40px'/'64px'/'80px'`; **every existing `space`/`radius`/`elevation` key retains its exact prior value AND ordinal**; `flat_red` zeroes `xsmall/small` + `z1–z4`; `neutral` unchanged; lint clean; hash-only churn; Chromatic base zero-diff; the shadow values are recorded back into master §3.1 and this file; motion/focus finding recorded.

### DO-NOT list (with MFE-measured reasons)
- **🚨 Do NOT renumber or revalue any existing `space` key.** `vars.space[...]` is referenced **556× in the MFE with NO compile error on drift** — a changed value ships a silent monorepo-wide layout shift. New keys are px-suffixed strings only.
- **Do NOT change any existing `border.radius` key** (`sm/md/lg/xl/2xl/1/pill/full/none/min`). `border.radius.*` is referenced **46×** (incl. `borderRadius="pill"` on Box); no dedupe of `sm`/`1` (major-only, §6-Q2).
- **Do NOT change any existing `elevation.1`–`5` (or `none`) value.** 4 tenant theme packages have **unit tests asserting exact elevation values** (`elevation` referenced 20×, incl. 10 assertions) — a value change fails their tests (R10).
- **Do NOT guess the shadow blur/spread/rgba.** They come only from the Figma fetch; ship with real values or not at all.
- **Do NOT edit `neutral/tokens.ts`** (it inherits the new keys via `deepmerge`) and **do NOT touch `sprinkles.css.ts`** (radius/shadow/space keys auto-bind).
- **Do NOT add motion/focus tokens speculatively** — only if the Figma fetch confirms real variables.

### Agent prompts

**BUILDER (`sonnet`)**
```
You are the Builder for W1-P3 — Radius/shadow/spacing/motion additions — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feat/w1-p3-radius-shadow-spacing off main. PRECONDITION: the W1-P3 Spec agent has recorded the real z1–z4 shadow strings into docs/ds2026-plan/wave-1.md (replacing the <FETCH …> placeholders) and into master §3.1. Use those strings verbatim; if the placeholders are still present, STOP — the fetch has not run.

HARD RULE (additive): NEVER renumber or revalue an existing space/radius/elevation key. vars.space[...] is used 556× in the MFE with NO compile error on drift (silent layout shift); elevation values are asserted by tenant-theme unit tests; border.radius is used 46×. Only ADD keys. Change no component/default; hand-edit no ColourMap/ThemeTokens.

FILES:
  lib/themes/theme.css.ts   — add radius (xsmall/small/medium/large/xlarge), elevation (z1..z4), space ('2px'/'40px'/'64px'/'80px') contract keys.
  lib/themes/base/tokens.ts — add matching values: radius 4/8/12/16/20 px; space 2/40/64/80 px; elevation z1..z4 = the Spec agent's real strings.
  lib/themes/flat_red/tokens.ts — ADD divergence overrides only: border.radius.xsmall:'none', border.radius.small:'none'; elevation.z1..z4: flatElevation (const already defined in that file).
  lib/themes/neutral/tokens.ts — DO NOT edit (inherits via deepmerge).
  sprinkles.css.ts — DO NOT edit (auto-binds).

CONTRACT (verbatim):
  radius:  xsmall:'border-radius-xsmall', small:'border-radius-small', medium:'border-radius-medium', large:'border-radius-large', xlarge:'border-radius-xlarge'
  elevation: z1:'elevation-z1', z2:'elevation-z2', z3:'elevation-z3', z4:'elevation-z4'
  space:  '2px':'space-2px', '40px':'space-40px', '64px':'space-64px', '80px':'space-80px'
BASE VALUES (verbatim):
  radius: xsmall:'4px', small:'8px', medium:'12px', large:'16px', xlarge:'20px'
  space:  '2px':'2px', '40px':'40px', '64px':'64px', '80px':'80px'
  elevation: z1/z2/z3/z4 = the Spec agent's fetched strings (offsets z1 0/3,0/2,0/1 · z2 0/2,0/4,0/1 · z3 0/5,0/8,0/3 · z4 0/8,0/16,0/6).
FLAT_RED OVERRIDES (verbatim): border.radius:{xsmall:'none',small:'none'}; elevation:{z1:flatElevation,z2:flatElevation,z3:flatElevation,z4:flatElevation}.

MOTION/FOCUS: add nothing unless the Spec agent reported real duration/focus variables on 360:12800; if it reported none, add a one-line note in the PR "no motion/focus variables in Figma — deferred".

STEPS: apply edits; `yarn lint`; `yarn test run themes` (hash-strip procedure, no blanket -u); `yarn test:a11y`; minor changeset "Add DS-2026 radius aliases + 20px radius, z1–z4 shadows, missing spacing steps, motion/focus tokens (additive)."; PR to main.
DONE: new keys present; EVERY existing space/radius/elevation key retains exact prior value+ordinal; flat_red zeroes xsmall/small/z1..z4; neutral untouched; lint clean; hash-only churn. Report gate results + the elevation strings you used.
```

**REVIEWER (`opus`)**
```
You are the adversarial Reviewer for W1-P3. Inspect branch feat/w1-p3-radius-shadow-spacing. PASS/FAIL with file:line evidence.
1. PACKAGE-SPECIFIC (the whole point): assert EVERY existing space (1–9,none), radius (none/min/sm/md/lg/xl/2xl/1/pill/full), and elevation (none,1–5) key retains its EXACT prior value AND ordinal. Method: `git diff lib/themes/theme.css.ts lib/themes/base/tokens.ts lib/themes/flat_red/tokens.ts` must show ONLY added lines for these blocks — no existing key line modified, reordered, or deleted. Any change to an existing key = automatic FAIL (556× silent-failure space refs; tenant-theme elevation assertions; 46× radius refs).
2. New values correct: radius 4/8/12/16/20; space 2/40/64/80; elevation z1–z4 offsets match z1 0/3,0/2,0/1 · z2 0/2,0/4,0/1 · z3 0/5,0/8,0/3 · z4 0/8,0/16,0/6, and blur/spread/rgba are REAL Figma values (no <FETCH> placeholder remains; cross-check they were also written into master §3.1). Placeholder left in = FAIL.
3. flat_red adds xsmall:'none', small:'none', z1..z4:flatElevation and NOTHING else; neutral/tokens.ts and sprinkles.css.ts diffs EMPTY.
4. No component default / prop change; no dir/export removed; no ColourMap/ThemeTokens hand-edit; no new peerDependency.
5. Base-theme Chromatic zero-diff; stripped-__hash diff empty on base.
6. Motion/focus: either real Figma-confirmed tokens added, or a deferral note present — no speculative tokens.
FAIL if any of 1–4 violated. Report specifics.
```

**VERIFY (`sonnet`)** — identical body to the W1-P1 Verify prompt, branch `feat/w1-p3-radius-shadow-spacing`, scope `themes`. Additionally: confirm no `<FETCH …>` placeholder remains in `base/tokens.ts`.

### Gates & release
- **Gates:** full suite; hash-only churn; Chromatic base zero-diff.
- **Changeset:** minor — *"Add DS-2026 radius aliases + 20px radius, z1–z4 shadows, missing spacing steps, motion/focus tokens (additive)."*
- **Rollback:** revert PR (new keys have no consumer).

### OU mapping + dependencies
- **OU:** OU-5 / OU-7. **Depends on:** W1-P1. **Blocks:** Wave-2 components (Skeleton uses new radius keys; several use `z1–z4` and new spacing), Wave-3 restyles.

---

## Deviations & open items

1. **Master internal conflict — W1-P2 base value.** The §4.C value-split *rule* (master §Track C) says `base[T]=V_2026` unless a component is repointed onto `T` in the same package; the W1-P2 *parenthetical* says "base = current Button colours". W1-P2 repoints nothing. **Resolved in favour of the rule text:** W1-P2 base = Figma `V_2026` (zero consumers ⇒ zero-diff, independent of §6-Q5 and of the not-yet-existing `ds2026` theme). The value-preserving split (base=`V_legacy(Button)`, `ds2026`=`V_2026`) is deferred to **W3a-P1** under the Track-C exception (grep of brand-new `color.button.*` keys trivially proves zero MFE usage + Chromatic base zero-diff). *If the design/PO intends base to already carry Button's legacy colours at Wave 1, W1-P2 must instead depend on W3-P0 (ds2026 dir) and on §6-Q5 — that would be a heavier, later package. Flagging for confirmation.*

2. **Master constraint vs type mechanism — "keep ThemeTokens additions optional-compatible" (R10/R11) is not literally achievable.** `ThemeTokens = TokensFromContract<typeof overdriveTokens>` (`helpers.ts:26`) maps **every** contract leaf to a **required** value; there is no per-key optional modifier available through `createGlobalThemeContract`. So new `color.*`/radius/elevation/space leaves are **required** in `ThemeTokens`. This is safe in practice because (a) `base/tokens.ts` assigns them, and (b) `flat_red`/`neutral` — and, per the MFE research, the 4 tenant theme packages — build via `deepmerge`/`lodash.merge(baseTokens, partialOverrides)`, so the new keys flow in and the merged object satisfies the widened type. **Residual risk:** any theme/tenant path that assigns a **hand-authored full `ThemeTokens` literal** (not a merge onto base) would fail to compile. The Builder is instructed to STOP and report if `tsc` raises a missing-`color.*` error inside `lib/`; the MFE tenant packages cannot be verified from this repo — **recommend a one-off grep of `/Users/timamehro/grit/github.com/autoguru/mfe` for `: ThemeTokens =` / hand-authored token literals before W1-P1 publishes.** `ColourMap` itself is genuinely unchanged (new namespaces live under `color:`, not in `ColourMap`), satisfying R10 for that type.

3. **`flat_red`/`neutral` "mirror" is mostly inheritance, not duplication.** Because both themes `deepmerge(baseTokens, …)`, every Wave-1 base addition (all `color.*`, all new radius/space keys, `z1–z4`) flows through automatically. Explicit edits are needed **only** for `flat_red` divergence in W1-P3 (zero `xsmall/small` radius + `z1–z4` shadows, matching its existing flat treatment). This refines — does not contradict — the master's "mirror in flat_red/neutral" wording.

4. **Spacing-key naming (§6-Q7) — recommendation pending.** Recommend **px-suffixed string keys** `'2px'/'40px'/'64px'/'80px'` over ordinal `10/11/12/13` (the existing scale is already non-ordinal: `8`=48px, `9`=96px; `2px`<key `1`). Marked **pending §6-Q7**; if design mandates ordinals, only the key strings and their `space-*` var names change — the values and the "never renumber 1–9" rule are unaffected.

5. **`info.background` = `#e1edfe` is a literal, not a ramp value** (blue-200 is `#bad4ff`). Carried per §3.1's own note and **§6-Q1** (largest label/variable divergence). W1-P1 ships the variable value `#e1edfe`; flag for design sign-off, proceed on the variable.

6. **§3.1 button table is partial.** Only `primary.solid.{default,hover,pressed,border}`, `primary.outlined.{border,text}`, and `critical.solid.default` have confirmed variable values. `linkedText.*`, `secondary.*`, `ghost.*`, and `critical.outlined.*` are **omitted** (absent keys, additive later) pending **§6-Q3** (WIP-namespace reconciliation). The contract intentionally does not pre-declare empty `secondary`/`ghost` branches.

7. **Shadow blur/spread/rgba are unresolved until the W1-P3 Figma fetch.** They are the only Wave-1 values not inlined anywhere. The Spec-agent step is mandatory and must write the fetched values back into **both** this file and master §3.1 before W1-P3 ships. Motion durations / focus-ring variables were **not** found in the Figma metadata dumps — W1-P3 defers them unless the fetch surfaces real variables.

8. **No conflict found between master §3.1 hex and the current base contract/ramps.** Post-W0-P1 `base/colours.ts` equals the §3.1 ramp table exactly (verified grey/green/blue/yellow/red 100–900 + white), so every grey-derived semantic token is zero-drift and the `colourMap.*` references in the W1-P1/P2 base blocks resolve to the intended §3.1 hex.
