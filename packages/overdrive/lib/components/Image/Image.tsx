import { invariant } from '@autoguru/utilities';
import type { FunctionComponent, ReactChild } from 'react';
import * as React from 'react';
import { useMemo } from 'react';

import { Box } from '../Box';

import { useImageServer } from './ImageServerProvider';
import { WidthScale } from './types';

export interface Props extends Omit<HTMLImageElement, 'loading' | 'className'> {
	imageWidth?: WidthScale;
	quality?: number;
	src: string;
	eager?: boolean;
	dividers?: boolean | ReactChild;
	className?: string;
}

export const Image: FunctionComponent<Props> = ({
													children,
													imageWidth,
													quality = 70,
													eager = 'false',
													className = '',
													src: incomingSrc,
													...imgProps
												}) => {

	invariant(quality > 0 && quality <= 100, 'Image must be a number between 1 and 100.');

	const { srcUrlMapper, getWidthValue } = useImageServer();
	const src = useMemo(() => srcUrlMapper({
		src: incomingSrc,
		width: getWidthValue(imageWidth),
		quality,
	}), [incomingSrc, imageWidth, quality, srcUrlMapper, getWidthValue]);

	return (
		<Box
			is='img'
			// @ts-ignore
			loading={eager ? 'eager' : 'lazy'}
			className={className}
			src={src}
			{...imgProps}
		/>
	);
};
