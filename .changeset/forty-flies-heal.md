---
'@autoguru/overdrive': minor
---

### Style props

- _Breaking change:_ Prop values are now camel case (e.g. `space-between`)
  instead of `spaceBetween`
- _Breaking change:_ Border property props where Top/Bottom/Left/Right was named
  last, are now named second (e.g. no longer `borderColourLeft`, now aligned to
  `borderLeftColour`)
- New colour tokens are mapped to props with `color` spelling, existing
  colours/intentional colours are still available with the `colour` spelling in
  props for backwards compatibility
- additional alias abbreviated props are available i.e. `px`, `mt` which are
  mapped to the existing

#### CSS layers introduced

- `@reset` contains base resets
- `@utility` contains the spinkles utility classes

### Components

**Box** - newly implemented with more powerful polymorphic type based on the
`as` prop, and exposes useBox for core logic.

- useBox returns the JSX component tag as well as the processed and filtered
  props. It also handles logic for determing a semantic child tag rather than
  repeated within various components
- useBoxStyles been replaced with `boxStyles` which handles the vanilla-extract
  sprinkles
- props `odComponent` and `testId` sets consistent data attribute for use at
  component root are exported as `CommonBoxProps`

**Stack** - reimplemented with useBox and flexbox for layout

**Inline** - reimplemented with useBox and flexbox for layout

**Columns** - reimplemented with useBox, style recipe and specialised
vanilla-extract sprinkes

Additionally, these components have been migrated to useBox with updated
polymorphic props:

- Button
- Section
- Tab
- VisuallyHidden
