import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';

import { Flex } from './Flex';

const meta = {
	title: 'Components/Flex',
	component: Flex,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const Children = () => (
	<>
		<Box padding="4" borderStyle="solid" borderWidth="1" borderColor="soft">
			1
		</Box>
		<Box padding="4" borderStyle="solid" borderWidth="1" borderColor="soft">
			2
		</Box>
		<Box padding="4" borderStyle="solid" borderWidth="1" borderColor="soft">
			3
		</Box>
	</>
);

export const Horizontal: Story = {
	args: {
		children: <Children />,
		gap: '4',
		alignItems: 'center',
		justifyContent: 'center',
	},
};

export const Vertical: Story = {
	args: {
		...Horizontal.args,
		vert: true,
	},
};

export const Flexbox: Story = {
	args: {
		...Horizontal.args,
		flex: true,
	},
};
