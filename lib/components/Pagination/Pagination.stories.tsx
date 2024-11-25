import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Box } from '../Box';

import { Pagination } from '.';

export default {
	title: 'Components/Pagination/Numbered',
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
export const standard: StoryFn<typeof Pagination> =
	Template.bind(standardProps);
standard.args = standardProps;

const loadingProps = {
	...standardProps,
	loading: true,
};
export const loading: StoryFn<typeof Pagination> = Template.bind(loadingProps);
loading.args = loadingProps;

const lessThanMaxPagesProps = {
	...standardProps,
	activePage: 1,
	total: 20,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const lessThanMaxPages: StoryFn<typeof Pagination> = Template.bind(
	lessThanMaxPagesProps,
);
lessThanMaxPages.args = lessThanMaxPagesProps;

const allPagesFitProps = {
	...standardProps,
	activePage: 1,
	total: 45,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const allPagesFit: StoryFn<typeof Pagination> =
	Template.bind(allPagesFitProps);
allPagesFit.args = allPagesFitProps;

const jumpForwardStartProps = {
	...standardProps,
	activePage: 1,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const jumpForwardStart: StoryFn<typeof Pagination> = Template.bind(
	jumpForwardStartProps,
);
jumpForwardStart.args = jumpForwardStartProps;

const jumpForwardMiddleProps = {
	...standardProps,
	activePage: 4,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const jumpForwardMiddle: StoryFn<typeof Pagination> = Template.bind(
	jumpForwardMiddleProps,
);
jumpForwardMiddle.args = jumpForwardMiddleProps;

const lastChunkStartProps = {
	...standardProps,
	activePage: 60,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const lastChunkStart: StoryFn<typeof Pagination> =
	Template.bind(lastChunkStartProps);
lastChunkStart.args = lastChunkStartProps;

const lastChunkMiddleProps = {
	...standardProps,
	activePage: 61,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const lastChunkMiddle: StoryFn<typeof Pagination> =
	Template.bind(lastChunkMiddleProps);
lastChunkMiddle.args = lastChunkMiddleProps;

const jumpBackStartProps = {
	...standardProps,
	activePage: 62,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const jumpBackStart: StoryFn<typeof Pagination> =
	Template.bind(jumpBackStartProps);
jumpBackStart.args = lastChunkMiddleProps;

const jumpBackMiddleProps = {
	...standardProps,
	activePage: 63,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const jumpBackMiddle: StoryFn<typeof Pagination> =
	Template.bind(jumpBackMiddleProps);
jumpBackMiddle.args = jumpBackMiddleProps;

const jumpBackEndProps = {
	...standardProps,
	activePage: 64,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const jumpBackEnd: StoryFn<typeof Pagination> =
	Template.bind(jumpBackEndProps);
jumpBackEnd.args = jumpBackEndProps;
