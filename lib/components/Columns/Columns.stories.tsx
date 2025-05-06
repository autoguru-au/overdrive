import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { themeContractVars as tokens } from '../../themes/theme.css';
import { Box } from '../Box';
// import { boxArgTypes, scaleOptions } from '../Box/argTypes';

import { Column, Columns } from '.';

const meta: Meta<typeof Columns> = {
	title: 'Layout/Columns',
	component: Columns,
	decorators: [
		(story) => (
			<div style={{ width: '100%', margin: '0 auto' }}>{story()}</div>
		),
	],
	args: {
		spaceX: ['1', '3', '8'],
		spaceY: ['1', '5'],
		align: 'bottom',
		noWrap: false,
	},
	// argTypes: {
	// 	noWrap: {
	// 		control: {
	// 			type: 'boolean',
	// 		},
	// 	},
	// 	space: {
	// 		options: scaleOptions,
	// 		control: {
	// 			type: 'select',
	// 		},
	// 	},
	// 	spaceX: {
	// 		options: scaleOptions,
	// 		control: {
	// 			type: 'select',
	// 		},
	// 	},
	// 	spaceY: {
	// 		options: scaleOptions,
	// 		control: {
	// 			type: 'select',
	// 		},
	// 	},
	// 	...boxArgTypes,
	// },
};

export default meta;
type Story = StoryObj<typeof Columns>;

export const Standard: Story = {
	render: (args) => (
		<Columns {...args}>
			<Column width={['full', '1/3', '1/6']} order={[0, 2]} as="section">
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
					Col 1 (reordered)
				</Box>
			</Column>
			<Column
				width={['1/2', '1/3', '2/6']}
				alignSelf="stretch"
				as="section"
			>
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
			<Column width={['1/2', '1/3', '1/6']} as="section">
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
			<Column width={['full', 'full', '2/6']} as="section">
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
	),
};

// export const Standard = Template.bind();

export const StandardColumn: Story = {
	args: {
		as: 'section',
		width: ['full', '1/3', '1/6'],
	},
	render: ({ width, ...args }) => (
		<Columns {...args}>
			<Column width={width}>
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
			<Column width={width}>
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
			<Column width={width}>
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
			<Column width={['full', 'full', '3/6']}>
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
					Col 4 (wide)
				</Box>
			</Column>
		</Columns>
	),
};

// StandardColumn.argTypes = {
// 	alignSelf: {
// 		options: {
// 			//@ts-expect-error something wrong with args
// 			stretch: 'stretch',
// 			top: 'top',
// 			centre: 'centre',
// 			bottom: 'bottom',
// 		},
// 		control: {
// 			disable: false,
// 			type: 'boolean',
// 		},
// 	},
// 	...boxArgTypes,
// };
