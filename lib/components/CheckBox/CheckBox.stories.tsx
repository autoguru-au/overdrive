import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Badge } from '../Badge';
import { Heading } from '../Heading';
import { StarRating } from '../StarRating';
import { Text } from '../Text';

import { CheckBox } from '.';

export default {
	title: 'Forms & Input Fields/CheckBox',
	component: CheckBox,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
} satisfies Meta<typeof CheckBox>;

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

export const list = {
	render: ({ disabled, ...args }) => (
		<>
			{listData.map((item: { label: string; value: string }) => {
				return (
					<CheckBox
						key={item.value}
						disabled={disabled}
						children={item.label}
						value={item.value}
						name={`want-${item.value}`}
						checked={args[item.value]}
					/>
				);
			})}
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

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

const disabledProps: ComponentProps<typeof CheckBox> = {
	checked: false,
	disabled: true,
	name: 'check-name',
	children: 'check me!',
	value: '1',
};

const multipleLinesProps: ComponentProps<typeof CheckBox> = {
	checked: false,
	disabled: false,
	name: 'check-name',
	children:
		'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
	value: '1',
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

const withComponentProps: ComponentProps<typeof CheckBox> = {
	checked: false,
	disabled: false,
	name: 'check-name',
	children: <Item label="Avocados" rating="4.3" />,
	value: '1',
};

const withMultiLineComponentProps: ComponentProps<typeof CheckBox> = {
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
};

export const Disabled = Template.bind(disabledProps);
Disabled.args = disabledProps;

export const MultipleLines = Template.bind(multipleLinesProps);
MultipleLines.args = multipleLinesProps;

export const WithComponent = Template.bind(withComponentProps);
WithComponent.args = withComponentProps;
WithComponent.argTypes = { children: { control: { disable: true } } };

export const WithMultiLineComponent = Template.bind(
	withMultiLineComponentProps,
);
WithMultiLineComponent.args = withMultiLineComponentProps;
WithMultiLineComponent.argTypes = { children: { control: { disable: true } } };
