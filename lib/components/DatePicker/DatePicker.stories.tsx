import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	MagnifyIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';

import { DatePicker } from '.';

const iconOptions = {
	MagnifyIcon,
	CarIcon,
	CarMultipleIcon,
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
	CheckIcon,
};

const meta = {
	title: 'Components/Date Picker',
	component: DatePicker,
	decorators: [],
	argTypes: {
		icon: {
			defaultValue: void 0,
			description: 'Input field Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			},
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
	render: (args) => (
		<Box display="flex">
			<DatePicker {...args} />
		</Box>
	),
};

export const SmallWithLabel: Story = {
	args: {
		size: 'small',
		isLoading: false,
		disabled: false,
		valueLabel: 'Today',
	},
	render: (args) => (
		<Box display="flex">
			<DatePicker {...args} />
		</Box>
	),
};

export const MediumWithLabel: Story = {
	args: {
		size: 'medium',
		isLoading: false,
		disabled: false,
		valueLabel: 'Today',
	},
	render: (args) => (
		<Box display="flex">
			<DatePicker {...args} />
		</Box>
	),
};

export const LargeWithLabel: Story = {
	args: {
		size: 'large',
		isLoading: false,
		disabled: false,
		valueLabel: 'Today',
	},
	render: (args) => (
		<Box display="flex">
			<DatePicker {...args} />
		</Box>
	),
};
