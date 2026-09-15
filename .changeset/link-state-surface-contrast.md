---
'@autoguru/overdrive': minor
---

fix(themes): make the pressed link state surface-aware

`color.link.primary` was repointed per surface, but `hover` and `pressed` were
not. Both were taken from lighter rungs of the same ramp, which gains contrast
on a dark header and loses it on a white page — so every hovered and pressed
link on a light surface sat below WCAG AA. Base pressed measured 1.62:1, flat
red 1.80:1 and neutral 2.21:1, against the 4.5:1 the criterion asks for.

- **New `color.link.hoverOnLight`/`hoverOnDark` and
  `color.link.pressedOnLight`/`pressedOnDark`**, repointed by a painted surface
  exactly as `primaryOnLight`/`primaryOnDark` already are. The dark-surface
  values are the ones the ramp already used, so nothing on a dark fill changes.
  On a light surface `pressed` moves from `green400` (1.62:1) to `green900`
  (8.51:1).
- **Every value is a rung of the theme's own colour ramp** — no shaded hex
  outside the palette, so every swatch carries a name that matches Figma.
- **`hover` keeps Figma's `green700` on both surfaces, and stays below AA on a
  light one** (2.81:1). This is a design decision on AG-20713, not an oversight.
  `green800` and `green900` are the only two greens in the gamut above 4.5:1 on
  white and `primary` owns `green800`, so an AA-safe hover had to take
  `green900` — the same value as `pressed`, which left the two states
  indistinguishable on a pale page. Separating them needs a new rung between
  `green800` and `green900`; until there is one, the underline carries the state
  alongside the colour.
- `useColorOverrides` derives a tenant's state colours per surface rather than
  always lightening, and checks the result rather than assuming it. The step
  distance is still measured off base's own ramp; only the direction is now
  decided by the surface, which is what sent every branded hover and press the
  wrong way on light fills. A tenant's hover is AA-checked where base's is not,
  because an arbitrary brand hex has no ramp to be read off.
- `flat_red`'s resting linked text moves off the brand green `#00c400`, which is
  2.36:1 on white — it can carry a fill but not text. The light surface takes
  `green900`, the only green in that ramp above 4.5:1 there; the dark surface
  keeps the brand value, which is already legible. Both of its light-surface
  _states_ stay under the line as a result: the resting colour holds the one
  legible rung, and there is nothing darker for a state to move to. Its
  `color.link.critical` moves from `red700` (`#fb1e0d`, 3.97:1) to `red900`.
- `neutral` gains the state pairs in blue, and clears AA on every one.

`surfaceLinkVars.spec` asserts the resting colour clears AA in every theme
without exception, and records the expected AA result for each state per theme
rather than exempting them — so a rung that drifts off the recorded answer fails
a test in either direction, an unnoticed regression and a quiet fix alike.

Read only by `TextLink`'s opt-in `variant` path and the surface vars, so the
blast radius is linked text. No token name or prop is removed.
