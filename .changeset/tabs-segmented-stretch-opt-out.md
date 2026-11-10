---
'@autoguru/overdrive': minor
---

`Tabs`: `segmented` sizes each segment to its own label instead of clipping it.

`appearance="segmented"` set `flex: 1 0 0` on every tab and rendered the tablist
at `width: 100%`, so the segments always split the container evenly. Paired with
the variant's `min-width: 0` and `overflow: hidden`, a tab was free to shrink
below its own label and silently clip it — a bar of five uneven labels left the
longest with 6px of its 16px padding while the shortest carried 50px, and any
narrowing cut the longest label's first character.

Segments now start at their content width (`flex: 0 1 auto`,
`min-width: min-content`) and the bar hugs its tabs (`width: fit-content`), so
every tab keeps the same horizontal padding whatever its label. `max-content`
was not enough: it cannot shrink, so the bar overflowed and clipped the last tab
instead.

Because a segment can no longer shrink past its own label, a container narrower
than the bar now scrolls horizontally instead of hiding its trailing tabs, so
every tab stays reachable at any width.

Bar height is unchanged at 40px, `stretch` and `scrollable` behave exactly as
before on every other appearance, and `scrollable` with `segmented` still throws
the invariant it always did.

`TabPaneProps` and `TabPanesProps` are now exported from the package root
alongside the other Tabs prop types.

`TabList`'s existing `stretch` prop now works on `segmented` too: pass it to have
the bar fill its container. Segments still start at their own label's width
(`flex: 1 1 auto`) and share the leftover space evenly, so every segment carries
the same padding however wide the container is — the old `flex: 1 0 0` behaviour,
which split the container evenly and clipped whatever did not fit, is gone from
both modes.

**This changes how existing `segmented` tab bars render.** A bar that filled its
container now hugs its tabs unless it passes `stretch`. No prop was added,
removed or renamed.

`Tab`, `TabList`, `TabPane` and `TabPanes` also pick up the house component
conventions: each accepts an optional `testId`, each root carries a
`data-od-component` attribute, every prop now has JSDoc, and `TabPaneProps` and
`TabPanesProps` are exported from their component files (`TabPanes`' props type
was previously declared but not exported at all).
