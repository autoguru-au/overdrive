import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from 'react';

import { Badge } from '../Badge';
import { Heading } from '../Heading';
import { StarRating } from '../StarRating';
import { Text } from '../Text';

import { CheckBox } from '.';

const baseProps = () => ({
	children: text('Checkbox label', 'check me!'),
});

const checkedFn = () => ({
	checked: boolean('checked', false),
});

export default {
	title: 'Components/Inputs/CheckBox',
	component: CheckBox,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
};

export const standard = () => {
	const Example = () => {
		const list: Array<{ label: string; value: string }> = [
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

		const [checkedValues, setCheckedValues] = useState(
			list.reduce((values, item: { label: string; value: string }) => {
				values[item.value] = false;

				return values;
			}, {}),
		);

		return (
			<>
				{list.map((item: { label: string; value: string }) => {
					const onClick = () =>
						setCheckedValues({
							...checkedValues,
							[item.value]: !checkedValues[item.value],
						});
					const onChange = (checked: boolean) =>
						action('onChange')({ [item.value]: checked });

					return (
						<CheckBox
							key={item.value}
							children={item.label}
							value={item.value}
							name={`want-${item.value}`}
							checked={checkedValues[item.value]}
							onClick={onClick}
							onChange={onChange}
						/>
					);
				})}
			</>
		);
	};

	return <Example />;
};

export const unchecked = () => (
	<CheckBox name="check-name" value="1" {...baseProps()} />
);
export const checked = () => (
	<CheckBox checked name="check-name" value="1" {...baseProps()} />
);
export const disabled = () => (
	<CheckBox
		disabled
		name="check-name"
		value="1"
		{...checkedFn()}
		{...baseProps()}
	/>
);
export const multipleLines = () => (
	<>
		<CheckBox
			children="There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."
			name="check-name"
			checked={boolean('first checked', false)}
			value="1"
		/>
		<CheckBox
			children="Oh, and it also works when mixed."
			name="check-name"
			checked={boolean('second checked', false)}
			value="2"
		/>
	</>
);
export const withComponent = () => {
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

	return (
		<>
			<CheckBox value="1">
				<Item label="Cherries" rating="4.3" />
			</CheckBox>
			<CheckBox value="2">
				<Item label="Berr" rating="4.8" />
			</CheckBox>
			<CheckBox value="3">
				<Item label="Bananas" rating="1.8" />
			</CheckBox>
			<CheckBox value="3">
				<Item label="Mangoes" rating="1.3" />
			</CheckBox>
			<CheckBox children="Any other fruit" value="4" />
		</>
	);
};

export const withMultiLineComponent = () => (
	<>
		<CheckBox value="1">
			<div
				style={{
					display: 'grid',
					gridGap: '8px',
					gridTemplateColumns: '1fr auto auto',
				}}>
				<Heading is="h5">Saved Credit Card</Heading>
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
		</CheckBox>
		<CheckBox value="1">
			<div
				style={{
					display: 'grid',
					gridGap: '8px',
					gridTemplateColumns: '1fr auto',
				}}>
				<Heading is="h5">Saved Debit Card</Heading>
				<Badge colour="neutral" label="SUBSCRIBE" />
				<div
					style={{
						gridColumn: '1/4',
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto',
					}}>
					<Text size={2}>Ending in 1234</Text>
					<Text size={2}>Updated 17 Oct 2019</Text>
				</div>
			</div>
		</CheckBox>
	</>
);
