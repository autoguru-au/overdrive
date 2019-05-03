import { number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { EStarRatingSize, StarRating } from '.';

const baseProps = () => ({
	ratingValue: number('Rating', 2.7),
	size: select('Size', EStarRatingSize, EStarRatingSize.Medium),
});

storiesOf('Components|Rating', module)
	.add('default', () => (
		<StarRating {...baseProps()} label={text('Label', '')} />
	))
	.add('small size', () => (
		<StarRating ratingValue={3.2} size={EStarRatingSize.Small} />
	))
	.add('medium size', () => (
		<StarRating ratingValue={1.6} size={EStarRatingSize.Medium} />
	))
	.add('with label', () => (
		<StarRating ratingValue={3.9} label="product rating" />
	));
