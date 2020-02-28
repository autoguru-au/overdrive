import { number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { EStarRatingSize, StarRating } from '.';

const baseProps = () => ({
	rating: number('Rating', 2.7),
	size: select('Size', EStarRatingSize, EStarRatingSize.Medium),
});

storiesOf('Components|StarRating', module)
	.add('Standard', () => (
		<StarRating {...baseProps()} label={text('Label', void 0)} />
	))
	.add('Small Size', () => (
		<StarRating rating={3.2} size={EStarRatingSize.Small} />
	))
	.add('Medium Size', () => (
		<StarRating rating={1.6} size={EStarRatingSize.Medium} />
	))
	.add('With Label', () => (
		<StarRating rating={3.9} label="product rating" />
	));
