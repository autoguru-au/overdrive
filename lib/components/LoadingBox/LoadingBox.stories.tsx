import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { boxArgTypes } from '../../stories/shared/argTypes-box';

import { LoadingBox } from './LoadingBox';

export default {
	title: 'Primitives/Indicators/Loading Box',
	component: LoadingBox,
	decorators: [
		(story) => (
			<div style={{ width: '50%', height: '100%', margin: '0 auto' }}>
				{story()}
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
	argTypes: boxArgTypes,
} satisfies Meta<typeof LoadingBox>;

type Story = StoryObj<typeof LoadingBox>;

export const Standard: Story = {
	args: {},
};

export const BlinkingOff: Story = {
	args: {
		blinking: false,
	},
};

export const RandomWidth: Story = {
	args: {
		randomWidth: true,
	},
};
