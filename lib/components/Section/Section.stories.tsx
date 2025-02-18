import { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

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

type Story = StoryObj<typeof Section>;

const boxProps: ComponentProps<typeof Box> = {
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

export const Standard: Story = {
	args: {
		width: 'small',
		paddingX: ['none', '3', '5'],
		children: (
			<>
				<Box {...boxProps}>Box 1</Box>
				<Box {...boxProps}>Box 2</Box>
			</>
		),
	},
};
