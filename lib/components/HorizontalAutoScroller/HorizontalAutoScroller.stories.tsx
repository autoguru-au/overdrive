import { Meta, StoryObj } from '@storybook/react';
import Rand from 'rand-seed';
import React, { type ComponentProps } from 'react';

import { Box } from '../Box';
import { boxArgTypes, scaleOptions } from '../Box/argTypes';

import { HorizontalAutoScroller } from '.';

export default {
	title: 'Components/Horizontal Auto Scroller',
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

type Story = StoryObj<typeof HorizontalAutoScroller>;

const randHeight = new Rand('storybook');

const RenderAutoScroller = (
	args: Omit<ComponentProps<typeof HorizontalAutoScroller>, 'children'> & {
		childrenNum: number;
	},
) => (
	<HorizontalAutoScroller {...args}>
		{Array.from({ length: args.childrenNum }).map((_, index) => (
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

export const Standard: Story = {
	render: () => (
		<RenderAutoScroller paused={false} activePage={0} childrenNum={9} />
	),
};

export const WidthStartPage: Story = {
	render: () => (
		<RenderAutoScroller paused={false} activePage={3} childrenNum={9} />
	),
};

export const WithCustomDuration: Story = {
	render: () => (
		<RenderAutoScroller
			paused={false}
			activePage={0}
			childrenNum={9}
			durationSeconds={1}
		/>
	),
};

export const WithProgressColour: Story = {
	render: () => (
		<RenderAutoScroller
			paused={false}
			activePage={0}
			childrenNum={9}
			sliderProgressColour="yellow500"
		/>
	),
};

export const WithManySlides: Story = {
	render: () => (
		<RenderAutoScroller paused={false} activePage={0} childrenNum={50} />
	),
};
