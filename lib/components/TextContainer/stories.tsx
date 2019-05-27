import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, EButtonSize, EButtonVariant } from '../Button';
import { Heading, Text } from '../Typography';
import { TextContainer } from './TextContainer';

storiesOf('Components|TextContainer', module)
	.addDecorator(story => <div style={{ maxWidth: 512 }}>{story()}</div>)
	.add('default', () => (
		<TextContainer>
			<Heading>Choose a credit pack</Heading>
			<Text is="p" muted={true}>
				To get started, choose a credit pack that will used for Auto
				Top-Up.
			</Text>
		</TextContainer>
	))
	.add('with a lot of body', () => (
		<TextContainer>
			<Heading>Reviews</Heading>
			<Text is="p" muted={true}>
				To avoid you coming to a halt in the middle of the road, because
				of a banging, crash of pistons and valves fighting with each
				other, let's investigate what the timing belt is, what it does,
				and why it costs so much to replace or repair.
			</Text>
		</TextContainer>
	))
	.add('with interaction', () => (
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
			<Text is="p" muted={true}>
				All of our reviews are from verified customers.
			</Text>
		</TextContainer>
	))
	.add('with long title', () => (
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
			<Text is="p" muted={true}>
				All of our reviews are from verified customers.
			</Text>
		</TextContainer>
	))
	.add('with no body text', () => (
		<TextContainer>
			<Heading>Choose a credit pack</Heading>
		</TextContainer>
	))
	.add('with no title text', () => (
		<TextContainer>
			<Text is="p" muted={true}>
				To get started, choose a credit pack that will used for Auto
				Top-Up.
			</Text>
		</TextContainer>
	));
