---
'@autoguru/overdrive': major
---

`Switch` gains a `size` prop and a restyled set of states.

**Breaking — the default Switch is smaller.** `size` takes `medium` (38×20) or
`small` (30×16) and defaults to `medium`. Every Switch that does not pass `size`
shrinks from the previous 46×24, so layouts sized around the old track will
re-flow. The whole geometry derives from one track-height token per size, so
there are no hardcoded pixel values left.

**Breaking — hover no longer fills the track.** An unselected Switch used to
flood its track with the accent colour and scale the handle to `0.95`, which
read as already-on. It now takes a pale `color.brand.subtle` wash, an accent
border and a `z2` shadow under the handle. Hover comes from react-aria's
`useHover` as `data-hovered`, so it no longer sticks on touch devices.

The track carries a `border.width['1']` border in every state, and a disabled
Switch is fully neutral — the selected-and-disabled handle used to stay white on
a grey track.

`color.brand.subtle` is added to the theme contract, seeded to the pale
companion of `brand.solid` and derived at runtime for tenants that brand via
`colorOverrides`.

`SwitchProps` gains `odComponent`, stamping `data-od-component="switch"` on the
root, and every prop now carries JSDoc.

Switch is off the legacy `colours.*` contract: `colours.background.neutral` →
`color.background.inactive` and `colours.background.light` →
`color.background.emphasisInactive`. Both resolve to identical values in the
base and `flat_red` themes. Under the in-repo `neutral` theme the unselected
track moves from gray-400 to gray-300, because that theme overrides only the
legacy key.
