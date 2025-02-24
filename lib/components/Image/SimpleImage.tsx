import * as React from 'react';
import { FunctionComponent, ReactElement, useState } from 'react';

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

	fallbackComponent?: ReactElement; // Add this line
}

export const SimpleImage: FunctionComponent<Props> = ({
	eager = 'false',
	syncDecoding = 'false',
	className = '',
	src,
	srcSet,
	fallbackComponent, // Add this line
	...imgProps
}) => {
	const [hasError, setHasError] = useState(false);

	const handleError = () => {
		setHasError(true);
	};

	if (hasError && fallbackComponent) {
		// Render fallback component
		return fallbackComponent;
	}

	return (
		// @ts-expect-error cross origin prop type
		// eslint-disable-next-line jsx-a11y/alt-text
		<img
			loading={eager ? 'eager' : 'lazy'}
			decoding={syncDecoding ? 'sync' : 'async'}
			className={className}
			srcSet={srcSet}
			src={src}
			onError={handleError}
			{...imgProps}
		/>
	);
};
