<p align="center">
  <a href="http://overdrive.autoguru.io/">
    <img alt="@autoguru/overdrive" src="logo.png" width="100%">
  </a>
</p>

<div align="center">
	<a href="https://travis-ci.com/autoguru-au/overdrive" target="_blank"><img src="https://img.shields.io/travis/com/autoguru-au/overdrive/master.svg?style=for-the-badge"/></a>
	<a href="https://codecov.io/gh/autoguru-au/overdrive" target="_blank"><img src="https://img.shields.io/codecov/c/gh/autoguru-au/overdrive/master.svg?style=for-the-badge"/></a>
	<a href="https://www.npmjs.com/package/@autoguru/overdrive" target="_blank"><img src="https://img.shields.io/npm/v/@autoguru/overdrive/latest.svg?style=for-the-badge"/></a>
</div>

<div align="center">
	<img src="https://img.shields.io/github/license/autoguru-au/overdrive.svg?style=for-the-badge"/>
	<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge"/>
</div>

---

Overdrive is a product component library, and design system for AutoGuru. Built
with [React](https://github.com/facebook/react),
[TypeScript](https://github.com/Microsoft/typescript),
[webpack](https://github.com/webpack/webpack), [SCSS](https://sass-lang.com/),
[CSS Modules](https://github.com/css-modules/postcss-modules) and
[Storybook](https://github.com/storybooks/storybook).

## Usage

```sh
yarn add @autoguru/overdrive \
	react react-dom
```

1. Import reset

    ```js
    import '@autoguru/overdrive/reset';
    ```

2. Import and configure the `OverdriveProvider` complete with the theme you're
   wanting to use.

    ```jsx
    // It is important that the reset import happens before any of this.
    import { baseTheme } from '@autoguru/overdrive/themes';
    import { OverdriveProvider, Button } '@autoguru/overdrive';

    <OverdriveProvider theme={baseTheme}>
        <Button variant="primary"'>
            Hello World
        </Button>
    </OverdriveProvider>
    ```

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing component screenshot
testing.

## License

MIT &copy; [AutoGuru](https://www.autoguru.com.au/)

<a href="http://www.autoguru.com.au/"><img src="https://cdn.autoguru.com.au/images/logos/autoguru.svg" alt="AutoGuru" width="150" /></a>
