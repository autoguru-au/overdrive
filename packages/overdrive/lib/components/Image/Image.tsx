import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';

import { useImageServer } from './ImageServerProvider';
import { ResponsiveImage } from './ResponsiveImage';
import { SimpleImage } from './SimpleImage';

interface Props extends ComponentProps<typeof ResponsiveImage>{
	/**
	 * If set to true, no size/quality optimisation will be done even when `ImageServerProvider` has been defined upstream.
	 **/
	unoptimised?: boolean;
}

export const Image: FunctionComponent<Props> = ({ unoptimised = false, ...props }) =>(
	(useImageServer() && !unoptimised) ? (
		<ResponsiveImage
			{...props}
		/>
	) : (
		<SimpleImage {...(props as ComponentProps<typeof SimpleImage>)} />
	)
);
