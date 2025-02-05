import { Meta, StoryObj } from '@storybook/react';

import { NumberBubble } from '.';

type Story = StoryObj<typeof NumberBubble>;

export default {
	title: 'Components/Number Bubble',
	component: NumberBubble,
} satisfies Meta<typeof NumberBubble>;

export const Standard: Story = {
	args: {
		value: 0,
	},
};

export const BigNumber: Story = {
	args: {
		value: 2345,
	},
};
