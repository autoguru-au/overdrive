# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

Overdrive is AutoGuru's React component library and design system, built with
React 19+, TypeScript, Vanilla Extract for styling, and Storybook for component
documentation. The library provides a comprehensive set of accessible, reusable
UI components.

## Common Development Commands

### Development and Testing

- `yarn start` or `yarn storybook` - Start Storybook dev server on port 6006
- `yarn test` - Run unit tests with Vitest
- `yarn test:ci` - Run tests with coverage for CI
- `yarn test:a11y` - Run accessibility tests via Storybook

### Building and Quality Checks

- `yarn build` - Build the library for distribution
- `yarn lint` - Run ESLint and TypeScript checks
- `yarn lint:eslint` - Run ESLint only
- `yarn lint:tsc` - Run TypeScript type checking only
- `yarn format` - Format code with Prettier

### Storybook

- `yarn storybook:build` - Build static Storybook
- `yarn chromatic` - Run visual regression tests with Chromatic

### Single Test Execution

Use Vitest's pattern matching: `yarn test ComponentName` or
`yarn test path/to/test.spec.tsx`

Note: The Vitest configuration uses the modern `test.projects` field in
`vite.config.ts` for workspace configuration, replacing the deprecated
`vitest.workspace.ts` file.

## Architecture and Code Structure

### Directory Structure

```
lib/
├── components/          # All UI components
├── hooks/              # Reusable React hooks
├── styles/             # Vanilla Extract styling system
├── themes/             # Design tokens and themes
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

### Component Architecture

Components follow a consistent structure:

```
lib/components/ComponentName/
├── ComponentName.tsx         # Component logic
├── ComponentName.css.ts      # Vanilla Extract styles
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.spec.tsx    # Unit tests (for internals only)
└── index.ts                  # Exports
```

### Styling System

- **Vanilla Extract** for all styling via CSS-in-TypeScript
- **Sprinkles** utility system for consistent spacing, colors, and responsive
  design
- **Design tokens** from `/lib/themes/theme.css.ts` must be used for all values
- State-based styling uses data attributes with the `dataAttrs` helper utility

### Component Composition Patterns

- Build from primitives: Box, Text, Icon, Stack, etc.
- All components extend `TestId` to receive `testId` prop
- Composite components set `odComponent` prop to component name on Box
- Use React Aria for interactive components to ensure accessibility
- Components must have `displayName` set
- **Component styles**: `style` function properties should always be wrapped in
  the `cssLayerComponent` css layer

## Critical Development Rules

1. **NO new dependencies** - use existing dependencies only
2. **Always use design tokens** from themes - no hardcoded values
3. **Compose from primitives** rather than creating new base elements
4. **Fix all linting/TypeScript errors** in modified files before committing
5. **Set displayName** on all components
6. **Use React Aria** for interactive elements to ensure accessibility
7. **State affects UI via data attributes** managed by `dataAttrs` helper

## Performance Considerations

React 19's compiler handles most memoization automatically. Manual optimization
still needed for:

- Heavy computational functions inside components
- Complex object/array transformations
- Event handlers passed to many children
- Expensive child component renders with stable props

## Testing Strategy

### When to Create Tests

- **Unit tests (.spec.tsx)**: Only for primitives with complex internal logic,
  significant state management, or critical accessibility features
- **Storybook stories (.stories.tsx)**: Primary testing method - required for
  all components

### Testing Commands

- `yarn test ComponentName` - Run specific component tests
- `yarn test ComponentName -u` - Update snapshots if needed
- `yarn test:a11y` - Run accessibility tests via Storybook

### Storybook Stories Requirements

- Focus on user-facing behavior over implementation details
- Aim for ~5 stories per component: Standard, Variants, Interactive States, Edge
  Cases, Accessibility
- Use story categories: `Primitives/`, `Layout/`, `Forms/`, `Navigation/`,
  `Feedback/`, `Overlays/`, `Data Display/`
- Include play functions for interactive components
- Use `composeStories` in spec files instead of testing components directly
- Use `sprinkles` function for styling in stories, never `style` prop
- Use `valueArrays` to populate argTypes, don't add custom `control` or
  `description`

### Accessibility Testing Requirements

- Keyboard navigation (Tab, Enter, Space, Escape, Arrow keys)
- Screen reader compatibility (proper ARIA attributes)
- Focus management and visual focus indicators
- Color contrast requirements
- Test using semantic queries (`getByRole`, `getByLabelText`) over test IDs

### Testing Patterns

- Use `@testing-library/user-event` for interactions
- Prefer decorators over custom render functions in stories
- Test stories first via `composeStories`, then component-specific logic
- Mock external dependencies appropriately
- Use snapshot testing sparingly

## Code Quality Standards

All modified files must be free of:

- ESLint errors
- TypeScript errors
- Unused imports
- Console statements
- Missing displayName on components
- Inline styles (use Vanilla Extract)
- Magic numbers (use design tokens)
- `any` types (use `unknown` or proper types)

Components require JSDoc comments on props and consistent naming conventions
following the existing codebase patterns.

## Vanilla Extract Sprinkles Reference

The `sprinkles` function provides a utility-first approach to styling with
TypeScript safety. All sprinkles properties support responsive values via arrays
or objects.

### Responsive Usage Patterns

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

### Color Properties

#### **color vs colour Spelling**

- **`color`**: Uses new design system values (`tokens.color.content`)
- **`colour`**: Uses legacy color palette (gamut colors, typography colors,
  intent colors)

#### Base Colors (Non-responsive)

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

#### Background Colors

```typescript
// American spelling - New design system
backgroundColor: 'page' | 'hard' | 'soft' | 'accent' | 'success' | 'info' | 'danger' | 'warning' | 'default' | 'muted' | 'transparent'

