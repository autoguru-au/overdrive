import { Meta, StoryFn } from '@storybook/react';
import Rand from 'rand-seed';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { boxArgTypes, scaleOptions } from '../Box/argTypes';

import { HorizontalAutoScroller } from '.';

export default {
	title: 'Components/HorizontalAutoScroller',
	component: HorizontalAutoScroller,
	argTypes: {
		sliderProgressColour: boxArgTypes.backgroundColour,
		space: {
			options: scaleOptions,
			control: {
				type: 'select',
			},
		},
		paused: {
			control: {
				type: 'boolean',
			},
		},
		noControls: {
			control: {
				type: 'boolean',
			},
		},
	},
} satisfies Meta<typeof HorizontalAutoScroller>;

const randHeight = new Rand('storybook');

const template: StoryFn<typeof HorizontalAutoScroller> = ({
	childrenNum,
	...args
}) => (
	<HorizontalAutoScroller {...args}>
		{Array.from({ length: childrenNum }).map((_, index) => (
			<Box
				key={index}
				backgroundColour="gray200"
				padding="3"
				display="flex"
				width="full"
				height="full"
				alignItems="center"
				justifyContent="center"
			>
				<Box
					style={{
						width: '100%',
						height: 20 + Math.ceil(randHeight.next() * 300),
					}}
					backgroundColour="gray900"
				/>
			</Box>
		))}
	</HorizontalAutoScroller>
);

const standardProps: Omit<
	ComponentProps<typeof HorizontalAutoScroller>,
	'children'
> = {
	paused: false,
	activePage: 0,
	childrenNum: 9,
};
export const standard = template.bind(standardProps);
standard.args = standardProps;

const widthStartPageProps: Omit<
	ComponentProps<typeof HorizontalAutoScroller>,
	'children'
> = {
	...standardProps,
	activePage: 3,
};
export const widthStartPage = template.bind(widthStartPageProps);
widthStartPage.args = widthStartPageProps;

const withCustomDurationProps: Omit<
	ComponentProps<typeof HorizontalAutoScroller>,
	'children'
> = {
	...standardProps,
	durationSeconds: 1,
};
export const withCustomDuration = template.bind(withCustomDurationProps);
withCustomDuration.args = withCustomDurationProps;

const withProgressColourProps: Omit<
	ComponentProps<typeof HorizontalAutoScroller>,
	'children'
> = {
	...standardProps,
	sliderProgressColour: 'yellow500',
};
export const withProgressColour = template.bind(withProgressColourProps);
withProgressColour.args = withProgressColourProps;

const withManySlidesProps: Omit<
	ComponentProps<typeof HorizontalAutoScroller>,
	'children'
> = {
	...standardProps,
	childrenNum: 50,
};
export const withManySlides = template.bind(withManySlidesProps);
withManySlides.args = withManySlidesProps;
