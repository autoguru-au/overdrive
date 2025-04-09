import { style } from '@vanilla-extract/css';

import { globalTokens } from '../themes/theme.css';

export const base = {
	fontSize: '100%',
	verticalAlign: 'baseline',
	borderWidth: 0,
};

export const trimmed = {
	margin: 0,
	padding: 0,
};

export const container = style({
	fontFamily: globalTokens.typography.fontFamily,
	fontSize: globalTokens.typography.size[4].fontSize,
	fontWeight: globalTokens.typography.fontWeight.normal,
	lineHeight: globalTokens.typography.size[4].lineHeight,
});

const appearance = style({
	appearance: 'none',
});

const cursorPointer = style({ cursor: 'pointer' });

const inlineText = style({ ...base });
const block = style({ ...base, display: 'block' });
const list = style({ ...base, ...trimmed, listStyle: 'none' });

const trimmedBlockElement = style({
	...base,
	...trimmed,
});

const button = [
	appearance,
	cursorPointer,
	trimmedBlockElement,
	style({
		outline: 'none',
		background: 'none',
		userSelect: 'none',
	}),
];

const field = [trimmedBlockElement, appearance];

const select = [
	...field,
	style({
		selectors: {
			'&::-ms-expand': {
				display: 'none',
			},
		},
	}),
];

const input = [
	...field,
	style({
		selectors: {
			'&::-ms-clear': {
				display: 'none',
			},
			'&::-webkit-clear-button, &::-webkit-search-cancel-button, &::-webkit-search-results-button':
				{
					WebkitAppearance: 'none',
				},
			'&[type="number"]::-webkit-outer-spin-button, &[type="number"]::-webkit-inner-spin-button':
				{
					margin: 0,
					WebkitAppearance: 'none',
				},
		},
	}),
];

const a = [
	cursorPointer,
	style({
		...base,
		...trimmed,
		textDecoration: 'none',
	}),
];

const table = [
	trimmedBlockElement,
	style({
		borderSpacing: 0,
		borderCollapse: 'collapse',
	}),
];

const vAlignMiddle = [trimmedBlockElement, style({ verticalAlign: 'middle' })];

const blockText = style({
	...base,
	...trimmed,
});

export const element = {
	div: block,
	p: blockText,
	h1: blockText,
	h2: blockText,
	h3: blockText,
	h4: blockText,
	h5: blockText,
	h6: blockText,
	span: inlineText,
	label: inlineText,
	article: block,
	aside: block,
	details: block,
	figcaption: block,
	figure: block,
	footer: block,
	header: block,
	hgroup: block,
	menu: block,
	nav: block,
	section: block,
	ul: list,
	ol: list,
	button,
	select,
	input,
	textarea: input,
	fieldset: field,
	field: field,
	a,
	table,
	thead: vAlignMiddle,
	tbody: vAlignMiddle,
	tfoot: vAlignMiddle,
	td: vAlignMiddle,
	th: vAlignMiddle,
	tr: vAlignMiddle,
};
