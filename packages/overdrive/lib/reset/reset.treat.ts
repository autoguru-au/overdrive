import { style } from 'treat';

export const base = {
	fontSize: '100%',
	verticalAlign: 'baseline',
};

export const naked = {
	margin: 0,
	padding: 0,
	border: 'none',
	borderWidth: 0,
};

const appearance = style({
	appearance: 'none',
});

const cursorPointer = style({ cursor: 'pointer' });

const inlineText = style({ ...base });
const block = style({ ...base, display: 'block' });
const list = style({ ...base, ...naked, listStyle: 'none' });

const vAlignMiddle = style({ ...base, verticalAlign: 'middle' });

const button = [
	appearance,
	cursorPointer,
	style({
		...base,
		...naked,
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
		...naked,
		textDecoration: 'none',
	}),
];

const table = style({
	...base,
	...naked,
	borderSpacing: 0,
	borderCollapse: 'collapse',
});

const blockText = style({
	...base,
	...naked,
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
