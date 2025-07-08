import { createGlobalVar, styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens as tokens } from '../themes/theme.css';

import { cssColorSet } from './layers.css';

const intentBg = createGlobalVar('od-colorset-intent-bg');
const intentBorderColor = createGlobalVar('od-colorset-intent-border');
const intentColor = createGlobalVar('od-colorset-intent-color');

export const variantIntentionalColors = styleVariants(
	tokens.colours.intent,
	(variant) => ({
		'@layer': {
			[cssColorSet]: {
				vars: {
					[intentBg]: variant.background.standard,
					[intentBorderColor]: variant.border,
					[intentColor]: variant.foreground,
				},
			},
		},
	}),
);

export const variantIntentionalColorsInverted = styleVariants(
	tokens.colours.intent,
	(variant) => ({
		'@layer': {
			[cssColorSet]: {
				vars: {
					[intentBg]: variant.background.mild,
					[intentBorderColor]: variant.border,
					[intentColor]: variant.background.standard,
				},
			},
		},
	}),
);

const intentKeys = Object.keys(tokens.colours.intent) as Array<
	keyof typeof tokens.colours.intent
>;

const intentionRecipeVariants = intentKeys.reduce(
	(acc, key) => {
		acc[key] = {};
		return acc;
	},
	{} as Record<keyof typeof tokens.colours.intent, object>,
);

const generatedCompoundVariants = intentKeys.flatMap((intentionKey) => [
	{
		variants: { intention: intentionKey, inverted: false as const },
		style: variantIntentionalColors[intentionKey],
	},
	{
		variants: { intention: intentionKey, inverted: true as const },
		style: variantIntentionalColorsInverted[intentionKey],
	},
]);

export const styledIntentionalElement = recipe({
	base: {
		borderColor: intentBorderColor,
		backgroundColor: intentBg,
		color: intentColor,
	},
	variants: {
		intention: intentionRecipeVariants,
		
	},
	compoundVariants: generatedCompoundVariants,
});

export type StyledIntentionalContainerProps = NonNullable<
	RecipeVariants<typeof styledIntentionalElement>
>;
