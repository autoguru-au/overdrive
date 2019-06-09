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
	(text('Options', optionsCSV) as string)
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
	.add('default', () => (
		<SelectInput name="abc" {...sharedKnobs('Select one')}>
			<option disabled />
			{selectOptions('Option 1, Option 2, Option 3')}
		</SelectInput>
	))
	.add('with a value', () => (
		<SelectInput name="abc" placeholder="Select one" value="Option 2">
			<option disabled />
			{selectOptions('Option 1, Option 2, Option 3')}
		</SelectInput>
	))
	.add('with hint text', () => (
		<SelectInput
			name="abc"
			placeholder="Select one"
			hintText={text('Hint Text', 'Cannot select option 3')}>
			<option disabled />
			{selectOptions('Option 1, Option 2, Option 3')}
		</SelectInput>
	))
	.add('with validation', () => (
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
	.add('disabled', () => (
		<SelectInput
			disabled
			name="abc"
			placeholder="Select one"
			value="Option 2">
			<option disabled />
			<option value="Option 2">Option 2</option>
		</SelectInput>
	));
