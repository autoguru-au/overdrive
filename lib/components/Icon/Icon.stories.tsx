import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	MagnifyIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';

type Story = StoryObj<typeof Icon>;

const iconOptions = {
	MagnifyIcon,
	CarIcon,
	CarMultipleIcon,
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
	CheckIcon,
	empty: null,
};

export default {
	title: 'Primatives/Icon',
	component: Icon,
	decorators: [],
	argTypes: {
		icon: {
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof Icon>;

export const Standard: Story = {
	args: {
		icon: CalendarIcon,
	},
};

export const Small: Story = {
	args: {
		icon: CalendarIcon,
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		icon: CalendarIcon,
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		icon: CalendarIcon,
		size: 'large',
	},
};
