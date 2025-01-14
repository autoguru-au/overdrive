import { AirconIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { OptionTileMulti } from './OptionTileMulti';

const meta: Meta<typeof OptionTileMulti> = {
	title: 'Components/Option Tile Multi-select',
	component: OptionTileMulti,
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
type Story = StoryObj<typeof OptionTileMulti>;

/**
 * Multi-select is a input `type=checkbox`
 */
export const WithIcon: Story = {};

/**
 * Multi-select is a input `type=checkbox`
 */
export const WithDescription: Story = {
	args: {
		label: 'Basic Service',
		description: 'Also known as a minor or fixed-price service',
		icon: undefined,
	},
};
