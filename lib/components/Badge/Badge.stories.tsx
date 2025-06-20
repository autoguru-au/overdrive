import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';

import { Badge } from './Badge';

type Story = StoryObj<typeof Badge>;

const colours: ReadonlyArray<ComponentProps<typeof Badge>['colour']> = [
	'blue',
	'red',
	'green',
	'yellow',
	'neutral',
] as const;

export default {
	title: 'Components/Badge',
	component: Badge,
} satisfies Meta<typeof Badge>;

export const Standard: Story = {
	decorators: [],
	args: {
		label: 'TITANIUM',
	},
};

export const StandardAllColours: Story = {
	decorators: [
		(story) => (
			<div
				style={{
					display: 'grid',
					gridAutoFlow: 'row dense',
					gridGap: '10px',
				}}
			>
				<div
					style={{
						display: 'grid',
						gap: '10px',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(10px, max-content))',
					}}
				>
					{story()}
				</div>
			</div>
		),
	],
	args: {
		label: 'TITANIUM',
	},
	render: (args) => (
		<>
			{colours.map((colour) => (
				<Badge key={colour} {...args} colour={colour} />
			))}
		</>
	),
};

export const LargeAllColours: Story = {
	decorators: StandardAllColours.decorators,
	args: {
		label: 'TITANIUM',
		size: 'large',
	},
	render: (args) => (
		<>
			{colours.map((colour) => (
				<Badge key={colour} {...args} colour={colour} />
			))}
		</>
	),
};

export const SmallAllColours: Story = {
	decorators: StandardAllColours.decorators,
	args: {
		label: 'TITANIUM',
		size: 'small',
	},
	render: (args) => (
		<>
			{colours.map((colour) => (
				<Badge key={colour} {...args} colour={colour} />
			))}
		</>
	),
};

export const Inverted: Story = {
	decorators: StandardAllColours.decorators,
	args: {
		label: 'TITANIUM',
		look: 'inverted',
	},
};

export const InvertedAllColours: Story = {
	decorators: StandardAllColours.decorators,
	args: {
		label: 'TITANIUM',
		look: 'inverted',
	},
	render: (args) => (
		<>
			{colours.map((colour) => (
				<Badge key={colour} {...args} colour={colour} />
			))}
		</>
	),
};
