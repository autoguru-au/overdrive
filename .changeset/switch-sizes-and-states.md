---
'@autoguru/overdrive': major
---

`Switch` is rebuilt to the DS 2026 spec: two sizes, and states that stop
pretending to be "on".

**Switches got smaller.** The new `size` prop takes `medium` (38×20) or `small`
(30×16) and defaults to `medium`. If you never passed `size`, your switches
shrink from the old 46×24. Anything sized around that footprint — fixed-width
table cells, tight flex rows, alignment hand-tuned against a label — will
re-flow, so it is worth a look at any screen with a switch in a list or a form
row.

**Hover no longer looks like on.** Hovering an _off_ switch used to flood the
track with the accent colour and shrink the handle, which was almost
indistinguishable from selected — people toggled switches that were already
where they wanted them. Hover is now a pale wash, an accent border and a soft
shadow under the handle. It also comes from react-aria's `useHover` now, so it
stops sticking after a tap on touch devices.

**Disabled finally looks disabled.** A switch that was both selected and
disabled kept a white handle on a grey track, so it still read as live. Disabled
is uniformly neutral in both states now.

**There is nothing to change in your code.** Every existing `<Switch />` keeps
working and the migration is purely visual. If a layout leaned on the old 46×24,
give it room — no `size` value reproduces the old dimensions.

Also in this release:

- `SwitchProps` is exported from the package root, so you can type your own
  wrappers without reaching into internals.
- The root element carries `data-od-component="switch"` for test and analytics
  selectors.
- `color.brand.subtle` joins the theme contract as the pale companion to
  `brand.solid`, derived at runtime for tenants branding via `colorOverrides`.
- Switch is off the legacy `colours.*` tokens. Values are identical in the base
  and `flat_red` themes; under the in-repo `neutral` theme the unselected track
  lightens from gray-400 to gray-300, because that theme only overrode the
  legacy key.
