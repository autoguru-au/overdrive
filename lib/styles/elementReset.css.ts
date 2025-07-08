import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens } from '../themes/theme.css';

import { focusOutlineStyle } from './focusOutline.css';
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

export const borderReset = style({
	'@layer': {
		[cssLayerReset]: {
			borderWidth: 0,
			borderStyle: 'solid',
		},
	},
});

export const container = style({
	'@layer': {
		[cssLayerReset]: {
			lineHeight: overdriveTokens.typography.size[4].lineHeight,
			fontFamily: overdriveTokens.typography.fontFamily,
			fontSize: overdriveTokens.typography.size[4].fontSize,
			fontWeight: overdriveTokens.typography.fontWeight.normal,
		},
	},
});

const a =
	style({
		'@layer': {
			[cssLayerReset]: {
				cursor: 'pointer',
				textDecoration: 'none',
				...trimmed,
			},
		},
	}) + ` ${focusOutlineStyle}`;

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
				outline: 'none',
				borderStyle: 'none',
				background: 'none',
				cursor: 'pointer',
				userSelect: 'none',
			},
		},
	}),
];

const heading = [
	trimmedElement,
	style({
		'@layer': {
			[cssLayerReset]: {
				textWrap: 'balance',
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
	borderReset,
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
				borderStyle: 'none',
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
				borderCollapse: 'collapse',
				borderSpacing: 0,
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
export const elementReset = {
	div: block,
	p: trimmedElement,
	h1: heading,
	h2: heading,
	h3: heading,
	h4: heading,
	h5: heading,
	h6: heading,
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
	li: '',
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

export type ResetTagNames = keyof typeof elementReset;

export const resetVariants = recipe({
	
	variants: {
		as: elementReset,
		// When any border color or width is specified, automatically set borderWidth to 'none'
		// and borderStyle to 'solid'. This handles properties with old naming and css-aligned
		hasBorder: {
			true: borderReset,
		},
	},
	defaultVariants: {
		as: 'div',
		hasBorder: false,
	},
});

export type ResetVariantProps = NonNullable<
	RecipeVariants<typeof resetVariants>
>;
