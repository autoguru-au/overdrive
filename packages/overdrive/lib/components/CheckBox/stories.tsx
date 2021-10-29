import * as React from 'react';
import { ComponentProps } from 'react';

import { Badge } from '../Badge';
import { Heading } from '../Heading';
import { StarRating } from '../StarRating';
import { Text } from '../Text';

import { CheckBox } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Inputs/CheckBox',
	component: CheckBox,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
} as ComponentMeta<typeof CheckBox>;

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

export const list = ({ disabled, ...args }) => (
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
);
list.args = {
	disabled: false,
	avocado: true,
	blueberries: true,
	cherries: false,
	coconut: true,
	strawberries: false,
};
const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

const uncheckedProps: ComponentProps<typeof CheckBox> = {
	checked: false,
	disabled: false,
	name: 'check-name',
	children: 'check me!',
	value: '1',
};
const checkedProps: ComponentProps<typeof CheckBox> = {
	checked: true,
	disabled: false,
	name: 'check-name',
	children: 'check me!',
	value: '1',
};
const disabledProps: ComponentProps<typeof CheckBox> = {
	checked: false,
	disabled: true,
	name: 'check-name',
	children: 'check me!',
	value: '1',
};
const disabledCheckedProps: ComponentProps<typeof CheckBox> = {
	checked: true,
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
		}}>
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
			}}>
			<Heading is="h5">Your last order</Heading>
			<Badge colour="neutral" label="SUBSCRIBE" />
			<Badge colour="neutral" label="AUTO TOP-UP" />
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

export const checked = Template.bind(checkedProps);
checked.args = checkedProps;

export const disabled = Template.bind(disabledProps);
disabled.args = disabledProps;

export const disabledChecked = Template.bind(disabledCheckedProps);
disabledChecked.args = disabledCheckedProps;

export const multipleLines = Template.bind(multipleLinesProps);
multipleLines.args = multipleLinesProps;

export const withComponent = Template.bind(withComponentProps);
withComponent.args = withComponentProps;
withComponent.argTypes = { children: { control: { disable: true } } };

export const withMultiLineComponent = Template.bind(
	withMultiLineComponentProps,
);
withMultiLineComponent.args = withMultiLineComponentProps;
withMultiLineComponent.argTypes = { children: { control: { disable: true } } };
