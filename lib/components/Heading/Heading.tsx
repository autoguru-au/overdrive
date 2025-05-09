import React from 'react';

import type { ThemeTokens as Tokens } from '../../themes';
import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box, type UseBoxProps } from '../Box';
import type { TextStyleProps } from '../Text';
import { useTextStyles } from '../Text';

export interface HeadingProps
	extends Omit<TextStyleProps, 'as'>,
		Pick<UseBoxProps, 'children' | 'className' | 'id' | 'ref'> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
	as = 'h1',
	breakWord,
	children,
	className,
	colour = 'dark',
	fontWeight = 'bold',
	id,
	noWrap,
	size = sizeScaleDefaults[as],
	testId,
	transform,
}: WithTestId<HeadingProps>) => (
	<Box
		as={as}
		id={id}
		className={[
			useTextStyles({
				size,
				colour,
				noWrap,
				transform,
				fontWeight,
				breakWord,
			}),
			className,
		]}
		{...dataAttrs({ testId })}
	>
		{children}
	</Box>
);

export default Heading;
