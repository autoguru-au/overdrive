import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	MagnifyIcon,
	PhoneIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

import { Anchor } from '.';

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
};

const meta = {
	title: 'Primatives/Anchor',
	component: Anchor,
	argTypes: {
		icon: {
			defaultValue: void 0,
			description: 'Input field Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		is: {
			control: {
				disable: true,
			},
		},
		children: {
			defaultValue: '07 5612 5347',
			control: {
				type: 'string',
			},
		},
	},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {
		href: 'tel:07 5612 5347',
		children: '07 5612 5347',
	},
};

export const WithIcon: Story = {
	args: {
		...Standard.args,
		icon: PhoneIcon,
	},
};

export const WithButton: Story = {
	args: {
		...WithIcon.args,
		is: Button,
	},
};
