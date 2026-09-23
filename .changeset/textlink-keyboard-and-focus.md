---
'@autoguru/overdrive': minor
---

fix(TextLink): make action-only links operable, and ring every link on focus

Two keyboard defects, both reaching every consumer of the established
appearance.

**An action-only `TextLink` could not be reached at all.** `TextLink` always
renders an anchor, and an anchor with no `href` has no tab stop, no implicit
role and no activation behaviour — so a `TextLink` given only an `onClick` drew
a control that no keyboard user could operate. Where there is no `href` and an
`onClick` is present, the anchor now carries `role="button"`, `tabIndex={0}` and
an Enter/Space keydown handler.

Each default defers to whatever the consumer already set, so a trigger declaring
its own `role` keeps it and gains only the tab stop it was missing. An `href`
link is untouched, and a disabled link keeps `tabIndex={-1}`.

**The focus ring reached only the linked-text variants.** `focusOutlineStyle`
was applied in the `variant` branch alone, leaving every link using the
established appearance with no design-system focus indicator.

Both branches now ring from `color.link.primary` rather than the shared
`focusOutline`. The shared ring still draws from the legacy
`colours.foreground.link`, which measures 2.22:1 on a white page against the 3:1
WCAG 1.4.11 asks of a focus indicator — adopting it would have replaced the
browser's own high-contrast default with something harder to see.
`color.link.primary` is 4.54:1 there and already surface-aware. TextLink's ring
is therefore a different green from every other component's until C-P9 moves the
shared contract (docs/ds2026-plan/track-c.md §1.9), at which point the two
reconverge.

Additive — markup gains attributes on a shape that was previously inoperable,
and no existing prop changes. The `as` path is untouched: it never received the
root class list, and forwarding it now would restyle the consumer's own element.
