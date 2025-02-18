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
import React, { type ComponentProps } from 'react';

import { DateInput } from '../DateInput';

import { SelectInput } from '.';

const valueOptions = ['Kia', 'Toyota', 'BMW', 'Mitsubishi', 'Hyundai'];
const selectOptions = valueOptions.map((item) => (
	<option key={item} value={item}>
		{item}
	</option>
));

const defaultValue = valueOptions[4];
const defaultPlaceholder = 'What is the make of your car?';

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

const iconOptions = {
	CarIcon,
	CarMultipleIcon,
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
	CheckIcon,
};

const meta = {
	title: 'Forms & Input Fields/Select',
	component: SelectInput,
	parameters: { chromatic: {} },
	args: {
		value: null,
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
		attach: 'NONE',
		prefixIcon: void 0,
		onChange: action('onChange'),
		onFocus: action('onFocus'),
		onBlur: action('onBlur'),
		children: (
			<>
				<option disabled>Select an option</option>
				{selectOptions}
			</>
		),
	},
	argTypes: {
		value: {
			options: valueOptions,
			control: {
				type: 'select',
			},
		},
		attach: {
			description: 'Input attach',
			options: attachOptions,
			control: {
				type: 'select',
			},
		},
		prefixIcon: {
			description: 'Input prefix Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {
		hintText: 'Hint Text',
	},
};

export const NotchDisabled: Story = {
	args: {
		placeholder: defaultPlaceholder,
		notch: false,
	},
};

export const WithPrefixIcon: Story = {
	args: {
		prefixIcon: CarIcon,
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
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: false,
		hintText: 'Vehicle make is mandatory',
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
