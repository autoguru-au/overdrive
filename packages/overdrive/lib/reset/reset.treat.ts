import { style } from 'treat';

export const base = {
	margin: 0,
	padding: 0,
	border: 'none',
	borderWidth: 0,
	fontSize: '100%',
	verticalAlign: 'baseline',
};

const appearance = style({
	appearance: 'none',
});

const cursorPointer = style({ cursor: 'pointer' });

const inlineText = style({ ...base });
const block = style({ ...base, display: 'block' });
const list = style({ ...base, listStyle: 'none' });

const vAlignMiddle = style({ ...base, verticalAlign: 'middle' });

const button = [
	appearance,
	cursorPointer,
	style({
		...base,
		outline: 'none',
		background: 'none',
		userSelect: 'none',
	}),
];

const field = [block, appearance];

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
			'&::-webkit-clear-button, &::-webkit-search-cancel-button, &::-webkit-search-results-button': {
				WebkitAppearance: 'none',
			},
			'&[type="number"]::-webkit-outer-spin-button, &[type="number"]::-webkit-inner-spin-button': {
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
		textDecoration: 'none',
	}),
];

const table = style({ ...base, borderSpacing: 0, borderCollapse: 'collapse' });

export const element = {
	div: block,
	p: block,
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
	fieldset: block,
	field: block,
	a,
	table,
	thead: vAlignMiddle,
	tbody: vAlignMiddle,
	tfoot: vAlignMiddle,
	td: vAlignMiddle,
	th: vAlignMiddle,
	tr: vAlignMiddle,
};
