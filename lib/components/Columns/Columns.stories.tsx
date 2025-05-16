import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';

import { Column } from './Column';
import { Columns } from './Columns';
import { columnsStyle } from './Columns.css';

type ColumnProps = React.ComponentProps<typeof Column>;

const meta: Meta<typeof Columns> = {
	title: 'Layout/Columns',
	component: Columns,
	args: {
		align: 'bottom',
		noWrap: false,
		space: undefined,
		spaceX: ['1', '3', '8'],
		spaceY: ['1', '5'],
		wrappingDirection: undefined,
	},
	argTypes: {
		align: {
			options: Object.keys(columnsStyle.classNames.variants.align),
		},
		noWrap: {
			options: Object.keys(columnsStyle.classNames.variants.noWrap),
		},
		wrappingDirection: {
			options: Object.keys(
				columnsStyle.classNames.variants.wrappingDirection,
			),
		},
	},
};

export default meta;
type Story = StoryObj<typeof Columns>;

export const Standard: Story = {
	render: (args) => (
		<Columns {...args}>
			<Column width={['full', '1/3', '1/5']} order={[0, 2]} as="section">
				<Box
					borderColour="gray"
					borderWidth="1"
					padding="4"
					borderRadius="1"
					backgroundColour="green100"
					style={{ width: '100%', height: '100%' }}
				>
					Col 1
				</Box>
			</Column>
			<Column
				width={['1/2', '1/3', '1/5']}
				alignSelf="stretch"
				as="section"
			>
				<Box
					borderColour="gray"
					borderWidth="1"
					padding="4"
					borderRadius="1"
					backgroundColour="red100"
					style={{ width: '100%', height: '100%' }}
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
					backgroundColour="blue100"
					style={{ width: '100%', height: '100%' }}
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
					backgroundColour="yellow100"
					style={{ width: '100%', height: '500px' }}
				>
					Col 4
				</Box>
			</Column>
		</Columns>
	),
};

const columnProps = {
	as: 'section',
	width: ['full', '1/3', '1/5'],
} satisfies ColumnProps;

export const StandardColumn: Story = {
	args: {},
	render: (args) => (
		<Columns {...args}>
			<Column {...columnProps}>
				<Box
					borderColour="gray"
					borderWidth="1"
					padding="4"
					borderRadius="1"
					backgroundColour="green100"
					style={{ width: '100%', height: '100%' }}
				>
					Col 1
				</Box>
			</Column>
			<Column {...columnProps}>
				<Box
					borderColour="gray"
					borderWidth="1"
					padding="4"
					borderRadius="1"
					backgroundColour="red100"
					style={{ width: '100%', height: '100%' }}
				>
					Col 2
				</Box>
			</Column>
			<Column {...columnProps}>
				<Box
					borderColour="gray"
					borderWidth="1"
					padding="4"
					borderRadius="1"
					backgroundColour="blue100"
					style={{ width: '100%', height: '100%' }}
				>
					Col 3
				</Box>
			</Column>
			<Column {...columnProps}>
				<Box
					borderColour="gray"
					borderWidth="1"
					padding="4"
					borderRadius="1"
					backgroundColour="yellow100"
					style={{ width: '100%', height: '500px' }}
				>
					Col 4
				</Box>
			</Column>
			<Column {...columnProps}>
				<Box
					borderColour="gray"
					borderWidth="1"
					padding="4"
					borderRadius="1"
					backgroundColour="green100"
					style={{
						width: '100%',
						height: '100%',
						minHeight: '200px',
					}}
				>
					Col 5
				</Box>
			</Column>
		</Columns>
	),
};
