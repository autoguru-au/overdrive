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
import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import React, { type ComponentProps } from 'react';

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

type Story = StoryObj<typeof NumberInput>;

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
		options: Object.values(attachOptions),
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

const RenderTemplate = (args: ComponentProps<typeof NumberInput>) => {
	const [value, setValue] = React.useState(args.value);
	return (
		<NumberInput
			{...args}
			value={value}
			onChange={(e) => {
				setValue(e.currentTarget.value);
				args.onChange?.(e);
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
	prefixIcon: undefined,
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

export const Standard: Story = {
	args: standardProps,
	argTypes,
	render: RenderTemplate,
};

export const WithAValue: Story = {
	args: withAValueProps,
	argTypes,
	render: RenderTemplate,
};

export const WithHintText: Story = {
	args: withHintTextProps,
	argTypes,
	render: RenderTemplate,
};

export const NotchDisabledWithValue: Story = {
	args: noNotchWithValueProps,
	argTypes,
	render: RenderTemplate,
};

export const WithPrefixIcon: Story = {
	args: withPrefixIconProps,
	argTypes,
	render: RenderTemplate,
};

export const WithSuffixIcon: Story = {
	args: withSuffixIconProps,
	argTypes,
	render: RenderTemplate,
};

export const WithBothIcons: Story = {
	args: withBothIconsProps,
	argTypes,
	render: RenderTemplate,
};

export const Disabled: Story = {
	args: disabledProps,
	argTypes,
	render: RenderTemplate,
};

export const Loading: Story = {
	args: loadingProps,
	argTypes,
	render: RenderTemplate,
};

const withValueSmallProps: ComponentProps<typeof NumberInput> = {
	...withAValueProps,
	size: 'small',
};

export const WithValueSmall: Story = {
	args: withValueSmallProps,
	argTypes,
	render: RenderTemplate,
};
