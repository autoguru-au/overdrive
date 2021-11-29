import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

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

// @ts-ignore
const widthOptions: ComponentProps<typeof Stack>['width'] = ['full', null];
export default {
	title: 'Foundation/Layout/Stack',
	component: Stack,
	argTypes: {
		space: {
			options: spacingOptions,
			defaultValue: 1,
			control: {
				type: 'select',
			},
		},
		width: {
			options: widthOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
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
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const asSectionProps: Omit<ComponentProps<typeof Stack>, 'children'> = {
	...standardProps,
	is: 'section',
};
export const asSection = Template.bind(asSectionProps);
asSection.args = asSectionProps;

const withDividersProps: Omit<ComponentProps<typeof Stack>, 'children'> = {
	...standardProps,
	is: 'div',
	dividers: true,
	space: '3',
};
export const withDividers = Template.bind(withDividersProps);
withDividers.args = withDividersProps;
