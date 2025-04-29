import clsx from 'clsx';

import type { BoxProps } from '../Box';
import { boxStyles } from '../Box';

import * as styles from './useTextStyles.css';

export type TextColor = keyof typeof styles.colours | 'unset';
export type TextFontWeight = keyof typeof styles.fontWeight;
export type TextSize = keyof typeof styles.sizes;
export type TextTransform = keyof typeof styles.transform;

export type TextTags = 'p' | 'label' | 'span';
export interface TextStyleProps {
	/** @deprecated Use `useBoxStyles` for alignment instead of `useTextStyles` */
	align?: BoxProps['textAlign'];
	/** HTML element to render as */
	as?: TextTags;
	/** Set the text colour */
	color?: TextColor;
	/** @deprecated Prefer `color` */
	colour?: TextColor;
	/** Font weight of the text */
	fontWeight?: TextFontWeight;
	/** @deprecated Prefer `as` */
	is?: TextTags;
	/** Prevents text from wrapping */
	noWrap?: boolean;
	/** Forces long words to break */
	breakWord?: boolean;
	/** Font size of the text */
	size?: TextSize;
	/** Text transformation (uppercase, lowercase, etc.) */
	transform?: TextTransform;
}

export const useTextStyles = ({
	align,
	colour,
	color = colour,
	fontWeight,
	is,
	as = is,
	noWrap,
	breakWord,
	size,
	transform,
}: TextStyleProps) => {
	return clsx(
		styles.root,
		boxStyles({ as, textAlign: align }),
		color !== 'unset' && styles.colours[color ?? 'neutral'],
		fontWeight && styles.fontWeight[fontWeight],
		noWrap && styles.noWrap,
		breakWord && styles.breakWord,
		size && styles.sizes[size],
		transform && styles.transform[transform],
	);
};

export default useTextStyles;
