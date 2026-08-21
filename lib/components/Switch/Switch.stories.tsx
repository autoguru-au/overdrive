import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';

import { Box } from '../Box/Box';
import { FlexInline } from '../Flex/FlexInline';
import { Stack } from '../Stack';
import { Text } from '../Text/Text';

import { Switch } from './Switch';
import { storyLabel } from './Switch.css';

const meta = {
	title: 'Forms & Input Fields/Switch',
	component: Switch,
	tags: [],
	args: {
		name: 'switch',
		value: 'yes',
		isSelected: undefined,
		isDisabled: undefined,
		size: 'standard',
		onChange: fn(),
	},
	argTypes: {
		children: { control: false },
		size: {
			control: 'select',
			options: ['standard', 'large', 'small'],
		},
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
} satisfies Meta<typeof Switch>;

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

/**
 * The two sizes DS-2026 publishes, next to the pre-2026 control.
 *
 * `standard` (46x24) is the default and unchanged. `large` (38x20) and `small`
 * (30x16) take their track height from the `5` and `4` space tokens; the width
 * falls out of the existing `2 x height - 2px` formula, and the handle carries
 * the `z2` shadow.
 */
export const Sizes: Story = {
	render: (args) => (
		<Stack space="3">
			{(['standard', 'large', 'small'] as const).map((size) => (
				<FlexInline key={size} gap="3" justify="center">
					<Switch {...args} size={size} aria-label={`${size} off`} />
					<Switch
						{...args}
						size={size}
						isSelected
						aria-label={`${size} on`}
					/>
					<Text size="2">{size}</Text>
				</FlexInline>
			))}
		</Stack>
	),
};
