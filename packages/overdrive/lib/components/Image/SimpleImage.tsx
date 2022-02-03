import * as React from 'react';
import { FunctionComponent } from 'react';
import { Box } from '../Box';

export interface Props extends Omit<HTMLImageElement, 'loading' | 'className'> {
	src: string;
	eager?: boolean;
	className?: string;
}

export const SimpleImage: FunctionComponent<Props> = ({
														  eager = 'false',
														  className = '',
														  src,
														  ...imgProps
													  }) => (
	<Box
		is='img'
		// @ts-ignore
		loading={eager ? 'eager' : 'lazy'}
		className={className}
		src={src}
		{...imgProps}
	/>
);
