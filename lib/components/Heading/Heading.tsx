import React from 'react';

import type { Sprinkles } from '../../styles/sprinkles.css';
import { Box, UseBoxProps } from '../Box';
import { textStyles, type TextStylesProps } from '../Text/textStyles';

export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
	extends Omit<UseBoxProps<HeadingTags>, keyof TextStylesProps>,
		Omit<TextStylesProps, 'as'> {
	as?: HeadingTags;
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
	as = 'h1',
	breakWord,
	children,
	className,
	color, // semantic tokens
	colour = color ? undefined : 'dark', // legacy intentional tokens
	fontWeight = 'bold',
	noWrap,
	size = defaultSizeMap[as],
	transform,
	...props
}: HeadingProps) => (
	<Box
		{...props}
		as={as}
		color={color}
		className={[
			textStyles({
				breakWord,
				colour,
				fontWeight,
				noWrap,
				size,
				transform,
			}),
			className,
		]}
	>
		{children}
	</Box>
);
