---
'@autoguru/overdrive': minor
---

**Style props**

- Prop values are now camel case (e.g. `space-between`) instead of
  `spaceBetween`
- Border property props where Top/Bottom/Left/Right was named last, are now
  named second (e.g. no longer `borderColourLeft`, now aligned to
  `borderLeftColour`)
- New colour tokens are mapped to props with `color` spelling, existing
  colours/intentional colours are still available with the `colour` spelling in
  props for backwards compatibility
- additional alias abbreviated props are available i.e. `px`, `mt` which are
  mapped to the existing

**CSS Layers**

- `@reset` contains base resets
- `@utility` contains the spinkles utility classes

#### Components

**Box** - refactored to use a polymorphic type based on the `as` prop, and
exposes useBox for core logic.

- useBox returns the JSX component tag as well as the processed and filtered
  props. It also handles logic for determing a semantic child tag rather than
  repeated within various components
- useBoxStyles been replaced with `boxStyles` which handles the vanilla-extract
  sprinkles
- props `odComponent` sets consistent data attribute for use at component root

**Stack** - reimplemented with useBox and flexbox for layout

**Inline** - reimplemented with useBox and flexbox for layout

**Columns** - BREAKING CHANGE converted columns to use css grid, reimplemented
with useBox

- Due to the way css grid is set with static number of columns, Columns have
  been converted to 12 col layout supporting 1/2, 1/3, 2/3, 1/4, 3/4, 1/6 widths
- 1/5, 2/5, 3/5, etc, widths are no longer available
