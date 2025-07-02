import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { valueArrays } from '../../styles/sprinkles.css';
import { Text } from '../Text/Text';

import { Stack } from './Stack';

const meta = {
	title: 'Layout/Stack',
	tags: [],
	component: Stack,
	render: (args) => (
		<Stack {...args}>
			<Text>Line 1</Text>
			<Text>Line 2</Text>
			<Text>Line 3</Text>
		</Stack>
	),
	args: {
		dividers: false,
		space: '1',
		alignItems: undefined,
		width: undefined,
		as: undefined,
	},
	argTypes: {
		space: {
			options: valueArrays.spaceWithNone,
		},
		width: {
			options: valueArrays.width,
		},
		alignItems: {
			options: valueArrays.alignItems,
		},
	},
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof Stack>;

export const Standard: Story = {};

export const AsSection: Story = {
	args: {
		as: 'section',
		space: '2',
	},
};

/** Instance of a `<ul>` tag which automatically gets semantic children tags */
export const WithDividers: Story = {
	args: {
		as: 'ul',
		dividers: true,
		space: '3',
	},
};

/** Uses an array for `space` which means the spacing will be responsive */
export const WithAlignment: Story = {
	args: {
		alignItems: 'center',
		dividers: true,
		space: ['2', '4', '6'],
	},
};
