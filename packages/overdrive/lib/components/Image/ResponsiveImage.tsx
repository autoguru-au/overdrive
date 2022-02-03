import { invariant } from '@autoguru/utilities';
import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';
import { useMemo } from 'react';

import { useImageServer } from './ImageServerProvider';
import { WidthScale } from './types';
import { SimpleImage } from './SimpleImage';

export interface Props extends ComponentProps<typeof SimpleImage> {
	imageWidth?: WidthScale;
	quality?: number;
}

export const ResponsiveImage: FunctionComponent<Props> = ({
															  imageWidth,
															  quality = 70,
															  src: incomingSrc,
															  ...imgProps
														  }) => {

	invariant(quality > 0 && quality <= 100, 'Image must be a number between 1 and 100.');

	const { srcUrlMapper, getWidthValue, generateSrcSet } = useImageServer();
	const src = useMemo(() => srcUrlMapper({
		src: incomingSrc,
		width: getWidthValue(imageWidth),
		quality,
	}), [incomingSrc, imageWidth, quality, srcUrlMapper, getWidthValue]);
	const srcset = useMemo(() => generateSrcSet({src: incomingSrc, quality}), [incomingSrc, quality]);

	return (
		<SimpleImage
			srcset={srcset}
			src={src}
			{...imgProps}
		/>
	);
};
