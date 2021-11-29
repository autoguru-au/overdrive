import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Text } from '../Text';

import { VisuallyHidden } from '.';

export default {
	title: 'Utility/VisuallyHidden',
	argTypes: {
		is: {
			options: ['button', 'a', 'div'],
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof VisuallyHidden>;

const Template: ComponentStory<typeof VisuallyHidden> = (args) => (
	<>
		<Text>Bellow text is invisible</Text>
		<VisuallyHidden {...args}>
			<Text>I'm not visually present on the screens</Text>
		</VisuallyHidden>
	</>
);

const standardProps: Omit<ComponentProps<typeof VisuallyHidden>, 'children'> = {
	is: 'div',
};

export const standard: ComponentStory<typeof VisuallyHidden> = Template.bind(
	standardProps,
);
standard.args = standardProps;
