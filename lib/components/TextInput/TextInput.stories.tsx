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
import { ComponentProps } from 'react';

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
	parameters: { chromatic: { disableSnapshot: true } },
};

export const WithHintText: Story = {
	args: {
		hintText: 'Hint Text',
		placeholder: defaultPlaceholder,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const NotchDisabled: Story = {
	args: {
		placeholder: defaultPlaceholder,
		notch: false,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const NotchDisabledWithValue: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		notch: false,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const WithPrefixIcon: Story = {
	args: {
		prefixIcon: CalendarIcon,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const WithSuffixIcon: Story = {
	args: {
		suffixIcon: AccountEditIcon,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const WithBothIcons: Story = {
	args: {
		prefixIcon: CalendarIcon,
		suffixIcon: AccountEditIcon,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const AttachedLeft: Story = {
	args: {
		attach: 'LEFT',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const AttachedTop: Story = {
	args: {
		attach: 'TOP',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const AttachedRight: Story = {
	args: {
		attach: 'RIGHT',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const AttachedBottom: Story = {
	args: {
		attach: 'BOTTOM',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const AttachedAll: Story = {
	args: {
		attach: 'ALL',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const MergedLeft: Story = {
	args: {
		borderMerged: 'LEFT',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const MergedTop: Story = {
	args: {
		borderMerged: 'TOP',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const MergedRight: Story = {
	args: {
		borderMerged: 'RIGHT',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const MergedBottom: Story = {
	args: {
		borderMerged: 'BOTTOM',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const MergedAll: Story = {
	args: {
		borderMerged: 'ALL',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const Disabled: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		disabled: true,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const Valid: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: true,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const Invalid: Story = {
	args: {
		value: 'Bob the builder',
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: false,
		hintText: 'Cannot be Bob the builder',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const Small: Story = {
	args: {
		size: 'small',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const WithValueSmall: Story = {
	args: {
		...WithAValue.args,
		size: 'small',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const WithIconSmall: Story = {
	args: {
		...WithAValue.args,
		prefixIcon: CarIcon,
		size: 'small',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};

export const LoadingSmall: Story = {
	args: {
		...WithAValue.args,
		isLoading: true,
		size: 'small',
	},
	parameters: { chromatic: { disableSnapshot: true } },
};
