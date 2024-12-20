import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { NumberBubble } from '.';

export default {
	title: 'Foundation/Typography/NumberBubble',
	component: NumberBubble,
} satisfies Meta<typeof NumberBubble>;

const template: StoryFn<typeof NumberBubble> = (args) => (
	<NumberBubble {...args} />
);

const standardProps: Omit<ComponentProps<typeof NumberBubble>, 'children'> = {
	value: 0,
};
export const standard = template.bind(standardProps);
standard.args = standardProps;

const bigNumberProps: Omit<ComponentProps<typeof NumberBubble>, 'children'> = {
	value: 2345,
};
export const bigNumber = template.bind(bigNumberProps);
bigNumber.args = bigNumberProps;
