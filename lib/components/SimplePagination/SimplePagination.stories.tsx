import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Box } from '../Box';

import { SimplePagination } from '.';

export default {
	title: 'Primatives/Simple Pagination',
	component: SimplePagination,
} satisfies Meta<typeof SimplePagination>;

const Template: StoryFn<typeof SimplePagination> = (args) => (
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
		<SimplePagination {...args} />
	</Box>
);

const standardProps = {
	hasNext: true,
	hasPrevious: true,
	onChange: action('onChange'),
};

export const middlePage: StoryFn<typeof SimplePagination> =
	Template.bind(standardProps);
middlePage.args = standardProps;

const firstPageProps = {
	...standardProps,
	hasPrevious: false,
};

export const firstPage: StoryFn<typeof SimplePagination> =
	Template.bind(firstPageProps);
firstPage.args = firstPageProps;

const lastPageProps = {
	...standardProps,
	hasNext: false,
};

export const lastPage: StoryFn<typeof SimplePagination> =
	Template.bind(lastPageProps);
lastPage.args = lastPageProps;
