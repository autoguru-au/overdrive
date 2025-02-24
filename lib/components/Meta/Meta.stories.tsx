import { CalendarIcon } from '@autoguru/icons';
import { Meta as ComponentMeta, StoryObj } from '@storybook/react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';

import { Meta } from '.';

export default {
	title: 'Components/Meta',
	component: Meta,
	argTypes: {
		icon: argTypesExampleIcons,
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
