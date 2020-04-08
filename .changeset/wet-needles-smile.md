---
'@autoguru/overdrive': patch
---

Modals: Now uses a shared `<Portal />` component.

**FEATURES**

**`<Portal />`** component allowing for shared Portaling of components to inside a container.

Responsibility: Rendering a child into a container, which by default is `window.body`.

eg:

```jsx
// Input
<div>
    some sibling
    <Portal>
        <div>my child</div>
    </Portal>
</div>

// Result
<body>
    <div>some sibling>
    <div>my child</div>
</body>
```

**`<Modal />`** is in charge of handling a backdrop - which also directly uses the new `<Portal>` component.

Responsibility: Renders a child into a Portal, with a backdrop and correct aria attributes applied.

You can give this component `hideBackdrop?: boolean` prop to disable the backdrop. Also; if you wish to remove the fadeIn/fadeOut animation, a `transition?: boolean` can also be provided.

- Removes `<ModalPortal />` in favor of `<Modal />`
- Deprecated `withModal`, which could simply just use the Modal component

Worth noting that a `role="presentation"` is applied to the `Modal`, so consumers should be applying a `role="none presentation"` to their direct parent, if you wish content to be read out.

eg:

```jsx
<Modal isOpen={true} onRequestClose={function () {}}>
    <div>some content</div>
</Modal>
```
