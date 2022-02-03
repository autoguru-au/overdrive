import * as React from 'react';
import { FunctionComponent } from 'react';

export interface Props extends Omit<HTMLImageElement, 'loading' | 'className'> {
	src: string;
	srcSet: string;
	eager?: boolean;
	syncDecoding?: boolean;
	className?: string;
}

export const SimpleImage: FunctionComponent<Props> = ({
														  eager = 'false',
														  syncDecoding = 'false',
														  className = '',
														  src,
														  srcSet,
														  ...imgProps
													  }) => (
// @ts-ignore
	<img
		loading={eager ? 'eager' : 'lazy'}
		decoding={syncDecoding ? 'sync' : 'async'}
		className={className}
		srcSet={srcSet}
		src={src}
		{...imgProps}
	/>
);
