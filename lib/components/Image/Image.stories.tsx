import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import React, { type ComponentProps } from 'react';

import { stack } from '../Flex/flex';
import { Text } from '../Text/Text';

import { Image } from './Image';
import { ImageServerProvider, widthMap } from './ImageServerProvider';

type SizeOption = ComponentProps<typeof Image>['imageWidth'];
const sizeOptions: SizeOption[] = isChromatic()
	? ['8']
	: [
			// '1',
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

const qualityOptions: NonNullable<ComponentProps<typeof Image>['quality']>[] =
	isChromatic() ? [70] : [/*1,*/ 20, 40, 60, 80, 100];

const calcWidth = (width: (typeof sizeOptions)[number] | 'full') =>
	width === 'full' ? '100%' : widthMap[width as keyof typeof widthMap];

const meta = {
	title: 'Primitives/Image',
	component: Image,
	args: {
		imageWidth: '8',
		width: '8',
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

export default meta;

type Story = StoryObj<typeof Image>;

const highresImgSrc =
	'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg';

export const Standard: Story = {
	args: {
		src: 'https://cdn.autoguru.com.au/images/autoguru-og.jpg',
	},
	render: (args) => (
		<div style={{ width: '100%', overflow: 'auto' }}>
			<Image {...args} width={`${calcWidth(args.width as SizeOption)}`} />
		</div>
	),
};

const srcUrlMapper = ({ src, width, quality }) =>
	`https://images.autoguru.com.au/?url=${src}&w=${width}&q=${quality}`;

export const WithImageServerUnoptimised: Story = {
	args: {
		src: highresImgSrc,
		unoptimised: true,
	},
	render: (args) => (
		<ImageServerProvider srcUrlMapper={srcUrlMapper}>
			<div style={{ width: '100%', overflow: 'auto' }}>
				<Image
					{...args}
					width={`${calcWidth(args.width as SizeOption)}`}
				/>
			</div>
		</ImageServerProvider>
	),
};

export const WithImageServer: Story = {
	args: {
		src: highresImgSrc,
		quality: 60,
		imageWidth: '8',
		// @ts-expect-error no undefined in array
		sizes: ['100vh', undefined, '60vh', '40vh'],
	},
	render: (args) => (
		<ImageServerProvider srcUrlMapper={srcUrlMapper}>
			<div style={{ width: '100%', overflow: 'auto' }}>
				<Image
					{...args}
					width={`${calcWidth(args.width as SizeOption)}`}
				/>
			</div>
		</ImageServerProvider>
	),
};

export const WithResponsiveImageWidth: Story = {
	args: {
		src: highresImgSrc,
		width: 'full',
		sizes: ['100vw', '70vw', '50vw', '40vw'],
		// @ts-expect-error no undefined in array
		imageWidth: ['5', '8', undefined, '12'],
	},
	render: (args) => (
		<ImageServerProvider srcUrlMapper={srcUrlMapper}>
			<div style={{ width: '100%', overflow: 'auto' }}>
				<Image
					{...args}
					width={`${calcWidth(args.width as SizeOption)}`}
				/>
			</div>
		</ImageServerProvider>
	),
};

export const WithResponsiveSizes: Story = {
	args: {
		src: highresImgSrc,
		width: 'full',
		sizes: ['100vw', '70vw', '50vw', '40vw'],
	},
	render: (args) => (
		<ImageServerProvider srcUrlMapper={srcUrlMapper}>
			<div style={{ width: '100%', overflow: 'auto' }}>
				<Image
					{...args}
					width={`${calcWidth(args.width as SizeOption)}`}
				/>
			</div>
		</ImageServerProvider>
	),
};

export const WithImageServerQualities: Story = {
	args: {
		src: highresImgSrc,
		quality: 60,
		imageWidth: '8',
		// @ts-expect-error no undefined in array
		sizes: ['100vh', undefined, '60vh', '40vh'],
	},
	render: (args) => (
		<ImageServerProvider srcUrlMapper={srcUrlMapper}>
			<div style={{ width: '100%', overflow: 'auto' }}>
				<div className={stack({ gap: '5' })}>
					{qualityOptions.map((quality) => (
						<div className={stack({ gap: '1' })} key={quality}>
							<Text>
								Quality: <Text strong>{quality}</Text>
							</Text>
							<Image
								key={quality}
								{...args}
								width={`${calcWidth(args.width as SizeOption)}`}
								imageWidth={args.width as SizeOption}
								quality={quality}
							/>
						</div>
					))}
				</div>
			</div>
		</ImageServerProvider>
	),
};

export const WithImageServerResizing: Story = {
	args: {
		src: highresImgSrc,
		quality: 20,
		// @ts-expect-error no undefined in array
		sizes: ['100vh', undefined, '60vh', '40vh'],
	},
	render: (args) => (
		<ImageServerProvider srcUrlMapper={srcUrlMapper}>
			<div style={{ width: '100%', overflow: 'auto' }}>
				<div className={stack({ gap: '5' })}>
					{sizeOptions.map((width) => (
						<div
							className={stack({ gap: '1' })}
							key={width as string}
						>
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
								width={`${calcWidth(width)}`}
								imageWidth={width}
							/>
						</div>
					))}
				</div>
			</div>
		</ImageServerProvider>
	),
};
