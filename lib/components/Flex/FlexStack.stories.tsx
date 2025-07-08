import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import {
	sprinkles,
	type Sprinkles,
	valueArrays,
} from '../../styles/sprinkles.css';

import { FlexStack } from './FlexStack';

const itemSprinkles = {
	padding: '4',
	borderStyle: 'solid',
	borderWidth: '1',
	borderColor: 'hard',
	textAlign: 'center',
} satisfies Sprinkles;

const items = (number: number = 5) =>
	// eslint-disable-next-line unicorn/no-new-array
	[...new Array(number).keys()].map((n) => (
		<div
			className={sprinkles(itemSprinkles)}
			style={{ minWidth: '100px' }}
			key={n}
		>
			{n + 1}
		</div>
	));

const meta = {
	title: 'Layout/Flex/Flex Stack',
	tags: ['new', 'skip-themes'],
	component: FlexStack,
	args: {
		as: undefined,
		gap: '6',
		start: false,
		center: false,
		end: false,
		reverse: false,
		align: undefined,
		justify: undefined,
	},
	argTypes: {
		as: {
			options: ['div', 'span', 'ul', 'section', 'p'],
		},
		align: {
			options: valueArrays.alignItems,
		},
		justify: {
			options: valueArrays.justifyContent,
		},
		gap: {
			options: valueArrays.spaceWithNone,
		},
	},
} satisfies Meta<typeof FlexStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	render: (args) => (
		<FlexStack {...args} data-custom-attr="flex-stack-story">
			{items()}
		</FlexStack>
	),
};

/**
 * Responsive properties that change based on viewport size
 */
export const Responsive: Story = {
	...Standard,
	args: {
		align: ['start', 'center', 'end'],
		gap: ['2', '4', '6'],
	},
};
