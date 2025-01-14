import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';
import React, { useState } from 'react';

import { CheckboxGroup } from './CheckboxGroup';

const itemData = [
	['Tyre puncture repair', '+28.00'],
	['Roadworthy certificate', '+89.85'],
	['Re-gas air-conditioning', '+99.00'],
	['Windscreen wipers - pair', '+45.92'],
];

const meta: Meta<typeof CheckboxGroup> = {
	title: 'Components/Option Tiles/Checkbox Group',
	component: CheckboxGroup,
	args: {
		label: 'Commonly requested extras',
		name: 'extras',
		children: itemData.map((item, idx) => (
			<CheckboxGroup.Item key={idx} value={`${idx}`}>
				{item[0]}
			</CheckboxGroup.Item>
		)),
		className: 'demo-checkbox-buttons-class',
		onChange: fn(),
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

/**
 * For simple content, map through the options, e.g.
 *
 * ```
 * itemData.map((item, idx) => (
 *   <CheckboxButtons.Item key={idx} value={`${idx}`}>
 *     {item[0]}
 *   </CheckboxButtons.Item>
 * ))
 * ```
 */
export const Simple: Story = {
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const group = canvas.getAllByRole('group')[0];
		const checkboxes = getAllByRole(group, 'checkbox');

		await step('Group renders label and attributes', async () => {
			await expect(group.firstChild).toHaveTextContent(`${args.label}`);
			await expect(group).toHaveClass(meta.args!.className!);
		});

		await step('Checkboxes render labels and attributes', async () => {
			for (const [idx, checkbox] of checkboxes.entries()) {
				const label = checkbox.closest('label');
				await expect(label).toHaveTextContent(itemData[idx][0]);
				await expect(checkbox).not.toBeChecked();
				await expect(checkbox).toHaveAttribute('name', args.name);
				await expect(checkbox).toHaveAttribute('value', `${idx}`);
			}
		});

		await step('Checked states and onChange event', async () => {
			for (const idx of [0, 2]) {
				const checkbox = checkboxes[idx];
				await userEvent.click(checkbox, { delay: 25 });
				await expect(args.onChange).toHaveBeenCalled();
				await expect(checkbox).toBeChecked();
			}
		});

		await step('Keyboard interaction', async () => {
			await userEvent.keyboard(
				'{Shift>}[Tab][Tab]{/Shift}[Space][Tab][Tab][Space]',
				{
					delay: 25,
				},
			);
			await expect(args.onChange).toHaveBeenCalled();
			await expect(checkboxes[0]).not.toBeChecked();
			await expect(checkboxes[2]).not.toBeChecked();
		});
	},
};

/**
 * To acheive the the split-column layout in the checkbox label, use a CheckboxButtons.SplitLabel layout helper
 * inside the CheckboxButtons.Item component. Currently supports text only. Populate the `content` prop on the SplitLabel
 * with a string array (content left, content right).
 */
export const SplitLabel: Story = {
	args: {
		children: itemData.map((data, idx) => (
			<CheckboxGroup.Item key={idx} value={`${idx}`}>
				<CheckboxGroup.SplitLabel content={data} />
			</CheckboxGroup.Item>
		)),
	},
};

/**
 * The second option is checked by default, but the inputs are uncontrolled.
 */
export const DefaultChecked: Story = {
	args: {
		...SplitLabel.args,
		defaultValue: ['1'],
	},
};

/**
 * Controlled state with onChange handler. Each checkbox item must have a unique value because the state is handled as
 * an array of the selected values.
 */
export const Controlled: Story = {
	render: () => {
		const [currentValue, setCurrentValue] = useState<string[]>([
			'0',
			'1',
			'2',
			'3',
		]);
		const handleOnChange = (values: string[]) => {
			setCurrentValue(values);
			fn();
		};

		return (
			<CheckboxGroup
				label={meta.args?.label}
				onChange={handleOnChange}
				value={currentValue}
			>
				{itemData.map((data, idx) => (
					<CheckboxGroup.Item key={idx} value={`${idx}`}>
						<CheckboxGroup.SplitLabel content={data} />
					</CheckboxGroup.Item>
				))}
			</CheckboxGroup>
		);
	},
};

export const Disabled: Story = {
	args: {
		...SplitLabel.args,
		isDisabled: true,
	},
};
