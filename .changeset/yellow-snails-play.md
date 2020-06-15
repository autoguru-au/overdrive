---
'@autoguru/overdrive': patch
---

Box: Introduces flex style props to `Box` and `useBoxStyles`

**FEATURES**

You can now send in `alignItems`,`flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `justifyContent` to Box and useBoxStyles for whatever you like.

We have specifically chosen `alignItems`, `flexDirection`, `justifyContent` as Responsive candidates as we've found the others won't have a responsive use case.

```jsx
<Box display="flex" width="full" justifyContent="center">
    <Button>Hello</Button>
</Box>
```
