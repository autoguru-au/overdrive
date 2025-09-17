import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import { fn } from 'storybook/test';

import { DateInput } from './DateInput';

const formatDate = (date: Date = new Date()) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const today = isChromatic() ? new Date(2025, 6, 1) : new Date();
const todayStr = formatDate(today);
const todayPlus10 = new Date(today);
todayPlus10.setDate(today.getDate() + 10);
const minDateStr = formatDate(today);
const maxDateStr = formatDate(todayPlus10);

const meta: Meta<typeof DateInput> = {
	title: 'Forms & Input Fields/Date Input',
	tags: ['updated'],
	component: DateInput,
	args: {
		placeholder: 'What is your DOB?',
		name: 'date-input',
		size: 'medium',
		disabled: false,
		isValid: false,
		isTouched: false,
		isLoading: false,
		isFocused: false,
		reserveHintSpace: false,
		hintText: '',
		notch: true,
		prefixIcon: undefined,
		onChange: fn(),
		onFocus: fn(),
		onBlur: fn(),
	},
	argTypes: {
		attach: {
			defaultValue: 'NONE',
			description: 'Input attach',
			options: {
				// @ts-expect-error NONE does not exist on types
				NONE: 'NONE',
				TOP: 'TOP',
				RIGHT: 'RIGHT',
				LEFT: 'LEFT',
				BOTTOM: 'BOTTOM',
				ALL: 'ALL',
			},
			control: {
				type: 'select',
			},
		},
		prefixIcon: {
			defaultValue: null,
			description: 'Input prefix Icon',
			options: {
				// @ts-expect-error should be typed
				CalendarIcon,
				AccountEditIcon,
				AlertCircleIcon,
				CarMultipleIcon,
				CurrencyUsdIcon,
				PlusIcon,
				StarIcon,
			},
			control: {
				type: 'select',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Additional examples of shared input field states and variants can be seen in
 * [Text Input](/docs/forms-input-fields-text-input--docs)
 */
export const Standard: Story = {
	args: {
		testId: 'demo-date-input',
	},
};

export const Invalid: Story = {
	args: {
		value: '2050-10-13',
		isTouched: true,
		isValid: false,
		hintText: 'Invalid date of birth',
	},
};

export const Disabled: Story = {
	args: {
		value: todayStr,
		disabled: true,
	},
};

export const LargeSize: Story = {
	args: {
		value: todayStr,
		size: 'large',
	},
};

/**
 * Demonstrates min and max dates that configure the date pickers
 */
export const SmallSize: Story = {
	args: {
		value: todayStr,
		size: 'small',
		min: minDateStr,
		max: maxDateStr,
	},
};

/**
 * Both prefix and suffix icons
 */
export const WithIcons: Story = {
	args: {
		prefixIcon: StarIcon,
		suffixIcon: AccountEditIcon,
	},
};
