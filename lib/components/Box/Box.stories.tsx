import { Meta, StoryObj } from '@storybook/react';

import { Box } from '.';

const meta: Meta<typeof Box> = {
	title: 'Primatives/Box',
	component: Box,
	args: {
		as: 'div',
		children: 'Hello box!',
		color: 'onBody',
		backgroundColour: 'primary',
		borderRadius: 'none',
		borderColour: 'gray',
		borderWidth: '2',
		display: 'inline-flex',
		margin: undefined,
		padding: '6',
		textAlign: undefined,
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {};

/**
 * This story demonstrates the responsive props for `padding`, using an array of values.
 */
export const ResponsiveProps: Story = {
	args: {
		children: 'Resize the viewport',
		padding: ['3', '6', '8'],
	},
};
