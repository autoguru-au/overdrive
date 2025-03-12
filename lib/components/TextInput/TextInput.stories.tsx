import { AccountEditIcon, EmailIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { boxArgTypes } from '../Box/argTypes';
import { DateInput } from '../DateInput';

import { TextInput } from '.';

const defaultValue = 'user@autoguru.com.au';
const defaultPlaceholder = 'Email address';

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
			...argTypesExampleIcons,
			defaultValue: null,
			description: 'Input prefix Icon',
		},
		suffixIcon: {
			...argTypesExampleIcons,
			defaultValue: null,
			description: 'Input suffix Icon',
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

export const Filled: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
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
		value: 'user@autogurucomau',
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: false,
		hintText: 'Enter a valid email address',
	},
};

export const Disabled: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		disabled: true,
	},
};

export const SmallSize: Story = {
	args: {
		...Filled.args,
		prefixIcon: EmailIcon,
		size: 'small',
	},
};

export const WithHintText: Story = {
	args: {
		hintText: 'Hint Text',
		placeholder: defaultPlaceholder,
	},
};

export const WithoutNotchLabel: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		notch: false,
	},
};

/**
 * Both prefix and suffix icons
 */
export const WithIcons: Story = {
	args: {
		prefixIcon: EmailIcon,
		suffixIcon: AccountEditIcon,
	},
};

export const Loading: Story = {
	args: {
		value: defaultValue.slice(0, -5),
		isLoading: true,
	},
};

/**
 * Attached border option set to all
 */
export const AttachedAll: Story = {
	args: {
		attach: 'ALL',
	},
};

/**
 * Merged border option set all
 */
export const MergedAll: Story = {
	args: {
		borderMerged: 'ALL',
	},
};
