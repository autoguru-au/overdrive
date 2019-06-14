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
import styles from './style.scss';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
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
								label={item.label}
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
	.add('hovered', () => (
		<CheckBox
			name="check-name"
			value="1"
			className={styles.hovered}
			{...checked()}
			{...baseProps()}
		/>
	))
	.add('active', () => (
		<CheckBox
			name="check-name"
			value="1"
			className={styles.active}
			{...checked()}
			{...baseProps()}
		/>
	))
	.add('focused', () => (
		<CheckBox
			name="check-name"
			value="1"
			className={styles.focused}
			{...checked()}
			{...baseProps()}
		/>
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
				name="check-name"
				checked={boolean('first checked', false)}
				value="1"
				label="There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."
			/>
			<CheckBox
				name="check-name"
				checked={boolean('second checked', false)}
				value="2"
				label="Oh, and it also works when mixed."
			/>
		</>
	))
	.add('with component', () => (
		<>
			<CheckBox value="1">
				<div
					style={{
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto',
					}}>
					<Text>Cherries</Text>
					<StarRating rating={4.3} />
				</div>
			</CheckBox>
			<CheckBox value="2">
				<div
					style={{
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto',
					}}>
					<Text>Blue Berries</Text>
					<StarRating rating={4.8} />
				</div>
			</CheckBox>
			<CheckBox value="3">
				<div
					style={{
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto',
					}}>
					<Text>Bananas</Text>
					<StarRating rating={1.8} />
				</div>
			</CheckBox>
			<CheckBox value="3">
				<div
					style={{
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto',
					}}>
					<Text>Mangoes</Text>
					<StarRating rating={1.3} />
				</div>
			</CheckBox>
			<CheckBox value="4" label="Any other fruit" />
		</>
	))
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
							gridTemplateColumns: 'auto auto',
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
							gridTemplateColumns: 'auto auto',
						}}>
						<Text size={1}>Ending in 1234</Text>
						<Text size={1}>Updated 17 Oct 2019</Text>
					</div>
				</div>
			</CheckBox>
		</>
	));
