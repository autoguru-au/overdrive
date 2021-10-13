import * as React from 'react';
import { ComponentProps } from 'react';

import { TextAreaInput } from '.';
import { ArgTypes } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Components/Inputs/Textarea',
	component: TextAreaInput,
	parameters: {
		chromatic: { delay: 300 },
	},
};


const defaultValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar odio. Duis laoreet lacus vel consequat congue. Ut euismod enim non eros lacinia mollis. Vestibulum libero quam, aliquet non justo laoreet, egestas molestie ante. Quisque urna leo, consectetur id dui aliquet, placerat iaculis augue. Pellentesque sed vestibulum augue, quis porta lectus.';
const defaultPlaceholder = 'Tell us about your car.';


const argTypes: ArgTypes = {
	value: {
		control: {
			type: 'string',
		},
	},
};

const Template = (args) => <TextAreaInput {...args} />;

const sharedProps: ComponentProps<typeof TextAreaInput> = {
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

const standardProps: ComponentProps<typeof TextAreaInput> = sharedProps;
const withAValueProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
};
const withHintTextProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: defaultPlaceholder,
};
const disabledProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};
const validProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};
const invalidProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: 'Bob the builder',
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Cannot be Bob the builder',
};
const noNotchProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	notch: false,
};
const noNotchWithValueProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	notch: false,
};
const loadingProps: ComponentProps<typeof TextAreaInput> = {
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
