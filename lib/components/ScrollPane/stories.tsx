import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { Heading } from '../Heading';
import { StickyBox } from '../StickyBox';
import { Text } from '../Text';

import { ScrollPane } from '.';

export default {
	title: 'Foundation/Layout/ScrollPane',
	component: ScrollPane,
} as ComponentMeta<typeof ScrollPane>;

type Props = ComponentProps<typeof ScrollPane>;
const Template: ComponentStory<typeof ScrollPane> = (args) => (
	<ScrollPane style={{ maxHeight: '300px' }} {...args}>
		<StickyBox width="full">
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
	</ScrollPane>
);

const standardProps: Props = {};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
