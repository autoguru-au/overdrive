import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { TextBubble } from '.';

export default {
	title: 'Foundation/Typography/TextBubble',
	component: TextBubble,
} as ComponentMeta<typeof TextBubble>;

const template: ComponentStory<typeof TextBubble> = (args) => (
	<TextBubble {...args} />
);

const standardProps: Omit<ComponentProps<typeof TextBubble>, 'children'> = {
	label: 'OK',
};
export const standard = template.bind(standardProps);
standard.args = standardProps;

const longLabelProps: Omit<ComponentProps<typeof TextBubble>, 'children'> = {
	label: 'Error',
	textColour: 'danger',
	backgroundColour: 'gray900',
};
export const longLabel = template.bind(longLabelProps);
longLabel.args = longLabelProps;

const veryLongLabelProps: Omit<
	ComponentProps<typeof TextBubble>,
	'children'
> = {
	label: 'Too Long',
};
export const veryLongLabel = template.bind(veryLongLabelProps);
veryLongLabel.args = veryLongLabelProps;
