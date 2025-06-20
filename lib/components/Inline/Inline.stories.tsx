import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { valueArrays } from '../../styles/sprinkles.css';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { Inline } from './Inline';

const meta = {
	title: 'Layout/Inline',
	tags: [],
	component: Inline,
	render: (args) => (
		<Inline {...args}>
			<Text>Mazda</Text>
			<Text>CX3</Text>
			<Text>Petrol</Text>
			<Text>2020</Text>
		</Inline>
	),
	args: {
		as: undefined,
		dividers: false,
		space: '2',
		noWrap: false,
		width: undefined,
		alignX: undefined,
		alignY: 'center',
	},
	argTypes: {
		space: {
			options: valueArrays.spaceWithNone,
		},
		width: {
			options: valueArrays.width,
		},
		alignX: {
			options: valueArrays.justifyContent,
		},
		alignY: {
			options: valueArrays.alignItems,
		},
	},
} satisfies Meta<typeof Inline>;

export default meta;

type Story = StoryObj<typeof Inline>;

export const Standard: Story = {};

export const Dividers: Story = {
	args: {
		dividers: true,
	},
};

export const CustomDividers: Story = {
	args: {
		dividers: (
			<div
				style={{
					backgroundColor: 'red',
					width: '6px',
					height: '6px',
				}}
			/>
		),
	},
};

export const WithFullWidth: Story = {
	args: {
		width: 'full',
		alignX: 'space-between',
	},
	render: (args) => (
		<Stack>
			<Inline {...args}>
				<Text>Mazda</Text>
				<Text>CX3</Text>
				<Text>Petrol</Text>
				<Text>2020</Text>
				<Button>Buy</Button>
			</Inline>
			<Inline {...args}>
				<Text>Mazda</Text>
				<Text>CX3</Text>
				<Text>Petrol</Text>
				<Text>2020</Text>
				<Button>Buy</Button>
			</Inline>
			<Inline {...args}>
				<Text>Mazda</Text>
				<Text>CX3</Text>
				<Text>Petrol</Text>
				<Text>2020</Text>
				<Button>Buy</Button>
			</Inline>
		</Stack>
	),
};
