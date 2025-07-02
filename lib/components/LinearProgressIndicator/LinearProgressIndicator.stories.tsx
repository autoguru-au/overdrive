import { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { LinearProgressIndicator } from './LinearProgressIndicator';

export default {
	title: 'Primitives/Indicators/Linear Progress',
	component: LinearProgressIndicator,
	decorators: [
		(story) => (
			<div style={{ width: '100%', height: '100%' }}>{story()}</div>
		),
	],
	parameters: {
		chromatic: { disable: true },
	},
} satisfies Meta<typeof LinearProgressIndicator>;

type Story = StoryObj<typeof LinearProgressIndicator>;

export const Standard: Story = {};
