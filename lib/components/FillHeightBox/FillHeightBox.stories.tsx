import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { StickyBox } from '../StickyBox';
import { Text } from '../Text';

import { FillHeightBox } from './FillHeightBox';

export default {
	title: 'Layout/Fill Height Box',
	component: StickyBox,
} satisfies Meta<typeof StickyBox>;

type Props = ComponentProps<typeof StickyBox>;
const Template: StoryFn<typeof StickyBox> = (args) => (
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
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;
