import { AirconIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { ButtonCheckbox } from './ButtonCheckbox';

const meta: Meta<typeof ButtonCheckbox> = {
	title: 'Components/Button Checkbox',
	component: ButtonCheckbox,
	args: {
		label: 'Re-gas Air-conditioning',
		icon: AirconIcon,
		name: 'extras',
		className: 'demo-button-checkbox-class',
		onChange: fn(),
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof ButtonCheckbox>;

export const WithIcon: Story = {};

export const WithDescription: Story = {
	args: {
		label: 'Basic Service',
		description: 'Also known as a minor or fixed-price service',
		icon: undefined,
	},
};
