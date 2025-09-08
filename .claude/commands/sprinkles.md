# Generate or update css styling based on the `sprinkles` function

The sprinkles are generated from Vanilla Extract CSS which is the styling library
in use and has a css-in-js pattern but is compiled at build time rather than at
runtime.

The `sprinkles` function provides a utility-first approach to styling with
TypeScript safety. All sprinkles properties support responsive values via arrays
or objects.

## Responsive Usage Patterns

```typescript
// Array syntax: [mobile, tablet, desktop, largeDesktop]
sprinkles({ display: ['block', 'flex', 'grid', 'flex'] });

// Object syntax: specify breakpoints explicitly
sprinkles({
  display: {
    mobile: 'block',
    tablet: 'flex',
    desktop: 'grid',
  },
});

// Responsive conditions available: 'mobile' | 'tablet' | 'desktop' | 'largeDesktop'
```

## Color Properties

### **color vs colour Spelling**

- **`color`**: Uses new design system values (`tokens.color.content`)
- **`colour`**: Uses legacy color palette (gamut colors, typography colors,
  intent colors)

### Base Colors (Non-responsive)

```typescript
// American spelling - New design system
color: 'page' |
  'hard' |
  'soft' |
  'accent' |
  'success' |
  'info' |
  'danger' |
  'warning' |
  'default' |
  'muted';

// British spelling - Legacy palette
colour: 'link' |
  'white' |
  'body' |
  'success' |
  'danger' |
  'warning' |
  'light' |
  'neutral' |
  'primary' |
  'brand' |
  'secondary' |
  'shine' |
  'information' |
  'dark' |
  'muted' |
  'unset';
```

### Background Colors

```typescript
// American spelling - New design system
backgroundColor: 'page' | 'hard' | 'soft' | 'accent' | 'success' | 'info' | 'danger' | 'warning' | 'default' | 'muted' | 'transparent'

// British spelling - Legacy palette (includes all gamut colors)
backgroundColour: 'transparent' | 'white' | 'black900' | 'black800' | 'black700' | 'black600' | 'black500' | 'black400' | 'black300' | 'black200' | 'black100' | 'gray900' | 'gray800' | 'gray700' | 'gray600' | 'gray500' | 'gray400' | 'gray300' | 'gray200' | 'gray100' | 'blue900' | 'blue800' | 'blue700' | 'blue600' | 'blue500' | 'blue400' | 'blue300' | 'blue200' | 'blue100' | 'green900' | 'green800' | 'green700' | 'green600' | 'green500' | 'green400' | 'green300' | 'green200' | 'green100' | 'red900' | 'red800' | 'red700' | 'red600' | 'red500' | 'red400' | 'red300' | 'red200' | 'red100' | 'yellow900' | 'yellow800' | 'yellow700' | 'yellow600' | 'yellow500' | 'yellow400' | 'yellow300' | 'yellow200' | 'yellow100' | 'teal900' | 'teal800' | 'teal700' | 'teal600' | 'teal500' | 'teal400' | 'teal300' | 'teal200' | 'teal100' | 'purple900' | 'purple800' | 'purple700' | 'purple600' | 'purple500' | 'purple400' | 'purple300' | 'purple200' | 'purple100' | 'orange900' | 'orange800' | 'orange700' | 'orange600' | 'orange500' | 'orange400' | 'orange300' | 'orange200' | 'orange100' | 'success' | 'danger' | 'warning' | 'neutral' | 'primary'

// Shorthand
bg: // Same as backgroundColor
```

### Border Colors

```typescript
// American spelling - New design system
borderColor: 'default' |
  'muted' |
  'disabled' |
  'page' |
  'hard' |
  'soft' |
  'accent' |
  'success' |
  'info' |
  'danger' |
  'warning';
// Left + Right borders
// Top + Bottom borders

// British spelling - Legacy palette
borderColorX: borderColorY: borderColour: 'gray' |
  'light' |
  'dark' |
  'white' |
  'success' |
  'danger' |
  'warning' |
  'neutral' |
  'primary';
// Left + Right borders
// Top + Bottom borders

// Individual borders
borderColourX: borderColourY: borderTopColor |
  borderRightColor |
  borderBottomColor |
  borderLeftColor;
borderTopColour | borderRightColour | borderBottomColour | borderLeftColour;
```

## Layout & Spacing (Responsive)

### Display

```typescript
display: 'none' |
  'block' |
  'contents' |
  'flex' |
  'grid' |
  'inline' |
  'inlineBlock' |
  'inline-block' |
  'inlineFlex' |
  'inline-flex';
```

### Positioning

```typescript
position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
overflow: 'auto' | 'hidden' | 'visible';
overflowX: 'auto' | 'scroll' | 'hidden';
overflowY: 'auto' | 'scroll' | 'hidden';
```

### Dimensions

```typescript
// Space tokens: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '56' | '64' | '72' | '80' | '88' | '96' | '104' | '112' | '128' | '144' | '160' | '176' | '192' | '208' | '224' | '240' | '256' | '288' | '320' | '384'

width: SPACE_TOKENS |
  'fit-content' |
  'max-content' |
  'min-content' |
  'full' |
  'auto';
height: SPACE_TOKENS |
  'fit-content' |
  'max-content' |
  'min-content' |
  'full' |
  'auto';
// Shorthand for width + height

// Content width tokens + 'fit-content' | 'max-content'
size: maxWidth: minWidth: 'auto' | 'fit-content';
```

