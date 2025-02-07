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
	args: {
		icon: undefined,
		size: 'small',
		display: 'block',
	},
	argTypes: {
		icon: {
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		size: {
			options: ['small', 'medium', 'large'],
		},
	},
} satisfies Meta<typeof Icon>;

export const Small: Story = {
	args: {
		icon: CalendarIcon,
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

export const Responsive: Story = {
	args: {
		icon: CalendarIcon,
		size: ['small', 'medium', 'large'],
	},
};
