import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';

import { SimplePagination } from '.';

const meta = {
	title: 'Primatives/Simple Pagination',
	component: SimplePagination,
	decorators: [
		(Story) => (
			<Box
				style={{
					height: '100vh',
					width: '100vw',
					maxHeight: '120px',
				}}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Story />
			</Box>
		),
	],
} satisfies Meta<typeof SimplePagination>;

export default meta;

type Story = StoryObj<typeof SimplePagination>;

export const MiddlePage: Story = {
	args: {
		hasNext: true,
		hasPrevious: true,
		onChange: action('onChange'),
	},
};

export const FirstPage: Story = {
	args: {
		hasNext: true,
		hasPrevious: false,
		onChange: action('onChange'),
	},
};

export const LastPage: Story = {
	args: {
		hasNext: false,
		hasPrevious: true,
		onChange: action('onChange'),
	},
};
