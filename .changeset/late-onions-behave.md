---
'@autoguru/overdrive': patch
---

Adds the Inline and Section layout components

## `<Inline />`

When you're wanting to `inline` something. Like a badge list; you can use use the `<Inline />` component to solve this.

eg:

```jsx
<Inline>
    <Badge colour="green" label="Success" />
    <Badge colour="red" label="Danger" />
    <Badge colour="blue" label="Information" />
</Inline>
```

## `<Section />`

A component that wraps its children, setting a `max-width` and centering on the screen. This will generally sit high up in the component tree. It offers 2 widths `medium` and `large`. The medium width is intended for smaller more concise layouts - like our Afterpay landing, or Uber landing. Were as the `large` will probably be more for our Leads or Bookings list screens.

When coupled with `Columns` we effectively have a full fletched layout system, that can 🤷‍ replace our `ContainedLayout` and `ContentOnlyLayout` internal components.

To solve the `ThreeColumnLayout` and `TwoColumnLayout` we can build internal abstractions that extend this perhaps.

eg:

```jsx
<Section width="medium" paddingX={["3", ,"none"]}>
    <Columns space="3">
        <Column width="2/3">
           ...
        </Column>
        <Column width="1/3">
            ...
        </Column>
    </Columns>
</Section>
```
