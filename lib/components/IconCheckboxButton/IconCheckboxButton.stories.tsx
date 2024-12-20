import { AirconIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { IconCheckboxButton } from './IconCheckboxButton';

const meta: Meta<typeof IconCheckboxButton> = {
	title: 'Components/Icon Checkbox Button',
	component: IconCheckboxButton,
	args: {
		label: 'Re-gas Air-conditioning',
		icon: AirconIcon,
		name: 'extras',
		// className: 'demo-checkbox-buttons-class',
		onChange: fn(),
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof IconCheckboxButton>;

export const Simple: Story = {};
