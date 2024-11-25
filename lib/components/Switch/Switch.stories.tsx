import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Switch } from '.';

export default {
	title: 'Components/Switch',
	component: Switch,
} satisfies Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = ({ ...args }) => <Switch {...args} />;

const standardProps = {
	isDisabled: false,
	isSelected: false,
	onChange: action('onChange'),
	className: 'toggleButton-class',
};

export const untoggled: StoryFn<typeof Switch> = Template.bind(standardProps);
untoggled.args = standardProps;

const untoggledDisabledProps = {
	...standardProps,
	isDisabled: true,
};

export const untoggledDisabled: StoryFn<typeof Switch> = Template.bind(
	untoggledDisabledProps,
);
untoggledDisabled.args = untoggledDisabledProps;

const toggledProps = {
	...standardProps,
	isSelected: true,
};

export const toggled: StoryFn<typeof Switch> = Template.bind(toggledProps);
toggled.args = toggledProps;

const toggledDisabledProps = {
	...standardProps,
	isSelected: true,
	isDisabled: true,
};

export const toggledDisabled: StoryFn<typeof Switch> =
	Template.bind(toggledDisabledProps);
toggledDisabled.args = toggledDisabledProps;
