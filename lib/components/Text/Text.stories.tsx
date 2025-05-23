import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, within } from 'storybook/test';

import {
	type SprinklesLegacyText,
	valueArrays,
} from '../../styles/sprinkles.css';
import { overdriveTokens } from '../../themes';

import { Text, type TextTags } from './Text';

const elements: TextTags[] = ['p', 'label', 'span'];
const Wrapper = ({ children }) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>{children}</div>
);

const meta: Meta<typeof Text> = {
	title: 'Primatives/Text',
	tags: ['polymorphic'],
	component: Text,
	decorators: [(Story) => <Wrapper>{Story()}</Wrapper>],
	args: {
		as: 'p',
		size: '4',
		strong: false,
		display: 'inline',
		fontWeight: 'normal',
		color: undefined,
		noWrap: undefined,
		breakWord: undefined,
		transform: undefined,
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Standard: Story = {
	args: {
		children: 'Help people better care for their cars',
		id: 'story-text',
		testId: 'test-text',
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const para = canvas.getAllByRole('paragraph')[0];

		await step('<Text /> renders content and id attributes', async () => {
			await expect(para).toHaveTextContent(args.children as string);
			await expect(para).toHaveAttribute('id', args.id);
			await expect(para).toHaveAttribute('data-test-id', args.testId);
		});
	},
};

const longText =
	'To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.';

export const AllTypes: Story = {
	args: {
		children: longText,
		display: 'block',
	},
	render: (args) => (
		<>
			{elements.map((as) => (
				<Text {...args} as={as} key={as} />
			))}
		</>
	),
};

export const AllSizes: Story = {
	args: {
		children: longText,
	},
	render: (args) => (
		<>
			{valueArrays.fontSizes.map((size) => (
				<Text key={size} {...args} size={size} />
			))}
		</>
	),
};

export const AllColours: Story = {
	args: {
		children: longText,
	},
	render: ({ children, ...args }) => (
		<>
			{Object.keys(overdriveTokens.typography.colour).map((color) => (
				<div key={color} style={{ marginBottom: 8 }}>
					<Text as="p" size="3" strong>
						{color}
					</Text>
					{/*@ts-expect-error wrong ref type */}
					<Text
						{...args}
						as="p"
						colour={color as SprinklesLegacyText['colour']}
					>
						{children}
					</Text>
				</div>
			))}
		</>
	),
};

export const WithLongUnspacedText: Story = {
	args: {
		as: 'label',
		breakWord: true,
		children:
			'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.',
	},
};
