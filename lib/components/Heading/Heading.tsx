import React from 'react';

import type { Sprinkles } from '../../styles/sprinkles.css';
import { Box, type BoxProps } from '../Box';
import { textStyles, type TextStyleProps } from '../Text/textStyles';

export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
	extends Omit<BoxProps, keyof TextStyleProps>,
		Omit<TextStyleProps, 'as'> {
	as?: HeadingTags;
	/** @deprecated Prefer `as` */
	is?: HeadingTags;
}

const defaultSizeMap: Record<HeadingTags, Sprinkles['fontSize']> = {
	h1: '8',
	h2: '7',
	h3: '6',
	h4: '4',
	h5: '3',
	h6: '2',
};

/**
 * Heading renders an <h1... h6> with default font size and weight
 */
export const Heading = ({
	is = 'h1',
	as = is,
	align,
	breakWord,
	children,
	className,
	color, // semantic tokens
	colour = color ? undefined : 'dark', // legacy intentional tokens
	noWrap,
	size = defaultSizeMap[as],
	transform,
	weight = 'bold',
	...props
}: HeadingProps) => (
	<Box
		{...props}
		as={as}
		color={color}
		className={[
			textStyles({
				align,
				breakWord,
				colour,
				noWrap,
				size,
				transform,
				weight,
			}),
			className,
		]}
	>
		{children}
	</Box>
);
