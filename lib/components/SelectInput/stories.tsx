import { AccountEditIcon, CalendarIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { SelectInput } from '.';

const sharedKnobs = placeholder => ({
	placeholder: text('Placeholder', placeholder),
	disabled: boolean('disabled', false),
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});

const isTouched = (touched: boolean) => boolean('isTouched', touched);
const isValid = (valid: boolean) => boolean('isValid', valid);

const selectOptions = optionsCSV =>
	text('Options', optionsCSV)
		.split(',')
		.map(item => item.trim())
		.map(item => (
			<option key={item} value={item}>
				{item}
			</option>
		));

storiesOf('Components|Inputs/Select', module)
	.addParameters({
		chromatic: { delay: 300 },
	})
	.add('Standard', () => (
		<SelectInput name="abc" {...sharedKnobs('Select one')}>
			<option disabled />
			{selectOptions('Option 1, Option 2, Option 3')}
		</SelectInput>
	))
	.add('With A Value', () => (
		<SelectInput name="abc" placeholder="Select one" value="Option 2">
			<option disabled />
			{selectOptions('Option 1, Option 2, Option 3')}
		</SelectInput>
	))
	.add('With Hint Text', () => (
		<SelectInput
			name="abc"
			placeholder="Select one"
			hintText={text('Hint Text', 'Cannot select option 3')}>
			<option disabled />
			{selectOptions('Option 1, Option 2, Option 3')}
		</SelectInput>
	))
	.add('With Icon', () => (
		<div style={{ display: 'grid', gridGap: '16px' }}>
			<SelectInput
				name="abc"
				placeholder="Select one"
				prefixIcon={CalendarIcon}>
				<option disabled />
				{selectOptions('Option 1, Option 2, Option 3')}
			</SelectInput>

			<SelectInput
				isTouched
				isValid
				name="abc"
				placeholder="Select one"
				prefixIcon={AccountEditIcon}>
				<option disabled />
				{selectOptions('Option 1, Option 2, Option 3')}
			</SelectInput>
			<SelectInput
				isTouched
				name="abc"
				placeholder="Select one"
				prefixIcon={AccountEditIcon}
				isValid={false}>
				<option disabled />
				{selectOptions('Option 1, Option 2, Option 3')}
			</SelectInput>
			<SelectInput
				isTouched
				disabled
				name="abc"
				placeholder="Select one"
				prefixIcon={AccountEditIcon}
				isValid={false}>
				<option disabled />
				{selectOptions('Option 1, Option 2, Option 3')}
			</SelectInput>
		</div>
	))
	.add('With Validation', () => (
		<SelectInput
			name="abc"
			isValid={isValid(false)}
			isTouched={isTouched(false)}
			placeholder="Select one"
			hintText={text('Hint Text', 'Cannot select option 3')}>
			<option disabled />
			{selectOptions('Option 1, Option 2, Option 3')}
		</SelectInput>
	))
	.add('Disabled', () => (
		<SelectInput
			disabled
			name="abc"
			placeholder="Select one"
			value="Option 2">
			<option disabled />
			<option value="Option 2">Option 2</option>
		</SelectInput>
	));
