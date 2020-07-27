# @autoguru/overdrive

## 2.0.19

### Patch Changes

-   c13df61: StandardModal: Fixes the issue where a mouseup on the backdrop
    triggered the requestClose callback. Despite the click originating on the
    modal itself. So now the callback will not fire.

## 2.0.18

### Patch Changes

-   63d81e5: Major refactor of how `treat` files get used in our project.
    Instead of a redefinition of _shared_ styles such as margin/padding. We now
    instead prefer the usage of `useBoxStyles` or the `Box` component.

    There _should_ be no real regression in terms of usage api.

-   63d81e5: Box: pointerEvents value can now be passed to `Box` and
    `useBoxStyles` as 'none' or undefined.
-   63d81e5: BulletText: Now accepts an `is` prop, such that it's element can be
    changed. This is really because 9/10 times you'd be rendering this in a
    `Stack`, which already handles the `ul/li` couple.

    **FEATURES**

    ```jsx
    <Stack is="ul">
    	<BulletText>Point A</BulletText>
    	<BulletText>Point B</BulletText>
    </Stack>
    ```

    which already wraps each child in an `li`.
