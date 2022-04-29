import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';
import { boxArgTypes } from '../Box/argTypes';

import { NumberBubble } from '.';

export default {
	title: 'Foundation/Typography/NumberBubble',
	component: NumberBubble,
	argTypes: {
		paddingX: boxArgTypes.paddingX,
	},
} as ComponentMeta<typeof NumberBubble>;

const template: ComponentStory<typeof NumberBubble> = (args) => (
	<NumberBubble {...args} />
);

const standardProps: Omit<ComponentProps<typeof NumberBubble>, 'children'> = {
	value: 0,
};
export const standard = template.bind(standardProps);
standard.args = standardProps;
