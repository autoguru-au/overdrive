import { Meta, StoryObj } from '@storybook/react-vite';

import { NumberBubble } from './NumberBubble';

type Story = StoryObj<typeof NumberBubble>;

export default {
	title: 'Content/Number Bubble',
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
