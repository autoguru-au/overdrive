import type { Meta, StoryFn } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { themeContractVars as tokens } from '../../themes/theme.css';
import { Box } from '../Box';
import { boxArgTypes, scaleOptions } from '../Box/argTypes';

import { Column, Columns } from '.';

const meta: Meta<typeof Columns> = {
	title: 'Layout/Columns',
	component: Columns,
	decorators: [
		(story) => (
			<div style={{ width: '100%', margin: '0 auto' }}>{story()}</div>
		),
	],
	argTypes: {
		noWrap: {
			control: {
				type: 'boolean',
			},
		},
		space: {
			options: scaleOptions,
			control: {
				type: 'select',
			},
		},
		spaceX: {
			options: scaleOptions,
			control: {
				type: 'select',
			},
		},
		spaceY: {
			options: scaleOptions,
			control: {
				type: 'select',
			},
		},
		...boxArgTypes,
	},
};

export default meta;

const Template: StoryFn<typeof Columns> = (args) => (
	<Columns {...args}>
		<Column width={['full', '1/3', '1/5']} order={[0, 2]} as="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.green100,
					width: '100%',
					height: '100%',
				}}
			>
				Col 1
			</Box>
		</Column>
		<Column width={['1/2', '1/3', '1/5']} alignSelf="stretch" as="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.red100,
					width: '100%',
					height: '100%',
				}}
			>
				Col 2
			</Box>
		</Column>
		<Column width={['1/2', '1/3', '1/5']} as="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.blue100,
					width: '100%',
					height: '100%',
				}}
			>
				Col 3
			</Box>
		</Column>
		<Column width={['full', 'full', '2/5']} as="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.yellow100,
					width: '100%',
					height: '500px',
				}}
			>
				Col 4
			</Box>
		</Column>
	</Columns>
);

const TemplateColumn: StoryFn<typeof Column> = (args) => (
	<Columns {...standardProps}>
		<Column {...args}>
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.green100,
					width: '100%',
					height: '100%',
				}}
			>
				Col 1
			</Box>
		</Column>
		<Column {...args}>
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.red100,
					width: '100%',
					height: '100%',
				}}
			>
				Col 2
			</Box>
		</Column>
		<Column {...args}>
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.blue100,
					width: '100%',
					height: '100%',
				}}
			>
				Col 3
			</Box>
		</Column>
		<Column {...args}>
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.yellow100,
					width: '100%',
					height: '500px',
				}}
			>
				Col 4
			</Box>
		</Column>
		<Column {...args}>
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				style={{
					backgroundColor: tokens.colours.gamut.yellow100,
					width: '100%',
					height: '100%',
					minHeight: '200px',
				}}
			>
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

export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const standardColumnProps: Omit<ComponentProps<typeof Column>, 'children'> = {
	as: 'section',
	width: ['full', '1/3', '1/5'],
};

export const StandardColumn = TemplateColumn.bind(standardColumnProps);
StandardColumn.args = standardColumnProps;
StandardColumn.argTypes = {
	alignSelf: {
		options: {
			stretch: 'stretch',
			top: 'top',
			centre: 'centre',
			bottom: 'bottom',
		},
		control: {
			disable: false,
			type: 'boolean',
		},
	},
	...boxArgTypes,
};
