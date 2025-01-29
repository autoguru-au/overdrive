import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { NumberBubble } from '.';

export default {
	title: 'Components/Number Bubble',
	component: NumberBubble,
} satisfies Meta<typeof NumberBubble>;

const template: StoryFn<typeof NumberBubble> = (args) => (
	<NumberBubble {...args} />
);

const standardProps: Omit<ComponentProps<typeof NumberBubble>, 'children'> = {
	value: 0,
};
export const Standard = template.bind(standardProps);
Standard.args = standardProps;

const bigNumberProps: Omit<ComponentProps<typeof NumberBubble>, 'children'> = {
	value: 2345,
};
export const BigNumber = template.bind(bigNumberProps);
BigNumber.args = bigNumberProps;
