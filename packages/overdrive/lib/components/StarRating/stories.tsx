import * as React from 'react';

import { EStarRatingSize, StarRating } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from '../Stack';


export default {
	title: 'Components/StarRating',
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
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof StarRating> = (args) => (
	<StarRating {...args} />
);

const standardProps = {
	rating: 2.7,
	size: EStarRatingSize.Medium,
	label: '',
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const smallSizeProps = {
	rating: 3.2,
	size: EStarRatingSize.Small,
	label: '',
};
export const smallSize = Template.bind(smallSizeProps);
smallSize.args = smallSizeProps;

const withLabelProps = {
	rating: 3.9,
	size: EStarRatingSize.Medium,
	label: 'product rating',
};
export const withLabel = Template.bind(withLabelProps);
withLabel.args = withLabelProps;
