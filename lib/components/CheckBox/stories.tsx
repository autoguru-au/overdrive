import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { CheckBox } from '.';
import styles from '../CheckableBase/style.scss';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
	onChange: checked => console.log('checked', checked),
});

const checked = () => ({
	checked: boolean('checked', false),
});

storiesOf('Components|CheckBox', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '300px', width: '100%' }}>{story()}</div>
	))
	.add('default', () => (
		<>
			<CheckBox
				label="Avocado"
				value="Avocado"
				onChange={checked => console.log({ checked })}
			/>
			<CheckBox label="Blueberries" value="Blueberries" />
			<CheckBox label="Cherries" value="Cherries" />
			<CheckBox label="Coconut" value="Coconut" />
			<CheckBox label="Strawberries" value="Strawberries" />
		</>
	))
	.add('unchecked', () => (
		<CheckBox name="check-name" value="1" {...baseProps()} />
	))
	.add('checked', () => (
		<CheckBox name="check-name" value="1" checked={true} {...baseProps()} />
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
			name="check-name"
			value="1"
			disabled={true}
			{...checked()}
			{...baseProps()}
		/>
	))
	.add('multiple lines', () => (
		<>
			<CheckBox
				name="check-name"
				value="1"
				label="There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."
			/>
			<CheckBox
				name="check-name"
				value="2"
				label="Oh, and it also works when mixed."
			/>
		</>
	));
