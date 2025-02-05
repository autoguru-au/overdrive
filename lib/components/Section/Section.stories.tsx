import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { boxArgTypes } from '../Box/argTypes';

import { Section } from '.';

export default {
	title: 'Layout/Section',
	component: Section,
	argTypes: {
		paddingX: boxArgTypes.paddingX,
	},
} satisfies Meta<typeof Section>;

const template: StoryFn<typeof Section> = (args) => (
	<Section {...args}>
		<Box {...boxPropsProps}>Box 1</Box>
		<Box {...boxPropsProps}>Box 2</Box>
	</Section>
);

const boxPropsProps: ComponentProps<typeof Box> = {
	width: 'full',
	borderColour: 'dark',
	borderWidth: ['none', 'none', '1', '2'],
	padding: ['2', '4'],
	backgroundColour: 'primary',
	colour: 'primary',
	marginBottom: ['2', '4', '5', '8'],
	marginX: ['none', '3', '5'],
	borderRadius: 'pill',
	boxShadow: ['none', '1', '2', '3'],
};

const standardProps: Omit<ComponentProps<typeof Section>, 'children'> = {
	width: 'small',
	paddingX: ['none', '3', '5'],
};
export const Standard = template.bind(standardProps);
Standard.args = standardProps;
