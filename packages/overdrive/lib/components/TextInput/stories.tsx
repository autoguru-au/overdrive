import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { TextInput } from '.';

export default {
	title: 'Components/Inputs/Text',
	component: TextInput,
	parameters: {
		chromatic: { delay: 300 },
	},
};

const defaultValue = 'Jane Doe';
const defaultPlaceholder = 'What is your first name?';

const iconOptions = {
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
	CheckIcon,
};

const argTypes: ArgTypes = {
	value: {
		control: {
			type: 'string',
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
	suffixIcon: {
		defaultValue: null,
		description: 'Input suffix Icon',
		options: iconOptions,
		control: {
			type: 'select',
		},
	},
};

const Template = (args) => <TextInput {...args} />;

const sharedProps: ComponentProps<typeof TextInput> = {
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

const standardProps: ComponentProps<typeof TextInput> = sharedProps;
const withAValueProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
};
const withHintTextProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: defaultPlaceholder,
};
const withPrefixIconProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	prefixIcon: CalendarIcon,
};
const withSuffixIconProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	suffixIcon: AccountEditIcon,
};
const withBothIconsProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	prefixIcon: CalendarIcon,
	suffixIcon: AccountEditIcon,
};
const disabledProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};
const validProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};
const invalidProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	value: 'Bob the builder',
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Cannot be Bob the builder',
};
const noNotchProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	notch: false,
};
const noNotchWithValueProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	notch: false,
};
const loadingProps: ComponentProps<typeof TextInput> = {
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

export const withSuffixIcon = Template.bind(withSuffixIconProps);
withSuffixIcon.args = withSuffixIconProps;
withSuffixIcon.argTypes = argTypes;

export const withBothIcons = Template.bind(withBothIconsProps);
withBothIcons.args = withBothIconsProps;
withBothIcons.argTypes = argTypes;

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
