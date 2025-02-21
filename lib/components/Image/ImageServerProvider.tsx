import * as React from 'react';
import {
	Context,
	createContext,
	FunctionComponent,
	ReactNode,
	useCallback,
	useContext,
	useMemo,
} from 'react';

import { WidthScale } from './types';

interface UrlParams {
	src: string;
	width: number;
	quality: number;
}

interface ImageServerContext {
	children?: ReactNode;
	widthMap?: Record<WidthScale, number>;
	srcUrlMapper: (params: UrlParams) => string;
	getWidthValue?(width: WidthScale): number;
	generateSrcSet(params: Omit<UrlParams, 'width'>): string;
}

export const widthMap: NonNullable<ImageServerContext['widthMap']> = {
	'1': 16,
	'2': 32,
	'3': 48,
	'4': 64,
	'5': 96,
	'6': 128,
	'7': 256,
	'8': 384,
	'9': 640,
	'10': 750,
	'11': 828,
	'12': 1080,
	'13': 1200,
	'14': 1920,
	'15': 2048,
	'16': 3840,
};

const defaultValue: ImageServerContext = {
	widthMap,
	getWidthValue: (width: WidthScale) => widthMap[width],
	// @ts-expect-error type does not allow `null`
	srcUrlMapper: null,
	// @ts-expect-error type does not allow `null`
	generateSrcSet: null,
};

// @ts-expect-error type does not allow `null`
const imageServerCtx: Context<ImageServerContext> = createContext(null);

export const useImageServer = () => useContext(imageServerCtx);

export const ImageServerProvider: FunctionComponent<
	Omit<ImageServerContext, 'generateSrcSet'>
> = ({
	children,
	srcUrlMapper = defaultValue.srcUrlMapper,
	getWidthValue = defaultValue.getWidthValue,
	widthMap = defaultValue.widthMap,
}) => {
	const generateSrcSet = useCallback<ImageServerContext['generateSrcSet']>(
		({ quality, src }) =>
			Object.keys(widthMap!)
				.map((key) => {
					const width = getWidthValue?.(key as unknown as WidthScale);
					// @ts-expect-error width could be undefined
					return `${srcUrlMapper({ quality, src, width })} ${width}w`;
				})
				.join(', '),
		[widthMap, srcUrlMapper, getWidthValue],
	);

	return (
		<imageServerCtx.Provider
			value={useMemo(
				() => ({
					widthMap,
					srcUrlMapper,
					getWidthValue,
					generateSrcSet,
				}),
				[srcUrlMapper, widthMap, getWidthValue, generateSrcSet],
			)}
		>
			{children}
		</imageServerCtx.Provider>
	);
};

export default ImageServerProvider;
