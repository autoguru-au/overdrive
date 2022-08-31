import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Stepper } from '.';

export default {
	title: 'Components/Inputs/Stepper',
	component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
	<Stepper {...args} />
);

const standardProps = {
	value: 2.7,
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
	step: 0.5,
	disabled: false,
	format: formatter.format,
	onChange: action('onChange'),
};
export const withFormatting = Template.bind(withFormattingProps);
withFormatting.args = withFormattingProps;
