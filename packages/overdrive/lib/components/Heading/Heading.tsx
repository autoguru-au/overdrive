import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import type { Theme } from 'treat/theme';

import { Box } from '../Box';
import type { TextStyleProps } from '../Text';
import { useTextStyles } from '../Text';

export interface Props
	extends Omit<TextStyleProps, 'is'>,
		Pick<ComponentProps<typeof Box>, 'id'> {
	className?: string;
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	colour?: Exclude<keyof Theme['typography']['colour'], 'muted'>;
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
			}),
			className,
		]}>
		{children}
	</Box>
);
