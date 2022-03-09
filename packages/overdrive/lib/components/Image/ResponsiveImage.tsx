import { invariant } from '@autoguru/utilities';
import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';
import { useMemo } from 'react';

import { useResponsiveValue } from '../../hooks/useResponsiveValue';
import { ResponsiveProp } from '../../utils/responsiveProps.css';

import { useImageServer, widthMap } from './ImageServerProvider';
import { SimpleImage } from './SimpleImage';

export interface Props
	extends Omit<ComponentProps<typeof SimpleImage>, 'sizes'> {
	/**
	 * Only effective if `ImageServerProvider` is defined upstream.
	 * Not to be confused with the `width` of the image tag. `imageWidth` is purely to do with the
	 * intrinsic size of the image asset coming back from the Image Server and does not change the layout size of the `img` tag
	 * If `imageWidth` is provided, it will be exactly used and no automatic `srcSet` will be defined and `sizes` will have no effect.
	 * `imageWidth` can be a single value e.g. `4` to be used for all screen sizes or an array to be used for responsive values e.g. `[4, ,6, 8]`
	 **/
	imageWidth?: ResponsiveProp<keyof typeof widthMap>;

	/**
	 * Only effective if `ImageServerProvider` is defined upstream.
	 * A vw value e.g. `80vw` or an array of vw values `['100vw', ,'50vw', '30vw']` to be used as responsive.
	 * When defined, browser will pick the closest match from srcSet based on viewport width size.
	 * Just like `imageWidth` sizes has no effect on the `img` tag layout size and is purely to do with the
	 * intrinsic size of the image asset coming back from the Image Server.
	 * in `['100vw', ,'50vw', '30vw']` browser will fetch the best image asset to cover
	 * the whole width of mobile and tablet devices, 50% of desktop screen width 30% of a large desktop screen width irrespective
	 * of the size of img tag on the page. So a `100vh` set for a large desktop might fetch a `3840px` wide
	 * asset even if the image only occupies 10px of the page width.
	 **/
	sizes?: ResponsiveProp<string>;

	/**
	 * Only effective if `ImageServerProvider` is defined upstream.
	 * A number between 1 and 100 to be used by the image server for the quality of image returned.
	 **/
	quality?: number;
}

export const ResponsiveImage: FunctionComponent<Props> = ({
	imageWidth: imageWidthList,
	sizes: sizesList = '100vw',
	quality = 70,
	src: incomingSrc,
	...imgProps
}) => {
	invariant(
		quality > 0 && quality <= 100,
		'Image must be a number between 1 and 100.',
	);

	const imageWidth = useResponsiveValue(imageWidthList);
	const sizes = useResponsiveValue(sizesList);

	const { srcUrlMapper, getWidthValue, generateSrcSet } = useImageServer();
	const src = useMemo(
		() =>
			srcUrlMapper({
				src: incomingSrc,
				width: getWidthValue(imageWidth),
				quality,
			}),
		[incomingSrc, imageWidth, quality, srcUrlMapper, getWidthValue],
	);
	const srcset = useMemo(
		() =>
			imageWidth
				? void 0
				: generateSrcSet({
						src: incomingSrc,
						quality,
				  }),
		[incomingSrc, quality],
	);

	return (
		<SimpleImage sizes={sizes} srcSet={srcset} src={src} {...imgProps} />
	);
};
