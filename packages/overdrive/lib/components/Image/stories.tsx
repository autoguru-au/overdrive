import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Stack } from '../Stack';

import { ImageServerProvider, widthMap } from './ImageServerProvider';

import { Image } from '.';

const eagerOptions: Array<ComponentProps<typeof Image>['eager']> = [
	false,
	true,
];
const unoptimisedOptions: Array<ComponentProps<typeof Image>['unoptimised']> = [
	false,
	true,
];
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
			options: sizeOptions,
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

const SimpleTemplate: ComponentStory<typeof Image> = (args) => (
	<div style={{ width: '100%', overflow: 'auto' }}>
		<Image {...args}  width={widthMap[args.width]}  />
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
			<Image {...args} width={widthMap[args.width]} />
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

const AllQualityTemplate: ComponentStory<typeof Image> = (args) => (
	<ImageServerProvider srcUrlMapper={srcUrlMapper}>
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Stack space='1'>
				{[1, 20, 40, 60, 80, 100].map((quality)=> (
					<Image key={quality} {...args} width={widthMap[args.width]} quality={quality} />
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
					<Image key={width} {...args} width={widthMap[width]} imageWidth={width} />
				))}
			</Stack>
		</div>
	</ImageServerProvider>
);

export const withImageServerResizing = AllSizeTemplate.bind(withImageServerProps);
withImageServerResizing.args = withImageServerProps;
