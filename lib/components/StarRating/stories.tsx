import { number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { EStarRatingSize, StarRating } from '.';

const baseProps = () => ({
	rating: number('Rating', 2.7),
	size: select('Size', EStarRatingSize, EStarRatingSize.Medium),
});

storiesOf('Components|StarRating', module)
	.add('standard', () => (
		<StarRating {...baseProps()} label={text('Label', void 0)} />
	))
	.add('small size', () => (
		<StarRating rating={3.2} size={EStarRatingSize.Small} />
	))
	.add('medium size', () => (
		<StarRating rating={1.6} size={EStarRatingSize.Medium} />
	))
	.add('with label', () => (
		<StarRating rating={3.9} label="product rating" />
	));
