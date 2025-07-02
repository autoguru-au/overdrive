import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { action } from 'storybook/actions';

import { Box } from '../Box/Box';

import { Pagination } from './Pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

const renderPagination = (args: any) => (
	<Box
		alignItems="center"
		display="flex"
		justifyContent="center"
		paddingY="6"
		style={{
			maxHeight: '350px',
		}}
		width="full"
	>
		<Pagination {...args} />
	</Box>
);

export const Standard: Story = {
	args: {
		activePage: 5,
		total: 100,
		pageSize: 10,
		numPagesDisplayed: 5,
		loading: false,
		onChange: action('onChange'),
	},
	render: renderPagination,
};

export const Loading: Story = {
	args: {
		activePage: 5,
		total: 100,
		pageSize: 10,
		numPagesDisplayed: 5,
		loading: true,
		onChange: action('onChange'),
	},
	render: renderPagination,
};

export const AllPagesFit: Story = {
	args: {
		activePage: 1,
		total: 45,
		pageSize: 10,
		numPagesDisplayed: 5,
		loading: false,
		onChange: action('onChange'),
	},
	render: renderPagination,
};

export const JumpForwardStart: Story = {
	args: {
		activePage: 1,
		total: 638,
		pageSize: 10,
		numPagesDisplayed: 5,
		loading: false,
		onChange: action('onChange'),
	},
	render: renderPagination,
};
