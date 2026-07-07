import clsx, { type ClassValue as ClassName } from 'clsx';

import { resetStyles } from './elementStyles';
import { sprinkles, type Sprinkles } from './sprinkles.css';
import {
	common,
	type LegacyTextColours,
	sprinklesLegacyText,
} from './typography.css';

export const TEXT_TAGS = ['p', 'span', 'label'] as const;
export const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const DEFAULT_TEXT_COLOUR = 'neutral' as LegacyTextColours;
/**
 * Default-path semantic text colours (Track C C-P4). The legacy defaults
 * `neutral`(gray700) / `dark`(gray900) are value-identical to these semantic
 * `foreground.secondary` / `foreground.primary` tokens in every theme —
 * including the `flat_red`/`neutral` in-repo themes and all MFE tenant themes,
 * none of which override either the legacy or the semantic keys divergently —
 * so routing the *default* colour through the semantic path is pixel-preserving.
 */
export const DEFAULT_TEXT_COLOR = 'secondary' as Sprinkles['color'];
export const DEFAULT_HEADING_COLOR = 'primary' as Sprinkles['color'];
export const DEFAULT_TEXT_SIZE = '4' as Sprinkles['text'];
export const DEFAULT_TEXT_WEIGHT = 'normal' as Sprinkles['fontWeight'];

export type TextTags = (typeof TEXT_TAGS)[number];
export type HeadingTags = (typeof HEADING_TAGS)[number];

const isHeadingTag = (tag: string) => HEADING_TAGS.includes(tag as HeadingTags);

const headingSizeMap: Record<HeadingTags, Sprinkles['fontSize']> = {
	h1: '8',
	h2: '7',
	h3: '6',
	h4: '4',
	h5: '3',
	h6: '2',
};

export interface TypographyProps {
	/** Aligns text horizontally */
	align?: Sprinkles['textAlign'];
	/** Forces long words to break */
	breakWord?: boolean;
	/** Set the text colour */
	color?: Sprinkles['color'];
	/** _in transistion_ Prefer `color` */
	colour?: LegacyTextColours;
	/** @deprecated prefer `wrap` prop as it supports all wrapping values */
	noWrap?: boolean;
	/** Font size of the text */
	size?: Sprinkles['text'];
	/** Bold font weight */
	strong?: boolean;
	/** Applies text capitalisation style */
	transform?: Sprinkles['textTransform'];
	/** The font weight */
	weight?: Sprinkles['fontWeight'];
	/** Control the text wrapping */
	wrap?: Sprinkles['textWrap'];
	/** Control word break during wrapping */
	wordBreak?: Sprinkles['wordBreak'];
}

/**
 * Applies typography-related styling including font size and weight, has opinionated defaults.
 */
export const typography = ({
	align: textAlign,
	breakWord = false,
	color, // modern semantic colour tokens
	colour, // legacy colours
	noWrap = false,
	size: text = DEFAULT_TEXT_SIZE,
	strong = false,
	transform: textTransform,
	weight = DEFAULT_TEXT_WEIGHT,
	wrap,
	wordBreak,
}: TypographyProps) => {
	// An explicit legacy `colour` still resolves through the legacy text
	// sprinkles: its named/intent keys (primary, link, information, …) are
	// theme-overridden, so they are NEVER repointed (Track C intent rule).
	// Only the *default* colour is routed through the semantic path —
	// `dark`→`primary` and `neutral`→`secondary` are value-identical in every
	// theme incl. MFE tenants (Track C C-P4).
	const usesLegacyColour = !color && colour !== undefined;
	const defaultColor = strong === true ? DEFAULT_HEADING_COLOR : DEFAULT_TEXT_COLOR;
	return clsx(
		common,
		sprinkles({
			color: color ?? (usesLegacyColour ? undefined : defaultColor),
			fontWeight: strong === true ? 'bold' : weight,
			text,
			textAlign,
			textTransform,
			textWrap: noWrap === true ? 'nowrap' : wrap,
			wordBreak: breakWord === true ? 'break-word' : wordBreak,
		}),
		usesLegacyColour && sprinklesLegacyText({ color: colour }),
	);
};

export interface TextStylesProps extends TypographyProps {
	as?: TextTags | HeadingTags;
	className?: ClassName;
}

/**
 * Primary utility for styling typography, combines reset styles, style props and element props.
 * Also accepts a heading tag which will apply colour, font weight and size defaults.
 *
 * @example
 * // Basic usage with semantic color
 * textStyles({ color: 'primary', size: 'large' })
 *
 * @example
 * // Applies default colour, weight and sizing to heading
 * textStyles({ as: 'h2' })
 *
 * @example
 * // Text wrapping and transformation
 * textStyles({
 * 	 as: 'label',
 *   noWrap: true,
 *   transform: 'uppercase',
 *   breakWord: true
 * })
 */
export function textStyles({
	as = 'span',
	className,

	color,
	colour,
	size = isHeadingTag(as) ? headingSizeMap[as] : undefined,
	weight = isHeadingTag(as) ? 'bold' : undefined,
	// remaining style props
	...props
}: TextStylesProps) {
	// Heading colour default repoints the legacy `dark` onto semantic
	// `foreground.primary` (value-identical in every theme). It is applied only
	// when the caller supplies no colour of either kind — an explicit legacy
	// `colour` (e.g. an intent key) still wins and stays on the legacy path.
	const headingColor =
		color ??
		(isHeadingTag(as) && colour === undefined
			? DEFAULT_HEADING_COLOR
			: undefined);
	return clsx(
		resetStyles(as),
		typography({ color: headingColor, colour, size, weight, ...props }),
		className,
	);
}
