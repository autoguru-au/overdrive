<p align="center">
  <a href="http://overdrive.autoguru.io/">
    <img alt="@autoguru/overdrive"
	src="https://github.com/autoguru-au/overdrive/blob/main/assets/logo.png?raw=true" width="100%">
  </a>
</p>

<div>
	<a href="https://codecov.io/gh/autoguru-au/overdrive" target="_blank"><img
	src="https://img.shields.io/codecov/c/gh/autoguru-au/overdrive/main.svg?style=for-the-badge"/></a>
	<a href="https://www.npmjs.com/package/@autoguru/overdrive" target="_blank"><img
	src="https://img.shields.io/npm/v/@autoguru/overdrive/latest.svg?style=for-the-badge"/></a>
</div>

---

# Overdrive

Overdrive is a product component library, and design system for AutoGuru. Built
with [React](https://github.com/facebook/react),
[TypeScript](https://github.com/Microsoft/typescript),
[Vanilla Extract](https://github.com/vanilla-extract-css/vanilla-extract/), and
[Storybook](https://github.com/storybooks/storybook).

The components are housed in Storybook which provides interactive documentation,
UI playground, and interaction testing.

## Storybook

Visit the Overdrive Storybook site too access foundations, components and API
specifications:

### [overdrive.autoguru.io](http://overdrive.autoguru.io/)

## Usage

To use Overdrive in your project, install it via yarn:

```sh
yarn add @autoguru/overdrive react react-dom
```

Then, import the reset and configure the UnifiedThemeProvider with the theme you
want to use:

```jsx
import '@autoguru/overdrive/reset';
// It is important that the reset import happens before any of this.
import { baseTheme } from '@autoguru/overdrive/lib/themes';
import { UnifiedThemeProvider, Button } from '@autoguru/overdrive';

<UnifiedThemeProvider
	theme={baseTheme}
	vars={baseTheme.vars}
	themeClass="od-theme"
>
	<Button variant="primary">Hello World</Button>
</UnifiedThemeProvider>;
```

You can also customize the theme colors using the provider props:

```jsx
<UnifiedThemeProvider
	theme={baseTheme}
	vars={baseTheme.vars}
	themeClass="od-theme"
	primaryColourBackground="#FF0000"
	primaryColourForeground="#FFFFFF"
	primaryColourBackgroundMild="#FFE5E5"
	primaryColourBackgroundStrong="#CC0000"
	primaryColourBorder="#CC0000"
>
	<Button variant="primary">Custom Red Theme</Button>
</UnifiedThemeProvider>
```

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing visual regression
testing.

## License

MIT ©[AutoGuru](https://www.autoguru.com.au/)

<a href="http://www.autoguru.com.au/"><img src="https://cdn.autoguru.com.au/images/logos/autoguru.svg"
alt="AutoGuru" width="150" /></a>
