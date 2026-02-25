---
"@autoguru/overdrive": patch
---

fix(exports): add missing subpath exports and types condition for tsgo compatibility

- Add `EAlignment` re-export from `Positioner` index (alongside existing `EPositionerAlignment`)
- Add `useRadioContext` export from `Radio` index
- Add `BadgeProps` type export from `Badge` index
- Add `SprinklesColumnWidth` type export from `Columns` index
- Add `ProviderProps` type export from `OverdriveProvider` index
- Create public `HintText` component re-export (previously only available via private path)
- Add `./themes` and `./utils` barrel exports to package.json exports field
- Add explicit `./themes/base`, `./themes/flat_red`, `./themes/neutral` directory exports
- Add `./package.json` self-reference export for tooling compatibility
- Add `types` condition to `./dist/*` catch-all for strict TypeScript resolvers (tsgo)
