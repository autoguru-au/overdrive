---
'@autoguru/overdrive': minor
---

Expose per-component default-export companion entries via the package `exports` map. Consumers can now `import('@autoguru/overdrive/components/X/default')` (or `import Component from '@autoguru/overdrive/components/X/default'`) and receive the named component as the module's default export.

This unlocks reliable code splitting under `React.lazy()` for downstream apps. The previous `import('@autoguru/overdrive/components/X').then(m => ({ default: m.X }))` pattern is fragile under Rollup's named-export tracking through dynamic-import namespaces — combined with the `sideEffects` allow-list and the `/*#__PURE__*/`-annotated `forwardRef` calls in component sources, Rollup can tree-shake the implementation file out of the lazy chunk, leaving callers with `default: undefined` at runtime. Importing the existing `default.js` companion via `/components/X/default` gives Rollup a direct default-export reference to track, eliminating that failure mode.

The change is purely additive — no existing import paths or behaviours change, and no component file's `sideEffects` status is altered.
