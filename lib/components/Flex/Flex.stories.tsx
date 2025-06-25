import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';

import { FlexStack } from './FlexStack';

const Item = ({ children }: React.PropsWithChildren) => (
	<Box
		padding="4"
		borderStyle="solid"
		borderWidth="1"
		borderColor="muted"
		style={{ minWidth: '100px' }}
		textAlign="center"
	>
		{children}
	</Box>
);

// eslint-disable-next-line unicorn/no-new-array
const items = [...new Array(9).keys()].map((n) => <Item key={n}>{n + 1}</Item>);

const meta = {
	title: 'Layout/Flex/Stack',
	tags: [],
	component: FlexStack,
	render: (args) => <FlexStack {...args}>{items}</FlexStack>,

	args: {
		gap: '6',
	},
} satisfies Meta<typeof FlexStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};

/**
 * Change the size of the preview or resize the browser to see layout shifts
 */
export const ResponsiveReversed: Story = {
	args: {
		align: { tablet: 'start', desktop: 'end' },
		gap: ['8', '6', '4'],
		reverse: true,
	},
};
