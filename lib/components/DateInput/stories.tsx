import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { DateInput } from '.';
import { AccountEditIcon, CalendarIcon, StarIcon } from '@autoguru/icons';
import { formatDate } from './DateInput';

const todayStr: string = formatDate(
	isChromatic() ? new Date(2019, 5, 1) : new Date(),
);

const sharedKnobs = placeholder => ({
	placeholder: text('Placeholder', placeholder),
	disabled: boolean('disabled', false),
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});
const isTouched = (touched: boolean) => boolean('isTouched', touched);
const isValid = (valid: boolean) => boolean('isValid', valid);

storiesOf('Components|Inputs/Date', module)
	.addParameters({
		chromatic: { delay: 300 },
	})
	.add('default', () => (
		<DateInput name="date" {...sharedKnobs('What is your DOB?')} />
	))
	.add('with a value', () => (
		<DateInput
			value={todayStr}
			{...sharedKnobs('What is your DOB?')}
			name="abc"
		/>
	))
	.add('with hint text', () => (
		<DateInput
			name="abc"
			{...sharedKnobs('What is your DOB?')}
			hintText={text('Hint Text', 'dd/mm/yyy')}
		/>
	))
	.add('with icon', () => (
		<div style={{ display: 'grid', gridGap: '16px' }}>
			<DateInput
				name="abc"
				placeholder="What date?"
				prefixIcon={CalendarIcon}
			/>
			<DateInput
				name="abc"
				placeholder="What is your DOB?"
				suffixIcon={CalendarIcon}
			/>
			<DateInput
				name="abc"
				placeholder="What is your DOB?"
				prefixIcon={AccountEditIcon}
				suffixIcon={StarIcon}
			/>
			<DateInput
				isTouched
				isValid
				name="abc"
				placeholder="What is your DOB?"
				prefixIcon={AccountEditIcon}
				suffixIcon={CalendarIcon}
			/>
			<DateInput
				isTouched
				name="abc"
				placeholder="What is your DOB?"
				isValid={false}
				prefixIcon={AccountEditIcon}
				suffixIcon={CalendarIcon}
			/>
			<DateInput
				isTouched
				disabled
				name="abc"
				placeholder="What is your DOB?"
				isValid={false}
				prefixIcon={AccountEditIcon}
				suffixIcon={CalendarIcon}
			/>
		</div>
	))
	.add('with validation', () => (
		<DateInput
			value={todayStr}
			{...sharedKnobs('What is your DOB?')}
			name="abc"
			isValid={isValid(false)}
			isTouched={isTouched(false)}
			hintText={text('Hint Text', 'dd/mm/yyy')}
		/>
	))
	.add('disabled', () => (
		<DateInput
			disabled
			value={todayStr}
			placeholder="What si your DOB?"
			name="abc"
			hintText={text('Hint Text', 'dd/mm/yyy')}
		/>
	));
