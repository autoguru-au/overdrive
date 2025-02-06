import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';

const meta = {
	title: 'Primatives/Switch',
	component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

const defaultArgs = {
	isDisabled: false,
	isSelected: false,
	onChange: action('onChange'),
	className: 'toggleButton-class',
};

export const Untoggled: Story = {
	args: defaultArgs,
};

export const UntoggledDisabled: Story = {
	args: {
		...defaultArgs,
		isDisabled: true,
	},
};

export const Toggled: Story = {
	args: {
		...defaultArgs,
		isSelected: true,
	},
};

export const ToggledDisabled: Story = {
	args: {
		...defaultArgs,
		isSelected: true,
		isDisabled: true,
	},
};
