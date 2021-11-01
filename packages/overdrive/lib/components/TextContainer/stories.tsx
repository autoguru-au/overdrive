import * as React from 'react';
import { ComponentProps } from 'react';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { TextContainer } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/TextContainer',
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
} as ComponentMeta<typeof TextContainer>;


const Template: ComponentStory<typeof TextContainer> = (args) => (
	<TextContainer {...args} />
);

const standardProps: ComponentProps<typeof TextContainer> = {
	heading: (
		<Heading>Choose a credit pack</Heading>
	),
	children: (
		<Text colour='muted' is='p'>
			To get started, choose a credit pack that will used for Auto Top-Up.
		</Text>
	),
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const withALotOfBodyProps: ComponentProps<typeof TextContainer> = {
	heading: (
		<Heading>Reviews</Heading>
	),
	children: (
		<Text colour='muted' is='p'>
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let's investigate what the timing belt is, what it does, and why it
			costs so much to replace or repair.
		</Text>
	),
};
export const withALotOfBody = Template.bind(withALotOfBodyProps);
withALotOfBody.args = withALotOfBodyProps;

const withInteractionProps: ComponentProps<typeof TextContainer> = {
	heading: (
		<Heading>Reviews</Heading>
	),
	children: (
		<Text colour='muted' is='p'>
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let's investigate what the timing belt is, what it does, and why it
			costs so much to replace or repair.
		</Text>
	),
	action: (
		<Button variant='secondary' size='small'>
			Edit
		</Button>
	),
};
export const withInteraction = Template.bind(withInteractionProps);
withInteraction.args = withInteractionProps;


const withInteractionOnlyProps: ComponentProps<typeof TextContainer> = {
	heading: void 0,
	children: (
		<Text colour='muted' is='p'>
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let's investigate what the timing belt is, what it does, and why it
			costs so much to replace or repair.
		</Text>
	),
	action: (
		<Button variant='secondary' size='small'>
			Edit
		</Button>
	),
};
export const withInteractionOnly = Template.bind(withInteractionOnlyProps);
withInteractionOnly.args = withInteractionOnlyProps;

const withLongTitleProps: ComponentProps<typeof TextContainer> = {
	heading: (
		<Heading>Setup your personal settings</Heading>
	),
	children: (
		<Text colour='muted' is='p'>
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let's investigate what the timing belt is, what it does, and why it
			costs so much to replace or repair.
		</Text>
	),
	action: (
		<Button variant='secondary' size='small'>
			Edit
		</Button>
	),
};
export const withLongTitle = Template.bind(withLongTitleProps);
withLongTitle.args = withLongTitleProps;

const withNoBodyTextProps: ComponentProps<typeof TextContainer> = {
	children: (
		<Heading>Choose a credit pack</Heading>
	),
};
export const withNoBodyText = Template.bind(withNoBodyTextProps);
withNoBodyText.args = withNoBodyTextProps;

const withNoTitleTextProps: ComponentProps<typeof TextContainer> = {
	children: (
		<Text colour='muted' is='p'>
			To get started, choose a credit pack that will used for Auto Top-Up.
		</Text>
	),
};
export const withNoTitleText = Template.bind(withNoTitleTextProps);
withNoTitleText.args = withNoTitleTextProps;
