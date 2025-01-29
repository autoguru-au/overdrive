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

const lessThanMaxPagesProps = {
	...standardProps,
	activePage: 1,
	total: 20,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const LessThanMaxPages: StoryFn<typeof Pagination> = Template.bind(
	lessThanMaxPagesProps,
);
LessThanMaxPages.args = lessThanMaxPagesProps;

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

const jumpForwardMiddleProps = {
	...standardProps,
	activePage: 4,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const JumpForwardMiddle: StoryFn<typeof Pagination> = Template.bind(
	jumpForwardMiddleProps,
);
JumpForwardMiddle.args = jumpForwardMiddleProps;

const lastChunkStartProps = {
	...standardProps,
	activePage: 60,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const LastChunkStart: StoryFn<typeof Pagination> =
	Template.bind(lastChunkStartProps);
LastChunkStart.args = lastChunkStartProps;

const lastChunkMiddleProps = {
	...standardProps,
	activePage: 61,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const LastChunkMiddle: StoryFn<typeof Pagination> =
	Template.bind(lastChunkMiddleProps);
LastChunkMiddle.args = lastChunkMiddleProps;

const jumpBackStartProps = {
	...standardProps,
	activePage: 62,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const JumpBackStart: StoryFn<typeof Pagination> =
	Template.bind(jumpBackStartProps);
JumpBackStart.args = lastChunkMiddleProps;

const jumpBackMiddleProps = {
	...standardProps,
	activePage: 63,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const JumpBackMiddle: StoryFn<typeof Pagination> =
	Template.bind(jumpBackMiddleProps);
JumpBackMiddle.args = jumpBackMiddleProps;

const jumpBackEndProps = {
	...standardProps,
	activePage: 64,
	total: 638,
	pageSize: 10,
	numPagesDisplayed: 5,
};
export const JumpBackEnd: StoryFn<typeof Pagination> =
	Template.bind(jumpBackEndProps);
JumpBackEnd.args = jumpBackEndProps;
