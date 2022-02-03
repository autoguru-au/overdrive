import type { FunctionComponent, ReactChild } from 'react';
import * as React from 'react';
import { Tokens } from '../../themes/tokens';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { Box } from '../Box';
import { invariant } from '@autoguru/utilities';

export interface Props extends Omit<HTMLImageElement, 'loading' | 'className'> {
	imageAssetsWidth?: ResponsiveProp<keyof Tokens['width']>;
	quality?: number;
	src: string;
	eager?: boolean;
	dividers?: boolean | ReactChild;
	className?: string;
}

export const Image: FunctionComponent<Props> = ({
													children,
													imageAssetsWidth,
	quality= 80,
													eager = 'false',
													className = '',
													...imgProps
												}) => {

	invariant(quality>0 && quality<=100, "Image must be a number between 1 and 100.");

	return (
	<Box
		is='img'
		// @ts-ignore
		loading={eager ? 'eager' : 'lazy'}
		className={className}
		{...imgProps}
	/>
)};
