---
'@autoguru/overdrive': patch
---

chore(TextLink): expose a story-only pressed-state class (AG-20713)

`TextLink.css` gains `storyForcePressed`, which replays each linked-text class's
`:active` declarations so a static matrix can show the pressed state without a
real pointer press. Hover needs no equivalent — `selectors.hover` already
matches `[data-hover]`.

It is driven off the same colour map the recipe uses, so the forced state cannot
drift from the real one. Three rules ship in the bundle, matching the existing
`storyForceHover` on `Switch`.

No rendering change: the linked-text recipe emits the same declarations as
before, and nothing applies the new class outside Storybook.
