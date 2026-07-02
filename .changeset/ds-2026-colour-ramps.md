---
'@autoguru/overdrive': minor
---

Adopt the AutoGuru Design System 2026 colour ramps. Values are sourced from the
[Figma palette](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=360-12804)
bound variables — `lib/themes/base/colours.ts` is the single source of truth in
code.

**Deprecated:** the standalone `black` ramp was removed in Design System 2026 —
"Tarmac Black" is now `gray/900`. The `black*` tokens (and
`--od-color-gamut-black-*` CSS vars) are aliased to the `gray` ramp for
backwards compatibility and will be removed in a future major release. Use
`gray*` instead.
