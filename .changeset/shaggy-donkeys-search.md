---
'@autoguru/overdrive': patch
---

fix(Table): paint the row hover wash on the cells (AG-22531)

The wash was a `z-index: -1` pseudo-element on the hovered cell, stretched to
`left/right: -1000%` so it escaped its own cell and resolved against the
`<table>`. That only held while no cell formed a stacking context. Any cell with
a `transform`, `position: sticky` plus a `z-index`, an `opacity` below 1 or
`isolation: isolate` trapped it, and the trapped pseudo-element then painted its
full row width *over* the columns beside it — blanking their text and
intercepting their pointer events.

`TableRow`'s entrance animation triggered exactly that. It ran with
`animation-fill-mode: both`, so every cell retained the final keyframe for the
life of the page; a retained frame is an animated value, and the interpolation
stack normalises even `transform: none` to `matrix(1, 0, 0, 1, 0, 0)`. Any row
with `staggerIndex` set was therefore unreadable on hover.

The wash is now a `background-color` on the cells themselves, selected with
`tr[data-hover]:has(> [data-hover]:hover)`. A cell's own background cannot be
trapped by a stacking context, so the whole class of bug goes — including a
consumer-applied sticky column, which previously hid its own row.

Two consequences worth noting:

- The `DataTable` override that pinned the pseudo-element to `left/right: 0` is
  removed. It had lower specificity than the rule it meant to beat and had never
  applied, so the overflow it documented was still live: hovering inflated the
  scroll container's `scrollWidth` to roughly 11,800px against a 1,888px client
  width. `DataTable` now gets a correct full-row wash and no phantom scroll.
- `TableRow`'s entrance animation uses `backwards` rather than `both`. Rows still
  stay hidden through their stagger delay and the entrance is visually
  unchanged, but cells no longer retain a transform once they have arrived.

A cell that sets its own opaque background still wins over the wash, as any
background does.
