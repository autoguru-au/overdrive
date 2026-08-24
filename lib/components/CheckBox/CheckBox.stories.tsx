import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';
import { fn } from 'storybook/test';

import { Badge } from '../Badge/Badge';
import { Column, Columns } from '../Columns';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack';
import { StarRating } from '../StarRating/StarRating';
import { Text } from '../Text/Text';

import { CheckBox } from './CheckBox';

const listData: Array<{ label: string; value: string }> = [
	{ label: 'Avocado', value: 'avocado' },
	{ label: 'Blueberries', value: 'blueberries' },
	{ label: 'Cherries', value: 'cherries' },
	{ label: 'Coconut', value: 'coconut' },
	{ label: 'Strawberries', value: 'strawberries' },
];

const meta: Meta<typeof CheckBox> = {
	title: 'Forms & Input Fields/CheckBox',
	component: CheckBox,
	tags: [],
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>
				<Story />
			</div>
		),
	],
	args: {
		name: 'demo-checkbox',
		children: 'Check me!',
		value: '1',
		isIndeterminate: false,
		disabled: undefined,
		size: 'large',
		onChange: fn(),
		onClick: fn(),
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['large', 'medium', 'small'],
		},
	},
	render: ({ isIndeterminate, ...args }) => {
		const [checked, setChecked] = useState(false);
		const [hasIndeterminate, setHasIndeterminate] =
			useState(isIndeterminate);

		useEffect(() => {
			if (isIndeterminate !== hasIndeterminate) {
				setHasIndeterminate(isIndeterminate);
			}
		}, [isIndeterminate]);

		return (
			<CheckBox
				{...args}
				isIndeterminate={hasIndeterminate}
				checked={checked}
				onClick={() => {
					if (isIndeterminate) setHasIndeterminate(false);
					args.onClick?.(checked);
				}}
				onChange={(checked) => {
					setChecked(checked);
					args.onChange?.(checked);
				}}
			/>
		);
	},
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Can't check me",
	},
};

/**
 * The indeterminate checkbox will typically be set by the parent component in a form with nested checkboxes.
 * The indeterminate prop cannot be set by the component itself. This example uses an `onClick` handler to toggle
 * the checked state when the indeterminate checkbox is clicked, the checkbox does not natively have this behaviour.
 */
export const Indeterminate: Story = {
	args: {
		isIndeterminate: true,
		children: 'Not sure',
	},
};

export const List = {
	render: ({ disabled, onChange }) => {
		const [selected, setSelected] = useState(() => ({
			avocado: true,
			blueberries: true,
			cherries: false,
			coconut: true,
			strawberries: false,
		}));

		const handleChange = (checked: boolean, value: string) => {
			setSelected((prev) => ({
				...prev,
				[value]: checked,
			}));
			onChange(value, checked);
		};

		return (
			<>
				{listData.map((item) => (
					<CheckBox
						key={item.value}
						disabled={disabled}
						value={item.value}
						name={`checkbox-${item.value}`}
						checked={selected[item.value]}
						onChange={(checked) =>
							handleChange(checked, item.value)
						}
					>
						{item.label}
					</CheckBox>
				))}
			</>
		);
	},
	args: {
		disabled: false,
	},
};

export const MultipleLines: Story = {
	args: {
		checked: false,
		disabled: false,
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
		children: <Item label="Avocados" rating="4.3" />,
		value: '1',
	},
};

export const WithMultiLineComponent: Story = {
	args: {
		checked: false,
		disabled: false,
		children: (
			<div
				style={{
					display: 'grid',
					gridGap: '8px',
					gridTemplateColumns: '1fr auto auto',
				}}
			>
				<Heading as="h5">Your last order</Heading>
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

/**
 * One row per size — `large`, then `medium`, then `small` — with each state
 * across the columns.
 *
 * `large` (24px) is the pre-2026 control and the unchanged default. `medium`
 * (20px) and `small` (16px) come from the `5` and `4` space tokens, and the
 * tick is always the box less the 2px inset Figma specifies — which is why
 * today's 24px box already pairs with a 20px tick.
 */
export const Sizes: Story = {
	render: (args) => (
		<Stack space="3">
			{(['large', 'medium', 'small'] as const).map((size) => (
				<Columns key={size} space="4">
					<Column width="1/3">
						<CheckBox {...args} size={size} value={`${size}-off`}>
							<Text size="2">unchecked</Text>
						</CheckBox>
					</Column>
					<Column width="1/3">
						<CheckBox
							{...args}
							size={size}
							value={`${size}-on`}
							checked
						>
							<Text size="2">checked</Text>
						</CheckBox>
					</Column>
					<Column width="1/3">
						<CheckBox
							{...args}
							size={size}
							value={`${size}-mixed`}
							isIndeterminate
						>
							<Text size="2">mixed</Text>
						</CheckBox>
					</Column>
				</Columns>
			))}
		</Stack>
	),
};
