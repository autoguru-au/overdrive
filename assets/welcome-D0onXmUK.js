import{j as t,c as n,e as a}from"./blocks-CsaAtUho.js";import{useMDXComponents as i}from"./index-DrASqh-3.js";import"./iframe-Dl5X8CFQ.js";import"./index-C2sV6XMa.js";import"./index-Dy91qTXm.js";const s=`<p align="center">
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

Then, import the reset and configure the Overdrive Provider with the theme you
want to use:

\`\`\`jsx
import { OverdriveProvider, Button } from '@autoguru/overdrive';

<OverdriveProvider>
	<Button variant="primary">Hello World</Button>
</OverdriveProvider>;
\`\`\`

The Overdrive Provider automatically applies global base styles to the body tag.
If you need more control over where the global base styles are applied, you can
also apply \`data-od-base\` to any element.

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

[Chromatic](https://www.chromatic.com) for providing visual regression testing.

## License

MIT ©[AutoGuru](https://www.autoguru.com.au/)

<a href="http://www.autoguru.com.au/"><img src="https://cdn.autoguru.com.au/images/logos/autoguru.svg"
alt="AutoGuru" width="150" /></a>
`;function o(r){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Overdrive"}),`
`,t.jsx(a,{children:s})]})}function m(r={}){const{wrapper:e}={...i(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(o,{...r})}):o()}export{m as default};
