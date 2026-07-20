---
'@autoguru/overdrive': minor
---

**Design System 2026 — foundations release** 🎨

The first wave of AutoGuru's Design System 2026 lands in Overdrive. This release
adds the new colour, type, spacing and elevation vocabulary — **without changing
how anything looks today**. Every new token is opt-in, so you can move a screen
onto DS-2026 whenever you're ready, one component at a time. Existing apps and
MFEs render exactly as before after upgrading.

### ✨ New design tokens

- **Colour** — full DS-2026 colour ramps, sourced 1:1 from the
  [Figma palette](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026)
  (`lib/themes/base/colours.ts` is the single source of truth). Adds **semantic
  tokens** (`foreground` · `background` · `border` · `info` · `success` ·
  `warning` · `alert`) and **button colour tokens**, plus a machine-readable
  **contrast guide** (`contrastGuide`) with a spec that enforces WCAG AA.
- **Typography** — new named text styles on the `size` prop of `<Text>`,
  `<Heading>`, `textStyles()` and `typography()`: headings `h1`–`h4`
  (line-height 1.25) and paragraphs `p1`–`p4` (1.4). Exported as `TEXT_STYLES`,
  `NamedTextStyle`, `namedTextStyleMap`.
- **Font weights** — new **`medium` (500)**. Weight scale is now
  `normal` 400 · `medium` 500 · `semiBold` 600 · `bold` 700.
- **Spacing** — DS-2026 space tokens (AG-20128).
- **Radius & elevation** — new radius aliases, a 20px radius, and `z1`–`z4`
  shadow tokens.
- **Sprinkles** — the ramp and semantic namespaces are now available on
  `color` / `backgroundColor` / `border*Color`.
- **Storybook** — new `Foundation/Typography` and `Foundation/Contrast Guide`
  pages.

### 🔧 Under the hood (Track C)

Component internals across the library — inputs, buttons, tabs, tooltips,
overlays & menus, tables & grids, modals & containers, progress indicators,
text/list components and date fields — were migrated off the legacy
`colours.*` / `typography.colour` surface onto the new semantic `color.*`
tokens. This is **pixel-identical on every theme**: `color.gamut` aliases the
legacy gamut CSS vars, so theme overrides (`flat_red`, tenant themes) drive the
new tokens exactly as they drove the old ones. No public API changed.

### ⚠️ Worth knowing before you upgrade

- **`semiBold` moved 500 → 600** to match Figma. Components that used `semiBold`
  were repointed to `medium`, so they look unchanged — but if _your_ code passes
  `weight="semiBold"` directly, it now renders at 600. Use `weight="medium"` to
  keep the old 500.
- **The `black` ramp was removed** — "Tarmac Black" is now `gray/900`. Use
  `gray900` instead. `backgroundColour="black900"` still works as a deprecated
  alias and is removed in the DS-2026 major.
- **Legacy colour surface is deprecated** (`colours.*`, `typography.colour`,
  legacy sprinkles colour props, redundant radius keys) — still exported and
  fully functional until the DS-2026 major. ESLint now _warns_ on new internal
  legacy usage; it flips to _error_ once the Track C burn-down hits zero.
