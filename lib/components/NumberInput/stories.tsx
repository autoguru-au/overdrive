import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { NumberInput } from '.';
import {
	CalendarIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';

const sharedKnobs = placeholder => ({
	placeholder: text('Placeholder', placeholder),
	disabled: boolean('disabled', false),
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});

storiesOf('Components|Inputs/Number', module)
	.addParameters({
		chromatic: { delay: 300 },
	})
	.add('default', () => (
		<NumberInput name="abc" {...sharedKnobs('How many?')} />
	))
	.add('with a value', () => (
		<NumberInput name="abc" placeholder="How many" value="42" />
	))
	.add('with hint text', () => (
		<NumberInput
			name="abc"
			placeholder="How many?"
			hintText={text('Hint Text', 'Must be greater than 10.')}
		/>
	))
	.add('with icon', () => (
		<div style={{ display: 'grid', gridGap: '16px' }}>
			<NumberInput
				name="abc"
				placeholder="How much?"
				prefixIcon={CurrencyUsdIcon}
			/>
			<NumberInput
				name="abc"
				placeholder="How many days?"
				suffixIcon={CalendarIcon}
			/>
			<NumberInput
				name="abc"
				placeholder="How many more?"
				prefixIcon={PlusIcon}
				suffixIcon={StarIcon}
			/>
			<NumberInput
				isTouched
				isValid
				name="abc"
				placeholder="How many more?"
				prefixIcon={PlusIcon}
				suffixIcon={StarIcon}
			/>
			<NumberInput
				isTouched
				name="abc"
				placeholder="How many more?"
				prefixIcon={PlusIcon}
				suffixIcon={StarIcon}
				isValid={false}
			/>
			<NumberInput
				isTouched
				disabled
				name="abc"
				placeholder="How many more?"
				prefixIcon={PlusIcon}
				suffixIcon={StarIcon}
				isValid={false}
			/>
		</div>
	))
	.add('disabled', () => (
		<NumberInput disabled name="abc" placeholder="How many?" />
	));
