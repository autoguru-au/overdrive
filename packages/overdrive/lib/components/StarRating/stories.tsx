import { number, select, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { EStarRatingSize, StarRating } from '.';

const baseProps = () => ({
	rating: number('Rating', 2.7),
	size: select('Size', EStarRatingSize, EStarRatingSize.Medium),
});

export default {
	title: 'Components/StarRating',
	component: StarRating,
};

export const standard = () => (
	<StarRating {...baseProps()} label={text('Label', '')} />
);

export const smallSize = () => (
	<StarRating rating={3.2} size={EStarRatingSize.Small} />
);

export const mediumSize = () => (
	<StarRating rating={1.6} size={EStarRatingSize.Medium} />
);

export const withLabel = () => (
	<StarRating rating={3.9} label="product rating" />
);
