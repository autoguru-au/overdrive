import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, fn } from '@storybook/test';
import React from 'react';

import { CheckboxButtons } from './CheckboxButtons';

const itemData = [
	['Tyre puncture repair', '+28.00'],
	['Roadworthy certificate', '+89.85'],
	['Re-gas air-conditioning', '+99.00'],
	['Windscreen wipers - pair', '+45.92'],
];

const meta: Meta<typeof CheckboxButtons> = {
	title: 'Components/Checkbox Buttons',
	component: CheckboxButtons,
	args: {
		label: 'Commonly requested extras',
		children: itemData.map((item, idx) => (
			<CheckboxButtons.Item key={idx} value={`${idx}`}>
				{item[0]}
			</CheckboxButtons.Item>
		)),
		onChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof CheckboxButtons>;

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
export const Simple: Story = {};

/**
 * To acheive the the split-column layout in the checkbox label, use a CheckboxButtons.SplitLabel layout helper
 * inside the CheckboxButtons.Item component. Currently supports text only. Populate the `items` prop on the SplitLabel
 * with a string array (content left, content right).
 */
export const SplitLabel: Story = {
	args: {
		children: itemData.map((data, idx) => (
			<CheckboxButtons.Item key={idx} value={`${idx}`}>
				<CheckboxButtons.SplitLabel items={data} />
			</CheckboxButtons.Item>
		)),
	},
};

export const Disabled: Story = {
	args: {
		...SplitLabel.args,
		isDisabled: true,
	},
};
