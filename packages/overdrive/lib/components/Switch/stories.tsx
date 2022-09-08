import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Switch } from '.';

export default {
	title: 'Components/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({
	onChange: incomingOnChange,
	value,
	...args
}) => (
	<Switch
		onChange={(stepValue) => {
			setValue(stepValue);
			incomingOnChange(stepValue);
		}}
		value={value}
		{...args}
	/>
);

const standardProps = {
	disabled: false,
	toggled: false,
	onChange: action('onChange'),
};

export const untoggled: ComponentStory<typeof Switch> =
	Template.bind(standardProps);
untoggled.args = standardProps;

const untoggledDisabledProps = {
	...standardProps,
	disabled: true,
};

export const untoggledDisabled: ComponentStory<typeof Switch> = Template.bind(
	untoggledDisabledProps,
);
untoggledDisabled.args = untoggledDisabledProps;

const toggledProps = {
	...standardProps,
	toggled: true,
};

export const toggled: ComponentStory<typeof Switch> =
	Template.bind(toggledProps);
toggled.args = toggledProps;

const toggledDisabledProps = {
	...standardProps,
	toggled: true,
	disabled: true,
};

export const toggledDisabled: ComponentStory<typeof Switch> =
	Template.bind(toggledDisabledProps);
toggledDisabled.args = toggledDisabledProps;
