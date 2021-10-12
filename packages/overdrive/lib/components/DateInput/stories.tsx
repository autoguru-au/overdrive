import { action } from '@storybook/addon-actions';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps } from 'react';

import { DateInput } from '.';
import { AccountEditIcon, CalendarIcon } from '@autoguru/icons';
import { ArgTypes, Meta } from '@storybook/react';

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
	parameters: { chromatic: { delay: 300 } },
} as Meta<typeof sharedProps>;

const argTypes: ArgTypes = {
	value: {
		control: {
			type: 'date',
		},
	},
	prefixIcon: {
		defaultValue: null,
		description: 'Input prefix Icon',
		options: { CalendarIcon, AccountEditIcon },
		control: {
			type: 'select',
		},
	},
};

const Template = (args) => <DateInput {...args} />;

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
	prefixIcon: null,
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
	value: '12/10/2050',
	placeholder: 'What is your DOB?',
	isTouched: true,
	isValid: false,
	hintText: 'Invalid date of birth',
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
