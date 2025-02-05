import { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { Badge } from '.';

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
} satisfies Meta<typeof Badge>;

export const Standard: Story = {
	args: {
		label: 'TITANIUM',
	},
};

export const StandardAllColours: Story = {
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
	args: {
		label: 'TITANIUM',
		look: 'inverted',
	},
};

export const InvertedAllColours: Story = {
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
