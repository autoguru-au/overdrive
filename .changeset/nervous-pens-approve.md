---
'@autoguru/overdrive': patch
---

Positioner: Uses Popper.js to run the flyouts.

**FEATURES**

**`<Positioner />`** uses Popper.js, as it offers a wide array of performance
improvements and caters for some edge-cases, like when the'yre nested etc.

Few stats: we use popper-lite which is rated at 3.73Kb minified and compressed.
Now getOptimalPosition was about 1.3Kb minified and compressed. However, it had
a few holes, and when I looked at what it'll take to implement the features to
solve the holes - we'd probably still beat the file size, but not by much...

So with that once internal bandwidth increase this'll likely be revisited - and
perhaps utilize `detectOverflow` as a roll-your-own solution.
