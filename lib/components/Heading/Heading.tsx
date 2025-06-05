import React from 'react';

import type { ThemeTokens as Tokens } from '../../themes';
import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box, type BoxProps } from '../Box/Box';
import { type TextStyleProps, useTextStyles } from '../Text/useTextStyles';

export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
	extends Omit<TextStyleProps, 'as' | 'is'>,
		Pick<BoxProps, 'children' | 'className' | 'id'> {
	as?: HeadingTags;
	is?: HeadingTags;
	colour?: Exclude<keyof Tokens['typography']['colour'], 'muted'>;
}

const sizeScaleDefaults = {
	h1: '8',
	h2: '7',
	h3: '6',
	h4: '4',
	h5: '3',
	h6: '2',
} as const;

export const Heading = ({
	is = 'h1',
	as = is,
	id,
	testId,
	align,
	fontWeight = 'bold',
	noWrap,
	transform,
	colour = 'dark',
	size = sizeScaleDefaults[as],
	breakWord,
	className = '',
	children,
}: WithTestId<HeadingProps>) => (
	<Box
		id={id}
		as={as}
		className={[
			useTextStyles({
				size,
				align,
				colour,
				noWrap,
				transform,
				fontWeight,
				breakWord,
			}),
			className,
		]}
		{...dataAttrs({ 'test-id': testId })}
	>
		{children}
	</Box>
);

export default Heading;
