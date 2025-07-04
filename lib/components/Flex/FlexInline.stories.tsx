import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import {
	sprinkles,
	type Sprinkles,
	valueArrays,
} from '../../styles/sprinkles.css';
import { Button } from '../Button';

import { FlexInline } from './FlexInline';

const itemSprinkles = {
	paddingX: '4',
	borderStyle: 'solid',
	borderWidth: '1',
	borderColor: 'hard',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
} satisfies Sprinkles;

const itemProps = (height: Sprinkles['height']) => ({
	className: sprinkles({ height, ...itemSprinkles }),
	style: { minWidth: '150px' },
});

const Item1 = () => <div {...itemProps('8')}>1</div>;
const Item2 = () => <div {...itemProps('9')}>2</div>;
const Item3 = () => <div {...itemProps('7')}>3</div>;

const meta = {
	title: 'Layout/Flex/Flex Inline',
	tags: ['new', 'skip-themes'],
	component: FlexInline,
	args: {
		as: undefined,
		gap: '6',
		start: false,
		center: false,
		end: false,
		expand: false,
		noWrap: false,
		reverse: false,
		spaceBetween: false,
		align: undefined,
		justify: undefined,
	},
	argTypes: {
		as: {
			options: ['div', 'span', 'ul', 'section', 'p'],
		},
		align: {
			options: valueArrays.justifyContent,
		},
		justify: {
			options: valueArrays.alignItems,
		},
		gap: {
			options: valueArrays.spaceWithNone,
		},
	},
} satisfies Meta<typeof FlexInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	render: (args) => (
		<FlexInline {...args} data-custom-attr="flex-inline-story">
			<Item1 />
			<Item2 />
			<Item3 />
		</FlexInline>
	),
};

/**
 * Responsive properties that change based on viewport size
 */
export const Responsive: Story = {
	...Standard,
	args: {
		align: ['start', 'center', 'end'],
		gap: ['2', '4', '6'],
	},
};

/**
 * FlexInline with interactive button elements, demonstrating keyboard navigation and focus management.
 */
export const InteractiveElements: Story = {
	args: {
		center: true,
		gap: '4',
	},
	render: (args) => (
		<FlexInline {...args} role="group">
			<Button variant="primary">Primary Action</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="secondary">Cancel</Button>
		</FlexInline>
	),
};

const styleContainer = {
	width: '300px',
	border: '2px dashed #ccc',
	padding: '10px',
};

/**
 * Layout variants to demonstrate alignment, expanded children, reverse order, and wrapping behavior.
 */
export const MoreExamples: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
			<div>
				<h4>Center</h4>
				<FlexInline center gap="4">
					<Item1 />
					<Item2 />
					<Item3 />
				</FlexInline>
			</div>
			<div>
				<h4>Space Between</h4>
				<FlexInline spaceBetween gap="4">
					<Item1 />
					<Item2 />
					<Item3 />
				</FlexInline>
			</div>
			<div>
				<h4>Expanded Children</h4>
				<FlexInline expand gap="4">
					<Item1 />
					<Item2 />
					<Item3 />
				</FlexInline>
			</div>
			<div>
				<h4>Reversed Order</h4>
				<FlexInline reverse gap="4">
					<Item1 />
					<Item2 />
					<Item3 />
				</FlexInline>
			</div>
			<div>
				<h4>No Wrap</h4>
				<div style={styleContainer}>
					<FlexInline noWrap gap="2">
						<Item1 />
						<Item2 />
						<Item3 />
						<div {...itemProps('8')}>4</div>
					</FlexInline>
				</div>
			</div>
			<div>
				<h4>Wrapping</h4>
				<div style={styleContainer}>
					<FlexInline gap="2">
						{Array.from({ length: 8 }, (_, i) => (
							<div
								key={i}
								{...itemProps('6')}
								style={{ minWidth: '60px' }}
							>
								{i + 1}
							</div>
						))}
					</FlexInline>
				</div>
			</div>
		</div>
	),
};
