---
'@autoguru/overdrive': minor
---

`StandardModal`: add optional `footer` slot rendered as a sticky footer with a
1px top divider. The slot takes any node — inner spacing, buttons and
close-on-click semantics are the consumer's, so a Save button that validates
or awaits an async call never closes the modal before the work finishes.

Add `ModalFooter`, the locked-down footer for the slot: one primary action and
an optional secondary action, right-aligned with a 12px gap and standard
padding. Button variant, size and ordering are fixed so every modal footer
looks the same — only the labels and click handlers are the consumer's.

Example:

```tsx
<StandardModal
  isOpen={open}
  title="Add asset"
  onRequestClose={close}
  footer={
    <ModalFooter
      primaryLabel="Add asset"
      onPrimaryClick={submit}
      secondaryLabel="Cancel"
      onSecondaryClick={close}
    />
  }
>
  {body}
</StandardModal>
```
