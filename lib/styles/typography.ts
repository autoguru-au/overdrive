import clsx, { type ClassValue as ClassName } from 'clsx';

import { resetStyles } from './componentStyles';
import { sprinkles, type Sprinkles } from './sprinkles.css';
import {
	common,
	type LegacyTextColours,
	sprinklesLegacyText,
} from './typography.css';

export const TEXT_TAGS = ['p', 'span', 'label'] as const;
export const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const DEFAULT_TEXT_COLOUR = 'neutral' as LegacyTextColours;
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
}: TypographyProps) =>
	clsx(
		common,
		sprinkles({
			color,
			fontWeight: strong === true ? 'bold' : weight,
			text,
			textAlign,
			textTransform,
			textWrap: noWrap === true ? 'nowrap' : wrap,
			wordBreak: breakWord === true ? 'break-word' : wordBreak,
		}),
		!color &&
			sprinklesLegacyText({
				color:
					colour ?? (strong === true ? 'dark' : DEFAULT_TEXT_COLOUR),
			}),
	);

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

	colour = isHeadingTag(as) ? 'dark' : undefined,
	size = isHeadingTag(as) ? headingSizeMap[as] : undefined,
	weight = isHeadingTag(as) ? 'bold' : undefined,
	// remaining style props
	...props
}: TextStylesProps) {
	return clsx(
		resetStyles(as),
		typography({ colour, size, weight, ...props }),
		className,
	);
}
