import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';
import { StickyBox } from '../StickyBox';
import { Text } from '../Text';

import { FillHeightBox } from './FillHeightBox';

export default {
	title: 'Layout/Fill Height Box',
	component: StickyBox,
} satisfies Meta<typeof StickyBox>;

type Story = StoryObj<typeof StickyBox>;

export const Standard: Story = {
	args: {
		width: 'full',
		backgroundColour: 'white',
		borderColour: 'gray',
		borderWidth: '1',
		boxShadow: '1',
		height: 'full',
		borderRadius: '1',
		top: 'none',
		children: (
			<Box padding="5" width="full" style={{ minHeight: '300vh' }}>
				{Array.from({ length: 100 }).map((_, i) => (
					<Text key={i} is="p">
						I am page content {i + 1}
					</Text>
				))}
			</Box>
		),
	},
	render: (args) => <FillHeightBox {...args} />,
};
