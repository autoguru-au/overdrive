import { CalendarIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';

import { Icon } from './Icon';

type Story = StoryObj<typeof Icon>;

export default {
	title: 'Primitives/Icon',
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

export const NullIcon: Story = {
	args: {
		icon: null,
		size: 'medium',
	},
};

export const UndefinedIcon: Story = {
	args: {
		icon: undefined,
		size: 'medium',
	},
};
