import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { scaleOptions } from '../Box/argTypes';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { Inline } from '.';

export default {
	title: 'Foundation/Layout/Inline',
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
} as ComponentMeta<typeof Inline>;

const Template: ComponentStory<typeof Inline> = (args) => (
	<Inline {...args}>
		<Text>Mazda</Text>
		<Text>CX3</Text>
		<Text>Petrol</Text>
		<Text>2020</Text>
	</Inline>
);

const DiffSizeTemplate: ComponentStory<typeof Inline> = (args) => (
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
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const dividersProps: ComponentProps<typeof Inline> = {
	dividers: true,
};
export const dividers = Template.bind(dividersProps);
dividers.args = dividersProps;

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
export const customDividers = Template.bind(customDividersProps);
customDividers.args = customDividersProps;

const differentSizeItemsProps: ComponentProps<typeof Inline> = {
	dividers: true,
};
export const differentSizeItems = DiffSizeTemplate.bind(
	differentSizeItemsProps,
);
differentSizeItems.args = differentSizeItemsProps;

const withFullWidthProps: ComponentProps<typeof Inline> = {
	width: 'full',
	alignX: 'spaceBetween',
};
export const withFullWidth = DiffSizeTemplate.bind(
	withFullWidthProps,
);
withFullWidth.args = withFullWidthProps;
