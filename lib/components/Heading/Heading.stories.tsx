import { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { Text } from '../Text';

import { Heading } from '.';

const noWrapOptions: Array<ComponentProps<typeof Heading>['noWrap']> = [
	false,
	true,
];
const wordBreakOptions: Array<ComponentProps<typeof Text>['wordBreak']> = [
	false,
	true,
];
const transformOptions: Array<ComponentProps<typeof Text>['transform']> = [
	'uppercase',
	'capitalize',
	undefined,
];
const weightOptions: Array<ComponentProps<typeof Text>['fontWeight']> = [
	'normal',
	'semiBold',
	'bold',
];
const headingTypeOptions: Array<ComponentProps<typeof Heading>['is']> = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
];
const sizeScale: Array<ComponentProps<typeof Heading>['size']> = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
];
const alignOptions: Array<ComponentProps<typeof Heading>['align']> = [
	'left',
	'center',
	'right',
];
const colourOptions: Array<ComponentProps<typeof Heading>['colour']> = [
	'dark',
	'light',
	'neutral',
	'primary',
	'secondary',
	'white',
	'information',
	'link',
	'success',
	'danger',
	'warning',
	'shine',
];

export default {
	title: 'Primatives/Heading',
	component: Heading, //Breaks the docs when enabled!
	argTypes: {
		noWrap: {
			options: noWrapOptions,
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		breakWord: {
			options: wordBreakOptions,
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		transform: {
			options: transformOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		weight: {
			options: weightOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		size: {
			options: sizeScale,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
		},
		align: {
			options: alignOptions,
			defaultValue: 'left',
			control: {
				type: 'select',
			},
		},
		colour: {
			options: colourOptions,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
		},
		is: {
			options: headingTypeOptions,
			defaultValue: 'h1',
			table: {
				type: { summary: 'heading' },
				defaultValue: 'h1',
			},
			description: 'HTML heading tag to be used',
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Standard: Story = {
	args: {
		is: 'h1',
		children: 'I am a heading',
	},
	render: (args) => (
		<div style={{ maxWidth: '350px', width: '100%' }}>
			<Heading {...args} />
		</div>
	),
};

export const AllTypes: Story = {
	args: {
		children: 'I am a heading',
	},
	render: (args) => (
		<div style={{ maxWidth: '350px', width: '100%' }}>
			{headingTypeOptions.map((is) => (
				<Heading key={is} {...args} is={is} />
			))}
		</div>
	),
};

export const AllColours: Story = {
	args: {
		children: 'I am a heading',
	},
	render: (args) => (
		<div style={{ maxWidth: '350px', width: '100%' }}>
			{colourOptions.map((colour, index) => (
				<div key={index} style={{ marginBottom: 8 }}>
					<Heading {...args} colour={colour} />
				</div>
			))}
		</div>
	),
};
