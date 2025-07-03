# Copilot Instructions - React Component Library

## Tech Stack

- Yarn 4 (package manager)
- React 19+ (compiler optimizations reduce need for memo/useCallback)
- React Aria (for interactive components to acheive excellent accessibility)
- vanilla-extract (all styling via sprinkles)
- Vitest
- Storybook (interactive component testing via play functions)

## Critical Rules

1. **NO new dependencies** - use existing only
2. **Always use design tokens** from `/lib/themes/theme.css.ts`
3. **Compose from primitives** (Box, Text, Icon, etc.)
4. **Fix all linting/TypeScript errors** in modified files
5. **Set displayName** on all components

## Component Structure

```
lib/components/ComponentName/
├── ComponentName.tsx         # Component logic
├── ComponentName.css.ts      # vanilla-extract styles
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.spec.tsx    # Unit tests (only for internals)
└── index.ts                  # Exports
```

## Performance Guidelines

### React 19 Optimizations

- **Automatic optimizations**: React 19 compiler handles most memo/callback
  optimizations
- **When to still optimize manually**:
  - Heavy computational functions inside components
  - Complex object/array transformations
  - Expensive child component renders with stable props
  - Event handlers passed to many children

### Performance Considerations

- Avoid inline object/array creation in render
- Avoid function components defined inside a component or other unstable
  functions
- Use stable references for callbacks passed as props
- Look for unstable props or children
- Debounce/throttle expensive operations

## Modularity & Reusability Patterns

### Component Composition Blueprint

- Write component structure consistently with existing components
- Composite components ensure the props extend TestId to receive the `testId`
  prop
- Composite components ensure to set the Box prop `odComponent` value to the
  component name
- State that affects UI should have a data attribute rendered on the component
- Use the `dataAttr` helper util to manage the custom data attributes

```typescript
// 1. Define reusable types
export interface ComponentBaseProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

// 2. Create composable hook
export const useComponentLogic = <T extends HTMLElement = HTMLDivElement>(
  props: ComponentBaseProps
) => {
  const [state, setState] = useState();
  const ref = useRef<T>(null);

  const handlers = {
	onClick: useCallback(() => {}, []),
	onKeyDown: useCallback(() => {}, []),
  } as const;

  return { state, handlers, ref } as const;
};

// 3. Build component using primitives
export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ children, ...props }, ref) => {
	const { state, handlers } = useComponentLogic(props);

	return (
	  <Box ref={ref} {...handlers} {...props} {...dataAttrs({ componentState: state })}>
		<Text>{children}</Text>
	  </Box>
	);
  }
);
```

### React Aria Integration

```typescript
// For interative elements use React Aria
import { useButton, useToggleButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';

import { dataAttrs } from '../../utils/dataAttrs';

export const AriaButton = (props: AriaButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
	<button
	  {...mergeProps(buttonProps, focusProps)}
	  className={styles.button}
	  ref={ref}
	  {...dataAttrs({ pressed: isPressed, 'focus-visible': isFocusVisible })}
	>
	  {props.children}
	</button>
  );
};
```

### Reusability Considerations

- Can this logic be extracted into a hook?
- Are we using existing primitives as building blocks?
- Can this be a compound component pattern?
- Are props generic enough for multiple use cases?
- Is the component single-responsibility?
- Can styles be shared via sprinkles utilities?

## Linting & Code Quality

- No ESLint errors in modified files
- No TypeScript errors
- All imports are used
- No console.log statements
- Component has displayName
- Props have JSDoc comments
- No `any` types (use unknown or proper types)
- No magic numbers (use constants/tokens)
- Consistent naming conventions

### Common Linting Patterns to Fix

```typescript
// BAD
const Component = (props) => { // Missing types
  console.log(props); // Console statement
  const unused = 'value'; // Unused variable
  return <div style={{color: 'red'}} />; // Inline styles
};

// GOOD
export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'primary', ...props }, ref) => {
	return <Box ref={ref} className={styles.root({ variant })} {...props} />;
  }
);
Component.displayName = 'Component';
```

## Style Implementation

### vanilla-extract Best Practices

```typescript
import { sprinkles } from '../../css/sprinkles.css';

// A mix of responsive props and simple boolean props will be custom mapped
export interface RowProps {
  /** Cross-axis horizontal alignment of items (_responsive_) */
  align?: ResponsiveFlexProps['justifyContent'];
  /** Shortcut center horizontal alignment */
  center?: boolean;
  /** Shortcut end/bottom alignment */
  end?: boolean;
  /** Item horizontal spacing (_responsive_)*/
  gap?: ResponsiveFlexProps['gap'];
  /** Prevent items from wrapping to the next row */
  noWrap?: boolean;
  /** Main-axis (horizontal) alignment of items (_responsive_) */
  justify?: ResponsiveFlexProps['alignItems'];
  /** Reverse item order */
  reverse?: boolean;
  /** Shortcut `space-between` justification */
  spaceBetween?: boolean;
  /** Shortcut start/top alignment */
  start?: boolean;
}

// Define custom mapping functions to turn the props into a `sprinkles` function call
const rowPropMapping = ({
  align = 'start',
  center,
  end,
  gap = '2',
  noWrap,
  justify,
  reverse,
  spaceBetween,
  start,
}: RowProps) =>
  ({
    alignItems: justify,
    display: 'flex',
    flexDirection: (reverse && 'row-reverse') || 'row',
    flexWrap: noWrap === true ? 'nowrap' : 'wrap',
    gap,
    justifyContent:
      (start && 'start') ||
      (center && 'center') ||
      (end && 'end') ||
      (spaceBetween && 'space-between') ||
      align,
  }) satisfies Sprinkles;

// Prefer use of data attributes for state-based styling
export const stateStyles = style({
  selectors: {
    '&[data-pressed="true"]': {
      transform: 'scale(0.98)',
    },
    '&[data-focus-visible="true"]': {
      outline: '2px solid',
      outlineColor: vars.color.focus,
      outlineOffset: 2,
    },
  },
});
```

## Component Documentation Template

````typescript
export interface ComponentProps extends BoxProps {
  /** The visual style variant */
  variant?: 'primary' | 'secondary';

  /** Size of the component */
  size?: 'small' | 'medium' | 'large';

  /** Whether the component is disabled */
  disabled?: boolean;

  /** Callback fired when activated */
  onActivate?: () => void;
}

/**
 * Component description for Storybook
 *
 * @example
 * ```tsx
 * <Component variant="primary" size="medium">
 *   Content
 * </Component>
 * ```
 */
export const Component = forwardRef<HTMLDivElement, ComponentProps>(...);
````

## Available Components Reference

### Primitives to Compose From

Box, Text, Icon, Heading, Section, Stack, Inline, Columns

### Form Building Blocks

Button, TextInput, TextAreaInput, SelectInput, CheckBox, Radio, Switch,
NumberInput, DateInput, SearchBar, EditableText, ColourInput

### Display Components

Badge, Alert, Table, ProgressBar, StarRating, NumberBubble, Tooltip, LoadingBox

### Navigation Components

Tabs, Pagination, TextLink, Anchor, Actions, DropDown, SideMenu

### Layout Utilities

FillHeightBox, StickyBox, TextContainer, DividerLine, ScrollPane,
HorizontalAutoScroller

### Overlay Components

Modal, StandardModal, MinimalModal, Flyout, Toaster, Portal

### List Components

BulletList, OrderedList, OptionList, OptionGrid, AutoSuggest

### Utility Components

VisuallyHidden, OutsideClick, Positioner, Image, Stepper

### Internal

CheckableBase, InputBase

### Context Provider

OverdriveProvider
