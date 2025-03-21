import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
	title: 'Primatives/Switch',
	component: Switch,
	tags: ['updated'],
	args: {
		'aria-labelledby': undefined,
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

export const Uncontrolled: Story = {};

/**
 * Example of the switch properly associated with text content for accessibility compliance.
 */
export const WithLabel: Story = {
	render: (args) => (
		<Box display="flex" alignItems="center" style={{ gap: '0.75rem' }}>
			<Switch {...args} />
			<Text id={args['aria-labelledby']}>
				Text description for the switch
			</Text>
		</Box>
	),
	args: {
		'aria-labelledby': 'label-for-switch',
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
};
