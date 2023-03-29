import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { FillHeightBox } from '../FillHeightBox';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { StickyBox } from '.';

export default {
	title: 'Foundation/Layout/StickyBox',
	component: StickyBox,
} as ComponentMeta<typeof StickyBox>;

type Props = ComponentProps<typeof StickyBox>;
const Template: ComponentStory<typeof StickyBox> = (args) => (
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
		<StickyBox width="full" {...args}>
			<Box
				matginTop="8"
				padding="3"
				width="full"
				backgroundColour="yellow700"
				borderRadius="1"
				overflow="hidden"
			>
				<Heading is="h2" align="center" colour="white">
					I'm a sticky header
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
);

const standardProps: Props = {
	top: 'none',
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
