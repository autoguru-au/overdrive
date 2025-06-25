import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, type BoxProps } from '../Box/Box';

import { FlexRow } from './FlexRow';

const itemProps = {
	paddingX: '4',
	borderStyle: 'solid',
	borderWidth: '1',
	borderColor: 'muted',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	style: { minWidth: '150px' },
} satisfies BoxProps;

const Item1 = () => (
	<Box height="8" {...itemProps}>
		1
	</Box>
);
const Item2 = () => (
	<Box height="9" {...itemProps}>
		2
	</Box>
);
const Item3 = () => (
	<Box height="7" {...itemProps}>
		3
	</Box>
);

const meta = {
	title: 'Layout/Flex/Row',
	tags: [],
	component: FlexRow,
	render: (args) => (
		<FlexRow {...args}>
			<Item1 />
			<Item2 />
			<Item3 />
		</FlexRow>
	),

	args: {
		gap: '6',
	},
} satisfies Meta<typeof FlexRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};

export const JustifiedSpaced: Story = {
	args: {
		justify: 'center',
		spaceBetween: true,
	},
};

/**
 * Change the size of the preview or resize the browser to see layout shifts
 */
export const ResponsiveReversed: Story = {
	args: {
		align: ['end', 'start', 'center'],
		gap: ['8', '6', '4'],
		reverse: true,
	},
};
