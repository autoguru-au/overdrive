---
'@autoguru/overdrive': patch
---

fix(Table): restore the row hover wash on staggered rows (AG-22173)

A `TableRow` with `staggerIndex` set blanked every column to the left of the
pointer on hover, leaving only the columns after it readable.

The entrance animation ran with `animation-fill-mode: both`, so each cell
retained the animation's final `transform` for the life of the page. A retained
keyframe is an animated value, and the interpolation stack normalises it to a
transform matrix — enough to make every cell its own stacking context. That
trapped the row hover wash, a `z-index: -1` pseudo-element that has to escape
its cell and resolve against the `<table>`, so instead of sitting behind the row
it painted its full row width over the preceding columns.

The animation now uses `backwards`, which still holds rows hidden through their
stagger delay but retains nothing once they have arrived. The entrance is
visually unchanged.
