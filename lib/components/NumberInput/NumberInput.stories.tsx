import { AccountEditIcon, CalendarIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import isChromatic from 'chromatic/isChromatic';
import React, { type ComponentProps } from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { DateInput } from '../DateInput';

import { NumberInput } from '.';

const defaultValue = isChromatic()
	? '42'
	: Math.round(Math.random() * 100).toString();
const defaultPlaceholder = 'How many?';

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

const meta: Meta<typeof NumberInput> = {
	title: 'Forms & Input Fields/Number Input',
	component: NumberInput,
	render: RenderTemplate,
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		disabled: false,
		name: 'number',
		isValid: false,
		isTouched: false,
		isLoading: false,
		isFocused: false,
		reserveHintSpace: false,
		hintText: '',
		notch: true,
		max: undefined,
		maxLength: undefined,
		min: undefined,
		preventMouseWheel: true,
		prefixIcon: undefined,
		onChange: fn(),
		onFocus: fn(),
		onBlur: fn(),
	},
	argTypes: {
		prefixIcon: {
			...argTypesExampleIcons,
			defaultValue: null,
			description: 'Input prefix Icon',
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
			...argTypesExampleIcons,
			defaultValue: null,
			description: 'Input suffix Icon',
		},
		maxLength: {
			defaultValue: null,
			description: 'Set the max length of the number',
			control: {
				type: 'number',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

/**
 * Additional examples of shared input field states and variants can be seen in
 * [Text Input](/docs/forms-input-fields-text-input--docs)
 */
export const Standard: Story = {
	args: {
		value: '',
	},
};

export const Valid: Story = {
	args: {
		isTouched: true,
		isValid: true,
	},
};

export const Invalid: Story = {
	args: {
		value: '545156543',
		isTouched: true,
		isValid: false,
		hintText: 'Please enter a valid number',
	},
};

export const LargeSize: Story = {
	args: {
		size: 'large',
	},
};

export const SmallSize: Story = {
	args: {
		size: 'small',
	},
};

/**
 * Both prefix and suffix icons
 */
export const WithIcons: Story = {
	args: {
		prefixIcon: CalendarIcon,
		suffixIcon: AccountEditIcon,
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
