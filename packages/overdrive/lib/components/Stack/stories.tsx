import * as React from 'react';
import { ComponentProps } from 'react';

import { Text } from '../Text';

import { Stack } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const spacingOptions: ComponentProps<typeof Stack>['space'] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
	}
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
	<Stack {...args}>
		<Text>Line 1</Text>
		<Text>Line 2</Text>
		<Text>Line 3</Text>
	</Stack>
);
const standardProps = {
	space: 1,
	dividers: false,
	width: null,
	is: 'div',
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const asSectionProps = {
	...standardProps,
	is: 'section',
};
export const asSection = Template.bind(asSectionProps);
asSection.args = asSectionProps;

const withDividersProps = {
	...standardProps,
	is: 'div',
	dividers: true,
	space: 3,
};
export const withDividers = Template.bind(withDividersProps);
withDividers.args = withDividersProps;
