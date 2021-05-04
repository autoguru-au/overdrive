# @autoguru/overdrive

## 2.2.8

### Patch Changes

-   75d6708: Checkbox: Accepts ref

    RadioGroup: Accepts ref

    Radio: Accepts ref

## 2.2.7

### Patch Changes

-   e004bff: Text: Gets capitalise text transform prop

## 2.2.6

### Patch Changes

-   b328760: Box: Gets padding reset for field and fieldset elements

    AutoSuggest: Gets fix for exception when clicking outside an open
    AutoSuggest

## 2.2.5

### Patch Changes

-   075e32e: useBoxStyles: Borders paddings and margins are no longer rest on
    block elements
-   075e32e: Heading: Gets explicit reset styles
-   6068142: AutoSuggest: Fixed undefined error caused by blurring out of
    AutoSuggest

## 2.2.4

### Patch Changes

-   ee67f76: TextLink: Gets inline reset styles

    ProgressSpinner: Gets svg and block resets for the animates SVG

## 2.2.3

### Patch Changes

-   340da9a: Text: Gets explicit reset styles for span and p

    field: Gets explicit reset styles

    fieldset: Gets explicit reset styles

## 2.2.2

### Patch Changes

-   a3274cb: useBoxStyles: Applies base reset styles to div elements
-   a3274cb: TextAreaInput: Gets base input reset styles

## 2.2.1

### Patch Changes

-   0e10140: useBoxStyles: Base reset styles now spread individually into
    element type reset styles

## 2.2.0

### Minor Changes

-   667876a: **Checkboxes**: Disabled mode gets reduced opacity

    **Radio**: Disabled mode gets reduced opacity

## 2.1.9

### Patch Changes

-   252f512: Upgrades treat to latest
-   ca5cb40: **Heading**: Heading component _should_ pass all text style props
    down

## 2.1.8

### Patch Changes

-   d9b96c6: **StandardModal**: Fixes mobile view to be pinned to the bottom and
    table view is all rounded corners
-   99bc4f9: **Stepper**: Fixes extra re-render on each change

## 2.1.7

### Patch Changes

-   977a99f: **Section**: Introduces a new small option for width values

## 2.1.6

### Patch Changes

-   463422c: **Badge**: Fixes default text style colour incorrect style ordering
    ordering

## 2.1.5

### Patch Changes

