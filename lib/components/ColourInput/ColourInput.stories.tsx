import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	FourByFourIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { DateInput } from '../DateInput';

import { ColourInput } from '.';

export default {
	title: 'Forms & Input Fields/Colour Input',
	component: ColourInput,
	parameters: { chromatic: {} },
} satisfies Meta<typeof ColourInput>;

const defaultColour = '#ec4040';
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

const argTypes: Partial<ArgTypes<ComponentProps<typeof ColourInput>>> = {
	value: {
		control: {
			type: 'color',
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
	suffixIcon: {
		defaultValue: null,
		description: 'Input suffix Icon',
		options: iconOptions,
		control: {
			type: 'select',
		},
	},
};

const Template: StoryFn<typeof ColourInput> = (args) => (
	<ColourInput {...args} />
);

const sharedProps: ComponentProps<typeof ColourInput> = {
	disabled: false,
	name: 'date',
	placeholder: 'Your favourite colour',
	isValid: false,
	isTouched: false,
	isLoading: false,
	isFocused: false,
	reserveHintSpace: false,
	hintText: '',
	notch: true,
	suffixIcon: void 0,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

const standardProps: ComponentProps<typeof ColourInput> = sharedProps;
const withAValueProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	value: defaultColour,
	placeholder: 'What is your favourite car colour?',
};
const withHintTextProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: 'What is your favourite car colour?',
};
const withIconProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	suffixIcon: FourByFourIcon,
};
const disabledProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	value: defaultColour,
	placeholder: 'What is your favourite car colour?',
	disabled: true,
};
const validProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	value: defaultColour,
	placeholder: 'What is your favourite car colour?',
	isTouched: true,
	isValid: true,
};
const invalidProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	value: '#ffd402',
	placeholder: 'What is your favourite car colour?',
	isTouched: true,
	isValid: false,
	hintText: 'Invalid colour',
};
const noNotchProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	placeholder: 'What is your favourite car colour?',
	notch: false,
};
const noNotchWithValueProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	value: defaultColour,
	placeholder: 'What is your favourite car colour?',
	notch: false,
};
const loadingProps: ComponentProps<typeof ColourInput> = {
	...sharedProps,
	isLoading: true,
};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;
Standard.argTypes = argTypes;

export const WithAValue = Template.bind(withAValueProps);
WithAValue.args = withAValueProps;
WithAValue.argTypes = argTypes;

export const WithHintText = Template.bind(withHintTextProps);
WithHintText.args = withHintTextProps;
WithHintText.argTypes = argTypes;

export const NotchDisabled = Template.bind(noNotchProps);
NotchDisabled.args = noNotchProps;
NotchDisabled.argTypes = argTypes;

export const NotchDisabledWithValue = Template.bind(noNotchWithValueProps);
NotchDisabledWithValue.args = noNotchWithValueProps;
NotchDisabledWithValue.argTypes = argTypes;

export const WithIcon = Template.bind(withIconProps);
WithIcon.args = withIconProps;
WithIcon.argTypes = argTypes;

export const Disabled = Template.bind(disabledProps);
Disabled.args = disabledProps;
Disabled.argTypes = argTypes;

export const Valid = Template.bind(validProps);
Valid.args = validProps;
Valid.argTypes = argTypes;

export const Invalid = Template.bind(invalidProps);
Invalid.args = invalidProps;
Invalid.argTypes = argTypes;

export const Loading = Template.bind(loadingProps);
Loading.args = loadingProps;
Loading.argTypes = argTypes;

const smallProps: typeof standardProps = {
	...standardProps,
	size: 'small',
};
export const Small = Template.bind(smallProps);
Small.args = smallProps;
Small.argTypes = argTypes;

const withValueSmallProps: typeof withAValueProps = {
	...withAValueProps,
	size: 'small',
};

export const WithValueSmall = Template.bind(withValueSmallProps);
WithValueSmall.args = withValueSmallProps;
WithValueSmall.argTypes = argTypes;

const withIconSmallProps: typeof withAValueProps = {
	...withAValueProps,
	suffixIcon: CarIcon,
	size: 'small',
};

export const WithIconSmall = Template.bind(withIconSmallProps);
WithIconSmall.args = withIconSmallProps;
WithIconSmall.argTypes = argTypes;

const loadingSmallProps: typeof withAValueProps = {
	...withAValueProps,
	isLoading: true,
	size: 'small',
};
export const LoadingSmall = Template.bind(loadingSmallProps);
LoadingSmall.args = loadingSmallProps;
LoadingSmall.argTypes = argTypes;
