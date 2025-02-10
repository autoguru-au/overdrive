import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';
import { FillHeightBox } from '../FillHeightBox';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { StickyBox } from '.';

const meta = {
	title: 'Layout/StickyBox',
	component: StickyBox,
} satisfies Meta<typeof StickyBox>;

export default meta;

type Story = StoryObj<typeof StickyBox>;

export const Standard: Story = {
	args: {
		top: 'none',
		width: 'full',
	},
	render: (args) => (
		<FillHeightBox
			rounded
			includeMobile
			bottomGap="5"
			width="full"
			backgroundColour="white"
			borderColour="gray"
			borderWidth="1"
			boxShadow="1"
			height="full"
			borderRadius="1"
		>
			<StickyBox {...args}>
				<Box
					marginTop="8"
					padding="3"
					width="full"
					backgroundColour="yellow700"
					borderRadius="1"
					overflow="hidden"
				>
					<Heading is="h2" align="center" colour="white">
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
		</FillHeightBox>
	),
};

export const WithNoPopShadow: Story = {
	...Standard,
	args: {
		...Standard.args,
		noPopShadow: true,
	},
};
