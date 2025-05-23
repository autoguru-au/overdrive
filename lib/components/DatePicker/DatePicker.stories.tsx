import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { Box } from '../Box/Box';

import { DatePicker } from './DatePicker';

const meta = {
	title: 'Components/Date Picker',
	component: DatePicker,
	decorators: [],
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
