import { CalendarIcon } from '@autoguru/icons';
import { Meta, StoryObj } from '@storybook/react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';

import { Icon } from './Icon';

type Story = StoryObj<typeof Icon>;

export default {
	title: 'Primatives/Icon',
	component: Icon,
	args: {
		icon: undefined,
		size: 'small',
		display: 'block',
	},
	argTypes: {
		icon: argTypesExampleIcons,
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
