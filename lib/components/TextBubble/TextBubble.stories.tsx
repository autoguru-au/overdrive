import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextBubble } from './TextBubble';

type Story = StoryObj<typeof TextBubble>;

export default {
	title: 'Content/Text Bubble',
	component: TextBubble,
} satisfies Meta<typeof TextBubble>;

export const Standard: Story = {
	args: {
		label: 'OK',
	},
};

export const LongLabel: Story = {
	args: {
		label: 'Error',
		textColour: 'danger',
		backgroundColour: 'gray900',
	},
};

export const VeryLongLabel: Story = {
	args: {
		label: 'Too Long',
	},
};
