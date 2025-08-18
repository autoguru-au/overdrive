import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';

import { boxArgTypes } from '../../stories/shared/argTypes-box';
import { Box } from '../Box/Box';

import { Section } from './Section';

export default {
	title: 'Layout/Section',
	tags: ['review'],
	component: Section,
	argTypes: {
		children: { control: false },
		paddingX: boxArgTypes.paddingX,
	},
} satisfies Meta<typeof Section>;

type Story = StoryObj<typeof Section>;

const boxProps: ComponentProps<typeof Box> = {
	width: 'full',
	borderColour: 'dark',
	borderWidth: '1', // ['none', 'none', '1', '2'],
	padding: ['2', '4'],
	backgroundColour: 'primary',
	colour: 'primary',
	marginBottom: ['2', '4', '5', '8'],
	marginX: ['none', '3', '5'],
	borderRadius: 'pill',
	boxShadow: '2', // ['none', '1', '2', '3'],
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
