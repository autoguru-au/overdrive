import { Meta, StoryFn } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Stack } from '../Stack';
import { Text } from '../Text';

import { ImageServerProvider, widthMap } from './ImageServerProvider';

import { Image } from '.';

const sizeOptions: Array<ComponentProps<typeof Image>['imageWidth']> =
	isChromatic()
		? ['8']
		: [
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'10',
				'11',
				'12',
				'13',
				'14',
				'15',
				'16',
		  ];
const qualityOptions: Array<ComponentProps<typeof Image>['quality']> =
	isChromatic() ? ['70'] : [1, 20, 40, 60, 80, 100];
export default {
	title: 'Foundation/Image',
	component: Image,
	args: {
		imageWidth: 8,
		width: 8,
		quality: void 0,
		eager: false,
		unoptimised: false,
	},
	argTypes: {
		imageWidth: {
			options: [...sizeOptions, 'full'],
			control: {
				type: 'select',
			},
		},
		width: {
			options: [...sizeOptions, 'full'],
			control: {
				type: 'select',
			},
		},
		quality: {
			control: {
				type: 'number',
				min: 1,
				max: 100,
			},
		},
		eager: {
			control: {
				type: 'boolean',
			},
		},
		unoptimised: {
			control: {
				type: 'boolean',
			},
		},
	},
} satisfies Meta<typeof Image>;

const calcWidth = (width: (typeof sizeOptions)[number] | 'full') =>
	width === 'full' ? '100%' : widthMap[width];

const SimpleTemplate: StoryFn<typeof Image> = (args) => (
	<div style={{ width: '100%', overflow: 'auto' }}>
		<Image {...args} width={calcWidth(args.width)} />
	</div>
);

const standardProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-og.jpg',
};
export const standard = SimpleTemplate.bind(standardProps);
standard.args = standardProps;

const srcUrlMapper = ({ src, width, quality }) =>
	`https://images.autoguru.com.au/?url=${src}&w=${width}&q=${quality}`;

const WidthProviderTemplate: StoryFn<typeof Image> = (args) => (
	<ImageServerProvider srcUrlMapper={srcUrlMapper}>
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Image {...args} width={calcWidth(args.width)} />
		</div>
	</ImageServerProvider>
);
const withImageServerUnoptimisedProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
	unoptimised: true,
};
export const withImageServerUnoptimised = WidthProviderTemplate.bind(
	withImageServerUnoptimisedProps,
);
withImageServerUnoptimised.args = withImageServerUnoptimisedProps;

const withImageServerProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
	quality: 60,
	imageWidth: 8,
	sizes: ['100vh', , '60vh', '40vh'],
};
export const withImageServer = WidthProviderTemplate.bind(withImageServerProps);
withImageServer.args = withImageServerProps;

const withResponsiveImageWidthProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
	width: 'full',
	sizes: ['100vw', '70vw', '50vw', '40vw'],
	imageWidth: [5, 8, , 12],
};
export const withResponsiveImageWidth = WidthProviderTemplate.bind(
	withResponsiveImageWidthProps,
);
withResponsiveImageWidth.args = withResponsiveImageWidthProps;

const withResponsiveSizesProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
	width: 'full',
	sizes: ['100vw', '70vw', '50vw', '40vw'],
};
export const withResponsiveSizes = WidthProviderTemplate.bind(
	withResponsiveSizesProps,
);
withResponsiveSizes.args = withResponsiveSizesProps;

const AllQualityTemplate: StoryFn<typeof Image> = (args) => (
	<ImageServerProvider srcUrlMapper={srcUrlMapper}>
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Stack space="5">
				{qualityOptions.map((quality) => (
					<Stack key={quality} space="1">
						<Text>
							Quality: <Text strong>{quality}</Text>
						</Text>
						<Image
							key={quality}
							{...args}
							width={calcWidth(args.width)}
							imageWidth={args.width}
							quality={quality}
						/>
					</Stack>
				))}
			</Stack>
		</div>
	</ImageServerProvider>
);

export const withImageServerQualities =
	AllQualityTemplate.bind(withImageServerProps);
withImageServerQualities.args = withImageServerProps;

const AllSizeTemplate: StoryFn<typeof Image> = (args) => (
	<ImageServerProvider srcUrlMapper={srcUrlMapper}>
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Stack width="full" space="5">
				{sizeOptions.map((width) => (
					<Stack key={width} space="1">
						<Text>
							Quality: <Text strong>{args.quality}</Text>
						</Text>
						<Text>
							Width:{' '}
							<Text strong>
								{width}: {calcWidth(width)}px
							</Text>
						</Text>
						<Image
							{...args}
							width={calcWidth(width)}
							imageWidth={width}
						/>
					</Stack>
				))}
			</Stack>
		</div>
	</ImageServerProvider>
);

const withImageServerResizingProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
	quality: 20,
	sizes: ['100vh', , '60vh', '40vh'],
};

export const withImageServerResizing = AllSizeTemplate.bind(
	withImageServerResizingProps,
);
withImageServerResizing.args = withImageServerResizingProps;
