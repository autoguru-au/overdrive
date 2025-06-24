import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, within } from 'storybook/test';

import { HEADING_TAGS } from '../../styles/typography';
import { overdriveTokens } from '../../themes';

import { Heading, type HeadingProps } from './Heading';

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
		children:
			'This heading has used a few small words, to demo balanced wrapping',
		id: 'story-heading',
		testId: 'test-heading',
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const heading = canvas.getAllByRole('heading', { level: 1 })[0];

		await step('<Heading /> renders content and ids', async () => {
			await expect(heading).toHaveTextContent(args.children as string);
			await expect(heading).toHaveAttribute('id', args.id);
			await expect(heading).toHaveAttribute(
				'data-testid',
				'test-heading',
			);
		});
	},
};

export const AllTypes: Story = {
	render: (args) => (
		<>
			{HEADING_TAGS.map((as) => (
				<Heading key={as} {...args} as={as} />
			))}
		</>
	),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('<Heading /> renders one of each level', async () => {
			HEADING_TAGS.forEach(async (level) => {
				const heading = canvas.getAllByRole('heading', {
					level: Number(level?.charAt(1)),
				})[0];
				await expect(heading).toBeInTheDocument();
			});
		});
	},
};

export const AllColours: Story = {
	render: (args) => (
		<>
			{Object.keys(overdriveTokens.typography.colour).map((colour) => (
				<Heading
					{...args}
					colour={colour as HeadingProps['colour']}
					key={colour}
					my="2"
				/>
			))}
		</>
	),
};
