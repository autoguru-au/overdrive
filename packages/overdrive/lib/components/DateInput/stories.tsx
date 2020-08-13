import { AccountEditIcon, CalendarIcon, StarIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';

import { DateInput } from '.';

const formatDate = (date: Date = new Date()) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const todayStr: string = formatDate(
	isChromatic() ? new Date(2019, 5, 1) : new Date(),
);

const sharedKnobs = (placeholder) => ({
	placeholder: text('Placeholder', placeholder),
	disabled: boolean('disabled', false),
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});
const isTouched = (touched: boolean) => boolean('isTouched', touched);
const isValid = (valid: boolean) => boolean('isValid', valid);

export default {
	title: 'Components/Inputs/Date',
	component: DateInput,
	parameters: { chromatic: { delay: 300 } },
};

export const standard = () => (
	<DateInput name="date" {...sharedKnobs('What is your DOB?')} />
);
export const withAValue = () => (
	<DateInput
		value={todayStr}
		{...sharedKnobs('What is your DOB?')}
		name="abc"
	/>
);
export const withHintText = () => (
	<DateInput
		name="abc"
		{...sharedKnobs('What is your DOB?')}
		hintText={text('Hint Text', 'dd/mm/yyy')}
	/>
);
export const withIcon = () => (
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
);
export const withValidation = () => (
	<DateInput
		value={todayStr}
		{...sharedKnobs('What is your DOB?')}
		name="abc"
		isValid={isValid(false)}
		isTouched={isTouched(false)}
		hintText={text('Hint Text', 'dd/mm/yyy')}
	/>
);
export const disabled = () => (
	<DateInput
		disabled
		value={todayStr}
		placeholder="What si your DOB?"
		name="abc"
		hintText={text('Hint Text', 'dd/mm/yyy')}
	/>
);
