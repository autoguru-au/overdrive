import { ArrowRightIcon, ChevronRightIcon } from '@autoguru/icons';
import { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { Box } from '../Box';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { TextLink } from '.';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alignOptions: ['left', 'center', 'right'] = ['left', 'center', 'right'];
const fontWeightOptions = ['normal', 'semiBold', 'bold'];

const noWrapOptions: Array<ComponentProps<typeof Heading>['noWrap']> = [
	false,
	true,
];
const transformOptions: Array<ComponentProps<typeof Text>['transform']> = [
	'uppercase',
	'capitalize',
	undefined,
];

const meta = {
	title: 'Primatives/Text Link',
	component: TextLink,
	decorators: [
		(Story) => (
			<div
				style={{
					width: '100%',
					maxWidth: 300,
					display: 'grid',
					gridTemplateColumns: '1fr',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		icon: {
			defaultValue: null,
			description: 'Input field Icon',
			options: ['Arrow Right', 'Chevron Right'],
			mapping: {
				'Arrow Right': ArrowRightIcon,
				'Chevron Right': ChevronRightIcon,
			},
		},
		noWrap: {
			options: noWrapOptions,
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		transform: {
			options: transformOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		fontWeight: {
			options: fontWeightOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		size: {
			options: sizeScale,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
		},
		align: {
			options: alignOptions,
			defaultValue: 'left',
			control: {
				type: 'select',
			},
		},
		is: {
			control: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Standard: Story = {
	args: {
		children: 'Hello',
		muted: false,
		size: '4',
		align: 'left',
		fontWeight: 'semiBold',
	},
	render: (args) => (
		<Box>
			<TextLink {...args} />
		</Box>
	),
};

export const InsideParagraph: Story = {
	args: {
		...Standard.args,
	},
	render: (args) => (
		<Text is="p">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
			<TextLink {...args} /> autem consectetur consequuntur eius fugiat
			illo ipsum nobis numquam, officiis placeat quia, quidem
			reprehenderit rerum temporibus veniam vero.
		</Text>
	),
};

export const WithIcon: Story = {
	args: {
		...Standard.args,
		icon: ArrowRightIcon,
	},
	render: Standard.render,
};

export const WithIconInsideParagraph: Story = {
	args: {
		...WithIcon.args,
	},
	render: InsideParagraph.render,
};
