import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { resetStyles, type ResetTagNames } from 'styles/reset.css';

import {
	sprinkles,
	type Sprinkles,
	sprinklesLegacyColours,
	type SprinklesLegacyColours,
} from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

type TextColor = Sprinkles['color'];
type TextColour = SprinklesLegacyColours['colour'];
type TextSize = Sprinkles['text'];
type TextTags = Extract<ResetTagNames, 'label' | 'p' | 'span'>;
type FontWeight = Sprinkles['fontWeight'];

// Export types for the recipe
export type TextVariants = NonNullable<RecipeVariants<typeof textVariants>>;
export interface TextStylesProps extends TextVariants {
	as?: TextTags;
	color?: TextColor;
	colour?: TextColour;
	fontWeight?: FontWeight;
	size?: TextSize;
}

// Define the text recipe
export const textVariants = recipe({
	base: {
		selectors: {
			'&::selection': {
				color: vars.typography.colour.white,
				background: vars.typography.colour.primary,
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
