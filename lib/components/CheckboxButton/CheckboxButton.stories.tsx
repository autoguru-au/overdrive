import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, fn } from '@storybook/test';
import React from 'react';

import { CheckboxButton } from './CheckboxButton';

const meta: Meta<typeof CheckboxButton> = {
	title: 'Components/Checkbox Button',
	component: CheckboxButton,
	args: {
		children: 'Toggle me on/off',
		onChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof CheckboxButton>;

export const Simple: Story = {};

export const SplitLabel: Story = {
	args: {
		children: (
			<CheckboxButton.SplitLabel
				items={['Checkbox label', '+ $200.00']}
			/>
		),
	},
};
