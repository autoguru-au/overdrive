import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { TextBubble } from '.';

export default {
	title: 'Components/Text Bubble',
	component: TextBubble,
} satisfies Meta<typeof TextBubble>;

const template: StoryFn<typeof TextBubble> = (args) => <TextBubble {...args} />;

const standardProps: Omit<ComponentProps<typeof TextBubble>, 'children'> = {
	label: 'OK',
};
export const Standard = template.bind(standardProps);
Standard.args = standardProps;

const longLabelProps: Omit<ComponentProps<typeof TextBubble>, 'children'> = {
	label: 'Error',
	textColour: 'danger',
	backgroundColour: 'gray900',
};
export const LongLabel = template.bind(longLabelProps);
LongLabel.args = longLabelProps;

const veryLongLabelProps: Omit<
	ComponentProps<typeof TextBubble>,
	'children'
> = {
	label: 'Too Long',
};
export const VeryLongLabel = template.bind(veryLongLabelProps);
VeryLongLabel.args = veryLongLabelProps;
