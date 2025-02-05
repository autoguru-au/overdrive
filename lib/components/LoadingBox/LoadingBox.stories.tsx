import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { boxArgTypes } from '../Box/argTypes';

import { LoadingBox } from '.';

export default {
	title: 'Components/Loading Box',
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
} satisfies Meta<typeof LoadingBox>;

const Template: StoryFn<typeof LoadingBox> = (args) => <LoadingBox {...args} />;

const standardProps: ComponentProps<typeof LoadingBox> = {};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const blinkingOffProps: ComponentProps<typeof LoadingBox> = {
	blinking: false,
};
export const BlinkingOff = Template.bind(blinkingOffProps);
BlinkingOff.args = blinkingOffProps;

const randomWidthProps: ComponentProps<typeof LoadingBox> = {
	randomWidth: true,
};
export const RandomWidth = Template.bind(randomWidthProps);
RandomWidth.args = randomWidthProps;
