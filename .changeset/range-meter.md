---
'@autoguru/overdrive': minor
---

feat(RangeMeter): add a meter that shows one value against coloured zones

`RangeMeter` shows a horizontal track with coloured zones and a marker for one
value, for example a quoted price against the historical price range. It comes
from the pricing gauge in the FMO booking MFE, so that designers and MFEs have
one component for this pattern.

- Each zone has an `intent` (`neutral`, `success`, `warning` or `danger`) and an
  `end`. A zone starts where the previous zone ends, or at `min`.
- The meter clips the zones to the range. The part after the last zone is
  neutral.
- A value out of the range shows at the nearer end of the track.
- The meter has three parts: a header with `title`, the body with the track, and
  a footer with `footer`. The title is a heading, and `titleAs` sets the level
  (default `h2`). The meter has no border or card.
- The meter has the `meter` role. `title` or `aria-label` gives the name,
  `valueText` gives the announced value, and `footer` gives the description.

The component is new. MFEs do not need to change.
