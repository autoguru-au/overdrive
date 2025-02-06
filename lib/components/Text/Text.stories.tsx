import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import React, { ComponentProps } from 'react';

import { Text } from '.';

const textTypeOptions: Array<ComponentProps<typeof Text>['is']> = ['span', 'p'];
const noWrapOptions: Array<ComponentProps<typeof Text>['noWrap']> = [
	false,
	true,
];
const wordBreakOptions: Array<ComponentProps<typeof Text>['breakWord']> = [
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
const sizeScale: Array<ComponentProps<typeof Text>['size']> = [
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
const alignOptions: Array<ComponentProps<typeof Text>['align']> = [
	'left',
	'center',
	'right',
];
const colourOptions: Array<ComponentProps<typeof Text>['colour']> = [
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

const meta = {
	title: 'Primatives/Text',
	//component: Text, Breaks the docs when enabled!
	decorators: [],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

const sharedArgTypes: ArgTypes<Partial<ComponentProps<typeof Text>>> = {
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
	fontWeight: {
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
};

const colourArgTypes: ArgTypes<Partial<ComponentProps<typeof Text>>> = {
	colour: {
		options: colourOptions,
		defaultValue: void 0,
		control: {
			type: 'select',
		},
	},
};

const argTypes: ArgTypes<Partial<ComponentProps<typeof Text>>> = {
	...sharedArgTypes,
	...colourArgTypes,
	is: {
		options: textTypeOptions,
		defaultValue: 'span',
		table: {
			type: { summary: 'text' },
			defaultValue: { summary: 'span' },
		},
		description: 'HTML text tag to be used',
		control: {
			type: 'select',
		},
	},
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>{children}</div>
);

export const Standard: Story = {
	args: {
		is: 'span',
		children: 'Help people better care for their cars',
	},
	argTypes,
	render: (args) => (
		<Wrapper>
			<Text {...args} />
		</Wrapper>
	),
};

const longText =
	'To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.';

export const AllTypes: Story = {
	args: {
		children: longText,
	},
	argTypes: { ...sharedArgTypes, ...colourArgTypes },
	render: (args) => (
		<Wrapper>
			{textTypeOptions.map((is) => (
				<Text key={is} {...args} is={is} />
			))}
		</Wrapper>
	),
};

export const AllSizes: Story = {
	args: {
		children: longText,
	},
	argTypes,
	render: (args) => (
		<Wrapper>
			{sizeScale.map((size) => (
				<Text key={size} {...args} size={size} />
			))}
		</Wrapper>
	),
};

export const AllColours: Story = {
	args: {
		children: longText,
	},
	argTypes,
	render: (args) => (
		<Wrapper>
			{colourOptions.map((colour, index) => (
				<div key={index} style={{ marginBottom: 8 }}>
					<Text key={index} {...args} colour={colour} />
				</div>
			))}
		</Wrapper>
	),
};

export const WithLongUnspacedText: Story = {
	args: {
		breakWord: true,
		children:
			'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.',
	},
	argTypes,
	render: (args) => (
		<Wrapper>
			<Text {...args} />
		</Wrapper>
	),
};
