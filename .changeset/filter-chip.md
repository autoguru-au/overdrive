---
'@autoguru/overdrive': minor
---

Add FilterChip component (DS-2026): interactive filter chip in select, numeric,
simple and add shapes, with hover/selected/focus states and a removable `×`.

Also overrides `color.focus.ring` in the `neutral` and `flat_red` themes so it
tracks each theme's existing focus colour, matching the ring every other
component draws through `focusOutlineStyle`.
