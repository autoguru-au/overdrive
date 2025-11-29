# (POC - Work in progress) Dark Mode Implementation Guide

Overdrive now supports dark mode for all themes using a non-breaking, opt-in
color mode system.

## Overview

Dark mode is implemented using:

- **Color mode toggle**: `[data-od-color-mode=dark]` attribute
- **CSS variable overrides**: Same CSS variables, different values
- **Automatic system detection**: Respects `prefers-color-scheme` with manual
  override
- **Full backward compatibility**: All existing components work without changes

## Quick Start

### 1. Using the Hook (React)

The simplest way to add dark mode to your application:

```tsx
import { useColorMode } from '@autoguru/overdrive';

function App() {
  const { colorMode, toggleColorMode, isSystemMode } = useColorMode();

  return (
    <div>
      <p>Current mode: {colorMode}</p>
      <button onClick={toggleColorMode}>Toggle Dark Mode</button>
      {isSystemMode && <p>Following system preference</p>}
    </div>
  );
}
```

### 2. Using Utilities (Vanilla JS)

For non-React applications or manual control:

```javascript
import {
  initializeColorMode,
  setStoredColorMode,
  applyColorMode,
} from '@autoguru/overdrive';

// Initialize on app startup (respects system preference + localStorage)
const currentMode = initializeColorMode();

// Manually set dark mode
setStoredColorMode('dark');
applyColorMode('dark');

// Clear preference and follow system
setStoredColorMode(null);
applyColorMode(getSystemColorMode() || 'light');
```

### 3. Using Data Attributes (HTML)

Apply dark mode directly in HTML:

```html
<!-- Light mode (default) -->
<html data-od-theme="base" data-od-color-mode="light">
  <!-- Dark mode -->
  <html data-od-theme="base" data-od-color-mode="dark">
    <!-- Works with all themes -->
    <html data-od-theme="neutral" data-od-color-mode="dark">
      <html data-od-theme="flatRed" data-od-color-mode="dark"></html>
    </html>
  </html>
</html>
```

## API Reference

### `useColorMode()` Hook

React hook for managing color mode state.

```tsx
const {
  colorMode, // 'light' | 'dark' - Current active mode
  userPreference, // 'light' | 'dark' | null - User's saved preference
  systemPreference, // 'light' | 'dark' | null - OS preference
  isSystemMode, // boolean - True if following system, not manual
  setColorMode, // (mode: ColorMode) => void - Set mode explicitly
  resetToSystemMode, // () => void - Clear preference, follow system
  toggleColorMode, // () => void - Toggle between light/dark
} = useColorMode();
```

**Features:**

- Persists preference to localStorage
- Watches system preference changes
- Applies mode to document element
- Provides state and control utilities

### Color Mode Utilities

#### `initializeColorMode(): ColorMode`

Initialize color mode on app startup. Reads from localStorage or system
preference, applies to document element, and returns the applied mode.

```typescript
const mode = initializeColorMode();
// mode is 'light' | 'dark'
```

#### `getEffectiveColorMode(): ColorMode`

Get the effective color mode based on priority:

1. localStorage preference
2. System preference
3. 'light' (default)

```typescript
const mode = getEffectiveColorMode();
```

#### `applyColorMode(mode: ColorMode, element?: HTMLElement): void`

Apply color mode to an element (defaults to `document.documentElement`).

```typescript
applyColorMode('dark');
applyColorMode('light', customElement);
```

#### `setStoredColorMode(mode: ColorMode | null): void`

Store color mode preference in localStorage. Pass `null` to clear.

```typescript
setStoredColorMode('dark'); // Save preference
setStoredColorMode(null); // Clear preference
```

#### `getStoredColorMode(): ColorMode | null`

Get stored preference from localStorage.

```typescript
const stored = getStoredColorMode();
// Returns 'light', 'dark', or null
```

#### `getSystemColorMode(): ColorMode | null`

Get system color scheme preference from `prefers-color-scheme`.

```typescript
const system = getSystemColorMode();
// Returns 'light', 'dark', or null if not supported
```

#### `watchSystemColorMode(callback: (mode: ColorMode) => void): () => void`

Watch for system preference changes. Returns cleanup function.

```typescript
const cleanup = watchSystemColorMode((newMode) => {
  console.log('System mode changed to:', newMode);
});

// Later: cleanup();
```

## Theme Support

All three themes support dark mode:

### Base Theme

- Default Overdrive theme with green primary color
- Full shadow elevation system
- Standard border radius

### Neutral Theme

- Black primary color (instead of green)
- Same elevation and borders as base

### Flat Red Theme

- Red primary color
- No shadows (flat elevation)
- No border radius

## Color Token Mapping

Dark mode inverts the color scale and remaps semantic tokens:

| Light Mode                                  | Dark Mode               |
| ------------------------------------------- | ----------------------- |
| `gray.100` → `gray.900`                     | (lightest ↔ darkest)   |
| `gray.900` → `gray.100`                     | (darkest ↔ lightest)   |
| `surface.page: white` → `gray.100`          | (near-black background) |
| `surface.hard: gray.900` → `gray.900`       | (light on dark)         |
| `content.normal: gray.900` → `gray.100`     | (high contrast text)    |
| `interactive.border: gray.300` → `gray.600` | (visible borders)       |

