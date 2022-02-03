import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Stack } from '../Stack';

import { ImageServerProvider } from './ImageServerProvider';

import { Image } from '.';

const eagerOptions: Array<ComponentProps<typeof Image>['eager']> = [
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
		eager: {
			options: eagerOptions,
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
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
	},
} as ComponentMeta<typeof Image>;

const SimpleTemplate: ComponentStory<typeof Image> = (args) => (
	<div style={{ width: '100%', overflow: 'auto' }}>
		<Image {...args} />
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
			<Image {...args} />
		</div>
	</ImageServerProvider>
);
const withImageServerProps: ComponentProps<typeof Image> = {
	src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
	quality: 80,
	imageWidth: 10,
};
export const withImageServer = WidthProviderTemplate.bind(withImageServerProps);
withImageServer.args = withImageServerProps;

const AllQualityTemplate: ComponentStory<typeof Image> = (args) => (
	<ImageServerProvider srcUrlMapper={srcUrlMapper}>
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Stack space='1'>
				{[1, 20, 40, 60, 80, 100].map((quality)=> (
					<Image key={quality} {...args} quality={quality} />
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
					<Image key={width} {...args} imageWidth={width} />
				))}
			</Stack>
		</div>
	</ImageServerProvider>
);

export const withImageServerResizing = AllSizeTemplate.bind(withImageServerProps);
withImageServerResizing.args = withImageServerProps;
