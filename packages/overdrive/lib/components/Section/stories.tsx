import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Section } from '.';
import { Box } from '../Box';
import { boxArgTypes } from '../Box/argTypes';

export default {
	title: 'Foundation/Section',
	component: Section,
	argTypes: {
		paddingX: boxArgTypes.paddingX,
	},
} as ComponentMeta<typeof Section>;

const template: ComponentStory<typeof Section> = (args) => (
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
	marginBottom: ['2', '4', '5', '8'],
	marginX: ['none', '3', '5'],
	backgroundColour: 'green500',
	borderRadius: 'pill',
	boxShadow: ['none', '1', '2', '3'],
};

const standardProps: Omit<ComponentProps<typeof Section>, 'children'> = {
	width: 'small',
	paddingX: ['none', '3', '5'],
};
export const standard = template.bind(standardProps);
standard.args = standardProps;
