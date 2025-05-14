import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens } from '../themes/theme.css';

import { cssLayerReset } from './layers.css';

// TODO: phase out this base as it's used in every Box
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
	'@layer': {
		[cssLayerReset]: {
			fontFamily: overdriveTokens.typography.fontFamily,
			fontSize: overdriveTokens.typography.size[4].fontSize,
			fontWeight: overdriveTokens.typography.fontWeight.normal,
			lineHeight: overdriveTokens.typography.size[4].lineHeight,
		},
	},
});

const appearance = style({
	'@layer': {
		[cssLayerReset]: {
			appearance: 'none',
		},
	},
});

const cursorPointer = style({
	'@layer': {
		[cssLayerReset]: { cursor: 'pointer' },
	},
});

const inlineText = style({
	'@layer': {
		[cssLayerReset]: { ...base },
	},
});

const block = style({
	'@layer': {
		[cssLayerReset]: { ...base, display: 'block' },
	},
});

const list = style({
	'@layer': {
		[cssLayerReset]: { ...base, ...trimmed, listStyle: 'none' },
	},
});

const trimmedBlockElement = style({
	'@layer': {
		[cssLayerReset]: {
			...base,
			...trimmed,
		},
	},
});

const button = [
	appearance,
	cursorPointer,
	trimmedBlockElement,
	style({
		'@layer': {
			[cssLayerReset]: {
				outline: 'none',
				background: 'none',
				userSelect: 'none',
			},
		},
	}),
];

const field = [trimmedBlockElement, appearance];

const select = [
	...field,
	style({
		'@layer': {
			[cssLayerReset]: {
				selectors: {
					'&::-ms-expand': {
						display: 'none',
					},
				},
			},
		},
	}),
];

const input = [
	...field,
	style({
		'@layer': {
			[cssLayerReset]: {
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

const a = [
	cursorPointer,
	style({
		'@layer': {
			[cssLayerReset]: {
				...base,
				...trimmed,
				textDecoration: 'none',
			},
		},
	}),
];

const table = [
	trimmedBlockElement,
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
	trimmedBlockElement,
	style({
		'@layer': {
			[cssLayerReset]: { verticalAlign: 'middle' },
		},
	}),
];

const blockText = style({
	'@layer': {
		[cssLayerReset]: {
			...base,
			...trimmed,
		},
	},
});

/** controls the list html tag names to reset and maps them to the reset style */
const element = {
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

export type ResetTagNames = keyof typeof element;

const resetVariants = recipe({
	base,
	variants: {
		as: element,
	},
	defaultVariants: {
		as: 'div',
	},
});

type ResetVariantProps = NonNullable<RecipeVariants<typeof resetVariants>>;

/**
 * Returns the reset styles based on the `as` prop tag name passed in.
 * A wrapper around `resetVariants` recipe to allow any string to be passed in
 */
export const resetStyles = ({ as: _as }: { as: string | undefined }) => {
	if (!_as) return resetVariants();

	const as = (_as in element ? _as : 'div') as ResetVariantProps['as'];
	return resetVariants({ as });
};
