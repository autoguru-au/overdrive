import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { mapValues } from 'es-toolkit';

import { overdriveTokens as tokens } from '../themes/theme.css';

import { elementReset } from './elementReset.css';
import { cssLayerTypography } from './layers.css';
import { sprinkles, type Sprinkles } from './sprinkles.css';

const legacyTextProperties = defineProperties({
	'@layer': cssLayerTypography,
	properties: {
		color: {
			...tokens.typography.colour,
			unset: 'unset',
		},
	},
});

export const sprinklesLegacyText = createSprinkles(legacyTextProperties);
export type LegacyTextColours = Parameters<
	typeof sprinklesLegacyText
>[0]['color'];

/**
 * The global typography style function. Currently responsive values are not supported.
 * To allow for responsive styles, use the `sprinkles` directly.
 */
export const typographyStyles = recipe({
	base: {
		'@layer': {
			[cssLayerTypography]: {
				selectors: {
					'&::selection': {
						color: tokens.color.content.inverse,
						background: tokens.color.surface.accent,
					},
				},
			},
		},
	},
	variants: {
		as: {
			label: elementReset.label,
			p: elementReset.p,
			span: elementReset.span,
		},
		breakWord: { true: {} },
		color: mapValues(tokens.color.content, (_, color) =>
			sprinkles({ color }),
		),
		// map legacy typography colours to this prop spelling
		colour: {
			...mapValues(tokens.typography.colour, (_, color) =>
				sprinklesLegacyText({ color }),
			),
			unset: {
				color: 'unset',
			},
		},
		noWrap: { true: {} },
		size: mapValues(tokens.typography.size, (_, size) =>
			sprinkles({ text: size }),
		),
		strong: { true: {} },
		transform: {
			capitalize: sprinkles({ textTransform: 'capitalize' }),
			lowercase: sprinkles({ textTransform: 'lowercase' }),
			uppercase: sprinkles({ textTransform: 'uppercase' }),
		},
		weight: mapValues(tokens.typography.fontWeight, (_, weight) =>
			sprinkles({ fontWeight: weight }),
		),
	},
	defaultVariants: {
		as: 'span',
		breakWord: false,
		noWrap: false,
		strong: false,
		weight: 'normal',
	},
	compoundVariants: [
		{
			variants: {
				color: undefined,
				colour: undefined,
			},
			style: sprinklesLegacyText({ color: 'neutral' }),
		},
		{
			variants: {
				breakWord: true,
			},
			style: sprinkles({ wordBreak: 'break-word' }),
		},
		{
			variants: {
				noWrap: true,
			},
			style: sprinkles({ textWrap: 'nowrap' }),
		},
		{
			variants: {
				strong: true,
			},
			style: sprinkles({ fontWeight: 'bold' }),
		},
	],
});

export type TypographyVariants = NonNullable<
	RecipeVariants<typeof typographyStyles>
>;

export interface TypographyStyleProps {
	/** Aligns text horizontally */
	align?: Sprinkles['textAlign'];
	/** Forces long words to break */
	breakWord?: TypographyVariants['breakWord'];
	/** Set the text colour */
	color?: Sprinkles['color'];
	/** _in transistion_ Prefer `color` */
	colour?: TypographyVariants['colour'];
	/** @deprecated prefer `textWrap` prop as it supports all wrapping values */
	noWrap?: TypographyVariants['noWrap'];
	/** Font size of the text */
	size?: TypographyVariants['size'];
	strong?: TypographyVariants['strong'];
	/** Applies text capitalisation style */
	transform?: TypographyVariants['transform'];
	/** The font weight */
	weight?: TypographyVariants['weight'];
	/** Control the text wrapping */
	wrap?: Sprinkles['textWrap'];
	/** Control word break during wrapping */
	wordBreak?: Sprinkles['wordBreak'];
}
