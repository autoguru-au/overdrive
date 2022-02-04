import { invariant } from '@autoguru/utilities';
import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';
import { useMemo } from 'react';

import { useImageServer, widthMap } from './ImageServerProvider';
import { SimpleImage } from './SimpleImage';

export interface Props extends ComponentProps<typeof SimpleImage> {
	imageWidth?: keyof typeof widthMap;
	quality?: number;
}

export const ResponsiveImage: FunctionComponent<Props> = ({
															  imageWidth ='1',
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
	const srcset = useMemo(() => generateSrcSet({ src: incomingSrc, quality }), [incomingSrc, quality]);

	return (
		<SimpleImage
			sizes="100vw"
			srcSet={srcset}
			src={src}
			{...imgProps}
		/>
	);
};
