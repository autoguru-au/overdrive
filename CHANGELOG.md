# @autoguru/overdrive

## 4.44.0

### Minor Changes

- 524c1b1: The `Text` component has been rebuilt with polymorphic `as` prop,
  consistent with Box. The `noWrap` prop has been deprecated as the `textWrap`
  style prop is available in uplifted components.
- 524c1b1: The Heading component has been improved to be consistent with Text
  and applies balanced text wrap. Anchor and TextLink have been updated to be
  consistent also.

## 4.43.5

### Patch Changes

- 7996070: Fix for the Columns missing default of `noWrap: false`

## 4.43.4

### Patch Changes

- a2118b7: **Columns** `alignSelf` prop switched to "top"/"bottom" to match
  existing usage
- a2118b7: Style props for `order`, `flexGrow`/`flexShrink` are now text unions
  instead of number

## 4.43.3

### Patch Changes

- b06610d: Using the legacy `is` prop on new polymorphic components will fail
  typechecking, convert to `as` prop

## 4.43.2

### Patch Changes

- 8731541: Default exports have been removed from components. Imports requiring
  a default export should now point to `.../[component]/default`.

## 4.43.1

### Patch Changes

- dd217b7: Fixes an issue with the polymorphic Button component when JSX is
  passed with the `as` prop

## 4.43.0

### Minor Changes

- 42695b0: Technical uplift of Box and other related primatives to enable full
  polymorphism.

    #### Style props

    - _Breaking change:_ Prop values are now camel case (e.g. `space-between`)
      instead of `spaceBetween`
    - _Breaking change:_ Border property props where Top/Bottom/Left/Right was
      named last, are now named second (e.g. no longer `borderColourLeft`, now
      aligned to `borderLeftColour`)
    - New colour tokens are mapped to props with `color` spelling, existing
      colours/intentional colours are still available with the `colour` spelling
      in props for backwards compatibility
    - additional alias abbreviated props are available i.e. `px`, `mt` which are
      mapped to the existing

    ##### CSS layers introduced

    - `@reset` contains base resets
    - `@utility` contains the spinkles utility classes

    #### Components

    **Box** - newly implemented with more powerful polymorphic type based on the
    `as` prop, and exposes useBox for core logic.

    - useBox returns the JSX component tag as well as the processed and filtered
      props. It also handles logic for determing a semantic child tag rather
      than repeated within various components
    - useBoxStyles been replaced with `boxStyles` which handles the
      vanilla-extract sprinkles
    - props `odComponent` and `testId` sets consistent data attribute for use at
      component root are exported as `CommonBoxProps`

    **Stack** - reimplemented with useBox and flexbox for layout

    **Inline** - reimplemented with useBox and flexbox for layout

    **Columns** - reimplemented with useBox, style recipe and specialised
    vanilla-extract sprinkes

    Additionally, these components have been migrated to useBox with updated
    polymorphic props:

    - Button
    - Section
    - Tab
    - VisuallyHidden

## 4.42.0

### Minor Changes

- d32fe98: Expands theme contract to include new 'color' tokens (work in
  progress), without removing existing. Both are documented in Storybook.

    **Breaking change** type of the theme tokens object `Tokens` has been
    renamed to `ThemeTokens` for clarity.

    Replaces local (namespaced) css variables with un-namespaced vars in all
    themes. Theme tokens are now assigned to a css layer. And vanilla-extract
    tokens can be imported as `overdriveTokens` but using `themeContractVars`
    will continue to work.

## 4.41.0

### Minor Changes

- 9137068: **Breaking change** for `<OverdriveProvider>` and other providers.
  `<OverdriveProvider>` now contains all Overdrive theme options with optimised
  state management. Both `<ThemeProvider>` context as well as
  `<ThemeOverrideProvider>` values have been incorporated. Applications do not
  need to be wrapped separate providers.

    New peer dependency

    - Added dependency `es-toolkit`

    Provider Consolidation

    - `ThemeProvider` and `ThemeOverrideProvider` have been replaced by a
      fallback provider to show deprecation warnings
    - All theming functionality is now handled through `OverdriveProvider`
      including a combined component API

    OverdriveProvider updates

    - `theme` prop is now optional
    - Colour overrides are passed as an object `colorOverrides` instead of
      individual props as in previous provider
    - Some of the on-page behaviour of `ThemeOverrideDebugger` has been disabled

    Data attribute and CSS Variables

    - Theme application is now available using data attribute
      `data-od-theme=base`
    - OD tokens are exposed globally in CSS variables

    Reset updates

    - Added `container` styles into resets
    - Updated CSS reset

### Patch Changes

- 038b7c9: Keep peer dependency for `@autoguru/icons` in sync

## 4.40.2

### Patch Changes

