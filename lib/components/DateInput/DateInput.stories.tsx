import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';

import { DateInput } from '.';

const formatDate = (date: Date = new Date()) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const todayStr: string = formatDate(
	isChromatic() ? new Date(2019, 5, 1) : new Date(),
);

const meta = {
	title: 'Forms & Input Fields/Date Input',
	component: DateInput,
	args: {
		disabled: false,
		name: 'date',
		placeholder: 'Placeholder',
		isValid: false,
		isTouched: false,
		isLoading: false,
		isFocused: false,
		reserveHintSpace: false,
		hintText: '',
		notch: true,
		prefixIcon: undefined,
		onChange: action('onChange'),
		onFocus: action('onFocus'),
		onBlur: action('onBlur'),
	},
	argTypes: {
		value: {
			control: {
				type: 'date',
			},
		},
		attach: {
			defaultValue: 'NONE',
			description: 'Input attach',
			options: {
				// @ts-expect-error doesn't have types
				NONE: 'NONE',
				TOP: 'TOP',
				RIGHT: 'RIGHT',
				LEFT: 'LEFT',
				BOTTOM: 'BOTTOM',
				ALL: 'ALL',
			},
			control: {
				type: 'select',
			},
		},
		prefixIcon: {
			defaultValue: null,
			description: 'Input prefix Icon',
			options: {
				// @ts-expect-error should be typed
				CalendarIcon,
				AccountEditIcon,
				AlertCircleIcon,
				CarMultipleIcon,
				CurrencyUsdIcon,
				PlusIcon,
				StarIcon,
			},
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};

export const WithAValue: Story = {
	args: {
		value: todayStr,
		placeholder: 'What is your DOB?',
	},
};

export const NotchDisabled: Story = {
	args: {
		placeholder: 'What is your DOB?',
		notch: false,
	},
};

export const WithPrefixIcon: Story = {
	args: {
		prefixIcon: CalendarIcon,
	},
};

export const Disabled: Story = {
	args: {
		value: todayStr,
		placeholder: 'What is your DOB?',
		disabled: true,
	},
};

export const Valid: Story = {
	args: {
		value: todayStr,
		placeholder: 'What is your DOB?',
		isTouched: true,
		isValid: true,
	},
};

export const Invalid: Story = {
	args: {
		value: '2050-10-13',
		placeholder: 'What is your DOB?',
		isTouched: true,
		isValid: false,
		hintText: 'Invalid date of birth',
	},
};

export const WithValueSmall: Story = {
	args: {
		value: todayStr,
		placeholder: 'What is your DOB?',
		size: 'small',
	},
};
