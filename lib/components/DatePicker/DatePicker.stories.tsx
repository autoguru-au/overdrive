import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { FlexInline } from '../Flex';

import { DatePicker } from './DatePicker';

const meta = {
	title: 'Components/Date Picker',
	component: DatePicker,
	decorators: [
		(Story) => (
			<FlexInline>
				<Story />
			</FlexInline>
		),
	],
	args: {
		onChange: undefined,
		valueLabel: 'Select date',
		icon: undefined,
		size: 'medium',
		allowPastDate: false,
		isLoading: false,
		disabled: false,
		useNativePicker: false,
	},
	argTypes: {
		allowPastDate: {
			control: { type: 'boolean' },
		},
		icon: {
			defaultValue: null,
			description: 'Input field Icon',
			...argTypesExampleIcons,
		},
	},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Standard: Story = {
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<DatePicker
				{...args}
				value={selectedDate}
				onChange={setSelectedDate}
			/>
		);
	},
};

export const LargeSize: Story = {
	args: {
		size: 'large',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<DatePicker
				{...args}
				value={selectedDate}
				onChange={setSelectedDate}
			/>
		);
	},
};

/**
 * Forces the use of the native date picker on all screen sizes
 */
export const NativePicker: Story = {
	args: {
		useNativePicker: true,
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<DatePicker
				{...args}
				value={selectedDate}
				onChange={setSelectedDate}
			/>
		);
	},
};
