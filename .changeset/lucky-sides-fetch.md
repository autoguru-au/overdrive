---
'@autoguru/overdrive': patch
---

- Text: the props `fontWeight`, `textTransform` and `textWrap` are simplified to
  `weight`, `transform` and `wrap`. Text now supports margin + padding style
  props
- The `testId` prop is more consistently rendered and tested for as
  `data-testid` attribute

The `useBoxStyles` and `useTextStyles` are now implemented by vanilla-extract
sprinkles:

- Instead of `useBoxStyles` consider importing `componentStyles` (aliased to
  `useBoxStyles` during transition)
- Instead of `useTextStyles` consider importing `typographyStyles` directly or
  use the replacement `textStyles` function

#### Updated style functions and types

Granular utilities for adding styles directly to an HTML element

- `componentStyles` is the full set of combined element reset styles, style
  props from vanilla-extract, and related logic processing for the `<Box>`
  primitive. Example use:
  `componentStyles({ as: 'div', padding: '2', borderTopWidth: '1' })`
- `resetStyles` provides baseline reset styles for an HTML element. Example use:
  `resetStyles('button')`

Types

- `StyleProps` is all allowed style props from vanilla-extract
- `LegacyStyleProps` for style props with `colour` spelling
- `LegacyTextColours`
