import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { EHeadingSize, EHeadingVariant, Heading } from '.';
import { HeadingLoader } from './HeadingLoader';

const baseProps = () => ({
	variant: select('Variant', { Nothing: null, ...EHeadingVariant }, null),
});

const baseLoadingProps = () => ({
	size: select('Size', EHeadingSize, EHeadingSize.Heading1),
	randomWidth: boolean('randomWidth', true),
	blinking: boolean('blinking', true),
});

storiesOf('Components|Type/Heading', module)
	.add('heading1', () => (
		<Heading {...baseProps()} size={EHeadingSize.Heading1}>
			Hello World
		</Heading>
	))
	.add('heading2', () => (
		<Heading {...baseProps()} size={EHeadingSize.Heading2}>
			Hello World
		</Heading>
	))
	.add('heading3', () => (
		<Heading {...baseProps()} size={EHeadingSize.Heading3}>
			Hello World
		</Heading>
	))
	.add('heading4', () => (
		<Heading {...baseProps()} size={EHeadingSize.Heading4}>
			Hello World
		</Heading>
	))
	.add('heading5', () => (
		<Heading {...baseProps()} size={EHeadingSize.Heading5}>
			Hello World
		</Heading>
	))
	.add('heading6', () => (
		<Heading {...baseProps()} size={EHeadingSize.Heading6}>
			Hello World
		</Heading>
	))
	.add(
		'loading',
		() => <HeadingLoader {...baseProps()} {...baseLoadingProps()} />,
		{ chromatic: { disable: true } }
	);
