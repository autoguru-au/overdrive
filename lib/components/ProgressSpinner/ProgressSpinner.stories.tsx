import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ProgressSpinner } from '.';

export default {
	title: 'Primatives/Progress Spinner',
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
