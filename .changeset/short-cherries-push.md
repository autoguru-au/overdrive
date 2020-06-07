---
'@autoguru/overdrive': patch
---

Text: Exposes a new white-space nowrap prop

This is an **experimental** prop, we know of one use-case where this can be
used, but will likely also appear on the Box.

So do let us know if you're using this, and it hasnt worked in your use-case.

**FEATURES**

You can now pass a `noWrap` prop to any `<Text />` which applies a
`white-space: nowrap` to itself.

```jsx
<Text noWrap>I wont wrap</Text>
```
