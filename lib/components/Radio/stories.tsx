import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from '.';
import styles from '../CheckableBase/style.scss';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
	onChange: checked => console.log('checked', checked),
});

storiesOf('Components|Radio', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '300px', width: '100%' }}>{story()}</div>
	))
	.add('default', () => {
		const Example = () => {
			const [value, setValue] = useState('holden');

			const onChangeHandler = val => {
				action('onChange')(val);
				setValue(val);
			};

			return (
				<RadioGroup
					name="make"
					value={value}
					onChange={onChangeHandler}>
					<Radio label="Subaru" value="subaru" />
					<Radio label="Kia" value="kia" />
					<Radio label="Toyota" value="toyota" />
					<Radio label="Holden" value="holden" />
					<Radio label="Ford" value="ford" />
				</RadioGroup>
			);
		};

		return <Example />;
	})
	.add('unchecked', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" {...baseProps()} />
		</RadioGroup>
	))
	.add('checked', () => (
		<RadioGroup name="radio-story" value="1">
			<Radio value="1" {...baseProps()} />
		</RadioGroup>
	))
	.add('hovered', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" className={styles.hovered} {...baseProps()} />
		</RadioGroup>
	))
	.add('active', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" className={styles.active} {...baseProps()} />
		</RadioGroup>
	))
	.add('focused', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" className={styles.focused} {...baseProps()} />
		</RadioGroup>
	))
	.add('disabled', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" disabled={true} {...baseProps()} />
		</RadioGroup>
	))
	.add('multiple lines', () => (
		<RadioGroup name="radio-story">
			<Radio
				value="1"
				label="There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."
			/>
			<Radio value="2" label="Oh, and it also works when mixed." />
		</RadioGroup>
	));
