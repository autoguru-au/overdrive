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
	title: 'Components/Inputs/Colour',
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

export const withIcon = Template.bind(withIconProps);
withIcon.args = withIconProps;
withIcon.argTypes = argTypes;

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
	suffixIcon: CarIcon,
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
