import { select } from '@storybook/addon-knobs';
import * as React from 'react';

import { Heading } from './Heading';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alignOptions: ['left', 'center', 'right'] = ['left', 'center', 'right'];
const colourOptions = [
	'dark',
	'white',
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
});

export default {
	title: 'Foundation|Typography/Heading',
	component: Heading,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '350px', width: '100%' }}>{story()}</div>
		),
	],
};

export const standard = () => (
	<Heading
		is={select('Tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}
		{...baseProps()}>
		Hello World
	</Heading>
);

export const allSizes = () => (
	<div>
		<Heading is="h6">I am a heading</Heading>
		<Heading is="h5">I am a heading</Heading>
		<Heading is="h4">I am a heading</Heading>
		<Heading is="h3">I am a heading</Heading>
		<Heading is="h2">I am a heading</Heading>
		<Heading is="h1">I am a heading</Heading>
	</div>
);
