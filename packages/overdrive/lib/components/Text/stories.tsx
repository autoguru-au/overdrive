import { select } from '@storybook/addon-knobs';
import * as React from 'react';

import { Stack } from '../Stack';
import { Text } from '.';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alignOptions: ['left', 'center', 'right'] = ['left', 'center', 'right'];
const fontWeightOptions = ['normal', 'semiBold', 'bold'];
const colourOptions = [
	'dark',
	'white',
	'muted',
	'light',
	'danger',
	'warning',
	'success',
	'information',
];

const baseProps = () => ({
	size: select('Size', sizeScale, '4'),
	align: select('align', alignOptions, 'left'),
	colour: select('Colour', colourOptions, 'dark'),
	fontWeight: select('Font Weight', fontWeightOptions, 'normal'),
});

export default {
	title: 'Foundation/Typography/Text',
	component: Text,
	decorators: [],
};

export const standard = () => <Text {...baseProps()}>Hello World</Text>;
export const asParagraph = () => (
	<Text is="p" {...baseProps()}>
		To avoid you coming to a halt in the middle of the road, because of a
		banging, crash of pistons and valves fighting with each other, let's
		investigate what the timing belt is, what it does, and why it costs so
		much to replace or repair.
	</Text>
);

export const allSpans = () => (
	<>
		{sizeScale.map((size) => (
			<div key={size} style={{ marginBottom: '20px' }}>
				<Text is="span" size={size}>
					Size {size}: Help people better care for their cars
				</Text>
			</div>
		))}
	</>
);

export const allParagraphs = () => (
	<>
		{sizeScale.map((size) => (
			<div key={size} style={{ marginBottom: '20px' }}>
				<Text is="p" size={size}>
					Size {size}: Help people better care for their cars
				</Text>
			</div>
		))}
	</>
);

export const spansWithTransform = () => (
	<Stack>
		<Text>
			This text <Text tranform="uppercase">here</Text> should be
			uppercase.
		</Text>
	</Stack>
);
