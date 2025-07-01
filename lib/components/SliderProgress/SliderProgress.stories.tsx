import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { action } from 'storybook/actions';

import { boxArgTypes } from '../../stories/shared/argTypes-box';
import { Box } from '../Box/Box';

import { SliderProgress } from './SliderProgress';

const meta = {
	title: 'Primatives/Indicators/Slider Progress',
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
