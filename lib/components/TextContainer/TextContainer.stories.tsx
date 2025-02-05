import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { TextContainer } from '.';

export default {
	title: 'Components/Text Container',
	component: TextContainer,
	decorators: [(story) => <div style={{ maxWidth: 512 }}>{story()}</div>],
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

const Template: StoryFn<typeof TextContainer> = (args) => (
	<TextContainer {...args} />
);

const standardProps: ComponentProps<typeof TextContainer> = {
	heading: <Heading>Choose a credit pack</Heading>,
	children: (
		<Text colour="muted" is="p">
			To get started, choose a credit pack that will used for Auto Top-Up.
		</Text>
	),
};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const withInteractionProps: ComponentProps<typeof TextContainer> = {
	heading: <Heading>Reviews</Heading>,
	children: (
		<Text colour="muted" is="p">
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let&apos;s investigate what the timing belt is, what it does, and
			why it costs so much to replace or repair.
		</Text>
	),
	action: (
		<Button variant="secondary" size="small">
			Edit
		</Button>
	),
};
export const WithInteraction = Template.bind(withInteractionProps);
WithInteraction.args = withInteractionProps;

const withInteractionOnlyProps: ComponentProps<typeof TextContainer> = {
	heading: void 0,
	children: (
		<Text colour="muted" is="p">
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let&apos;s investigate what the timing belt is, what it does, and
			why it costs so much to replace or repair.
		</Text>
	),
	action: (
		<Button variant="secondary" size="small">
			Edit
		</Button>
	),
};
export const WithInteractionOnly = Template.bind(withInteractionOnlyProps);
WithInteractionOnly.args = withInteractionOnlyProps;

const withLongTitleProps: ComponentProps<typeof TextContainer> = {
	heading: <Heading>Setup your personal settings</Heading>,
	children: (
		<Text colour="muted" is="p">
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let&apos;s investigate what the timing belt is, what it does, and
			why it costs so much to replace or repair.
		</Text>
	),
	action: (
		<Button variant="secondary" size="small">
			Edit
		</Button>
	),
};
export const WithLongTitle = Template.bind(withLongTitleProps);
WithLongTitle.args = withLongTitleProps;
