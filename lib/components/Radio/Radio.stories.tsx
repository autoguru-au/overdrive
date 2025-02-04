import { StoryObj, ArgTypes, Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

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
} satisfies Meta<typeof Radio>;

const listData: Array<{ label: string; value: string }> = [
	{
		label: 'Avocado',
		value: 'avocado',
	},
	{
		label: 'Blueberries',
		value: 'blueberries',
	},
	{
		label: 'Cherries',
		value: 'cherries',
	},
	{
		label: 'Coconut',
		value: 'coconut',
	},
	{
		label: 'Strawberries',
		value: 'strawberries',
	},
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
		control: {
			type: 'select',
		},
	},
};

export const List: StoryObj<typeof Radio> = {
	render: ({ value, children, ...args }) => (
		<RadioGroup value={value} name="favourite fruit">
			{listData.map((item: { label: string; value: string }) => {
				return (
					<Radio
						key={item.value}
						children={item.label}
						value={item.value}
						{...args}
					/>
				);
			})}
		</RadioGroup>
	),

	args: {
		value: 'avocado',
		disabled: false,
	},

	argTypes: argTypes,
};

const Template: StoryFn<typeof Radio> = ({ value, ...args }) => (
	<RadioGroup value={value} name="favourite fruit">
		<Radio value="avocado" {...args} />
	</RadioGroup>
);
const disabledCheckedProps: ComponentProps<typeof Radio> = {
	// @ts-expect-error type error for `checked`
	checked: true,
	disabled: true,
	children: 'check me!',
	value: 'avocado',
};
const multipleLinesProps: ComponentProps<typeof Radio> = {
	disabled: false,
	children:
		'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
	value: 'berry',
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

const withChildrenProps: ComponentProps<typeof Radio> = {
	disabled: false,
	children: <Item label="Avocados" rating="4.3" />,
	value: 'berry',
};

const withMultiLineComponentProps: ComponentProps<typeof Radio> = {
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
};

export const DisabledChecked = Template.bind(disabledCheckedProps);
DisabledChecked.args = disabledCheckedProps;
DisabledChecked.argTypes = argTypes;

export const MultipleLines = Template.bind(multipleLinesProps);
MultipleLines.args = multipleLinesProps;
MultipleLines.argTypes = argTypes;

export const WithChildren = Template.bind(withMultiLineComponentProps);
WithChildren.args = withChildrenProps;
WithChildren.argTypes = {
	...argTypes,
	children: { control: { disable: true } },
};
