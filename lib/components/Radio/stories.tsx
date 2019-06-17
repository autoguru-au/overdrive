import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from '.';
import { Text } from '../Typography/Text';
import styles from '../CheckableBase/style.scss';
import { Badge } from '../Badge';
import { StarRating } from '../StarRating';
import { Heading } from '../Typography/Heading';
import { EColour } from '../Badge/Badge';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
	onChange: action('onChange'),
});

storiesOf('Components|Inputs/Radio', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
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
			<Radio disabled value="1" {...baseProps()} />
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
			<RadioGroup name="radio-story">
				<Radio value="1">
					<Item label="Cherries" rating="4.3" />
				</Radio>
				<Radio value="2">
					<Item label="Berries" rating="4.8" />
				</Radio>
				<Radio value="3">
					<Item label="Bananas" rating="1.8" />
				</Radio>
				<Radio value="3">
					<Item label="Mangoes" rating="1.3" />
				</Radio>
				<Radio value="4" label="Any other fruit" />
			</RadioGroup>
		);
	})
	.add('with multi-line component', () => (
		<RadioGroup name="radio-story">
			<Radio value="1">
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
			</Radio>
			<Radio value="1">
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
			</Radio>
		</RadioGroup>
	));
