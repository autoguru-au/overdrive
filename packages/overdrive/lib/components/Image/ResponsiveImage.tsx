import { invariant } from '@autoguru/utilities';
import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';
import { useMemo } from 'react';

import { useImageServer, widthMap } from './ImageServerProvider';
import { SimpleImage } from './SimpleImage';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { useResponsiveValue } from '../../hooks/useResponsiveValue';

export interface Props extends ComponentProps<typeof SimpleImage> {
	imageWidth?: ResponsiveProp<keyof typeof widthMap>; // When provided, will be exactly used and no srcSet will be defined
	quality?: number;
}

export const ResponsiveImage: FunctionComponent<Props> = ({
															  imageWidth:imageWidthList,
															  quality = 70,
															  src: incomingSrc,
															  ...imgProps
														  }) => {

	invariant(quality > 0 && quality <= 100, 'Image must be a number between 1 and 100.');

	const imageWidth = useResponsiveValue(imageWidthList);

	const { srcUrlMapper, getWidthValue, generateSrcSet } = useImageServer();
	const src = useMemo(() => srcUrlMapper({
		src: incomingSrc,
		width: getWidthValue(imageWidth),
		quality,
	}), [incomingSrc, imageWidth, quality, srcUrlMapper, getWidthValue]);
	const srcset = useMemo(() => imageWidth?void 0:generateSrcSet({ src: incomingSrc, quality }), [incomingSrc, quality]);

	return (
		<SimpleImage
			sizes='(max-width: 128px) 128px, (min-width: 2048px) 2048px, '
			srcSet={srcset}
			src={src}
			{...imgProps}
		/>
	);
};
