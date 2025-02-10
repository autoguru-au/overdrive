import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Badge } from '../Badge';
import { Heading } from '../Heading';
import { StarRating } from '../StarRating';
import { Text } from '../Text';

import { CheckBox } from '.';

const meta = {
	title: 'Forms & Input Fields/CheckBox',
	component: CheckBox,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

const listData: Array<{ label: string; value: string }> = [
	{ label: 'Avocado', value: 'avocado' },
	{ label: 'Blueberries', value: 'blueberries' },
	{ label: 'Cherries', value: 'cherries' },
	{ label: 'Coconut', value: 'coconut' },
	{ label: 'Strawberries', value: 'strawberries' },
];

export const List: Story = {
	render: ({ disabled, ...args }) => (
		<>
			{listData.map((item) => (
				<CheckBox
					key={item.value}
					disabled={disabled}
					value={item.value}
					name={`want-${item.value}`}
					checked={args[item.value]}
				>
					{item.label}
				</CheckBox>
			))}
		</>
	),
	args: {
		disabled: false,
		avocado: true,
		blueberries: true,
		cherries: false,
		coconut: true,
		strawberries: false,
	},
};

export const Disabled: Story = {
	args: {
		checked: false,
		disabled: true,
		name: 'check-name',
		children: 'check me!',
		value: '1',
	},
};

export const MultipleLines: Story = {
	args: {
		checked: false,
		disabled: false,
		name: 'check-name',
		children:
			'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
		value: '1',
	},
};

const Item = ({ label, rating }) => (
	<div
		style={{
			display: 'grid',
			gridGap: '8px',
			gridTemplateColumns: '1fr auto',
		}}
	>
		<Text>{label}</Text>
		<StarRating rating={rating} />
	</div>
);

export const WithComponent: Story = {
	args: {
		checked: false,
		disabled: false,
		name: 'check-name',
		children: <Item label="Avocados" rating="4.3" />,
		value: '1',
	},
	argTypes: { children: { control: { disable: true } } },
};

export const WithMultiLineComponent: Story = {
	args: {
		checked: false,
		disabled: false,
		name: 'check-name',
		children: (
			<div
				style={{
					display: 'grid',
					gridGap: '8px',
					gridTemplateColumns: '1fr auto auto',
				}}
			>
				<Heading is="h5">Your last order</Heading>
				<Badge colour="neutral" label="SUBSCRIBE" />
				<Badge colour="neutral" label="AUTO TOP-UP" />
				<div
					style={{
						gridColumn: '1/4',
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto',
					}}
				>
					<Text size="2">Ending in 5678</Text>
					<Text size="2">Updated 12 Dec 2018</Text>
				</div>
			</div>
		),
		value: '1',
	},
	argTypes: { children: { control: { disable: true } } },
};
