import * as React from 'react';
import { ComponentProps, FunctionComponent, ReactNode } from 'react';

import { Tokens } from '../../themes/tokens';
import { Box } from '../Box';
import type { TextStyleProps } from '../Text';
import { useTextStyles } from '../Text';

export interface Props
	extends Omit<TextStyleProps, 'is'>,
		Pick<ComponentProps<typeof Box>, 'id'> {
	className?: string;
	children: ReactNode;
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

export const Heading: FunctionComponent<Props> = ({
	is = 'h1',
	align,
	fontWeight = 'bold',
	noWrap,
	transform,
	colour = 'dark',
	size = sizeScaleDefaults[is],
	id,
	breakWord,
	className = '',
	children,
}) => (
	<Box
		id={id}
		is={is}
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
		]}>
		{children}
	</Box>
);