### Spacing

```typescript
// Padding (uses space tokens)
padding: SPACE_TOKENS  // All sides
p: SPACE_TOKENS        // Shorthand
paddingX: SPACE_TOKENS // Left + Right
px: SPACE_TOKENS       // Shorthand
paddingY: SPACE_TOKENS // Top + Bottom
py: SPACE_TOKENS       // Shorthand
pt | pr | pb | pl: SPACE_TOKENS // Individual sides
paddingTop | paddingRight | paddingBottom | paddingLeft: SPACE_TOKENS

// Margin (uses space tokens + 'auto' for left/right)
margin: SPACE_TOKENS   // All sides
m: SPACE_TOKENS        // Shorthand
marginX: SPACE_TOKENS | 'auto' // Left + Right
mx: SPACE_TOKENS | 'auto'      // Shorthand
marginY: SPACE_TOKENS  // Top + Bottom
my: SPACE_TOKENS       // Shorthand
mt | mr | mb | ml: SPACE_TOKENS | 'auto' // Individual sides
marginTop | marginRight | marginBottom | marginLeft: SPACE_TOKENS | 'auto'

// Gap
gap: SPACE_TOKENS      // Uses CSS custom properties for gap
columnGap: SPACE_TOKENS
rowGap: SPACE_TOKENS
```

## Flexbox (Responsive)

```typescript
// Direction
flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'

// Growth & Shrinking
flexGrow: 0 | '0' | '1'
flexShrink: 0 | '0' | '1'
order: 0 | '0' | '1' | '2' | '3' | '4'

// Alignment
alignItems: 'center' | 'centre' | 'end' | 'flexEnd' | 'flexStart' | 'start' | 'stretch' | 'baseline'
alignSelf: 'center' | 'centre' | 'end' | 'flexEnd' | 'flexStart' | 'start' | 'stretch'
alignContent: 'center' | 'centre' | 'end' | 'flexEnd' | 'flexStart' | 'start' | 'stretch' | 'spaceAround' | 'space-around' | 'spaceBetween' | 'space-between' | 'space-evenly'

justifyContent: 'center' | 'centre' | 'end' | 'flexEnd' | 'flexStart' | 'start' | 'stretch' | 'spaceAround' | 'space-around' | 'spaceBetween' | 'space-between' | 'space-evenly'

// Shorthand
placeItems: // Combines justifyContent + alignItems
```

## Grid (Responsive)

```typescript
gridAutoColumns: 'auto' | '1fr' | 'min-content' | 'max-content';
gridAutoRows: 'auto' | '1fr';
gridAutoFlow: 'row' | 'column' | 'row dense' | 'column dense';
gridColumns: '1' | 'auto';
```

## Typography (Responsive)

```typescript
// Font sizes with corresponding line heights
fontSize: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
lineHeight: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
text: FONT_SIZE_TOKENS; // Shorthand for fontSize + lineHeight

textAlign: 'left' | 'center' | 'centre' | 'right';
```

## Typography (Non-responsive)

```typescript
fontWeight: 'light' |
  'normal' |
  'medium' |
  'semibold' |
  'bold' |
  'extrabold' |
  'black';
textTransform: 'capitalize' | 'lowercase' | 'uppercase';
textWrap: 'balance' | 'pretty' | 'stable' | 'nowrap';
wordBreak: 'break-all' | 'break-word' | 'keep-all';
```

## Borders (Responsive)

```typescript
// Border Radius
borderRadius: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'

// Border Width
borderWidth: '1' | '2' | '4' | '8'     // All sides
borderWidthX: '1' | '2' | '4' | '8'    // Left + Right
borderWidthY: '1' | '2' | '4' | '8'    // Top + Bottom
borderWidthTop | borderWidthRight | borderWidthBottom | borderWidthLeft: '1' | '2' | '4' | '8'
borderTopWidth | borderRightWidth | borderBottomWidth | borderLeftWidth: '1' | '2' | '4' | '8'
```

## Borders (Non-responsive)

```typescript
// Border Style
borderStyle: // All sides
borderStyleTop | borderStyleRight | borderStyleBottom | borderStyleLeft: 'none' | 'solid'
borderTopStyle | borderRightStyle | borderBottomStyle | borderLeftStyle: 'none' | 'solid'
```

## Effects & Misc (Non-responsive)

```typescript
opacity: 0 | '1' | '0'
boxShadow: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner'
pointerEvents: 'auto' | 'none'
userSelect: 'auto' | 'text' | 'none'

// Shorthand aliases
fg: // Same as color
```

## Usage Examples

```typescript
// Basic usage
const buttonStyle = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    gap: '2',
    paddingX: '4',
    paddingY: '3',
    borderRadius: 'md',
    backgroundColour: 'primary',
    colour: 'white',
  }),
]);

// Responsive usage
const responsiveStyle = style([
  sprinkles({
    display: ['block', 'flex'], // block on mobile, flex on tablet+
    flexDirection: ['column', 'row'], // column on mobile, row on tablet+
    gap: ['2', '4', '6'], // 2 on mobile, 4 on tablet, 6 on desktop+
    padding: {
      mobile: '4',
      desktop: '8',
    },
  }),
]);

// Mixed with custom CSS
const complexStyle = style([
  sprinkles({
    position: 'relative',
    borderRadius: 'lg',
    backgroundColour: 'white',
  }),
  {
    // Custom CSS for properties not in sprinkles
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
]);
```
