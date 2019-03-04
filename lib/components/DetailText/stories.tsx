import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DetailText, DetailTextLoader, EDetailTextSize } from '.';

const baseLoadingProps = () => ({
	size: select('Size', EDetailTextSize, EDetailTextSize.Detail1),
	randomWidth: boolean('randomWidth', true),
});

storiesOf('Components|Type/DetailText', module)
	.add('detail 1', () => (
		<DetailText size={EDetailTextSize.Detail1}>Hello World</DetailText>
	))
	.add('detail 2', () => (
		<DetailText size={EDetailTextSize.Detail2}>Hello World</DetailText>
	))
	.add('detail 3', () => (
		<DetailText size={EDetailTextSize.Detail3}>Hello World</DetailText>
	))
	.add('loading', () => <DetailTextLoader {...baseLoadingProps()} />);
