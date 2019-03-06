<p align="center">
  <a href="https://overdrive.autoguru.io/">
    <img alt="@autoguru/overdrive" src="logo.png" width="100%">
  </a>
</p>

<p align="center">
	<a href="https://travis-ci.com/autoguru-au/overdrive" target="_blank"><img src="https://img.shields.io/travis/com/autoguru-au/overdrive/master.svg"/></a>
	<a href="https://codecov.io/gh/autoguru-au/overdrive" target="_blank"><img src="https://img.shields.io/codecov/c/gh/autoguru-au/overdrive/master.svg"/></a>
	<a href="http://overdrive.autoguru.io" target="_blank"><img src="https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg"/></a>
</p>

---

Overdrive is a product component library, and design system for AutoGuru. Built with React, TypeScript, Webpack, SCSS and Storybook.

## Usage

```sh
yarn add @autoguru/overdrive \
	react react-dom
```

1. Import the global/core stylesheet into your project.

    ```js
    import '@autoguru/overdrive/theme.css';
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

### TODO:

-   [ ] heading scss needs to be uncommented and fixed
-   [ ] detailtext scss needs to be uncommented and fixed
-   [ ] all components that expose a a :root, needs to be refactored to use scss vars
-   [ ] isDesktop() => native @media but with screen vars
-   [ ] clean up repo, and comb commponents
-   [ ] improve the need to import a root .css

## License

MIT &copy; [AutoGuru](https://www.autoguru.com.au/)

<a href="http://www.autoguru.com.au/"><img src="https://cdn.autoguru.com.au/images/logos/autoguru.svg" alt="AutoGuru" width="150" /></a>
