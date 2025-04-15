---
'@autoguru/overdrive': minor
---

**Breaking change** for `<OverdriveProvider>` and other providers.
`<OverdriveProvider>` now contains all Overdrive theme options with optimised
state management. Both `<ThemeProvider>` context as well as
`<ThemeOverrideProvider>` values have been incorporated. Applications do not
need to be wrapped separate providers.

New peer dependency

- Added dependency `es-toolkit`

Provider Consolidation

- `ThemeProvider` and `ThemeOverrideProvider` have been replaced by a fallback
  provider to show deprecation warnings
- All theming functionality is now handled through `OverdriveProvider` including
  a combined component API

OverdriveProvider updates

- `theme` prop is now optional
- Colour overrides are passed as an object `colorOverrides` instead of
  individual props as in previous provider
- Some of the on-page behaviour of `ThemeOverrideDebugger` has been disabled

Data attribute and CSS Variables

- Theme application is now available using data attribute `data-od-theme=base`
- OD tokens are exposed globally in CSS variables

Reset updates

- Added `container` styles into resets
- Updated CSS reset
