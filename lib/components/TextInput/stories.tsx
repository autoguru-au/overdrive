import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TextInput } from '.';

const sharedKnobs = placeholder => ({
	placeholder: text('Placeholder', placeholder),
	disabled: boolean('disabled', false),
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});
const isTouched = (touched: boolean) => boolean('isTouched', touched);
const isValid = (valid: boolean) => boolean('isValid', valid);

storiesOf('Components|Inputs/Text', module)
	.addParameters({
		chromatic: { delay: 300 },
	})
	.add('default', () => (
		<TextInput name="abc" {...sharedKnobs('What is your first name?')} />
	))
	.add('with a value', () => (
		<TextInput
			name="abc"
			placeholder="What is your first name?"
			value="Bob The Builder"
		/>
	))
	.add('with hint text', () => (
		<TextInput
			name="abc"
			placeholder="What is your first name?"
			hintText={text('Hint Text', 'Cannot be Bob The Builder.')}
		/>
	))
	.add('with validation', () => (
		<TextInput
			{...sharedKnobs('What is your first name?')}
			name="abc"
			isValid={isValid(false)}
			isTouched={isTouched(false)}
			hintText={text('Hint Text', 'Cannot be Bob The Builder.')}
		/>
	))
	.add('disabled', () => (
		<TextInput
			disabled
			placeholder="What is your first name?"
			name="abc"
			hintText="Cannot be Bob The Builder."
		/>
	));
