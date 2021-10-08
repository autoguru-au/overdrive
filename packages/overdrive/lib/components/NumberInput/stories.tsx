import {
	CalendarIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { NumberInput } from '.';

const sharedKnobs = (placeholder) => ({
	placeholder: text('Placeholder', placeholder),
	disabled: boolean('disabled', false),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});

export default {
	title: 'Components/Inputs/Number',
	component: NumberInput,
	parameters: {
		chromatic: { delay: 300 },
	},
};

export const Standard = () => (
	<NumberInput name="abc" {...sharedKnobs('How many?')} />
);

export const withAValue = () => (
	<NumberInput name="abc" placeholder="How many" value="42" />
);
export const withMouseWheelPrevented = () => (
	<NumberInput
		preventMouseWheel
		name="abc"
		placeholder="How many"
		value="42"
	/>
);
export const withoutNotch = () => (
	<NumberInput notch={false} name="abc" placeholder="How many" value="42" />
);

export const withHintText = () => (
	<NumberInput
		name="abc"
		placeholder="How many?"
		hintText={text('Hint Text', 'Must be greater than 10.')}
	/>
);

export const withIcon = () => (
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
);

export const disabled = () => (
	<NumberInput disabled name="abc" placeholder="How many?" />
);

export const loading = () => (
	<NumberInput isLoading name="abc" placeholder="How many?" />
);

export const loadingWithIcon = () => (
	<NumberInput
		isLoading
		prefixIcon={PlusIcon}
		suffixIcon={StarIcon}
		name="abc"
		placeholder="How many?"
	/>
);
