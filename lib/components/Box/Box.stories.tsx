import { Meta, StoryObj } from '@storybook/react';

import { boxArgTypes } from './argTypes';

import { Box } from '.';

const meta = {
	title: 'Primatives/Box',
	component: Box,
	args: {
		as: 'div',
		children: 'Hello box!',
		colour: 'primary',
		backgroundColour: 'primary',
		borderRadius: 'min',
		borderColour: 'light',
		borderWidth: '1',
		boxShadow: '1',
		display: 'inline-flex',
		margin: undefined,
		padding: '6',
		textAlign: undefined,
	},
	argTypes: boxArgTypes,
} satisfies Meta<typeof Box>;

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
