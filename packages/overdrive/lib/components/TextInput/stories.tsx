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

import { boxArgTypes } from '../Box/argTypes';
import { DateInput } from '../DateInput';

import { TextInput } from '.';

export default {
	title: 'Components/Inputs/Text',
	component: TextInput,
	parameters: { chromatic: {} },
} as ComponentMeta<typeof TextInput>;

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
};

const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

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

export const attachedLeft = Template.bind(attachedLeftProps);
attachedLeft.args = attachedLeftProps;
attachedLeft.argTypes = argTypes;

export const attachedTop = Template.bind(attachedTopProps);
attachedTop.args = attachedTopProps;
attachedTop.argTypes = argTypes;

export const attachedRight = Template.bind(attachedRightProps);
attachedRight.args = attachedRightProps;
attachedRight.argTypes = argTypes;

export const attachedBottom = Template.bind(attachedBottomProps);
attachedBottom.args = attachedBottomProps;
attachedBottom.argTypes = argTypes;

export const attachedAll = Template.bind(attachedAllProps);
attachedAll.args = attachedAllProps;
attachedAll.argTypes = argTypes;

export const mergedLeft = Template.bind(mergedLeftProps);
mergedLeft.args = mergedLeftProps;
mergedLeft.argTypes = argTypes;

export const mergedTop = Template.bind(mergedTopProps);
mergedTop.args = mergedTopProps;
mergedTop.argTypes = argTypes;

export const mergedRight = Template.bind(mergedRightProps);
mergedRight.args = mergedRightProps;
mergedRight.argTypes = argTypes;

export const mergedBottom = Template.bind(mergedBottomProps);
mergedBottom.args = mergedBottomProps;
mergedBottom.argTypes = argTypes;

export const mergedAll = Template.bind(mergedAllProps);
mergedAll.args = mergedAllProps;
mergedAll.argTypes = argTypes;

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
