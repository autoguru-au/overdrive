import { ArrowRightIcon, ChevronRightIcon } from '@autoguru/icons';
import { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import { TextLink } from './TextLink';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
			<div style={{ maxWidth: 300 }}>
				<Story />
			</div>
		),
	],
	args: {
		size: '4',
		fontWeight: 'semiBold',
		icon: undefined,
		muted: false,
		noWrap: undefined,
		transform: undefined,
		href: '#link',
		children: 'Hello',
	},
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
	},
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Standard: Story = {
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const link = canvas.getAllByRole('link')[0];

		await step('<TextLink /> renders content and attributes', async () => {
			await expect(link).toHaveAttribute('href', args.href);
			await expect(link).toHaveTextContent(args.children as string);
		});
	},
};

export const InsideParagraph: Story = {
	decorators: [
		(Story) => (
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
				<Story /> autem consectetur consequuntur eius fugiat illo ipsum
				nobis numquam, officiis placeat quia, quidem reprehenderit rerum
				temporibus veniam vero.
			</Text>
		),
	],
};

export const WithIcon: Story = {
	args: {
		icon: ChevronRightIcon,
	},
	play: async ({ canvasElement, step }) => {
		const user = userEvent.setup();
		const canvas = within(canvasElement);
		const link = canvas.getAllByRole('link')[0];

		await step('<TextLink /> has SVG icon', async () => {
			await expect(link.querySelector('svg')).toBeInTheDocument();
		});

		await step('<TextLink /> is interactive', async () => {
			await expect(link).toHaveStyle({ cursor: 'pointer' });
			await user.keyboard('{Tab}');
			await expect(link).toHaveFocus();
			await user.hover(link);
		});
	},
};

export const WithIconInsideParagraph: Story = {
	args: {
		icon: ArrowRightIcon,
	},
	decorators: InsideParagraph.decorators,
};
