import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { SimplePagination } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from '../Pagination';
import { Box } from '../Box';
import { template } from '@babel/core';

export default {
	title: 'Components/Pagination/Simple',
	component: SimplePagination,
} as ComponentMeta<typeof SimplePagination>;


const Template: ComponentStory<typeof SimplePagination> = (args) => (
	<Box
		style={{
			height: '100vh',
			widht: '100vw',
			maxHeight: '120px',
		}}
		display='flex'
		alignItems='center'
		justifyContent='center'>
		<SimplePagination
			{...args}
		/>

	</Box>
);

const standardProps = {
	hasNext: true,
	hasPrevious: true,
	onChange: action('onChange'),
};

export const middlePage: ComponentStory<typeof SimplePagination> = Template.bind(standardProps);
middlePage.args = standardProps;

const firstPageProps = {
	...standardProps,
	hasPrevious: false,
};

export const firstPage: ComponentStory<typeof SimplePagination> = Template.bind(firstPageProps);
firstPage.args = firstPageProps;

const lastPageProps = {
	...standardProps,
	hasNext: false,
};

export const lastPage: ComponentStory<typeof SimplePagination> = Template.bind(lastPageProps);
lastPage.args = lastPageProps;
