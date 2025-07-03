import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';

import { FlexRow } from './FlexRow';

const itemSprinkles = {
	paddingX: '4',
	borderStyle: 'solid',
	borderWidth: '1',
	borderColor: 'hard',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
} satisfies Sprinkles;

const itemProps = (height: Sprinkles['height']) => ({
	className: sprinkles({ height, ...itemSprinkles }),
	style: { minWidth: '150px' },
});

const Item1 = () => <div {...itemProps('8')}>1</div>;
const Item2 = () => <div {...itemProps('9')}>2</div>;
const Item3 = () => <div {...itemProps('7')}>3</div>;

const meta = {
	title: 'Layout/Flex/FlexRow',
	tags: ['new'],
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
