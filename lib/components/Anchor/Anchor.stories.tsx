import type { Meta, StoryObj } from '@storybook/react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';

import { Anchor } from './Anchor';

const meta = {
	title: 'Primatives/Anchor',
	component: Anchor,
	args: {
		href: 'tel:07 5612 5347',
		//@ts-expect-error using custom argType
		icon: 'Phone',
		children: '07 5612 5347',
	},
	argTypes: {
		icon: {
			description: 'Input field Icon',
			...argTypesExampleIcons,
		},
	},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {};
