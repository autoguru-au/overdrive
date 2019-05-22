import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ToggleButton } from './ToggleButton';

storiesOf('Components|Inputs/ToggleButton', module)
	.add('default', () => (
		<ToggleButton
			onChange={action('onChange')}
			disabled={boolean('disabled', false)}
			toggled={boolean('toggled', false)}
		/>
	))
	.add('Un-toggled', () => <ToggleButton toggled={false} />)
	.add('Toggled', () => <ToggleButton toggled={true} />)
	.add('Disabled Un-toggled', () => (
		<ToggleButton disabled={true} toggled={false} />
	))
	.add('Disabled Toggled', () => (
		<ToggleButton disabled={true} toggled={true} />
	));
