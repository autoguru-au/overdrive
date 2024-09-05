import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof Badge>;

const template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
const templateAllColours: ComponentStory<typeof Badge> = (args) => (
	<>
		{colours.map((colour) => (
			<Badge key={colour} {...args} colour={colour} />
		))}
	</>
);

const standardProps: ComponentProps<typeof Badge> = {
	label: 'TITANIUM',
};

export const standard = template.bind(standardProps);
standard.args = standardProps;

export const standardAllColours = templateAllColours.bind(standardProps);
standardAllColours.args = standardProps;

const largeProps: ComponentProps<typeof Badge> = {
	...standardProps,
	size: 'large',
};
export const largeAllColours = templateAllColours.bind(largeProps);
largeAllColours.args = largeProps;

const smallProps: ComponentProps<typeof Badge> = {
	...standardProps,
	size: 'small',
};
export const smallAllColours = templateAllColours.bind(smallProps);
smallAllColours.args = smallProps;

const invertedProps: ComponentProps<typeof Badge> = {
	...standardProps,
	look: 'inverted',
};

export const inverted = template.bind(invertedProps);
inverted.args = invertedProps;

export const invertedAllColours = templateAllColours.bind(invertedProps);
invertedAllColours.args = invertedProps;

const invertedLargeProps: ComponentProps<typeof Badge> = {
	...largeProps,
	look: 'inverted',
};
export const invertedLargeAllColours =
	templateAllColours.bind(invertedLargeProps);
invertedLargeAllColours.args = invertedLargeProps;
