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
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

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

export default {
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

const Template: StoryFn<typeof DatePicker> = (args) => (
	<Box display="flex">
		<DatePicker {...args} />
	</Box>
);

const standardProps: ComponentProps<typeof DatePicker> = {
	isLoading: false,
	disabled: false,
};

export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const smallProps: ComponentProps<typeof DatePicker> = {
	size: 'small',
	isLoading: false,
	disabled: false,
};

const smallWithLabelProps: ComponentProps<typeof DatePicker> = {
	...smallProps,
	valueLabel: 'Today',
};

export const SmallWithLabel = Template.bind(smallWithLabelProps);
SmallWithLabel.args = smallWithLabelProps;

const mediumProps: ComponentProps<typeof DatePicker> = {
	size: 'medium',
	isLoading: false,
	disabled: false,
};

const mediumWithLabelProps: ComponentProps<typeof DatePicker> = {
	...mediumProps,
	valueLabel: 'Today',
};

export const MediumWithLabel = Template.bind(mediumWithLabelProps);
MediumWithLabel.args = mediumWithLabelProps;

const largeProps: ComponentProps<typeof DatePicker> = {
	size: 'large',
	isLoading: false,
	disabled: false,
};

const largeWithLabelProps: ComponentProps<typeof DatePicker> = {
	...largeProps,
	valueLabel: 'Today',
};

export const LargeWithLabel = Template.bind(largeWithLabelProps);
LargeWithLabel.args = largeWithLabelProps;
