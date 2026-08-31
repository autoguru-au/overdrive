---
'@autoguru/overdrive': minor
---

feat(themes): brand the DS-2026 `color.link.*` ramp per tenant and theme
(AG-20713)

`color.link.*` was the only link token family that neither `OverdriveProvider`'s
`colorOverrides` nor the alternate themes reached, so anything reading it
rendered base green regardless of branding.

- `useColorOverrides` now derives `color.link.{primary,hover,pressed}` from the
  tenant's `linkColor`. `primary` is the same surface-corrected value that
  already backs `color.interactive.link`; `hover` and `pressed` step lighter by
  the same lightness deltas base uses between its own link states.
- `neutral` adds the brand trio in blue. Its gray and red ramps match base, so
  `secondary` and the `critical*` leaves stay inherited.
- `flat_red` adds the full set, because it redefines every ramp it uses — an
  inherited `secondary` would be base's `#212338` rather than its own `#263238`.

`secondary` and `critical`/`criticalHover`/`criticalPressed` are deliberately
not tenant-brandable: one is neutral ink, the others are semantic danger reds.

No current rendering changes — the base theme is untouched and no component
reads `color.link.*` yet.
