import clsx from 'clsx';

import { boxStyles } from '../Box/boxStyles';
import type { UseBoxProps } from '../Box/useBox';

import * as styles from './useTextStyles.css';

/** UseTextStyles uses a different colour category in the legacy that is not generated from sprinkles */
export type TextColor = keyof typeof styles.colours;
export type TextFontWeight = keyof typeof styles.fontWeight;
export type TextSize = keyof typeof styles.sizes;
export type TextTransform = keyof typeof styles.transform;

export type TextTags = 'p' | 'label' | 'span';
export interface TextStyleProps {
	/** @deprecated Use `useBoxStyles` for alignment instead of `useTextStyles` */
	align?: UseBoxProps['textAlign'];
	/** HTML element to render as */
	as?: TextTags;
	/** Prefer `color` prop which uses new token structure */
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
		colour !== 'unset' && styles.colours[colour ?? 'neutral'],
		fontWeight && styles.fontWeight[fontWeight],
		noWrap && styles.noWrap,
		breakWord && styles.breakWord,
		size && styles.sizes[size],
		transform && styles.transform[transform],
	);
};

export default useTextStyles;
