import {
	AirconIcon,
	CarWindshieldIcon,
	ServiceAndRepairsIcon,
	TyreIcon,
} from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { OptionGrid, type OptionItem } from './OptionGrid';

const serviceSchedule: OptionItem[] = [
	{
		label: '100,00km / 60 months',
		name: '100km/60',
	},
	{
		label: '110,000km / 66 months',
		name: '110km/66',
	},
	{
		label: '120,000km / 72 months',
		name: '120km/72',
	},
	{
		label: '130,000km / 78 months',
		name: '130km/78',
	},
	{
		label: '140,000km / 84 months',
		name: '140km/84',
	},
	{
		label: '150,000km / 90 months',
		name: '150km/90',
	},
	{
		label: '160,000km / 96 months',
		name: '160km/96',
	},
	{
		label: '170,000km / 104 months',
		name: '170km/102',
	},
	{
		label: '180,000km / 110 months',
		name: '180km/110',
	},
	{
		label: '190,000km / 116 months',
		name: '190km/116',
	},
];

const serviceTasks: OptionItem[] = [
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
		icon: ServiceAndRepairsIcon,
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
		items: serviceSchedule,
		columns: 'double',
		indicator: 'checkbox',
		selectionMode: 'multiple',
		layout: 'grid',
		onSelectionChange: fn(),
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof OptionGrid>;

export const UncontrolledWithIcons: Story = {
	args: {
		items: serviceTasks,
	},
};

export const SingleSelection: Story = {
	args: {
		selectionMode: 'single',
	},
};
