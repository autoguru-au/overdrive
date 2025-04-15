import{j as t,e,f as i}from"./index-By1T-9Mc.js";import{useMDXComponents as a}from"./index-DsIMh4BZ.js";import"./iframe-gFgMyuwR.js";import"./index-DVCUSwsV.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-DvpLutvZ.js";import"./index-DCvUOfvz.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const u=`<p align="center">
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

\`\`\`sh
yarn add @autoguru/overdrive react react-dom
\`\`\`

Then, import the reset and configure the OverdriveProvider with the theme you
want to use:

\`\`\`jsx
import '@autoguru/overdrive/reset';
// It is important that the reset import happens before any of this.
import { OverdriveProvider, Button } from '@autoguru/overdrive';

<OverdriveProvider>
	<Button variant="primary">Hello World</Button>
</OverdriveProvider>;
\`\`\`

You can also customise the theme colours using the provider props:

\`\`\`jsx
<OverdriveProvider
	theme={baseTheme}
	colorOverrides={{
		primaryBackground: '#FF0000',
		primaryForeground: '#FFFFFF',
		primaryBackgroundMild: '#FFE5E5',
		primaryBackgroundStrong: '#CC0000',
		primaryBorder: '#CC0000',
	}}
>
	<Button variant="primary">Custom Red Theme</Button>
</OverdriveProvider>
\`\`\`

## Thanks

[Chromatic](https://www.chromaticqa.com) for providing visual regression
testing.

## License

MIT ©[AutoGuru](https://www.autoguru.com.au/)

<a href="http://www.autoguru.com.au/"><img src="https://cdn.autoguru.com.au/images/logos/autoguru.svg"
alt="AutoGuru" width="150" /></a>
`;function n(r){return t.jsxs(t.Fragment,{children:[t.jsx(e,{title:"Overdrive"}),`
`,t.jsx(i,{children:u})]})}function y(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(n,{...r})}):n()}export{y as default};
