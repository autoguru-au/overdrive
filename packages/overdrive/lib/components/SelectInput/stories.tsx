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
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { DateInput } from '../DateInput';

import { SelectInput } from '.';

const valueOptions = ['Kia', 'Toyota', 'BMW', 'Mitsubishi', 'Hyundai'];
const selectOptions = valueOptions.map((item) => (
	<option key={item} value={item}>
		{item}
	</option>
));

export default {
	title: 'Components/Inputs/Select',
	component: SelectInput,
	parameters: { chromatic: { delay: 3000 } },
} as ComponentMeta<typeof SelectInput>;

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
	value: {
		options: valueOptions,
		defaultValue: null,
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
	prefixIcon: {
		defaultValue: null,
		description: 'Input prefix Icon',
		options: iconOptions,
		control: {
			type: 'select',
		},
	},
};

const Template: ComponentStory<typeof SelectInput> = (args) => (
	<SelectInput {...args}>
		<option disabled>Select an option</option>
		{selectOptions}
	</SelectInput>
);

const sharedProps: Omit<ComponentProps<typeof SelectInput>, 'children'> = {
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
	prefixIcon: void 0,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

const standardProps: typeof sharedProps = sharedProps;
const withAValueProps: typeof sharedProps = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
};
const withHintTextProps: typeof sharedProps = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: defaultPlaceholder,
};
const withPrefixIconProps: typeof sharedProps = {
	...sharedProps,
	prefixIcon: CarIcon,
};
const disabledProps: typeof sharedProps = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};
const validProps: typeof sharedProps = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};
const invalidProps: typeof sharedProps = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Vehicle make is mandatory',
};
const noNotchProps: typeof sharedProps = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	notch: false,
};
const noNotchWithValueProps: typeof sharedProps = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	notch: false,
};
const loadingProps: typeof sharedProps = {
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
