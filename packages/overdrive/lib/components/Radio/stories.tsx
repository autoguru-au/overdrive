import { ArgTypes } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Badge } from '../Badge';
import { Heading } from '../Heading';
import { StarRating } from '../StarRating';
import { Text } from '../Text';

import { Radio, RadioGroup } from '.';

export default {
	title: 'Components/Inputs/Radio',
	component: Radio,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
};

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

export const list = ({ value, ...args }) => (
	<RadioGroup value={value} name='favourite fruit'>
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
);
list.args = {
	value: 'avocado',
	disabled: false,
};
list.argTypes = argTypes;

const Template = ({ value, ...args }) => (
	<RadioGroup value={value} name='favourite fruit'>
		<Radio value='avocado' {...args} />
	</RadioGroup>
);

const uncheckedProps: ComponentProps<typeof Radio> = {
	disabled: false,
	children: 'check me!',
	value: 'berry',
};
const checkedProps: ComponentProps<typeof Radio> = {
	checked: true,
	disabled: false,
	children: 'check me!',
	value: 'avocado',
};
const disabledProps: ComponentProps<typeof Radio> = {
	disabled: true,
	children: 'check me!',
	value: 'berry',
};
const disabledCheckedProps: ComponentProps<typeof Radio> = {
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
		}}>
		<Text>{label}</Text>
		<StarRating rating={rating} />
	</div>
);

const withComponentProps: ComponentProps<typeof Radio> = {
	disabled: false,
	children: <Item label='Avocados' rating='4.3' />,
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
			}}>
			<Heading is='h5'>Your last order</Heading>
			<Badge colour='neutral' label='SUBSCRIBE' />
			<Badge colour='neutral' label='AUTO TOP-UP' />
			<div
				style={{
					gridColumn: '1/4',
					display: 'grid',
					gridGap: '8px',
					gridTemplateColumns: '1fr auto',
				}}>
				<Text size={2}>Ending in 5678</Text>
				<Text size={2}>Updated 12 Dec 2018</Text>
			</div>
		</div>
	),
	value: '1',
};

export const unchecked = Template.bind(uncheckedProps);
unchecked.args = uncheckedProps;
unchecked.argTypes = argTypes;

export const checked = Template.bind(checkedProps);
checked.args = checkedProps;
checked.argTypes = argTypes;

export const disabled = Template.bind(disabledProps);
disabled.args = disabledProps;
disabled.argTypes = argTypes;

export const disabledChecked = Template.bind(disabledCheckedProps);
disabledChecked.args = disabledCheckedProps;
disabledChecked.argTypes = argTypes;

export const multipleLines = Template.bind(multipleLinesProps);
multipleLines.args = multipleLinesProps;
multipleLines.argTypes = argTypes;

export const withComponent = Template.bind(withComponentProps);
withComponent.args = withComponentProps;
withComponent.argTypes = {
	...argTypes,
	children: { control: { disable: true } },
};

export const withMultiLineComponent = Template.bind(
	withMultiLineComponentProps,
);
withMultiLineComponent.args = withMultiLineComponentProps;
withMultiLineComponent.argTypes = {
	...argTypes,
	children: { control: { disable: true } },
};
