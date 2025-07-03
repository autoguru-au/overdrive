import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { ProgressSpinner } from './ProgressSpinner';

export default {
	title: 'Primitives/Indicators/Progress Spinner',
	component: ProgressSpinner,
	decorators: [
		(story) => (
			<div
				style={{
					width: '100%',
					height: '100%',
					flexDirection: 'row',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{story()}
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
} satisfies Meta<typeof ProgressSpinner>;

type Story = StoryObj<typeof ProgressSpinner>;

export const Standard: Story = {};
