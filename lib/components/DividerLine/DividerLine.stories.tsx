import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { Heading } from '../Heading';
import { Inline } from '../Inline';

import { DividerLine } from '.';

const spacingOptions: Record<
	string,
	ComponentProps<typeof DividerLine>['space']
> = {
	none: 'none',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9',
};
const sizeOptions: Record<string, ComponentProps<typeof DividerLine>['size']> =
	[1, 2, 3];
const colours: ReadonlyArray<ComponentProps<typeof DividerLine>['colour']> = [
	'primary',
	'secondary',
	'danger',
	'information',
	'warning',
	'success',
	'neutral',
	'shine',
] as const;

export default {
	title: 'Components/DividerLine',
	component: DividerLine,
	argTypes: {
		space: {
			options: spacingOptions,
			defaultValue: 1,
			control: {
				type: 'select',
			},
		},
		colour: {
			options: colours,
			defaultValue: 1,
			control: {
				type: 'select',
			},
		},
		size: {
			options: sizeOptions,
			defaultValue: 1,
			control: {
				type: 'select',
			},
		},
	},
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
} satisfies Meta<typeof DividerLine>;

const template: StoryFn<typeof DividerLine> = (args) => (
	<Box>
		<Heading is="h2" size="7">
			Title 1
		</Heading>
		<DividerLine {...args} />
		<Heading is="h2" size="7">
			Title 1
		</Heading>
	</Box>
);
const verticalTemplate: StoryFn<typeof DividerLine> = (args) => (
	<Inline alignY="stretch">
		<Heading is="h2" size="7">
			Title 1
		</Heading>
		<DividerLine {...args} />
		<Heading is="h2" size="7">
			Title 1
		</Heading>
	</Inline>
);
const templateAllColours: StoryFn<typeof DividerLine> = (args) => (
	<Box>
		{colours.map((colour) => (
			<>
				<Heading is="h2" size="7">
					Title
				</Heading>
				<DividerLine {...args} colour={colour} />
			</>
		))}
	</Box>
);

const standardProps: ComponentProps<typeof DividerLine> = {
	space: '5',
	size: 3,
	colour: 'primary',
};

export const standard = template.bind(standardProps);
standard.args = standardProps;

const verticalProps: ComponentProps<typeof DividerLine> = {
	...standardProps,
	isVertical: true,
};

export const vertical = verticalTemplate.bind(verticalProps);
vertical.args = verticalProps;

export const standardAllColours = templateAllColours.bind(standardProps);
standardAllColours.args = standardProps;
