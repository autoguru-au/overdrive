---
'@autoguru/overdrive': patch
---

Positioner: Removes usingPositioner

**FEATURES**

Removes the usingPositioner HoC in favour of a plain-old component that'll gives
us the ability to send _all_ our Box props onto it. It also aids in corrected
aria-\* props.
