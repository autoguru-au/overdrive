---
'@autoguru/overdrive': patch
---

AutoSuggest: Introduce a autoWidth prop that either will size the flyout to
either the width of the children, or the input.

**FEATURES**

`<AutoSuggest>` can now be given a `autoWidth` prop that will auto the width in
relation to setting the width, or for it to be automatic.

-   `autoWidth={true}` means, size the flyout to the width of flyout children
    "automatically"
-   `autoWidth={false}` means to set to the width of the select input.

eg:

```jsx

// size to the width of the flyout children
<AutoSuggest
    placeholder="How are you?"
    suggestions={[{ text: "Im an item" }]}
    autoWidth
/>

// size to the width of the input (current behaviour)
<AutoSuggest
    placeholder="How are you?"
    suggestions={[{ text: "Im an item" }]}
/>

```
