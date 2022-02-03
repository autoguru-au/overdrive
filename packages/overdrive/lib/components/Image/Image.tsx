import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';

import { useImageServer } from './ImageServerProvider';
import { SimpleImage } from './SimpleImage';
import { ResponsiveImage } from './ResponsiveImage';

type Props = ComponentProps<typeof ResponsiveImage>

export const Image: FunctionComponent<Props> = (props) =>(
	useImageServer() ? (
		<ResponsiveImage
			{...props}
		/>
	) : (
		<SimpleImage {...props} />
	)
);
