import {
	AccountEditIcon,
	CalendarIcon,
	CheckIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { TextInput } from '.';

const sharedKnobs = placeholder => ({
	placeholder: text('Placeholder', placeholder),
	hintText: text('Hint Text', 'Cannot be Bob The Builder.'),
	disabled: boolean('disabled', false),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});
const isTouched = (touched: boolean) => boolean('isTouched', touched);
const isValid = (valid: boolean) => boolean('isValid', valid);

export default {
	title: 'Components|Inputs/Text',
	component: TextInput,
	parameters: {
		chromatic: { delay: 300 },
	},
};

export const standard = () => (
	<TextInput
		name="abc"
		placeholder="What is your first name?"
		hintText="Cannot be Bob The Builder."
	/>
);

export const withAValue = () => (
	<TextInput
		name="abc"
		placeholder="What is your first name?"
		value="Bob The Builder"
	/>
);

export const withHintText = () => (
	<TextInput
		name="abc"
		placeholder="What is your first name?"
		hintText={text('Hint Text', 'Cannot be Bob The Builder.')}
	/>
);

export const withIcon = () => (
	<div style={{ display: 'grid', gridGap: '16px' }}>
		<TextInput
			name="abc"
			placeholder="What month?"
			prefixIcon={CalendarIcon}
		/>
		<TextInput
			name="abc"
			placeholder="How many days?"
			suffixIcon={CheckIcon}
		/>
		<TextInput
			name="abc"
			placeholder="Your username?"
			prefixIcon={AccountEditIcon}
			suffixIcon={StarIcon}
		/>
		<TextInput
			isTouched
			isValid
			name="abc"
			placeholder="Your username?"
			prefixIcon={AccountEditIcon}
			suffixIcon={StarIcon}
		/>
		<TextInput
			isTouched
			name="abc"
			placeholder="Your username?"
			isValid={false}
			prefixIcon={AccountEditIcon}
			suffixIcon={StarIcon}
		/>
		<TextInput
			isTouched
			disabled
			name="abc"
			placeholder="Your username?"
			isValid={false}
			prefixIcon={AccountEditIcon}
			suffixIcon={StarIcon}
		/>
	</div>
);

export const withValidation = () => (
	<TextInput
		{...sharedKnobs('What is your first name?')}
		name="abc"
		isValid={isValid(false)}
		isTouched={isTouched(false)}
		hintText={text('Hint Text', 'Cannot be Bob The Builder.')}
	/>
);

export const disabled = () => (
	<TextInput
		disabled
		placeholder="What is your first name?"
		name="abc"
		hintText="Cannot be Bob The Builder."
	/>
);

export const disabledWithValue = () => (
	<TextInput
		disabled
		placeholder="What is your first name?"
		value="Bob The Builder"
		name="abc"
		hintText="Cannot be Bob The Builder."
	/>
);
