import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	FourByFourIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { DateInput } from '../DateInput';

import { ColourInput } from '.';

const defaultColour = '#ec4040';
const iconOptions = {
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
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

const meta = {
	title: 'Forms & Input Fields/Colour Input',
	component: ColourInput,
	parameters: { chromatic: {} },
	argTypes: {
		value: {
			control: {
				type: 'color',
			},
		},
		attach: {
			defaultValue: 'NONE',
			description: 'Input attach',
			options: attachOptions,
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
	},
} satisfies Meta<typeof ColourInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const sharedProps: ComponentProps<typeof ColourInput> = {
	disabled: false,
	name: 'date',
	placeholder: 'Your favourite colour',
	isValid: false,
	isTouched: false,
	isLoading: false,
	isFocused: false,
	reserveHintSpace: false,
	hintText: '',
	notch: true,
	suffixIcon: void 0,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

export const Standard: Story = {
	args: {
		...sharedProps,
	},
};

export const WithAValue: Story = {
	args: {
		...sharedProps,
		value: defaultColour,
		placeholder: 'What is your favourite car colour?',
	},
};

export const WithIcon: Story = {
	args: {
		...sharedProps,
		suffixIcon: FourByFourIcon,
	},
};

export const WithIconSmall: Story = {
	args: {
		...sharedProps,
		value: defaultColour,
		placeholder: 'What is your favourite car colour?',
		suffixIcon: CarIcon,
		size: 'small',
	},
};
