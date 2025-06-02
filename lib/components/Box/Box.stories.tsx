import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
	title: 'Primatives/Box',
	tags: ['polymorphic'],
	component: Box,
	args: {
		as: 'div',
		children: 'Hello box!',
		colour: 'primary',
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

/**
 * Demonstrates the `odComponent` and `testId` props that map to data attributes built into Box and a custom attribute
 */
export const DataAttributes: Story = {
	render: () => (
		<Box
			id="so-basic"
			odComponent="box-basic"
			testId="basically-perfect"
			data-custom-attribute="somewhat less basic"
		>
			The most basic box (or is it?)
		</Box>
	),
};

/**
 * Passing in a React element to `as` props to merge style props
 */
// export const ComponentAsProp: Story = {
// 	render: () => (
// 		<Box
// 			as={<Box as="a" href="#hello" />}
// 			backgroundColor="accent"
// 			borderColor="info"
// 			borderWidth="1"
// 			className="keep-my-custom-class-name"
// 			p="4"
// 		>
// 			Styled props merged with custom component
// 		</Box>
// 	),
// };
