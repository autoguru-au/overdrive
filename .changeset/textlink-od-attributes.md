---
'@autoguru/overdrive': minor
---

feat(TextLink): add the standard component attributes

`TextLink` now carries the attributes every Overdrive component is expected to
expose:

- `data-od-component="text-link"` on the rendered anchor.
- A `testId` prop (`TestIdProp`), emitted as `data-testid`. On the `as` path it
  is passed straight through as `data-testid`, since the consumer's own element
  owns its `data-od-component`.

Also adds the JSDoc that `children`, `className`, `as` and `muted` were missing.
The `className` entry records a long-standing limitation rather than changing
it: on the `as` path, `className` is only applied when `variant` is set.

Additive — markup gains two attributes, and no existing prop changes.