- 2023913: Enable v5 of
  [`react-keyed-flatten-children`](https://github.com/grrowl/react-keyed-flatten-children)
  in peer dependencies

## 4.40.1

### Patch Changes

- f2cfe56: Improves prop types of OverdriveProvider and ThemeProvider
- 25da64a: Text: now supports `as="label"` for use with input fields

## 4.40.0

### Minor Changes

- 069e6ea: This release updates the visual appearance of the following
  components: Button, Checkbox, Radio, Switch, TextInput, NumberInput,
  DateInput, ColourInput, AutoSuggest, Select, Tabs and Table. A consistent
  keyboard focus outline has also been applied except for input fields.
  Accessibility issues fixed relating to labelling on Button and aria attributes
  on Checkbox, Radio and Tabs.

    Border radius tokens have been updated to named-sizes. The new values are
    `sm` `md` `lg` `xl` `2xl`. Radius `1` remains for backwards compatbility.

    Input fields: TextInput, NumberInput, DateInput, Select, and AutoSuggest now
    have `large` size via the shared InputBase.

    Tabs: A new `appearance` prop has been added to configure a Pill
    look-and-feel.

    Button: Addition of size `xsmall`.

    Checkbox: Added support for an indeterminate state.

## 4.39.2

### Patch Changes

- 4e288e4: Badge: fix for block display.
- fa47d39: Fix for Icon rendering as `div` by default, defaults to `span`
  instead.
- c2ad0d3: Peer dependencies up to date.

## 4.39.1

### Patch Changes

- 0cd80c6: Adjustments to the way sprinkles have been used to heavily reduce CSS
  output. This mainly affects components in beta.

## 4.39.0

### Minor Changes

- 17db201: The Badge component displays bolder text at the `small` size.

    Intent foreground colour for success intent has been changed for consistency
    and to improve readability.

## 4.38.0

### Minor Changes

- 45097a0: Introduces DateTimePicker (beta) to help users book a service
  drop-off time. May be extended for additional use cases.

### Patch Changes

- 84b8ed1: Stack, BulletList and OrderList components now use preferred `as`
  prop.

## 4.37.1

### Patch Changes

- 2722320: Reverts use of the `globalThis` to `window`

## 4.37.0

### Minor Changes

- e6cfa22: React v18 or higher required in peer dependencies
- 72019bd: Introduced Search Bar component beta

### Patch Changes

- 0092bd6: Improves Icon accessibility, no longer renders an `<i>` tag

## 4.36.0

### Minor Changes

- 8739e4f: **Enhancements**

    - `as` prop added to Box, with existing `is` prop as alias to ensure
      non-breaking.
    - `VisuallyHidden` component has been simplified.
    - More sprinkles defined such as typography, responsive breakpoints and
      interaction conditions and properties.
    - `odStyle` is now the function name for using sprinkles.

- 8739e4f: **New components**

    - Option List (beta) to display a grouped set of optional items that are
      checkbox form controls.
    - Option Grid (beta) to group selectable tiles that support per-item icons,
      it is a custom ARIA listbox instance and is not a native form control.

## 4.35.2

### Patch Changes

- e337c6e: Unwanted post install package patching is removed

## 4.35.1

### Patch Changes

- 59f2bb5: Added id and testId props to Text component. Added testId props to
  Heading component.

## 4.35.0

### Minor Changes

- d580acb: ESlint refactor after dependency upgrades to latest `octane` config

## 4.34.0

### Minor Changes

- 4c8dc149: Reduce padding in prefix input incon when the input measures 150px
  or less

## 4.33.1

### Patch Changes

- b6dad903: Fixes Switch component prop type

## 4.33.0

### Minor Changes

- 78ded1ce: Enhances the looks and behaviours of Switch component
- 77867368: Upgrades css type and vanilla extract

## 4.32.0

### Minor Changes

- 2ab648e9: Updates neutral theme

## 4.31.0

### Minor Changes

- c4d3c69a: small size added to badge

## 4.30.0

### Minor Changes

- 90567a0d: Cap all OD inputs with default max values

## 4.29.0

### Minor Changes

- 9d2cc57b: SimpleImage component gets error fallback option

## 4.28.1

### Patch Changes

- 5e6c7e43: Icon: Not throwing when passed null icons

## 4.28.0

### Minor Changes

- fb3e74d2: Adds grid display to box pros

## 4.27.0

### Minor Changes

- 27bed9f6: FillHeightBox gets optional maxHeight prop

## 4.26.5

### Patch Changes

- d2fe2618: Exports hooks from the package root
- b9b2e921: Fixed EditableTest change propagation

## 4.26.4

### Patch Changes

- fe6193bd: Fixes EditableText not sizing correctly for type number

## 4.26.3

### Patch Changes

- 8b0eedaa: EditableText gets internal state management while is in edit mode

## 4.26.2

### Patch Changes

- 987d3e4c: Improves input placeholder width calculation in floating mode

## 4.26.1

### Patch Changes

- 9c36d27f: Fixed DropDown prop types

## 4.26.0

### Minor Changes

- 993e5740: Adds disabled prop to DropDown options

## 4.25.2

### Patch Changes

- 9567e4ab: DropDown options get default display flex

## 4.25.1

### Patch Changes

- 8c7dfb5a: changes dropdown options to be passed in as children

## 4.25.0

### Minor Changes

- c66817db: Added new DropDown button component

## 4.24.1

### Patch Changes

- 9542838b: NumberInput gets to be cleared when upstream enforeces values
- 7740c43f: EditableText passes tab index to wrapper container

## 4.24.0

### Minor Changes

- 02eccde4: Modal: Gets a disableBackdropClick prop

## 4.23.6

### Patch Changes

- 69959cce: EditableText exposes an onModeChange callback

## 4.23.5

### Patch Changes

- d7148e52: EditableText passes incoming focus and blue events to wrapper box

## 4.23.4

### Patch Changes

- 30167cb7: Fixes EditableText live size change

## 4.23.3

### Patch Changes

- 9bfab26f: feat: Fixes EditableText size

## 4.23.2

### Patch Changes

- 5e7528ca: EditableText: Gets better input widht predection

## 4.23.1

### Patch Changes

- 9c7a28f4: Rexports EditableText component

## 4.23.0

### Minor Changes

- 90212565: Adds EditableText component

## 4.22.0

### Minor Changes

- b82f034c: Inputs: Can set a background colour

## 4.21.0

### Minor Changes

- e9273f8b: Sticky Box: Gets a noPopShadow option

## 4.20.0

### Minor Changes

- ec829f85: Tooltip: Accepts open state as a prop

## 4.19.0

### Minor Changes

- de82bb12: ksjdfchsdjhfgshdj

### Patch Changes

- de82bb12: Tooltip: No longer shows empty tooltips

## 4.18.0

### Minor Changes

- f1b7f299: Increases large breakpoint threshold

## 4.17.4

### Patch Changes

- 44aa5baa: Image: Fixed images component passing unsupported imageWidth prop to
  SimpleImage

## 4.17.3

### Patch Changes

- fec53656: Select Input: Get heights aligned with other inputs AutoSuggest
  Input: Get heights aligned with other inputs

## 4.17.2

### Patch Changes

- 62974729: Browserlist upgrade

## 4.17.1

### Patch Changes

- 3e83d21b: DatePicker: Size prop made optional

## 4.17.0

### Minor Changes

- 7deb2f96: DatePicker: Gets valueLabel prop

## 4.16.0

### Minor Changes

- 331bc041: Adds IntentStripe component

## 4.15.3

### Patch Changes

- cc303b97: Base theme: Updated background neutral colour

## 4.15.2

### Patch Changes

- 98283fb6: useWindowHeightFill: Fixes mutation observer

## 4.15.1

### Patch Changes

- 8da1b1d: useWindowHeightFill: Listens to dom changes

## 4.15.0

### Minor Changes

- 8b5f44c: NEW: useWindowHeightFill hook NEW: FillHeightBox component NEW:
  StickyBox component NEW: ScrollPane component

## 4.14.7

### Patch Changes

- 7366dee: TabPanes: Gets padding options

## 4.14.6

### Patch Changes

- c8f6330: New theme token utils to read theme token values

## 4.14.5

### Patch Changes

- 0759213: Anchor: Gets all a tag attributes TexLink: Gets all a tag attributes
  Switch: Gets all button tag attributes

## 4.14.4

### Patch Changes

- 012f424: TextLink: Improved iconed version layout

## 4.14.3

### Patch Changes

- 0ab5287: DividerLine: Accepts all box background colours

## 4.14.2

### Patch Changes

- 5ac16e9: Button and Inputs: Fixes translateZ causing Safari overlay issues

## 4.14.1

### Patch Changes

- 32e0f3b: HorizontalAutoScroller gets swipe controls

## 4.14.0

### Minor Changes

- cd28d20: Added HorizontalAutoScroller

## 4.13.1

### Patch Changes

- 85c36c2: Storybook: Fixed fynamic theme colours

## 4.13.0

### Minor Changes

- 90ac84e: Adds SliderProgress component

## 4.12.4

### Patch Changes

- 7c152a0: useResponsiveValue: Gets serverside fallback value

## 4.12.3

### Patch Changes

- dc1fdd7: Improved dynamic theming

## 4.12.2

### Patch Changes

- ba357a8: ThemeOveeriders: React to upstream updates
- ba357a8: Section: Passes ref over to dom

## 4.12.1

### Patch Changes

- 9474d14: Theme override no longer has primary colours as mandatory

## 4.12.0

### Minor Changes

- af5294c: OverdriveProvider no longer sets document body background and text
  colours

## 4.11.5

### Patch Changes

- b229c76: Addds optional modal mount point to OverdrivePorvider

## 4.11.4

### Patch Changes

- d7a7217: Upgrades vanilla extract
- 297c191: Storybook upgrade
- f724850: Removes Playroom
- a60454d: Chromatic upgrade

## 4.11.3

### Patch Changes

- e945fca: Simplifies colour styles

## 4.11.2

### Patch Changes

- 4759925: Fixes ts type generation

## 4.11.1

### Patch Changes

- 85927e4: Themes: New neutral theme added Box: Get intent background-color and
  color styles
- 1eb1e3c: Box: Gets a responsive order prop

## 4.11.0

### Minor Changes

- 36c9ce7: Dynamic theme provider

## 4.10.2

### Patch Changes

- 40ace81: Box: Gets intent border colours

## 4.10.1

### Patch Changes

- f759554: DividerLine fixes size type

## 4.10.0

### Minor Changes

- 57d49d4: Added DividerLine component

## 4.9.9

### Patch Changes

- 7cd947b: Box: Get's 'none' width option

## 4.9.8

### Patch Changes

- 85a20a3: Stack: Gets alignItems option for it's children

## 4.9.7

### Patch Changes

- 9a6f63f: AutoSuggest: Drops borderMerge and attach in fullscreen mode

## 4.9.6

### Patch Changes

- 6672673: Inputs: Get borderMerge option

## 4.9.5

### Patch Changes

- 4777231: Inputs: Get attach option

## 4.9.4

### Patch Changes

- 3e22cb6: Stepper: Fixes incorrect decmials when stepping up or down

## 4.9.3

### Patch Changes

- 3fa19c5: Adds new colour helpers

## 4.9.2

### Patch Changes

- 42d834f: OverdriveProvider applies theme calss changes

## 4.9.1

### Patch Changes

- dac970c: Theming contracts added
- 8ee8087: ColourInput: Fixed and improved stories

## 4.9.0

### Minor Changes

- 1c2062c: ColourInput component added

## 4.8.1

### Patch Changes

- 19418b5: Autosuggest: No longer looses window scroll position when opened in
  fullscreen mode
- 0ceb2f9: Disabled elements got tabindex of -1

## 4.8.0

### Minor Changes

- fbf72cb: Switch: No longer maintains an internal state
- d68e1dd: Button: Prevents double clicking as a default behaviour

## 4.7.3

### Patch Changes

- bd4ed83: Autosuggest: Fixes mobile input loosing focue on search

## 4.7.2

### Patch Changes

- 2e7f672: AutoSuggest: Automatically closes mobile modal with value changes

## 4.7.1

### Patch Changes

- a8084f6: Switch: Gets more visible focused state

## 4.7.0

### Minor Changes

- 74694e1: Stepper: Looses internally managed state

## 4.6.0

### Minor Changes

- 7b931f7: Adds TextBubble Component

## 4.5.3

### Patch Changes

- 91fb315: Components: Get default exports

## 4.5.2

### Patch Changes

- ed0d129: Toast: No longer blocks page elements at the same page height

## 4.5.1

### Patch Changes

- 2a307c5: DatePicker: Gets loading state

## 4.5.0

### Minor Changes

- 5230bcb: DatePicker component added

## 4.4.5

### Patch Changes

- b1ef7eb: Tab coponent: Allows complex children

## 4.4.4

### Patch Changes

- 466098d: MinimalModal: Gets content vertical alignment options

## 4.4.3

### Patch Changes

- a3941d6: Autosuggest: Fixes clear button layout shift for small size

## 4.4.2

### Patch Changes

- 7a49fcb: Small inputs: Get font size 2

## 4.4.1

### Patch Changes

- 848878d: Small inputs: Get defined line heights

## 4.4.0

### Minor Changes

- 4236309: Input components: Get a small size variant

### Patch Changes

- 4236309: TextArea: Fixed scrolled text overlapping with shifted placeholder

## 4.3.6

### Patch Changes

- 200e67e: Inline: Gets width prop

## 4.3.5

### Patch Changes

- 5300772: Fixed type definitions

## 4.3.4

### Patch Changes

- 86f955b: Dependency upgrades

## 4.3.3

### Patch Changes

- 33c6c71: Inputs: Get theme standard line height
- 28252fb: NumberInput: Fixes paasive events being prevented

## 4.3.2

### Patch Changes

- 5930dd5: NumberBubble: Suppoertsa larger numbers

## 4.3.1

### Patch Changes

- 3b81bdc: Button: Fixes warning and information text colours

## 4.3.0

### Minor Changes

- ff5cd80: Button: Gets new colour variants

## 4.2.1

### Patch Changes

- 5d20ae8: NumberBuble: Fixed wrong sizing for the value of 10

## 4.2.0

### Minor Changes

- b6959f7: NumberBubble component intoduced

## 4.1.18

### Patch Changes

- 5e2efa2: Checkbox: Removes extra right padding when it has no label Radio:
  Removes extra right padding when it has no label

## 4.1.17

### Patch Changes

- 5fc3db9: Radio: Can have empty children Checkbox: Can have empty children

## 4.1.16

### Patch Changes

- 11d9730: Button: Gets new intent border colours for border colour

## 4.1.15

### Patch Changes

- 5293616: NumberInput: Changed event lister to passive TabList: Changed event
  lister to passive useMedia: Changed event lister to passive

## 4.1.14

### Patch Changes

- 14ee239: Tooltip: Gets test size option

## 4.1.13

### Patch Changes

- 7dbf75b: Tooltip: Gets auto closing timeout option

## 4.1.12

### Patch Changes

- 834f5bd: Button: Keep its layout unchanged in loading mode

## 4.1.11

### Patch Changes

- 5448c8a: base theme: Link colour updated to blue 500 TextLink: get link colour

## 4.1.10

### Patch Changes

- e1f5773: Heading: Gets wordBreak prop

## 4.1.9

### Patch Changes

- e1dc659: Text: Gets word-break option Meta: Gets word-break option

## 4.1.8

### Patch Changes

- e67fd78: Image: Updated prop types

## 4.1.7

### Patch Changes

- f5843b0: Image component: Gets exported from root

## 4.1.6

### Patch Changes

- 13acf79: AutoSuggest: Calls onEnter with current value

## 4.1.5

### Patch Changes

- 6ae288e: AutoSuggest: Type fixes

## 4.1.4

### Patch Changes

- Overdrive: Fixed input ref type

## 4.1.3

### Patch Changes

- 9884f4c: Autosuggest: Closes results when enter key is pressed

## 4.1.2

### Patch Changes

- e825a3d: useResponsiveValue Accepts any generic type

## 4.1.1

### Patch Changes

- 4bae7d0: AutoSuggest accepts an 'onEnter' event callback

## 4.1.0

### Minor Changes

- af65bd3: New responsive Image component

## 4.0.4

### Patch Changes

- 1ac5083: Adds babel preset env

## 4.0.3

### Patch Changes

- 7f65be1: TextArea: Fixed min height

## 4.0.2

### Patch Changes

- f7bfcdb: Tabs Get a more distinct colour for unselected tab labels

## 4.0.1

### Patch Changes

- e2cebc8: Applies type fixes

## 4.0.0

### Major Changes

- dd12f20: Migrates Overdrive to vanilla extract

## 3.0.0

### Major Changes

- eb36462: Overdrive: Migrates styling away from treat to vanilla extract
- aaac596: Migrate to vanilla extract

### Patch Changes

- 4324095: OverdriveProvider: Imports reset styles
- 4324095: OverdriveProvider: Imports global fonts
- 2623174: fixes list of files with side effects
- 03ca973: Autosuggest: Replaces deprecated fill-available with stretch
- 56edcaf: Overdrive: Gets file extentions for imports
- 2fbe7bf: OverdriveProvider: Accepts runtime breakpoint token
- 4324095: Compiles released package to JS
- 4858d44: Compiles Overdrive package into JS
- 36736c3: useMedia
- ec17939: Adds babel react preset
- 965c7ed: Portal: Makes theme wrapping optional
- 19d14a1: Multiple theming fixes
- aa5d74b: Portal: Removes memo
- 4324095: Reverts compiling to js
- 713b1a3: Oderdrive: Fixed type generation for released package
- 4b3b1ec: Adds inhouse babel config
- ca4e971: Portal: Fixes unwrapped version
- 158d3bb: Accept custom runtime breakpoint tokens

## 3.0.0-next.18

### Patch Changes

- Fixes type generation for released package

## 3.0.0-next.17

### Patch Changes

- useMedia

## 3.0.0-next.16

### Patch Changes

- Portal: Removes memo

## 3.0.0-next.15

### Patch Changes

- Portal: Fixes unwrapped version

## 3.0.0-next.14

### Patch Changes

- Portal: Makes theme wrapping optional

## 3.0.0-next.13

### Patch Changes

- OverdriveProvider: Accepts runtime breakpoint token

## 3.0.0-next.12

### Patch Changes

- Accept custom runtime breakpoint tokens

## 3.0.0-next.11

### Patch Changes

- Autosuggest: Replaces deprecated fill-available with stretch

## 3.0.0-next.10

### Patch Changes

- fixes list of files with sideeffects

## 3.0.0-next.9

### Patch Changes

- ec17939: Adds babel react preset

## 3.0.0-next.8

### Patch Changes

- Overdrive: Gets file extentions for imports

## 3.0.0-next.7

### Patch Changes

- Adds inhouse babel config

## 3.0.0-next.6

### Patch Changes

- OverdriveProvider: Imports global fonts

## 3.0.0-next.5

### Patch Changes

- OverdriveProvider: Imports reset styles

## 3.0.0-next.4

### Patch Changes

- Compiles released package to JS

## 3.0.0-next.3

### Patch Changes

- Reverts compiling to js

## 3.0.0-next.2

### Patch Changes

- Compiles Overdrive package into JS

## 3.0.0-next.1

### Patch Changes

- Multiple theming fixes

## 3.0.0-next.0

### Major Changes

- eb36462: Overdrive: Migrates styling away from treat to vanilla extract
- aaac596: Migrate to vanilla extract

## 3.0.0-next.1

### Major Changes

- Migrate to vanilla extract

## 3.0.0-next.0

### Major Changes

- Overdrive: Migrates styling away from treat to vanilla extract

## 2.7.0

### Minor Changes

- f982d1c: Upgraded to react v18 alpha
- 0fa7afd: Overdsrive: Gets compiled into javascripts and typescript types
- 7033333: Hooks: New useAttachedBoxes helper hook
- f15d951: Hooks: New useResponsiveValue value hook

### Patch Changes

- b7e6aae: Adds relese script
- 25dda76: Attached Boxes: Accept default box props
- 85e9ceb: StandardModal: Hides it's frame overflow
- d08c689: Badge: Gets new large size
- 96a8299: NumberInput: Gets new preventMouseWheel prop to prevent value change
  while scrolling
- fd3cea4: AttachedBoxes: Do not get default paddings
- 7f2122b: Adds more utils root export
- b7e6aae: Overdrive: Gets files list added to package.json
- b7e6aae: Fixes main file
- 006435e: StandardModal: Gets narrow and skinny sizes
- d89cd04: LoadingBox Accepts default Box props
- b7e6aae: Overdrive index main index files fixed
- ded7b5d: Inputs: Get their hover states going to a darker shade
- 8b1f6df: useResponsiveValue: Gets exported from libs root
- fd3cea4: AttachedBoxes: Accept external classnames
- ff9a789: Sets index.ts as main entry file
- ba85147: Overdrive: Multiple export changes
- 5c1b018: Publish command: Nolonger compiles to JS

## 2.7.0-next.18

### Patch Changes

- Overdrive: Multiple export changes

## 2.7.0-next.17

### Patch Changes

- Badge: Gets new large size

## 2.7.0-next.16

### Patch Changes

- Publish command: Nolonger compiles to JS

## 2.7.0-next.15

### Patch Changes

- Adds more utils root export

## 2.7.0-next.14

### Patch Changes

- Sets index.ts as main entry file

## 2.7.0-next.13

### Patch Changes

- Fixes main file

## 2.7.0-next.12

### Patch Changes

- Overdrive index main index files fixed

## 2.7.0-next.11

### Patch Changes

- Overdrive: Gets files list added to package.json

## 2.7.0-next.10

### Patch Changes

- Adds relese script

## 2.7.0-next.9

### Minor Changes

- Overdsrive: Gets compiled into javascripts and typescript types

## 2.7.0-next.8

### Patch Changes

- NumberInput: Gets new preventMouseWheel prop to prevent value change while
  scrolling

## 2.7.0-next.7

### Patch Changes

- StandardModal: Hides it's frame overflow

## 2.7.0-next.6

### Patch Changes

- StandardModal: Gets narrow and skinny sizes

## 2.7.0-next.5

### Patch Changes

- LoadingBox Accepts default Box props

## 2.7.0-next.4

### Patch Changes

- AttachedBoxes: Do not get default paddings
- AttachedBoxes: Accept external classnames

## 2.7.0-next.3

### Patch Changes

- Attached Boxes: Accept default box props
- 8b1f6df: useResponsiveValue: Gets exported from libs root

## 2.7.0-next.2

### Minor Changes

- 7033333: Hooks: New useAttachedBoxes helper hook
- f15d951: Hooks: New useResponsiveValue value hook

## 2.7.0-next.1

### Patch Changes

- ded7b5d: Inputs: Get their hover states going to a darker shade

## 2.7.0-next.0

### Minor Changes

- Upgraded to react v18 alpha

## 2.6.3

### Patch Changes

- f6e8135: AutoSuggest: Gets increased results fylout maxHeight value

## 2.6.2

### Patch Changes

- 23780cc: Autosuggest: Gets a fix for white background under round edges

## 2.6.1

### Patch Changes

- d2ba68a: AutoSuggest: Gets white background for results ul element

## 2.6.0

### Minor Changes

- b625d7c: AutoSuggest: Gets a clear input button when with value
- b625d7c: AutoSuggest: Gets enforced inline options view

## 2.5.1

### Patch Changes

- 7072055: Toaster: gets primary, secondary and shine variants

## 2.5.0

### Minor Changes

- 9411d17: MinimalModal: New MinimalModal component with StandardModal features
  but without any baked in UI

## 2.4.4

### Patch Changes

- 97f8b2d: Button: Uses theme secondary colour for secondary variation border

## 2.4.3

### Patch Changes

- a3908d9: AutoSuggest: Gets fix for fullscreen veiw resizing html tag width to
  0

## 2.4.2

### Patch Changes

- e7fe560: Inputs: Get stories with no notch

## 2.4.1

### Patch Changes

- dd39f3a: Overdrive Themes: Gets a new flat theme added

## 2.4.0

### Minor Changes

- 4c96195: Theming: All explicitly set component colours now use theme based
  colours

## 2.3.1

### Patch Changes

- a631d85: SelectInput: Gets option to be passed a custom field icon

    AutoSuggest: Gets option to be passed a custom field icon

## 2.3.0

### Minor Changes

- f4eb420: Input fields: Get a loading state

## 2.2.8

### Patch Changes

- 75d6708: Checkbox: Accepts ref

    RadioGroup: Accepts ref

    Radio: Accepts ref

## 2.2.7

### Patch Changes

- e004bff: Text: Gets capitalise text transform prop

## 2.2.6

### Patch Changes

- b328760: Box: Gets padding reset for field and fieldset elements

    AutoSuggest: Gets fix for exception when clicking outside an open
    AutoSuggest

## 2.2.5

### Patch Changes

- 075e32e: useBoxStyles: Borders paddings and margins are no longer rest on
  block elements
- 075e32e: Heading: Gets explicit reset styles
- 6068142: AutoSuggest: Fixed undefined error caused by blurring out of
  AutoSuggest

## 2.2.4

### Patch Changes

- ee67f76: TextLink: Gets inline reset styles

    ProgressSpinner: Gets svg and block resets for the animates SVG

## 2.2.3

### Patch Changes

- 340da9a: Text: Gets explicit reset styles for span and p

    field: Gets explicit reset styles

    fieldset: Gets explicit reset styles

## 2.2.2

### Patch Changes

- a3274cb: useBoxStyles: Applies base reset styles to div elements
- a3274cb: TextAreaInput: Gets base input reset styles

## 2.2.1

### Patch Changes

- 0e10140: useBoxStyles: Base reset styles now spread individually into element
  type reset styles

## 2.2.0

### Minor Changes

- 667876a: **Checkboxes**: Disabled mode gets reduced opacity

    **Radio**: Disabled mode gets reduced opacity

## 2.1.9

### Patch Changes

- 252f512: Upgrades treat to latest
- ca5cb40: **Heading**: Heading component _should_ pass all text style props
  down

## 2.1.8

### Patch Changes

- d9b96c6: **StandardModal**: Fixes mobile view to be pinned to the bottom and
  table view is all rounded corners
- 99bc4f9: **Stepper**: Fixes extra re-render on each change

## 2.1.7

### Patch Changes

- 977a99f: **Section**: Introduces a new small option for width values

## 2.1.6

### Patch Changes

- 463422c: **Badge**: Fixes default text style colour incorrect style ordering
  ordering

## 2.1.5

### Patch Changes

- 42057f4: **Badge**: Fixes inverted text style colours and incorrect ordering
  caused by [treat](https://github.com/seek-oss/treat)

## 2.1.4

### Patch Changes

- a54636d: **AutoSuggest**: Fix's it so if Suggestions is ever undefined or
  empty, that the nextFn doesnt fail
- dec98ef: **StandardModal**: The main region to be wrapped in a flex to allow
  stretching children

## 2.1.3

### Patch Changes

- c81a433: **SelectInput**: Fixes wrong prop type needed

## 2.1.2

### Patch Changes

- 1d4b39e: **SelectInput**: Increases target click area to cover the full width
  of component.

## 2.1.1

### Minor Changes

- 052a024: Corrected types to be more type safe and accurate.

    Notably `<Box>`. Seeing as we `createElement`, we fixed types to only allow
    `IntrinsicElements | JSXElementConstructor`. As such, any `"button"` or
    `TextLink` prop values will work. However, `<TextLink />` will not.

## 2.0.27

### Patch Changes

- 648ec6a: **Inputs:** Introduces `reserveHintSpace` prop—to _reserve_ the space
  that would otherwise be occupied by the hint text.

    Super useful in stacked forms with validation, so that page layout shifts
    don't occur.

## 2.0.26

### Patch Changes

- dd3da7e: **Modal:** Introduces a focus-trap as well as correct some Concurrent
  Mode flickering.
- dd3da7e: **Box:** Adds `opacity` prop

## 2.0.25

### Patch Changes

- 4ce4fc6: **NumberInput:** Adds support for the html `step` attribute.

## 2.0.24

### Patch Changes

- 8914008: **Box:** Adds `inlineFlex` as a display prop
- 5bbe87a: **Tabs:** Adds new renderInactivePanes prop to render tabs that are
  inactive.

    By default, TabPanes themselves only render when they are active. Sometimes
    in certain cases you'd want to preserve the local state within those tabs as
    a user switches between tabs. Setting `renderInactivePanes` on TabPanes will
    be rendered but visually hidden.

    **Example:**

    ```jsx
    <Tabs active={0}>> > > > > > > } t > ></Tabs>
    ```

- 7131a5f: **Tabs:** Fixes a visual quirk when indications are mixed with
  non-indicators

## 2.0.23

### Patch Changes

- c585765: **Heading:** Adds an `id` prop which is applied directly to the
  underlying element

## 2.0.22

### Patch Changes

- 5c913cc: Box: Allow non-intrinsics as Box `is` prop as well. With this change
  you can send things in like `svg`'s, or other components themselves.
- e11909f: Text: Adds a `text-transform` prop to allow uppercasing text

## 2.0.21

### Patch Changes

- 47335f6: Meta: FIxed issue where the icon and label would wrap
- 230367f: SimplePagination: Should be centered in it's parent. Seeing as it's
  parent spans 100% width, this centering is now explicit.

## 2.0.20

### Patch Changes

- bf51bbe: Fix: Added missing re-exports from our "to-monorepo" migration

## 2.0.19

### Patch Changes

- c13df61: StandardModal: Fixes the issue where a mouseup on the backdrop
  triggered the requestClose callback. Despite the click originating on the
  modal itself. So now the callback will not fire.

## 2.0.18

### Patch Changes

- 63d81e5: Major refactor of how `treat` files get used in our project. Instead
  of a redefinition of _shared_ styles such as margin/padding. We now instead
  prefer the usage of `useBoxStyles` or the `Box` component.

    There _should_ be no real regression in terms of usage api.

- 63d81e5: Box: pointerEvents value can now be passed to `Box` and
  `useBoxStyles` as 'none' or undefined.
- 63d81e5: BulletText: Now accepts an `is` prop, such that it's element can be
  changed. This is really because 9/10 times you'd be rendering this in a
  `Stack`, which already handles the `ul/li` couple.

    **FEATURES**

    ```jsx
    <Stack is="ul">> ></Stack>
    ```

    which already wraps each child in an `li`.

## 2.0.17

### Patch Changes

- fbee5c0: AutoSuggest: Now has a full width wrapping box

## 2.0.16

### Patch Changes

- 6d9e5b5: Reset: Table reset is no longer global. So use `<Box is="table" />`

    ```diff
    -<table>
    +<Box is="table">
    ```

- 6d9e5b5: Inline: Supports alignX to position items on the x axis aka;
  `justifyContent`.
- 6d9e5b5: Reset: Globally set overflowX to hidden
- c90d645: Stepper: When pressing Home/End it should no longer jump to the end
  of the page.
- 6d9e5b5: Table: Introduces Tables

    Implemented as a css-grid, so column widths are to be defined in
    gridTemplateColumns. All components in this scope accept a ref property.

    Please note! In order to remain structurally WAI-ARIA compliant; the
    `TableRowGroup` must be placed around the _traditional_ `tbody` and `thead`.

    **FEATURES**

    ### Example

    ```jsx
    <Table columnTemplate="repeat(2, auto)">></Table>
    ```

    ### Sticky Header

    ```diff
    -<Table columnTemplate="repeat(2, auto)">
    +<Table stickyHead columnTemplate="repeat(2, auto)">
    >
    >
    >
    ```

    ### Sorting Columns

    ```diff
    <Table columnTemplate="repeat(2, auto)">
    >
    >
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
    >
    -        <TableRow>
    +        <TableRow onClick={}>
    >
    ```

    Please note; that if you're also tracking clicks of cell buttons, to check
    the currentTarget of whether to apply the callback.

## 2.0.15

### Patch Changes

- 5353a1a: Box: Added textAlign as a prop

    Worth noting that we want to deprecate the use of `align` in our
    `useTextStyles`. As it's now shifted to our box. The `align` prop will still
    remain on the `Text` component.

    **FEATURES**

    ```jsx
    <Box textAlign="center" />
    ```

- 715b035: Box: Added userSelect prop to disable selecting its content
- 987a68b: VisuallyHidden: Added brand-new component to visually hide content

    **FEATURES**

    ```jsx
    <VisuallyHidden>hello screen reader</VisuallyHidden>
    <Text>
    o
    >
    </Text>
    ```

- e2f4a5b: Text: Allow setting a display override

    **FEATURES**

    ```jsx
    <Text is="span" display="inlineBlock">
    	k
    </Text>
    ```

- 175cb09: Icon: Child svg's are cloned and positioned to the size of the parent

## 2.0.14

### Patch Changes

- 5428b9e: LoadingBox: Exposes height and display box props

    **FEATURES**

    ```jsx
    <LoadingBox height="full" display="inlineBlock" />
    ```

- e3e5aa9: Box: Display prop inline-block renamed to inlineBlock to be more
  consistent
- a6530d5: Box: Supports sending in a height prop

## 2.0.13

### Patch Changes

- df453b2: Badge: Applies a whiteSpace nowrap to badges, and now truncates
- 292692f: Section: Typing update such that width prop is actually optional
- 52c424f: Inline: Now wrap properly, and support a prop to enable/disable it.
- e0a4291: Box: Introduces flex style props to `Box` and `useBoxStyles`

    **FEATURES**

    You can now send in `alignItems`,`flexDirection`, `flexGrow`, `flexShrink`,
    `flexWrap`, `justifyContent` to Box and useBoxStyles for whatever you like.

    We have specifically chosen `alignItems`, `flexDirection`, `justifyContent`
    as Responsive candidates as we've found the others won't have a responsive
    use case.

    ```jsx
    <Box display="flex" width="full" justifyContent="center">
    	>
    </Box>
    ```

## 2.0.12

### Patch Changes

- 62c7111: Stack: A Renamed prop from spacing to space

    eg:

    ```diff
    <Stack is="ul"
    -    spacing="3">
    +    space="3">
    >
    >
    >
    </Stack>
    ```

- 822863d: Inline: Supports inline dividers between elements.

    Supports, text, numbers or elements.

    **FEATURES**

    ```jsx
    <Inline dividers>> > > ></Inline>
    ```

- a0fce92: Text: Exposes a new white-space nowrap prop

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

- 358fb4b: Tabs: Incorrectly importing treat files inside treat

## 2.0.10

### Patch Changes

- 0b6c621: Tabs: Adds `scrollable`, which scrolls the tabs horizontally on
  smaller devices.

    **FEATURES**

    ```jsx
    <Tabs>> > > > > ></Tabs>
    ```

- 729dfdd: Input: Notchless inputs will no longer break when part of a flex
  container

## 2.0.9

### Patch Changes

- 0b59110: Flatten fragments when provided as children

    Will now support fragments and otherwise boolean children that previously
    would not have worked:

    ```jsx
    <Stack>> ( > > > > > } ></Stack>
    ```

    > which would have the past not had lines 1-3 spaced evenly.

    this was also true for: `Actions`, `Inline`, `TabList`, `TabPanes` and
    `Stack`. Which have been rectified.

## 2.0.8

### Patch Changes

- 55ee559: Positioner: Removes usingPositioner

    **FEATURES**

    Removes the usingPositioner HoC in favour of a plain-old component that'll
    gives us the ability to send _all_ our Box props onto it. It also aids in
    corrected aria-\* props.

## 2.0.7

### Patch Changes

- b9a2c45: InputBase: Allow for notchless inputs

    **FEATURES**

    Sometimes the notch behavior won't work because of its context - much like
    an input that sits within a table, where the column already denotes what
    should be entered into the input.

    > Please be aware that this should be avoided, as in most cases we should
    > notch, so a user knows what's in the input especially when its defaulted.

- 7736914: Box: Adds an overflow prop and allows className to be clsx compatible

    **FEATURES**

    `ClassName` can now be sent in directly to Box instead of through clsx.

    eg.

    ```diff
    - <Box className={clsx(styles.one, styles.two)}>
    + <Box className={[styles.one, styles.two]}>
    o
    </Box>

    - <Box className={clsx({[styles.one]: maybeDoMe}, styles.two)}>
    + <Box className={[{[styles.one]: maybeDoMe}, styles.two]}>
    o
    </Box>
    ```

- 17d2354: Stack: Expose the Box width on Stack
- 475601c: Tabs: Now always fills the width of its parent

## 2.0.6

### Patch Changes

- d1c6b09: responsiveProps: Fix argument where void is not the same as undefined

## 2.0.5

### Patch Changes

- 4df7e83: AutoSuggest: Introduce a autoWidth prop that either will size the
  flyout to either the width of the children, or the input.

    **FEATURES**

    `<AutoSuggest>` can now be given a `autoWidth` prop that will auto the width
    in relation to setting the width, or for it to be automatic.

    - `autoWidth={true}` means, size the flyout to the width of flyout children
      "automatically"
    - `autoWidth={false}` means to set to the width of the select input.

    eg:

    ```jsx

    // size to the width of the flyout children
    <AutoSuggest
    "
    }
    h
    />

    // size to the width of the input (current behaviour)
    <AutoSuggest
    "
    }
    />

    ```

- 378e5da: AutoSuggest: Input search types to remove the webkit clear button

    **FEATURES**

    When we reset input type searches, we incorrectly "hid" the webkit search
    buttons, this aims to correct that.

- eb3cf9d: AutoSuggest: Support the usage of passing a ref down to the
  implemented input

    **FEATURES**

    `<AutoSuggest>` can now be given a ref which will be passed down to the
    underlying input.

    eg:

    ```tsx
    const myRef = useRef<HTMLInputElement | null>(null);

    <AutoSuggest ref={myRef} value={null} placeholder={'My AutoSuggest'} />;
    ```

- bab9cd2: InputBase: Always full width the input wrapper

## 2.0.4

### Patch Changes

- 801c254: Positioner: Uses Popper.js to run the flyouts.

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

- 0964a1d: useNegativeMargin: Correctly fill columns to their parents width

    **BUG FIXES** Columns were not completely filling its parent due to negative
    margins

## 2.0.3

### Patch Changes

- 15f486c: Modals: Now uses a shared `<Portal />` component.

    **FEATURES**

    **`<Portal />`** component allowing for shared Portaling of components to
    inside a container.

    Responsibility: Rendering a child into a container, which by default is
    `window.body`.

    eg:

    ```jsx
    // Input
    <div>
    g
    >
    >
    >
    </div>

    // Result
    <body>
    >
    >
    </body>
    ```

    **`<Modal />`** is in charge of handling a backdrop - which also directly
    uses the new `<Portal>` component.

    Responsibility: Renders a child into a Portal, with a backdrop and correct
    aria attributes applied.

    You can give this component `hideBackdrop?: boolean` prop to disable the
    backdrop. Also; if you wish to remove the fadeIn/fadeOut animation, a
    `transition?: boolean` can also be provided.

    - Removes `<ModalPortal />` in favor of `<Modal />`
    - Deprecated `withModal`, which could simply just use the Modal component

        Worth noting that a `role="presentation"` is applied to the `Modal`, so
        consumers should be applying a `role="none presentation"` to their
        direct parent, if you wish content to be read out.

        eg:

        ```jsx
        <Modal isOpen={true} onRequestClose={function () {}}>
        	>
        </Modal>
        ```

## 2.0.2

### Patch Changes

- 6c3ae76: Tabs: Support stretching tablist items to the width of the container

    **FEATURES**

    **`<TabList />`**

    In small contexts, like sidebars, or mobile viewports with minimal tablist
    items. It makes sense to stretch items to meet the width of the container.

    eg:

    ```
    <Tabs>
    >
    >
    >
    >
    </Tabs>
    ```

- 302405b: Alert: Inline is now full width

    **Features**

    `<Alert />`

    When passing the `inline` prop, in the past it was maxWidth 640px - which in
    inline contexts, you'd want to span the entire width of its container.

- 3bcf649: Adds the Inline and Section layout components

    **Features**

    Breakpoints have been amended to follow (mobile first):

    - `tablet` is iPad Mini width less 25%, so any device greater than 768px
    - `desktop` we are considering as iPad Pro width less 25%, so any device
      larger than 1024px
    - `largeDesktop` is taken as a 1920x1080 less 25%, so any device larger than
      1440px

    all at landscape.

    **`<Inline />`**

    When you're wanting to `inline` something. Like a badge list; you can use
    use the `<Inline />` component to solve this.

    eg:

    ```jsx
    <Inline>> > ></Inline>
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
    	>
    </Section>
    ```

- f9dac97: Inline: Supporting alignY responsive prop StarRating: Consumes
  `<Inline />`

    **FEATURES**

    **`<Inline />`**

    Now supports an alignY responsive prop to vertically center its items to
    either `top | center | bottom`, eg: `<Inline alignY="center">`

    **`<StarRating />`**

    Uses the `<Inline />` component instead of columns, so should use less DOM

## 2.0.1

### Patch Changes

- c66b727: Anchors are now cursor pointer by default

    Seeing as we use `<TextLink />` or `<Box is="a" href="" />` in a few places,
    it only makes sense to use `a { cursor: pointer }`.

- 57b8cf3: Actions now filters out undefined or null children

    **`<Actions />`**

    Removed the className prop, this will slowly start happening across the
    stack.

    ```diff
    -<Actions className="test">
    +<Actions>
    .
    </Actions>
    ```

## 2.0.0

### Major Changes

- 8881bdd: Styles are now `treat` driven.

    **A few changes**

    - `OverdriveProvider` must now be provider
    - `ToastProvider` must also be provided when using a `useToast`
    - `@autoguru/overdrive/reset` must be given first.

    ... and a whole series of other things. Please consult to the PR (#273) to
    get a better idea of what's changed.

### Patch Changes

- 230a3cd: Forces explicit text colours to Button hover and active states
