---
'@autoguru/overdrive': minor
---

feat(themes): brand the `color.link.*` ramp per tenant and theme

`color.link.*` was the only link token family that neither `OverdriveProvider`'s
`colorOverrides` nor the alternate themes reached, so anything reading it
rendered base green regardless of branding.

- `useColorOverrides` now derives `color.link.{primary,hover,pressed}` from the
  tenant's `primaryBackground` — a brand's identity colour is the one it expects
  on its links, and a brand primary is always supplied where `linkColor` is
  optional. It is surface-corrected the same way `color.interactive.link` is,
  then `hover` and `pressed` step lighter by the same lightness deltas base uses
  between its own link states.
- `neutral` adds the brand trio in blue. Its gray and red ramps match base, so
  `secondary` and the `critical*` leaves stay inherited.
- `flat_red` adds the full set, because it redefines every ramp it uses — an
  inherited `secondary` would be base's `#212338` rather than its own `#263238`.

`secondary` and `critical`/`criticalHover`/`criticalPressed` are deliberately
not tenant-brandable: one is neutral ink, the others are semantic danger reds.

Only `TextLink`'s opt-in `variant` prop reads `color.link.*`, so this changes
nothing for a link that does not pass `variant`. The base theme is untouched.
