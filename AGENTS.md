# Overdrive Design System Rules

Rules for building accessible, reusable React components in AutoGuru's design
system. Use MUST/SHOULD/NEVER to guide decisions.

## Architecture

- MUST: Compose from primitives (useBox, Text, FlexStack) rather than creating
  new base elements **or** an equivalent styling helper functions listed below
- NEVER: Add new dependencies without approval - use existing dependencies only
- SHOULD: Use React Aria for new components to ensure accessibility
- SHOULD: Extend `TestId` interface for all components to receive `testId` prop
- SHOULD: Set `displayName` on all components for debugging
- SHOULD: Set `odComponent` prop to component name on Box for composite
  components

## Styling

- MUST: Use Vanilla Extract CSS-in-TypeScript for all styling
- MUST: Use design tokens from `/lib/themes/theme.css.ts` - no hardcoded values
- MUST: Prefer style functions (`elementStyles`/`sprinkles`/`textStyles`) over
  `<Box>` component
- NEVER: Use inline styles or magic numbers
- SHOULD: Use `dataAttrs` helper for state-based styling via data attributes
- SHOULD: Use `sprinkles` function for responsive and utility styles
- SHOULD: Wrap all component styles in `cssLayerComponent` CSS layer

## Development Commands

```bash
yarn test run Com. ponentName # Run specific component tests
yarn format                   # Format the project consistently
yarn lint                     # Run ESLint and TypeScript checks
yarn plop component           # Generate new component scaffold
```

### Directory Structure

```
lib/
├── components/         # All UI components
├── hooks/              # Reusable React hooks
├── styles/             # Vanilla Extract styling system
├── themes/             # Design tokens and themes
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## Component Structure

```
lib/components/ComponentName/
├── ComponentName.tsx         # Component logic
├── ComponentName.css.ts      # Vanilla Extract styles
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.spec.tsx    # Unit tests
└── index.ts                  # Exports
```

## Props & TypeScript

- MUST: Define comprehensive TypeScript props with JSDoc comments and export
  them
- MUST: Prefer extending exisiting interfaces/types, keep names consistent
- MUST: Use kebab-case for prop values that mirror CSS (e.g., `flex-end`)
- NEVER: Use `any` types - use `unknown` or proper types

## Sprinkles Usage

- MUST: Use responsive patterns: arrays `['block', 'flex']` or objects
  `{mobile: 'block', tablet: 'flex'}`
- MUST: Use design system breakpoints:
  `mobile | tablet | desktop | largeDesktop`
- SHOULD: Use `color` (American) for new design system tokens
- SHOULD: Use `colour` (British) for legacy palette when needed
- SHOULD: Use space tokens (`'1'` to `'9'`) for dimensions and spacing

## Testing & Storybook

- MUST: Create Storybook stories for all components (primary testing method)
- MUST: Use existing top-level categories
- MUST: Use `getAllByRole` and take first item instead of `getByRole` in
  Storybook play functions
- MUST: Test 1 story per component: Interaction Test
- MUST: Use semantic queries in tests instead of test IDs
- SHOULD: Create unit tests only for primitives with complex internal logic
- SHOULD: Organise story play functions into smaller tests with `step` funtions

## Quality Standards

- MUST: Use semantic HTML and proper ARIA attributes
- MUST: Fix all ESLint and TypeScript errors before committing
- MUST: Run `yarn lint` and `yarn test:ci` to verify code quality
- NEVER: Leave unused imports, console statements, or missing displayNames

## Accessibility

- MUST: Full keyboard support per
  [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/)
- MUST: Visible focus rings and proper focus management
- MUST: Ensure visible focus indicators with `:focus-visible`
- MUST: Support screen readers with proper ARIA attributes
- MUST: Provide accessible names and hide decorative elements with `aria-hidden`

## Performance

- MUST: Minimise re-renders
- SHOULD: Rely on React 19's automatic compiler optimizations where possible
- SHOULD: Manual optimization only for heavy computations, complex
  transformations, and expensive renders
