import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { CheckBox } from '.';
import styles from '../CheckableBase/style.scss';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
});

const checked = () => ({
	checked: boolean('checked', false),
});

storiesOf('Components|Inputs/CheckBox', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '300px', width: '100%' }}>{story()}</div>
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
							console.log({ [item.value]: checked });

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
	));
