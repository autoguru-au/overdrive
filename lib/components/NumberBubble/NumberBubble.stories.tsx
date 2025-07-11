import type { Meta, StoryObj } from '@storybook/react-vite';

import { NumberBubble } from './NumberBubble';

type Story = StoryObj<typeof NumberBubble>;

export default {
	title: 'Content/Number Bubble',
	component: NumberBubble,
	args: {
		value: 1,
		backgroundColor: undefined,
		backgroundColour: undefined,
		textColor: undefined,
		textColour: undefined,
		rawNumbers: false,
	},
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
