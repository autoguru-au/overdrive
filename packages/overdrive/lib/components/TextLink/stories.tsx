import { boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';

import { Text } from '../Text';
import { TextLink } from '.';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alignOptions: ['left', 'center', 'right'] = ['left', 'center', 'right'];
const fontWeightOptions = ['normal', 'semiBold', 'bold'];

const baseProps = () => ({
	muted: boolean('Muted', false),
	size: select('Size', sizeScale, '4'),
	align: select('align', alignOptions, 'left'),
	fontWeight: select('Font Weight', fontWeightOptions, 'bold'),
});

export default {
	title: 'Foundation/Typography/TextLink',
	component: TextLink,
	decorators: [
		(story) => (
			<div
				style={{
					width: '100%',
					maxWidth: 300,
					display: 'grid',
					gridTemplateColumns: '1fr',
				}}>
				{story()}
			</div>
		),
	],
};

export const standard = () => <TextLink {...baseProps()}>Hello</TextLink>;

export const insideParagraph = () => (
	<Text is="p">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
		<TextLink {...baseProps()}>Hello</TextLink> autem consectetur
		consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat
		quia, quidem reprehenderit rerum temporibus veniam vero.
	</Text>
);
