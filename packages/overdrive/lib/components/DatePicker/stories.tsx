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
	<DatePicker {...args} />
);

const standardProps: ComponentProps<typeof DatePicker> = {};

export const standard = Template.bind(standardProps);
standard.args = standardProps;
