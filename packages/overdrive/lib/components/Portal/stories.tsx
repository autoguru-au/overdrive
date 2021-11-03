import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

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
			control: {
				disable: true,
			},
		},
		container: {
			control: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Portal>;

const StandardTemplate: ComponentStory<typeof Portal> = (...args) => (
	<Portal {...args}>
		<Text colour="primary">Im in a portal at the root.</Text>
	</Portal>
);

const NestedTemplate: ComponentStory<typeof Portal> = (...args) => (
	<Portal {...args}>
		<Stack space="5">
			<Heading is="h3" colour="information">
				test child 1
			</Heading>
			<Portal {...args}>
				<Text colour="primary">test child 2</Text>
			</Portal>
		</Stack>
	</Portal>
);

const standardProps: Omit<ComponentProps<typeof Portal>, 'children'> = {
	container: document?.getElementsByTagName('body')[0],
};
export const standard = StandardTemplate.bind(standardProps);
standard.args = standardProps;

export const nested = NestedTemplate.bind(standardProps);
nested.args = standardProps;
