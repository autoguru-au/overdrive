---
'@autoguru/overdrive': minor
---

feat(themes): brand the `color.link.*` ramp per tenant and theme

`color.link.*` was the only link token family that neither `OverdriveProvider`'s
`colorOverrides` nor the alternate themes reached, so anything reading it
rendered base green regardless of branding.

- `useColorOverrides` now derives `color.link.{primary,hover,pressed}` from the
  tenant's `linkColor`, falling back to `primaryBackground` when no link colour
  is supplied — `linkColor` is the documented link override, so a brand that
  sets one expects linked text to follow it, and `primaryBackground` covers the
  common case where it is left unset. It is surface-corrected the same way
  `color.interactive.link` is, then `hover` and `pressed` step lighter by the
  same lightness deltas base uses between its own link states.
- **New `color.link.primaryOnLight` and `color.link.primaryOnDark`.** A link's
  legibility is decided by the surface it sits on, and no one value clears AA on
  both a white page and a gray900 header. A painted surface now repoints
  `color.link.primary` at whichever of the pair suits its own fill, the same way
  it already repoints `color.interactive.link` at `linkOnLight`/`linkOnDark`.
  Without this, linked text on a dark surface renders the light value — base
  `#18856f` is 3.39:1 on gray900, where the legacy token it replaces was
  surface-corrected and cleared AA. Both leaves are tenant-derived.
- `neutral` adds the brand trio in blue. Its gray and red ramps match base, so
  `secondary` and the `critical*` leaves stay inherited.
- `flat_red` adds the full set, because it redefines every ramp it uses — an
  inherited `secondary` would be base's `#212338` rather than its own `#263238`.

`secondary` and `critical`/`criticalHover`/`criticalPressed` are deliberately
not tenant-brandable: one is neutral ink, the others are semantic danger reds.

`TextLink` reads `color.link.primary` on both paths, so the surface pair applies
to every link; `secondary`, `hover`, `pressed` and the `critical*` trio are read
only by the opt-in `variant` path. No existing token name or value changes — the
two new keys are additive.
