import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

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

const Template: StoryFn<typeof Inline> = (args) => (
	<Inline {...args}>
		<Text>Mazda</Text>
		<Text>CX3</Text>
		<Text>Petrol</Text>
		<Text>2020</Text>
	</Inline>
);

const DiffSizeTemplate: StoryFn<typeof Inline> = (args) => (
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
);

const standardProps: ComponentProps<typeof Inline> = {};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const dividersProps: ComponentProps<typeof Inline> = {
	dividers: true,
};
export const Dividers = Template.bind(dividersProps);
Dividers.args = dividersProps;

const customDividersProps: ComponentProps<typeof Inline> = {
	dividers: (
		<div
			style={{
				backgroundColor: 'red',
				width: '6px',
				height: '6px',
			}}
		/>
	),
};
export const CustomDividers = Template.bind(customDividersProps);
CustomDividers.args = customDividersProps;

const differentSizeItemsProps: ComponentProps<typeof Inline> = {
	dividers: true,
};
export const DifferentSizeItems = DiffSizeTemplate.bind(
	differentSizeItemsProps,
);
DifferentSizeItems.args = differentSizeItemsProps;

const withFullWidthProps: ComponentProps<typeof Inline> = {
	width: 'full',
	alignX: 'spaceBetween',
};
export const WithFullWidth = DiffSizeTemplate.bind(withFullWidthProps);
WithFullWidth.args = withFullWidthProps;
