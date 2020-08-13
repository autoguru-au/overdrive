import { AccountEditIcon, CalendarIcon } from '@autoguru/icons';
import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { SelectInput } from '.';

const isTouched = (touched: boolean) => boolean('isTouched', touched);
const isValid = (valid: boolean) => boolean('isValid', valid);

const selectOptions = (optionsCSV) =>
	text('Options', optionsCSV)
		.split(',')
		.map((item) => item.trim())
		.map((item) => (
			<option key={item} value={item}>
				{item}
			</option>
		));

export default {
	title: 'Components/Inputs/Select',
	component: SelectInput,
	parameters: {
		chromatic: { delay: 300 },
	},
};

export const standard = () => (
	<SelectInput name="abc" placeholder="Select one">
		<option disabled />
		{selectOptions('Option 1, Option 2, Option 3')}
	</SelectInput>
);
export const withAValue = () => (
	<SelectInput name="abc" placeholder="Select one" value="Option 2">
		<option disabled />
		{selectOptions('Option 1, Option 2, Option 3')}
	</SelectInput>
);
export const withHintText = () => (
	<SelectInput
		name="abc"
		placeholder="Select one"
		hintText={text('Hint Text', 'Cannot select option 3')}>
		<option disabled />
		{selectOptions('Option 1, Option 2, Option 3')}
	</SelectInput>
);
export const withIcon = () => (
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
);
export const withValidation = () => (
	<SelectInput
		name="abc"
		isValid={isValid(false)}
		isTouched={isTouched(false)}
		placeholder="Select one"
		hintText={text('Hint Text', 'Cannot select option 3')}>
		<option disabled />
		{selectOptions('Option 1, Option 2, Option 3')}
	</SelectInput>
);
export const disabled = () => (
	<SelectInput disabled name="abc" placeholder="Select one" value="Option 2">
		<option disabled />
		<option value="Option 2">Option 2</option>
	</SelectInput>
);
