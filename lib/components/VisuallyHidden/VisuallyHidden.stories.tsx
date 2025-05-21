import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Text } from '../Text/Text';

import { VisuallyHidden } from './VisuallyHidden';

const meta = {
	title: 'Layout/Visually Hidden',
	tags: ['polymorphic'],
	component: VisuallyHidden,
	args: {
		as: 'div',
	},
	argTypes: {
		as: {
			options: ['div', 'span', 'a'],
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof VisuallyHidden>;

export const Example: Story = {
	render: (args) => (
		<>
			<Text>Bellow text is invisible</Text>
			<VisuallyHidden {...args}>
				<Text>I&apos;m not visually present on the screens</Text>
			</VisuallyHidden>
		</>
	),
};
