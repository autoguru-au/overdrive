# @autoguru/overdrive

## 2.0.1

### Patch Changes

-   c66b727: Anchors are now cursor pointer by default

    Seeing as we use `<TextLink />` or `<Box is="a" href="" />` in a few places,
    it only makes sense to use `a { cursor: pointer }`.

-   57b8cf3: Actions now filters out undefined or null children

    `<Actions />`

    Removed the className prop, this will slowly start happening across the
    stack.

    ```diff
    -<Actions className="test">
    +<Actions>
        ...
    </Actions>
    ```

## 2.0.0

### Major Changes

-   8881bdd: Styles are now `treat` driven.

    ## A few changes

    -   `OverdriveProvider` must now be provider
    -   `ToastProvider` must also be provided when using a `useToast`
    -   `@autoguru/overdrive/reset` must be given first.

    ... and a whole series of other things. Please consult to the PR (#273) to
    get a better idea of what's changed.

### Patch Changes

-   230a3cd: Forces explicit text colours to Button hover and active states
