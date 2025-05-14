import { styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { overdriveTokens as tokens } from '../themes/theme.css';

import { resetStyles } from './reset.css';
import {
	sprinkles,
	type Sprinkles,
	sprinklesLegacyColours,
	type SprinklesLegacyColours,
} from './sprinkles.css';

export type TextColor = Sprinkles['color'];
export type TextColour = SprinklesLegacyColours['colour'];
export type TextSize = Sprinkles['text'];
export type FontWeight = Sprinkles['fontWeight'];

// Export types for the recipe
export type TextVariants = NonNullable<RecipeVariants<typeof textVariants>>;
export interface TextStylesProps extends TextVariants {
	as?: string;
	color?: TextColor;
	colour?: TextColour;
	fontWeight?: FontWeight;
	size?: TextSize;
}

const fontScale = {
	...tokens.typography.size,
	xxs: tokens.typography.size[1],
	xs: tokens.typography.size[2],
	sm: tokens.typography.size[3],
	md: tokens.typography.size[4],
	lg: tokens.typography.size[5],
	xl: tokens.typography.size[6],
	'2xl': tokens.typography.size[7],
	'3xl': tokens.typography.size[8],
	'4xl': tokens.typography.size[9],
};

const fontSizes = Object.entries(fontScale).reduce(
	(obj, [key, value]) => {
		obj[key] = { fontSize: value.fontSize };
		return obj;
	},
	{} as Record<keyof typeof fontScale, { fontSize: string }>,
);

export const fontSize = styleVariants(fontSizes);
export const fontWeight = styleVariants(
	tokens.typography.fontWeight,
	(weight) => ({
		fontWeight: weight,
	}),
);

/**
 * A recipe for styling text from the typography scale, including line-height and font weight.
 */
export const styledFont = recipe({
	base: [],
	variants: {
		size: fontScale,
		weight: fontWeight,
		lineHeight: {
			true: [],
		},
	},
	defaultVariants: {
		size: 'md',
		lineHeight: true,
	},
	compoundVariants: [
		{
			variants: { lineHeight: false },
			style: {
				lineHeight: '1',
			},
		},
	],
});

// Define the text recipe
export const textVariants = recipe({
	base: {
		selectors: {
			'&::selection': {
				color: tokens.typography.colour.white,
				background: tokens.typography.colour.primary,
			},
		},
	},
	variants: {
		breakWord: {
			true: {
				wordBreak: 'break-word',
			},
		},
		noWrap: {
			true: {
				whiteSpace: 'nowrap',
			},
		},
		transform: {
			uppercase: {
				textTransform: 'uppercase',
			},
			capitalize: {
				textTransform: 'capitalize',
			},
		},
	},
});

export const textStyles = ({
	as,
	breakWord,
	color,
	colour,
	fontWeight,
	noWrap,
	size,
	transform,
}: TextStylesProps) =>
	clsx([
		resetStyles({ as }),
		sprinkles({ color, fontWeight, text: size }),
		sprinklesLegacyColours({ colour }),
		textVariants({ breakWord, noWrap, transform }),
	]);
