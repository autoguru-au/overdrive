import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { StickyBox } from '../StickyBox';
import { Text } from '../Text';

import { FillHeightBox } from './FillHeightBox';

export default {
	title: 'Foundation/Layout/FillHeightBox',
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
		{...args}
	>
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
