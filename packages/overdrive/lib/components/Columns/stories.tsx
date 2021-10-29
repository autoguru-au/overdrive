import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';

import { Column, Columns } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { boxArgTypes } from '../Box/stories';

export default {
	title: 'Foundation/Layout/Columns',
	component: Columns,
	decorators: [
		(story) => (
			<div style={{ width: '100%', margin: '0 auto' }}>{story()}</div>
		),
	],
	argTypes: {
		noWrap: {
			defaultValue: false,
			control: {
				type: 'boolean ',
			},
		},
		...boxArgTypes
	},
} as ComponentMeta<typeof Columns>;
const Template: ComponentStory<typeof Columns> = (args) => (
	<Columns {...args}>
		<Column width={['full', '1/3', '1/5']} is='section'>
			<Box
				borderColour='gray'
				borderWidth='1'
				padding='4'
				borderRadius='1'
				backgroundColour='green100'
				style={{ width: '100%', height: '100%' }}>
				Col 1
			</Box>
		</Column>
		<Column width={['1/2', '1/3', '1/5']} alignSelf='stretch' is='section'>
			<Box
				borderColour='gray'
				borderWidth='1'
				padding='4'
				borderRadius='1'
				backgroundColour='red100'
				style={{ width: '100%', height: '100%' }}>
				Col 2
			</Box>
		</Column>
		<Column width={['1/2', '1/3', '1/5']} is='section'>
			<Box
				borderColour='gray'
				borderWidth='1'
				padding='4'
				borderRadius='1'
				backgroundColour='blue100'
				style={{ width: '100%', height: '100%' }}>
				Col 3
			</Box>
		</Column>
		<Column width={['full', 'full', '2/5']} is='section'>
			<Box
				borderColour='gray'
				borderWidth='1'
				padding='4'
				borderRadius='1'
				backgroundColour='yellow100'
				style={{ width: '100%', height: '500px' }}>
				Col 4
			</Box>
		</Column>
	</Columns>
);

const standardProps: ComponentProps<typeof Columns> = {
	spaceX: ['1', '3', '8'],
	spaceY: ['1', '5'],
	align: 'bottom',
	noWrap: false,
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;
