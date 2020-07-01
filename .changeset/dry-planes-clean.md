---
'@autoguru/overdrive': patch
---

Reset: Table reset is no longer global. So use `<Box is="table" />`

```diff
-<table>
+<Box is="table">
```
