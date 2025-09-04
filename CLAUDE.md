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
- Include play functions for interactive components, and always query with
  `getAllbyRole` and take first item in array instead of `getByRole`
- Use `composeStories` in spec files instead of testing components directly
- Use `sprinkles` function for styling in stories, never `style` prop
- Use `valueArrays` to populate argTypes, don't add custom `control` or
  `description`

### Accessibility Testing Requirements

- Keyboard navigation (Tab, Enter, Space, Escape, Arrow keys)
- Screen reader compatibility (proper ARIA attributes)
- Focus management and visual focus indicators
- Color contrast requirements
- Test using semantic queries (`getAllByRole`, `getByLabelText`) over test IDs

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
