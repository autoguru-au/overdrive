import { AirconIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { OptionTile } from './OptionTile';

const meta: Meta<typeof OptionTile> = {
	title: 'Components/Option Tile',
	component: OptionTile,
	args: {
		label: 'Re-gas Air-conditioning',
		icon: AirconIcon,
		indicator: 'checkbox',
		name: 'extras',
		className: 'demo-option-tile-class',
		onChange: fn(),
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof OptionTile>;

export const WithIcon: Story = {};

export const WithDescription: Story = {
	args: {
		label: 'Basic Service',
		description: 'Also known as a minor or fixed-price service',
		icon: undefined,
	},
};
