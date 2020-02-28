import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { Badge, EBadgeColour } from '../Badge';
import { StarRating } from '../StarRating';
import { Heading } from '../Typography/Heading';
import { Text } from '../Typography/Text';
import { CheckBox } from '.';

const baseProps = () => ({
	children: text('Checkbox label', 'check me!'),
});

const checked = () => ({
	checked: boolean('checked', false),
});

storiesOf('Components|Inputs/CheckBox', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
	))
	.add('Standard', () => {
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
				list.reduce(
					(values, item: { label: string; value: string }) => {
						values[item.value] = false;

						return values;
					},
					{},
				),
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
	})
	.add('Unchecked', () => (
		<CheckBox name="check-name" value="1" {...baseProps()} />
	))
	.add('Checked', () => (
		<CheckBox checked name="check-name" value="1" {...baseProps()} />
	))
	.add('Disabled', () => (
		<CheckBox
			disabled
			name="check-name"
			value="1"
			{...checked()}
			{...baseProps()}
		/>
	))
	.add('Multiple Lines', () => (
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
	))
	.add('With Component', () => {
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
	})
	.add('With Multi Line Component', () => (
		<>
			<CheckBox value="1">
				<div
					style={{
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto auto',
					}}>
					<Heading is="h5">Saved Credit Card</Heading>
					<Badge colour={EBadgeColour.Neutral} label="SUBSCRIBE" />
					<Badge colour={EBadgeColour.Neutral} label="AUTO TOP-UP" />
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
					<Badge colour={EBadgeColour.Neutral} label="SUBSCRIBE" />
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
	));
