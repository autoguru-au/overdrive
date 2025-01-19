/* eslint-disable sonarjs/no-duplicate-string */
import {
	AirconIcon,
	CarWindshieldIcon,
	ServiceAndRepairsIcon,
	TyreIcon,
} from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';
import React, { useState } from 'react';
import type { Selection } from 'react-aria-components';

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

const alphaOptions: OptionItem[] = [
	{
		label: 'Option A',
		name: 'a',
		description: 'This is a description',
	},
	{
		label: 'Option B',
		name: 'b',
		description: 'This is a description',
	},
	{
		label: 'Option C',
		name: 'c',
		description: 'This is a description',
	},
];

const meta: Meta<typeof OptionGrid> = {
	title: 'Components/Option Grid',
	component: OptionGrid,
	args: {
		label: 'Select car servicing options',
		items: serviceTasks,
		columns: 'double',
		indicator: 'checkbox',
		selectionMode: 'multiple',
		onSelectionChange: fn(),
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof OptionGrid>;

/** Uncontrolled with custom icons */
export const UncontrolledWithIcons: Story = {
	args: {
		items: serviceTasks,
	},
};

/**
 * Example of a controlled instance using an empty Set, logs selection to console. Indicator set to `radio`.
 *
 * ```jsx
 * import type { Selection } from 'react-aria-components';
 * ...
 *
 * const [selectedItems, setSelectedItems] = useState<Selection>(new Set());
 *
 * return (
 *		<OptionGrid
 *			...
 *			selectedKeys={selectedItems}
 *			onSelectionChange={setSelectedItems}
 *			...
 *		/>
 * );
 * ```
 */
export const SingleSelectionControlled: Story = {
	args: {
		label: 'Select a scheduled service',
		items: serviceSchedule,
		selectionMode: 'single',
		indicator: 'radio',
	},
	render: (args) => {
		const [selectedItems, setSelectedItems] = useState<Selection>(
			new Set(),
		);

		const handleChange = (items: Selection) => {
			setSelectedItems(items);
			console.info('Storybook OptionGrid: Selected item =', ...items);
		};

		return (
			<OptionGrid
				{...args}
				selectedKeys={selectedItems}
				onSelectionChange={handleChange}
			/>
		);
	},
};

/**
 * Indicator is set to `none` and each option has a description.
 */
export const DescriptionNoIndicator: Story = {
	args: {
		label: 'Select options',
		items: alphaOptions,
		indicator: 'none',
	},
	play: async ({ args, canvasElement, step }) => {
		const contentOptions = args.items;
		const canvas = within(canvasElement);

		// add a small pause, because react-aria init :(
		await new Promise((resolve) => setTimeout(resolve, 25));
		const listbox = canvas.getAllByRole('listbox')[0];
		const options = getAllByRole(listbox, 'option');

		await step('Options render label and description', async () => {
			for (const [idx, option] of options.entries()) {
				const content = contentOptions[idx];
				await expect(option).toHaveTextContent(content.label);
				await expect(option).toHaveTextContent(
					content.description ?? '',
				);
				await expect(option).toHaveAttribute('data-key', content.name);
			}
		});

		await step('Selected states and onChange event', async () => {
			for (const idx of [0, 2]) {
				const option = options[idx];
				await userEvent.click(option);
				await expect(args.onSelectionChange).toHaveBeenCalled();
				await expect(option).toHaveAttribute('aria-selected', 'true');
			}

			await expect(options[1]).toHaveAttribute('aria-selected', 'false');
		});

		await step('Keyboard interaction', async () => {
			await userEvent.keyboard(
				'[ArrowLeft][ArrowLeft][Enter][ArrowRight][ArrowRight][Enter]',
			);
			await expect(args.onSelectionChange).toHaveBeenCalled();
			await expect(options[0]).toHaveAttribute('aria-selected', 'false');
			await expect(options[2]).toHaveAttribute('aria-selected', 'false');
		});
	},
};
