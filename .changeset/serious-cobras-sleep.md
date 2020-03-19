---
'@autoguru/overdrive': patch
---

Anchors are now cursor pointer by default

Seeing as we use `<TextLink />` or `<Box is="a" href="" />` in a few places, it only makes sense to use `a { cursor: pointer }`.
