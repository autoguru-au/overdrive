---
'@autoguru/overdrive': minor
---

Add an opt-in `appearance` prop to `Button`, wiring the DS-2026 `color.button.*`
tokens.

`appearance` takes `solid`, `outlined` or `ghost` and applies to the three
classes the 2026 design covers — `variant` `primary`, `secondary` and `danger`.
It draws from the `color.button.*` contract at the 2026 sizes (28 / 36 / 46px),
weight (`semiBold`) and type ramp (`p1` / `p2`), and gives hover and pressed
their own values rather than sharing one.

**Nothing renders differently until a call site passes the prop.** The seven
existing `variant` intents, the default `medium` height of 48px, the `medium`
font weight and the established `minimal` / `outlined` / `rounded` appearance
are all untouched. `minimal` continues to win where both are set, and
`appearance` is ignored on any combination the design does not cover
(`primary`/`danger` + `ghost`, `secondary` + `solid`, and the four intents with
no 2026 design).

`ButtonAppearance` is exported so consumers can type their own wrappers. That
additive export surface, plus the new prop, is what makes this a minor.

Tenant branding reaches the new path. `useColorOverrides` now also writes
`color.button.primary.solid.*`: the brand lands verbatim on the border and the
pressed fill, and the resting and hover fills are tints of it, stepped by the
distance the base theme's own ramp covers rather than by a written-down number.
The label is contrast-picked against that derived tint, not against the brand —
picking it against the brand would put white on a pale fill for any dark brand.
`critical`, `secondary` and `disabled` stay unbranded by design; a tenant should
not be able to repaint danger red or neutral ink.

Two renames that look free are deliberately not taken, and are commented in
place. `border.radius.md` → `small` is byte-identical at 8px but `small` is
emitted after `pill` in the sprinkles stylesheet, so the swap would make the
base radius beat `rounded` and square off every pill button.
`typography.colour.secondary` → `color.button.secondary.text` is gray700 against
gray900, so it would darken every minimal secondary label. Both stay on the
legacy contract until it is removed.
