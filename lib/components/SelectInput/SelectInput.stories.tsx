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
	title: 'Components/Inputs/Select',
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

export const standard = Template.bind({});

export const withAValue = Template.bind({});
withAValue.args = { value: defaultValue, placeholder: defaultPlaceholder };

export const withHintText = Template.bind({});
withHintText.args = {
	hintText: 'Hint Text',
	placeholder: defaultPlaceholder,
};

export const notchDisabled = Template.bind({});
notchDisabled.args = {
	placeholder: defaultPlaceholder,
	notch: false,
};

export const notchDisabledWithValue = Template.bind({});
notchDisabledWithValue.args = {
	value: defaultValue,
	placeholder: defaultPlaceholder,
	notch: false,
};

export const withPrefixIcon = Template.bind({});
withPrefixIcon.args = {
	prefixIcon: CarIcon,
};

export const disabled = Template.bind({});
disabled.args = {
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};

export const valid = Template.bind({});
valid.args = {
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};

export const invalid = Template.bind({});
invalid.args = {
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Vehicle make is mandatory',
};

export const loading = Template.bind({});
loading.args = {
	isLoading: true,
};

export const small = Template.bind({});
small.args = {
	size: 'small',
};

export const withValueSmall = Template.bind({});
withValueSmall.args = {
	...withAValue.args,
	size: 'small',
};

export const withIconSmall = Template.bind({});
withIconSmall.args = {
	...withAValue.args,
	prefixIcon: CarIcon,
	size: 'small',
};

export const loadingSmall = Template.bind({});
loadingSmall.args = {
	...withAValue.args,
	isLoading: true,
	size: 'small',
};
