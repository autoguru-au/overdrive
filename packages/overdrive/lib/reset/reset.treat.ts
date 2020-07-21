import { style } from 'treat';

export const base = style({
	margin: 0,
	padding: 0,
	border: 0,
	fontSize: '100%',
	verticalAlign: 'baseline',
});

const appearance = style({
	appearance: 'none',
});

const cursorPointer = style({ cursor: 'pointer' });

const block = style({ display: 'block' });
const list = style({ listStyle: 'none' });

const vAlignMiddle = style({ verticalAlign: 'middle' });

const button = [
	appearance,
	cursorPointer,
	style({
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
		textDecoration: 'none',
	}),
];

const table = style({ borderSpacing: 0, borderCollapse: 'collapse' });

export const element = {
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
	a,
	table,
	thead: vAlignMiddle,
	tbody: vAlignMiddle,
	tfoot: vAlignMiddle,
	td: vAlignMiddle,
	th: vAlignMiddle,
	tr: vAlignMiddle,
};