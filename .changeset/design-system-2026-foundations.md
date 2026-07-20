---
'@autoguru/overdrive': minor
---

feat: Design System 2026 foundations (opt-in, no visual change)

Lands the first wave of AutoGuru Design System 2026. Everything here is
**additive and opt-in** — existing components and MFEs render identically, so
teams can adopt the new tokens screen by screen.

**New design tokens**

- **Colour ramps** rebuilt from the DS-2026 Figma palette
  (`lib/themes/base/colours.ts` is the single source of truth), plus a contrast
  guide exported as data (`contrastGuide`) and a spec enforcing WCAG AA. The
  standalone `black` ramp is removed — "Tarmac Black" is now `gray/900`;
  `backgroundColour="black900"` is retained as a deprecated alias of `gray900`
  and will be removed in the DS-2026 major.
- **Semantic colour tokens** — foreground / background / border / info /
  success / warning / alert, plus **button colour tokens**.
- **Sprinkles colour parity** — the ramp and semantic namespaces are now exposed
  on `color` / `backgroundColor` / `border*Color` (legacy props unchanged).
- **Typography** — new named text styles `h1`–`h4` (line-height 1.25) and
  `p1`–`p4` (1.4), accepted by the `size` prop of `<Text>`, `<Heading>`,
  `textStyles()` and `typography()`; exported as `TEXT_STYLES`, `NamedTextStyle`
  and `namedTextStyleMap`. The legacy numeric size scale is unchanged.
- **Font weights** — new `medium` (500) weight; `semiBold` now maps to 600
  (was 500) to match Figma. Components that used `semiBold` were repointed to
  `medium`, so they render unchanged. Scale is now `normal` 400 · `medium` 500 ·
  `semiBold` 600 · `bold` 700. Code passing `weight="semiBold"` directly now
  renders at 600 — use `weight="medium"` to keep 500.
- **Space tokens** (AG-20128).
- **Radius & shadow** — DS-2026 radius aliases, a 20px radius, and z1–z4
  shadows. (Motion/focus tokens deferred — no Figma variables yet.)
- New Storybook pages: `Foundation/Typography` and `Foundation/Contrast Guide`.

**Internal repointing ("Track C") — pixel-identical, no API change**

Component internals were moved off the legacy `colours.*` / `typography.colour`
surface onto the new semantic `color.*` tokens, verified pixel-identical on the
base theme (intent and theme-variant refs are retained until the major):
Button, Tabs, Tooltip, Pagination, ProgressSpinner, Alert, OptionGrid,
OptionList, SearchBar, Popover, Calendar, Table, DataTable, Meta, Modal,
StandardModal, Flyout, StickyBox, LoadingBox, TextBubble, OrderedList,
BulletText/BulletList, EditableText, ScrollPane, ProgressBar/ProgressBarGroup,
SliderProgress, HorizontalAutoScroller, LinearProgressIndicator, AutoSuggest,
DateInput, DateTimeField, and the library-wide default text-colour path. The
semantic `color.gamut` now aliases the legacy gamut CSS vars so theme overrides
(flat_red, tenant themes) drive both identically.

**Deprecation**

The legacy colour surface (`colours.*`, `typography.colour`, legacy sprinkles
colour props, redundant radius keys) is deprecated — still exported and
functional until the DS-2026 major. ESLint now warns on new internal legacy
usage and will flip to `error` once the Track C burn-down reaches zero.
