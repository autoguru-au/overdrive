import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';

import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Inline } from '../Inline/Inline';

import { DividerLine } from './DividerLine';

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

const sizeOptions: ComponentProps<typeof DividerLine>['size'][] = [1, 2, 3];

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

const meta = {
	title: 'Primatives/Divider Line',
	component: DividerLine,
	argTypes: {
		space: {
			options: Object.keys(spacingOptions),
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {
		space: '5',
		size: 3,
		colour: 'primary',
	},
	render: (args) => (
		<Box>
			<Heading as="h2" size="7">
				Title 1
			</Heading>
			<DividerLine {...args} />
			<Heading as="h2" size="7">
				Title 1
			</Heading>
		</Box>
	),
};

export const Vertical: Story = {
	args: {
		...Standard.args,
		isVertical: true,
	},
	render: (args) => (
		<Inline alignY="stretch">
			<Heading as="h2" size="7">
				Title 1
			</Heading>
			<DividerLine {...args} />
			<Heading as="h2" size="7">
				Title 1
			</Heading>
		</Inline>
	),
};

export const StandardAllColours: Story = {
	args: {
		...Standard.args,
	},
	render: (args) => (
		<Box>
			{colours.map((colour) => (
				<React.Fragment key={colour}>
					<Heading as="h2" size="7">
						Title
					</Heading>
					<DividerLine {...args} colour={colour} />
				</React.Fragment>
			))}
		</Box>
	),
};
