# @autoguru/overdrive

## 2.0.2

### Patch Changes

-   6c3ae76: Tabs: Support stretching tablist items to the width of the
    container

    **FEATURES**

    **`<TabList />`**

    In small contexts, like sidebars, or mobile viewports with minimal tablist
    items. It makes sense to stretch items to meet the width of the container.

    eg:

    ```
    <Tabs>
        <TabList stretch>
            <Tab>Tab a</Tab>
            <Tab>Tab b</Tab>
        </TabList>
    </Tabs>
    ```

-   302405b: Alert: Inline is now full width

    **Features**

    `<Alert />`

    When passing the `inline` prop, in the past it was maxWidth 640px - which in
    inline contexts, you'd want to span the entire width of its container.

-   3bcf649: Adds the Inline and Section layout components

    **Features**

    Breakpoints have been amended to follow (mobile first):

    -   `tablet` is iPad Mini width less 25%, so any device greater than 768px
    -   `desktop` we are considering as iPad Pro width less 25%, so any device
        larger than 1024px
    -   `largeDesktop` is taken as a 1920x1080 less 25%, so any device larger
        than 1440px

    all at landscape.

    **`<Inline />`**

    When you're wanting to `inline` something. Like a badge list; you can use
    use the `<Inline />` component to solve this.

    eg:

    ```jsx
    <Inline>
    	<Badge colour="green" label="Success" />
    	<Badge colour="red" label="Danger" />
    	<Badge colour="blue" label="Information" />
    </Inline>
    ```

    **`<Section />`**

    A component that wraps its children, setting a `max-width` and centering on
    the screen. This will generally sit high up in the component tree. It offers
    2 widths `medium` and `large`. The medium width is intended for smaller more
    concise layouts - like our Afterpay landing, or Uber landing. Were as the
    `large` will probably be more for our Leads or Bookings list screens.

    When coupled with `Columns` we effectively have a full fletched layout
    system, that can 🤷‍ replace our `ContainedLayout` and `ContentOnlyLayout`
    internal components.

    To solve the `ThreeColumnLayout` and `TwoColumnLayout` we can build internal
    abstractions that extend this perhaps.

    eg:

    ```jsx
    <Section width="medium" paddingX={['3', , 'none']}>
    	<Columns space="3">
    		<Column width="2/3">...</Column>
    		<Column width="1/3">...</Column>
    	</Columns>
    </Section>
    ```

-   f9dac97: Inline: Supporting alignY responsive prop StarRating: Consumes
    `<Inline />`

    **FEATURES**

    **`<Inline />`**

    Now supports an alignY responsive prop to vertically center its items to
    either `top | center | bottom`, eg: `<Inline alignY="center">`

    **`<StarRating />`**

    Uses the `<Inline />` component instead of columns, so should use less DOM

## 2.0.1

### Patch Changes

-   c66b727: Anchors are now cursor pointer by default

    Seeing as we use `<TextLink />` or `<Box is="a" href="" />` in a few places,
    it only makes sense to use `a { cursor: pointer }`.

-   57b8cf3: Actions now filters out undefined or null children

    **`<Actions />`**

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

    **A few changes**

    -   `OverdriveProvider` must now be provider
    -   `ToastProvider` must also be provided when using a `useToast`
    -   `@autoguru/overdrive/reset` must be given first.

    ... and a whole series of other things. Please consult to the PR (#273) to
    get a better idea of what's changed.

### Patch Changes

-   230a3cd: Forces explicit text colours to Button hover and active states
