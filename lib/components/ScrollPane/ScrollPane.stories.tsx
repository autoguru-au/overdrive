import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';
import { Heading } from '../Heading';
import { StickyBox } from '../StickyBox';
import { Text } from '../Text';

import { ScrollPane } from '.';

export default {
	title: 'Layout/Scroll Pane',
	component: ScrollPane,
} satisfies Meta<typeof ScrollPane>;

type Story = StoryObj<typeof ScrollPane>;

export const Standard: Story = {
	args: {
		style: { maxHeight: '300px' },
		children: (
			<>
				<StickyBox width="full">
					<Box
						textAlign="center"
						marginTop="8"
						padding="3"
						width="full"
						backgroundColour="yellow700"
						borderRadius="1"
						overflow="hidden"
					>
						<Heading as="h2" colour="white">
							I&apos;m a sticky header
						</Heading>
					</Box>
				</StickyBox>
				<Box padding="5" width="full" style={{ minHeight: '300vh' }}>
					{Array.from({ length: 100 }).map((_, i) => (
						<Text key={i} is="p">
							I am page content {i + 1}
						</Text>
					))}
				</Box>
			</>
		),
	},
};
