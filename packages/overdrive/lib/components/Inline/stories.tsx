import * as React from 'react';

import { Button } from '../Button';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Inline } from '.';

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
		}
	>
		<Text>Mazda</Text>
		<Text>CX3</Text>
		<Text>Petrol</Text>
		<Text>2020</Text>
	</Inline>
);

export const DifferentSizeItems = () => (
	<Stack>
		<Inline dividers>
			<Text>Mazda</Text>
			<Text>CX3</Text>
			<Text>Petrol</Text>
			<Text>2020</Text>
			<Button>Buy</Button>
		</Inline>
		<Inline dividers alignY="flexEnd">
			<Text>Mazda</Text>
			<Text>CX3</Text>
			<Text>Petrol</Text>
			<Text>2020</Text>
			<Button>Buy</Button>
		</Inline>
		<Inline alignY="flexStart">
			<Text>Mazda</Text>
			<Text>CX3</Text>
			<Text>Petrol</Text>
			<Text>2020</Text>
			<Button>Buy</Button>
		</Inline>
	</Stack>
);
