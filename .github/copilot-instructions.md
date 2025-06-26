# Copilot Instructions - React Component Library

## Tech Stack

- React 19+ (compiler optimizations reduce need for memo/useCallback)
- vanilla-extract (all styling via sprinkles/recipes)
- Vitest (unit tests for helpers/hooks only)
- Storybook (interactive component testing via play functions)
- React Aria (for complex interactive components)
- Yarn 4 (package manager)

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

### Performance Checklist

- [ ] Avoid inline object/array creation in render
- [ ] Use stable references for callbacks passed as props
- [ ] Lazy load heavy components with React.lazy()
- [ ] Virtualize long lists (use existing virtualization components)
- [ ] Debounce/throttle expensive operations
- [ ] Profile before optimizing - use React DevTools Profiler

### vanilla-extract Performance

```typescript
// BAD - creates new styles on every render
const dynamicStyle = style({ color: props.color });

// GOOD - use recipes with variants
export const root = recipe({
	variants: {
		color: {
			primary: sprinkles({ color: 'primary' }),
			secondary: sprinkles({ color: 'secondary' }),
		},
	},
});
```

## Modularity & Reusability Patterns

### Component Composition Blueprint

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
      <Box ref={ref} {...handlers} {...props}>
        <Text>{children}</Text>
      </Box>
    );
  }
);
```

### Reusability Checklist

- [ ] Can this logic be extracted into a hook?
- [ ] Are we using existing primitives as building blocks?
- [ ] Can this be a compound component pattern?
- [ ] Are props generic enough for multiple use cases?
- [ ] Is the component single-responsibility?
- [ ] Can styles be shared via sprinkles utilities?

### Compound Component Pattern

```typescript
const ComponentContext = createContext<ComponentState | null>(null);

export const Component = Object.assign(ComponentRoot, {
  Item: ComponentItem,
  Trigger: ComponentTrigger,
  Content: ComponentContent,
});

// Usage
<Component>
  <Component.Trigger>Open</Component.Trigger>
  <Component.Content>
    <Component.Item>Option 1</Component.Item>
  </Component.Content>
</Component>
```

## Linting & Code Quality

### Pre-Commit Checklist

- [ ] No ESLint errors in modified files
- [ ] No TypeScript errors
- [ ] All imports are used
- [ ] No console.log statements
- [ ] Component has displayName
- [ ] Props have JSDoc comments
- [ ] No any types (use unknown or proper types)
- [ ] No magic numbers (use constants/tokens)
- [ ] Consistent naming conventions

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

## Testing Strategy

### What to Test Where

```typescript
// Vitest - Unit test internal logic
describe('useComponentLogic', () => {
	it('should handle state changes', () => {
		const { result } = renderHook(() => useComponentLogic());
		act(() => result.current.handlers.onClick());
		expect(result.current.state).toBe(expected);
	});
});

// Storybook - Test user interactions
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		await userEvent.click(button);
		await expect(button).toHaveAttribute('aria-pressed', 'true');

		await userEvent.keyboard('{Tab}');
		await expect(button).toHaveFocus();
	},
};
```

### Testing Checklist

- [ ] Unit tests for all custom hooks
- [ ] Unit tests for utility functions
- [ ] Storybook stories for all variants
- [ ] Play functions for interactions
- [ ] Keyboard navigation tested
- [ ] Screen reader announcements tested
- [ ] Error states tested
- [ ] Loading states tested
- [ ] Edge cases covered

## Accessibility Assessment Criteria

- [ ] **Keyboard Navigation**
    - [ ] Tab order is logical
    - [ ] All interactive elements reachable
    - [ ] Enter/Space activates buttons
    - [ ] Escape closes overlays
    - [ ] Arrow keys for navigation where expected
- [ ] **Screen Reader**
    - [ ] Proper semantic HTML or ARIA role
    - [ ] Descriptive aria-labels
    - [ ] States announced (expanded, selected, etc.)
    - [ ] Live regions for dynamic content
    - [ ] Error messages associated with inputs
- [ ] **Visual**
    - [ ] Focus indicators visible
    - [ ] Color contrast ≥ 4.5:1 (text), ≥ 3:1 (UI)
    - [ ] Touch targets ≥ 44x44px
    - [ ] No color-only information
- [ ] **Motion**
    - [ ] Respects prefers-reduced-motion
    - [ ] Animations can be paused/stopped
    - [ ] No seizure-inducing flashing

### React Aria Integration

```typescript
// For complex interactions, use React Aria
import { useButton, useToggleButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';

export const AriaButton = (props: AriaButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      data-pressed={isPressed}
      data-focus-visible={isFocusVisible}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};
```

## Style Implementation

### vanilla-extract Best Practices

```typescript
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../css/sprinkles.css';

// Define variants using sprinkles for reusability
export const root = recipe({
	base: [
		sprinkles({
			display: 'flex',
			alignItems: 'center',
			padding: 'medium',
			borderRadius: 'medium',
			transition: 'colors',
		}),
	],
	variants: {
		variant: {
			primary: sprinkles({
				background: 'brandPrimary',
				color: 'white',
			}),
			secondary: sprinkles({
				background: 'transparent',
				color: 'brandPrimary',
				border: 'standard',
			}),
		},
		size: {
			small: sprinkles({ padding: 'small' }),
			medium: sprinkles({ padding: 'medium' }),
			large: sprinkles({ padding: 'large' }),
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
	},
});

// Use data attributes for state-based styling
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

### Context Provider

OverdriveProvider

###
