import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexStack } from '../Flex/FlexStack';

import { ProgressBar } from './ProgressBar';

export default {
	title: 'Primitives/Indicators/Progress Bar',
	component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Standard: Story = {
	args: {},
};

export const WithValue: Story = {
	args: {
		value: 0.3,
	},
};

export const AllColours: Story = {
	render: (args) => (
		<FlexStack gap="2">
			<ProgressBar value={0.5} colour="green" {...args} />
			<ProgressBar value={0.4} colour="blue" {...args} />
			<ProgressBar value={0.1} colour="neutral" {...args} />
			<ProgressBar value={15} colour="red" {...args} />
			<ProgressBar value={0.156} colour="yellow" {...args} />
		</FlexStack>
	),
	args: {},
};
