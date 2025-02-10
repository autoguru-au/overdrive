import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';

import { Pagination } from '.';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

const renderPagination = (args: any) => (
	<Box
		style={{
			height: '100vh',
			width: '100vw',
			maxHeight: '350px',
		}}
		display="flex"
		alignItems="center"
		justifyContent="center"
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
