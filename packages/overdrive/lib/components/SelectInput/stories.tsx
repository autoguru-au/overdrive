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
import * as React from 'react';
import { ComponentProps } from 'react';

import { SelectInput } from '.';
import { ArgTypes } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const valueOptions = ['Kia', 'Toyota', 'BMW', 'Mitsubishi', 'Hyundai'];
const selectOptions = valueOptions.map((item) => (
	<option key={item} value={item}>
		{item}
	</option>
));

export default {
	title: 'Components/Inputs/Select',
	component: SelectInput,
	parameters: {
		chromatic: { delay: 300 },
	},
};

const defaultValue = valueOptions[4];
const defaultPlaceholder = 'What is the make of your car?';

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

const argTypes: ArgTypes = {
	value: {
		options: valueOptions,
		defaultValue: null,
		control: {
			type: 'select',
		},
	},
	prefixIcon: {
		defaultValue: null,
		description: 'Input prefix Icon',
		options: iconOptions,
		control: {
			type: 'select',
		},
	},
};

const Template = (args) => (
	<SelectInput {...args}>
		<option disabled>Select an option</option>
		{selectOptions}
	</SelectInput>
);

const sharedProps: ComponentProps<typeof SelectInput> = {
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
	prefixIcon: null,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

const standardProps: ComponentProps<typeof SelectInput> = sharedProps;
const withAValueProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
};
const withHintTextProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: defaultPlaceholder,
};
const withPrefixIconProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	prefixIcon: CarIcon,
};
const disabledProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};
const validProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};
const invalidProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Vehicle make is mandatory',
};
const noNotchProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	notch: false,
};
const noNotchWithValueProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	notch: false,
};
const loadingProps: ComponentProps<typeof SelectInput> = {
	...sharedProps,
	isLoading: true,
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
standard.argTypes = argTypes;

export const withAValue = Template.bind(withAValueProps);
withAValue.args = withAValueProps;
withAValue.argTypes = argTypes;

export const withHintText = Template.bind(withHintTextProps);
withHintText.args = withHintTextProps;
withHintText.argTypes = argTypes;

export const notchDisabled = Template.bind(noNotchProps);
notchDisabled.args = noNotchProps;
notchDisabled.argTypes = argTypes;

export const notchDisabledWithValue = Template.bind(noNotchWithValueProps);
notchDisabledWithValue.args = noNotchWithValueProps;
notchDisabledWithValue.argTypes = argTypes;

export const withPrefixIcon = Template.bind(withPrefixIconProps);
withPrefixIcon.args = withPrefixIconProps;
withPrefixIcon.argTypes = argTypes;

export const disabled = Template.bind(disabledProps);
disabled.args = disabledProps;
disabled.argTypes = argTypes;

export const valid = Template.bind(validProps);
valid.args = validProps;
valid.argTypes = argTypes;

export const invalid = Template.bind(invalidProps);
invalid.args = invalidProps;
invalid.argTypes = argTypes;

export const loading = Template.bind(loadingProps);
loading.args = loadingProps;
loading.argTypes = argTypes;
