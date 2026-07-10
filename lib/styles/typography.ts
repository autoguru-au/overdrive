import clsx, { type ClassValue as ClassName } from 'clsx';

import { resetStyles } from './elementStyles';
import { sprinkles, type Sprinkles } from './sprinkles.css';
import {
	common,
	type LegacyTextColours,
	// eslint-disable-next-line no-restricted-imports -- RETAINED: the legacy text-colour sprinkle stays until the DS-2026 major (Track C).
	sprinklesLegacyText,
} from './typography.css';

export const TEXT_TAGS = ['p', 'span', 'label'] as const;
export const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const DEFAULT_TEXT_COLOUR = 'neutral' as LegacyTextColours;
export const DEFAULT_TEXT_SIZE = '4' as Sprinkles['text'];
export const DEFAULT_TEXT_WEIGHT = 'normal' as Sprinkles['fontWeight'];

export type TextTags = (typeof TEXT_TAGS)[number];
export type HeadingTags = (typeof HEADING_TAGS)[number];

export const TEXT_STYLES = [
	'h1',
	'h2',
	'h3',
	'h4',
	'p1',
	'p2',
	'p3',
	'p4',
] as const;
export type NamedTextStyle = (typeof TEXT_STYLES)[number];

/**
 * Design System 2026 named text styles (opt-in). Each has its own size
 * token — headings use a 1.25 line-height ratio, paragraphs 1.4 — and a
 * default weight applied when no `weight` or `strong` is set.
 */
export const namedTextStyleMap = {
	h1: { size: 'h1', weight: 'bold' }, // 40/50
	h2: { size: 'h2', weight: 'bold' }, // 32/40
	h3: { size: 'h3', weight: 'bold' }, // 24/30
	h4: { size: 'h4', weight: 'bold' }, // 20/25
	p1: { size: 'p1', weight: 'normal' }, // 16/22.4
	p2: { size: 'p2', weight: 'normal' }, // 14/19.6
	p3: { size: 'p3', weight: 'normal' }, // 12/16.8
	p4: { size: 'p4', weight: 'normal' }, // 10/14 — no semibold per spec
} as const satisfies Record<
	NamedTextStyle,
	{
		size: NonNullable<Sprinkles['text']>;
		weight: NonNullable<Sprinkles['fontWeight']>;
	}
>;

const isHeadingTag = (tag: string) => HEADING_TAGS.includes(tag as HeadingTags);

const isNamedTextStyle = (
	size: TypographyProps['size'],
): size is NamedTextStyle =>
	typeof size === 'string' && TEXT_STYLES.includes(size as NamedTextStyle);

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
	/** Font size of the text, a size scale value or a named text style (`h1`-`h4`, `p1`-`p4`) */
	size?: Sprinkles['text'] | NamedTextStyle;
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
	size,
	strong = false,
	transform: textTransform,
	weight,
	wrap,
	wordBreak,
}: TypographyProps) => {
	const namedStyle =
		size && isNamedTextStyle(size) ? namedTextStyleMap[size] : undefined;
	const text =
		namedStyle?.size ?? (size as Sprinkles['text']) ?? DEFAULT_TEXT_SIZE;
	// precedence: explicit weight > strong > named-style weight > default
	const fontWeight =
		weight ??
		(strong === true
			? 'bold'
			: (namedStyle?.weight ?? DEFAULT_TEXT_WEIGHT));

	return clsx(
		common,
		sprinkles({
			color,
			fontWeight,
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
