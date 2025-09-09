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
  it('renders with default props');
  it('handles user interactions correctly');
  it('supports accessibility features');
  it('handles edge cases and errors');
});

// Complex interactive component (max 8 tests)
describe('{{componentName}}', () => {
  it('renders with default props');
  it('handles primary user interactions');
  it('handles secondary user interactions');
  it('supports keyboard navigation');
  it('manages focus correctly');
  it('handles error states');
  it('integrates with external systems');
  it('supports accessibility features');
});
```

### Quality Standards

- Use `@testing-library/user-event` for interactions
- Prefer semantic queries over test IDs
- Test behavior, not implementation
- Keep tests simple and readable
- Mock external dependencies appropriately
- Follow existing codebase patterns

### Common Patterns

```typescript
// Testing stories with composeStories
import { composeStories } from '@storybook/react';
import * as stories from './{{componentName}}.stories';
const { Default, Interactive } = composeStories(stories);

// Testing accessibility
expect(screen.getAllByRole('button')[0]).toHaveAttribute('aria-label');

// Testing user interactions
await user.click(screen.getAllByRole('button')[0]);
await user.keyboard('{Enter}');
```

Remember: Quality testing means **testing the right things well**, not testing everything exhaustively.