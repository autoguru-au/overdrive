import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// import { boxArgTypes } from '../Box/argTypes';
import { Text } from '../Text';

import { Stack } from '.';

// const spacingOptions: Record<string, ComponentProps<typeof Stack>['space']> = {
// 	none: 'none',
// 	1: '1',
// 	2: '2',
// 	3: '3',
// 	4: '4',
// 	5: '5',
// 	6: '6',
// 	7: '7',
// 	8: '8',
// 	9: '9',
// };

const meta: Meta<typeof Stack> = {
	title: 'Layout/Stack',
	component: Stack,
	args: {
		space: '1',
	},
	render: (args) => (
		<Stack {...args}>
			<Text>Line 1</Text>
			<Text>Line 2</Text>
			<Text>Line 3</Text>
		</Stack>
	),
	// argTypes: {
	// 	space: {
	// 		options: Object.keys(spacingOptions),
	// 		defaultValue: 1,
	// 		control: {
	// 			type: 'select',
	// 		},
	// 	},
	// 	width: boxArgTypes.width,
	// 	alignItems: boxArgTypes.alignItems,
	// },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Standard: Story = {};

export const AsSection: Story = {
	args: {
		as: 'section',
		space: '2',
	},
};

/** Instance of a `<ul>` tag which automatically gets semantic children tags */
export const WithDividers: Story = {
	args: {
		as: 'ul',
		dividers: true,
		space: '3',
	},
};

/** Uses an array for `space` which means the spacing will be responsive */
export const WithAlignment: Story = {
	args: {
		alignItems: 'center',
		dividers: true,
		space: ['2', '4', '6'],
	},
};
