import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Stepper } from '.';

const meta = {
	title: 'Forms & Input Fields/Stepper',
	component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof Stepper>;

const Template: Story = {
	render: ({ onChange: incomingOnChange, value: incomingValue, ...args }) => {
		const [value, setValue] = useState<number>(incomingValue!);
		return (
			<Stepper
				onChange={(stepValue) => {
					setValue(stepValue);
					if (incomingOnChange) incomingOnChange(stepValue);
				}}
				value={value}
				{...args}
			/>
		);
	},
};

export const Standard: Story = {
	...Template,
	args: {
		value: 2.5,
		min: 0,
		max: 10,
		step: 0.5,
		disabled: false,
		onChange: action('onChange'),
	},
};

export const FullWidth: Story = {
	...Template,
	args: {
		...Standard.args,
		isFullWidth: true,
	},
};

const formatter = new Intl.NumberFormat('en-AU', {
	style: 'currency',
	currency: 'AUD',
});

export const WithFormatting: Story = {
	...Template,
	args: {
		value: 32,
		min: 0,
		max: 99,
		step: 0.05,
		disabled: false,
		format: formatter.format,
		onChange: action('onChange'),
	},
};
