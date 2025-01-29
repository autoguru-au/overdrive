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
import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { boxArgTypes } from '../Box/argTypes';
import { DateInput } from '../DateInput';

import { TextInput } from '.';

export default {
	title: 'Forms & Input Fields/Text Input',
	component: TextInput,
	parameters: { chromatic: {} },
} satisfies Meta<typeof TextInput>;

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

const argTypes: ArgTypes<Partial<ComponentProps<typeof TextInput>>> = {
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
	suffixIcon: {
		defaultValue: null,
		description: 'Input suffix Icon',
		options: iconOptions,
		control: {
			type: 'select',
		},
	},
	backgroundColour: boxArgTypes['backgroundColour'],
	maxLength: {
		defaultValue: null,
		description: 'Set the max length of the input',
		control: {
			type: 'number',
		},
	},
};

const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />;

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
	prefixIcon: void 0,
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
const attachedLeftProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	attach: 'LEFT',
};
const attachedTopProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	attach: 'TOP',
};
const attachedRightProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	attach: 'RIGHT',
};
const attachedBottomProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	attach: 'BOTTOM',
};
const attachedAllProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	attach: 'ALL',
};
const mergedLeftProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	borderMerged: 'LEFT',
};
const mergedTopProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	borderMerged: 'TOP',
};
const mergedRightProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	borderMerged: 'RIGHT',
};
const mergedBottomProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	borderMerged: 'BOTTOM',
};
const mergedAllProps: ComponentProps<typeof TextInput> = {
	...sharedProps,
	borderMerged: 'ALL',
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

export const WithPrefixIcon = Template.bind(withPrefixIconProps);
WithPrefixIcon.args = withPrefixIconProps;
WithPrefixIcon.argTypes = argTypes;

export const WithSuffixIcon = Template.bind(withSuffixIconProps);
WithSuffixIcon.args = withSuffixIconProps;
WithSuffixIcon.argTypes = argTypes;

export const WithBothIcons = Template.bind(withBothIconsProps);
WithBothIcons.args = withBothIconsProps;
WithBothIcons.argTypes = argTypes;

export const AttachedLeft = Template.bind(attachedLeftProps);
AttachedLeft.args = attachedLeftProps;
AttachedLeft.argTypes = argTypes;

export const AttachedTop = Template.bind(attachedTopProps);
AttachedTop.args = attachedTopProps;
AttachedTop.argTypes = argTypes;

export const AttachedRight = Template.bind(attachedRightProps);
AttachedRight.args = attachedRightProps;
AttachedRight.argTypes = argTypes;

export const AttachedBottom = Template.bind(attachedBottomProps);
AttachedBottom.args = attachedBottomProps;
AttachedBottom.argTypes = argTypes;

export const AttachedAll = Template.bind(attachedAllProps);
AttachedAll.args = attachedAllProps;
AttachedAll.argTypes = argTypes;

export const MergedLeft = Template.bind(mergedLeftProps);
MergedLeft.args = mergedLeftProps;
MergedLeft.argTypes = argTypes;

export const MergedTop = Template.bind(mergedTopProps);
MergedTop.args = mergedTopProps;
MergedTop.argTypes = argTypes;

export const MergedRight = Template.bind(mergedRightProps);
MergedRight.args = mergedRightProps;
MergedRight.argTypes = argTypes;

export const MergedBottom = Template.bind(mergedBottomProps);
MergedBottom.args = mergedBottomProps;
MergedBottom.argTypes = argTypes;

export const MergedAll = Template.bind(mergedAllProps);
MergedAll.args = mergedAllProps;
MergedAll.argTypes = argTypes;

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
	prefixIcon: CarIcon,
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
