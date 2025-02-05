import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Text } from '../Text';

import { VisuallyHidden } from '.';

export default {
	title: 'Layout/Visually Hidden',
	component: VisuallyHidden,
	args: {
		as: 'div',
	},
	argTypes: {
		as: {
			options: ['div', 'span', 'a'],
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
			<Text>I&apos;m not visually present on the screens</Text>
		</VisuallyHidden>
	</>
);

export const Example = Template.bind({});
