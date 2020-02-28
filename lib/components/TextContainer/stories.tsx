import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, EButtonSize, EButtonVariant } from '../Button';
import { Heading, Text } from '../Typography';
import { TextContainer } from './TextContainer';

storiesOf('Components|TextContainer', module)
	.addDecorator(story => <div style={{ maxWidth: 512 }}>{story()}</div>)
	.add('Standard', () => (
		<TextContainer>
			<Heading>Choose a credit pack</Heading>
			<Text muted is="p">
				To get started, choose a credit pack that will used for Auto
				Top-Up.
			</Text>
		</TextContainer>
	))
	.add('With A Lot Of Body', () => (
		<TextContainer>
			<Heading>Reviews</Heading>
			<Text muted is="p">
				To avoid you coming to a halt in the middle of the road, because
				of a banging, crash of pistons and valves fighting with each
				other, let's investigate what the timing belt is, what it does,
				and why it costs so much to replace or repair.
			</Text>
		</TextContainer>
	))
	.add('With Interaction', () => (
		<TextContainer
			heading={
				<>
					<Heading>Reviews</Heading>
					<Button
						variant={EButtonVariant.Secondary}
						size={EButtonSize.Small}>
						Edit
					</Button>
				</>
			}>
			<Text muted is="p">
				All of our reviews are from verified customers.
			</Text>
		</TextContainer>
	))
	.add('With Long Title', () => (
		<TextContainer
			heading={
				<>
					<Heading>Setup your personal settings</Heading>
					<Button
						variant={EButtonVariant.Secondary}
						size={EButtonSize.Small}>
						Edit
					</Button>
				</>
			}>
			<Text muted is="p">
				All of our reviews are from verified customers.
			</Text>
		</TextContainer>
	))
	.add('With No Body Text', () => (
		<TextContainer>
			<Heading>Choose a credit pack</Heading>
		</TextContainer>
	))
	.add('With No Title Text', () => (
		<TextContainer>
			<Text muted is="p">
				To get started, choose a credit pack that will used for Auto
				Top-Up.
			</Text>
		</TextContainer>
	));
