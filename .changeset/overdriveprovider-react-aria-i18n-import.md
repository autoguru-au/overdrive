---
'@autoguru/overdrive': patch
---

Import `I18nProvider` from the `react-aria` umbrella instead of the granular `@react-aria/i18n` package in `OverdriveProvider`.

`react-aria` 3.46+ no longer pulls in `@react-aria/i18n` as a transitive dependency, so consumers on those versions had nothing to resolve the granular import to. Builds using Rolldown/Vite failed with `failed to resolve import "@react-aria/i18n"`, and setups that resolved a stale copy ended up with a duplicate `react-aria` instance, which surfaced as a runtime `Cannot read properties of undefined (reading 'useMemo')` crash on mount. Importing from the `react-aria` peer dependency we already declare keeps everything on a single instance.
