import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { boxArgTypes } from '../Box/argTypes';

import { SliderProgress } from '.';

export default {
	title: 'Components/Progress/SliderProgress',
	component: SliderProgress,
	argTypes: {
		backgroundColour: boxArgTypes.backgroundColour,
	},
} satisfies Meta<typeof SliderProgress>;

const template: StoryFn<typeof SliderProgress> = (args) => (
	<Box paddingY="8" paddingX="3" backgroundColour="gray800">
		<SliderProgress {...args} />
	</Box>
);

const standardProps: Omit<ComponentProps<typeof SliderProgress>, 'children'> = {
	paused: false,
	totalCount: 3,
	activeIndex: 1,
	duration: '1s',
	onRequestNext: () => action('onRequestNext'),
};
export const standard = template.bind(standardProps);
standard.args = standardProps;

const withBackgroundColourProps: Omit<
	ComponentProps<typeof SliderProgress>,
	'children'
> = {
	...standardProps,
	backgroundColour: 'yellow500',
};
export const withBackgroundColour = template.bind(withBackgroundColourProps);
withBackgroundColour.args = withBackgroundColourProps;

const withManySlidesProps: Omit<
	ComponentProps<typeof SliderProgress>,
	'children'
> = {
	...standardProps,
	activeIndex: 5,
	totalCount: 20,
};
export const withManySlides = template.bind(withManySlidesProps);
withManySlides.args = withManySlidesProps;
