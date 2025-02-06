import { StoryObj, ArgTypes, Meta } from '@storybook/react';
import React, { type ComponentProps } from 'react';

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
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

const listData: Array<{ label: string; value: string }> = [
	{ label: 'Avocado', value: 'avocado' },
	{ label: 'Blueberries', value: 'blueberries' },
	{ label: 'Cherries', value: 'cherries' },
	{ label: 'Coconut', value: 'coconut' },
	{ label: 'Strawberries', value: 'strawberries' },
];

const argTypes: ArgTypes = {
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
	},
};

export const List: Story = {
	render: ({ value, children, ...args }) => (
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
	argTypes,
};

const renderRadio = (args: ComponentProps<typeof Radio>) => (
	<RadioGroup value={args.value} name="favourite fruit">
		<Radio {...args} />
	</RadioGroup>
);

const Item = ({ label, rating }: { label: string; rating: string }) => (
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

export const DisabledChecked: Story = {
	render: renderRadio,
	args: {
		// @ts-expect-error type error for `checked`
		checked: true,
		disabled: true,
		children: 'check me!',
		value: 'avocado',
	},
	argTypes,
};

export const MultipleLines: Story = {
	render: renderRadio,
	args: {
		disabled: false,
		children:
			'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
		value: 'berry',
	},
	argTypes,
};

export const WithChildren: Story = {
	render: renderRadio,
	args: {
		disabled: false,
		children: <Item label="Avocados" rating="4.3" />,
		value: 'berry',
	},
	argTypes: {
		...argTypes,
		children: { control: { disable: true } },
	},
};
