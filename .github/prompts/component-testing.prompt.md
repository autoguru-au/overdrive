---
mode: agent
---

# Component Testing and Storybook Generation

This prompt is for generating or updating spec files and Storybook stories for
React components in the Overdrive design system.

## Context

You are working with a React component library that uses:

- **Vitest** for unit and integration testing with `@testing-library/react`
- **Storybook** for component development, documentation, and visual testing
- **TypeScript** for type safety
- **vanilla-extract** for styling

## Guidelines

### Do

- Focus on user-facing behavior over implementation details
- Test accessibility features thoroughly
- Use descriptive test and story names
- Include edge cases and error states
- Prefer the Storybook `decorators` wrapper instead of a custom `render`
  function in a story
- Aim for 5 stories per component, or less
- Leverage existing stories in spec files via `composeStories`
- Write play functions for interactive components
- Document complex interactions in story descriptions

### Don't

- Duplicate testing between stories and specs
- Add custom `options` or `description` to Storybook argTypes
- Use overly complex story setups or put the main children content in a `render`
  function
- Use the `style` prop directly in the story, import and use the `sprinkles`
  function or another internal style util
- Skip accessibility testing
- Add new dependencies
- Write a lot of stories unless it is particularily complex component

### Terminal Commands

After creating or updating tests, always run:

```bash
# Run tests
yarn test run [ComponentName]

# Update snapshots if needed
yarn test run [ComponentName] -u
```

## Task Types

### 1. New Component Testing Setup

When a new component has been created, generate:

1. A comprehensive Storybook stories file (`ComponentName.stories.tsx`)
2. A focused spec file for core functionality (`ComponentName.spec.tsx`) - only
   if the component is a primitive or has complex internal logic

### 2. Updated Component Testing

When an existing component has been modified, update:

1. The existing Storybook stories to reflect new props, variants, or behaviors
2. The spec file to test new functionality or fix broken tests

## Storybook Stories Requirements

### File Structure

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';

// Use the `sprinkles` function for local styling, except for width/height, if any is needed in a story
// Always use the `valueArrays` to populate the argTypes
import {
  sprinkles,
  type Sprinkles,
  valueArrays,
} from '../../styles/sprinkles.css';

import { ComponentName, type ComponentNameProps } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Category/ComponentName',
  component: ComponentName,
  tags: ['polymorphic'], // if applicable
  args: {
    // Populate component-specific args here so that correct defaults are set in the story
  },
  argTypes: {
    // Declare options here from `valueArray`
    // No add `control` or `description` values for argTypes here, they are inferred from typescript
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;
```

### Story Categories

Use appropriate categories in the `title` field:

- `Primitives/` - For base components (Button, Box, Text, etc.)
- `Layout/` - For layout components (Stack, Inline, Columns, etc.)
- `Forms/` - For form controls (TextInput, CheckBox, etc.)
- `Navigation/` - For navigation components (Tabs, Pagination, etc.)
- `Feedback/` - For status/feedback components (Alert, Badge, etc.)
- `Overlays/` - For modal/overlay components (Modal, Tooltip, etc.)
- `Data Display/` - For data presentation components (Table, ProgressBar, etc.)

### Required Stories

1. **Standard** - Basic usage example
2. **Variants** - Different visual variants (if applicable)
3. **Interactive States** - Hover, focus, active, disabled states
4. **Edge Cases** - Long text, empty states, error states
5. **Accessibility** - Keyboard navigation, screen reader scenarios

### Documentation

- Provide meaningful control options in `argTypes`
- Document accessibility considerations

### Play Functions

Include interactive tests using Storybook's play function for:

- User interactions (hover, click, keyboard navigation)
- Form validation
- State changes
- Accessibility testing

```tsx
export const InteractiveExample: Story = {
  args: {
    // story-specific args
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Test interaction description', async () => {
      // Test implementation
      const element = canvas.getByRole('button');
      await userEvent.click(element);
      await expect(element).toHaveAttribute('aria-pressed', 'true');
    });
  },
};
```

## Spec File Requirements

### When to Create Specs

Only create spec files for:

- Primitive components with complex internal logic
- Components with significant state management
- Components with critical accessibility features
- Utility components and hooks

### File Structure

```tsx
import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { ComponentName } from './ComponentName';
import * as stories from './ComponentName.stories';

const { Standard, VariantName } = composeStories(stories);

describe('<ComponentName />', () => {
  // Test stories first
  it('renders the standard story', async () => {
    await Standard.run();
    // Assertions
  });

  // Then test component-specific logic
});
```

### Only use stories in the render function

- `render` functions in the spec file should only use story components
- Add any props necessary to the story component
- Don't use the published React component directly in the `render` function

### Testing Priorities

1. **Story Composition** - Use `composeStories` to test stories directly
2. **Component Behavior** - Test logic, not implementation details
3. **Props Validation** - Test prop handling and edge cases
4. **Accessibility** - Test ARIA attributes, keyboard navigation
5. **Error Handling** - Test graceful degradation

### Testing Patterns

- Use semantic queries (`getByRole`, `getByLabelText`) over test IDs
- Test user interactions with `@testing-library/user-event`
- Use snapshot testing sparingly, only for complex DOM structures
- Mock external dependencies appropriately

## Accessibility Testing

Ensure comprehensive accessibility testing in both stories and specs:

- Keyboard navigation (Tab, Enter, Space, Escape, Arrow keys)
- Screen reader compatibility (proper ARIA attributes)
- Focus management
- Color contrast requirements
- Internationalization considerations

## Performance Considerations

For complex components, consider:

- Testing rendering performance with large datasets
- Memory leak testing for components with event listeners
- Proper cleanup in useEffect hooks
- Optimal re-render behavior

Remember: The goal is to ensure components work correctly for users while
maintaining high code quality and accessibility standards.
