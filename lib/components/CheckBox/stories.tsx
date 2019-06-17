import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { CheckBox } from '.';
import { Text } from '../Typography/Text';
import { StarRating } from '../StarRating';
import { Heading } from '../Typography/Heading';
import { Badge } from '../Badge';
import { EColour } from '../Badge/Badge';

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
	.add('default', () => {
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
	.add('unchecked', () => (
		<CheckBox name="check-name" value="1" {...baseProps()} />
	))
	.add('checked', () => (
		<CheckBox checked name="check-name" value="1" {...baseProps()} />
	))
	.add('disabled', () => (
		<CheckBox
			disabled
			name="check-name"
			value="1"
			{...checked()}
			{...baseProps()}
		/>
	))
	.add('multiple lines', () => (
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
	.add('with component', () => {
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
	.add('with multi-line component', () => (
		<>
			<CheckBox value="1">
				<div
					style={{
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto auto',
					}}>
					<Heading size={2}>Saved Credit Card</Heading>
					<Badge colour={EColour.Default} label="SUBSCRIBE" />
					<Badge colour={EColour.Default} label="AUTO TOP-UP" />
					<div
						style={{
							gridColumn: '1/4',
							display: 'grid',
							gridGap: '8px',
							gridTemplateColumns: '1fr auto',
						}}>
						<Text size={1}>Ending in 5678</Text>
						<Text size={1}>Updated 12 Dec 2018</Text>
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
					<Heading size={2}>Saved Debit Card</Heading>
					<Badge colour={EColour.Default} label="SUBSCRIBE" />
					<div
						style={{
							gridColumn: '1/4',
							display: 'grid',
							gridGap: '8px',
							gridTemplateColumns: '1fr auto',
						}}>
						<Text size={1}>Ending in 1234</Text>
						<Text size={1}>Updated 17 Oct 2019</Text>
					</div>
				</div>
			</CheckBox>
		</>
	));
