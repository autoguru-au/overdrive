---
'@autoguru/overdrive': patch
---

AutoSuggest: Support the usage of passing a ref down to the implemented input

**FEATURES**

`<AutoSuggest>` can now be given a ref which will be passed down to the
underlying input.

eg:

```tsx
const myRef = useRef<HTMLInputElement | null>(null);

<AutoSuggest ref={myRef} value={null} placeholder={'My AutoSuggest'} />;
```
