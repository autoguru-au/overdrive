import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Badge } from '.';

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
	tags: ['updated'],
} satisfies Meta<typeof Badge>;

const template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;
const templateAllColours: StoryFn<typeof Badge> = (args) => (
	<>
		{colours.map((colour) => (
			<Badge key={colour} {...args} colour={colour} />
		))}
	</>
);

const standardProps: ComponentProps<typeof Badge> = {
	label: 'TITANIUM',
};

export const Standard = template.bind(standardProps);
Standard.args = standardProps;

export const StandardAllColours = templateAllColours.bind(standardProps);
StandardAllColours.args = standardProps;

const largeProps: ComponentProps<typeof Badge> = {
	...standardProps,
	size: 'large',
};
export const LargeAllColours = templateAllColours.bind(largeProps);
LargeAllColours.args = largeProps;

const smallProps: ComponentProps<typeof Badge> = {
	...standardProps,
	size: 'small',
};
export const SmallAllColours = templateAllColours.bind(smallProps);
SmallAllColours.args = smallProps;

const invertedProps: ComponentProps<typeof Badge> = {
	...standardProps,
	look: 'inverted',
};

export const Inverted = template.bind(invertedProps);
Inverted.args = invertedProps;

export const InvertedAllColours = templateAllColours.bind(invertedProps);
InvertedAllColours.args = invertedProps;
