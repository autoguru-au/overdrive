---
'@autoguru/overdrive': patch
---

InputBase: Allow for notchless inputs

**FEATURES**

Sometimes the notch behavior won't work because of its context - much like an
input that sits within a table, where the column already denotes what should be
entered into the input.

> Please be aware that this should be avoided, as in most cases we should notch,
> so a user knows what's in the input especially when its defaulted.
