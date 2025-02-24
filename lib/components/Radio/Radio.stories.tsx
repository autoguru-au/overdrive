import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Badge } from '../Badge';
import { Heading } from '../Heading';
import { StarRating } from '../StarRating';
import { Text } from '../Text';

import { Radio, RadioGroup } from '.';

export default {
	title: 'Forms & Input Fields/Radio',
	component: Radio,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
	argTypes: {
		value: {
			options: [
				'avocado',
				'blueberries',
				'cherries',
				'coconut',
				'strawberries',
			],
			defaultValue: null,
			control: { type: 'select' },
			children: { control: { disable: true } },
		},
	},
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

const listData: Array<{ label: string; value: string }> = [
	{ label: 'Avocado', value: 'avocado' },
	{ label: 'Blueberries', value: 'blueberries' },
	{ label: 'Cherries', value: 'cherries' },
	{ label: 'Coconut', value: 'coconut' },
	{ label: 'Strawberries', value: 'strawberries' },
];

export const List: Story = {
	render: ({ value, ...args }) => (
		<RadioGroup value={value} name="favourite fruit">
			{listData.map((item) => (
				<Radio key={item.value} value={item.value} {...args}>
					{item.label}
				</Radio>
			))}
		</RadioGroup>
	),
	args: {
		value: 'avocado',
		disabled: false,
	},
};

// const Wrapper = ({ children }: { children: React.ReactNode }) => (
// 	<RadioGroup value="" name="demo-radio-group">
// 		{children}
// 	</RadioGroup>
// );

const Item = ({ label, rating }: { label: string; rating: number }) => (
	<div
		style={{
			display: 'grid',
			gap: '8px',
			gridTemplateColumns: '1fr auto',
		}}
	>
		<Text>{label}</Text>
		<StarRating rating={rating} />
	</div>
);

const singleRadio: Story['render'] = (args) => (
	<RadioGroup value="" name="demo-radio-group">
		<Radio {...args} />
	</RadioGroup>
);

export const DisabledChecked: Story = {
	render: singleRadio,
	args: {
		disabled: true,
		children: 'check me!',
		value: 'not-available',
	},
};

export const MultipleLines: Story = {
	render: singleRadio,
	args: {
		disabled: false,
		children:
			'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
	},
};

export const WithChildren: Story = {
	render: singleRadio,
	args: {
		disabled: false,
		children: <Item label="Avocados" rating={4.3} />,
	},
};

export const WithComplexChildren: Story = {
	render: singleRadio,
	args: {
		disabled: false,
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
};