### Elevation (Shadows)

- Light mode: Black shadows for depth
- Dark mode: White overlays for subtle lift

### Legacy Intent Colors

All intent colorsets (`primary`, `brand`, `danger`, `warning`, etc.) are fully
supported in dark mode with appropriate contrast adjustments.

## Advanced Usage

### Custom Theme Integration

If you have a custom theme, add dark mode by creating a dark token set:

```typescript
// myTheme/tokens.dark.ts
import { tokensDark as baseTokensDark } from '@autoguru/overdrive/lib/themes/base/tokens.dark';
import deepmerge from 'deepmerge';

export const tokensDark = deepmerge(baseTokensDark, {
  // Your dark mode overrides
  colours: {
    intent: {
      primary: {
        background: {
          standard: '#your-color',
          // ...
        },
      },
    },
  },
});
```

```typescript
// myTheme/theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { overdriveTokens } from '@autoguru/overdrive/lib/themes/theme.css';
import { themeTokensWithLayer } from '@autoguru/overdrive/lib/themes/makeTheme';
import { tokensDark } from './tokens.dark';

export const myThemeDark = createGlobalTheme(
  '[data-od-theme=myTheme][data-od-color-mode=dark]',
  overdriveTokens,
  themeTokensWithLayer(tokensDark),
);
```

### Server-Side Rendering (SSR)

Prevent flash of incorrect theme on SSR:

```html
<!-- Add to <head> before any content -->
<script>
  (function () {
    const stored = localStorage.getItem('od-color-mode');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const mode = stored || system;
    document.documentElement.setAttribute('data-od-color-mode', mode);
  })();
</script>
```

Or use `initializeColorMode()` in a synchronous script.

### Storybook Integration

Add dark mode toggle to Storybook (coming soon):

```typescript
// .storybook/preview.tsx
import { initializeColorMode } from '@autoguru/overdrive';

// Initialize color mode
initializeColorMode();

// Optional: Add storybook-dark-mode addon
export const parameters = {
  darkMode: {
    current: 'light',
    darkClass: 'dark-mode',
    lightClass: 'light-mode',
  },
};
```

## Migration from Light Mode Only

**Good news: No migration required!**

Dark mode is fully backward compatible:

- ✅ All components work without changes
- ✅ CSS variables maintain same names
- ✅ Legacy colorsets fully supported
- ✅ Sprinkles API unchanged
- ✅ Opt-in via data attribute

To add dark mode to existing apps:

1. Call `initializeColorMode()` on app startup
2. Add a toggle using `useColorMode()` hook
3. Test components in dark mode (they should "just work")

## Accessibility

Dark mode implementation follows WCAG AA contrast guidelines:

- Text contrast ratios meet minimum 4.5:1 (normal) and 3:1 (large)
- Focus indicators remain visible in both modes
- Interactive elements maintain sufficient contrast
- Color is not the only means of conveying information

## Browser Support

- Modern browsers with CSS custom properties support
- `prefers-color-scheme` media query (fallback to 'light' if not supported)
- localStorage for persistence (graceful degradation if unavailable)

## Troubleshooting

### Dark mode not applying

1. Check `data-od-color-mode` attribute is set on `<html>` or root element
2. Verify theme class/attribute is also applied (`data-od-theme="base"`)
3. Ensure you've imported the theme CSS (automatically done if using Overdrive
   components)

### Colors not changing

- Components using hard-coded colors (not tokens) won't respond to dark mode
- Check that you're using theme tokens (`tokens.color.*` or `tokens.colours.*`)
- Verify sprinkles props reference theme colors, not hard-coded values

### Flash of wrong theme on page load

- Use SSR script in `<head>` (see Advanced Usage section)
- Or call `initializeColorMode()` as early as possible

## Examples

### Toggle Button

```tsx
import { useColorMode } from '@autoguru/overdrive';
import { Button } from '@autoguru/overdrive';

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
}
```

### System/Manual Indicator

```tsx
import { useColorMode } from '@autoguru/overdrive';
import { Text } from '@autoguru/overdrive';

function ColorModeStatus() {
  const { colorMode, isSystemMode, systemPreference, resetToSystemMode } =
    useColorMode();

  return (
    <div>
      <Text>Mode: {colorMode}</Text>
      {!isSystemMode && (
        <>
          <Text>System prefers: {systemPreference}</Text>
          <Button onClick={resetToSystemMode}>Follow System</Button>
        </>
      )}
    </div>
  );
}
```

## Contributing

When creating new components:

- Use theme tokens, not hard-coded colors
- Test in both light and dark modes
- Ensure contrast meets WCAG AA
- Add dark mode variants to Storybook stories

## Resources

- [Theme tokens reference](./lib/themes/base/tokens.ts)
- [Dark mode tokens](./lib/themes/base/tokens.dark.ts)
- [Color utilities](./lib/utils/colorMode.ts)
- [useColorMode hook](./lib/hooks/useColorMode/useColorMode.ts)
