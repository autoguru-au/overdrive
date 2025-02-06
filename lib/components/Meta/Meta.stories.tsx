import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { Meta as ComponentMeta, StoryObj } from '@storybook/react';

import { Meta } from '.';

const iconOptions = {
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
};

export default {
	title: 'Components/Meta',
	component: Meta,
	argTypes: {
		icon: {
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
	},
} satisfies ComponentMeta<typeof Meta>;

type Story = StoryObj<typeof Meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		icon: CalendarIcon,
		label: 'Hello World',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		icon: CalendarIcon,
		label: 'Hello World',
	},
};
