import { styleVariants } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { themeContractVars as vars } from '../../themes/theme.css';

/**
 * Retrieves color variants for a given intent, with optional inversion.
 * @param variant - The intent variant key from the color theme.
 * @param invert - Whether to invert the color scheme. Defaults to false.
 * @returns An object containing `backgroundColor`, `border`, and `color` for use with styleVariants.
 */
function getIntentionalVariantFromTokens(
	variant: keyof typeof vars.colours.intent,
	invert = false,
) {
	const colors = vars.colours.intent[variant];
	if (!colors) {
		throw new Error(`Intentional colours for "${variant}" not found.`);
	}

	const backgroundColor = invert
		? colors.background.mild
		: colors.background.standard;
	const border = colors.border;
	const color = invert ? colors.background.standard : colors.foreground;

	return { backgroundColor, border, color };
}

export const intentionalColourSet = styleVariants({
	neutral: getIntentionalVariantFromTokens('neutral'),
	neutralInverted: getIntentionalVariantFromTokens('neutral', true),
	primary: getIntentionalVariantFromTokens('primary'),
	primaryInverted: getIntentionalVariantFromTokens('primary', true),
	secondary: getIntentionalVariantFromTokens('secondary'),
	secondaryInverted: getIntentionalVariantFromTokens('secondary', true),
	shine: getIntentionalVariantFromTokens('shine'),
	shineInverted: getIntentionalVariantFromTokens('shine', true),
	information: getIntentionalVariantFromTokens('information'),
	informationInverted: getIntentionalVariantFromTokens('information', true),
	success: getIntentionalVariantFromTokens('success'),
	successInverted: getIntentionalVariantFromTokens('success', true),
	danger: getIntentionalVariantFromTokens('danger'),
	dangerInverted: getIntentionalVariantFromTokens('danger', true),
	warning: getIntentionalVariantFromTokens('warning'),
	warningInverted: getIntentionalVariantFromTokens('warning', true),
});

export const styledIntentalContainer = recipe({
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
			style: intentionalColourSet.neutral,
		},
		{
			variants: { intention: 'neutral', inverted: true },
			style: intentionalColourSet.neutralInverted,
		},
		{
			variants: { intention: 'primary', inverted: false },
			style: intentionalColourSet.primary,
		},
		{
			variants: { intention: 'primary', inverted: true },
			style: intentionalColourSet.primaryInverted,
		},
		{
			variants: { intention: 'secondary', inverted: false },
			style: intentionalColourSet.secondary,
		},
		{
			variants: { intention: 'secondary', inverted: true },
			style: intentionalColourSet.secondaryInverted,
		},
		{
			variants: { intention: 'shine', inverted: false },
			style: intentionalColourSet.shine,
		},
		{
			variants: { intention: 'shine', inverted: true },
			style: intentionalColourSet.shineInverted,
		},
		{
			variants: { intention: 'information', inverted: false },
			style: intentionalColourSet.information,
		},
		{
			variants: { intention: 'information', inverted: true },
			style: intentionalColourSet.informationInverted,
		},
		{
			variants: { intention: 'success', inverted: false },
			style: intentionalColourSet.success,
		},
		{
			variants: { intention: 'success', inverted: true },
			style: intentionalColourSet.successInverted,
		},
		{
			variants: { intention: 'danger', inverted: false },
			style: intentionalColourSet.danger,
		},
		{
			variants: { intention: 'danger', inverted: true },
			style: intentionalColourSet.dangerInverted,
		},
		{
			variants: { intention: 'warning', inverted: false },
			style: intentionalColourSet.warning,
		},
		{
			variants: { intention: 'warning', inverted: true },
			style: intentionalColourSet.warningInverted,
		},
	],
});

export const styledBadge = recipe({
	base: [
		{
			borderRadius: vars.border.radius['1'],
			fontWeight: vars.typography.fontWeight.semiBold,
			letterSpacing: '0.5px',
			overflow: 'hidden',
			padding: vars.space['1'],
			textOverflow: 'ellipsis',
			textTransform: 'uppercase',
			whiteSpace: 'nowrap',
		},
	],
	variants: {
		colour: {
			neutral: {},
			red: {},
			green: {},
			blue: {},
			yellow: {},
		},
		inverted: {
			true: {},
			false: {},
		},
		size: {
			small: {
				fontSize: vars.typography.size['1'].fontSize,
				fontWeight: vars.typography.fontWeight.bold,
				lineHeight: vars.typography.size['1'].fontSize,
			},
			standard: {
				fontSize: vars.typography.size['2'].fontSize,
				lineHeight: vars.typography.size['2'].fontSize,
			},
			large: {
				fontSize: vars.typography.size['4'].fontSize,
				lineHeight: vars.typography.size['4'].fontSize,
				padding: vars.space['4'],
			},
		},
	},
	compoundVariants: [
		{
			variants: { colour: 'neutral', inverted: false },
			style: styledIntentalContainer({
				intention: 'neutral',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'neutral', inverted: true },
			style: styledIntentalContainer({
				intention: 'neutral',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'red', inverted: false },
			style: styledIntentalContainer({
				intention: 'danger',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'red', inverted: true },
			style: styledIntentalContainer({
				intention: 'danger',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'green', inverted: false },
			style: styledIntentalContainer({
				intention: 'success',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'green', inverted: true },
			style: styledIntentalContainer({
				intention: 'success',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'blue', inverted: false },
			style: styledIntentalContainer({
				intention: 'information',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'blue', inverted: true },
			style: styledIntentalContainer({
				intention: 'information',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'yellow', inverted: false },
			style: styledIntentalContainer({
				intention: 'warning',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'yellow', inverted: true },
			style: styledIntentalContainer({
				intention: 'warning',
				inverted: true,
			}),
		},
	],
});

export type StyledBadgeProps = NonNullable<RecipeVariants<typeof styledBadge>>;
