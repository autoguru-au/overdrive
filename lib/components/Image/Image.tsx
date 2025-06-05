import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';

import { useImageServer } from './ImageServerProvider';
import { ResponsiveImage } from './ResponsiveImage';
import { SimpleImage } from './SimpleImage';

export interface ImageProps extends ComponentProps<typeof ResponsiveImage> {
	/**
	 * If set to true, no size/quality optimisation will be done even when `ImageServerProvider` has been defined upstream.
	 **/
	unoptimised?: boolean;
}

export const Image: FunctionComponent<ImageProps> = ({
	unoptimised = false,
	imageWidth,
	...props
}) =>
	useImageServer() && !unoptimised ? (
		<ResponsiveImage imageWidth={imageWidth} {...props} />
	) : (
		<SimpleImage {...(props as ComponentProps<typeof SimpleImage>)} />
	);

export default Image;
