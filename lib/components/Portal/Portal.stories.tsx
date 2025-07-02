import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { Portal } from './Portal';

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
				<Heading as="h3" colour="information">
					test child 1
				</Heading>
				<Portal container={containerEl}>
					<Text colour="primary">test child 2</Text>
				</Portal>
			</Stack>
		),
	},
};
