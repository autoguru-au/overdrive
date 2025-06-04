# GitHub Copilot Instructions for Our React Component Library

## Overview

This document provides guidelines for using GitHub Copilot within this React
component library. Our goal is to maintain high-quality, performant, accessible,
and well-documented components.

## Core Technologies & Libraries

Adhere to the patterns and best practices of the following:

- **Yarn**: Yarn 4 is used for CLI commands.
- **React (v19+)**: Leverage modern React features. Be mindful that React 19
  introduces compiler optimizations (e.g., `React.memo` might be handled
  automatically by `react-compiler`), so some manual optimizations like
  `useMemo`, `useCallback`, and `React.memo` might become less necessary. Focus
  on clean, readable code.
- **vanilla-extract**: For all styling. Utilize its various approaches (e.g.,
  `sprinkles`, `recipes`) appropriately. The sprinkles generate a large
  combination of CSS utility classes and so they should be reused wherever
  possible to maximise effectiveness. Ensure styles are type-safe and efficient.
- **Vitest**: For unit and integration testing. Write comprehensive tests for
  component logic, props, and interactions. Only core component internals and
  helpers should have thorough unit tests. The focus is more on Storybook play
  functions for component interactive tests.
- **Storybook**: For component development, documentation, and visual testing.
  Follow best practices for creating informative and interactive stories. All
  stories are run through the Chormatic service for visual regression checking.
- **React Aria**: We are gradually adopting React Aria for enhanced
  accessibility and interactions. When uplifting or creating new interactive
  components, consider using React Aria hooks and components.
- **Composition over Inheritance**: Prefer composing functionality by using
  existing primitive components (e.g., `Box`, `Text`, `Icon`) as building
  blocks.

## IMPORTANT: After each task is actioned

### 1. Versioning and Changeset

This package uses the `changeset` library to handle versioning. As part of each
task completion where a change is made that needs to published, never forget to
run `yarn changeset` and generate an randomely named changeset file in the
'.changeset' folder.

### 2. Always generate a changeset file for each task or pull request

Changesets are always **minor** or **patch**. Major versions should never be
generated as part of a task completion. No pull request with publishable changes
will be approved that is missing a changeset as this will trigger the versioning
script in the workflow.

### 3. Formatting

The `yarn format` command should be used prior to a commit so that formatting
remains consistent.

## Guiding Principles

### 1. Simplicity and Clarity

- **Write clear, concise, and understandable code.** Avoid overly complex
  solutions.
- **Prioritize readability.** Code should be easy for other developers to pick
  up and maintain.
- **Comment complex logic** or non-obvious decisions.

### 2. Performance

- **Build performant components by default.**
- **Be mindful of re-renders.** While React 19's compiler will help, still be
  conscious of potential performance bottlenecks. Copilot should help identify
  and flag unnecessary re-renders.
- **Avoid premature optimization.** Profile and identify actual bottlenecks
  before applying complex optimizations.

### 3. Component Design

- **File Structure**:
    - Each component resides in its own directory (e.g.,
      `lib/components/ComponentName/`).
    - Key files typically include:
        - `ComponentName.tsx`: Main component logic and JSX.
        - `ComponentName.css.ts`: Styles defined using `vanilla-extract`.
        - `index.ts`: Exports the component, props types, and other relevant
          parts.
        - `ComponentName.stories.tsx`: Storybook stories.
        - `ComponentName.spec.tsx`: Vitest unit tests tests - preferred only for
          core components and primatives that are more difficult to interaction
          test with the Storybook play function.
- **Props Definition**:
    - Define props using TypeScript interfaces or types (e.g.,
      `ComponentNameProps`).
    - Often, props extend a base type like `BoxProps`.
    - Use JSDoc comments extensively for clear prop documentation for Storybook.
      But avoid overly verbose descriptions and prefer simple clear language.
    - Set default prop values directly in the component's function signature
      destructuring.
- **Style Props & Styling (`vanilla-extract`)**:
    - Import styles from the co-located `ComponentName.css.ts` file (e.g.,
      `import * as styles from './ComponentName.css';`).
    - Utilize `vanilla-extract` features `recipes` and `sprinkles`. `recipes`
      can refer to `sprinkles` within the styles so that utility classes are
      best reused.
    - Use the `clsx` utility for conditional class name application.
    - Components may accept straightforward style props, typically managed via
      `sprinkles` or `recipes`.
