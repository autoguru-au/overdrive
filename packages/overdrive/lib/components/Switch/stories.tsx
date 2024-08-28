import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Switch } from '.';

export default {
	title: 'Components/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({
	...args
}) => (
	<Switch
		{...args}
	/>
);

const standardProps = {
	isDisabled: false,
	isSelected: false,
	onChange: action('onChange'),
	className: "toggleButton-class",
};

export const untoggled: ComponentStory<typeof Switch> =
	Template.bind(standardProps);
untoggled.args = standardProps;

const untoggledDisabledProps = {
	...standardProps,
	isDisabled: true,
};

export const untoggledDisabled: ComponentStory<typeof Switch> = Template.bind(
	untoggledDisabledProps,
);
untoggledDisabled.args = untoggledDisabledProps;

const toggledProps = {
	...standardProps,
	isSelected: true,
};

export const toggled: ComponentStory<typeof Switch> =
	Template.bind(toggledProps);
toggled.args = toggledProps;

const toggledDisabledProps = {
	...standardProps,
	isSelected: true,
	isDisabled: true,
};

export const toggledDisabled: ComponentStory<typeof Switch> =
	Template.bind(toggledDisabledProps);
toggledDisabled.args = toggledDisabledProps;
