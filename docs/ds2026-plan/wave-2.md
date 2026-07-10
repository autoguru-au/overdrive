# Wave 2 — Net-new components (execution plan)

> **Parent plan:** [`../../design-system-2026-migration-plan.md`](../../design-system-2026-migration-plan.md) — this file **expands Wave 2** (§4 "WAVE 2 — Net-new components", packages W2-P1…W2-P10). It never overrides the master; where it must diverge or where the master leaves a gap, see **[Deviations & open items](#deviations--open-items)** at the end.
> **Repo:** `@autoguru/overdrive` · **Branch for all work:** cut a fresh branch off `main` per package (do **not** reuse `feature/AG-19959-overdrive-colour`).
> **Figma file key:** `ZkQlQcJkF7NTnZomVrPRN5` ("AutoGuru Design System 2026").
> **Audience:** Sonnet-class Spec/Builder/Reviewer/Verify agents with **only** the repo, this file, and the master plan. Everything needed is inlined.

---

## 0. Overview & order

Wave 2 adds ten net-new components (or, for W2-P10, augments one existing dir). Every package is a **new export → zero MFE risk** (no consumer imports it yet). All ten depend on Wave 1 tokens (**W1-P1** semantic colour namespaces, **W1-P2** button tokens, **W1-P3** radius/shadow/spacing) being merged first. See master §5.2.

**Independence guarantee:** each Wave-2 package (W2-P1…P10, including the W2-P10 Pagination augmentation) ships its **own minor** as it merges — release is per-package, not per-wave — so it is immediately adoptable and testable in the MFE the moment that minor is published, without waiting for any other package in the wave to land (Appendix A §5–6; see the **Post-release MFE verification** playbook, §1.11).

Each package runs the **quad: Spec → Builder → Reviewer → Verify** (master §4.0.2). The Spec agent is the *only* agent with Figma access; it writes `docs/ds2026-specs/<Component>.md`, committed with the PR, so the Builder never needs Figma.

### Order & parallelism

Master's suggested order (value + token coverage first, largest last):

| Slot | Package | Component | Builder model | Concurrency |
|---|---|---|---|---|
| 1 | W2-P1 | Avatar | sonnet | Batch A |
| 2 | W2-P7 | NotificationBadge | sonnet | Batch A |
| 3 | W2-P6 | ActivityBadge | sonnet | Batch A |
| 4 | W2-P2 | Tag | sonnet | Batch B |
| 5 | W2-P3 | Skeleton | sonnet | Batch B |
| 6 | W2-P4 | Breadcrumbs | sonnet | Batch B |
| 7 | W2-P10 | Pagination picker | **opus** | Batch C |
| 8 | W2-P8 | StagesLoader | sonnet | Batch C |
| 9 | W2-P9 | FavouriteButton | sonnet | Batch C |
| 10 | W2-P5 | SideNav | **opus** | Batch D (alone / largest) |

**Parallelism rule:** every Wave-2 package touches a *different, net-new* component directory (the sole exception, W2-P10, augments `Pagination/` with new files and does not edit existing ones), so **all ten can run concurrently** with no merge conflicts once Wave 1 is landed. The batching above just reflects a sensible 2–3-in-flight cadence and puts the two `opus` packages (SideNav compound API, Pagination-picker augmentation) where they get attention. If you have the agent budget, run more in parallel — the only shared file any of them edits is `lib/components/index.ts` + `lib/index.ts` (trivial, additive, append-only barrel lines; resolve the occasional import-order conflict mechanically).

**Standard release:** minor, one changeset per component. **Standard MFE impact:** none (net-new export). **Standard gates:** full suite (§ Playbook → Gates); Chromatic establishes **new baselines** for the new stories (there is no prior baseline to diff — additive, so no base-theme story regressions are permitted elsewhere).

> **⚠ Ordering hazard (record in EVERY Wave-2 PR).** A net-new component that consumes a **chromatic** semantic token (`color.info.*`, `color.success.*`, `color.warning.*`, `color.alert.*`) whose base value a later **Track C** repoint flips to a legacy value will get a base-appearance change at that point. **Prefer grey-derived tokens** (`color.foreground.*`, `color.background.*`, `color.border.*` — these are grey-derived and, post-W0-P1, `V_2026 == V_legacy`, so they are stable) **or component-own tokens.** Where a chromatic token is unavoidable (ActivityBadge, NotificationBadge, StagesLoader, FavouriteButton), note it in the PR so the Track C package that touches that token re-runs this component's Chromatic. See master §4.C ordering note + Wave-2 hazard.

---

## 1. New-component playbook (shared — every package follows this)

### 1.1 File set (the house scaffold)

Every Wave-2 component directory is:

```
lib/components/<Name>/
├── <Name>.tsx            # component logic + exported, JSDoc'd props interface
├── <Name>.css.ts         # Vanilla-Extract styles (recipe / sprinkles / vars.color.*)
├── <Name>.stories.tsx    # Storybook stories (primary test surface + a11y)
├── <Name>.spec.tsx       # unit test (render-no-throw + snapshot; .tsx for typed props)
├── __snapshots__/        # created automatically on first `yarn test run <Name>`
├── index.ts              # barrel: named exports of the component + its Props type(s)
└── default.ts            # deep-import entry: `export { <Name> as default } from './<Name>';`
```

**How the scaffold is generated.** Run `yarn plop component <Name>` (see `plopfile.js`). Plop copies `templates/component/**/*` and produces **only four files**: `<Name>.tsx`, `<Name>.css.ts`, `<Name>.stories.tsx`, `<Name>.spec.tsx`. It does **NOT** create `index.ts` or `default.ts` — **create those two by hand** (patterns below). `__snapshots__/` appears the first time you run the component's test. The generated `.tsx`/`.css.ts` are red-placeholder stubs (`border: '1px solid red'`, `example?: boolean`) — **replace them entirely** with the real implementation; the stub css.ts violates the no-hardcoded-values rule and must not survive.

> If `yarn plop` is unavailable in your environment, hand-create all six files following the skeletons in §1.3.

### 1.2 Export registration (three edits, all additive/append-only)

1. **`lib/components/<Name>/index.ts`** — the component's own barrel:
   ```ts
   export { <Name> } from './<Name>';
   export type { <Name>Props } from './<Name>';
   ```
   (Compound components also export each sub-component + its Props here — see W2-P5.)

2. **`lib/components/index.ts`** — add an alphabetically-placed line:
   ```ts
   export { <Name>, type <Name>Props } from './<Name>';
   ```

3. **`lib/index.ts`** — the public root barrel re-exports everything from `./components` via a single `export { … } from './components';` block (lines ~1–140). Add `<Name>,` and `type <Name>Props,` into that block, alphabetically. (Match the existing formatting: named component then its types.)

**`default.ts`** (deep-import entry — enables `@autoguru/overdrive/components/<Name>/default`; the `./components/*/default` export in `package.json` already wildcards this, no `package.json` edit needed):
```ts
export { <Name> as default } from './<Name>';
```

**No `package.json` changes.** The `exports` map already wildcards `./components/*` and `./components/*/default`. Do **not** add per-component export entries and do **not** add peer dependencies (icons come from the existing `@autoguru/icons` peer).

### 1.3 Worked skeleton (minimal component in house style)

A minimal, token-clean component. Note: (a) primitive composition via `Box`; (b) `odComponent` + `testId` from `TestIdProp`; (c) recipe variants; (d) **semantic tokens only** — `vars.color.*` in the css, sprinkles for layout; (e) exported JSDoc'd props; (f) `displayName`.

**`Widget.tsx`**
```tsx
import clsx from 'clsx';
import React, { type FunctionComponent, type ReactNode } from 'react';

import type { TestIdProp } from '../../types';
import { Box } from '../Box/Box';

import * as styles from './Widget.css';
import type { StyledWidgetProps } from './Widget.css';

export interface WidgetProps extends TestIdProp {
	/** Visual size of the widget. */
	size?: NonNullable<StyledWidgetProps>['size'];
	/** Content rendered inside the widget. */
	children: ReactNode;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}

/**
 * Widget is a minimal DS-2026 surface used to demonstrate the house scaffold.
 * It composes `Box`, consumes only semantic `color.*` tokens, and forwards
 * `testId`/`odComponent` for testability.
 */
export const Widget: FunctionComponent<WidgetProps> = ({
	size = 'md',
	children,
	className,
	testId,
}) => (
	<Box
		odComponent="widget"
		testId={testId}
		display="inline-flex"
		alignItems="center"
		borderRadius="small"
		className={clsx(styles.widget({ size }), className)}
	>
		{children}
	</Box>
);

Widget.displayName = 'Widget';
```

**`Widget.css.ts`**
```ts
import { globalLayer } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER); // required because we author '@layer' rules below

export const widget = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				// Semantic tokens ONLY — never vars.colours.*
				backgroundColor: vars.color.background.emphasisInactive,
				color: vars.color.foreground.primary,
				border: `${vars.border.width['1']} solid ${vars.color.border.default}`,
			},
		},
	},
	variants: {
		size: {
			sm: { padding: vars.space[2] },
			md: { padding: vars.space[3] },
			lg: { padding: vars.space[4] },
		},
	},
	defaultVariants: { size: 'md' },
});

export type StyledWidgetProps = RecipeVariants<typeof widget>;
```
> `globalLayer(LAYER_ORDER)` must be imported+called in any `.css.ts` that emits into a cascade layer (see `SplitButton.css.ts`). If you only use `sprinkles(...)` (which is already layer-scoped) you can skip it; if you author raw `style`/`recipe` rules that must beat styleprops, wrap them in `'@layer': { [cssLayerComponent]: {...} }` and declare `globalLayer(LAYER_ORDER)`.

**`index.ts`**
```ts
export { Widget } from './Widget';
export type { WidgetProps } from './Widget';
```

**`default.ts`**
```ts
export { Widget as default } from './Widget';
```

### 1.4 Story skeleton

Follow `Badge.stories.tsx` (existing house style): `satisfies Meta<typeof Component>`, `StoryObj` typed stories, a "Standard" story, per-axis grid stories, and **one interaction/a11y story with a `play` function** (master + AGENTS.md require it for interactive components). Use an **existing top-level Storybook category** (e.g. `Content/…`, `Navigation/…`, `Feedback/…` — grep `lib/components/**/**.stories.tsx` for `title:` to match a sibling).

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import React from 'react';

import { Widget } from './Widget';

const meta = {
	title: 'Content/Widget',
	component: Widget,
	args: { children: 'Hello' },
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof Widget>;

export const Standard: Story = {};

export const AllSizes: Story = {
	render: (args) => (
		<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
			{(['sm', 'md', 'lg'] as const).map((size) => (
				<Widget key={size} {...args} size={size} />
			))}
		</div>
	),
};

// Interaction/a11y test (required for interactive components; AGENTS.md §Testing)
export const Interaction: Story = {
	play: async ({ canvas }) => {
		const el = canvas.getAllByText('Hello')[0];
		await expect(el).toBeVisible();
	},
};
```
> AGENTS.md: use `getAllByRole`/`getAllByText` and take `[0]` in play functions (never `getByRole`). Prefer semantic queries over `testId` in assertions. `testId` is for consumers, not tests.

### 1.5 Spec (unit-test) skeleton

Match the plop `.spec.tsx` + `Badge.spec.jsx` style. Keep unit tests light (stories are the primary test surface); assert render-no-throw + snapshot + any invariant.

```tsx
import { render } from '@testing-library/react';
import * as React from 'react';

import { Widget } from './Widget';

describe('<Widget />', () => {
	it('should not throw', () =>
		expect(() => render(<Widget>hi</Widget>)).not.toThrow());

	it('should match snapshot', () => {
		expect(
			render(<Widget>hi</Widget>).container.firstChild,
		).toMatchSnapshot();
	});
});
```
Run `yarn test run <Name>` once to generate `__snapshots__/`. Commit the snapshot.

### 1.6 The semantic-tokens-only rule (NON-NEGOTIABLE)

Wave-2 components consume **only** the new semantic layer. This is what makes them 2026-ready and keeps them off the doomed legacy contract.

**USE (semantic):**
- In `.css.ts`, reference tokens via `import { overdriveTokens as vars } from '../../themes/theme.css'` then:
  - `vars.color.foreground.*` — `primary` `#212338`, `secondary` `#484C5F`, `reverse` `#FFFFFF`, `tertiaryInactive` `#8F95A1`, `tertiaryInactiveLight` `#D4D9DD`
  - `vars.color.background.*` — `default` `#FFFFFF`, `reverse` `#212338`, `inactive` `#D4D9DD`, `emphasisInactive` `#EEF0F2`
  - `vars.color.border.*` — `default` `#D4D9DD`, `emphasis` `#8F95A1`, `selected` `#5C6172`, `strong` `#212338`
  - `vars.color.info|success|warning|alert.*` — chromatic surfaces (see §3.1 of master; **chromatic = ordering hazard**)
  - `vars.color.gamut.*` — raw ramps (grey/green/blue/yellow/red 100–900, white) when no semantic token fits
  - `vars.space[...]`, `vars.border.radius.*`, `vars.border.width.*`, `vars.elevation.*`, `vars.typography.*`, `vars.animation.easing.*`
- **Sprinkles props** (on `Box` / via `sprinkles({...})`) — these are the *American-spelling, semantic* ones:
  - `color` → resolves `tokens.color.content` keys (`normal`, `soft`, `inverse`, `info`, `danger`, `success`, `warning`)
  - `backgroundColor` → `tokens.color.surface` keys (`page`, `hard`, `soft`, `accent`, `success`, `info`, `danger`, `warning`) + `transparent`
  - `borderColor` / `borderTopColor` / `borderBottomColor` / `borderLeftColor` / `borderRightColor` (+ `borderColorX/Y`) → `borderColors` (`default`, `muted`, `disabled` + surface keys)
  - layout sprinkles are always fine: `display`, `padding`/`p*`, `margin`/`m*`, `gap`, `borderRadius`, `borderWidth`, `width`/`height`/`size`, flex/grid props, `alignItems`, `justifyContent`, etc.

> **Note on the two colour surfaces.** The Wave-1 namespaces (`color.foreground/background/border/info/…`) are **new contract keys** and are **NOT yet wired into the sprinkles `color`/`backgroundColor` props** (those still map to the older `color.content`/`color.surface` maps). So for a §3.1 mapping like "text → `color.foreground.primary`", reference **`vars.color.foreground.primary` directly in the `.css.ts`** (recipe/style), and use sprinkles props only for layout + the `color.content`/`color.surface` cases. Both approaches are semantic and allowed; neither touches legacy.

**BANNED (legacy — an automatic Reviewer FAIL if present in new code):**
- `vars.colours.*` / `tokens.colours.*` (legacy `gamut`/`foreground`/`background`/`intent`)
- Legacy **British-spelling** sprinkles props: `colour`, `backgroundColour`, `borderColour`, `borderTopColour`, `borderBottomColour`, `borderLeftColour`, `borderRightColour` (+ `borderColourX/Y`)
- `styledIntentionalElement` / `intentColorset.css` (the legacy intent colourset — Badge uses it; do NOT copy that pattern)
- `typography.colour` / `sprinklesLegacyText` / `textStyles({ colour: … })` (legacy colour arg)
- Any hardcoded hex / `rgb()` / magic number for colour, spacing, or radius.

**The grep gate** (Reviewer runs this; it MUST be empty for a new component dir):
```bash
grep -n "colours\.\|backgroundColour\|sprinklesLegacy" lib/components/<Name>/
```
Recommended stricter gate the Reviewer should also run (all must be empty on new code):
```bash
grep -nE "\bcolour\b|border[A-Za-z]*Colour|styledIntentionalElement|intentColorset|typography\.colour|textStyles\(\{[^}]*colour" lib/components/<Name>/
```
> **W2-P10 (Pagination) exception:** the *existing* files in `lib/components/Pagination/` already use legacy tokens (untouched by Wave 2 — Track C repoints them in W3c-P6/C-P/3c-P6). So for W2-P10 the grep gate is run against **the diff / newly-added files only**, not the whole dir. See W2-P10.

### 1.7 Accessibility checklist (every component)

Per AGENTS.md §Accessibility + master. Confirm each before hand-off:
- [ ] **Semantic HTML** — right element for the role (`nav` + `ol`/`li` for Breadcrumbs & SideNav; `button` for interactive Tag/FavouriteButton/page buttons; `img` with `alt` for Avatar profile pics).
- [ ] **Accessible names** — icon-only controls get `aria-label` (SideNav icon-only items, FavouriteButton, nav arrows). Decorative icons get `aria-hidden`.
- [ ] **State exposed to AT** — `aria-current="page"` for the selected breadcrumb/page/nav item; `aria-pressed` for FavouriteButton toggle; `aria-expanded`/`aria-controls` for collapsible SideNavSection; `role="status"`/`aria-live` for loaders (StagesLoader, Skeleton where it announces).
- [ ] **Keyboard** — all interactive elements reachable + operable by keyboard (WAI-ARIA APG pattern for the widget type); SideNav follows the disclosure/menu pattern; Pagination arrows/pages are focusable buttons.
- [ ] **Visible focus** — `:focus-visible` ring; never remove the outline without a replacement.
- [ ] **React Aria** where a non-trivial interaction exists (SideNav sections, FavouriteButton) — it's an existing peer dep; do not add new deps.
- [ ] **Contrast** — text-on-surface pairings satisfy WCAG AA (the DS-2026 contrast guide `lib/themes/base/contrastGuide.ts` documents approved pairs; Spec agent flags any risky pairing).
- [ ] **Storybook a11y** — `yarn test:a11y` passes (the Storybook a11y project runs axe on every story).

### 1.8 Gates (run by Builder before hand-off, re-run by Verify)

```bash
yarn lint                 # eslint + tsc — MUST be clean
yarn test run <Name>      # unit + storybook vitest for the component
yarn test:a11y            # storybook a11y project — MUST pass
# yarn test run <Name> -u  # ONLY to accept a NEW snapshot for a net-new component
```
- **Never start a dev server before running tests** (assume it is already running; ask the human if not).
- **Snapshots:** a net-new component has no prior snapshot, so `-u` (or first run) *creates* it — that is expected and fine; commit it. This is different from the token-churn scenario in master §4.0.1 (which applies to edits of existing components — not relevant to a brand-new dir, except W2-P10 where you must NOT churn Pagination's existing snapshot).
- **Chromatic:** runs in CI on the PR (`visual_test` job). For net-new stories it establishes **new baselines** (no diff to accept). It must remain **zero-diff on all pre-existing base-theme stories** — if a new component somehow changed a shared token or global, that is a FAIL. Never `autoAcceptChanges` off `main`.

### 1.9 Changeset (every package)

Add `.changeset/<slug>.md` (see the existing `.changeset/ds-2026-colour-ramps.md` for format), type **minor**:
```md
---
'@autoguru/overdrive': minor
---

Add <Name> component (DS-2026). <one-line description of the component + its variant axes>.
```
Exact summary text is given per-package below. Commit the changeset with the code. Release mechanics: master Appendix A.

### 1.10 Spec-file convention

The Spec agent writes `docs/ds2026-specs/<Component>.md` (create the dir if missing) containing: the Figma screenshot reference, a variant×property table (dimensions/paddings/gaps/radii/border widths/icon sizes/typography), the **surface → §3.1 token key → hex** mapping (sourced from **bound variables**, never swatch labels), state deltas (Default/Hover/Pressed/Disabled/Selected…), and any ambiguity flagged for the Reviewer/§6. It is committed with the package PR. The Builder's data = master §3.1 tables **+** this spec file; the Builder never opens Figma.

### 1.11 Post-release MFE verification (every Wave-2 package)

Shared across all ten packages — do **not** copy this per-package; run it once per package's own release (see §3 summary table footnote). Confirms the independence guarantee in §0: each component's minor is immediately adoptable and testable in the MFE (`/Users/timamehro/grit/github.com/autoguru/mfe`) on its own, with zero coupling to sibling Wave-2 packages. MFE facts used below: one Bun/yarn-workspace monorepo, a **single `bun.lock`** pinning `@autoguru/overdrive` to one version across all 100 apps, **manual** bumps (no renovate), and `yarn overdrive:local` (`.scripts/copy-overdrive.js`) to point the monorepo at a local overdrive build (master §0.1, Appendix A §6).

**A. Pre-publish smoke (in overdrive, before merging the package PR):**
```bash
# In overdrive:
yarn build                       # must succeed with the new component's dist output present

# In mfe:
yarn overdrive:local               # .scripts/copy-overdrive.js points mfe's overdrive dep at the local build
bun run lint:tsgo                  # mfe's repo-wide type-check (turbo run lint:mfe); drop --affected if
                                    # needed to force a full, non-cached repo-wide pass — MUST stay clean
# The barrel (lib/components/index.ts + lib/index.ts) was widened with new exports only (additive,
# alphabetical) — confirm this does NOT break any of the mfe repo's 2,982 existing barrel imports.
```

**B. Post-publish (after the package's own minor is on npm):**
```bash
# 1. Throwaway branch in mfe — never commit/push this probe.
cd /Users/timamehro/grit/github.com/autoguru/mfe
git checkout -b throwaway/verify-<name>-vX.Y.Z

# 2. Manual version bump (single bun.lock — this is how the monorepo actually upgrades overdrive).
#    Bump @autoguru/overdrive to the just-published version in the relevant package.json(s), then:
bun install

# 3. New-component adoption probe — scratch-mount the new component in one RUNNING mfe app
#    (assume the app dev server is already started by the user; do not start one yourself).
#    e.g. in any page/component of a chosen app:
#      import { <Name> } from '@autoguru/overdrive';
#      <<Name> {...minimalDocumentedProps} />
#    Verify:
#      - it renders with the DS-2026 look under the DEFAULT base theme (no explicit theme= needed)
#      - keyboard/a11y sane per the component's §1.7 checklist (focus visible, operable, accessible name)
#      - the deep import also resolves and renders identically:
#          import <Name> from '@autoguru/overdrive/components/<Name>/default';
#    Then DELETE the probe code (do not leave it in the app).

# 4. Zero-regression check (net-new export ⇒ nothing else in the app should have changed):
#    - existing screens/components in the probed app render unaffected by the bump alone
#      (diff/screenshot before vs after the version bump, prior to adding the probe)
#    - FOR W2-P10 SPECIFICALLY (name the check): "existing Pagination byte-identical" —
#      mount an existing Pagination consumer with its current props (no `type` passed) and confirm
#      its rendered output/snapshot is byte-identical to pre-bump; this is the check that proves the
#      new opt-in `type` prop has zero effect on today's Pagination consumers.

# 5. Rollback (if anything above fails): pin bun.lock back to the previous overdrive version and
#    `bun install`, discard the throwaway branch. No other mfe file needs to change, since the bump
#    was additive-only.
git checkout -- <package.json files>   # revert the manual version bump
bun install                             # restores bun.lock to the pinned prior version
git checkout main && git branch -D throwaway/verify-<name>-vX.Y.Z
```

**Pass criteria:** A green, B.2–B.4 all pass, and the throwaway branch/probe is deleted (B.5) whether or not a rollback was needed. Record the result (pass/fail + probe app used) in the package's PR or Verify-agent report.

---

## 2. Per-package sections (W2-P1 … W2-P10)

Token mappings below are **the best first mapping**; entries marked **(confirm)** are for the Spec agent to verify against bound variables in Figma and flag if wrong. All hex are from master §3.1 / research (bound variables).

---

### W2-P1 — Avatar

**Figma:** Avatars frame `861:6134`; component `861:6176`. **OU:** OU-11/OU-12. **Depends on:** W1-P1, W1-P3. **Builder:** sonnet.
**Variant axes (Figma):** `Type={Initial, Icon, Profile pic} × Size={Small, Medium, Large} × Shape={Circle, Square} × Padding={Yes, No}`. Padding steps observed in Figma: 8px / 12px / 16px.

**Proposed props:**
```ts
export interface AvatarProps extends TestIdProp {
	/** What the avatar renders: user initials, an icon, or a profile image. */
	type?: 'initial' | 'icon' | 'profilePic';
	/** Avatar size. Interim S/M/L naming (master §6-Q4). @default 'md' */
	size?: 'sm' | 'md' | 'lg';
	/** Outline shape. @default 'circle' */
	shape?: 'circle' | 'square';
	/** Adds internal padding around the content (8/12/16px per size). @default false */
	padded?: boolean;
	/** Initials to display when `type='initial'` (1–2 chars recommended). */
	initials?: string;
	/** Icon to display when `type='icon'` (from `@autoguru/icons`). */
	icon?: IconType;
	/** Image URL when `type='profilePic'`. */
	src?: string;
	/** Accessible name — REQUIRED for icon/profilePic; used as `alt`/`aria-label`. */
	label?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```

**Surface → token mapping:**
| Surface | §3.1 token | Hex |
|---|---|---|
| Background (initial/icon) | `color.background.emphasisInactive` | `#EEF0F2` (confirm) |
| Initials / icon foreground | `color.foreground.primary` | `#212338` (confirm — could be `secondary` `#484C5F`) |
| Border (if any) | `color.border.default` | `#D4D9DD` (confirm — Figma may have no border) |
| Profile-pic background | none (image fill) | — |

**Radii / sizing:** circle → `border.radius.full` (50%); square → `border.radius.small` (8px) **(confirm 8 vs `medium` 12)**. Padding → `space[2]`/`space[3]`/`space[4]` (8/12/16px). Size (S/M/L) box dimensions: **Spec measures** and expresses via `width`/`height` sprinkles or fixed px in css (token-derived where a token exists). All grey-derived → **no ordering hazard**.

**Done-criteria:** all three types × 3 sizes × 2 shapes × padded/not render correctly; profilePic uses `<img alt>`; icon/initial use accessible `label`; grep gate empty; `yarn lint`/`test run Avatar`/`test:a11y` green; snapshot committed; changeset added; barrels + `default.ts` wired.

**Changeset summary:** `Add Avatar component (DS-2026): initial/icon/profilePic types, sm/md/lg sizes, circle/square shapes, optional padding.`

<details><summary><b>Agent prompts — W2-P1 Avatar</b></summary>

**SPEC (sonnet, Figma MCP)**
```
You are the Spec agent for W2-P1 — Avatar — in the Overdrive → DS-2026 migration.
You have Figma MCP access to file ZkQlQcJkF7NTnZomVrPRN5. Nodes: 861:6134 (frame), 861:6176 (component).
Produce a spec the Builder can implement WITHOUT Figma:
1. get_screenshot for 861:6176; save a reference in the spec.
2. get_design_context / get_metadata: for each Type(Initial/Icon/Profile pic) × Size(S/M/L) × Shape(Circle/Square) × Padding(Y/N) record box width/height, padding px (expect 8/12/16), corner radius, border width/colour if any, icon size, and initials typography (size/weight/line-height).
3. Map every colour surface to a token key from design-system-2026-migration-plan.md §3.1 (record surface → key → hex from BOUND VARIABLES, not swatch labels). Best-guess mapping to verify: background→color.background.emphasisInactive #EEF0F2; foreground→color.foreground.primary #212338; border→color.border.default #D4D9DD. If a surface has no §3.1 token, flag it — do NOT invent one.
4. Write docs/ds2026-specs/Avatar.md: screenshot ref, a variant×property table, the surface→token mapping, and ambiguities for the Reviewer (esp. square radius 8 vs 12, and whether initials use foreground.primary or .secondary).
Commit the spec with the PR. Write no component code.
```

**BUILDER (sonnet)**
```
You are the Builder for W2-P1 — Avatar. Repo: /Users/timamehro/grit/github.com/autoguru/overdrive. Create branch ds2026/w2-avatar off main.
HARD RULE (additive/opt-in): net-new component only. Do NOT change any existing token, prop default, component dir, or the ColourMap/ThemeTokens type shapes. No new peer deps.
SEMANTIC-TOKENS-ONLY: consume ONLY vars.color.* (import overdriveTokens as vars from ../../themes/theme.css) and the American-spelling sprinkles props (color/backgroundColor/border*Color) + layout sprinkles. NEVER vars.colours.*, NEVER the British sprinkles props (colour/backgroundColour/border*Colour), NEVER styledIntentionalElement/intentColorset/typography.colour/textStyles({colour}). No hardcoded colour/space/radius values.
FILES: scaffold lib/components/Avatar/ via `yarn plop component Avatar` then replace stubs; hand-create index.ts + default.ts; register in lib/components/index.ts AND lib/index.ts (alphabetical, append-only).
TARGET SHAPE: implement AvatarProps exactly as in wave-2.md §W2-P1 (type/size/shape/padded/initials/icon/src/label/className, extends TestIdProp). Compose Box; set odComponent="avatar"; forward testId; set Avatar.displayName.
DATA (verbatim — do NOT fetch Figma): master §3.1 tables + docs/ds2026-specs/Avatar.md. Mapping: bg→color.background.emphasisInactive; fg→color.foreground.primary; border→color.border.default; circle→border.radius.full; square→border.radius.small; padding→space[2/3/4]. Follow spec-file measurements for exact dimensions.
STEPS: (1) props+component; (2) recipe in Avatar.css.ts wrapped in cssLayerComponent, variants for size/shape/type/padded; (3) profilePic uses <img alt={label}>, icon/initial set accessible name; (4) stories (Standard, AllTypes, AllSizes, Shapes, Padded, Interaction/a11y) under an existing Storybook category; (5) spec .tsx (render-no-throw + snapshot); (6) barrels + default.ts + changeset (minor) with the summary in wave-2.md §W2-P1.
DONE: grep -n "colours\.\|backgroundColour\|sprinklesLegacy" lib/components/Avatar/ is empty; yarn lint clean; yarn test run Avatar green (snapshot committed); yarn test:a11y green.
Run the gates yourself before hand-off. Report what you built, gate results, and any assumption.
```

**REVIEWER (opus)**
```
You are the adversarial Reviewer for W2-P1 — Avatar. Inspect branch ds2026/w2-avatar. Produce PASS/FAIL with file:line evidence:
1. Any EXISTING token/prop-default/component-dir/export changed or removed? Must be NO (this is net-new; only additive barrel lines in lib/components/index.ts + lib/index.ts are allowed).
2. Semantic-tokens-only: `grep -n "colours\.\|backgroundColour\|sprinklesLegacy" lib/components/Avatar/` MUST be empty; also `grep -nE "\bcolour\b|border[A-Za-z]*Colour|styledIntentionalElement|intentColorset|typography\.colour" lib/components/Avatar/` empty. Any hex sourced from §3.1 bound variables (not labels)?
3. New peer dependency in package.json? Must be NO.
4. a11y: profilePic has alt; icon/initial have accessible name; sizes/shapes correct.
5. Ordering hazard: confirm Avatar uses only grey-derived tokens (background/foreground/border) — if any chromatic token (info/success/warning/alert) is used, it must be flagged in the PR. Expect NONE here.
6. Base-theme Chromatic zero-diff on pre-existing stories; new Avatar stories are new baselines.
FAIL if any of 1–3 is violated. Report specifics.
```

**VERIFY (sonnet)**
```
You are the Verify agent for W2-P1 — Avatar. On branch ds2026/w2-avatar, run and report objective PASS/FAIL per gate (do not fix):
  yarn lint
  yarn test run Avatar
  yarn test:a11y
The Avatar snapshot is a NEW baseline (net-new component) — its creation is expected, not churn. Confirm no OTHER component's snapshot changed. Confirm CI Chromatic (visual_test) status once the PR is open: new Avatar stories = new baselines; all pre-existing base-theme stories = zero-diff. Report results.
```
</details>

---

### W2-P7 — NotificationBadge

**Figma:** `632:2803`. **OU:** OU-11. **Depends on:** W1-P1. **Builder:** sonnet.
**Variant axes:** `Type={Number, Dot} × State × Size`.

**Proposed props:**
```ts
export interface NotificationBadgeProps extends TestIdProp {
	/** Number badge (shows count) or a bare dot indicator. @default 'number' */
	variant?: 'number' | 'dot';
	/** Count to display when `variant='number'`. Values above `max` render as `{max}+`. */
	count?: number;
	/** Cap after which the count is shown as `{max}+`. @default 99 */
	max?: number;
	/** Badge size. @default 'small' */
	size?: 'small' | 'large';
	/** Accessible label (e.g. "3 unread notifications"). */
	label?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```

**Surface → token mapping:**
| Surface | §3.1 token | Hex | Notes |
|---|---|---|---|
| Badge fill | `color.alert.foreground` | `#D42B26` | **(confirm)** notification red; ⚠ **chromatic → ordering hazard** |
| Number/label text | `color.foreground.reverse` | `#FFFFFF` | grey-derived |

**Radii/sizing:** pill/circle → `border.radius.pill` or `full`; dot has no text. **Spec measures** dot diameter + number badge min-width/height + text size.

**⚠ Ordering hazard:** uses `color.alert.foreground` (chromatic). Record in PR; Track C package touching `alert.*` must re-run NotificationBadge Chromatic. (If Spec finds the fill is actually a brand/grey, prefer that.)

**Done-criteria:** number (incl. `max+` overflow) + dot render; accessible label present; grep gate empty; gates green; snapshot + changeset + barrels wired; PR notes the chromatic-token hazard.

**Changeset summary:** `Add NotificationBadge component (DS-2026): number and dot variants with small/large sizes.`

<details><summary><b>Agent prompts — W2-P7 NotificationBadge</b></summary>

**SPEC (sonnet, Figma MCP)**
```
You are the Spec agent for W2-P7 — NotificationBadge. Figma file ZkQlQcJkF7NTnZomVrPRN5, node 632:2803.
1. get_screenshot 632:2803.
2. get_metadata/get_design_context: for Type(Number/Dot) × State × Size(Small/Large) record dot diameter, number-badge min width/height + padding, corner radius, and text typography.
3. Map surfaces to §3.1 (design-system-2026-migration-plan.md): best-guess fill→color.alert.foreground #D42B26, text→color.foreground.reverse #FFFFFF — VERIFY from bound variables. If the fill is not alert-red (e.g. a brand or grey), record the actual token; flag if none exists.
4. Write docs/ds2026-specs/NotificationBadge.md (screenshot, variant×property table, surface→token map, ambiguities). Note explicitly whether the fill is a chromatic token (ordering hazard). No component code.
```

**BUILDER (sonnet)**
```
You are the Builder for W2-P7 — NotificationBadge. Repo path as standard. Branch ds2026/w2-notificationbadge off main.
HARD RULE + SEMANTIC-TOKENS-ONLY: as in wave-2.md §1.6 (net-new only; vars.color.* + American sprinkles props only; NEVER colours.*/British props/legacy intent helpers/hardcoded values; no new peer deps).
FILES: `yarn plop component NotificationBadge`, replace stubs, hand-create index.ts + default.ts, register in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: implement NotificationBadgeProps exactly as wave-2.md §W2-P7 (variant/count/max/size/label/className, extends TestIdProp). count>max renders `${max}+`. Compose Box; odComponent="notification-badge"; forward testId; displayName set.
DATA (verbatim): master §3.1 + docs/ds2026-specs/NotificationBadge.md. Mapping: fill→color.alert.foreground (#D42B26); text→color.foreground.reverse (#FFFFFF); shape→border.radius.pill/full.
STEPS: props+component; recipe (variants variant/size) in cssLayerComponent; dot renders no text with role/aria; number sets aria-label; stories (Standard number, Dot, AllSizes, Overflow max+, Interaction/a11y); spec .tsx; barrels+default.ts+changeset (minor, summary in §W2-P7).
DONE: grep gate empty; lint clean; test run NotificationBadge green (snapshot committed); test:a11y green. RECORD in the PR body that this component uses the chromatic token color.alert.foreground (ordering hazard) so Track C re-runs its Chromatic.
Run gates before hand-off; report.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P7 — NotificationBadge, branch ds2026/w2-notificationbadge. PASS/FAIL with file:line:
1. No existing token/default/dir/export changed (only additive barrels). 
2. grep -n "colours\.\|backgroundColour\|sprinklesLegacy" lib/components/NotificationBadge/ empty; strict grep (§1.6) empty; hex from §3.1 variables.
3. No new peer dep.
4. Ordering hazard: this component uses a chromatic token (color.alert.foreground) — CONFIRM the PR body records the hazard note. If it does not, FAIL until added.
5. a11y: dot has an accessible name / role; number badge announces count; max+ overflow works.
6. Chromatic base-theme zero-diff on pre-existing stories.
FAIL if 1–3 violated, or if 4's hazard note is missing. Report.
```

**VERIFY (sonnet)**
```
Verify agent for W2-P7. Branch ds2026/w2-notificationbadge. Run + report PASS/FAIL per gate (do not fix): yarn lint; yarn test run NotificationBadge; yarn test:a11y. Snapshot is a new baseline. Confirm no other snapshot changed. Confirm CI Chromatic: new NotificationBadge baselines; pre-existing base stories zero-diff. Report.
```
</details>

---

### W2-P6 — ActivityBadge

**Figma:** `1006:16711`. **OU:** OU-11. **Depends on:** W1-P1. **Builder:** sonnet.
**Variant axes:** `Status={Active (green), Pending (amber), Inactive (red)}`. A small status dot/pill.

**Proposed props:**
```ts
export interface ActivityBadgeProps extends TestIdProp {
	/** Activity status → colour: active=green, pending=amber, inactive=red. */
	status: 'active' | 'pending' | 'inactive';
	/** Optional text label rendered beside the indicator. */
	label?: string;
	/** Accessible label if no visible `label` (e.g. "Active"). */
	'aria-label'?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```

**Surface → token mapping (⚠ all chromatic → ordering hazard):**
| Status | §3.1 token | Hex |
|---|---|---|
| active | `color.success.foreground` | `#01C68C` (confirm) |
| pending | `color.warning.foreground` | `#F69A1F` (confirm — amber) |
| inactive | `color.alert.foreground` | `#D42B26` (confirm — red) |
| label text (if any) | `color.foreground.primary` | `#212338` |

**Done-criteria:** three statuses render distinct colours; accessible name conveys status (colour is not the only signal — include text/`aria-label`); grep gate empty; gates green; snapshot + changeset + barrels; PR records chromatic-token hazard for `success`/`warning`/`alert`.

**Changeset summary:** `Add ActivityBadge component (DS-2026): active/pending/inactive status indicator.`

<details><summary><b>Agent prompts — W2-P6 ActivityBadge</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P6 — ActivityBadge. File ZkQlQcJkF7NTnZomVrPRN5, node 1006:16711.
1. get_screenshot 1006:16711.
2. get_metadata: for Status(Active/Pending/Inactive) record dot/pill dimensions, radius, gap-to-label, label typography.
3. Map to §3.1: active→color.success.foreground #01C68C; pending→color.warning.foreground #F69A1F; inactive→color.alert.foreground #D42B26 — VERIFY from bound variables; if the amber/green/red used are different tokens (e.g. .text or a gamut grade), record the actual token.
4. Write docs/ds2026-specs/ActivityBadge.md (screenshot, status×property table, surface→token map, ambiguities). Note all three fills are chromatic (ordering hazard). No code.
```

**BUILDER (sonnet)**
```
Builder for W2-P6 — ActivityBadge. Standard repo path. Branch ds2026/w2-activitybadge off main.
HARD RULE + SEMANTIC-TOKENS-ONLY per wave-2.md §1.6 (net-new; vars.color.* + American sprinkles only; no legacy; no new peer deps).
FILES: `yarn plop component ActivityBadge`, replace stubs, hand-create index.ts + default.ts, register in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: ActivityBadgeProps as wave-2.md §W2-P6 (status/label/aria-label/className, extends TestIdProp). Compose Box; odComponent="activity-badge"; forward testId; displayName.
DATA (verbatim): master §3.1 + docs/ds2026-specs/ActivityBadge.md. Mapping active→color.success.foreground; pending→color.warning.foreground; inactive→color.alert.foreground; label text→color.foreground.primary.
STEPS: props+component; recipe variants for status in cssLayerComponent; ensure status is conveyed by text/aria-label, not colour alone; stories (Standard, AllStatuses, WithLabel, Interaction/a11y); spec .tsx; barrels+default.ts+changeset (minor, summary §W2-P6).
DONE: grep gate empty; lint clean; test run ActivityBadge green (snapshot committed); test:a11y green. RECORD in PR body that this uses chromatic tokens (success/warning/alert.foreground) — ordering hazard.
Run gates; report.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P6 — ActivityBadge, branch ds2026/w2-activitybadge. PASS/FAIL + file:line:
1. No existing token/default/dir/export changed (additive barrels only).
2. grep gate empty; strict grep empty; hex from §3.1 variables.
3. No new peer dep.
4. Ordering hazard: uses chromatic success/warning/alert.foreground — CONFIRM PR records the hazard note (FAIL if absent).
5. a11y: status not conveyed by colour alone (text or aria-label present).
6. Chromatic base zero-diff on pre-existing stories.
FAIL if 1–3 violated or 4 note missing. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P6. Branch ds2026/w2-activitybadge. Run + report per gate: yarn lint; yarn test run ActivityBadge; yarn test:a11y. Snapshot = new baseline; confirm no other snapshot moved. Confirm CI Chromatic new baselines + pre-existing base zero-diff. Report.
```
</details>

---

### W2-P2 — Tag

**Figma:** Badges&tags frame `438:15329`; Tag `599:6080`. **OU:** OU-10/OU-11. **Depends on:** W1-P1. **Builder:** sonnet.
**Variant axes:** `State={Default, Hover, Pressed} × Size`. **Interactive filter chip — distinct from the static `Badge`.**

**Proposed props:**
```ts
export interface TagProps extends TestIdProp {
	/** Tag label text. */
	label: string;
	/** Tag size. @default 'small' */
	size?: 'small' | 'large';
	/** Renders the tag as an interactive button and wires up hover/pressed states. */
	onClick?: MouseEventHandler<HTMLButtonElement>;
	/** Reflects a selected/active filter state. @default false */
	selected?: boolean;
	/** Disables interaction. @default false */
	disabled?: boolean;
	/** Optional leading icon (from `@autoguru/icons`). */
	icon?: IconType;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```
> Default/Hover/Pressed are CSS states (`:hover`/`:active`/`:focus-visible`), not props. `selected` is the persistent chosen state.

**Surface → token mapping (grey-derived — no ordering hazard):**
| Surface | State | §3.1 token | Hex |
|---|---|---|---|
| Background | default | `color.background.emphasisInactive` | `#EEF0F2` (confirm) |
| Background | hover/pressed | `color.background.inactive` | `#D4D9DD` (confirm) |
| Background | selected | `color.background.reverse` | `#212338` (confirm) |
| Text | default | `color.foreground.primary` | `#212338` |
| Text | selected | `color.foreground.reverse` | `#FFFFFF` |
| Border | default | `color.border.default` | `#D4D9DD` (confirm) |

**Radii/sizing:** pill (`border.radius.pill`) or `small` — **Spec confirms**. Padding + text size per size axis: Spec measures.

**Done-criteria:** interactive (keyboard-operable button when `onClick`) + static rendering; hover/pressed/selected/disabled visuals; distinct from Badge; grep gate empty; gates green; snapshot + changeset + barrels.

**Changeset summary:** `Add Tag component (DS-2026): interactive filter chip with hover/pressed/selected states.`

<details><summary><b>Agent prompts — W2-P2 Tag</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P2 — Tag. File ZkQlQcJkF7NTnZomVrPRN5, nodes 438:15329 (frame), 599:6080 (Tag). Note: Tag is the INTERACTIVE filter chip, distinct from the static Badge (572:3980) — do not conflate.
1. get_screenshot 599:6080.
2. get_metadata: for State(Default/Hover/Pressed) × Size record height, padding, gap, corner radius, border width, icon size, text typography, and the per-state colour deltas.
3. Map to §3.1: bg default→color.background.emphasisInactive #EEF0F2; hover/pressed→color.background.inactive #D4D9DD; selected→color.background.reverse #212338; text→color.foreground.primary/#reverse; border→color.border.default — VERIFY from bound variables; flag any surface with no §3.1 token.
4. Write docs/ds2026-specs/Tag.md (screenshot, state×size×property table, surface→token map, ambiguities incl. radius pill-vs-small and whether there is a selected state). No code.
```

**BUILDER (sonnet)**
```
Builder for W2-P2 — Tag. Standard repo path. Branch ds2026/w2-tag off main.
HARD RULE + SEMANTIC-TOKENS-ONLY per wave-2.md §1.6.
FILES: `yarn plop component Tag`, replace stubs, hand-create index.ts + default.ts, register in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: TagProps as wave-2.md §W2-P2 (label/size/onClick/selected/disabled/icon/className, extends TestIdProp). When onClick given, render as <button> (keyboard-operable, :focus-visible ring); otherwise a non-interactive element. Hover/pressed via :hover/:active. odComponent="tag"; forward testId; displayName.
DATA (verbatim): master §3.1 + docs/ds2026-specs/Tag.md. Mapping per the §W2-P2 table.
STEPS: props+component; recipe (variants size/selected/disabled; base has :hover/:active/:focus-visible selectors) in cssLayerComponent; stories (Standard, Sizes, Selected, Disabled, WithIcon, Interaction play-fn asserting click + focus); spec .tsx; barrels+default.ts+changeset (minor, summary §W2-P2).
DONE: grep gate empty; lint clean; test run Tag green (snapshot committed); test:a11y green. Grey-derived tokens only — no ordering-hazard note needed.
Run gates; report.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P2 — Tag, branch ds2026/w2-tag. PASS/FAIL + file:line:
1. No existing token/default/dir/export changed (additive barrels only). In particular confirm the existing Badge component was NOT modified.
2. grep gate empty; strict grep empty; hex from §3.1 variables.
3. No new peer dep.
4. a11y: interactive tag is a real button, keyboard-operable, has :focus-visible; disabled prevents interaction.
5. Uses only grey-derived tokens (no chromatic) — confirm no ordering hazard.
6. Chromatic base zero-diff on pre-existing stories (incl. Badge).
FAIL if 1–3 violated. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P2 — Tag. Branch ds2026/w2-tag. Run + report per gate: yarn lint; yarn test run Tag; yarn test:a11y. Snapshot = new baseline; confirm Badge and all other snapshots unchanged. Confirm CI Chromatic: new Tag baselines, pre-existing base zero-diff. Report.
```
</details>

---

### W2-P3 — Skeleton

**Figma:** Skeleton states frame `772:26401`; component `834:8519`. **OU:** OU-10. **Depends on:** W1-P1, **W1-P3** (radius keys). **Builder:** sonnet.
**Variant axes:** `Loading={1,2} × Size={Large (8px corner), Small (4px corner), Circle}`.

**Proposed props:**
```ts
export interface SkeletonProps extends TestIdProp {
	/** Corner treatment / shape: large=8px, small=4px, circle=fully round. @default 'large' */
	shape?: 'large' | 'small' | 'circle';
	/** Number of stacked placeholder lines (text skeletons). @default 1 */
	lines?: 1 | 2;
	/** Explicit width (CSS length or token). Defaults to full width. */
	width?: string;
	/** Explicit height (CSS length or token). */
	height?: string;
	/** Accessible label announced while loading. @default 'Loading' */
	label?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```

**Surface → token mapping (grey-derived — no ordering hazard):**
| Surface | §3.1 token | Hex | Notes |
|---|---|---|---|
| Placeholder fill | `color.background.emphasisInactive` | `#EEF0F2` | (confirm) |
| Shimmer highlight (if animated) | `color.background.default` / gamut `gray100` | `#FFFFFF` / `#FAFBFC` | (confirm — Spec checks if there's a shimmer gradient) |

**Radii (uses new W1-P3 keys):** large → `border.radius.small` (8px); small → `border.radius.xsmall` (4px); circle → `border.radius.full`. **These `xsmall`/`small` aliases are added by W1-P3 — confirm they exist before building; if W1-P3 not merged, STOP.**

**Done-criteria:** three shapes + 1/2 lines render; `role="status"`/`aria-busy` + accessible label; uses W1-P3 radius keys; grep gate empty; gates green; snapshot + changeset + barrels.

**Changeset summary:** `Add Skeleton component (DS-2026): large/small/circle loading placeholders with 1–2 lines.`

<details><summary><b>Agent prompts — W2-P3 Skeleton</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P3 — Skeleton. File ZkQlQcJkF7NTnZomVrPRN5, nodes 772:26401 (frame), 834:8519 (component).
1. get_screenshot 834:8519.
2. get_metadata: for Loading(1/2) × Size(Large/Small/Circle) record dimensions, exact corner radii (expect 8px large, 4px small, full circle), line height/gap for multi-line, and whether there is a shimmer/pulse animation (record its colours + timing if so).
3. Map to §3.1: fill→color.background.emphasisInactive #EEF0F2; shimmer→(confirm) color.background.default #FFFFFF or gamut gray100 #FAFBFC. Radii map to W1-P3 keys: large→border.radius.small (8), small→border.radius.xsmall (4), circle→border.radius.full.
4. Write docs/ds2026-specs/Skeleton.md (screenshot, variant×property table, surface→token map, animation spec, ambiguities). No code.
```

**BUILDER (sonnet)**
```
Builder for W2-P3 — Skeleton. Standard repo path. Branch ds2026/w2-skeleton off main.
PRECONDITION: verify W1-P3 radius keys xsmall(4px)/small(8px) exist in lib/themes/theme.css.ts + base/tokens.ts. If absent, STOP and report (dependency not merged).
HARD RULE + SEMANTIC-TOKENS-ONLY per wave-2.md §1.6.
FILES: `yarn plop component Skeleton`, replace stubs, hand-create index.ts + default.ts, register in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: SkeletonProps as wave-2.md §W2-P3 (shape/lines/width/height/label/className, extends TestIdProp). role="status" + aria-busy + accessible label. odComponent="skeleton"; forward testId; displayName.
DATA (verbatim): master §3.1 + docs/ds2026-specs/Skeleton.md. Fill→color.background.emphasisInactive; radii via border.radius.small/xsmall/full. If Spec documents a shimmer, implement it with vars.animation.easing.* (no hardcoded timing where a token exists).
STEPS: props+component; recipe variants shape/lines in cssLayerComponent; stories (Standard, AllShapes, TwoLines, Interaction/a11y asserting aria-busy); spec .tsx; barrels+default.ts+changeset (minor, summary §W2-P3).
DONE: grep gate empty; lint clean; test run Skeleton green (snapshot committed); test:a11y green. Grey-derived only — no ordering-hazard note.
Run gates; report.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P3 — Skeleton, branch ds2026/w2-skeleton. PASS/FAIL + file:line:
1. No existing token/default/dir/export changed (additive barrels only).
2. grep gate empty; strict grep empty; radii use the W1-P3 keys (border.radius.small/xsmall/full), not hardcoded px; hex from §3.1 variables.
3. No new peer dep.
4. a11y: role="status"/aria-busy + accessible label present.
5. Grey-derived tokens only — confirm no chromatic/ordering hazard.
6. Chromatic base zero-diff on pre-existing stories.
FAIL if 1–3 violated. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P3 — Skeleton. Branch ds2026/w2-skeleton. Run + report per gate: yarn lint; yarn test run Skeleton; yarn test:a11y. New snapshot baseline; confirm no other snapshot moved. Confirm CI Chromatic new baselines + pre-existing base zero-diff. Report.
```
</details>

---

### W2-P4 — Breadcrumbs

**Figma:** Breadcrumbs&paginations frame `739:3390`; Breadcrumb `790:10025`. **OU:** OU-9. **Depends on:** W1-P1. **Builder:** sonnet.
**Variant axes:** `Size={Large, Small}`; children = crumb items with a separator.

**Proposed API (compound-lite — parent + item):**
```ts
export interface BreadcrumbsProps extends TestIdProp {
	/** Breadcrumb size. @default 'large' */
	size?: 'large' | 'small';
	/** Breadcrumb items (`BreadcrumbItem` elements). */
	children: ReactNode;
	/** Custom separator between crumbs. @default a chevron icon */
	separator?: ReactNode;
	/** Accessible label for the nav landmark. @default 'Breadcrumb' */
	'aria-label'?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}

export interface BreadcrumbItemProps extends TestIdProp {
	/** Link target; omit for the current (last) crumb. */
	href?: string;
	/** Marks this crumb as the current page (rendered as text, `aria-current="page"`). */
	current?: boolean;
	/** Crumb content. */
	children: ReactNode;
	/** Click handler (for router integration instead of `href`). */
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```
Export both `Breadcrumbs` and `BreadcrumbItem`. Structure: `<nav aria-label><ol><li>…crumb…</li></ol></nav>`.

**Surface → token mapping (grey-derived — no ordering hazard):**
| Surface | §3.1 token | Hex |
|---|---|---|
| Current (last) crumb text | `color.foreground.primary` | `#212338` |
| Inactive crumb link text | `color.foreground.secondary` | `#484C5F` (confirm) |
| Separator icon | `color.foreground.tertiaryInactive` | `#8F95A1` (confirm) |
| Link hover text | `color.foreground.primary` | `#212338` (confirm) |

**Done-criteria:** `nav`+`ol`/`li` semantics; last crumb `aria-current="page"` and non-link; large/small sizes; separators rendered between (not after last); grep gate empty; gates green; snapshot + changeset + barrels (both exports).

**Changeset summary:** `Add Breadcrumbs component (DS-2026): Breadcrumbs + BreadcrumbItem with large/small sizes.`

<details><summary><b>Agent prompts — W2-P4 Breadcrumbs</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P4 — Breadcrumbs. File ZkQlQcJkF7NTnZomVrPRN5, nodes 739:3390 (frame), 790:10025 (Breadcrumb).
1. get_screenshot 790:10025.
2. get_metadata: for Size(Large/Small) record text typography, gap, separator glyph/icon + size, and the colour of current vs inactive crumb vs separator, plus hover state.
3. Map to §3.1: current→color.foreground.primary #212338; inactive→color.foreground.secondary #484C5F; separator→color.foreground.tertiaryInactive #8F95A1 — VERIFY from bound variables; flag mismatches.
4. Write docs/ds2026-specs/Breadcrumbs.md (screenshot, size×property table, surface→token map, separator spec, ambiguities). No code.
```

**BUILDER (sonnet)**
```
Builder for W2-P4 — Breadcrumbs. Standard repo path. Branch ds2026/w2-breadcrumbs off main.
HARD RULE + SEMANTIC-TOKENS-ONLY per wave-2.md §1.6.
FILES: `yarn plop component Breadcrumbs`, replace stubs; add BreadcrumbItem.tsx + BreadcrumbItem.css.ts (or co-locate); hand-create index.ts (export Breadcrumbs, BreadcrumbItem + Props) + default.ts (export Breadcrumbs as default); register both in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: BreadcrumbsProps + BreadcrumbItemProps exactly as wave-2.md §W2-P4. Render <nav aria-label><ol><li>. Last/current crumb is text with aria-current="page"; others are links. Separators between items only. odComponent="breadcrumbs"; forward testId; displayName on both.
DATA (verbatim): master §3.1 + docs/ds2026-specs/Breadcrumbs.md. Mapping per §W2-P4 table; separator icon from @autoguru/icons (e.g. CaretRightIcon), aria-hidden.
STEPS: components; recipe variants size in cssLayerComponent; stories (Standard, Small, LongTrail, WithRouterOnClick, Interaction/a11y asserting nav landmark + aria-current); spec .tsx; barrels+default.ts+changeset (minor, summary §W2-P4).
DONE: grep gate empty; lint clean; test run Breadcrumbs green (snapshot committed); test:a11y green. Grey-derived only.
Run gates; report.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P4 — Breadcrumbs, branch ds2026/w2-breadcrumbs. PASS/FAIL + file:line:
1. No existing token/default/dir/export changed (additive barrels only).
2. grep gate empty; strict grep empty; hex from §3.1 variables.
3. No new peer dep.
4. a11y: nav landmark + aria-label; ol/li structure; current crumb aria-current="page" and not a link; separators aria-hidden.
5. Both Breadcrumbs and BreadcrumbItem exported from lib/index.ts.
6. Grey-derived only (no ordering hazard). Chromatic base zero-diff on pre-existing stories.
FAIL if 1–3 or 5 violated. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P4 — Breadcrumbs. Branch ds2026/w2-breadcrumbs. Run + report per gate: yarn lint; yarn test run Breadcrumbs; yarn test:a11y. New baseline snapshot; confirm no other snapshot moved. Confirm CI Chromatic new baselines + pre-existing base zero-diff. Report.
```
</details>

---

### W2-P10 — Pagination picker (augments existing `Pagination`)

**Figma:** Breadcrumbs&paginations frame `739:3390`; Pagination Picker `790:10316`; Page number `790:10048`. **OU:** OU-9. **Depends on:** W1-P1. **Builder:** **opus** (augmentation without breakage). **⚠ R6:** augment the **existing** `lib/components/Pagination/` dir — do NOT create a second directory.
**Variant axes:** `Type={Page sequence, Simple, Jump-to-page} × Selected position={First, Middle, Last}`; Page number `State={Default, Hover, Selected}`.

**Existing API (read first — `lib/components/Pagination/Pagination.tsx`):**
```ts
export interface PaginationProps {
	numPagesDisplayed?: number;
	activePage: number;
	total: number;
	pageSize: number;
	loading?: boolean;
	onChange?: TOnChangeEventHandler; // (event: { pageNumber: number }) => void
}
```
The existing component renders a page-number sequence (`Bubble`) with prev/next arrows and a `Loading` state. Its styles (`Pagination.css.ts`, `Bubble.tsx`) currently use **legacy** tokens (`vars.colours.*`, `backgroundColour="green900"`, `textStyles({ colour })`) — **Track C (W3c-P6 / C-P/3c-P6) repoints those; W2-P10 must NOT touch them.**

**Additive augmentation (do NOT break the current default):**
```ts
export interface PaginationProps {
	// …all existing fields unchanged…
	/**
	 * Presentation variant.
	 * - 'pageSequence' (default): the current numbered-bubble sequence (unchanged behaviour).
	 * - 'simple': compact prev/next with a "page X of Y" indicator.
	 * - 'jumpToPage': sequence plus a jump-to-page input, for >10 pages.
	 * @default 'pageSequence'
	 */
	type?: 'pageSequence' | 'simple' | 'jumpToPage';
}
```
- **`type` defaults to `'pageSequence'`** → existing consumers see **byte-identical** output (no default change; the field is optional). This is the additive contract.
- `'simple'` and `'jumpToPage'` are **net-new rendering paths** implemented in **new files** (e.g. `SimplePagination` already exists as a separate component — check whether to reuse it or add `Pagination/JumpToPage.tsx` + `Pagination/PageNumber.tsx`). New files/styles use **semantic tokens only**.
- Page-number `State` (Default/Hover/Selected) 2026 styling belongs to the **W3c-P6 restyle behind `ds2026`**, not here — W2-P10 adds the *new variants' structure/behaviour* using semantic tokens, but must keep the existing `pageSequence` visuals unchanged (base Chromatic zero-diff on existing Pagination stories).

**Surface → token mapping (new variants only; grey-derived — no ordering hazard):**
| Surface | §3.1 token | Hex |
|---|---|---|
| Page number selected bg | `color.background.reverse` | `#212338` (confirm — matches current green900? if not, keep new-path only) |
| Page number selected text | `color.foreground.reverse` | `#FFFFFF` |
| Page number default text | `color.foreground.secondary` | `#484C5F` (confirm) |
| Page number hover bg | `color.background.emphasisInactive` | `#EEF0F2` (confirm) |
| Jump-to-page input border | `color.border.default` | `#D4D9DD` |

**Done-criteria:** `type` prop added, default preserves current output exactly (existing Pagination snapshot **unchanged**, existing base Chromatic zero-diff); `simple` + `jumpToPage` render and call `onChange`; new files use semantic tokens only (existing legacy files untouched); grep gate empty **on the diff / new files**; gates green; new snapshots for the new variants; changeset + barrels (Pagination already exported — ensure new exports if any subcomponent is public).

**Changeset summary:** `Add Pagination picker variants (DS-2026): opt-in \`type\` (pageSequence default | simple | jumpToPage), additive — existing behaviour unchanged.`

<details><summary><b>Agent prompts — W2-P10 Pagination picker</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P10 — Pagination picker. File ZkQlQcJkF7NTnZomVrPRN5, nodes 739:3390 (frame), 790:10316 (Pagination Picker), 790:10048 (Page number).
1. get_screenshot for 790:10316 and 790:10048.
2. get_metadata: for Type(Page sequence/Simple/Jump-to-page) × Selected position(First/Middle/Last) record layout, and for Page number State(Default/Hover/Selected) record dimensions, radius, and per-state colours + text typography. Capture the Simple ("page X of Y") and Jump-to-page (input) structures.
3. Map to §3.1 (page-number selected bg→color.background.reverse #212338; selected text→color.foreground.reverse; default text→color.foreground.secondary; hover bg→color.background.emphasisInactive; input border→color.border.default) — VERIFY from bound variables; flag mismatches. Note whether the 2026 selected bg matches today's green900 (it likely does NOT — flag that the visual restyle belongs to W3c-P6, and W2-P10 only adds NEW variant structure).
4. Write docs/ds2026-specs/PaginationPicker.md (screenshots, type×position table, page-number state table, surface→token map, ambiguities). No code.
```

**BUILDER (opus)**
```
You are the Builder for W2-P10 — Pagination picker. Standard repo path. Branch ds2026/w2-pagination-picker off main.
CRITICAL (R6): AUGMENT the EXISTING lib/components/Pagination/ dir. Do NOT create a second Pagination directory. Do NOT edit or restyle the existing Pagination.tsx render path, Pagination.css.ts, or Bubble.tsx (those stay on legacy tokens until Track C W3c-P6). Read lib/components/Pagination/* first, and check lib/components/SimplePagination/ to decide reuse vs new.
HARD RULE (additive): the new `type` prop MUST default to 'pageSequence' and produce byte-identical output to today for existing consumers. Do NOT change any existing prop default or semantics. Existing Pagination snapshot must NOT change.
SEMANTIC-TOKENS-ONLY (new code only): new variant files consume ONLY vars.color.* + American sprinkles props. NEVER colours.*/British props/legacy helpers/hardcoded values in NEW code. (The existing legacy files are left as-is.)
FILES: extend PaginationProps in Pagination.tsx with the optional `type` union; add net-new files for the simple + jumpToPage paths (e.g. Pagination/PaginationPickerSimple.tsx + .css.ts, Pagination/JumpToPage.tsx + .css.ts, and a PageNumber for the new paths if needed) — all in the Pagination dir. Keep index.ts exporting Pagination (add any new public subcomponent exports); ensure lib/index.ts still re-exports Pagination.
TARGET SHAPE: the `type` addition + new-variant components per wave-2.md §W2-P10. onChange fires {pageNumber} for all variants.
DATA (verbatim): master §3.1 + docs/ds2026-specs/PaginationPicker.md. Mapping per §W2-P10 table.
STEPS: (1) read existing files; (2) add optional `type` (default 'pageSequence') that branches to existing render for the default; (3) build simple + jumpToPage as new files with semantic tokens in cssLayerComponent; (4) stories: KEEP existing stories untouched; ADD Simple, JumpToPage, Interaction/a11y (assert onChange + keyboard); (5) spec: keep existing spec passing; add tests for new variants; (6) changeset (minor, summary §W2-P10).
DONE: existing Pagination.spec snapshot UNCHANGED; new-variant snapshots created; `git diff` shows the grep gate patterns (colours.\|backgroundColour\|sprinklesLegacy) only in PRE-EXISTING lines, NEVER in added lines; lint clean; test run Pagination green; test:a11y green.
Run gates; report exactly which files you added vs the (unchanged) existing files.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P10 — Pagination picker, branch ds2026/w2-pagination-picker. PASS/FAIL + file:line:
1. R6: NO second Pagination directory created; existing Pagination.tsx/css.ts/Bubble.tsx render paths NOT restyled (diff them — only the additive `type` branch is allowed in Pagination.tsx).
2. Additive: `type` is optional and defaults to 'pageSequence'; existing consumers get identical output; NO existing prop default/semantic changed; existing Pagination snapshot UNCHANGED.
3. Semantic-tokens-only on NEW code: run `git diff main...HEAD -- lib/components/Pagination/` and confirm NO ADDED line matches `colours\.|backgroundColour|sprinklesLegacy` or the strict grep (§1.6). (Pre-existing legacy lines are fine.)
4. No new peer dep.
5. a11y: new variants keyboard-operable; jump-to-page input labelled; onChange wired.
6. Chromatic base zero-diff on the EXISTING Pagination stories (the whole point); new-variant stories = new baselines.
FAIL if 1, 2, or 3 violated. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P10 — Pagination picker. Branch ds2026/w2-pagination-picker. Run + report per gate: yarn lint; yarn test run Pagination; yarn test:a11y. CRITICAL: confirm the EXISTING Pagination snapshot did NOT change (only NEW-variant snapshots were added) — if the existing snapshot changed, that is a real regression, report FAIL. Confirm CI Chromatic: existing Pagination stories zero-diff, new-variant stories new baselines. Report.
```
</details>

---

### W2-P8 — StagesLoader

**Figma:** Loaders frame `772:26367`; Stages loader `825:8301` (**distinct from Progress "Stages" `816:8124`**). **OU:** OU-10. **Depends on:** W1-P1. **Builder:** sonnet.
**Variant axes:** `Stage={1,2,3,4}` (a 4-step progress loader).

**Proposed props:**
```ts
export interface StagesLoaderProps extends TestIdProp {
	/** The current active stage (1–4). */
	stage: 1 | 2 | 3 | 4;
	/** Total number of stages. @default 4 */
	totalStages?: number;
	/** Accessible label describing progress (e.g. "Step 2 of 4"). */
	label?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```

**Surface → token mapping:**
| Surface | §3.1 token | Hex | Notes |
|---|---|---|---|
| Completed / active stage | `color.success.foreground` | `#01C68C` | **(confirm)** ⚠ chromatic → ordering hazard; could be `color.foreground.primary` (grey) |
| Incomplete stage track | `color.background.inactive` | `#D4D9DD` | grey-derived (confirm) |

**Done-criteria:** renders 4 stages with `stage` filled up to the active index; `role="progressbar"` with `aria-valuenow/min/max` + label; grep gate empty; gates green; snapshot + changeset + barrels; **if the completed-stage colour is chromatic (`success`), record the ordering hazard in the PR.**

**Changeset summary:** `Add StagesLoader component (DS-2026): 4-stage progress loader.`

<details><summary><b>Agent prompts — W2-P8 StagesLoader</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P8 — StagesLoader. File ZkQlQcJkF7NTnZomVrPRN5, nodes 772:26367 (frame), 825:8301 (Stages loader). NOTE: distinct from Progress "Stages" 816:8124 — spec ONLY 825:8301.
1. get_screenshot 825:8301.
2. get_metadata: for Stage(1/2/3/4) record the number/shape of segments, dimensions, gap, radius, and completed-vs-incomplete colours + any animation.
3. Map to §3.1: completed→color.success.foreground #01C68C (VERIFY — could be grey color.foreground.primary); incomplete→color.background.inactive #D4D9DD. Source from bound variables; flag if the completed colour is grey vs green.
4. Write docs/ds2026-specs/StagesLoader.md (screenshot, stage×property table, surface→token map, ambiguities). Note whether completed colour is chromatic (ordering hazard). No code.
```

**BUILDER (sonnet)**
```
Builder for W2-P8 — StagesLoader. Standard repo path. Branch ds2026/w2-stagesloader off main.
HARD RULE + SEMANTIC-TOKENS-ONLY per wave-2.md §1.6.
FILES: `yarn plop component StagesLoader`, replace stubs, hand-create index.ts + default.ts, register in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: StagesLoaderProps as wave-2.md §W2-P8 (stage/totalStages/label/className, extends TestIdProp). role="progressbar" + aria-valuenow/min/max + accessible label. odComponent="stages-loader"; forward testId; displayName.
DATA (verbatim): master §3.1 + docs/ds2026-specs/StagesLoader.md. Completed→color.success.foreground (or grey per spec); incomplete→color.background.inactive.
STEPS: props+component; recipe variants stage in cssLayerComponent; stories (Standard, AllStages, Interaction/a11y asserting aria-valuenow); spec .tsx; barrels+default.ts+changeset (minor, summary §W2-P8).
DONE: grep gate empty; lint clean; test run StagesLoader green (snapshot committed); test:a11y green. IF completed-stage colour is chromatic (success), RECORD the ordering-hazard note in the PR body.
Run gates; report.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P8 — StagesLoader, branch ds2026/w2-stagesloader. PASS/FAIL + file:line:
1. No existing token/default/dir/export changed (additive barrels only).
2. grep gate empty; strict grep empty; hex from §3.1 variables.
3. No new peer dep.
4. Ordering hazard: if color.success.* is used, confirm the PR records the hazard note (FAIL if used-but-unrecorded).
5. a11y: role="progressbar" with valuenow/min/max + label.
6. Chromatic base zero-diff on pre-existing stories.
FAIL if 1–3 violated or 4 note missing. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P8 — StagesLoader. Branch ds2026/w2-stagesloader. Run + report per gate: yarn lint; yarn test run StagesLoader; yarn test:a11y. New baseline snapshot; confirm no other snapshot moved. Confirm CI Chromatic new baselines + pre-existing base zero-diff. Report.
```
</details>

---

### W2-P9 — FavouriteButton

**Figma:** Selection controls frame `428:15266`; Heart `428:15260`. **OU:** OU-8/OU-34. **Depends on:** W1-P1. **Builder:** sonnet.
**Variant axes:** `State={Default, Selected}`. **Naming decision: `FavouriteButton` (not "Heart") — record in the G-P1 ADR/decision log (master §6-Q8).**

**Proposed props:**
```ts
export interface FavouriteButtonProps extends TestIdProp {
	/** Whether the item is favourited. @default false */
	selected?: boolean;
	/** Called when the user toggles the favourite state. */
	onChange?: (selected: boolean) => void;
	/** Disables interaction. @default false */
	disabled?: boolean;
	/** Button size. @default 'md' */
	size?: 'sm' | 'md' | 'lg';
	/** Accessible label. @default 'Add to favourites' / 'Remove from favourites' */
	label?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```

**Surface → token mapping (uncertain — flag for Spec + §6):**
| Surface | §3.1 token | Hex | Notes |
|---|---|---|---|
| Filled (selected) heart | `color.alert.foreground` | `#D42B26` | **(confirm — no dedicated "favourite" token in §3.1)** ⚠ chromatic → ordering hazard; Spec must confirm the exact bound variable (may be a red grade or brand). |
| Outline (default) heart | `color.foreground.tertiaryInactive` | `#8F95A1` | grey-derived (confirm) |
| Hover | — | — | Spec measures |

**Done-criteria:** toggles `selected` (controlled via `onChange`, plus uncontrolled fallback OK); `role="button"`/`aria-pressed`; keyboard-operable; accessible label reflects state; grep gate empty; gates green; snapshot + changeset + barrels; **naming recorded in ADR; chromatic-fill ordering hazard noted in PR.**

**Changeset summary:** `Add FavouriteButton component (DS-2026): toggleable favourite (heart) control.`

<details><summary><b>Agent prompts — W2-P9 FavouriteButton</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P9 — FavouriteButton. File ZkQlQcJkF7NTnZomVrPRN5, nodes 428:15266 (frame), 428:15260 (Heart).
1. get_screenshot 428:15260.
2. get_metadata: for State(Default/Selected) [× any Size] record icon dimensions, and the fill colour for selected vs the outline colour for default, plus hover.
3. Map to §3.1: selected fill→(confirm exact bound variable; guess color.alert.foreground #D42B26 — there is NO dedicated favourite token, so FLAG this for §6); default outline→color.foreground.tertiaryInactive #8F95A1. Source from bound variables; if selected uses a non-§3.1 colour, record it and flag.
4. Write docs/ds2026-specs/FavouriteButton.md (screenshot, state×property table, surface→token map, ambiguities — esp. the selected fill token). Note the selected fill is likely chromatic (ordering hazard). No code.
```

**BUILDER (sonnet)**
```
Builder for W2-P9 — FavouriteButton. Standard repo path. Branch ds2026/w2-favouritebutton off main.
NAMING: the component is FavouriteButton (NOT Heart) — master §6-Q8; ensure the G-P1 ADR/decision log records this (note it in the PR if the ADR doesn't exist yet).
HARD RULE + SEMANTIC-TOKENS-ONLY per wave-2.md §1.6.
FILES: `yarn plop component FavouriteButton`, replace stubs, hand-create index.ts + default.ts, register in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: FavouriteButtonProps as wave-2.md §W2-P9 (selected/onChange/disabled/size/label/className, extends TestIdProp). Controlled via selected+onChange with uncontrolled fallback. Render a <button> with aria-pressed; heart icon from @autoguru/icons (filled vs outline). odComponent="favourite-button"; forward testId; displayName.
DATA (verbatim): master §3.1 + docs/ds2026-specs/FavouriteButton.md. selected fill per spec (likely color.alert.foreground); default outline→color.foreground.tertiaryInactive.
STEPS: props+component; recipe variants selected/disabled/size in cssLayerComponent (:focus-visible ring); stories (Default, Selected, Disabled, Interaction play-fn asserting toggle + aria-pressed + keyboard); spec .tsx; barrels+default.ts+changeset (minor, summary §W2-P9).
DONE: grep gate empty; lint clean; test run FavouriteButton green (snapshot committed); test:a11y green. RECORD in PR: (a) the FavouriteButton naming decision for the ADR, (b) the chromatic selected-fill ordering hazard.
Run gates; report.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P9 — FavouriteButton, branch ds2026/w2-favouritebutton. PASS/FAIL + file:line:
1. No existing token/default/dir/export changed (additive barrels only).
2. grep gate empty; strict grep empty; hex from §3.1 variables (or, for the selected fill, from a bound variable recorded in the spec + flagged to §6 if not in §3.1).
3. No new peer dep.
4. Ordering hazard: selected fill is chromatic — confirm the PR records the note. Naming: confirm PR records FavouriteButton (not Heart) for the ADR.
5. a11y: real <button>, aria-pressed reflects state, keyboard-operable, label reflects state, disabled prevents toggle.
6. Chromatic base zero-diff on pre-existing stories.
FAIL if 1–3 violated or 4's notes missing. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P9 — FavouriteButton. Branch ds2026/w2-favouritebutton. Run + report per gate: yarn lint; yarn test run FavouriteButton; yarn test:a11y. New baseline snapshot; confirm no other snapshot moved. Confirm CI Chromatic new baselines + pre-existing base zero-diff. Report.
```
</details>

---

### W2-P5 — SideNav (compound; largest)

**Figma:** Side nav frame `805:6172`; SideNav `812:7592`; option `812:7039`; section `812:7307`. **OU:** OU-9. **Depends on:** W1-P1. **Builder:** **opus** (compound API).
**Variant axes:** SideNav `Type={Text+icon, Icon only} × Selected option 1–4`; SideNavSection `Open={Yes, No}`; SideNavItem/option `Selected={Yes, No}` with states Default / Hover-Active.

**Compound API (parent + section + item — export all three):**
```ts
export interface SideNavProps extends TestIdProp {
	/** Layout: full text+icon rows, or an icon-only rail. @default 'textIcon' */
	type?: 'textIcon' | 'iconOnly';
	/** Nav content — `SideNavSection` and/or `SideNavItem` elements. */
	children: ReactNode;
	/** Accessible label for the navigation landmark. @default 'Main' */
	'aria-label'?: string;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}

export interface SideNavSectionProps extends TestIdProp {
	/** Section heading text. */
	label: string;
	/** Optional leading icon for the section heading (from `@autoguru/icons`). */
	icon?: IconType;
	/** Whether the section is expanded. @default true */
	open?: boolean;
	/** Called when the section is toggled (controlled disclosure). */
	onOpenChange?: (open: boolean) => void;
	/** Whether the section can collapse. @default true */
	collapsible?: boolean;
	/** `SideNavItem` children. */
	children: ReactNode;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}

export interface SideNavItemProps extends TestIdProp {
	/** Item label (hidden visually but kept for AT when parent `type='iconOnly'`). */
	label: string;
	/** Leading icon (from `@autoguru/icons`). */
	icon?: IconType;
	/** Marks this item as the current page. @default false */
	selected?: boolean;
	/** Link target; omit and use `onClick` for router integration. */
	href?: string;
	/** Click handler. */
	onClick?: MouseEventHandler<HTMLElement>;
	/** Disables the item. @default false */
	disabled?: boolean;
	/** Additional class names merged after the component's own styles. */
	className?: string;
}
```
- `type` is set on `SideNav` and consumed by descendants via context (React context is the house way to pass compound config — check how `Tabs`/`TabList` share state; SideNav should mirror that). When `iconOnly`, items render icon + visually-hidden `label` (still exposed to AT + as tooltip/`aria-label`).
- Structure: `<nav aria-label><ul>` with section groups; sections use the **disclosure pattern** (`button aria-expanded aria-controls` + region). Selected item gets `aria-current="page"`.
- Export `SideNav`, `SideNavSection`, `SideNavItem` (+ their Props). `default.ts` exports `SideNav`.

**Surface → token mapping (grey-derived — no ordering hazard):**
| Surface | State | §3.1 token | Hex |
|---|---|---|---|
| Item text/icon | default | `color.foreground.secondary` | `#484C5F` (confirm) |
| Item text/icon | selected | `color.foreground.primary` | `#212338` (confirm) |
| Item background | selected | `color.background.emphasisInactive` | `#EEF0F2` (confirm) |
| Item background | hover | `color.background.emphasisInactive` | `#EEF0F2` (confirm) |
| Section heading text | — | `color.foreground.tertiaryInactive` | `#8F95A1` (confirm) |
| Divider / rail border | — | `color.border.default` | `#D4D9DD` (confirm) |

**Done-criteria:** three components exported; `textIcon` + `iconOnly` layouts; collapsible sections (disclosure a11y); selected item `aria-current="page"`; keyboard-navigable; icon-only items have accessible names; grep gate empty; gates green; snapshots + changeset + barrels (all three exports).

**Changeset summary:** `Add SideNav component (DS-2026): SideNav + SideNavSection + SideNavItem, textIcon/iconOnly layouts.`

<details><summary><b>Agent prompts — W2-P5 SideNav</b></summary>

**SPEC (sonnet, Figma MCP)**
```
Spec agent for W2-P5 — SideNav. File ZkQlQcJkF7NTnZomVrPRN5, nodes 805:6172 (frame), 812:7592 (SideNav), 812:7039 (option), 812:7307 (section).
1. get_screenshot for 812:7592, 812:7039, 812:7307.
2. get_metadata: 
   - SideNav 812:7592: Type(Text+icon / Icon only) rail width, item height, gaps, dividers.
   - option 812:7039: Selected(Yes/No) + Default/Hover-Active states — item padding, icon size, text typography, and per-state bg + text/icon colours.
   - section 812:7307: Open(Yes/No) — heading typography/colour, disclosure caret, expanded/collapsed layout.
3. Map to §3.1: item text default→color.foreground.secondary #484C5F, selected→color.foreground.primary #212338; item bg selected/hover→color.background.emphasisInactive #EEF0F2; section heading→color.foreground.tertiaryInactive #8F95A1; divider→color.border.default #D4D9DD — VERIFY from bound variables; flag mismatches.
4. Write docs/ds2026-specs/SideNav.md (screenshots; three tables: SideNav layout, item states, section states; surface→token map; ambiguities). No code.
```

**BUILDER (opus)**
```
You are the Builder for W2-P5 — SideNav (compound, largest Wave-2 package). Standard repo path. Branch ds2026/w2-sidenav off main.
FIRST: study an existing compound component for the house pattern of sharing state across parts — read lib/components/Tabs/ (Tabs/TabList/Tab via context) and lib/components/BulletList/ (BulletList/Bullet). Mirror that context approach.
HARD RULE + SEMANTIC-TOKENS-ONLY per wave-2.md §1.6 (net-new; vars.color.* + American sprinkles only; no legacy; no new peer deps; use React Aria if it simplifies the disclosure/keyboard nav — it is an existing peer).
FILES: `yarn plop component SideNav`, replace stubs; add SideNavSection.tsx(+css.ts) and SideNavItem.tsx(+css.ts) and a SideNavContext; hand-create index.ts (export SideNav, SideNavSection, SideNavItem + Props) + default.ts (SideNav as default); register all three in lib/components/index.ts + lib/index.ts (alphabetical, additive).
TARGET SHAPE: SideNavProps + SideNavSectionProps + SideNavItemProps EXACTLY as wave-2.md §W2-P5. `type` on SideNav flows to descendants via context. iconOnly hides labels visually but keeps them for AT (visually-hidden + aria-label/tooltip). Structure: nav[aria-label] > ul; sections use disclosure (button aria-expanded/aria-controls + region); selected item aria-current="page". odComponent on each; forward testId; displayName on all three.
DATA (verbatim): master §3.1 + docs/ds2026-specs/SideNav.md. Mapping per §W2-P5 table.
STEPS: (1) context + SideNav; (2) SideNavSection (collapsible disclosure); (3) SideNavItem (link/button, selected, disabled); (4) recipes in cssLayerComponent with per-state selectors (:hover/:focus-visible) + selected variant; (5) stories (TextIcon, IconOnly, WithSections, SelectedItem, Collapsed, Interaction play-fn asserting keyboard nav + section toggle + aria-current); (6) specs; (7) barrels+default.ts+changeset (minor, summary §W2-P5).
DONE: grep gate empty across the dir; lint clean; test run SideNav green (snapshots committed); test:a11y green. Grey-derived only — no ordering hazard.
Run gates; report which files you created and how state flows through context.
```

**REVIEWER (opus)**
```
Adversarial Reviewer for W2-P5 — SideNav, branch ds2026/w2-sidenav. PASS/FAIL + file:line:
1. No existing token/default/dir/export changed (additive barrels only).
2. grep -n "colours\.\|backgroundColour\|sprinklesLegacy" lib/components/SideNav/ empty; strict grep empty; hex from §3.1 variables.
3. No new peer dep (React Aria reuse is fine — it is already a peer).
4. a11y: nav landmark + label; ul/li; sections are proper disclosures (button aria-expanded/aria-controls, region); selected item aria-current="page"; iconOnly items retain accessible names; full keyboard operability + :focus-visible.
5. All three (SideNav, SideNavSection, SideNavItem) exported from lib/index.ts; `type` correctly propagates via context to descendants.
6. Grey-derived only (no ordering hazard). Chromatic base zero-diff on pre-existing stories.
FAIL if 1–3 or 5 violated. Report.
```

**VERIFY (sonnet)**
```
Verify for W2-P5 — SideNav. Branch ds2026/w2-sidenav. Run + report per gate: yarn lint; yarn test run SideNav; yarn test:a11y. New baseline snapshots; confirm no other snapshot moved. Confirm CI Chromatic: new SideNav baselines, pre-existing base zero-diff. Report.
```
</details>

---

## 3. Gates, release & OU summary (all packages)

> Every row below ships its own minor and must pass **Post-release MFE verification** (§1.11) after its own publish — run once per package, not duplicated here.

| Package | Component | OU | Depends on | Changeset (minor) summary |
|---|---|---|---|---|
| W2-P1 | Avatar | OU-11/OU-12 | W1-P1, W1-P3 | Add Avatar component (DS-2026): initial/icon/profilePic types, sm/md/lg sizes, circle/square shapes, optional padding. |
| W2-P2 | Tag | OU-10/OU-11 | W1-P1 | Add Tag component (DS-2026): interactive filter chip with hover/pressed/selected states. |
| W2-P3 | Skeleton | OU-10 | W1-P1, W1-P3 | Add Skeleton component (DS-2026): large/small/circle loading placeholders with 1–2 lines. |
| W2-P4 | Breadcrumbs | OU-9 | W1-P1 | Add Breadcrumbs component (DS-2026): Breadcrumbs + BreadcrumbItem with large/small sizes. |
| W2-P5 | SideNav | OU-9 | W1-P1 | Add SideNav component (DS-2026): SideNav + SideNavSection + SideNavItem, textIcon/iconOnly layouts. |
| W2-P6 | ActivityBadge | OU-11 | W1-P1 | Add ActivityBadge component (DS-2026): active/pending/inactive status indicator. |
| W2-P7 | NotificationBadge | OU-11 | W1-P1 | Add NotificationBadge component (DS-2026): number and dot variants with small/large sizes. |
| W2-P8 | StagesLoader | OU-10 | W1-P1 | Add StagesLoader component (DS-2026): 4-stage progress loader. |
| W2-P9 | FavouriteButton | OU-8/OU-34 | W1-P1 | Add FavouriteButton component (DS-2026): toggleable favourite (heart) control. |
| W2-P10 | Pagination picker | OU-9 | W1-P1 | Add Pagination picker variants (DS-2026): opt-in `type` (pageSequence default / simple / jumpToPage), additive. |

**Release mechanics:** master Appendix A (changeset → merge to `main` → Version Packages PR → publish). Each Wave-2 minor accumulates toward the next `4.x` minor; no major here.

**Chromatic new-baseline expectation:** every Wave-2 PR introduces new stories → Chromatic records **new baselines** for them (nothing to "accept" against a prior baseline). The gate that matters is **zero-diff on all pre-existing base-theme stories** — a Wave-2 component must never alter shared tokens/globals. Never `autoAcceptChanges` off `main`.

**Chromatic-token (ordering-hazard) register — which Wave-2 components must be re-Chromaticked by Track C:**
| Package | Chromatic token(s) used | Track C package that must re-run its Chromatic |
|---|---|---|
| W2-P6 ActivityBadge | `color.success/warning/alert.foreground` | the C-P repoint(s) touching success/warning/alert base values |
| W2-P7 NotificationBadge | `color.alert.foreground` | the C-P repoint touching alert base value |
| W2-P8 StagesLoader | `color.success.foreground` (if used) | the C-P repoint touching success base value |
| W2-P9 FavouriteButton | selected-fill chromatic (likely `color.alert.foreground`) | the C-P repoint touching that token |
| W2-P1/P2/P3/P4/P5/P10 | none (grey-derived only) | — |

---

## Deviations & open items

Logged per the master's instruction ("never contradict it; log gaps here"). None of these change any master decision; they surface ambiguities for the Spec agents / design team / §6.

1. **Master §6-Q4 (size naming) — interim naming applied.** Avatar uses `sm/md/lg`; Tag/Breadcrumbs/NotificationBadge use `small/large` (matching Figma's Badge S/L). This is explicitly interim pending a unified scale (§6-Q4). No master conflict.
2. **Master §6-Q8 (FavouriteButton vs Heart)** — this plan names it `FavouriteButton` per master's stated engineering preference and instructs W2-P9 to record the decision in the G-P1 ADR log. If the design team rules "Heart", rename before the changeset lands (net-new dir, no MFE risk). *(Note: master §6 lists this as Q8 in the table but §4 W2-P9 row also references OU-8/OU-34 — consistent.)*
3. **Semantic sprinkles props are NOT wired to the Wave-1 namespaces.** The `color`/`backgroundColor`/`border*Color` sprinkles props still resolve to the older `color.content`/`color.surface`/`interactive` maps, **not** the W1-P1 `color.foreground/background/border/info/…` namespaces. So the §3.1 token mappings are implemented by referencing `vars.color.*` **directly in `.css.ts`**, not via sprinkles colour props. This is a real repo constraint, not a master contradiction — flagged so builders don't expect e.g. `<Box color="foreground.primary">` to work. A future Track C package (C-P1, sprinkles pivot) may extend the semantic sprinkles maps; until then, use `vars.color.*` in css.
4. **Chromatic-token base values may differ from Figma at Wave 2.** Per master §4.C, a chromatic semantic token's **base** value can later be flipped to a legacy value by a Track C repoint. Wave-2 components that use `info/success/warning/alert` (P6/P7/P8/P9) will then get a base-appearance change. The ordering-hazard register above records exactly which. This is the documented master hazard, surfaced concretely.
5. **W2-P9 selected-fill has no dedicated §3.1 token.** There is no "favourite"/heart colour in §3.1; best guess is `color.alert.foreground` (`#D42B26`). The Spec agent must read the actual bound variable from node `428:15260` and, if it is not a §3.1 token, flag it to master §6 (do not invent a token). Same caution applies to NotificationBadge's fill if it turns out not to be alert-red.
6. **W2-P10 grep-gate scoping.** The generic grep gate (`grep … lib/components/<Name>/`) cannot be empty for Pagination because the *existing* files are legacy (untouched here; Track C repoints them). W2-P10's Reviewer therefore runs the gate against the **diff / newly-added lines** (`git diff main...HEAD -- lib/components/Pagination/`), not the whole dir. This is a necessary refinement of the master's blanket grep for the one augmentation package (master §4 R6 mandates augmenting the existing dir).
7. **`yarn plop component` emits only 4 files.** `templates/component/` contains only `.tsx`/`.css.ts`/`.stories.tsx`/`.spec.tsx` templates — **no `index.ts`/`default.ts` template**, and the generated stubs are red placeholders that must be fully replaced. Builders must hand-create `index.ts` + `default.ts`. The master's "Shared work-order" file list (which lists `index.ts`, `default.ts`, `__snapshots__/`) is correct as the *target* file set; this note just clarifies the generator does not produce all of them. No conflict.
8. **Radius-key dependency for Avatar/Skeleton.** W2-P1 (square radius) and W2-P3 (8px/4px corners) rely on W1-P3's new radius keys (`xsmall`=4, `small`=8, `medium`=12). Master §5.2 already lists Wave 2 as depending on W1-P3, so builders should verify those keys exist before building and STOP if W1-P3 is not merged. (The legacy `sm`=4/`md`=8 keys also exist, but Wave-2 components should use the new DS-2026 alias names.)
9. **Spec files live under `docs/ds2026-specs/`** per master §4.0.2. This plan's spec output paths (`docs/ds2026-specs/Avatar.md`, etc.) follow that convention. The G-P1 governance package owns `docs/ds2026-specs/README.md` (the handoff protocol) — not created here.
