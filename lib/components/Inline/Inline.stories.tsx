import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { scaleOptions } from '../Box/argTypes';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { Inline } from '.';

export default {
	title: 'Layout/Inline',
	component: Inline,
	argTypes: {
		alignY: {
			options: ['flexStart', 'center', 'flexEnd'],
			control: {
				type: 'select',
			},
		},
		alignX: {
			options: ['flexStart', 'center', 'flexEnd', 'spaceBetween'],
			control: {
				type: 'select',
			},
		},
		space: {
			options: scaleOptions,
			control: {
				type: 'select',
			},
		},
		dividers: {
			control: {
				type: 'boolean',
			},
		},
	},
} satisfies Meta<typeof Inline>;

type Story = StoryObj<typeof Inline>;

export const Standard: Story = {
	args: {},
	render: () => (
		<Inline>
			<Text>Mazda</Text>
			<Text>CX3</Text>
			<Text>Petrol</Text>
			<Text>2020</Text>
		</Inline>
	),
};

export const Dividers: Story = {
	args: {
		dividers: true,
	},
	render: (args) => (
		<Inline {...args}>
			<Text>Mazda</Text>
			<Text>CX3</Text>
			<Text>Petrol</Text>
			<Text>2020</Text>
		</Inline>
	),
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
	render: (args) => (
		<Inline {...args}>
			<Text>Mazda</Text>
			<Text>CX3</Text>
			<Text>Petrol</Text>
			<Text>2020</Text>
		</Inline>
	),
};

export const DifferentSizeItems: Story = {
	args: {
		dividers: true,
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

export const WithFullWidth: Story = {
	args: {
		width: 'full',
		alignX: 'spaceBetween',
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
