---
'@autoguru/overdrive': minor
---

Add `appearance="segmented"` to Tabs (DS-2026): an equal-width, bordered
segmented control with a filled selected segment, per the Figma "Toggle
navigation" component. `stretch` is implied, so the tab list always lays out as
flex; `scrollable` is rejected with an invariant, since overlapped borders and
end radii cannot survive scrolling.

The default stays `'underlined'`, so no consumer picks up the new style
implicitly. The three existing appearances keep their layout and selected-state
styling; the one change that reaches them is the idle text colour, below.

Also completes the DS-2026 token migration for Tabs (Track C, W3c-P4). The six
remaining legacy `colours.*` references in `Tab.css.ts` move to their semantic
equivalents, and the idle tab colour moves off `textStyles({ colour: 'light' })`
onto `color: 'secondary'` — passing the modern `color` prop suppresses the
legacy colour class entirely rather than falling back to its default.

The six `Tab.css.ts` swaps all resolve to the same hex on the base theme, so
those are visually unchanged. **Idle tab text is the one intentional pixel
change:** it darkens from gray600 `#5c6172` to `color.foreground.secondary`
`#484c5f`, which lifts contrast against white from 6.4:1 to 8.6:1. This affects
every appearance in every consumer, since it sits on the shared `Tab` element
rather than in a variant.

Tabs is now free of legacy `colours.*` references. Two of the repointed keys
(`colours.background.light`, `colours.background.neutral`) are ones tenant
themes override, and some sibling components still retain them for that reason —
so the indication badge on a tenant-themed MFE now takes the base value rather
than the tenant's. That is the intended direction here: the goal is a Tabs
component with no legacy token references left, not a partial migration.

The `flat_red` theme is the one exception. Semantic `color.*` tokens are pinned
to the base palette in every theme, whereas legacy `colours.*` resolved through
each theme's own gray ramp — and `flat_red` ships a different one (`#263238`
rather than `#212338`). Tab chrome therefore renders base-grey under that theme.
Nothing consumes it: its only dependents are the unreferenced `ampolTheme` and
`smartFleetTheme` packages.

Additionally exports `TabsProps`, `TabProps`, `TabListProps` and
`TabAppearance`, which were previously unreachable from the package root.
