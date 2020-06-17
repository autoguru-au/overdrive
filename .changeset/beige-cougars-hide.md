---
'@autoguru/overdrive': patch
---

Box: Added textAlign as a prop

Worth noting that we want to deprecate the use of `align` in our
`useTextStyles`. As it's now shifted to our box. The `align` prop will still
remain on the `Text` component.

**FEATURES**

```jsx
<Box textAlign="center" />
```
