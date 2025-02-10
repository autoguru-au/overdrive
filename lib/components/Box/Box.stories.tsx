import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { boxArgTypes } from './argTypes';

import { Box } from '.';

const meta = {
	title: 'Primatives/Box',
	component: Box,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 500, margin: '0 auto' }}>{story()}</div>
		),
	],
	argTypes: boxArgTypes,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	render: (args) => (
		<>
			<Box {...args}>Box 1</Box>
			<Box {...args}>Box 2</Box>
		</>
	),
	args: {
		borderColour: 'dark',
		borderWidth: ['none', 'none', '1', '2'],
		padding: ['2', '4'],
		marginBottom: ['2', '4', '5', '8'],
		marginX: ['none', '3', '5'],
		backgroundColour: 'primary',
		colour: 'primary',
		borderRadius: 'pill',
		boxShadow: ['none', '1', '2', '3'],
	},
};
