import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
	title: 'Primatives/Switch',
	component: Switch,
	args: {
		'aria-labelledby': undefined,
		name: 'switch',
		value: 'yes',
		isSelected: undefined,
		isDisabled: undefined,
		onChange: fn(),
	},
	argTypes: {
		isSelected: {
			control: 'boolean',
		},
		disabled: {
			control: false,
		},
		toggled: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Uncontrolled: Story = {};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
};
