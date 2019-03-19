import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { RadioButton, RadioGroup } from '.';
import styles from '../CheckableBase/style.scss';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
	onChange: checked => console.log('checked', checked),
});

const checked = () => ({
	checked: boolean('checked', false),
});

storiesOf('Components|Radio', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '300px', width: '100%' }}>{story()}</div>
	))
	.add('default', () => (
		<RadioGroup name="make">
			<RadioButton label="Subaru" value="subaru" />
			<RadioButton label="Kia" value="kia" />
			<RadioButton label="Toyota" value="toyota" />
			<RadioButton label="Holden" value="holden" />
			<RadioButton label="Ford" value="ford" />
		</RadioGroup>
	))
	.add('unchecked', () => (
		<RadioGroup name="radio-story">
			<RadioButton name="radio-name" value="1" {...baseProps()} />
		</RadioGroup>
	))
	.add('checked', () => (
		<RadioGroup name="radio-story">
			<RadioButton
				name="radio-name"
				value="1"
				checked={true}
				{...baseProps()}
			/>
		</RadioGroup>
	))
	.add('hovered', () => (
		<RadioGroup name="radio-story">
			<RadioButton
				name="radio-name"
				value="1"
				className={styles.hovered}
				{...checked()}
				{...baseProps()}
			/>
		</RadioGroup>
	))
	.add('active', () => (
		<RadioGroup name="radio-story">
			<RadioButton
				name="radio-name"
				value="1"
				className={styles.active}
				{...checked()}
				{...baseProps()}
			/>
		</RadioGroup>
	))
	.add('focused', () => (
		<RadioGroup name="radio-story">
			<RadioButton
				name="radio-name"
				value="1"
				className={styles.focused}
				{...checked()}
				{...baseProps()}
			/>
		</RadioGroup>
	))
	.add('multiple lines', () => (
		<RadioGroup name="radio-story">
			<RadioButton
				name="radio-name"
				value="1"
				label="There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."
			/>
			<RadioButton
				name="radio-name"
				value="2"
				label="Oh, and it also works when mixed."
			/>
		</RadioGroup>
	));
