import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { EStarRatingSize, StarRating } from '.';

export default {
	title: 'Components/Star Rating',
	component: StarRating,
	argTypes: {
		size: {
			options: EStarRatingSize,
			control: {
				type: 'select',
			},
		},
		rating: {
			control: {
				type: 'range',
				min: 0,
				max: 5,
				step: 0.1,
			},
		},
	},
} satisfies Meta<typeof StarRating>;

const Template: StoryFn<typeof StarRating> = (args) => <StarRating {...args} />;

const standardProps = {
	rating: 2.7,
	size: EStarRatingSize.Medium,
	label: '',
};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const smallSizeProps = {
	rating: 3.2,
	size: EStarRatingSize.Small,
	label: '',
};
export const SmallSize = Template.bind(smallSizeProps);
SmallSize.args = smallSizeProps;

const withLabelProps = {
	rating: 3.9,
	size: EStarRatingSize.Medium,
	label: 'product rating',
};
export const WithLabel = Template.bind(withLabelProps);
WithLabel.args = withLabelProps;
