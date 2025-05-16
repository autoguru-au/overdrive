import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import { TextContainer } from './TextContainer';

const meta = {
	title: 'Components/Text Container',
	component: TextContainer,
	args: {
		children: (
			<Text colour="muted" as="p">
				To avoid you coming to a halt in the middle of the road, because
				of a banging, crash of pistons and valves fighting with each
				other, let&apos;s investigate what the timing belt is, what it
				does, and why it costs so much to replace or repair.
			</Text>
		),
	},
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
		action: {
			control: {
				disable: true,
			},
		},
		heading: {
			control: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof TextContainer>;

export default meta;
type Story = StoryObj<typeof TextContainer>;

export const Standard: Story = {
	args: {
		heading: <Heading>Choose a credit pack</Heading>,
		children: (
			<Text colour="muted" as="p">
				To get started, choose a credit pack that will used for Auto
				Top-Up.
			</Text>
		),
	},
};

export const WithInteraction: Story = {
	args: {
		heading: <Heading>Reviews</Heading>,
		action: (
			<Button variant="secondary" size="small">
				Edit
			</Button>
		),
	},
};

export const WithInteractionOnly: Story = {
	args: {
		heading: void 0,
		action: (
			<Button variant="secondary" size="small">
				Edit
			</Button>
		),
	},
};

export const WithLongTitle: Story = {
	args: {
		heading: <Heading>Setup your personal settings</Heading>,
		action: (
			<Button variant="secondary" size="small">
				Edit
			</Button>
		),
	},
};
