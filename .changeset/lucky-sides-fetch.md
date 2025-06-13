---
'@autoguru/overdrive': patch
---

The `useBoxStyles` and `useTextStyles` are now implemented by vanilla-extract
sprinkles.

- Instead of `useBoxStyles` consider importing `componentStyles` (which is alias
  to `useBoxStyles` during transition)
- Instead of `useTextStyles` consider importing `typographyStyles` directly or
  use the replacement `textStyles` function
