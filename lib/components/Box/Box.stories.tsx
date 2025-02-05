import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { boxArgTypes } from './argTypes';

import { Box } from '.';

export default {
	title: 'Primatives/Box',
	component: Box,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 500, margin: '0 auto' }}>{story()}</div>
		),
	],
	argTypes: boxArgTypes,
} satisfies Meta<typeof Box>;

const template: StoryFn<typeof Box> = (args) => (
	<>
		<Box {...args}>Box 1</Box>
		<Box {...args}>Box 2</Box>
	</>
);

const standardProps: ComponentProps<typeof Box> = {
	borderColour: 'dark',
	borderWidth: ['none', 'none', '1', '2'],
	padding: ['2', '4'],
	marginBottom: ['2', '4', '5', '8'],
	marginX: ['none', '3', '5'],
	backgroundColour: 'primary',
	colour: 'primary',
	borderRadius: 'pill',
	boxShadow: ['none', '1', '2', '3'],
};
export const Standard = template.bind({});
Standard.args = standardProps;
