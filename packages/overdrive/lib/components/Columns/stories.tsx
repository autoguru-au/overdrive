import * as React from 'react';

import { Box } from '../Box';

import { Column, Columns } from '.';

export default {
	title: 'Foundation/Layout/Columns',
	component: Columns,
	decorators: [
		(story) => (
			<div style={{ width: '100%', margin: '0 auto' }}>{story()}</div>
		),
	],
};

export const Standard = () => (
	<Columns spaceX={['1', '3', '8']} spaceY={['1', '5']} align="bottom">
		<Column width={['full', '1/3', '1/5']} is="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				backgroundColour="green100"
				style={{ width: '100%', height: '100%' }}>
				Col 1
			</Box>
		</Column>
		<Column width={['1/2', '1/3', '1/5']} alignSelf="stretch" is="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				backgroundColour="red100"
				style={{ width: '100%', height: '100%' }}>
				Col 2
			</Box>
		</Column>
		<Column width={['1/2', '1/3', '1/5']} is="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				backgroundColour="blue100"
				style={{ width: '100%', height: '100%' }}>
				Col 3
			</Box>
		</Column>
		<Column width={['full', 'full', '2/5']} is="section">
			<Box
				borderColour="gray"
				borderWidth="1"
				padding="4"
				borderRadius="1"
				backgroundColour="yellow100"
				style={{ width: '100%', height: '500px' }}>
				Col 4
			</Box>
		</Column>
	</Columns>
);
