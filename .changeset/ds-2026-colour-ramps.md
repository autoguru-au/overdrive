---
'@autoguru/overdrive': minor
---

Adopt the AutoGuru Design System 2026 colour ramps. Values are sourced from the
[Figma palette](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=360-12804)
bound variables — `lib/themes/base/colours.ts` is the single source of truth in
code.

Adds the Design System 2026 contrast guide: the approved text-on-colour
combinations are exported as data (`contrastGuide` from
`lib/themes/base/contrastGuide.ts`), documented on the Foundation/Contrast Guide
Storybook page, and enforced by a spec that also audits every theme's semantic
and intent token pairings against WCAG AA (currently-failing legacy pairings are
documented in the spec pending design decisions).

**Deprecated:** the standalone `black` ramp was removed in Design System 2026 —
"Tarmac Black" is now `gray/900`. The `black*` tokens and their
`--od-color-gamut-black-*` CSS vars have been **removed** from the theme
contract; they are not aliased. Only the `backgroundColour="black900"` prop
value is retained, as a deprecated alias of `gray900` (#212338), so existing
`backgroundColour="black900"` usages keep resolving; it will be removed in the
Design System 2026 major release. Use `gray900` instead.
