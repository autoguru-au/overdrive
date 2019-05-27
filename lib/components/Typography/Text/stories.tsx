import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TSizeScale } from '../types';
import { Text } from './index';

const baseProps = () => ({
	size: select('Size', sizeScale, 3),
	muted: boolean('Muted', false),
	strong: boolean('Strong', false),
});

const sizeScale: Array<TSizeScale> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

storiesOf('Foundation|Typography/Text', module)
	.add('default', () => <Text {...baseProps()}>Hello World</Text>, {
		notes: 'Used for single text lines.',
	})
	.add(
		'as paragraph',
		() => (
			<Text is="p" {...baseProps()}>
				To avoid you coming to a halt in the middle of the road, because
				of a banging, crash of pistons and valves fighting with each
				other, let's investigate what the timing belt is, what it does,
				and why it costs so much to replace or repair.
			</Text>
		),
		{ notes: 'Used for multi-line "body" like content.' }
	)
	.add("all the span's", () => (
		<div>
			<div>
				{sizeScale.map(size => (
					<div style={{ marginBottom: '20px' }} key={size}>
						<Text is={'span'} size={size}>
							Size: {size}: Lorem ipsum dolor sit amet,
							consectetur
						</Text>
					</div>
				))}
			</div>
		</div>
	))
	.add("all the p's", () => (
		<div>
			<div>
				{sizeScale.map(size => (
					<div style={{ marginBottom: '20px' }} key={size}>
						<Text is={'p'} size={size}>
							Size: {size}: Lorem ipsum dolor sit amet,
							consectetur
						</Text>
					</div>
				))}
			</div>
		</div>
	));
