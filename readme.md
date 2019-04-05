<p align="center">
  <a href="https://overdrive.autoguru.io/">
    <img alt="@autoguru/overdrive" src="logo.png" width="100%">
  </a>
</p>

<div align="center">
	<a href="https://travis-ci.com/autoguru-au/overdrive" target="_blank"><img src="https://img.shields.io/travis/com/autoguru-au/overdrive/master.svg?style=flat-square"/></a>
	<a href="https://codecov.io/gh/autoguru-au/overdrive" target="_blank"><img src="https://img.shields.io/codecov/c/gh/autoguru-au/overdrive/master.svg?style=flat-square"/></a>
	<a href="https://www.npmjs.com/package/@autoguru/overdrive" target="_blank"><img src="https://img.shields.io/npm/v/@autoguru/overdrive/latest.svg?style=flat-square"/></a>
	<a href="http://overdrive.autoguru.io" target="_blank"><img src="https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg?style=flat-square"/></a>
</div>

<div align="center">
	<a href="https://github.com/semantic-release/semantic-release" target="_blank"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square"/></a>
	<img src="https://img.shields.io/github/license/autoguru-au/overdrive.svg?style=flat-square"/>
	<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"/>
</div>

---

Overdrive is a product component library, and design system for AutoGuru. Built with [React](https://github.com/facebook/react), [TypeScript](https://github.com/Microsoft/typescript), [webpack](https://github.com/webpack/webpack), [SCSS](https://sass-lang.com/), [CSS Modules](https://github.com/css-modules/postcss-modules) and [Storybook](https://github.com/storybooks/storybook).

## Usage

```sh
yarn add @autoguru/overdrive \
	react react-dom
```

1. Import the global/core stylesheet into your project.

    ```js
    import '@autoguru/overdrive/overdrive.css';
    ```

2. Import and use any of the components, and higher order components we export.

    ```jsx
    import { Button, EButtonVariant } '@autoguru/overdrive';

    <Button variant={EButtonVariant.Primary}>
    	Hello World
    </Button>
    ```

    If you're using TypeScript, we export all prop interfaces, and enums also.

    ```typescript
    import { IButtonProps } from '@autoguru/overdrive';
    ```

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing component screenshot testing.

## License

MIT &copy; [AutoGuru](https://www.autoguru.com.au/)

<a href="http://www.autoguru.com.au/"><img src="https://cdn.autoguru.com.au/images/logos/autoguru.svg" alt="AutoGuru" width="150" /></a>
