import { AirconIcon, CarWindshieldIcon, TyreIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { OptionGrid, type OptionItem } from './OptionGrid';
import { styledGridContainer } from './OptionGrid.css';

const items: OptionItem[] = [
	{
		label: 'Re-gas Air-conditioning',
		icon: AirconIcon,
		name: 'regas-aircon',
	},
	{
		label: 'Front Windscreen Replacement',
		icon: CarWindshieldIcon,
		name: 'front-windscreen',
	},
	{
		label: 'Roadworthy Inspection',
		name: 'roadworthy',
	},
	{
		label: 'Wheel Alignment',
		icon: TyreIcon,
		name: 'wheel-alignment',
	},
];

const meta: Meta<typeof OptionGrid> = {
	title: 'Components/Option Grid',
	component: OptionGrid,
	args: {
		label: 'Car servicing options',
		indicator: 'checkbox',
		items,
		layout: 'grid',
		className: styledGridContainer({ columns: 'double' }),
		onSelectionChange: fn(),
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof OptionGrid>;

export const Uncontrolled: Story = {};
