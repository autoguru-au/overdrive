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
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { boxArgTypes } from '../Box/argTypes';
import { DateInput } from '../DateInput';

import { TextInput } from '.';

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

const meta: Meta = {
	title: 'Forms & Input Fields/Text Input',
	component: TextInput,
	args: {
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
	},
	argTypes: {
		attach: {
			defaultValue: 'NONE',
			description: 'Input attach',
			options: Object.keys(attachOptions),
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
	},
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Standard: Story = {};

export const WithAValue: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
	},
};

export const WithHintText: Story = {
	args: {
		hintText: 'Hint Text',
		placeholder: defaultPlaceholder,
	},
};

export const NotchDisabled: Story = {
	args: {
		placeholder: defaultPlaceholder,
		notch: false,
	},
};

export const NotchDisabledWithValue: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		notch: false,
	},
};

export const WithPrefixIcon: Story = {
	args: {
		prefixIcon: CalendarIcon,
	},
};

export const WithSuffixIcon: Story = {
	args: {
		suffixIcon: AccountEditIcon,
	},
};

export const WithBothIcons: Story = {
	args: {
		prefixIcon: CalendarIcon,
		suffixIcon: AccountEditIcon,
	},
};

export const AttachedAll: Story = {
	args: {
		attach: 'ALL',
	},
};

export const MergedAll: Story = {
	args: {
		borderMerged: 'ALL',
	},
};

export const Disabled: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		disabled: true,
	},
};

export const Valid: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: true,
	},
};

export const Invalid: Story = {
	args: {
		value: 'Bob the builder',
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: false,
		hintText: 'Cannot be Bob the builder',
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const Small: Story = {
	args: {
		size: 'small',
	},
};

export const WithValueSmall: Story = {
	args: {
		...WithAValue.args,
		size: 'small',
	},
};

export const WithIconSmall: Story = {
	args: {
		...WithAValue.args,
		prefixIcon: CarIcon,
		size: 'small',
	},
};

export const LoadingSmall: Story = {
	args: {
		...WithAValue.args,
		isLoading: true,
		size: 'small',
	},
};
