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
	title: 'Forms & Input Fields/Date Input',
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
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;
Standard.argTypes = argTypes;

export const WithAValue = Template.bind(withAValueProps);
WithAValue.args = withAValueProps;
WithAValue.argTypes = argTypes;

export const NotchDisabled = Template.bind(noNotchProps);
NotchDisabled.args = noNotchProps;
NotchDisabled.argTypes = argTypes;

export const WithPrefixIcon = Template.bind(withIconProps);
WithPrefixIcon.args = withIconProps;
WithPrefixIcon.argTypes = argTypes;

export const Disabled = Template.bind(disabledProps);
Disabled.args = disabledProps;
Disabled.argTypes = argTypes;

export const Valid = Template.bind(validProps);
Valid.args = validProps;
Valid.argTypes = argTypes;

export const Invalid = Template.bind(invalidProps);
Invalid.args = invalidProps;
Invalid.argTypes = argTypes;

const withValueSmallProps: typeof withAValueProps = {
	...withAValueProps,
	size: 'small',
};

export const WithValueSmall = Template.bind(withValueSmallProps);
WithValueSmall.args = withValueSmallProps;
WithValueSmall.argTypes = argTypes;
