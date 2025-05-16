import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { Switch } from './Switch';
import { storyLabel } from './Switch.css';

const meta: Meta<typeof Switch> = {
	title: 'Primatives/Switch',
	component: Switch,
	tags: ['updated'],
	args: {
		name: 'switch',
		value: 'yes',
		isSelected: undefined,
		isDisabled: undefined,
		onChange: fn(),
	},
	argTypes: {
		isSelected: {
			control: 'boolean',
		},
		disabled: {
			control: false,
		},
		toggled: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

/** Passes in the text label and styles for the layout */
export const Uncontrolled: Story = {
	args: {
		children: <Text>Text description for the switch</Text>,
		className: storyLabel,
	},
};

/** Custom label using `id` and `htmlFor` */
export const WithLabel: Story = {
	render: (args) => (
		<Box display="flex" alignItems="center" style={{ gap: '0.75rem' }}>
			<Box as="label" htmlFor={args['id']}>
				Text description for the switch
			</Box>
			<Switch {...args} />
		</Box>
	),
	args: {
		id: 'test-switch-id',
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
};
