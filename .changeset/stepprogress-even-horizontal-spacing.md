---
'@autoguru/overdrive': patch
---

fix(StepProgress): space the horizontal steps evenly instead of by label width

The horizontal `steps` layout was a flex row where each step was as wide as its
own label and the caret sat in a fixed 20px cell glued to the end of it. The
distance between two circles therefore came out as `½ labelA + 20 + ½ labelB` -
a different number at every joint, and no caret at the midpoint of the pair it
joined. On a five-step row reading
`Account / Business / Fleet / Payment / MIC Setup` the gaps measured 84 / 72 /
71 / 90.

The list is now a `grid` with `grid-auto-columns: 1fr` at `width: max-content`.
Because the container is intrinsically sized, equal `fr` tracks resolve to the
widest step's content rather than to a share of the container, so every column
comes out the same width and the row still hugs its labels exactly as it did
before. The caret keeps its own box but pulls back half its width either side,
so its cell nets to nothing: the step takes the whole column, and the caret is
drawn straddling the seam between two columns - which is the midpoint of the two
circles either side of it. The same five steps now measure 116 / 116 / 116
/ 116.

Nothing is hardcoded and nothing is configured - the spacing is derived from the
copy, so it follows a translation or a content change on its own. The one floor
is structural: each step reserves the connector's own width either side of
itself, which stops a row of one-word labels collapsing onto the circle and
tucking the caret underneath it. A row labelled `A B C D` comes out at a 72px
pitch; a row with `Payment authorisation` in it comes out wider, still even.

No prop, type or DOM change - `layout`, `size`, `hideLabels` and the `stages`
variant are untouched, and the `vertical` layout still lays out in flow. The
rendered markup is identical; only the class names moved.

Downstream, a horizontal sequence gets wider by the reserved connector width at
each end and its steps redistribute. Anything that measured the component's box
or leaned on the old uneven pitch will shift; anything that just drops it into a
container will not.
