---
'@autoguru/overdrive': minor
---

fix(themes): make the hovered and pressed link states surface-aware

`color.link.primary` was repointed per surface, but `hover` and `pressed` were
not. Both were taken from lighter rungs of the same ramp, which gains contrast
on a dark header and loses it on a white page — so every hovered and pressed
link on a light surface sat below WCAG AA. Base pressed measured 1.62:1, flat
red 1.80:1 and neutral 2.21:1, against the 4.5:1 the criterion asks for.

- **New `color.link.hoverOnLight`/`hoverOnDark` and
  `color.link.pressedOnLight`/`pressedOnDark`**, repointed by a painted surface
  exactly as `primaryOnLight`/`primaryOnDark` already are. The light ramp
  deepens as a link is hovered and pressed, the dark ramp lightens, and both
  ends clear AA. The dark-surface values are the ones the ramp already used, so
  nothing on a dark fill changes.
- `useColorOverrides` derives a tenant's state colours per surface rather than
  always lightening, and checks the result rather than assuming it. The step
  distance is still measured off base's own ramp; only the direction is now
  decided by the surface, which is what sent every branded hover and press the
  wrong way on light fills.
- `flat_red`'s linked text moves off the brand green `#00c400`, which is 2.36:1
  on white — it can carry a fill but not text. The light surface takes the
  palette's darkest green; the dark surface keeps the brand value, which is
  already legible there. Its `color.link.critical` moves from `red700`
  (`#fb1e0d`, 3.97:1) to `red900` for the same reason.
- `neutral` gains the state pairs in blue.

`surfaceLinkVars.spec` now asserts that every linked-text state in every theme
clears AA on both `surface.page` and `surface.hard`, so a rung that drifts below
the line fails a test rather than a Chromatic run.

Read only by `TextLink`'s opt-in `variant` path and the surface vars, so the
blast radius is linked text. No token name or prop is removed.
