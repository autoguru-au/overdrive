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
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
	title: 'Components/DatePicker',
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
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
	<Box display="flex">
		<DatePicker {...args} />
	</Box>
);

const standardProps: ComponentProps<typeof DatePicker> = {
	isLoading: false,
	disabled: false,
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;

const smallProps: ComponentProps<typeof DatePicker> = {
	size: 'small',
	isLoading: false,
	disabled: false,
};

export const small = Template.bind(smallProps);
small.args = smallProps;

const smallWithLabelProps: ComponentProps<typeof DatePicker> = {
	...smallProps,
	valueLabel: 'Today',
};

export const smallWithLabel = Template.bind(smallWithLabelProps);
smallWithLabel.args = smallWithLabelProps;

const mediumProps: ComponentProps<typeof DatePicker> = {
	size: 'medium',
	isLoading: false,
	disabled: false,
};

export const medium = Template.bind(mediumProps);
medium.args = mediumProps;

const mediumWithLabelProps: ComponentProps<typeof DatePicker> = {
	...mediumProps,
	valueLabel: 'Today',
};

export const mediumWithLabel = Template.bind(mediumWithLabelProps);
mediumWithLabel.args = mediumWithLabelProps;

const largeProps: ComponentProps<typeof DatePicker> = {
	size: 'large',
	isLoading: false,
	disabled: false,
};

export const large = Template.bind(largeProps);
large.args = largeProps;

const largeWithLabelProps: ComponentProps<typeof DatePicker> = {
	...largeProps,
	valueLabel: 'Today',
};

export const largeWithLabel = Template.bind(largeWithLabelProps);
largeWithLabel.args = largeWithLabelProps;
