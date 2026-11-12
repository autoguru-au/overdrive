---
'@autoguru/overdrive': minor
---

`Tabs`: `segmented` can no longer clip a label, and gains a hug mode.

`appearance="segmented"` set `flex: 1 0 0` on every tab alongside `min-width: 0`
and `overflow: hidden`, so a segment was free to shrink below its own label and
silently clip it — a bar of five uneven labels left the longest with 6px of its
16px padding while the shortest carried 50px, and any narrowing cut the longest
label's first character.

The floor is now `min-width: min-content`, so a segment cannot shrink past its
own label. Segments still take equal width and the bar still fills its
container, exactly as before; a container too narrow for the labels now scrolls
horizontally instead of hiding or clipping them, so every tab stays reachable at
any width.

`TabList`'s existing `stretch` prop now applies to `segmented` as well, and
defaults to `true` there. Pass `stretch={false}` to size each segment to its own
label (`flex: 0 1 auto`) and have the bar hug its tabs (`width: fit-content`);
every segment then carries the same horizontal padding whatever its label.
`max-content` was not enough for that mode: it cannot shrink, so the bar
overflowed and clipped the last tab instead.

Bar height is unchanged at 40px in both modes, `stretch` and `scrollable` behave
exactly as before on every other appearance, and `scrollable` with `segmented`
still throws the invariant it always did. No prop was added, removed or renamed,
and no existing `segmented` bar changes how it renders unless it opts into
`stretch={false}`.

`Tab`, `TabList`, `TabPane` and `TabPanes` also pick up the house component
conventions: each accepts an optional `testId`, each root carries a
`data-od-component` attribute, every prop now has JSDoc, and `TabPaneProps` and
`TabPanesProps` are exported from their component files and from the package
root (`TabPanes`' props type was previously declared but not exported at all).
