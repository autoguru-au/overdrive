---
'@autoguru/overdrive': minor
---

`StandardModal`: add optional `footer` slot rendered as a sticky footer with a
1px top divider. The slot takes any node — inner spacing, buttons and
close-on-click semantics are the consumer's, so a Save button that validates
or awaits an async call never closes the modal before the work finishes.

Add `ModalFooter`, a thin layout helper for the common right-aligned CTA
pattern: right-aligned row with a 12px gap and standard padding. Consumers
that want their own layout can drop the helper and put whatever they like in
the slot.

Example:

```tsx
<StandardModal
  isOpen={open}
  title="Add asset"
  onRequestClose={close}
  footer={
    <ModalFooter>
      <Button variant="secondary" onClick={close}>Cancel</Button>
      <Button variant="primary" onClick={submit}>Add asset</Button>
    </ModalFooter>
  }
>
  {body}
</StandardModal>
```
