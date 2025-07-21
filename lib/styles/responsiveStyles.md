# createResponsiveStyles Utility

A typesafe utility for creating responsive vanilla-extract styles based on
configured breakpoints from the `responsiveConditions` configuration.

## Overview

This utility provides a type-safe way to create responsive styles that work with
the existing vanilla-extract breakpoint configuration. It leverages the
configured `responsiveConditions` from the sprinkles system to ensure
consistency across the design system.

## Features

- **Type Safety**: Full TypeScript support with proper type inference
- **Breakpoint Validation**: Ensures only valid breakpoint keys are used
- **Flexible API**: Multiple ways to create responsive styles
- **Consistent Integration**: Works seamlessly with existing vanilla-extract
  setup

## API Reference

### `createResponsiveClass(styles: ResponsiveStyleMap): string`

Creates a single responsive style class that applies different styles at
different breakpoints.

**Parameters:**

- `styles`: Object defining styles for each breakpoint

**Returns:** A single vanilla-extract style class with responsive behavior

**Example:**

```typescript
import { overdriveTokens } from '../themes';

const responsiveClass = createResponsiveClass({
  mobile: {
    padding: overdriveTokens.space.md,
    fontSize: overdriveTokens.fontSize.sm
  },
  tablet: {
    padding: overdriveTokens.space.lg,
    fontSize: overdriveTokens.fontSize.md
  },
  desktop: {
    padding: overdriveTokens.space.xl,
    fontSize: overdriveTokens.fontSize.lg
  }
});

// Usage
<div className={responsiveClass}>Responsive content</div>
```

## Usage Examples

### Basic Responsive Component

```typescript
import { createResponsiveClass } from '../utils/createResponsiveStyles';
import { overdriveTokens } from '../themes';

const cardStyles = createResponsiveClass({
  mobile: {
    padding: overdriveTokens.space.md,
    borderRadius: overdriveTokens.radius.md,
    boxShadow: overdriveTokens.shadow.sm,
  },
  tablet: {
    padding: overdriveTokens.space.lg,
    borderRadius: overdriveTokens.radius.lg,
    boxShadow: overdriveTokens.shadow.md,
  },
  desktop: {
    padding: overdriveTokens.space.xl,
    borderRadius: overdriveTokens.radius.xl,
    boxShadow: overdriveTokens.shadow.lg,
  },
});

export const Card = ({ children, ...props }) => (
  <div className={cardStyles} {...props}>
    {children}
  </div>
);
```

## Integration with Existing System

This utility is designed to work seamlessly with the existing vanilla-extract
setup:

1. **Uses existing breakpoints**: Leverages the same breakpoint configuration as
   sprinkles
2. **Consistent media queries**: Uses the same `responsiveConditions` structure
3. **Type safety**: Integrates with existing TypeScript types
4. **Performance**: Generates optimized CSS with vanilla-extract
