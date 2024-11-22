import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps } from 'react';

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

export default {
	title: 'Components/Inputs/Date',
	component: DateInput,
	parameters: { chromatic: {} },
} satisfies Meta<typeof DateInput>;

const iconOptions = {
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
};
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
const argTypes: Partial<ArgTypes<ComponentProps<typeof DateInput>>> = {
	value: {
		control: {
			type: 'date',
		},
	},
	attach: {
		defaultValue: 'NONE',
		description: 'Input attach',
		options: attachOptions,
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

const Template: StoryFn<typeof DateInput> = (args) => <DateInput {...args} />;

const sharedProps: ComponentProps<typeof DateInput> = {
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
	prefixIcon: void 0,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

const standardProps: ComponentProps<typeof DateInput> = sharedProps;
const withAValueProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	value: todayStr,
	placeholder: 'What is your DOB?',
};
const withHintTextProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: 'What is your DOB?',
};
const withIconProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	prefixIcon: CalendarIcon,
};
const disabledProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	value: todayStr,
	placeholder: 'What is your DOB?',
	disabled: true,
};
const validProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	value: todayStr,
	placeholder: 'What is your DOB?',
	isTouched: true,
	isValid: true,
};
const invalidProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	value: '2050-10-13',
	placeholder: 'What is your DOB?',
	isTouched: true,
	isValid: false,
	hintText: 'Invalid date of birth',
};
const noNotchProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	placeholder: 'What is your DOB?',
	notch: false,
};
const noNotchWithValueProps: ComponentProps<typeof DateInput> = {
	...sharedProps,
	value: todayStr,
	placeholder: 'What is your DOB?',
	notch: false,
};
const loadingProps: ComponentProps<typeof DateInput> = {
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

export const withPrefixIcon = Template.bind(withIconProps);
withPrefixIcon.args = withIconProps;
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

const smallProps: typeof standardProps = {
	...standardProps,
	size: 'small',
};
export const small = Template.bind(smallProps);
small.args = smallProps;
small.argTypes = argTypes;

const withValueSmallProps: typeof withAValueProps = {
	...withAValueProps,
	size: 'small',
};

export const withValueSmall = Template.bind(withValueSmallProps);
withValueSmall.args = withValueSmallProps;
withValueSmall.argTypes = argTypes;

const withIconSmallProps: typeof withAValueProps = {
	...withAValueProps,
	prefixIcon: CarIcon,
	size: 'small',
};

export const withIconSmall = Template.bind(withIconSmallProps);
withIconSmall.args = withIconSmallProps;
withIconSmall.argTypes = argTypes;

const loadingSmallProps: typeof withAValueProps = {
	...withAValueProps,
	isLoading: true,
	size: 'small',
};
export const loadingSmall = Template.bind(loadingSmallProps);
loadingSmall.args = loadingSmallProps;
loadingSmall.argTypes = argTypes;
