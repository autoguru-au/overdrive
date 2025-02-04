import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { DateInput } from '../DateInput';

import { SelectInput } from '.';

const valueOptions = ['Kia', 'Toyota', 'BMW', 'Mitsubishi', 'Hyundai'];
const selectOptions = valueOptions.map((item) => (
	<option key={item} value={item}>
		{item}
	</option>
));

const defaultValue = valueOptions[4];
const defaultPlaceholder = 'What is the make of your car?';

const attachOptions: Record<
	string,
	ComponentProps<typeof DateInput>['attach']
> = {
	NONE: 'NONE',
	TOP: 'TOP',
	RIGHT: 'RIGHT',
	LEFT: 'LEFT',
	BOTTOM: 'BOTTOM',
	ALL: 'ALL',
};

const iconOptions = {
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
	title: 'Forms & Input Fields/Select',
	component: SelectInput,
	parameters: { chromatic: {} },
	args: {
		value: null,
		disabled: false,
		name: 'text',
		placeholder: defaultPlaceholder,
		isValid: false,
		isTouched: false,
		isLoading: false,
		isFocused: false,
		reserveHintSpace: false,
		hintText: '',
		notch: true,
		attach: 'NONE',
		prefixIcon: void 0,
		onChange: action('onChange'),
		onFocus: action('onFocus'),
		onBlur: action('onBlur'),
	},
	argTypes: {
		value: {
			options: valueOptions,
			control: {
				type: 'select',
			},
		},
		attach: {
			description: 'Input attach',
			options: attachOptions,
			control: {
				type: 'select',
			},
		},
		prefixIcon: {
			description: 'Input prefix Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof SelectInput>;

const Template: StoryFn<typeof SelectInput> = (args) => (
	<SelectInput {...args}>
		<option disabled>Select an option</option>
		{selectOptions}
	</SelectInput>
);

export const Standard = Template.bind({});
Standard.args = {
	hintText: 'Hint Text',
};

export const NotchDisabled = Template.bind({});
NotchDisabled.args = {
	placeholder: defaultPlaceholder,
	notch: false,
};

export const WithPrefixIcon = Template.bind({});
WithPrefixIcon.args = {
	prefixIcon: CarIcon,
};

export const Disabled = Template.bind({});
Disabled.args = {
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};

export const Valid = Template.bind({});
Valid.args = {
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Vehicle make is mandatory',
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};
