import{ao as t,ap as n,aq as a}from"./index-CJrDbuMC.js";import{useMDXComponents as i}from"./index-4_AlzpT7.js";import"./iframe-rRYG-jOu.js";import"../sb-preview/runtime.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CY3YMLsI.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const u=`<p align="center">
  <a href="http://overdrive.autoguru.io/">
    <img alt="@autoguru/overdrive" src="https://github.com/autoguru-au/overdrive/blob/main/assets/logo.png?raw=true" width="100%">
  </a>
</p>

<div align="center">
	<a href="https://codecov.io/gh/autoguru-au/overdrive" target="_blank"><img src="https://img.shields.io/codecov/c/gh/autoguru-au/overdrive/main.svg?style=for-the-badge"/></a>
	<a href="https://www.npmjs.com/package/@autoguru/overdrive" target="_blank"><img src="https://img.shields.io/npm/v/@autoguru/overdrive/latest.svg?style=for-the-badge"/></a>
</div>

---

# Overdrive

Overdrive is a product component library and design system for AutoGuru, built
with React, TypeScript, Vanilla Extract, and Storybook.

[Storybook playground](https://overdrive.autoguru.io/).

Overdrive is a product component library, and design system for AutoGuru. Built
with [React](https://github.com/facebook/react),
[TypeScript](https://github.com/Microsoft/typescript),
[Vanilla Extract](https://github.com/vanilla-extract-css/vanilla-extract/), and
[Storybook](https://github.com/storybooks/storybook).

## Usage

To use Overdrive in your project, install it via yarn:

\`\`\`sh
yarn add @autoguru/overdrive \\
	react react-dom
\`\`\`

Then, import the reset and configure the OverdriveProvider with the theme you
want to use:

\`\`\`jsx
import '@autoguru/overdrive/reset';
// It is important that the reset import happens before any of this.
import { baseTheme } from '@autoguru/overdrive/lib/themes';
import { OverdriveProvider, Button } from '@autoguru/overdrive';

<OverdriveProvider theme={baseTheme}>
	<Button variant="primary">Hello World</Button>
</OverdriveProvider>;
\`\`\`

Documentation

For more information on Overdrive's API and usage, check out the
[docs](http://overdrive.autoguru.io/?path=/documentation/).

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing component screenshot
testing.

## License

MIT &copy; [AutoGuru](https://www.autoguru.com.au/)

<a href="http://www.autoguru.com.au/"><img src="https://cdn.autoguru.com.au/images/logos/autoguru.svg" alt="AutoGuru" width="150" /></a>
`;function e(r){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Overdrive"}),`
`,t.jsx(a,{children:u})]})}function y(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e()}export{y as default};
