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
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps } from 'react';

import { NumberInput } from '.';

export default {
	title: 'Components/Inputs/Number',
	component: NumberInput,
	parameters: {
		chromatic: { delay: 300 },
	},
} as ComponentMeta<typeof NumberInput>;

const defaultValue = isChromatic()
	? '42'
	: Math.round(Math.random() * 100).toString();
const defaultPlaceholder = 'How many?';

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
			type: 'number',
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

const Template: ComponentStory<typeof NumberInput> = (args) => (
	<NumberInput {...args} />
);

const sharedProps: ComponentProps<typeof NumberInput> = {
	disabled: false,
	name: 'number',
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

const standardProps: ComponentProps<typeof NumberInput> = sharedProps;
const withAValueProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
};
const withHintTextProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: defaultPlaceholder,
};
const withPrefixIconProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	prefixIcon: CalendarIcon,
};
const withSuffixIconProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	suffixIcon: AccountEditIcon,
};
const withBothIconsProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	prefixIcon: CalendarIcon,
	suffixIcon: AccountEditIcon,
};
const disabledProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};
const validProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};
const invalidProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	value: '99',
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Required litres of oil is not valid',
};
const noNotchProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	notch: false,
};
const noNotchWithValueProps: ComponentProps<typeof NumberInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	notch: false,
};
const loadingProps: ComponentProps<typeof NumberInput> = {
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
