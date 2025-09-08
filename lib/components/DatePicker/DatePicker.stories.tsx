import { today, getLocalTimeZone } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { Box } from '../Box/Box';

import { DatePicker } from './DatePicker';

const meta = {
	title: 'Components/Date Picker',
	component: DatePicker,
	decorators: [
		(Story) => (
			<Box style={{ minHeight: 350 }}>
				<Story />
			</Box>
		),
	],
	argTypes: {
		icon: {
			defaultValue: null,
			description: 'Input field Icon',
			...argTypesExampleIcons,
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			},
		},
		useNativePicker: {
			control: 'boolean',
			description:
				'Use native browser date picker instead of Calendar popover',
		},
		allowPastDate: {
			control: 'boolean',
			description: 'Allow selecting dates in the past',
		},
	},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Standard: Story = {
	args: {
		isLoading: false,
		disabled: false,
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<Box display="flex" flexDirection="column" gap="4">
				<DatePicker
					{...args}
					value={selectedDate}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};

export const WithCalendarPopover: Story = {
	args: {
		size: 'medium',
		isLoading: false,
		disabled: false,
		useNativePicker: false,
		valueLabel: 'Select date',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<Box display="flex" flexDirection="column" gap="4">
				<DatePicker
					{...args}
					value={selectedDate}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};

export const NativePicker: Story = {
	args: {
		size: 'medium',
		isLoading: false,
		disabled: false,
		useNativePicker: true,
		valueLabel: 'Select date',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<Box display="flex" flexDirection="column" gap="4">
				<DatePicker
					{...args}
					value={selectedDate}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};

export const AllowPastDates: Story = {
	args: {
		size: 'medium',
		isLoading: false,
		disabled: false,
		allowPastDate: true,
		valueLabel: 'Any date',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<Box display="flex" flexDirection="column" gap="4">
				<DatePicker
					{...args}
					value={selectedDate}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};

export const SmallSize: Story = {
	args: {
		size: 'small',
		isLoading: false,
		disabled: false,
		valueLabel: 'Small',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<Box display="flex" flexDirection="column" gap="4">
				<DatePicker
					{...args}
					value={selectedDate}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};

export const LargeSize: Story = {
	args: {
		size: 'large',
		isLoading: false,
		disabled: false,
		valueLabel: 'Large',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<Box display="flex" flexDirection="column" gap="4">
				<DatePicker
					{...args}
					value={selectedDate}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};

export const CustomCalendarSettings: Story = {
	args: {
		size: 'medium',
		isLoading: false,
		disabled: false,
		calendarOptions: {
			defaultValue: today(getLocalTimeZone()).add({ months: 1 }),
		},
		lang: {
			nextLabel: 'Next month',
			prevLabel: 'Previous month',
		},
		valueLabel: 'Custom settings',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<Box display="flex" flexDirection="column" gap="4">
				<DatePicker
					{...args}
					value={selectedDate}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};