// British spelling - Legacy palette (includes all gamut colors)
backgroundColour: 'transparent' | 'white' | 'black900' | 'black800' | 'black700' | 'black600' | 'black500' | 'black400' | 'black300' | 'black200' | 'black100' | 'gray900' | 'gray800' | 'gray700' | 'gray600' | 'gray500' | 'gray400' | 'gray300' | 'gray200' | 'gray100' | 'blue900' | 'blue800' | 'blue700' | 'blue600' | 'blue500' | 'blue400' | 'blue300' | 'blue200' | 'blue100' | 'green900' | 'green800' | 'green700' | 'green600' | 'green500' | 'green400' | 'green300' | 'green200' | 'green100' | 'red900' | 'red800' | 'red700' | 'red600' | 'red500' | 'red400' | 'red300' | 'red200' | 'red100' | 'yellow900' | 'yellow800' | 'yellow700' | 'yellow600' | 'yellow500' | 'yellow400' | 'yellow300' | 'yellow200' | 'yellow100' | 'teal900' | 'teal800' | 'teal700' | 'teal600' | 'teal500' | 'teal400' | 'teal300' | 'teal200' | 'teal100' | 'purple900' | 'purple800' | 'purple700' | 'purple600' | 'purple500' | 'purple400' | 'purple300' | 'purple200' | 'purple100' | 'orange900' | 'orange800' | 'orange700' | 'orange600' | 'orange500' | 'orange400' | 'orange300' | 'orange200' | 'orange100' | 'success' | 'danger' | 'warning' | 'neutral' | 'primary'

// Shorthand
bg: // Same as backgroundColor
```

#### Border Colors

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

### Layout & Spacing (Responsive)

#### Display

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

#### Positioning

```typescript
position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
overflow: 'auto' | 'hidden' | 'visible';
overflowX: 'auto' | 'scroll' | 'hidden';
overflowY: 'auto' | 'scroll' | 'hidden';
```

#### Dimensions

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

#### Spacing

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

### Flexbox (Responsive)

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

### Grid (Responsive)

```typescript
gridAutoColumns: 'auto' | '1fr' | 'min-content' | 'max-content';
gridAutoRows: 'auto' | '1fr';
gridAutoFlow: 'row' | 'column' | 'row dense' | 'column dense';
gridColumns: '1' | 'auto';
```

### Typography (Responsive)

```typescript
// Font sizes with corresponding line heights
fontSize: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
lineHeight: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
text: FONT_SIZE_TOKENS; // Shorthand for fontSize + lineHeight

textAlign: 'left' | 'center' | 'centre' | 'right';
```

### Typography (Non-responsive)

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

### Borders (Responsive)

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

### Borders (Non-responsive)

```typescript
// Border Style
borderStyle: // All sides
borderStyleTop | borderStyleRight | borderStyleBottom | borderStyleLeft: 'none' | 'solid'
borderTopStyle | borderRightStyle | borderBottomStyle | borderLeftStyle: 'none' | 'solid'
```

### Effects & Misc (Non-responsive)

```typescript
opacity: 0 | '1' | '0'
boxShadow: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner'
pointerEvents: 'auto' | 'none'
userSelect: 'auto' | 'text' | 'none'

// Shorthand aliases
fg: // Same as color
```

### Usage Examples

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
