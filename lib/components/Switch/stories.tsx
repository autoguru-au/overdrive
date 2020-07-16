import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import * as React from 'react';

import { Switch } from '.';

export default {
	title: 'Components|Switch',
	component: Switch,
};

export const standard = () => (
	<Switch
		disabled={boolean('disabled', false)}
		toggled={boolean('toggled', false)}
		onChange={action('onChange')}
	/>
);
export const untoggled = () => <Switch toggled={false} />;
export const toggled = () => <Switch toggled />;
export const disabledUntoggled = () => <Switch disabled toggled={false} />;
export const disabledToggled = () => <Switch disabled toggled />;
