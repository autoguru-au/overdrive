import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Switch } from '.';

export default {
	title: 'Primatives/Switch',
	component: Switch,
} satisfies Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = ({ ...args }) => <Switch {...args} />;

const standardProps = {
	isDisabled: false,
	isSelected: false,
	onChange: action('onChange'),
	className: 'toggleButton-class',
};

export const Untoggled: StoryFn<typeof Switch> = Template.bind(standardProps);
Untoggled.args = standardProps;

const untoggledDisabledProps = {
	...standardProps,
	isDisabled: true,
};

export const UntoggledDisabled: StoryFn<typeof Switch> = Template.bind(
	untoggledDisabledProps,
);
UntoggledDisabled.args = untoggledDisabledProps;

const toggledProps = {
	...standardProps,
	isSelected: true,
};

export const Toggled: StoryFn<typeof Switch> = Template.bind(toggledProps);
Toggled.args = toggledProps;

const toggledDisabledProps = {
	...standardProps,
	isSelected: true,
	isDisabled: true,
};

export const ToggledDisabled: StoryFn<typeof Switch> =
	Template.bind(toggledDisabledProps);
ToggledDisabled.args = toggledDisabledProps;
