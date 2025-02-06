import { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { boxArgTypes } from '../Box/argTypes';
import { Text } from '../Text';

import { Stack } from '.';

const spacingOptions: Record<string, ComponentProps<typeof Stack>['space']> = {
	none: 'none',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9',
};

const meta = {
	title: 'Layout/Stack',
	component: Stack,
	argTypes: {
		space: {
			options: spacingOptions,
			defaultValue: 1,
			control: {
				type: 'select',
			},
		},
		width: boxArgTypes.width,
		alignItems: boxArgTypes.alignItems,
	},
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof Stack>;

export const Standard: Story = {
	args: {
		space: '1',
		dividers: false,
		width: void 0,
		is: 'div',
	},
	render: (args) => (
		<Stack {...args}>
			<Text>Line 1</Text>
			<Text>Line 2</Text>
			<Text>Line 3</Text>
		</Stack>
	),
};

export const AsSection: Story = {
	args: {
		...Standard.args,
		is: 'section',
	},
	render: Standard.render,
};

export const WithDividers: Story = {
	args: {
		...Standard.args,
		is: 'div',
		dividers: true,
		space: '3',
	},
	render: Standard.render,
};

export const WithAlignment: Story = {
	args: {
		...Standard.args,
		is: 'div',
		dividers: true,
		space: '3',
		alignItems: 'center',
	},
	render: Standard.render,
};
