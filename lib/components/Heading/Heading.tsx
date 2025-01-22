import React from 'react';

import { Tokens } from '../../themes/tokens';
import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box, type BoxProps } from '../Box';
import type { TextStyleProps } from '../Text';
import { useTextStyles } from '../Text';

export interface HeadingProps
	extends Omit<TextStyleProps, 'is'>,
		Pick<BoxProps, 'children' | 'className' | 'id'> {
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
	id,
	testId,
	align,
	fontWeight = 'bold',
	noWrap,
	transform,
	colour = 'dark',
	size = sizeScaleDefaults[is],
	breakWord,
	className = '',
	children,
}: WithTestId<HeadingProps>) => (
	<Box
		id={id}
		as={is}
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
