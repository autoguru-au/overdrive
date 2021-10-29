import * as React from 'react';
import { ComponentProps } from 'react';

import { LoadingBox } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { boxArgTypes } from '../Box/stories';

export default {
	title: 'Components/Loading/Box',
	component: LoadingBox,
	decorators: [
		(story) => (
			<div style={{ width: '50%', height: '100%', margin: '0 auto' }}>
				{story()}
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
	argTypes: boxArgTypes,
} as ComponentMeta<typeof LoadingBox>;


const Template: ComponentStory<typeof LoadingBox> = (args) => (
	<LoadingBox {...args} />
);


const standardProps: ComponentProps<typeof LoadingBox> = {};
export const standard = Template.bind(standardProps);
standard.args = standardProps;


const blinkingOffProps: ComponentProps<typeof LoadingBox> = {
	blinking: false,
};
export const blinkingOff = Template.bind(blinkingOffProps);
blinkingOff.args = blinkingOffProps;

const randomWidthProps: ComponentProps<typeof LoadingBox> = {
	randomWidth: true,
};
export const randomWidth = Template.bind(randomWidthProps);
randomWidth.args = randomWidthProps;
