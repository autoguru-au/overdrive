import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { FillHeightBox } from './FillHeightBox';

export default {
	title: 'Layout/Fill Height Box',
	component: FillHeightBox,
} satisfies Meta<typeof FillHeightBox>;

type Story = StoryObj<typeof FillHeightBox>;

export const Standard: Story = {
	args: {
		rounded: true,
		includeMobile: true,
		bottomGap: '5',
		width: 'full',
		backgroundColour: 'white',
		borderColour: 'gray',
		borderWidth: '1',
		boxShadow: '1',
		height: 'full',
		borderRadius: '1',
		children: (
			<Box padding="5" width="full" style={{ minHeight: '300vh' }}>
				{Array.from({ length: 100 }).map((_, i) => (
					<Text key={i} as="p">
						I am page content {i + 1}
					</Text>
				))}
			</Box>
		),
	},
	render: (args) => <FillHeightBox {...args} />,
};
