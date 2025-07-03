import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';

import { FlexStack } from './FlexStack';

const itemSprinkles = {
	padding: '4',
	borderStyle: 'solid',
	borderWidth: '1',
	borderColor: 'hard',
	textAlign: 'center',
} satisfies Sprinkles;

// eslint-disable-next-line unicorn/no-new-array
const items = [...new Array(9).keys()].map((n) => (
	<div
		className={sprinkles(itemSprinkles)}
		style={{ minWidth: '100px' }}
		key={n}
	>
		{n + 1}
	</div>
));

const meta = {
	title: 'Layout/Flex/Flex Stack',
	tags: ['new'],
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
