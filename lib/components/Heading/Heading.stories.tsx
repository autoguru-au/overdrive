import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
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
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const heading = canvas.getByRole('heading');

		await step('<Heading /> renders content', async () => {
			await expect(heading).toHaveTextContent(args.children as string);
		});
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
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('<Heading /> renders one of each level', async () => {
			headingTypeOptions.forEach(async (level) => {
				const heading = canvas.getByRole('heading', {
					level: Number(level?.charAt(1)),
				});
				await expect(heading).toBeInTheDocument();
			});
		});
	},
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
