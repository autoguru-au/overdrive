import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';
import { boxArgTypes } from '../Box/argTypes';

import { SliderProgress } from '.';

const meta = {
	title: 'Components/Progress/Slider Progress',
	component: SliderProgress,
	argTypes: {
		backgroundColour: boxArgTypes.backgroundColour,
	},
	decorators: [
		(Story) => (
			<Box paddingY="8" paddingX="3" backgroundColour="gray800">
				<Story />
			</Box>
		),
	],
} satisfies Meta<typeof SliderProgress>;

export default meta;

type Story = StoryObj<typeof SliderProgress>;

export const Standard: Story = {
	args: {
		paused: false,
		totalCount: 3,
		activeIndex: 1,
		duration: '1s',
		onRequestNext: () => action('onRequestNext'),
	},
};

export const WithBackgroundColour: Story = {
	args: {
		...Standard.args,
		backgroundColour: 'yellow500',
	},
};

export const WithManySlides: Story = {
	args: {
		...Standard.args,
		activeIndex: 5,
		totalCount: 20,
	},
};
