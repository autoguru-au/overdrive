import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Box } from '../Box';

import { Pagination } from '.';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} satisfies Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => (
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

const standardProps = {
	activePage: 5,
	total: 100,
	pageSize: 10,
	numPagesDisplayed: 5,
	loading: false,
	onChange: action('onChange'),
};
export const Standard: StoryFn<typeof Pagination> =
	Template.bind(standardProps);
Standard.args = standardProps;

const loadingProps = {
	...standardProps,
	loading: true,
};
export const Loading: StoryFn<typeof Pagination> = Template.bind(loadingProps);
Loading.args = loadingProps;

const allPagesFitProps = {
	...standardProps,
	activePage: 1,
	total: 45,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const AllPagesFit: StoryFn<typeof Pagination> =
	Template.bind(allPagesFitProps);
AllPagesFit.args = allPagesFitProps;

const jumpForwardStartProps = {
	...standardProps,
	activePage: 1,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const JumpForwardStart: StoryFn<typeof Pagination> = Template.bind(
	jumpForwardStartProps,
);
JumpForwardStart.args = jumpForwardStartProps;
