import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { Switch } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { SimplePagination } from '../SimplePagination';

export default {
	title: 'Components/Switch',
	component: Switch,
}as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
	<Switch {...args}/>
);


const standardProps = {
	disabled: false,
	toggled: false,
	onChange: action('onChange'),
};

export const untoggled: ComponentStory<typeof Switch> = Template.bind(standardProps);
untoggled.args = standardProps;

/*
export const untoggled = () => <Switch toggled={false} />;
export const toggled = () => <Switch toggled />;
export const disabledUntoggled = () => <Switch disabled toggled={false} />;
export const disabledToggled = () => <Switch disabled toggled />;
*/
