import * as React from 'react';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { TextContainer } from '.';

export default {
	title: 'Components|TextContainer',
	component: TextContainer,
	decorators: [(story) => <div style={{ maxWidth: 512 }}>{story()}</div>],
};

export const standard = () => (
	<TextContainer heading={<Heading>Choose a credit pack</Heading>}>
		<Text muted is="p">
			To get started, choose a credit pack that will used for Auto Top-Up.
		</Text>
	</TextContainer>
);

export const withALotOfBody = () => (
	<TextContainer heading={<Heading>Reviews</Heading>}>
		<Text muted is="p">
			To avoid you coming to a halt in the middle of the road, because of
			a banging, crash of pistons and valves fighting with each other,
			let's investigate what the timing belt is, what it does, and why it
			costs so much to replace or repair.
		</Text>
	</TextContainer>
);

export const withInteraction = () => (
	<TextContainer
		heading={<Heading>Reviews</Heading>}
		action={
			<Button variant="secondary" size="small">
				Edit
			</Button>
		}
	>
		<Text muted is="p">
			All of our reviews are from verified customers.
		</Text>
	</TextContainer>
);

export const withInteractionOnly = () => (
	<TextContainer
		action={
			<Button variant="secondary" size="small">
				Edit
			</Button>
		}
	>
		<Text muted is="p">
			All of our reviews are from verified customers.
		</Text>
	</TextContainer>
);

export const withLongTitle = () => (
	<TextContainer
		heading={<Heading>Setup your personal settings</Heading>}
		action={
			<Button variant="secondary" size="small">
				Edit
			</Button>
		}
	>
		<Text muted is="p">
			All of our reviews are from verified customers.
		</Text>
	</TextContainer>
);

export const withNoBodyText = () => (
	<TextContainer>
		<Heading>Choose a credit pack</Heading>
	</TextContainer>
);

export const withNoTitleText = () => (
	<TextContainer>
		<Text muted is="p">
			To get started, choose a credit pack that will used for Auto Top-Up.
		</Text>
	</TextContainer>
);
