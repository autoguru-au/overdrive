# Overdrive Component Library - Quick Reference

## At a Glance

| Category             | Details                   |
| -------------------- | ------------------------- |
| **Version**          | 4.50.0                    |
| **Total Components** | 73 UI components          |
| **React Version**    | 19.1.1 (supports 18+)     |
| **TypeScript**       | 5.9.2 (strict mode)       |
| **Styling**          | Vanilla Extract CSS-in-TS |
| **Package**          | @autoguru/overdrive (npm) |
| **Docs**             | overdrive.autoguru.io     |

## Component Count by Category

- **Primitives**: 10 (Box, Text, Flex, Stack, etc.)
- **Forms & Inputs**: 14 (TextInput, DatePicker, Calendar, etc.)
- **Navigation**: 9 (Tabs, Pagination, Stepper, etc.)
- **Content Display**: 15 (Heading, Badge, Image, etc.)
- **Modals & Overlays**: 6 (Modal, Popover, Tooltip, etc.)
- **Interactive**: 9 (Button, Toaster, Actions, etc.)

## Key Technologies

### Core Stack

- React 19.1.1 + React DOM
- TypeScript 5.9.2
- Vanilla Extract (CSS-in-TS)

### Tooling

- **Build**: Babel 7.28.3 + Vite 7.1.7
- **Lint**: ESLint 9.38.0 (flat config)
- **Format**: Prettier 3.6.2
- **Tests**: Vitest 3.2.4
- **Dev Docs**: Storybook 9.1.10
- **CI/CD**: GitHub Actions

### State & Positioning

- PopperJS 2.11.8 (positioning)
- React Focus Lock 2.13.6 (focus trapping)
- React Intersection Observer 9.16.0
- React Swipeable 7.0.2

## Quick Commands

```bash
# Development
yarn storybook              # Start dev server (port 6006)
yarn build                  # Build for distribution

# Code Quality
yarn lint                   # ESLint + TypeScript
yarn format                 # Prettier format
yarn lint:eslint            # ESLint only

# Testing
yarn test                   # Watch mode
yarn test:ci                # CI with coverage
yarn test:a11y              # Storybook tests
yarn test ComponentName      # Specific component

# Analysis
yarn analyse                # Bundle analysis
yarn chromatic              # Visual regression tests
yarn check-deps             # Update check

# Component Generation
yarn plop component         # New component scaffold
yarn typeEmit               # Generate type declarations
```

## Design System

### Themes (3 Available)

1. **baseTheme** (default) - AutoGuru primary
2. **flatRedTheme** - Red variant
3. **neutralTheme** - Grayscale variant

### Responsive Breakpoints

- `mobile` | `tablet` | `desktop` | `largeDesktop`

### Space Tokens

- Values `'1'` through `'9'` for spacing/sizing

### Color Tokens

- NEW: `color` (American)
- LEGACY: `colour` (British)

## File Structure

```
lib/
├── components/             # 73 UI components
├── hooks/                  # 13 custom hooks
├── styles/                 # Vanilla Extract utilities
├── themes/                 # Design tokens & themes
├── utils/                  # 20+ utility functions
├── types/                  # TypeScript definitions
└── stories/                # Storybook documentation
```

## CI/CD

- **Linting**: Pre-commit with husky + lint-staged
- **Testing**: Unit tests + Storybook browser tests
- **Coverage**: Codecov integration
- **Visual**: Chromatic on all PRs (TurboSnap enabled)
- **Releases**: Changesets-based versioning

## Accessibility Focus

- Full keyboard support
- React Aria integration
- Visible focus indicators (`:focus-visible`)
- Screen reader support

## Code Quality Standards

✅ **MUST DO:**

- Vanilla Extract CSS
- Design tokens only (no hardcoded values)
- Storybook stories for all components
- Full keyboard/accessibility support
- Strict TypeScript
- Fix all ESLint errors

❌ **NEVER:**

- Inline styles or magic numbers
- Hardcoded values
- Unused imports/variables/parameters
- Console statements
- Missing displayNames

---

**Last Updated**: October 23, 2025
