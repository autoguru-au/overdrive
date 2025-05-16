import { PhoneIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { Button } from '../Button/Button';

import { Anchor } from './Anchor';

const meta = {
	title: 'Primatives/Anchor',
	component: Anchor,
	argTypes: {
		icon: {
			defaultValue: null,
			description: 'Input field Icon',
			...argTypesExampleIcons,
		},
		is: {
			control: {
				disable: true,
			},
		},
		children: {
			defaultValue: '07 5612 5347',
			control: {
				type: 'text',
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