-   42057f4: **Badge**: Fixes inverted text style colours and incorrect ordering
    caused by [treat](https://github.com/seek-oss/treat)

## 2.1.4

### Patch Changes

-   a54636d: **AutoSuggest**: Fix's it so if Suggestions is ever undefined or
    empty, that the nextFn doesnt fail
-   dec98ef: **StandardModal**: The main region to be wrapped in a flex to allow
    stretching children

## 2.1.3

### Patch Changes

-   c81a433: **SelectInput**: Fixes wrong prop type needed

## 2.1.2

### Patch Changes

-   1d4b39e: **SelectInput**: Increases target click area to cover the full
    width of component.

## 2.1.1

### Minor Changes

-   052a024: Corrected types to be more type safe and accurate.

    Notably `<Box>`. Seeing as we `createElement`, we fixed types to only allow
    `IntrinsicElements | JSXElementConstructor`. As such, any `"button"` or
    `TextLink` prop values will work. However, `<TextLink />` will not.

## 2.0.27

### Patch Changes

-   648ec6a: **Inputs:** Introduces `reserveHintSpace` prop—to _reserve_ the
    space that would otherwise be occupied by the hint text.

    Super useful in stacked forms with validation, so that page layout shifts
    don't occur.

## 2.0.26

### Patch Changes

-   dd3da7e: **Modal:** Introduces a focus-trap as well as correct some
    Concurrent Mode flickering.
-   dd3da7e: **Box:** Adds `opacity` prop

## 2.0.25

### Patch Changes

-   4ce4fc6: **NumberInput:** Adds support for the html `step` attribute.

## 2.0.24

### Patch Changes

-   8914008: **Box:** Adds `inlineFlex` as a display prop
-   5bbe87a: **Tabs:** Adds new renderInactivePanes prop to render tabs that are
    inactive.

    By default, TabPanes themselves only render when they are active. Sometimes
    in certain cases you'd want to preserve the local state within those tabs as
    a user switches between tabs. Setting `renderInactivePanes` on TabPanes will
    be rendered but visually hidden.

    **Example:**

    ```jsx
    <Tabs active={0}>
    	<TabList>
    		<Tab>tab 1</Tab>
    		<Tab>tab 2</Tab>
    	</TabList>
    	<TabPanes>
    		<TabPane>tab 1 content</TabPane>
    		<TabPane>
    			{/* Will still be in the DOM, and React comeponet to have state retained */}
    			tab 2 content
    		</TabPane>
    	</TabPanes>
    </Tabs>
    ```

-   7131a5f: **Tabs:** Fixes a visual quirk when indications are mixed with
    non-indicators

## 2.0.23

### Patch Changes

-   c585765: **Heading:** Adds an `id` prop which is applied directly to the
    underlying element

## 2.0.22

### Patch Changes

-   5c913cc: Box: Allow non-intrinsics as Box `is` prop as well. With this
    change you can send things in like `svg`'s, or other components themselves.
-   e11909f: Text: Adds a `text-transform` prop to allow uppercasing text

## 2.0.21

### Patch Changes

-   47335f6: Meta: FIxed issue where the icon and label would wrap
-   230367f: SimplePagination: Should be centered in it's parent. Seeing as it's
    parent spans 100% width, this centering is now explicit.

## 2.0.20

### Patch Changes

-   bf51bbe: Fix: Added missing re-exports from our "to-monorepo" migration

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

## 2.0.17

### Patch Changes

-   fbee5c0: AutoSuggest: Now has a full width wrapping box

## 2.0.16

### Patch Changes

-   6d9e5b5: Reset: Table reset is no longer global. So use `<Box is="table" />`

    ```diff
    -<table>
    +<Box is="table">
    ```

-   6d9e5b5: Inline: Supports alignX to position items on the x axis aka;
    `justifyContent`.
-   6d9e5b5: Reset: Globally set overflowX to hidden
-   c90d645: Stepper: When pressing Home/End it should no longer jump to the end
    of the page.
-   6d9e5b5: Table: Introduces Tables

    Implemented as a css-grid, so column widths are to be defined in
    gridTemplateColumns. All components in this scope accept a ref property.

    Please note! In order to remain structurally WAI-ARIA compliant; the
    `TableRowGroup` must be placed around the _traditional_ `tbody` and `thead`.

    **FEATURES**

    ### Example

    ```jsx
    <Table columnTemplate="repeat(2, auto)">
    	<TableRowGroup>
    		<TableRow>
    			<TableHeadCell>Col 1</TableHeadCell>
    			<TableHeadCell>Col 2</TableHeadCell>
    		</TableRow>
    	</TableRowGroup>
    	<TableRowGroup>
    		<TableRow>
    			<TableCell>Row 1, Col 1</TableCell>
    			<TableCell>Row 1, Col 2</TableCell>
    		</TableRow>
    		<TableRow>
    			<TableCell>Row 2, Col 1</TableCell>
    			<TableCell>Row 2, Col 2</TableCell>
    		</TableRow>
    	</TableRowGroup>
    </Table>
    ```

    ### Sticky Header

    ```diff
    -<Table columnTemplate="repeat(2, auto)">
    +<Table stickyHead columnTemplate="repeat(2, auto)">
        <TableRowGroup>
            <TableRow>
                <TableHeadCell>Col 1</TableHeadCell>
    ```

    ### Sorting Columns

    ```diff
    <Table columnTemplate="repeat(2, auto)">
        <TableRowGroup>
            <TableRow>
    -            <TableHeadCell>Col 1</TableHeadCell>
    +            <TableHeadCell sort="asc" onSortChange={}>Col 1</TableHeadCell>
    ```

    A column can only have _sort_ functionality when the `sort` prop is set to
    either `asc | desc | none`. An `onSortChange` callback when applied to the
    cell that allows observing this. This callback will send the _new_ sort to
    have applied to it. This is a stateless component, so make sure you wire the
    value back into `sort`.

    ### Row Clicking

    ```diff
    <Table columnTemplate="repeat(2, auto)">
        <TableRowGroup>
    -        <TableRow>
    +        <TableRow onClick={}>
                <TableHeadCell>Col 1</TableHeadCell>
    ```

    Please note; that if you're also tracking clicks of cell buttons, to check
    the currentTarget of whether to apply the callback.

## 2.0.15

### Patch Changes

-   5353a1a: Box: Added textAlign as a prop

    Worth noting that we want to deprecate the use of `align` in our
    `useTextStyles`. As it's now shifted to our box. The `align` prop will still
    remain on the `Text` component.

    **FEATURES**

    ```jsx
    <Box textAlign="center" />
    ```

-   715b035: Box: Added userSelect prop to disable selecting its content
-   987a68b: VisuallyHidden: Added brand-new component to visually hide content

    **FEATURES**

    ```jsx
    <VisuallyHidden>hello screen reader</VisuallyHidden>
    <Text>
        hello
        <VisuallyHidden is="span">screen reader</VisuallyHidden>
    </Text>
    ```

-   e2f4a5b: Text: Allow setting a display override

    **FEATURES**

    ```jsx
    <Text is="span" display="inlineBlock">
    	Im now block
    </Text>
    ```

-   175cb09: Icon: Child svg's are cloned and positioned to the size of the
    parent

## 2.0.14

### Patch Changes

-   5428b9e: LoadingBox: Exposes height and display box props

    **FEATURES**

    ```jsx
    <LoadingBox height="full" display="inlineBlock" />
    ```

-   e3e5aa9: Box: Display prop inline-block renamed to inlineBlock to be more
    consistent
-   a6530d5: Box: Supports sending in a height prop

## 2.0.13

### Patch Changes

-   df453b2: Badge: Applies a whiteSpace nowrap to badges, and now truncates
-   292692f: Section: Typing update such that width prop is actually optional
-   52c424f: Inline: Now wrap properly, and support a prop to enable/disable it.
-   e0a4291: Box: Introduces flex style props to `Box` and `useBoxStyles`

    **FEATURES**

    You can now send in `alignItems`,`flexDirection`, `flexGrow`, `flexShrink`,
    `flexWrap`, `justifyContent` to Box and useBoxStyles for whatever you like.

    We have specifically chosen `alignItems`, `flexDirection`, `justifyContent`
    as Responsive candidates as we've found the others won't have a responsive
    use case.

    ```jsx
    <Box display="flex" width="full" justifyContent="center">
    	<Button>Hello</Button>
    </Box>
    ```

## 2.0.12

### Patch Changes

-   62c7111: Stack: A Renamed prop from spacing to space

    eg:

    ```diff
    <Stack is="ul"
    -    spacing="3">
    +    space="3">
        <li>line 1</li>
        <li>line 2</li>
        <li>line 3</li>
    </Stack>
    ```

-   822863d: Inline: Supports inline dividers between elements.

    Supports, text, numbers or elements.

    **FEATURES**

    ```jsx
    <Inline dividers>
    	<Text>Mazda</Text>
    	<Text>CX3</Text>
    	<Text>Petrol</Text>
    	<Text>2020</Text>
    </Inline>
    ```

-   a0fce92: Text: Exposes a new white-space nowrap prop

    This is an **experimental** prop, we know of one use-case where this can be
    used, but will likely also appear on the Box.

    So do let us know if you're using this, and it hasnt worked in your
    use-case.

    **FEATURES**

    You can now pass a `noWrap` prop to any `<Text />` which applies a
    `white-space: nowrap` to itself.

    ```jsx
    <Text noWrap>I wont wrap</Text>
    ```

## 2.0.11

### Patch Changes

-   358fb4b: Tabs: Incorrectly importing treat files inside treat

## 2.0.10

### Patch Changes

-   0b6c621: Tabs: Adds `scrollable`, which scrolls the tabs horizontally on
    smaller devices.

    **FEATURES**

    ```jsx
    <Tabs>
    	<TabList scrollable>
    		<Tab>This</Tab>
    		<Tab>Tab</Tab>
    		<Tab>Might</Tab>
    		<Tab>Scroll</Tab>
    	</TabList>
    </Tabs>
    ```

-   729dfdd: Input: Notchless inputs will no longer break when part of a flex
    container

## 2.0.9

### Patch Changes

-   0b59110: Flatten fragments when provided as children

    Will now support fragments and otherwise boolean children that previously
    would not have worked:

    ```jsx
    <Stack>
    	<p>line 0</p>
    	{isEnabled && (
    		<>
    			<p>Line 1</p>
    			<p>Line 2</p>
    			<p>Line 3</p>
    		</>
    	)}
    	<p>line 4</p>
    </Stack>
    ```

    > which would have the past not had lines 1-3 spaced evenly.

    this was also true for: `Actions`, `Inline`, `TabList`, `TabPanes` and
    `Stack`. Which have been rectified.

## 2.0.8

### Patch Changes

-   55ee559: Positioner: Removes usingPositioner

    **FEATURES**

    Removes the usingPositioner HoC in favour of a plain-old component that'll
    gives us the ability to send _all_ our Box props onto it. It also aids in
    corrected aria-\* props.

## 2.0.7

### Patch Changes

-   b9a2c45: InputBase: Allow for notchless inputs

    **FEATURES**

    Sometimes the notch behavior won't work because of its context - much like
    an input that sits within a table, where the column already denotes what
    should be entered into the input.

    > Please be aware that this should be avoided, as in most cases we should
    > notch, so a user knows what's in the input especially when its defaulted.

-   7736914: Box: Adds an overflow prop and allows className to be clsx
    compatible

    **FEATURES**

    `ClassName` can now be sent in directly to Box instead of through clsx.

    eg.

    ```diff
    - <Box className={clsx(styles.one, styles.two)}>
    + <Box className={[styles.one, styles.two]}>
        Hello
    </Box>

    - <Box className={clsx({[styles.one]: maybeDoMe}, styles.two)}>
    + <Box className={[{[styles.one]: maybeDoMe}, styles.two]}>
        Hello
    </Box>
    ```

-   17d2354: Stack: Expose the Box width on Stack
-   475601c: Tabs: Now always fills the width of its parent

## 2.0.6

### Patch Changes

-   d1c6b09: responsiveProps: Fix argument where void is not the same as
    undefined

## 2.0.5

### Patch Changes

-   4df7e83: AutoSuggest: Introduce a autoWidth prop that either will size the
    flyout to either the width of the children, or the input.

    **FEATURES**

    `<AutoSuggest>` can now be given a `autoWidth` prop that will auto the width
    in relation to setting the width, or for it to be automatic.

    -   `autoWidth={true}` means, size the flyout to the width of flyout
        children "automatically"
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

-   378e5da: AutoSuggest: Input search types to remove the webkit clear button

    **FEATURES**

    When we reset input type searches, we incorrectly "hid" the webkit search
    buttons, this aims to correct that.

-   eb3cf9d: AutoSuggest: Support the usage of passing a ref down to the
    implemented input

    **FEATURES**

    `<AutoSuggest>` can now be given a ref which will be passed down to the
    underlying input.

    eg:

    ```tsx
    const myRef = useRef<HTMLInputElement | null>(null);

    <AutoSuggest ref={myRef} value={null} placeholder={'My AutoSuggest'} />;
    ```

-   bab9cd2: InputBase: Always full width the input wrapper

## 2.0.4

### Patch Changes

-   801c254: Positioner: Uses Popper.js to run the flyouts.

    **FEATURES**

    **`<Positioner />`** uses Popper.js, as it offers a wide array of
    performance improvements and caters for some edge-cases, like when the'yre
    nested etc.

    Few stats: we use popper-lite which is rated at 3.73Kb minified and
    compressed. Now getOptimalPosition was about 1.3Kb minified and compressed.
    However, it had a few holes, and when I looked at what it'll take to
    implement the features to solve the holes - we'd probably still beat the
    file size, but not by much...

    So with that once internal bandwidth increase this'll likely be revisited -
    and perhaps utilize `detectOverflow` as a roll-your-own solution.

-   0964a1d: useNegativeMargin: Correctly fill columns to their parents width

    **BUG FIXES** Columns were not completely filling its parent due to negative
    margins

## 2.0.3

### Patch Changes

-   15f486c: Modals: Now uses a shared `<Portal />` component.

    **FEATURES**

    **`<Portal />`** component allowing for shared Portaling of components to
    inside a container.

    Responsibility: Rendering a child into a container, which by default is
    `window.body`.

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

    **`<Modal />`** is in charge of handling a backdrop - which also directly
    uses the new `<Portal>` component.

    Responsibility: Renders a child into a Portal, with a backdrop and correct
    aria attributes applied.

    You can give this component `hideBackdrop?: boolean` prop to disable the
    backdrop. Also; if you wish to remove the fadeIn/fadeOut animation, a
    `transition?: boolean` can also be provided.

    -   Removes `<ModalPortal />` in favor of `<Modal />`
    -   Deprecated `withModal`, which could simply just use the Modal component

    Worth noting that a `role="presentation"` is applied to the `Modal`, so
    consumers should be applying a `role="none presentation"` to their direct
    parent, if you wish content to be read out.

    eg:

    ```jsx
    <Modal isOpen={true} onRequestClose={function() {}}>
    	<div>some content</div>
    </Modal>
    ```

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
