import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens } from '../themes/theme.css';

import { cssLayerReset } from './layers.css';

export const trimmed = {
	margin: 0,
	padding: 0,
};

const trimmedElement = style({
	'@layer': {
		[cssLayerReset]: {
			...trimmed,
		},
	},
});

export const container = style({
	'@layer': {
		[cssLayerReset]: {
			fontFamily: overdriveTokens.typography.fontFamily,
			fontSize: overdriveTokens.typography.size[4].fontSize,
			fontWeight: overdriveTokens.typography.fontWeight.normal,
			lineHeight: overdriveTokens.typography.size[4].lineHeight,
		},
	},
});

const a = style({
	'@layer': {
		[cssLayerReset]: {
			cursor: 'pointer',
			textDecoration: 'none',
			...trimmed,
		},
	},
});

const block = style({
	'@layer': {
		[cssLayerReset]: { display: 'block' },
	},
});

const button = [
	trimmedElement,
	style({
		'@layer': {
			[cssLayerReset]: {
				appearance: 'none',
				background: 'none',
				cursor: 'pointer',
				outline: 'none',
				userSelect: 'none',
			},
		},
	}),
];

const list = style({
	'@layer': {
		[cssLayerReset]: { ...trimmed, listStyle: 'none' },
	},
});

const fieldset = [
	trimmedElement,
	style({
		'@layer': {
			[cssLayerReset]: {
				appearance: 'none',
			},
		},
	}),
];

const input = [
	trimmedElement,
	style({
		'@layer': {
			[cssLayerReset]: {
				appearance: 'none',
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
			},
		},
	}),
];

const select = [
	trimmedElement,
	style({
		'@layer': {
			[cssLayerReset]: {
				appearance: 'none',
				selectors: {
					'&::-ms-expand': {
						display: 'none',
					},
				},
			},
		},
	}),
];

const table = [
	trimmedElement,
	style({
		'@layer': {
			[cssLayerReset]: {
				borderSpacing: 0,
				borderCollapse: 'collapse',
			},
		},
	}),
];

const vAlignMiddle = [
	trimmedElement,
	style({
		'@layer': {
			[cssLayerReset]: { verticalAlign: 'middle' },
		},
	}),
];

/** controls the list html tag names to reset and maps them to the reset style */
export const element = {
	div: block,
	p: trimmedElement,
	h1: trimmedElement,
	h2: trimmedElement,
	h3: trimmedElement,
	h4: trimmedElement,
	h5: trimmedElement,
	h6: trimmedElement,
	span: '',
	label: '',
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
	fieldset,
	a,
	table,
	thead: vAlignMiddle,
	tbody: vAlignMiddle,
	tfoot: vAlignMiddle,
	td: vAlignMiddle,
	th: vAlignMiddle,
	tr: vAlignMiddle,
};

export type ResetTagNames = keyof typeof element;

export const resetVariants = recipe({
	base: {},
	variants: {
		as: element,
	},
	defaultVariants: {
		as: 'div',
	},
});

export type ResetVariantProps = NonNullable<
	RecipeVariants<typeof resetVariants>
>;
