---
name: testing
description: Improve test coverage for an Overdrive component
allowed-tools: Bash(yarn test *), Bash(yarn test:a11y), Bash(yarn lint*), Read, Glob, Grep, Edit, MultiEdit, Write
arguments:
  - name: componentName
    description: Name of the component to improve testing for (e.g., "Button", "DatePicker")
    required: true
---

# Improve Component Testing Coverage

Analyze and improve test coverage for the **{{componentName}}** component, focusing on essential scenarios while maintaining Overdrive's testing philosophy of quality over quantity.

## Process for {{componentName}}

1. **Analyze existing tests** - Review current `{{componentName}}.spec.tsx` and `{{componentName}}.stories.tsx` files
2. **Identify gaps** - Find missing test scenarios based on {{componentName}} functionality  
3. **Write focused tests** - Create concise tests that cover critical {{componentName}} behavior
4. **Update stories** - Ensure Storybook stories provide comprehensive {{componentName}} interaction testing
5. **Iterate and refine** - Run tests, fix issues, ensure linting passes

## Testing Guidelines

### Test Case Limits
- **Standard components**: Maximum 4 test cases
- **Complex interactive components**: Maximum 8 test cases
- Focus on **essential behavior** rather than exhaustive coverage
- Prioritize **user-facing functionality** over implementation details

### What to Test

**High Priority:**
- Core component functionality and user interactions
- Accessibility features (keyboard navigation, ARIA attributes)
- Error states and edge cases
- Props validation and default behaviors

**Medium Priority:**
- Responsive behavior and different viewport scenarios
- Integration with design system (sprinkles, themes)
- Event handlers and state changes

**Low Priority (avoid):**
- Implementation details and internal state
- Styling specifics (covered by visual regression)
- Third-party library behavior

### Testing Strategy

**Storybook Stories (.stories.tsx):**
- Primary testing method for user-facing behavior
- Include play functions for interactive components
- Use semantic queries (`getAllByRole`, `getAllByLabelText`)
- Test keyboard interactions and accessibility

**Unit Tests (.spec.tsx):**
- Only for components with complex internal logic
- Focus on edge cases and error conditions
- Test accessibility features not covered in stories
- Use `composeStories` to test story variants

### Test Organization

```typescript
// Standard component structure (max 4 tests)
describe('{{componentName}}', () => {
  it('renders with default props and expected structure');
  it('handles user interactions and callbacks');
  it('supports accessibility and keyboard navigation');
  it('handles edge cases and prop variations');
});

// Complex interactive component (max 8 tests)
describe('{{componentName}}', () => {
  it('renders with default props and expected structure');
  it('handles primary user interactions and callbacks');
  it('supports keyboard navigation between elements');
  it('navigates or changes state with user actions');
  it('handles disabled states and restrictions');
  it('supports custom configurations and props');
  it('supports internationalization and customization');
  it('manages focus correctly for accessibility');
});
```

### Quality Standards

- Use `@testing-library/user-event` for interactions
- Prefer semantic queries over test IDs
- Test behavior, not implementation
- Keep tests simple and readable
- Mock external dependencies appropriately
- Follow existing codebase patterns

### Common Patterns & Templates

```typescript
// Basic test file template
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { {{componentName}} } from './{{componentName}}';
import * as stories from './{{componentName}}.stories';

const { Standard, Interactive } = composeStories(stories);

describe('{{componentName}}', () => {
  it('renders with default props and expected structure', () => {
    render(<Standard />);
    
    // Check core element presence
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });

  it('handles user interactions and callbacks', async () => {
    const user = userEvent.setup();
    const mockCallback = vi.fn();
    
    render(<{{componentName}} onCallback={mockCallback} />);
    
    await user.click(screen.getByRole('button'));
    expect(mockCallback).toHaveBeenCalled();
  });
});
```

### Interactive Component Patterns

```typescript
// Testing keyboard navigation
it('supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Standard />);
  
  await user.tab();
  await user.keyboard('{ArrowRight}');
  await user.keyboard('{Enter}');
  
  expect(document.activeElement).toBeTruthy();
});

// Testing disabled states  
it('handles disabled states correctly', () => {
  render(<Component disabled />);
  
  const buttons = screen.getAllByRole('button').filter(button => 
    button.hasAttribute('aria-disabled') && 
    button.getAttribute('aria-disabled') === 'true'
  );
  
  expect(buttons.length).toBeGreaterThan(0);
});

// Testing accessibility attributes
it('supports accessibility features', () => {
  render(<Standard />);
  
  expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  expect(screen.getByRole('grid')).toBeInTheDocument();
});
```

### Story Enhancement Patterns

```typescript
// Stories with play functions
import { expect, userEvent, within } from 'storybook/test';

export const Interactive: Story = {
  args: { /* story args */ },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    
    // Test interaction
    await user.click(canvas.getByRole('button'));
    
    // Verify result
    expect(canvas.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  },
};
```

### Common Gotchas & Solutions

1. **Import order**: Use `@storybook/react` before `@testing-library/react`
2. **React import**: Always import React when using JSX in tests  
3. **Story imports**: Import from `storybook/test` not `@storybook/test`
4. **Mock functions**: Use direct component rendering for testing callbacks
5. **Robust selectors**: Use `.filter()` for complex element selection
6. **Semantic queries**: Prefer `getAllByRole()[0]` over `getByRole()`
7. **Element counts**: Use `.toBeGreaterThan()` instead of exact counts
8. **Focus testing**: Test focus movement, not exact element matches

### Validation & Quality Checks

Always run these commands after implementing tests:

```bash
# Run component tests
yarn test {{componentName}}

# Run linting to catch style issues  
yarn lint

# Run accessibility tests via Storybook
yarn test:a11y
```

### Test Iteration Strategy

1. **Write basic structure tests first** - Verify rendering and core elements
2. **Add interaction tests** - Click, keyboard, form submission
3. **Enhance with edge cases** - Disabled states, error conditions
4. **Refine and fix** - Address test failures and linting issues
5. **Validate stories** - Ensure play functions work correctly

Remember: Quality testing means **testing the right things well**, not testing everything exhaustively.