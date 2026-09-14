---
'@autoguru/overdrive': minor
---

feat(themes): give the DS-2026 `color.link.*` ramp per-theme values (AG-20713)

`color.link.*` was the only link token family the alternate themes did not
reach, so anything reading it rendered base green regardless of the active
theme.

- `neutral` adds the brand trio in blue. Its gray and red ramps match base, so
  `secondary` and the `critical*` leaves stay inherited.
- `flat_red` adds the full set, because it redefines every ramp it uses — an
  inherited `secondary` would be base's `#212338` rather than its own `#263238`.

`color.link.*` is theme-owned and not tenant-brandable. `OverdriveProvider`'s
`colorOverrides.linkColor` continues to repaint `color.interactive.link` and the
per-surface link pair, but does not reach the DS-2026 linked-text ramp — a
`TextLink` renders the active theme's link colour rather than the tenant brand.

The base theme is untouched, so its links are unchanged. Consumers on `neutral`
or `flat_red` will see `TextLink` pick up that theme's link colour instead of
base green.
