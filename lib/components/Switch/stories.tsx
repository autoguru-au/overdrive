import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';

storiesOf('Components|Switch', module)
	.add('default', () => (
		<Switch
			onChange={action('onChange')}
			disabled={boolean('disabled', false)}
			toggled={boolean('toggled', false)}
		/>
	))
	.add('Un-toggled', () => <Switch toggled={false} />)
	.add('Toggled', () => <Switch toggled={true} />)
	.add('Disabled Un-toggled', () => (
		<Switch disabled={true} toggled={false} />
	))
	.add('Disabled Toggled', () => <Switch disabled={true} toggled={true} />);
