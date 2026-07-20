---
'@autoguru/overdrive': minor
---

**New design token foundations** 🎨

This release brings in a fresh set of colour, typography, spacing and elevation
tokens. Nothing looks different after you upgrade. The old tokens all still work,
so you can move your screens over to the new ones whenever it suits you, one
component at a time. There's no big-bang migration to plan for.

### Added

- **Colour.** Refreshed colour ramps, with `lib/themes/base/colours.ts` as the
  one place they live. Also adds semantic tokens you can reach for by meaning
  rather than by shade (`foreground`, `background`, `border`, `info`, `success`,
  `warning`, `alert`), button colour tokens, and a contrast guide
  (`contrastGuide`) that's checked against WCAG AA in the tests.
- **Typography.** New named text styles on the `size` prop of `Text`, `Heading`,
  `textStyles()` and `typography()`: `h1`–`h4` for headings and `p1`–`p4` for
  body copy. Also exported as `TEXT_STYLES`, `NamedTextStyle` and
  `namedTextStyleMap`.
- **Font weights.** Added a `medium` (500) weight. The full scale is now
  `normal` 400, `medium` 500, `semiBold` 600, `bold` 700.
- **Spacing.** New space scale tokens.
- **Radius and elevation.** New radius aliases, a 20px radius, and `z1`–`z4`
  shadows.
- **Sprinkles.** The colour ramp and the semantic tokens are now available on
  `color`, `backgroundColor` and the `border*Color` props.
- **Storybook.** New Foundation pages for Typography and the Contrast Guide.

### Changed

- **`semiBold` is now 600 instead of 500.** We repointed the components that
  used it to `medium`, so they look exactly the same as before. The only thing
  to watch: if your own code sets `weight="semiBold"`, it'll now render heavier
  at 600. Switch it to `weight="medium"` if you want the old 500.
- Rewired a lot of components to use the new semantic colour tokens under the
  hood (inputs, buttons, tabs, tooltips, menus and overlays, tables and grids,
  modals and containers, progress indicators, text and list components, date
  fields). It renders identically on every theme, and none of the public props
  changed, so you shouldn't notice anything.

### Deprecated

- The old colour setup (`colours.*`, `typography.colour`, the legacy sprinkles
  colour props, and some duplicate radius keys) is on its way out. It all still
  works and stays until the next major version. For now ESLint just warns if you
  reach for it in new code; that'll become an error once everything is moved
  over.

### Removed

- The `black` ramp is gone. Use `gray900` instead. If you're still on
  `backgroundColour="black900"` it keeps working as an alias for now, and goes
  away in the next major.
