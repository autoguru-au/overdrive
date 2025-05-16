import type { Meta, StoryObj } from '@storybook/react';

import { EStarRatingSize, StarRating } from './StarRating';

const meta = {
	title: 'Components/Star Rating',
	component: StarRating,
	argTypes: {
		size: {
			options: Object.values(EStarRatingSize),
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

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Standard: Story = {
	args: {
		rating: 2.7,
		size: EStarRatingSize.Medium,
		label: '',
	},
};

export const SmallSize: Story = {
	args: {
		rating: 3.2,
		size: EStarRatingSize.Small,
		label: '',
	},
};

export const WithLabel: Story = {
	args: {
		rating: 3.9,
		size: EStarRatingSize.Medium,
		label: 'product rating',
	},
};
