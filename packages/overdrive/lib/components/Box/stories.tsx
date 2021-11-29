import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { boxArgTypes } from './argTypes';

import { Box } from '.';

export default {
	title: 'Foundation/Box',
	component: Box,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 500, margin: '0 auto' }}>{story()}</div>
		),
	],
	argTypes: boxArgTypes,
} as ComponentMeta<typeof Box>;

const template: ComponentStory<typeof Box> = (args) => (
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
	backgroundColour: 'green500',
	borderRadius: 'pill',
	boxShadow: ['none', '1', '2', '3'],
};
export const standard = template.bind(standardProps);
standard.args = standardProps;
