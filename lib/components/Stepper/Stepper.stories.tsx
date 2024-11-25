import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';

import { Stepper } from '.';

export default {
	title: 'Components/Inputs/Stepper',
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
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const fullWidthPropsProps = {
	...standardProps,
	isFullWidth: true,
};
export const fullWidth = Template.bind(fullWidthPropsProps);
fullWidth.args = fullWidthPropsProps;

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
export const withFormatting = Template.bind(withFormattingProps);
withFormatting.args = withFormattingProps;
