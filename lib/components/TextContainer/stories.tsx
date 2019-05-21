import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, EButtonSize, EButtonVariant } from '../Button';
import { Heading, Text } from '../Typography';
import { TextContainer } from './TextContainer';

storiesOf('Components|Type/TextContainer', module)
	.addDecorator(story => <div style={{ maxWidth: 512 }}>{story()}</div>)
	.add('default', () => (
		<TextContainer>
			<Heading>Choose a credit pack</Heading>
			<Text>
				To get started, choose a credit pack that will used for Auto
				Top-Up.
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
			<Text>All of our reviews are from verified customers.</Text>
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
			<Text>All of our reviews are from verified customers.</Text>
		</TextContainer>
	))
	.add('with no body text', () => (
		<TextContainer>
			<Heading>Choose a credit pack</Heading>
		</TextContainer>
	))
	.add('with no title text', () => (
		<TextContainer>
			<Text>
				To get started, choose a credit pack that will used for Auto
				Top-Up.
			</Text>
		</TextContainer>
	));
