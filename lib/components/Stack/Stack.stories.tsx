import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { boxArgTypes } from '../Box/argTypes';
import { Text } from '../Text';

import { Stack } from '.';

const spacingOptions: Record<string, ComponentProps<typeof Stack>['space']> = {
	none: 'none',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9',
};

export default {
	title: 'Layout/Stack',
	component: Stack,
	argTypes: {
		space: {
			options: spacingOptions,
			defaultValue: 1,
			control: {
				type: 'select',
			},
		},
		width: boxArgTypes.width,
		alignItems: boxArgTypes.alignItems,
	},
} satisfies Meta<typeof Stack>;

const Template: StoryFn<typeof Stack> = (args) => (
	<Stack {...args}>
		<Text>Line 1</Text>
		<Text>Line 2</Text>
		<Text>Line 3</Text>
	</Stack>
);

const standardProps: Omit<ComponentProps<typeof Stack>, 'children'> = {
	space: '1',
	dividers: false,
	width: void 0,
	is: 'div',
};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const asSectionProps: Omit<ComponentProps<typeof Stack>, 'children'> = {
	...standardProps,
	is: 'section',
};
export const AsSection = Template.bind(asSectionProps);
AsSection.args = asSectionProps;

const withDividersProps: Omit<ComponentProps<typeof Stack>, 'children'> = {
	...standardProps,
	is: 'div',
	dividers: true,
	space: '3',
};
export const WithDividers = Template.bind(withDividersProps);
WithDividers.args = withDividersProps;

const withAlignmentProps: Omit<ComponentProps<typeof Stack>, 'children'> = {
	...standardProps,
	is: 'div',
	dividers: true,
	space: '3',
	alignItems: 'center',
};
export const WithAlignment = Template.bind(withAlignmentProps);
WithAlignment.args = withAlignmentProps;
