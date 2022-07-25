import * as React from 'react';
import { FunctionComponent } from 'react';

export interface Props
	extends Partial<
		Omit<HTMLImageElement, 'loading' | 'className' | 'width' | 'height'>
	> {
	src: string;

	/**
	 * If set to true, image lazy loading is disabled.
	 **/
	eager?: boolean;

	/**
	 * Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for
	 * all available sizes when an `ImageServerProvider` is defined upstream.
	 **/
	srcSet?: string;

	/**
	 * When set to true image async decoding by the browser is disabled.
	 * Async decoding of the image reduces delay in presenting other content.
	 **/
	syncDecoding?: boolean;

	/**
	 * Only effective if `ImageServerProvider` is defined upstream.
	 * Will be set as `width` attribute on the `img` tag
	 **/
	width?: string;

	/**
	 * Will be set as `height` attribute on the `img` tag
	 **/
	height?: string;

	className?: string;
}

export const SimpleImage: FunctionComponent<Props> = ({
	eager = 'false',
	syncDecoding = 'false',
	className = '',
	src,
	srcSet,
	...imgProps
}) => (
	// @ts-ignore
	<img
		loading={eager ? 'eager' : 'lazy'}
		decoding={syncDecoding ? 'sync' : 'async'}
		className={className}
		srcSet={srcSet}
		src={src}
		{...imgProps}
	/>
);

export default SimpleImage;
