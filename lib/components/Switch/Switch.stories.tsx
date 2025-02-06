import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';

const meta = {
	title: 'Primatives/Switch',
	component: Switch,
	args: {
		isDisabled: false,
		isSelected: false,
		onChange: action('onChange'),
		className: 'toggleButton-class',
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Untoggled: Story = {};

export const UntoggledDisabled: Story = {
	args: {
		isDisabled: true,
	},
};

export const Toggled: Story = {
	args: {
		isSelected: true,
	},
};

export const ToggledDisabled: Story = {
	args: {
		isSelected: true,
		isDisabled: true,
	},
};
