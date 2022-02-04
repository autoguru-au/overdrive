import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Stack } from '../Stack';

import { ImageServerProvider, widthMap } from './ImageServerProvider';

import { Image } from '.';
import { Text } from '../Text';

const sizeOptions: Array<ComponentProps<typeof Image>['imageWidth']> = [
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
export default {
	title: 'Foundation/Image/Image',
	// component: Heading, Breaks the docs when enabled!
	argTypes: {
		width: {
			options: [...sizeOptions, 'full'],
			defaultValue: 8,
			control: {
				type: 'select',
			},
		},
		quality: {
			defaultValue: void 0,
			control: {
				type: 'number',
				min: 1,
				max: 100,
			},
		},
		eager: {
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		unoptimised: {
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
	},
} as ComponentMeta<typeof Image>;

const calcWidth = (width: typeof sizeOptions[number] | 'full')=>(
	width === 'full'?'100%': widthMap[width]
)

const SimpleTemplate: ComponentStory<typeof Image> = (args) => (
	<div style={{ width: '100%', overflow: 'auto' }}>
		<Image {...args}  width={calcWidth(args.width)}  />
	</div>
);

const standardProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-og.jpg',
};
export const standard = SimpleTemplate.bind(standardProps);
standard.args = standardProps;



const srcUrlMapper = ({
						  src,
						  width,
						  quality,
					  }) => (
	`https://images.autoguru.com.au/?url=${src}&w=${width}&q=${quality}`
)

const WidthProviderTemplate: ComponentStory<typeof Image> = (args) => (
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
export const withImageServerUnoptimised = WidthProviderTemplate.bind(withImageServerUnoptimisedProps);
withImageServerUnoptimised.args = withImageServerUnoptimisedProps;


const withImageServerProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
};
export const withImageServer = WidthProviderTemplate.bind(withImageServerProps);
withImageServer.args = withImageServerProps;

const withResponsiveImageWidthProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
	width: 'full',
	imageWidth: [5, 8, ,12]
};
export const withResponsiveImageWidth = WidthProviderTemplate.bind(withResponsiveImageWidthProps);
withResponsiveImageWidth.args = withResponsiveImageWidthProps;

const AllQualityTemplate: ComponentStory<typeof Image> = (args) => (
	<ImageServerProvider srcUrlMapper={srcUrlMapper}>
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Stack space='3'>
				{[1, 20, 40, 60, 80, 100].map((quality)=> (
					<Stack key={quality} space='1'>
						<Text>Quality: {quality}</Text>
						<Image key={quality} {...args} width={calcWidth(args.width)} imageWidth={args.width} quality={quality} />
					</Stack>
				))}
			</Stack>
		</div>
	</ImageServerProvider>
);

export const withImageServerQualities = AllQualityTemplate.bind(withImageServerProps);
withImageServerQualities.args = withImageServerProps;


const AllSizeTemplate: ComponentStory<typeof Image> = (args) => (
	<ImageServerProvider srcUrlMapper={srcUrlMapper}>
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Stack space='1'>
				{
					sizeOptions.map((width)=> (
					<Image key={width} {...args} width={calcWidth(args.width)} imageWidth={width} />
				))}
			</Stack>
		</div>
	</ImageServerProvider>
);

export const withImageServerResizing = AllSizeTemplate.bind(withImageServerProps);
withImageServerResizing.args = withImageServerProps;
