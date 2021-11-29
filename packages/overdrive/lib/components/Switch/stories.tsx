import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Switch } from '.';

export default {
	title: 'Components/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

const standardProps = {
	disabled: false,
	toggled: false,
	onChange: action('onChange'),
};

export const untoggled: ComponentStory<typeof Switch> = Template.bind(
	standardProps,
);
untoggled.args = standardProps;
