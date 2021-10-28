import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../Icon';
import { Tokens } from '../../themes/tokens';

const scaleOptions:Array<keyof Tokens['space']> = ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const scaledProps: Array<keyof ComponentProps<typeof Box>> = [
	'padding',
	'paddingX',
	'paddingY',
	'paddingTop',
	'paddingRight',
	'paddingLeft',
	'margin',
	'marginX',
	'marginY',
	'marginTop',
	'marginRight',
	'marginLeft',
];

const boxShadowOptions:Array<keyof Tokens['elevation']> = ['none', '1', '2', '3', '4', '5'];
const borderRadiusOptions:Array<keyof Tokens['border']['radius']> = ['none', '1', 'min', 'full', 'pill'];

export default {
	title: 'Foundation/Box',
	component: Box,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 500, margin: '0 auto' }}>{story()}</div>
		),
	],
	argTypes:{
		boxShadow:{
			options: boxShadowOptions,
			control: {
				type: 'select',
			},
		},
		borderRadius:{
			options: borderRadiusOptions,
			control: {
				type: 'select',
			},
		},
		...scaledProps.reduce((argTypes,prop)=>{
			argTypes[prop] = {
				options: scaleOptions,
				control: {
					type: 'select',
				},
			};
			return argTypes
		}, {}),
	}
} as ComponentMeta<typeof Icon>;

const template: ComponentStory<typeof Box> = (args) => (
	<>
		<Box {...args}>
			Box 1
		</Box>
		<Box {...args}>
			Box 2
		</Box>
	</>
);

const standardProps: ComponentProps<typeof Box> = {
	borderColour: 'dark',
	borderWidth: ['none', null, '1', '2'],
	padding: ['2', '4'],
	marginBottom: ['2', '4', '5', '8'],
	marginX: ['none', '3', '5'],
	backgroundColour: 'green500',
	borderRadius: 'pill',
	boxShadow: ['none', '1', '2', '3'],
};
export const standard = template.bind(standardProps);
standard.args = standardProps;

