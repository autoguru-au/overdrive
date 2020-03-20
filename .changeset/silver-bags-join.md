---
'@autoguru/overdrive': patch
---

## `<Actions />`

Actions now filters out undefined or null children

Also removed the className prop, this will slowly start happening across the stack.

```diff
-<Actions className="test">
+<Actions>
    ...
</Actions>
```
