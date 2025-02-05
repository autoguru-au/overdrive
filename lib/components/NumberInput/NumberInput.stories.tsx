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
import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps } from 'react';

import { DateInput } from '../DateInput';

import { NumberInput } from '.';

const meta: Meta<typeof NumberInput> = {
	title: 'Forms & Input Fields/Number Input',
	component: NumberInput,
	parameters: {
		chromatic: {},
	},
};
export default meta;

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

const argTypes: ArgTypes = {
	prefixIcon: {
		defaultValue: null,
		description: 'Input prefix Icon',
		options: iconOptions,
		control: {
			type: 'select',
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
	maxLength: {
		defaultValue: null,
		description: 'Set the max length of the number',
		control: {
			type: 'number',
		},
	},
};

const Template: StoryFn<typeof NumberInput> = ({
	value: initialValue,
	onChange: incomingOnChange,
	...args
}) => {
	const [value, setValue] = React.useState<string | undefined>(initialValue);

	return (
		<NumberInput
			{...args}
			value={value}
			onChange={(e) => {
				setValue(e.currentTarget.value);
				incomingOnChange(e);
			}}
		/>
	);
};

const sharedProps: ComponentProps<typeof NumberInput> = {
	disabled: false,
	name: 'number',
	value: '',
	placeholder: defaultPlaceholder,
	isValid: false,
	isTouched: false,
	isLoading: false,
	isFocused: false,
	reserveHintSpace: false,
	hintText: '',
	notch: true,
	preventMouseWheel: true,
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

export const Standard = Template.bind(standardProps);
Standard.args = standardProps;
Standard.argTypes = argTypes;

export const WithAValue = Template.bind(withAValueProps);
WithAValue.args = withAValueProps;
WithAValue.argTypes = argTypes;

export const WithHintText = Template.bind(withHintTextProps);
WithHintText.args = withHintTextProps;
WithHintText.argTypes = argTypes;

export const NotchDisabledWithValue = Template.bind(noNotchWithValueProps);
NotchDisabledWithValue.args = noNotchWithValueProps;
NotchDisabledWithValue.argTypes = argTypes;

export const WithPrefixIcon = Template.bind(withPrefixIconProps);
WithPrefixIcon.args = withPrefixIconProps;
WithPrefixIcon.argTypes = argTypes;

export const WithSuffixIcon = Template.bind(withSuffixIconProps);
WithSuffixIcon.args = withSuffixIconProps;
WithSuffixIcon.argTypes = argTypes;

export const WithBothIcons = Template.bind(withBothIconsProps);
WithBothIcons.args = withBothIconsProps;
WithBothIcons.argTypes = argTypes;

export const Disabled = Template.bind(disabledProps);
Disabled.args = disabledProps;
Disabled.argTypes = argTypes;

export const Loading = Template.bind(loadingProps);
Loading.args = loadingProps;
Loading.argTypes = argTypes;

const withValueSmallProps: typeof withAValueProps = {
	...withAValueProps,
	size: 'small',
};

export const WithValueSmall = Template.bind(withValueSmallProps);
WithValueSmall.args = withValueSmallProps;
WithValueSmall.argTypes = argTypes;
