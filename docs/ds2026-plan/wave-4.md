# Wave 4 execution plan — adoption, deprecation, and the single major (+ G-P1 governance, + W4-P5 dark mode)

> **Parent:** [`design-system-2026-migration-plan.md`](../../design-system-2026-migration-plan.md) (the master plan).
> This file **expands** the Wave-4 line items and the G-P1 governance package into executable work orders. It never contradicts the master; where the master leaves a gap or an open question, it is logged in [Deviations & open items](#deviations--open-items).
> **Repo:** `@autoguru/overdrive` @ `4.59.0` · branch `feature/AG-19959-overdrive-colour` (do not switch). **MFE consumer:** `/Users/timamehro/grit/github.com/autoguru/mfe` (100 apps / 201 packages, single `bun.lock`, all pinned to `4.59.0`).
> **Audience:** Sonnet-class Builder/Reviewer/Verify agents with only the two repos + this file + the master plan. Everything needed is inlined.

---

## 0. Overview & how Wave 4 fits together

Wave 4 turns a fully-additive library (Waves 0–3 + Track C, all shipped as minors, no live MFE pixel moved) into the DS-2026 end state via **one** major release. The master's hard constraint holds until the very last step: **no live MFE screen shifts a pixel or a behaviour before the major.** Wave 4 packages are therefore either (a) tooling/docs/telemetry that ship no behaviour change, or (b) the coordinated major itself.

**Package roster and execution order (RC-sequenced — mirror of master §5.2):**

| Package | What | Release | Ships behaviour change? |
|---|---|---|---|
| **W4-P1** | MFE adoption guide + two codemods (provider theme-swap; structural Button prop) + version-bump playbook | none (lives in mfe repo + docs) | no (opt-in tooling) |
| **W4-P2** | Deprecation warnings (`@deprecated` JSDoc + dev-only `warnOnce` + Storybook Legacy-Coloursets banner) | minor | no (dev console only) |
| **W4-P3** | Adoption telemetry (theme-name signal from `OverdriveProvider`) + dashboard + quarterly pulse | minor | no (opt-in, no PII) |
| **W4-P4-RC** | The major, published first as an npm **prerelease** via `prerelease.yml` + `.changeset/pre.json` | prerelease (`5.0.0-rc.N`) | yes (behind RC tag) |
| **W4-P6** | Tenant-theme migration (4 packages) + MFE internal-path cleanup, done **against the RC** | mfe PRs (gated on RC) | yes (in mfe, against RC) |
| **W4-P4 (stable)** | Exit pre-mode, publish the stable major; MFE bumps overdrive + lands W4-P6 PRs in one coordinated change | **major** (`5.0.0`) | yes (the whole point) |
| **W4-P5** | Dark mode (post-major, semantic layer + PR #1297 mechanics) | minor (post-major) | additive on `5.x` |
| **G-P1** | Governance package (ADR/decision-log, Figma→Storybook handoff protocol, deprecation process doc, contribution notes) | none (docs) | no |

**Critical RC ordering (no circular dependency):** `W4-P4-RC` (publish RC) → `W4-P6` (migrate tenant themes against the RC) → `W4-P4 stable` (publish `5.0.0`) → MFE coordinated bump. This is mandatory and matches master §5.2 / Appendix A step 7.

**Independence guarantee:** each pre-major Wave-4 minor (W4-P2, W4-P3; W4-P5 post-major) is independently releasable and independently testable in the MFE without waiting on any other Wave-4 package (W4-P1 and G-P1 ship no overdrive release at all); the **only** intentional coupling in this wave is the RC → W4-P6 → stable chain above, and that coupling is scoped strictly to the major — it never binds a minor's release or adoption.

**Verified release mechanics (read against the real workflows):**
- `release.yml` — on push to `main`, runs `changesets/action@v1`, which opens/updates the **"Version Packages" PR** (aggregates pending `.changeset/*.md`, bumps version, writes `CHANGELOG.md`).
- `publish.yml` — on push to `main` **filtered to `paths: ['CHANGELOG.md']`** (or manual `workflow_dispatch`): installs npm 11.6.2, asserts OIDC readiness (`ACTIONS_ID_TOKEN_REQUEST_URL` present, npm ≥ 11.5.0), runs `yarn changeset publish` (npm via OIDC Trusted Publishing), pushes new git tags, creates GitHub releases (release notes sliced from `CHANGELOG.md` by `awk`), then builds + deploys Storybook to GitHub Pages (only if `published == 'true'`).
- `prerelease.yml` — **manual `workflow_dispatch` only**; the `setup` job gates the whole run on `.changeset/pre.json` existing (`has_prerelease`). The `prerelease` job: npm 11.6.2 + OIDC check, `yarn changeset version`, compares `package.json` version before/after, and only if changed runs `yarn changeset publish` (publishes to the prerelease dist-tag encoded in `pre.json`), creates a GitHub **prerelease** (`gh release create … --prerelease`), and commits `package.json yarn.lock .changeset` back to the working branch — **it purposely does NOT commit `CHANGELOG.md`** (comment on line 128), so an RC never triggers `publish.yml`'s `CHANGELOG.md` path filter. This is the isolation that lets the RC live without shipping stable.

The verification gate suite, snapshot-churn procedure, Chromatic policy, and the reusable Builder/Reviewer/Verify prompt templates are defined in master §4.0.1–§4.0.2 and referenced (not duplicated) below. Every prompt in this file is fully filled — no placeholders.

---

## W4-P1 — MFE adoption guide + codemods

**Goal:** give the MFE monorepo a mechanical path onto DS-2026 that costs "swap one provider prop per app" + "run one codemod for structural Button props", grounded in the measured topology (99 `OverdriveProvider` mount points, one per app; `variant=` in 407 files; single `bun.lock`; manual upgrades).

**OU:** OU-26 / OU-27. **Release:** none (tooling ships into the mfe repo + a doc page in overdrive). **Depends on:** Wave 3 substantially complete (so `ds2026` carries real values for the components apps will see), W2 landed. **Agents:** Builder `opus`, Reviewer `opus`, Verify `sonnet`.

### W4-P1.a — The adoption playbook (outline)

Author `mfe/docs/ds2026-adoption.md` (and cross-link from overdrive `docs/ds2026-plan/`). Sections:

1. **Mental model.** One `bun.lock` → one overdrive version reaches all 100 apps when the monorepo bumps. DS-2026 is *opt-in within that version*: per-app (swap the provider `theme`) or per-component (new prop values). Nothing changes by default until `5.0.0`.
2. **Two adoption units.**
   - *Whole-app*: set `theme={ds2026Theme}` on the app's single `OverdriveProvider` mount (codemod W4-P1.b). Flips the whole app to 2026 in one edit.
   - *Per-component*: use new prop values (Button `class`/`style`/`shape`, control `color`/`size`) to opt a single instance into 2026 while the app rides base (codemod W4-P1.c for the mechanical `variant→class` bulk).
3. **Pre-flight.** Confirm the app's overdrive resolves to the version that carries `./themes/ds2026` (the ADR scaffold from W3-P0 + the component `ds2026` overrides). Run `yarn overdrive:local` to smoke-test against a local overdrive build before the monorepo bump (see W4-P1.d).
4. **Per-app rollout checklist** (repeated per app — see W4-P1.b).
5. **Tenant apps are special.** The 4 tenant theme packages + `apps/cb-portal` + `apps/ag-merchant-finder` build custom themes on `makeTheme` internals; they do **not** get the plain `ds2026Theme` swap — they get 2026-flavoured tenant builds in W4-P6. The provider codemod must **skip** any mount that already passes a `theme=` prop.
6. **Recommendation:** propose a shared `@autoguru/mfe-theme` wrapper so future theme swaps touch 1 file, not 99 (master R8). Out of scope to build here; log as a follow-up.
7. **Measuring adoption** links to W4-P3.

### W4-P1.b — Codemod (a): provider theme-swap (jscodeshift)

**Transform name:** `ds2026-provider-theme-swap`. **Runtime:** `jscodeshift -t ds2026-provider-theme-swap.ts <appGlob> --parser=tsx`. **Scope:** the 99 non-test `OverdriveProvider` mount points (one per app), in `client.tsx` / `App/index.tsx` / `pages/_app.tsx`.

**What it does (deterministic):**
1. Find JSX elements `<OverdriveProvider …>`.
2. **Skip** if the element already has a `theme` attribute (tenant providers pass `theme={smartFleeetTheme}` etc. — those are W4-P6's job). Record skipped sites in the run report.
3. Otherwise add `theme={ds2026Theme}` as the first attribute, **preserving all existing attributes** (`noBodyLevelTheming`, `breakpoints`, `portalMountPoint`, `locale`, `colorOverrides`).
4. Ensure an import `import ds2026Theme from '@autoguru/overdrive/themes/ds2026';` exists in the file (add if missing; don't duplicate). Use the default export shape the theme dir exports (`{ name, themeRef, vars, tokens }`, matching `ProviderProps.theme?: typeof baseTheme`).
5. Idempotent: re-running is a no-op (step 2/3 already satisfied).

**Before / after — from real mount shapes read in the mfe repo:**

*Bare mount* (`apps/de-portal-app-shell/src/client.tsx:23`, `apps/sp-supplier-select-home/src/App/index.tsx:28`):
```tsx
// before
import { OverdriveProvider } from '@autoguru/overdrive';
// …
<OverdriveProvider>
  <SupportedBrowsersBoundary browsers={AGSupportedBrowsers}>
    {/* … */}
  </SupportedBrowsersBoundary>
</OverdriveProvider>

// after
import { OverdriveProvider } from '@autoguru/overdrive';
import ds2026Theme from '@autoguru/overdrive/themes/ds2026';
// …
<OverdriveProvider theme={ds2026Theme}>
  <SupportedBrowsersBoundary browsers={AGSupportedBrowsers}>
    {/* … */}
  </SupportedBrowsersBoundary>
</OverdriveProvider>
```

*SSR `_app.tsx` variant with an existing prop* (`apps/au-fleet-landing/pages/_app.tsx:30` — `<OverdriveProvider noBodyLevelTheming>`):
```tsx
// before
<OverdriveProvider noBodyLevelTheming>
  {/* … */}
</OverdriveProvider>

// after
<OverdriveProvider theme={ds2026Theme} noBodyLevelTheming>
  {/* … */}
</OverdriveProvider>
```

*Already themed (tenant) — SKIPPED* (`packages/themes/smartFleetTheme/SmartFleetThemeProvider.tsx:11`, `packages/themes/ampolTheme/AmpolThemeProvider.tsx:12`):
```tsx
// left untouched by the codemod (handled by W4-P6)
<OverdriveProvider theme={smartFleeetTheme} breakpoints={breakpoints}>
```

**Edge cases to handle explicitly:**
- **Aliased import** (`import { OverdriveProvider as ODP }`) → match the local binding, not the literal name.
- **Spread props** (`<OverdriveProvider {...providerProps}>`) → if a spread may already contain `theme`, do **not** auto-inject; flag for manual review (can't prove additive).
- **SSR hydration parity** — `_app.tsx` renders on server + client; the theme import must be a normal default import (no dynamic import), so server and client resolve the same `themeRef` class and avoid hydration mismatch. `noBodyLevelTheming` apps still get the wrapper-div class, which is sufficient.
- **Multiple providers in one file** (nested overrides) → transform only the outermost app-root mount; leave inner override providers to per-component/manual decisions. Report multi-provider files.
- **Test files** (`__tests__`, `*.test.tsx`) → excluded from the glob.

**Per-app rollout checklist** (in the playbook, run per app after the codemod):
1. `git grep -n 'OverdriveProvider' <app>` → confirm exactly the app-root mount changed, `theme={ds2026Theme}` present, import added.
2. `yarn overdrive:local` against a local overdrive build carrying `./themes/ds2026`; run the app; visually diff its highest-traffic screens.
3. Run the app's own tests + a11y.
4. Note any per-component `variant`/`shape` sites still on legacy (candidates for W4-P1.c).
5. Land the app's PR only after the overdrive version carrying `ds2026` is the monorepo-pinned version (or behind `yarn overdrive:local`).

### W4-P1.c — Codemod (b): structural-prop codemod (Button `variant` → `class`/`style`)

**Transform name:** `ds2026-button-variant-to-class`. **Scope:** `variant=` appears in **407 files** — the real automation target. `rounded=` appears **exactly once** (`packages/fleet-user-management-update-user-name`) → **hand-fix, not automated** (documented in the playbook, not in the codemod).

**Design: the mapping is a config the codemod reads**, so master §6-Q5's answer slots in without touching transform code. Ship `ds2026-button-map.json` alongside the transform; the codemod refuses to run on any `variant` value absent from the config (fails loud, never guesses). **The target prop names are config too, never hardcoded:** `style` collides with React's built-in `CSSProperties` prop, so W3a-P1 will choose non-colliding prop names (primary recommendation `buttonClass`/`buttonStyle`; alternates possible), recorded in the G-P1 ADR. The transform emits `<classProp>="…" <styleProp>="…"` read from the config's `targetProps` — never literal `class=`/`style=`.

```jsonc
// ds2026-button-map.json — encodes master §6-Q5 + the W3a-P1 target prop names.
// Values marked pendingQ5 MUST be resolved by the design team (recorded in the G-P1
// ADR log) before running the codemod on those variants. Measured variant distribution
// across 407 files is in the comments.
{
  "$schema": "internal://ds2026-button-map",
  "targetProps": {
    "classProp": "buttonClass",
    "styleProp": "buttonStyle",
    "note": "MUST match the prop names shipped by W3a-P1 and recorded in the G-P1 ADR — update here if the ADR chose different names"
  },
  "note": "variant -> semantic { class, style } values, emitted as <classProp>/<styleProp> per targetProps. class ∈ primary|secondary|critical; style ∈ solid|outlined|ghost.",
  "mappings": {
    "primary":     { "class": "primary",   "style": "solid",    "count": 240, "confirmed": true },
    "secondary":   { "class": "secondary", "style": "outlined", "count": 276, "confirmed": true },
    "danger":      { "class": "critical",  "style": "solid",    "count": 24,  "confirmed": true },
    "warning":     { "class": null, "style": null, "count": 7,  "confirmed": false, "q5": "fate of warning at major — map to critical? keep as intent? design decision" },
    "success":     { "class": null, "style": null, "count": 5,  "confirmed": false, "q5": "fate of success at major" },
    "information": { "class": null, "style": null, "count": 3,  "confirmed": false, "q5": "fate of information at major" },
    "brand":       { "class": null, "style": null, "count": 0,  "confirmed": false, "q5": "brand has no measured MFE usage; confirm removal/merge" }
  }
}
```

**Transform behaviour:**
1. Find `<Button …>` (and `SplitButton` if it re-exports `variant`) with a literal string `variant="…"`.
2. Look up the value in `ds2026-button-map.json`. If `confirmed:false` or absent → **skip and report** (do not transform pendingQ5 variants). If `confirmed:true` → replace `variant="x"` with `<classProp>="…" <styleProp>="…"`, where both the prop names (from `targetProps`) and the mapped values come from the config — the transform never emits literal `class=`/`style=`.
3. Dynamic `variant={expr}` (non-literal) → skip and report for manual review.
4. Leave `defaultVariants` behaviour intact — the codemod is for explicit call sites; instances relying on the default (no `variant` prop) are handled by the major's default flip, not here.

**Dry-run procedure (mandatory before any write):**
```bash
# 1. Scope + value distribution sanity check (must match the map counts ±drift)
git grep -c 'variant=' -- '**/*.tsx' | wc -l          # ≈ 407 files
git grep -hoE 'variant="[a-z]+"' -- '**/*.tsx' | sort | uniq -c   # confirm the 6 values

# 2. Dry run — jscodeshift --dry --print writes nothing, prints the diff
jscodeshift -t ds2026-button-variant-to-class.ts \
  --parser=tsx --dry --print 'apps/**/*.tsx' 'packages/**/*.tsx' \
  > /tmp/button-codemod-dryrun.diff

# 3. Review: confirmed variants transformed; warning/success/information/brand + dynamic reported as SKIPPED
grep -c '^SKIP' /tmp/button-codemod-dryrun.diff
```
Only after the dry-run diff is reviewed and Q5 is resolved for the pending variants does a live run (drop `--dry`) proceed, one app/package at a time, each behind its own PR + `yarn overdrive:local` smoke check.

### W4-P1.d — Version-bump playbook

Grounded in the real tooling: `mfe/.scripts/copy-overdrive.js` builds overdrive's `dist` and copies `dist` + `package.json` into `mfe/node_modules/@autoguru/overdrive`; exposed as `yarn overdrive:local` (`mfe/package.json:64`).

1. **Single-version reality.** All 34 dependent `package.json` resolve to one `bun.lock` entry. A bump is monorepo-wide and atomic. There is no renovate/dependabot — it is a deliberate manual step.
2. **Local smoke-test first.** In overdrive, build; then in mfe run `yarn overdrive:local` (runs `copy-overdrive.js`, which builds overdrive dist and syncs it into `node_modules`). Run a sample of high-traffic apps + at least one tenant app (smartFleet) against the local build.
3. **Bump.** Update the overdrive version in `bun.lock` (single entry) and any `package.json` ranges; `bun install` to reconcile the lockfile; confirm exactly one overdrive version resolves.
4. **Icons.** `@autoguru/icons` is pinned `2.2.0`, also manual, peer `>= 2.0.0`. If the major requires a newer icons range, bump it in the same coordinated change and re-run the smoke test (master R7).
5. **Pre-major minors are safe to bump anytime** (additive). **The major bump is the coordinated change** — see the W4-P4-stable runbook (must land with the W4-P6 tenant PRs + codemod-migrated apps together).

### W4-P1 — Agent prompts

**Builder (`opus`):**
```
You are the Builder for work package W4-P1 — MFE adoption guide + codemods — in the Overdrive → DS-2026 migration.
Repos: overdrive at /Users/timamehro/grit/github.com/autoguru/overdrive (branch: create feature/ds2026-w4p1-adoption off main; docs only, no lib code). mfe at /Users/timamehro/grit/github.com/autoguru/mfe (read to ground the codemods; place the codemods + playbook under mfe/tooling/codemods/ and mfe/docs/).

HARD RULE: this package ships NO behaviour change to overdrive and NO default MFE change. The codemods are opt-in tooling; running them is a separate, per-app decision. Do NOT bump the overdrive version, do NOT modify any tenant theme package (that is W4-P6), do NOT touch a mount that already passes a `theme=` prop.

DELIVERABLES:
1. mfe/docs/ds2026-adoption.md — the playbook (mental model, two adoption units, pre-flight, per-app rollout checklist, tenant caveat, version-bump playbook). Cross-link from overdrive docs/ds2026-plan/.
2. mfe/tooling/codemods/ds2026-provider-theme-swap.ts — jscodeshift transform. Add `theme={ds2026Theme}` + the default import to every OverdriveProvider mount that does NOT already pass `theme=`; preserve all existing props; be idempotent; skip aliased-import edge case correctly; flag spread-prop and multi-provider files. Ground before/after on the REAL shapes: apps/de-portal-app-shell/src/client.tsx:23 (bare), apps/au-fleet-landing/pages/_app.tsx:30 (noBodyLevelTheming SSR), packages/themes/smartFleetTheme/SmartFleetThemeProvider.tsx:11 (already themed → skip).
3. mfe/tooling/codemods/ds2026-button-variant-to-class.ts + ds2026-button-map.json — transform reads the JSON map; the emitted target prop NAMES come from the config's `targetProps` (classProp/styleProp — default buttonClass/buttonStyle; MUST match what W3a-P1 ships, recorded in the G-P1 ADR), NEVER hardcoded `class=`/`style=` (React's built-in `style` prop collides); transforms only variants marked confirmed:true (primary/secondary/danger); reports (does not transform) warning/success/information/brand (pendingQ5) and dynamic `variant={expr}`. Include the dry-run procedure in the playbook.
INLINE DATA (use verbatim, do not re-measure Figma): variant distribution across 407 files — secondary 276, primary 240, danger 24, warning 7, success 5, information 3; rounded= used exactly once (hand-fix, not automated). ds2026 theme import path: `@autoguru/overdrive/themes/ds2026` (default export {name,themeRef,vars,tokens}). Provider prop: `theme?: typeof baseTheme`.
STEPS: read 3-4 real mount sites + one tenant provider to confirm shapes; write the transforms; write ds2026-button-map.json exactly as specified in wave-4.md W4-P1.c; run each codemod with --dry --print against a COPY of a sample app and paste the resulting diff into the PR; write the playbook.
DONE-CRITERIA: both transforms run clean --dry on ≥2 sample apps each; provider codemod correctly skips the smartFleet/ampol themed mounts; button codemod transforms only confirmed variants and reports the rest; playbook complete with dry-run + rollout checklists; NO overdrive lib change, NO version bump, NO tenant package touched.
Report: files created, sample dry-run diffs, list of skipped/flagged sites, any assumption made.
```

**Reviewer (`opus`):**
```
You are the adversarial Reviewer for W4-P1. Inspect branch feature/ds2026-w4p1-adoption in overdrive (docs) + the mfe codemod branch. Produce PASS/FAIL with file:line evidence:
1. Does the provider codemod EVER touch a mount that already passes `theme=`? Run it --dry against packages/themes/smartFleetTheme/SmartFleetThemeProvider.tsx and packages/themes/ampolTheme/AmpolThemeProvider.tsx — must be NO change (FAIL if it edits them).
2. Is the provider codemod idempotent (second --dry run = empty diff)? Must be YES.
3. Are all existing provider props preserved (noBodyLevelTheming, breakpoints, portalMountPoint, locale, colorOverrides)? Verify against apps/au-fleet-landing/pages/_app.tsx.
4. Does the button codemod transform ANY variant not marked confirmed:true in ds2026-button-map.json? Must be NO — warning/success/information/brand + dynamic variant={expr} must be reported as SKIP, never rewritten.
5. Do the target prop names AND the variant mappings BOTH come from ds2026-button-map.json (targetProps + mappings), so Q5's answer and the W3a-P1 ADR prop names slot in by editing JSON only? Hardcoded `class=`/`style=` emission in the transform is a FAIL (React `style` prop collision).
6. Does anything in this package bump the overdrive version, modify overdrive lib code, or modify a tenant theme package? Must be NO.
7. Does the playbook's version-bump section reference the REAL tooling (yarn overdrive:local / .scripts/copy-overdrive.js, single bun.lock, icons 2.2.0 manual)? Verify against mfe/package.json.
FAIL on any of 1,4,6 violated. Report specifics.
```

**Verify (`sonnet`):**
```
You are the Verify agent for W4-P1. Do not fix; report objective results.
1. Copy a sample app dir (e.g. apps/de-portal-app-shell) to a scratch location; run `jscodeshift -t ds2026-provider-theme-swap.ts --parser=tsx --dry --print <copy>` and report the diff.
2. Run the provider codemod --dry against a tenant provider (SmartFleetThemeProvider.tsx) and report whether it is left unchanged (expected: unchanged).
3. Run `jscodeshift -t ds2026-button-variant-to-class.ts --parser=tsx --dry --print` on a copy of a Button-heavy app; report count of transformed vs SKIP-reported sites.
4. Confirm ds2026-button-map.json parses and marks warning/success/information/brand confirmed:false.
5. Confirm no overdrive lib file changed and no overdrive version string changed (git diff --stat).
Report PASS/FAIL per check.
```

---

## W4-P2 — Deprecation warnings

**Goal:** mark everything the major will delete/flip as `@deprecated`, and emit a **dev-only, once-per-key** console warning when a deprecated path is used — with zero behaviour change and zero production noise. **OU:** OU-25. **Release:** minor. **Depends on:** Track C internal migration far enough that Overdrive doesn't trip its own warnings (verify by building Storybook with warnings on and confirming Overdrive's own components no longer hit legacy paths). **Agents:** Builder `sonnet`, Reviewer `opus`, Verify `sonnet`.

### W4-P2.a — Full deprecation-target inventory (real paths, verified)

| Target | Real location | Deprecation action |
|---|---|---|
| Legacy `colours.gamut.*` (+ `white`) | `lib/themes/theme.css.ts:138-142` | `@deprecated` on the `colours` contract block; `warnOnce` on Box `backgroundColour`/`colour` string-value resolution that maps to `colours.*` |
| Legacy `colours.foreground.*` | `lib/themes/theme.css.ts:143-146` | `@deprecated` JSDoc |
| Legacy `colours.background.*` | `lib/themes/theme.css.ts:147-152` | `@deprecated` JSDoc |
| Legacy `colours.intent.*` (primary, brand, secondary, shine, danger, warning, neutral, success, information) | `lib/themes/theme.css.ts:153-235` | `@deprecated` JSDoc — point to `color.{info,success,warning,alert}.*` |
| `typography.colour.*` | `lib/themes/theme.css.ts:309-310` (comment already reads "phase out: typography specific colours for backwards compatibility") | `@deprecated` JSDoc → `color.foreground.*` |
| Redundant radius keys `sm` & `1` (both 4px), `2xl` (24px) | `lib/themes/theme.css.ts:257-267` (`sm` line 260, `2xl` line 264, `1` line 265) | `@deprecated` JSDoc → `xsmall`/`small`/`medium`/`large`/`xlarge` (W1-P3 additions) |
| Legacy sprinkles colour properties (`colour`, `backgroundColour`, `borderTopColour`/`RightColour`/`BottomColour`/`LeftColour` → `tokens.colours.*`) | `lib/styles/sprinkles.css.ts:35-74` | `@deprecated` JSDoc on the property definitions → `color`/`backgroundColor`/`border*Color` (semantic, `:57-61,125-130`) |
| `black900` deprecated alias (added in W0-P1) | Box colour-prop value map | keep `@deprecated` JSDoc → `gray900`; keep the guard test from W0-P1 (master R12) |
| `ThemeOverrideProvider` / `FallbackProvider` (already a no-op) | `lib/components/OverdriveProvider/FallbackProvider.tsx:5` (already `@deprecated`) | leave as-is; optionally add a `warnOnce` on render |
| Storybook "Legacy Coloursets" page | `lib/stories/intentional-colours.stories.tsx` | add a deprecation banner (W4-P2.d) |

### W4-P2.b — Dev-only warning mechanism (consistent with the codebase)

**How the repo warns today (verified):** there is **no dedicated dev-warning utility**. The codebase uses `invariant` from `@autoguru/utilities` for hard assertions (throws), and ad-hoc `console.warn` (e.g. `lib/components/OverdriveProvider/useColorOverrides.ts:37`) / `console.error` (`OverdriveProvider.tsx:155`). `@deprecated` JSDoc is already used in several places (`lib/styles/typography.ts:40`, `FallbackProvider.tsx:5`, `ScrollPane.tsx:15`, `Switch.tsx:22,26`, `private/CheckableBase/useCheckableStyles.ts:4`).

**Proposal — add a tiny `warnOnce` util** (new file `lib/utils/warnOnce.ts`), matching the existing ad-hoc `console.warn` style but dev-gated and de-duplicated:
```ts
// lib/utils/warnOnce.ts
const seen = new Set<string>();

/**
 * Dev-only, once-per-message deprecation warning. No-op in production builds
 * (stripped by `process.env.NODE_ENV === 'production'`), so it never adds
 * console noise or bundle weight to MFE prod. Additive: never throws, never
 * changes behaviour.
 */
export const warnOnce = (key: string, message: string): void => {
  if (process.env.NODE_ENV === 'production') return;
  if (seen.has(key)) return;
  seen.add(key);
  // eslint-disable-next-line no-console
  console.warn(`[overdrive:deprecated] ${message}`);
};
```
- **Why `process.env.NODE_ENV` gate:** MFE apps bundle overdrive; the guard is dead-code-eliminated in production builds, so zero prod noise (matches the additive/no-behaviour-change rule).
- **Why once-per-key:** the high-volume legacy paths (`colours.*` 390 refs, sprinkles props) would otherwise flood the console. Keyed dedupe keeps it to one line per distinct deprecated key.
- **Wiring points (minimal, dev-only):** the natural runtime hooks are where a legacy value is *resolved*, not where the CSS var is defined (CSS vars can't warn). Concretely: (1) the Box/Text sprinkles-prop resolver for the legacy `colour`/`backgroundColour` values; (2) the `black900` alias resolution in the Box colour-prop map. Token-contract keys (`colours.*`, `typography.colour`, radius `sm`/`1`/`2xl`) get `@deprecated` JSDoc only — they are compile-time CSS-var names with no runtime resolution site to hook, so IDE/tsc surfaces them (a `warnOnce` there is impossible without a runtime accessor). Do **not** invent a runtime accessor just to warn — JSDoc is the correct signal for pure token keys.

### W4-P2.c — `@deprecated` JSDoc placement

- On token-contract keys: JSDoc block immediately above each deprecated key group in `lib/themes/theme.css.ts` (the `colours` block, `typography.colour`, radius `sm`/`1`/`2xl`), each naming the replacement key. Example wording: `@deprecated Use color.info/success/warning/alert.* — removed in v5 (DS-2026 major).`
- On sprinkles properties: JSDoc on the legacy property definitions in `lib/styles/sprinkles.css.ts` → point to the semantic prop.
- Consistent phrasing sourced from the G-P1 deprecation-process doc (single canonical wording template).

### W4-P2.d — Storybook Legacy Coloursets banner

`lib/stories/intentional-colours.stories.tsx` renders semantic + intent swatches from `overdriveTokens`. Add a top-of-page banner (a `Story`/decorator or an MDX note) reading: *"Legacy Coloursets — deprecated. These `colours.*` tokens are retained for backwards compatibility and will be removed in the DS-2026 major (v5). Use the semantic `color.*` tokens (see 'Theme Colours 2026')."* Tag the story `deprecated` in Storybook and mark it for removal at the major.

### W4-P2.e — Post-release MFE verification

Confirms the independence guarantee in §0: this minor is testable in the MFE on its own, with no dependency on W4-P3/P4/P5/P6 having shipped or landed. Standard mechanics (master §0.1 / Appendix A §6): single `bun.lock`, `yarn overdrive:local` (`mfe/.scripts/copy-overdrive.js`) for a pre-publish smoke, a throwaway branch + manual version bump for the post-publish probe, pin-back rollback.

**A. Pre-publish smoke (in overdrive, before merging):**
```bash
yarn build                        # succeeds — JSDoc + warnOnce only, no shape change
# in mfe:
yarn overdrive:local
yarn tsc -b --force                # repo-wide type-check MUST stay clean (no type/API changed)
```

**B. Post-publish (after the minor is on npm):**
```bash
cd /Users/timamehro/grit/github.com/autoguru/mfe
git checkout -b throwaway/verify-w4p2-vX.Y.Z
# bump @autoguru/overdrive to the published version in the single bun.lock
bun install
```
1. **Dev-mode warning fires once per key.** Run the app that owns `apps/fcp-booking/.../supplier-list/Badge.tsx:16` (`backgroundColour="black900"`) in dev mode (assume the dev server is already started by the user — do not start one yourself). Load the screen that renders that `Badge`. Confirm devtools console shows exactly one `[overdrive:deprecated] …` line for the `black900` key — re-rendering/re-navigating to the same screen must NOT print it again (dedupe via the `Set` in `warnOnce`).
2. **Zero visual change.** Screenshot the screen before vs after the bump — byte-identical (JSDoc + a `console.warn` add no rendered output).
3. **Zero production noise.** Build the same app for production (`NODE_ENV=production`) and load the same screen — confirm ZERO `[overdrive:deprecated]` lines in the console, proving the `warnOnce` `NODE_ENV` guard is dead-code-eliminated in the prod bundle.
4. **Rollback.** Pin `bun.lock` back to the prior version, `bun install`, discard the throwaway branch.

**Pass criteria:** A clean; B.1–B.3 all pass; throwaway branch discarded (B.4) regardless of outcome.

### W4-P2 — Agent prompts

**Builder (`sonnet`):**
```
You are the Builder for W4-P2 — deprecation warnings — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feature/ds2026-w4p2-deprecations off main.

HARD RULE (additive/no-behaviour-change): add `@deprecated` JSDoc and a DEV-ONLY once-per-key console warning ONLY. Do NOT remove or rename any token key, do NOT change any value, do NOT change any default prop, do NOT throw. The warning must be a no-op in production (process.env.NODE_ENV guard). Every legacy path must keep resolving exactly as before.

FILES TO CREATE/MODIFY:
- CREATE lib/utils/warnOnce.ts exactly as specified in wave-4.md W4-P2.b (dev-gated, Set-deduped, console.warn '[overdrive:deprecated] …').
- lib/themes/theme.css.ts — add @deprecated JSDoc to: the `colours` block (138-236), `typography.colour` (309-310), radius keys `sm` (260), `2xl` (264), `1` (265). Name the replacement in each.
- lib/styles/sprinkles.css.ts — @deprecated JSDoc on the legacy colour properties (35-74): colour/backgroundColour/border{Top,Right,Bottom,Left}Colour → point to the semantic color/backgroundColor/border*Color.
- Wire warnOnce at the two runtime resolution sites only: the Box/Text legacy colour-prop resolver, and the black900 alias resolution in the Box colour-prop map. Do NOT try to warn on pure CSS-var token keys.
- Keep the black900 @deprecated JSDoc + its W0-P1 guard test intact.
- lib/stories/intentional-colours.stories.tsx — add the deprecation banner from W4-P2.d and tag the story `deprecated`.
INLINE DATA: deprecation-target inventory table in wave-4.md W4-P2.a (real line numbers). Canonical wording: "@deprecated Use <replacement> — removed in v5 (DS-2026 major)."
STEPS: create warnOnce; add JSDoc per the table; wire the 2 runtime hooks; add the Storybook banner; run gates.
DONE-CRITERIA: `yarn lint` clean; every legacy path still resolves (no value/key change — `git diff` shows only JSDoc + warnOnce calls + the new file + the story banner); warnOnce is a no-op under NODE_ENV=production; Storybook builds with the banner.
Then run: yarn lint; yarn test run themes styles OverdriveProvider; yarn test:a11y. Follow the stripped-__hash snapshot procedure (master §4.0.1). Report changes + gate results.
```

**Reviewer (`opus`):**
```
You are the adversarial Reviewer for W4-P2. Branch feature/ds2026-w4p2-deprecations. PASS/FAIL with file:line evidence:
1. Did ANY token key change value, name, or get removed? diff lib/themes/theme.css.ts — must be additions of JSDoc comments ONLY (no value/key edits). FAIL otherwise.
2. Did any component default prop or prop semantics change? Must be NO.
3. Is warnOnce genuinely dev-only (process.env.NODE_ENV === 'production' early return) and does it ever throw? Must be dev-only, never throw.
4. Is warnOnce wired ONLY at runtime resolution sites (Box legacy colour prop, black900 alias) and NOT attempting to hook pure CSS-var token keys? Confirm.
5. Does the black900 alias still resolve to gray900 and is its guard test intact (master R12)?
6. Is every deprecated target from the W4-P2.a inventory actually marked (spot-check each real line number)?
7. Base-theme Chromatic zero-diff (JSDoc + dev-only warn add no rendered change). Confirm the Builder's snapshot triage.
FAIL if 1, 2, or 3 violated. Report specifics.
```

**Verify (`sonnet`):**
```
You are the Verify agent for W4-P2. On branch feature/ds2026-w4p2-deprecations, run and report (do not fix):
  yarn lint
  yarn test run themes styles OverdriveProvider
  yarn test:a11y
Interpret snapshot failures with the stripped-__hash procedure (master §4.0.1) — for this package churn must be style-identical (JSDoc/warn only). Grep the diff to confirm no token value/key line changed. Confirm CI Chromatic (visual_test) base-theme zero-diff once the PR opens. Report PASS/FAIL per gate.
```

---

## W4-P3 — Adoption tracking

**Goal:** measure what fraction of MFE screens run on `ds2026` (OU-29) with a minimal, privacy-sane theme-name signal emitted from `OverdriveProvider`, feeding a dashboard + a quarterly pulse (OU-30). **Release:** minor. **Depends on:** W4-P1 (apps need the swap available to be measured). **Agents:** Builder `opus` (privacy/telemetry judgement), Reviewer `opus`, Verify `sonnet`.

### W4-P3.a — Telemetry spec (concrete, minimal, privacy-sane)

**The signal source is already in the provider.** `OverdriveProvider` computes `themeName: theme.name` into its context (`OverdriveProvider.tsx:80,124`); `theme.name` is `'base'` / `'flat_red'` / `'neutral'` / `'smartFleetTheme'` / … / `'ds2026'`. That string is the entire signal — it is a static design-system identifier, contains **no user data, no URL, no PII**.

**Emit spec:**
- **What:** `{ theme: string, overdriveVersion: string }` where `theme` = `theme.name` and `overdriveVersion` = the resolved overdrive version (from the imported package, single `bun.lock` value).
- **When:** once per provider mount, in a `useEffect` in `Provider` keyed on `theme.name` (fires on mount + when the app swaps themes). Not on every render.
- **How (decoupled):** call an **optional, injectable** callback so overdrive ships no vendor dependency and no default network call. Add `onThemeMount?: (info: { theme: string; overdriveVersion: string }) => void` to `ProviderProps`. When unset, overdrive does nothing (zero behaviour change — honours the additive rule and adds no peer dep, master R7). The MFE wires it once (e.g. to its existing `@autoguru/logs` `LoggingAgentProvider`, already mounted above the provider in `de-portal-app-shell/src/client.tsx:22`).
- **Why a callback, not a built-in beacon:** overdrive must not add a telemetry peer dep or a hard network call before the major; the MFE owns its analytics sink. This keeps the signal opt-in and privacy-controlled by the consumer.
- **Privacy:** theme name + library version only; no user/session/route identifiers pass through overdrive. The MFE's logging layer attaches its own (already-governed) app/route dimension on its side.

**Overdrive-side change (additive):** add the optional prop + the `useEffect`. Example:
```tsx
// in Provider, additive:
useEffect(() => {
  onThemeMount?.({ theme: theme.name, overdriveVersion: OVERDRIVE_VERSION });
}, [theme.name, onThemeMount]);
```
`OVERDRIVE_VERSION` sourced from a build-time constant (or `package.json` version) — no new dependency.

### W4-P3.b — Dashboard + quarterly pulse (OU-29/30) outline

- **Ingest:** MFE `onThemeMount` → existing logging/analytics pipeline (`@autoguru/logs`). Dimensions: `theme`, `overdriveVersion`, plus the app name the MFE already knows.
- **Metric (OU-29):** `% of provider mounts (proxy for screens/apps) with theme === 'ds2026'` over rolling 30/90 days, broken down by app and tenant.
- **Dashboard:** a stacked adoption chart (base vs ds2026 vs tenant-2026) + a per-app table (which of the 99 apps have swapped). Hosted in the MFE's existing observability platform.
- **Quarterly pulse (OU-30):** a scheduled snapshot summarising adoption %, remaining un-swapped apps, and the gate-readiness signal for the major (the major is gated on adoption %, master §5.1 / W4-P4). Feeds the go/no-go for W4-P4-RC.

### W4-P3.c — Post-release MFE verification

Confirms the independence guarantee in §0: this minor is testable on its own once published — it does not require W4-P2, W4-P4, or W4-P6. Standard mechanics as W4-P2.e (single `bun.lock`, `yarn overdrive:local`, throwaway branch + manual bump, pin-back rollback).

**A. Pre-publish smoke:** `yarn build` in overdrive; `yarn overdrive:local` + `yarn tsc -b --force` in mfe — the new `onThemeMount?` prop is optional, so no existing call site should need a type change.

**B. Post-publish (throwaway branch, manual bump, `bun install`):**
1. **Unset = byte-identical.** In one pilot app (e.g. `apps/de-portal-app-shell`) that mounts `OverdriveProvider` WITHOUT wiring `onThemeMount`, run the app (assume already started). Confirm: no new network calls, no new console output, and the screen renders identically to pre-bump — the optional callback being unset must be a complete no-op.
2. **Wired = exactly one event, no PII.** In the SAME pilot app, temporarily wire `onThemeMount` to the app's existing `@autoguru/logs` `LoggingAgentProvider` (already mounted above `OverdriveProvider` in `client.tsx:22`) as a throwaway probe. Reload the screen and confirm exactly **one** `{ theme, overdriveVersion }` event logs per provider mount (not per re-render, not per navigation within the same mount) and that the payload carries no route/user/session field — only the two documented keys.
3. **Rollback.** Revert the probe wiring, pin `bun.lock` back to the prior version, `bun install`, discard the throwaway branch.

**Pass criteria:** A clean; B.1–B.2 pass; throwaway branch/probe discarded (B.3).

### W4-P3 — Agent prompts

**Builder (`opus`):**
```
You are the Builder for W4-P3 — adoption telemetry — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feature/ds2026-w4p3-telemetry off main.

HARD RULE (additive/opt-in/privacy): add an OPTIONAL callback prop only. When unset, behaviour is byte-identical to today. Do NOT add any telemetry peer dependency, do NOT make any default network call, do NOT emit any user/route/session data — only { theme: theme.name, overdriveVersion }. No default prop change, no new peer dep (master R7).

FILES TO MODIFY:
- lib/components/OverdriveProvider/OverdriveProvider.tsx — add `onThemeMount?: (info: { theme: string; overdriveVersion: string }) => void` to ProviderProps (JSDoc it); add a useEffect in Provider keyed on [theme.name, onThemeMount] that calls onThemeMount?.({ theme: theme.name, overdriveVersion: OVERDRIVE_VERSION }). Source OVERDRIVE_VERSION from a build-time constant / package.json version — NO new dependency.
DELIVERABLE (docs): docs/ds2026-plan/ note appended (or mfe/docs/) describing the dashboard + quarterly pulse outline (W4-P3.b): ingest via @autoguru/logs, metric = % mounts on ds2026 by app/tenant, quarterly pulse feeds the major go/no-go.
INLINE DATA: theme.name is already in the provider context (OverdriveProvider.tsx:80,124). @autoguru/logs LoggingAgentProvider is already mounted above OverdriveProvider in mfe apps/de-portal-app-shell/src/client.tsx:22 — that is the wiring point on the MFE side.
STEPS: add the optional prop + useEffect; confirm no-op when unset; document the dashboard/pulse; run gates.
DONE-CRITERIA: prop is optional, unset = no emission = zero behaviour change; no new peer dep in package.json; `yarn lint` clean; provider tests pass; a unit test asserts onThemeMount fires once per theme.name and carries only {theme, overdriveVersion}.
Then run: yarn lint; yarn test run OverdriveProvider; yarn test:a11y. Report changes + gate results.
```

**Reviewer (`opus`):**
```
You are the adversarial Reviewer for W4-P3. Branch feature/ds2026-w4p3-telemetry. PASS/FAIL with file:line evidence:
1. Is onThemeMount strictly optional and a complete no-op when unset? Must be YES (unset = today's behaviour).
2. Was any new peer/runtime dependency added to package.json? Must be NO (master R7).
3. Does overdrive make any default network call or emit any user/route/session/PII? Must be NO — only { theme, overdriveVersion }.
4. Does the effect fire once per theme.name change (not every render)? Verify the dependency array.
5. Any default prop or prop-semantics change to OverdriveProvider? Must be NO.
6. Base-theme Chromatic zero-diff. Confirm.
FAIL if 1, 2, or 3 violated. Report specifics.
```

**Verify (`sonnet`):**
```
You are the Verify agent for W4-P3. On branch feature/ds2026-w4p3-telemetry, run and report (do not fix):
  yarn lint
  yarn test run OverdriveProvider
  yarn test:a11y
Confirm the added test proves: (a) unset onThemeMount = no call; (b) set = one call per theme.name with only {theme, overdriveVersion}. Confirm no new dependency in package.json (git diff package.json). Confirm CI Chromatic base-theme zero-diff. Report PASS/FAIL per gate.
```

---

## W4-P4-RC / W4-P6 / W4-P4 stable — the coordinated major

This is one logically-atomic release split into three sequenced steps to de-risk the tenant themes. **RC → tenant migration against RC → stable + coordinated MFE bump.** Honour the sequence exactly.

### W4-P4-RC — Publish the major as an npm prerelease

**Goal:** get `5.0.0-rc.N` onto npm under a prerelease dist-tag so W4-P6 can migrate the 4 tenant packages against real published artifacts, without ever shipping stable. **Depends on:** Track C complete + adoption gate met (W4-P3 pulse) + W4-P2 warnings live ≥ 1 minor cycle. **Agents:** Builder `opus`, Reviewer `opus`, Verify `sonnet`.

**Step-by-step against the real workflows:**
1. On the major branch (e.g. `feature/ds2026-major`), enter changesets pre-mode: `yarn changeset pre enter rc`. This creates **`.changeset/pre.json`** — the exact file `prerelease.yml`'s `setup` job checks for (`has_prerelease`).
2. Ensure the **major** changeset exists (`.changeset/*.md`, type `major`, summary from W4-P4 below). All the breaking-change PRs that make up the major are merged into this branch first (or the branch carries them).
3. Trigger `prerelease.yml` via **`workflow_dispatch`** on the major branch. The workflow: gates on `.changeset/pre.json`; installs npm 11.6.2 + verifies OIDC; runs `yarn changeset version` (produces `5.0.0-rc.0`); if the version changed, runs `yarn changeset publish` → npm prerelease dist-tag; `gh release create v5.0.0-rc.0 --prerelease`; commits `package.json yarn.lock .changeset` back to the branch — **note it does NOT commit `CHANGELOG.md`** (line 128 comment), so `publish.yml`'s `paths: ['CHANGELOG.md']` filter never fires and stable never publishes accidentally.
4. Iterate: fixes → new `.changeset/*.md` → re-dispatch `prerelease.yml` → `5.0.0-rc.1`, etc.
5. **Do not merge the major branch to `main` yet** — merging to `main` would trigger `release.yml` (Version Packages PR) and eventually `publish.yml`. The RC lives entirely on the branch + npm prerelease tag.

**Verified isolation guarantees:** `prerelease.yml` is `workflow_dispatch`-only (never auto-runs); it publishes only when `.changeset/pre.json` exists and the version actually changed; it deliberately keeps `CHANGELOG.md` off the branch so the stable `publish.yml` path filter stays dormant.

**Post-release MFE verification (general pilot app, non-tenant):** W4-P6 below validates the tenant packages against the RC; the same discipline must also run against at least one ordinary, non-tenant pilot app so the migration guide is checked against a case the plan didn't hand-pick. On a throwaway branch, pin one non-tenant app (e.g. `apps/de-portal-app-shell`) to the `5.0.0-rc.N` prerelease dist-tag (or `yarn overdrive:local` against the RC build), `bun install`/rebuild, then run the app's type-check and the app itself (assume the dev server is already started by the user). Walk every compile error and runtime break the app actually hits against `docs/ds2026-plan/migration-guide-v5.md`'s breaking-change list, item by item: each observed break must appear there with the correct before/after and codemod pointer, and the guide must not be missing anything the app hit. Apply the guide's documented codemods/hand-fixes to get the app green and confirm it renders the 2026 look correctly. Any break observed but not documented is a FAIL on the major Reviewer's migration-guide check (item 6, below) and must be added to the guide before stable proceeds. Discard the throwaway pin/branch afterward — this is a pre-stable RC probe, not a merge.

### W4-P6 — Tenant-theme migration + MFE internal-path cleanup (against the RC)

**Goal:** migrate the 4 tenant theme packages + 2 tenant apps + the 3 fragile internal-path importers so the mfe monorepo compiles and passes on `5.0.0-rc.N`, ahead of the stable bump. **Depends on:** W4-P4-RC published. **Agents:** Builder `opus`, Reviewer `opus`, Verify `sonnet`. All work is in the **mfe** repo, pinned to the RC via `yarn overdrive:local` or the prerelease dist-tag.

**Grounded in what each tenant package actually imports (verified in `packages/themes/smartFleetTheme`):**
```ts
// packages/themes/smartFleetTheme/lib/smartFleetTheme/tokens.ts
import { tokens as flatRedTokens } from '@autoguru/overdrive/themes/flat_red/tokens';
import type { ColourMap, ThemeTokens } from '@autoguru/overdrive/themes/index';
import { buildColourGamut, breakpoints as defaultBreakpoints } from '@autoguru/overdrive/themes/makeTheme';
import merge from 'lodash/merge';

const colours: ColourMap = { gray: {900:'#263238', …}, green: {…}, blue: {…}, yellow: {…}, … };
const smartFleet: Partial<ThemeTokens> = { colours: { gamut: { ...buildColourGamut(colours), … } }, … };
export const breakpoints: typeof defaultBreakpoints = { … };
export const tokens: ThemeTokens = merge<ThemeTokens, Partial<ThemeTokens>>(flatRedTokens, smartFleet);

// packages/themes/smartFleetTheme/lib/smartFleetTheme/vars.css.ts
import { themeContractVars as vars } from '@autoguru/overdrive/themes/theme.css';
import { createTheme } from '@vanilla-extract/css';
import { tokens } from './tokens';
export const themeRef = createTheme(vars, tokens, 'smartFleetTheme');

// packages/themes/smartFleetTheme/lib/smartFleetTheme/index.ts
export default { name: 'smartFleetTheme', themeRef, tokens, vars };
```
Elevation tests assert **exact retained values** (`packages/themes/smartFleetTheme/lib/smartFleetTheme/__tests__/tokens.test.ts`):
```ts
expect(tokens.elevation['1']).toBe(flat); // flat_red flattens 1-3
expect(tokens.elevation['4']).toContain('0 6px 30px 5px');
expect(tokens.elevation['5']).toContain('0 9px 46px 8px');
expect(tokens.elevation.none).toBe('none');
```

**Per-tenant-package work orders:**

| Package | What it imports today | Migration work order |
|---|---|---|
| `packages/themes/smartFleetTheme` | `ColourMap`, `ThemeTokens` (types) from `themes/index`; `buildColourGamut`, `breakpoints` from `themes/makeTheme`; `flat_red/tokens`; `createTheme(vars, tokens, name)` | (1) If the major renames/reshapes `ColourMap`/`ThemeTokens`, update the local `colours`/`smartFleet` objects to the new shape (the major will supply the post-`5.0.0` type). (2) If the legacy `colours.*` contract is removed, regenerate the custom gamut against the semantic `color.*` contract (`buildColourGamut` output must satisfy the new `ThemeTokens`). (3) Update the elevation test assertions to whatever values the major **retains** (the plan keeps `elevation 1–5` values — so these may be unchanged; confirm against the `5.0.0-rc` `flat_red/tokens`). (4) `createTheme(vars, tokens, …)` against the RC's `themeContractVars` — every contract key the theme assigns must still exist post-major or be remapped. (5) Provide a **2026-flavoured build** (`SmartFleetThemeProvider` swaps to the 2026 tenant tokens) — this is the tenant equivalent of the plain `ds2026Theme` swap. |
| `packages/themes/ampolTheme` | same pattern (`OverdriveProvider theme={ampolTheme} breakpoints={breakpoints}`, `AmpolThemeProvider.tsx:12`) | same 5 steps |
| `packages/themes/fleetGuruTheme` | same pattern | same 5 steps |
| `packages/themes/dynamicGuruTheme` | same pattern | same 5 steps |
| `apps/cb-portal` `CBPortalThemeProvider` | builds on `makeTheme` internals | same shape update + regenerate gamut against the RC |
| `apps/ag-merchant-finder` tenancy provider | builds on `makeTheme` internals | same |

**MFE internal-path cleanup (3 files):**
- 2 files importing `lib/theme/tokens/{render,facade}` (internal, no stability guarantee) → repoint to the public export `@autoguru/overdrive/themes/theme.css`.
- 1 file importing `dist/themes/theme.css` (stray dist path) → repoint to `@autoguru/overdrive/themes/theme.css`.

**Validation:** the whole mfe monorepo type-checks + tests against `5.0.0-rc.N` (via `yarn overdrive:local` pointing at the RC build, or by pinning the prerelease dist-tag). The tenant elevation tests pass against the retained values. No stable bump yet.

### W4-P4 — THE single major (stable) + coordinated bump runbook

**Goal:** publish `5.0.0` stable and land the coordinated MFE change (overdrive bump + W4-P6 tenant PRs + codemod-migrated apps) atomically. **Depends on:** W4-P4-RC validated + W4-P6 landed against the RC. **Agents:** Builder `opus`, Reviewer `opus` (exhaustive breaking-change catalogue), Verify `sonnet` (Chromatic diffs now expected + reviewed).

**Exhaustive breaking-change catalogue (everything the major deletes/flips — enumerated from the master):**

*Default flips (behaviour changes on existing components):*
1. **Button** `defaultVariants` → 2026 Class model: default `class`, `style`, `shape`/radius flip (master §4 W3a-P1, Button.css.ts:410-415 today: size medium, shape default, intent primary, minimal false). Legacy `variant` prop **removed** (map 7 intents → 3 Class per §6-Q5).
2. **Control defaults** (CheckBox, Radio, Switch, StarRating) → 2026 `color`/`size` defaults (W3a-P2..P5).
3. **`ds2026` becomes the base** — either fold `ds2026` token values into `base`, or make `ds2026` the default theme and retire the separate theme dir (decide in the major; both flip every screen not already opted-in).

*Deletions (compile breaks on removed keys — token contract imported by 334 MFE files):*
4. Legacy `colours.*` entirely: `colours.gamut.*` (theme.css.ts:138-142), `colours.foreground.*` (143-146), `colours.background.*` (147-152), `colours.intent.*` (153-235). Replaced by semantic `color.*`.
5. `typography.colour.*` (theme.css.ts:309-310).
6. Legacy sprinkles colour properties `colour`/`backgroundColour`/`border{Top,Right,Bottom,Left}Colour` (sprinkles.css.ts:35-74).
7. Redundant radius keys: `sm`/`1` (dedupe to `xsmall`, both 4px), `2xl` (theme.css.ts:260,264,265) — resolve §6-Q2 medium 8-vs-12 at this point.
8. `black900` deprecated alias (added W0-P1) — removed; the 2 MFE files (`apps/fcp-booking/.../supplier-list/Badge.tsx:16`, `packages/supported-browser-boundary/.../SupportedBrowsersBoundary.tsx:64`, both `backgroundColour="black900"`) must have been codemod-/hand-migrated to `gray900` first.
9. `ThemeOverrideProvider`/`FallbackProvider` no-op (already deprecated) — remove.

*Type-shape changes (break the 4 tenant packages — mitigated by W4-P6):*
10. Any change to `ColourMap` / `ThemeTokens` shape, `buildColourGamut` signature, or `makeTheme` internals. Tenant elevation values are **retained** (master keeps `elevation 1–5`), so those test assertions stay green if values don't move.

*Open-question resolutions folded into the major:* §6-Q1 (variable-vs-label hex), Q2 (radius medium/dedupe), Q3 (WIP button namespace retire), Q4 (size naming unification), Q5 (Button Class mapping + fate of brand/warning/success/information), Q6 (semibold 500→600), Q7 (spacing key strategy dedupe if any). Each resolution recorded in the G-P1 ADR log.

**Migration-guide skeleton (`docs/ds2026-plan/migration-guide-v5.md`, shipped with the major):**
```
# Upgrading @autoguru/overdrive 4.x → 5.0 (DS-2026)
## TL;DR — run the codemods
- Provider theme swap: (no longer needed if you already swapped in Wave 4; 5.0 base IS ds2026)
- Button variant→class/style: `jscodeshift -t ds2026-button-variant-to-class.ts` (map now fully resolved incl. Q5)
- black900 → gray900: hand-fix the 2 known sites
## Breaking changes (with before/after)
1. Button API: `variant` removed → the W3a-P1/G-P1-ADR-recorded prop names (recommended `buttonClass` + `buttonStyle`; see ds2026-button-map.json targetProps) (+ mapping table)
2. Control defaults flipped (CheckBox/Radio/Switch/StarRating)
3. Legacy `colours.*` removed → `color.*` (mapping table: intent.* → info/success/warning/alert.*, gamut.* → color.gamut.*)
4. `typography.colour` removed → `color.foreground.*`
5. Legacy sprinkles colour props removed → semantic `color`/`backgroundColor`/`border*Color`
6. Radius keys deduped (sm/1/2xl → xsmall/small/medium/large/xlarge)
7. black900 alias removed
8. Tenant themes: new ColourMap/ThemeTokens shape (see W4-P6; tenant PRs land in the same bump)
## Token mapping reference (old key → new key)
## FAQ / rollback (pin 4.x until ready)
```

**Coordinated-bump runbook (stable):**
1. **Pre-conditions:** W4-P4-RC validated in mfe; all 6 W4-P6 tenant/app PRs prepared (green against the RC); adoption gate (W4-P3 quarterly pulse) green; W4-P2 warnings shipped ≥ 1 minor cycle; migration guide written.
2. **Exit pre-mode** on the major branch: `yarn changeset pre exit` (removes/finalises `.changeset/pre.json`).
3. **Merge the major branch to `main`.** `release.yml` opens the **Version Packages** PR (bumps `4.x` → `5.0.0`, writes `CHANGELOG.md` from the major changeset). Chromatic diffs are now **expected and reviewed** (no longer zero-diff — this is the flip).
4. **Merge the Version Packages PR.** The `CHANGELOG.md` change on `main` triggers `publish.yml` (path filter) → `yarn changeset publish` → `5.0.0` on npm (default dist-tag) → git tag `v5.0.0` + GitHub release + Storybook to Pages.
5. **MFE coordinated change (single PR/merge-train):** bump overdrive `4.x` → `5.0.0` in the single `bun.lock`; land the 4 tenant-theme PRs + 2 tenant-app PRs + the 3 internal-path cleanups + the codemod-migrated app PRs together. `bun install`; run the full mfe test + type-check + a11y. Smoke-test high-traffic + tenant screens via `yarn overdrive:local` against `5.0.0` first.
6. **Icons:** if `5.0.0` requires a newer `@autoguru/icons` range, bump the pinned `2.2.0` in the same coordinated change (master R7).
7. **Rollback lever:** the single `bun.lock` can pin back to `4.x` if the coordinated bump regresses — apps stay on 4.x until re-attempted. The npm `5.0.0` publish is not reversible but the MFE consumption is (single-version pin).

### W4-P4-RC / W4-P6 / W4-P4 — Agent prompts

**Builder — W4-P4-RC (`opus`):**
```
You are the Builder for W4-P4-RC — publish the DS-2026 major as an npm prerelease — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: feature/ds2026-major (carries all breaking-change PRs; do NOT merge to main during the RC).

GOAL: get 5.0.0-rc.N onto npm under a prerelease dist-tag WITHOUT publishing stable. Follow the real prerelease.yml mechanics exactly.
STEPS:
1. `yarn changeset pre enter rc` → creates .changeset/pre.json (prerelease.yml's setup job gates on this file).
2. Ensure a MAJOR changeset exists (.changeset/*.md, type major, summary: "DS-2026 v5: flip defaults to 2026, remove legacy dual colour system and deprecated keys.").
3. Trigger prerelease.yml via workflow_dispatch on this branch. Confirm it: gated on pre.json; ran `yarn changeset version` → 5.0.0-rc.0; only published because the version changed; created a --prerelease GitHub release; committed package.json/yarn.lock/.changeset back to the branch but NOT CHANGELOG.md (so publish.yml's CHANGELOG.md path filter never fires).
4. Do NOT merge to main. Iterate rc.1, rc.2 as fixes land.
DONE-CRITERIA: 5.0.0-rc.N published under the prerelease dist-tag; main untouched; stable publish.yml did not fire; the major changeset + pre.json are on the branch.
Report: the published rc version, confirmation CHANGELOG.md was NOT committed, and that main is unchanged.
```

**Builder — W4-P6 (`opus`):**
```
You are the Builder for W4-P6 — tenant-theme migration + MFE internal-path cleanup — against the DS-2026 major RC.
Repo: /Users/timamehro/grit/github.com/autoguru/mfe. Pin overdrive to 5.0.0-rc.N (prerelease dist-tag or `yarn overdrive:local` against the RC build). Do NOT wait for stable.

GOAL: make the whole mfe monorepo type-check + test on 5.0.0-rc.N, ahead of the stable bump, and provide 2026-flavoured tenant builds.
GROUNDED FACTS: each tenant package (packages/themes/{smartFleetTheme,ampolTheme,fleetGuruTheme,dynamicGuruTheme}) imports `ColourMap`/`ThemeTokens` (types) from '@autoguru/overdrive/themes/index', `buildColourGamut`/`breakpoints` from '@autoguru/overdrive/themes/makeTheme', `flat_red/tokens`, and calls `createTheme(vars, tokens, name)`; index.ts default-exports { name, themeRef, tokens, vars }. Elevation tests assert exact retained values (tokens.elevation['4']).toContain('0 6px 30px 5px'), ['5']).toContain('0 9px 46px 8px'), ['1']=flat, none='none').
WORK ORDERS (per wave-4.md W4-P6 table):
1. For each of the 4 tenant packages + apps/cb-portal CBPortalThemeProvider + apps/ag-merchant-finder tenancy provider: update the local ColourMap/ThemeTokens usage to the 5.0.0-rc shape; regenerate the custom gamut via buildColourGamut against the (possibly semantic-only) contract; keep createTheme(vars, tokens, …) resolving against the RC's themeContractVars; provide a 2026-flavoured tenant build.
2. Update elevation test assertions to the values the major RETAINS (the plan keeps elevation 1-5; confirm against 5.0.0-rc flat_red/tokens — likely unchanged).
3. Internal-path cleanup: repoint the 2 files importing lib/theme/tokens/{render,facade} and the 1 importing dist/themes/theme.css to the public '@autoguru/overdrive/themes/theme.css'.
DONE-CRITERIA: mfe type-checks + tenant package tests pass on 5.0.0-rc.N; tenant elevation tests green; no import of lib/theme/tokens/* or dist/themes/* remains; PRs prepared (not yet merged to mfe main — they land in the coordinated stable bump).
Report: per-package diffs, test results against the RC, and any contract key the tenant themes assigned that no longer exists post-major (flag for the design team).
```

**Builder — W4-P4 stable (`opus`):**
```
You are the Builder for W4-P4 — THE DS-2026 major (stable) — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: feature/ds2026-major (RC-validated, W4-P6 PRs prepared).

GOAL: publish 5.0.0 stable and enable the coordinated MFE bump. This is the ONE release allowed to break MFE screens.
PRE-CONDITIONS (verify first, STOP if any missing): W4-P4-RC validated in mfe; all W4-P6 tenant/app PRs green against the RC; adoption gate (W4-P3 pulse) green; W4-P2 warnings shipped ≥ 1 minor cycle; migration guide docs/ds2026-plan/migration-guide-v5.md written.
BREAKING-CHANGE SCOPE (implement/confirm all — the exhaustive catalogue is in wave-4.md W4-P4): (1) Button defaultVariants → 2026 Class model, remove `variant` per §6-Q5; (2) CheckBox/Radio/Switch/StarRating default flips; (3) ds2026 becomes base; (4) delete legacy colours.* (theme.css.ts:138-236); (5) delete typography.colour (309-310); (6) delete legacy sprinkles colour props (sprinkles.css.ts:35-74); (7) dedupe radius sm/1/2xl (260,264,265) + resolve §6-Q2; (8) remove black900 alias; (9) remove FallbackProvider/ThemeOverrideProvider; (10) finalise ColourMap/ThemeTokens shape (retain elevation 1-5 values). Fold in §6 Q1-Q7 resolutions (record each in the G-P1 ADR log).
STEPS: implement/confirm the breaking changes; write the major changeset (type major); `yarn changeset pre exit`; write the migration guide; run gates (Chromatic diffs now EXPECTED + reviewed); merge to main → Version Packages PR (4.x→5.0.0) → merge it → publish.yml ships 5.0.0.
DONE-CRITERIA: 5.0.0 published; migration guide complete with before/after + token mapping tables; CHANGELOG.md written; the coordinated MFE bump runbook (wave-4.md) ready to execute with the W4-P6 PRs.
Report: full breaking-change list as shipped, Chromatic diff review notes, published version.
```

**Reviewer — the major (`opus`):**
```
You are the adversarial Reviewer for the DS-2026 major (W4-P4-RC / W4-P6 / W4-P4 stable). Produce PASS/FAIL with file:line evidence:
1. RC isolation: did the RC ever commit CHANGELOG.md or merge to main (which would trigger stable publish)? Must be NO — the RC lives on the branch + prerelease dist-tag only (verify against prerelease.yml behaviour).
2. Sequence: was W4-P6 tenant migration done against the RC BEFORE stable published? Must be YES (RC → tenant → stable). No circular dependency.
3. Breaking-change catalogue completeness: is EVERY item the master deletes/flips covered (Button variant removal + Class mapping §6-Q5; control default flips; colours.* deletion 138-236; typography.colour 309-310; legacy sprinkles props 35-74; radius dedupe 260/264/265; black900 removal; FallbackProvider removal; ColourMap/ThemeTokens final shape with elevation 1-5 RETAINED)? Enumerate any missing.
4. black900 removal safety: were the 2 MFE sites (fcp-booking Badge.tsx:16, SupportedBrowsersBoundary.tsx:64) migrated to gray900 BEFORE the alias was removed? Must be YES.
5. Tenant themes: do the 4 packages compile + pass (incl. exact-value elevation tests) against 5.0.0-rc? Any contract key they assign that no longer exists post-major must be flagged, not silently broken.
6. Migration guide: does it give a before/after + old-key→new-key mapping for every breaking change, and reference the codemods?
7. §6 Q1-Q7 resolutions recorded in the G-P1 ADR log?
FAIL if 1, 2, 3, or 4 is violated. Report specifics.
```

**Verify — the major (`sonnet`):**
```
You are the Verify agent for the DS-2026 major. Report objective results (do not fix):
RC: confirm prerelease.yml published 5.0.0-rc.N under the prerelease dist-tag, that CHANGELOG.md was NOT committed to the branch, and main is unchanged.
Tenant (W4-P6, in mfe pinned to the RC): run the tenant package test suites (incl. elevation assertions) and the mfe type-check; report pass/fail per package.
Stable:
  yarn lint
  yarn test run <all touched: Button CheckBox Radio Switch StarRating themes styles sprinkles OverdriveProvider>
  yarn test:a11y
Chromatic diffs are EXPECTED here — report the diff set for the Reviewer to sign off (do not auto-accept). Confirm publish.yml shipped 5.0.0 (git tag v5.0.0 + npm). Report PASS/FAIL per gate + the coordinated-bump readiness (W4-P6 PRs prepared).
```

---

## W4-P5 (post-major) — Dark mode

**Goal:** enable dark mode via the semantic layer once it is the sole colour system (only feasible after the major). Build on the `poc-dark-mode` branch / **PR #1297** mechanics. **Release:** minor (on `5.x`). **Depends on:** W4-P4. **OU:** none — recommend creating a ticket (master §8.1). Keep brief but actionable.

**Scope sketch:**
- **Mechanics (from PR #1297):** `[data-od-color-mode=dark]` selector + `createGlobalTheme`. The base theme already carries the light selector (`base/theme.css.ts:9-14` — `:root, [data-od-theme=base], [data-od-theme=base][data-od-color-mode=light]`), so dark is the symmetric addition: `[data-od-theme=base][data-od-color-mode=dark]` (and equivalent for the folded-in 2026 base).
- **Semantic layer is the enabler:** because the major collapsed everything onto `color.*`, dark mode is a second value-set for the same semantic keys — not a per-component rewrite. Define dark values for `color.foreground/background/border/info/success/warning/alert/gamut/button.*`. Gamut ramps invert (100↔900) per the DS-2026 dark palette (source from Figma at build time — Spec-agent flow per G-P1 handoff protocol).
- **Provider surface:** `OverdriveProvider` already threads `theme.vars.mode` into `useColorOverrides` (`OverdriveProvider.tsx:121`); dark mode rides the `data-od-color-mode` attribute the app sets (or a new provider prop `colorMode?: 'light' | 'dark'`). Keep it additive on `5.x` (default `light`).
- **Deliverables:** dark value-set in the theme dir; `data-od-color-mode=dark` global theme; a `colorMode` provider prop (default light); Storybook dark backgrounds + a11y contrast checks on dark; Chromatic dark stories.
- **Out of scope here:** the full palette hex table (fetch from Figma via a Spec agent when the ticket is created).

**Post-release MFE verification:** standard mechanics (single `bun.lock`, `yarn overdrive:local`, throwaway branch + manual bump, pin-back rollback). On a throwaway branch, bump one pilot app to the published `5.x` minor carrying dark mode.
1. **Default stays light.** With no dark mechanism set (no `data-od-color-mode` attribute, `colorMode` prop unset), confirm the app renders byte-identical to pre-bump — screenshot diff of the bump alone, before touching anything dark-mode-related.
2. **The mechanism flips one screen.** On exactly one screen, set the dark mechanism (`data-od-color-mode="dark"`, or the `colorMode="dark"` provider prop, whichever the major's Builder ships) and confirm that screen — and only that screen — renders the dark value-set (inverted gamut, dark backgrounds/foregrounds/borders).
3. **A11y contrast spot-check.** Run an automated contrast check (Storybook a11y / axe) or a manual WCAG AA contrast check on that dark screen's key text/background/border pairs; confirm no contrast regression versus the light equivalent.
4. **Rollback.** Pin back, `bun install`, discard the throwaway branch.

---

## G-P1 — Documentation & governance package

**Goal:** stand up the governance artefacts every other package references. **Release:** none (docs; no changeset). **OU:** OU-22, OU-23, OU-24, OU-25. **Depends on:** W3-P0 (the ADR it houses must exist first); runs parallel to Waves 2–3 thereafter. **Agents:** Builder `sonnet`, Reviewer `opus`, Verify `sonnet` (`yarn lint` only — no runtime surface).

**Work order (four artefacts):**

1. **ADR / decision-log home + format.** Create `docs/adr/` (no ADR dir exists today — verified; existing docs are only `docs/QUICK_REFERENCE.md`, `docs/ROADMAP.md`). Format: one file per decision `docs/adr/NNNN-title.md` with sections `Status` (Proposed/Accepted/Superseded), `Context`, `Decision`, `Consequences`, `Date`, `Deciders`. Seed with the decisions the plan already made: `0001-retire-design-system-2026-palette-branch.md` (W0-P3), `0002-opt-in-vehicle-ds2026-theme.md` (W3-P0), `0003-favouritebutton-naming.md` (W2-P9), and a rolling `0004-open-question-resolutions.md` capturing §6 Q1-Q7 as they resolve. Add `docs/adr/README.md` with the index + how to add an ADR.

2. **Figma → Storybook handoff protocol.** `docs/ds2026-specs/README.md` formalising master §4.0.2's Spec-agent flow: node ID → Spec agent (`sonnet`, Figma MCP) runs `get_screenshot` + `get_design_context`/`get_metadata` → writes `docs/ds2026-specs/<Component>.md` (screenshot ref, variant×property table, surface→§3.1-token mapping sourced from **bound variables not swatch labels**, flagged ambiguities) → committed with the component PR → Builder implements from the spec file with no Figma access. Include the spec-file template.

3. **Deprecation process doc.** `docs/adr/` or `docs/deprecation-process.md` feeding W4-P2: what qualifies for `@deprecated` (any key/prop/component the major will remove/flip); the **canonical warning wording** (`@deprecated Use <replacement> — removed in v5 (DS-2026 major).`); the `warnOnce` dev-only mechanism; **minimum one-minor soak** before removal; the rule that removals only happen in the major (W4-P4). This is the single source the W4-P2 Builder quotes.

4. **Contribution notes.** Extend `AGENTS.md` / docs: new components must consume **semantic `color.*` tokens only** (never `colours.*` or the legacy sprinkles props); reference the lint rule (master R4) that flags new `colours.*`/legacy-sprinkles usage; point contributors at the ADR log + handoff protocol.

**G-P1 — Agent prompts**

**Builder (`sonnet`):**
```
You are the Builder for G-P1 — documentation & governance — in the Overdrive → DS-2026 migration.
Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Branch: create feature/ds2026-gp1-governance off main. Docs/process only — NO lib code, NO changeset, NO behaviour change.

DELIVERABLES:
1. docs/adr/README.md (index + how-to-add) + ADR format (Status/Context/Decision/Consequences/Date/Deciders, one file per decision NNNN-title.md). No docs/adr dir exists today (only docs/QUICK_REFERENCE.md, docs/ROADMAP.md) — create it.
2. Seed ADRs: 0001-retire-design-system-2026-palette-branch.md (W0-P3), 0002-opt-in-vehicle-ds2026-theme.md (W3-P0 ds2026 theme + per-component new prop values; ThemeOverrideProvider is a deprecated no-op, do NOT build on it), 0003-favouritebutton-naming.md (W2-P9), 0004-open-question-resolutions.md (rolling, §6 Q1-Q7).
3. docs/ds2026-specs/README.md — the Figma→Storybook handoff protocol (node ID → Spec agent get_screenshot/get_design_context → docs/ds2026-specs/<Component>.md → Builder implements without Figma; hex from bound variables not swatch labels) + a spec-file template.
4. docs/deprecation-process.md — feeds W4-P2: what gets @deprecated, canonical wording "@deprecated Use <replacement> — removed in v5 (DS-2026 major).", the dev-only warnOnce mechanism, minimum one-minor soak, removals only in the major.
5. AGENTS.md contribution notes: new components consume semantic color.* only (never colours.* / legacy sprinkles props); reference the R4 lint rule; link the ADR log + handoff protocol.
DONE-CRITERIA: all files created; deprecation process matches W4-P2's plan; ADR format consistent; `yarn lint` clean (markdown/docs only).
Report: files created + a one-line summary of each seed ADR.
```

**Reviewer (`opus`):**
```
You are the adversarial Reviewer for G-P1. Branch feature/ds2026-gp1-governance. PASS/FAIL with file evidence:
1. Is the deprecation process CONSISTENT with W4-P2 (same targets, same canonical wording, same dev-only warnOnce mechanism, one-minor soak, removals only in the major)? Any inconsistency = FAIL.
2. Does the handoff protocol enforce hex-from-bound-variables (not swatch labels) and the Spec-agent-before-Builder order (master §4.0.2)?
3. Does ADR 0002 correctly state the opt-in vehicle (ds2026 theme + per-component new prop values) and NOT build the adoption story on ThemeOverrideProvider (it is a deprecated no-op)?
4. Do the contribution notes forbid new colours.*/legacy-sprinkles usage and reference the R4 lint rule?
5. Any lib code, changeset, or behaviour change in this docs package? Must be NO.
FAIL if 1 or 5 violated. Report specifics.
```

**Verify (`sonnet`):**
```
You are the Verify agent for G-P1. On branch feature/ds2026-gp1-governance:
  yarn lint   (docs/markdown only — no runtime surface, this is the only gate)
Confirm no lib file changed and no .changeset file added (git diff --stat). Report PASS/FAIL.
```

---

## Gates, release & OU mapping per package (RC-sequenced)

| Package | Gate suite | Release | OU | Depends on |
|---|---|---|---|---|
| W4-P1 | lint + codemod --dry on sample apps (no Overdrive gates — tooling) | none | OU-26 / OU-27 | Wave 3 substantially complete, W2 |
| W4-P2 | full suite; Chromatic **base zero-diff** (JSDoc + dev-warn only) | minor | OU-25 | Track C internal migration advanced |
| W4-P3 | full suite; Chromatic **base zero-diff**; unit test on emit | minor | OU-29 / OU-30 | W4-P1 |
| W4-P4-RC | prerelease.yml (`workflow_dispatch` + `.changeset/pre.json`); Chromatic diffs expected on RC | **prerelease** `5.0.0-rc.N` | OU-2 / OU-28 | Track C complete + adoption gate + W4-P2 ≥1 minor cycle |
| W4-P6 | mfe type-check + tenant tests (incl. exact-value elevation) **against the RC** | mfe PRs (gated on RC) | OU-27 | **W4-P4-RC** |
| W4-P4 (stable) | full suite; Chromatic diffs **expected + reviewed** (not zero-diff, not auto-accepted) | **major** `5.0.0` | OU-2 / OU-28 | W4-P4-RC validated + W4-P6 landed; coordinated MFE bump |
| W4-P5 | full suite; Chromatic dark stories + a11y contrast | minor (post-major) | none — create a ticket | W4-P4 |
| G-P1 | `yarn lint` only (docs) | none | OU-22 / OU-23 / OU-24 / OU-25 | W3-P0 |

**Dependency table (mirror of master §5.2 Wave-4 rows):**

| Package | Depends on |
|---|---|
| W4-P1 | Wave 3 substantially complete, W2 |
| W4-P2 | Track C internal migration advanced |
| W4-P3 | W4-P1 |
| W4-P4-RC | Track C complete + adoption gate + W4-P2; prerelease via `prerelease.yml` + `.changeset/pre.json` |
| W4-P6 | W4-P4-RC (tenant themes migrated against the RC) |
| W4-P4 (stable) | W4-P4-RC validated + W4-P6 landed; MFE bumps overdrive + lands tenant-theme PRs in one coordinated change |
| W4-P5 | W4-P4 |
| G-P1 | W3-P0 |

---

## Deviations & open items

1. **Codemod/doc file locations are proposed, not mandated by the master.** The master says W4-P1 ships "a codemod + a per-app checklist" and W4-P6 fixes the internal-path files, but does not fix repo paths. This plan places codemods under `mfe/tooling/codemods/` and the playbook under `mfe/docs/`; if the mfe repo has an established codemod/tooling home, use that instead. No master contradiction.
2. **Button `variant→class/style` mapping is only partially resolvable now.** Master §6-Q5 is unresolved for `warning`/`success`/`information`/`brand`. Encoded as data in `ds2026-button-map.json` with those four marked `confirmed:false`; the codemod refuses to transform them until Q5 is answered (recorded in the G-P1 ADR log). `brand` has **0** measured MFE `variant=` usages — a candidate for silent removal, but still needs design sign-off.
3. **`warnOnce` is a new utility, not an existing repo pattern.** Verified there is no dedicated dev-warning util today (only `invariant` from `@autoguru/utilities`, ad-hoc `console.warn`/`console.error`, and `@deprecated` JSDoc). The proposed `lib/utils/warnOnce.ts` matches the existing `console.warn` style but adds dev-gating + dedupe. If the team prefers, `invariant`'s package (`@autoguru/utilities`) could host it instead — noted for the G-P1/W4-P2 owners.
4. **Deprecation warnings can only fire at runtime resolution sites.** Pure token-contract keys (`colours.*`, `typography.colour`, radius `sm`/`1`/`2xl`) are compile-time CSS-var names with no runtime accessor, so they get `@deprecated` JSDoc only (IDE/tsc surfaces them); `warnOnce` is wired only where a legacy value is resolved at runtime (Box legacy colour prop, `black900` alias). Inventing a runtime accessor purely to warn would violate the no-behaviour-change rule, so it is deliberately not done. Flag for W4-P2 owner if louder runtime signalling is wanted.
5. **Telemetry is an optional injectable callback, not a built-in beacon.** To avoid adding a telemetry peer dependency or a default network call before the major (master R7), W4-P3 adds `onThemeMount?` (no-op when unset). The dashboard/quarterly-pulse infra lives in the mfe/observability stack, not in overdrive. If the org wants overdrive to own a default sink, that is a peer-dep decision for after the major.
6. **Dark-mode palette hex not inlined.** W4-P5 is post-major and its full dark value-set must be fetched from Figma via the G-P1 Spec-agent handoff protocol when the (recommended) ticket is created. Kept as a scope sketch per the master's "brief but actionable" instruction. No OU exists — create one (master §8.1).
7. **`ds2026` "becomes base" is a two-option decision deferred to the major.** Master W4-P4 says "make `ds2026` the base (or fold `ds2026` into base and drop the separate theme)". Both flip un-opted screens; the exact mechanism (rename vs fold) is left to the major's Builder + recorded in an ADR. The provider theme-swap codemod (W4-P1) is written to work under either outcome (it just sets `theme={ds2026Theme}` pre-major; the major makes that the default).
8. **Elevation values are assumed retained by the major.** The master keeps `elevation 1–5` values (tenant tests assert exact values, R10). W4-P6 updates tenant elevation assertions only if the major actually moves a value; the plan's intent is that it does not. Verify against the `5.0.0-rc` `flat_red/tokens` before touching those assertions.
9. **Button target prop names depend on W3a-P1's ADR (CO-W4-1).** The master writes the structural change as `variant`→`class`/`style`, but `style` collides with React's built-in `CSSProperties` prop, so W3a-P1 will ship non-colliding names (primary recommendation `buttonClass`/`buttonStyle`; alternates possible), recorded in the G-P1 ADR. The W4-P1.c codemod therefore reads the emitted prop names from `ds2026-button-map.json`'s `targetProps` (never hardcodes them); whoever runs the codemod must first confirm `targetProps` matches the names W3a-P1 actually shipped per the ADR.
