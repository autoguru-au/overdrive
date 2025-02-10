import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../Heading';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { Portal } from '.';

export default {
	title: 'Utility/Portal',
	component: Portal,
	parameters: {
		chromatic: { disable: true },
	},
	argTypes: {
		children: {
			control: { disable: true },
		},
		container: {
			control: { disable: true },
		},
	},
} satisfies Meta<typeof Portal>;

type Story = StoryObj<typeof Portal>;

const containerEl = document?.getElementsByTagName('body')[0];

export const Standard: Story = {
	args: {
		container: containerEl,
		children: <Text colour="primary">Im in a portal at the root.</Text>,
	},
};

export const Nested: Story = {
	args: {
		container: containerEl,
		children: (
			<Stack space="5">
				<Heading is="h3" colour="information">
					test child 1
				</Heading>
				<Portal container={containerEl}>
					<Text colour="primary">test child 2</Text>
				</Portal>
			</Stack>
		),
	},
};