- **`displayName`**: Always set a `displayName` for components for better
  debugging.
- **`data-*` Attributes**: Move towards utilizing `data-*` attributes (e.g., via
  a `dataAttrs` utility) for state-based styling.

### 4. Testing

- **Vitest**:
    - Aim for high test coverage.
    - Test component behavior, not just implementation details.
    - Use `@testing-library/react` for querying and interacting with components.
- **Storybook**:
    - Create stories for all components and their variants.
    - Use controls to showcase different props and states.
    - Write clear descriptions for stories and props in the `argTypes`
      documentation.
    - Ensure stories cover interaction states (hover, focus, active, disabled).
    - Test keyboard interactions thoroughly within Storybook.

### 5. Documentation

- **Component User Documentation is Key**: Storybook serves as our primary
  documentation for component users.
- **Props**: Clearly document all props, their types, default values, and
  purpose using JSDoc comments, which Storybook will pick up.
- **Usage Examples**: Provide clear and practical usage examples in stories.
- **Accessibility Notes**: Document any specific accessibility considerations or
  patterns used in the component.

### 6. Accessibility (a11y)

- **Adhere to WCAG 2.1 AA guidelines.**
- **Semantic HTML**: Use appropriate HTML elements for their intended purpose.
- **Keyboard Navigation**: All interactive elements must be fully operable via
  keyboard. Test tab order, focus states, and keyboard-specific interactions
  (e.g., Enter, Space, Escape keys).
- **Focus Management**: Ensure logical focus management, especially for
  interactive and modal components.
- **ARIA Attributes**: Use ARIA attributes correctly when native semantics are
  insufficient. Prefer native HTML elements where possible.
- **`react-aria` Adoption**: For new complex interactive components (e.g.,
  modals, dropdowns, date pickers) or when uplifting existing ones, prioritize
  using `react-aria` hooks and components to leverage their built-in
  accessibility features.
- **Color Contrast**: Ensure sufficient color contrast for text and UI elements.
- **Internationalization (i18n)**: Design components with internationalization
  in mind. Avoid hardcoding text that may need translation; use placeholders or
  a designated i18n system if applicable.

### 7. Error Handling and Resilience

- **Graceful Degradation**: Components should handle unexpected prop values or
  states gracefully.
- **Prop Validation**: Clearly define and validate critical props.
- **User Feedback**: Provide clear feedback for errors or invalid states where
  appropriate.

### 8. Security

- **Prevent XSS**:
    - Be cautious with `dangerouslySetInnerHTML`. Avoid it whenever possible. If
      used, ensure the HTML content is properly sanitized.
    - Do not directly render user-provided strings as HTML without sanitization.
- **Props Injection**: Ensure that props passed to underlying elements do not
  inadvertently introduce security vulnerabilities (e.g., injecting arbitrary
  attributes).
- **Third-party Libraries**: Be mindful of the security implications of any
  third-party libraries integrated into components.

### 9. Theming and Customization

- **Leverage `vanilla-extract` Theming**: Utilize `vanilla-extract`'s theming
  capabilities, **prioritizing the use of existing global design tokens** (all
  colors, spacing, typography, etc. must come from the tokens) to ensure
  consistency and maintainability. Components should be easily adaptable to
  different visual themes through these tokens.
- **Tokens Contract**: The theme contract is established in the
  `/lib/themes/theme.css.ts` file and exports the type `ThemeTokens` which is
  the theme contract structure that enforced at build time by vanilla-extract.
- **Customization Points**: Provide clear and documented ways for consumers to
  customize component appearance and behavior beyond standard props where
  appropriate, ideally by extending or overriding theme tokens.

### 10. Code Style and Linting

- Adhere to the project's ESLint and Prettier configurations.
- Copilot suggestions should align with these established styles.

## Additional instructions

- **Dependencies**: **Strictly avoid adding new dependencies as part of task
  completion.** Always review and utilize existing project dependencies.
