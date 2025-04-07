---
'@autoguru/overdrive': minor
---

**Breaking change** for `<OverdriveProvider>` and other providers.
`<OverdriveProvider>` now contains all Overdrive theme options with optimised
state management. Both `<ThemeProvider>` context as well as
`<ThemeOverrideProvider>` values have been incorporated. Applications do not
need to be wrapped separate providers.

The `theme` prop is now optional and defaults to the base theme. The colour
overrides are now passed as a single object to the `<OverdriveProvider>`
component.

Changes to Portal internals make it more predicatable, avoiding risky effects.
