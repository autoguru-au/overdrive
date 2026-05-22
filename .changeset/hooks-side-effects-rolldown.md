---
'@autoguru/overdrive': patch
---

Mark the `hooks/` subtree as side-effectful so bundlers evaluate it eagerly instead of deferring module init.

Why: Rolldown (the bundler under Vite 8) applies a deferred-init pattern to modules it considers side-effect-free. When a hook file is split into its own chunk and a consumer imports the hook function without also triggering the chunk's init wrapper, internal references (e.g. `React.useMemo` inside `useResponsiveValue`) resolve to `undefined` at call time and throw `Cannot read properties of undefined (reading 'useMemo')`. Adding the hooks paths to `sideEffects` forces eager evaluation and sidesteps the chunk-linking bug. CSS- and theme-side-effect entries are unchanged; tree-shaking of components and utils is not affected.
