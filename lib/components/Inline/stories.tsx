import * as React from 'react';

import { Text } from '../Typography';
import { Inline } from './Inline';

export default {
	title: 'Foundation|Layout/Inline',
	component: Inline,
};

export const Standard = () => (
	<Inline>
		<Text>Mazda</Text>
		<Text>CX3</Text>
		<Text>Petrol</Text>
		<Text>2020</Text>
	</Inline>
);

export const Dividers = () => (
	<Inline dividers>
		<Text>Mazda</Text>
		<Text>CX3</Text>
		<Text>Petrol</Text>
		<Text>2020</Text>
	</Inline>
);

export const CustomDividers = () => (
	<Inline
		dividers={
			<div
				style={{
					backgroundColor: 'red',
					width: '6px',
					height: '6px',
				}}
			/>
		}>
		<Text>Mazda</Text>
		<Text>CX3</Text>
		<Text>Petrol</Text>
		<Text>2020</Text>
	</Inline>
);
