import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';

import { Stepper } from '.';

export default {
	title: 'Forms & Input Fields/Stepper',
	component: Stepper,
} satisfies Meta<typeof Stepper>;

const Template: StoryFn<typeof Stepper> = ({
	onChange: incomingOnChange,
	value: incomingValue,
	...args
}) => {
	const [value, setValue] = useState<number>(incomingValue);
	return (
		<Stepper
			onChange={(stepValue) => {
				setValue(stepValue);
				incomingOnChange(stepValue);
			}}
			value={value}
			{...args}
		/>
	);
};

const standardProps = {
	value: 2.5,
	min: 0,
	max: 10,
	step: 0.5,
	disabled: false,
	onChange: action('onChange'),
};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;

const fullWidthPropsProps = {
	...standardProps,
	isFullWidth: true,
};
export const FullWidth = Template.bind(fullWidthPropsProps);
FullWidth.args = fullWidthPropsProps;

const formatter = new Intl.NumberFormat('en-AU', {
	style: 'currency',
	currency: 'AUD',
});
const withFormattingProps = {
	value: 32,
	min: 0,
	max: 99,
	step: 0.05,
	disabled: false,
	format: formatter.format,
	onChange: action('onChange'),
};
export const WithFormatting = Template.bind(withFormattingProps);
WithFormatting.args = withFormattingProps;
