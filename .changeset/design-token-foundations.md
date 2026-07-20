---
'@autoguru/overdrive': minor
---

**New design token foundations** 🎨

A refreshed set of colour, typography, spacing and elevation tokens lands in
Overdrive — opt-in, with **no visual change to existing apps**. Migrate a screen
onto the new system whenever you're ready, one component at a time.

### Added

- **Colour** — refreshed colour ramps (`lib/themes/base/colours.ts` is the
  single source of truth), **semantic tokens** (`foreground` · `background` ·
  `border` · `info` · `success` · `warning` · `alert`), **button colour
  tokens**, and a machine-readable **contrast guide** (`contrastGuide`) with a
  spec that enforces WCAG AA.
- **Typography** — named text styles on the `size` prop of `<Text>`,
  `<Heading>`, `textStyles()` and `typography()`: headings `h1`–`h4`
  (line-height 1.25) and paragraphs `p1`–`p4` (1.4). Exported as `TEXT_STYLES`,
  `NamedTextStyle`, `namedTextStyleMap`.
- **Font weights** — new **`medium` (500)**. Weight scale is now
  `normal` 400 · `medium` 500 · `semiBold` 600 · `bold` 700.
- **Spacing** — new space scale tokens.
- **Radius & elevation** — new radius aliases, a 20px radius, and `z1`–`z4`
  shadow tokens.
- **Sprinkles** — the ramp and semantic namespaces are now available on
  `color` / `backgroundColor` / `border*Color`.
- **Storybook** — new `Foundation/Typography` and `Foundation/Contrast Guide`
  pages.

### Changed

- **`semiBold` now maps to 600** (was 500). Components that used `semiBold` were
  repointed to `medium`, so they render unchanged — but if _your_ code passes
  `weight="semiBold"` directly, it now renders at 600. Use `weight="medium"` to
  keep the old 500.
- Component internals across the library — inputs, buttons, tabs, tooltips,
  overlays & menus, tables & grids, modals & containers, progress indicators,
  text/list components and date fields — were migrated onto the new semantic
  `color.*` tokens. **Pixel-identical on every theme** (`color.gamut` aliases
  the existing gamut CSS vars, so theme overrides drive the new tokens exactly
  as before); no public API changed.

### Deprecated

- The legacy colour surface (`colours.*`, `typography.colour`, legacy sprinkles
  colour props, redundant radius keys) — still exported and fully functional
  until the next major. ESLint now _warns_ on new internal legacy usage; it
  flips to _error_ once the migration completes.

### Removed

- The `black` ramp — use `gray900` instead. `backgroundColour="black900"`
  remains as a deprecated alias and is removed in the next major.
