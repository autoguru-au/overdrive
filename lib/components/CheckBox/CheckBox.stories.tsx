import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';
import { fn } from 'storybook/test';

import { Badge } from '../Badge/Badge';
import { Heading } from '../Heading/Heading';
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
		onChange: fn(),
		onClick: fn(),
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
