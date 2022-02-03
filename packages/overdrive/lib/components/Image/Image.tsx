import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';

import { useImageServer } from './ImageServerProvider';
import { SimpleImage } from './SimpleImage';
import { ResponsiveImage } from './ResponsiveImage';

interface Props extends ComponentProps<typeof ResponsiveImage>{
	unoptimised?: boolean;
}

export const Image: FunctionComponent<Props> = ({ unoptimised = false, ...props }) =>(
	(useImageServer() && !unoptimised) ? (
		<ResponsiveImage
			{...props}
		/>
	) : (
		<SimpleImage {...props} />
	)
);
