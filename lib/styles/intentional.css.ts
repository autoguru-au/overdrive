import { styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { themeContractVars as vars } from '../themes/theme.css';

export const variantIntentionalColors = styleVariants(
	vars.colours.intent,
	(variant) => ({
		backgroundColor: variant.background.standard,
		border: variant.border,
		color: variant.foreground,
	}),
);

export const variantIntentionalColorsInverted = styleVariants(
	vars.colours.intent,
	(variant) => ({
		backgroundColor: variant.background.mild,
		border: variant.border,
		color: variant.background.standard,
	}),
);

export const styledIntentionalElement = recipe({
	base: [],
	variants: {
		intention: {
			neutral: {},
			primary: {},
			secondary: {},
			shine: {},
			information: {},
			success: {},
			danger: {},
			warning: {},
		},
		inverted: {
			true: {},
			false: {},
		},
	},
	compoundVariants: [
		{
			variants: { intention: 'neutral', inverted: false },
			style: variantIntentionalColors.neutral,
		},
		{
			variants: { intention: 'neutral', inverted: true },
			style: variantIntentionalColorsInverted.neutral,
		},
		{
			variants: { intention: 'primary', inverted: false },
			style: variantIntentionalColors.primary,
		},
		{
			variants: { intention: 'primary', inverted: true },
			style: variantIntentionalColorsInverted.primary,
		},
		{
			variants: { intention: 'secondary', inverted: false },
			style: variantIntentionalColors.secondary,
		},
		{
			variants: { intention: 'secondary', inverted: true },
			style: variantIntentionalColorsInverted.secondary,
		},
		{
			variants: { intention: 'shine', inverted: false },
			style: variantIntentionalColors.shine,
		},
		{
			variants: { intention: 'shine', inverted: true },
			style: variantIntentionalColorsInverted.shine,
		},
		{
			variants: { intention: 'information', inverted: false },
			style: variantIntentionalColors.information,
		},
		{
			variants: { intention: 'information', inverted: true },
			style: variantIntentionalColorsInverted.information,
		},
		{
			variants: { intention: 'success', inverted: false },
			style: variantIntentionalColors.success,
		},
		{
			variants: { intention: 'success', inverted: true },
			style: variantIntentionalColorsInverted.success,
		},
		{
			variants: { intention: 'danger', inverted: false },
			style: variantIntentionalColors.danger,
		},
		{
			variants: { intention: 'danger', inverted: true },
			style: variantIntentionalColorsInverted.danger,
		},
		{
			variants: { intention: 'warning', inverted: false },
			style: variantIntentionalColors.warning,
		},
		{
			variants: { intention: 'warning', inverted: true },
			style: variantIntentionalColorsInverted.warning,
		},
	],
});

export type StyledIntentionalContainerProps = NonNullable<
	RecipeVariants<typeof styledIntentionalElement>
>;
