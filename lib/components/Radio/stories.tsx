import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { Badge, EBadgeColour } from '../Badge';
import styles from '../CheckableBase/style.scss';
import { StarRating } from '../StarRating';
import { Heading } from '../Typography/Heading';
import { Text } from '../Typography/Text';
import { Radio, RadioGroup } from '.';

const baseProps = () => ({
	children: text('Checkbox label', 'check me!'),
	onChange: action('onChange'),
});

storiesOf('Components|Inputs/Radio', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
	))
	.add('Standard', () => {
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
					<Radio children="Subaru" value="subaru" />
					<Radio children="Kia" value="kia" />
					<Radio children="Toyota" value="toyota" />
					<Radio children="Holden" value="holden" />
					<Radio children="Ford" value="ford" />
				</RadioGroup>
			);
		};

		return <Example />;
	})
	.add('Unchecked', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" {...baseProps()} />
		</RadioGroup>
	))
	.add('Checked', () => (
		<RadioGroup name="radio-story" value="1">
			<Radio value="1" {...baseProps()} />
		</RadioGroup>
	))
	.add('Hovered', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" className={styles.hovered} {...baseProps()} />
		</RadioGroup>
	))
	.add('Active', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" className={styles.active} {...baseProps()} />
		</RadioGroup>
	))
	.add('Focused', () => (
		<RadioGroup name="radio-story">
			<Radio value="1" className={styles.focused} {...baseProps()} />
		</RadioGroup>
	))
	.add('Disabled', () => (
		<RadioGroup name="radio-story">
			<Radio disabled value="1" {...baseProps()} />
		</RadioGroup>
	))
	.add('Multiple Lines', () => (
		<RadioGroup name="radio-story">
			<Radio
				children="There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."
				value="1"
			/>
			<Radio children="Oh, and it also works when mixed." value="2" />
		</RadioGroup>
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
				<Radio children="Any other fruit" value="4" />
			</RadioGroup>
		);
	})
	.add('With Multi Line Component', () => (
		<RadioGroup name="radio-story">
			<Radio value="1">
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
			</Radio>
			<Radio value="1">
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
			</Radio>
		</RadioGroup>
	));
