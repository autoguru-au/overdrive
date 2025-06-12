---
'@autoguru/overdrive': patch
---

Technical uplift changes to the Box, Text and related components were manually
reverted to try and resolve instability with some instances of forms in
consumption.

- Classic Box has been simplified with style helper functions and exports
  `BoxProps`.
- All `forwardRef`s reinstated in components
- Style helper functions available `elementResetStyles` and `componentStyles`,
  where html tag css resets and vanilla-extract sprinkles are combined to
  replace `useBoxStyles` (now deprecated)
- New Box and useBox remains available in `components/Box/newBox/` during
  mitigation but should be considered unstable

#### Style props

- New colour tokens are mapped to props with `color` spelling, existing
  colours/intentional colours are still available with the `colour` spelling in
  props for backwards compatibility
- Values are in transition to camel case (e.g. `space-between` instead of
  `spaceBetween`) to align with CSS
- Border property props where the side Top/Bottom/Left/Right was placed last are
  now in transistion to be aligned with the CSS naming order (e.g.
  `borderLeftColor` instead of `borderColorLeft`)
- Abbrevitaion aliases are available for margin and padding i.e. `px`, `mt`
