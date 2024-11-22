import { Meta, StoryFn } from '@storybook/react';
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
} satisfies Meta<typeof VisuallyHidden>;

const Template: StoryFn<typeof VisuallyHidden> = (args) => (
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

export const standard: StoryFn<typeof VisuallyHidden> =
	Template.bind(standardProps);
standard.args = standardProps;
