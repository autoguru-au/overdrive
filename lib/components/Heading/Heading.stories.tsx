import { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { overdriveTokens } from '../../themes';

import { Heading, type HeadingProps } from '.';

const headingTypeOptions: Array<ComponentProps<typeof Heading>['as']> = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
];

const meta = {
	title: 'Primatives/Heading',
	component: Heading,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '350px', width: '100%' }}>
				<Story />
			</div>
		),
	],
	args: {
		children: 'I am a heading',
	},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Standard: Story = {
	args: {
		as: 'h1',
	},
};

export const AllTypes: Story = {
	render: (args) => (
		<>
			{headingTypeOptions.map((as) => (
				<Heading key={as} {...args} as={as} />
			))}
		</>
	),
};

export const AllColours: Story = {
	render: (args) => (
		<>
			{Object.keys(overdriveTokens.typography.colour).map((colour) => (
				<div key={colour} style={{ marginBottom: 8 }}>
					<Heading
						{...args}
						colour={colour as HeadingProps['colour']}
					/>
				</div>
			))}
		</>
	),
};
