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

const block = style({ display: 'block' });
const list = style({ listStyle: 'none' });

const button = [
	appearance,
	style({
		outline: 'none',
		background: 'none',
		cursor: 'pointer',
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
			'&::-webkit-clear-button, &::-ms-clear, &::-webkit-search-cancel-button': {
				display: 'none',
				WebkitAppearance: 'none',
			},
			'&[type="number"]::-webkit-outer-spin-button, &[type="number"]::-webkit-inner-spin-button': {
				margin: 0,
				WebkitAppearance: 'none',
			},
		},
	}),
];

const a = style({
	textDecoration: 'none',
	color: 'inherit',
});

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
};
