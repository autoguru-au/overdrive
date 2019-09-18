import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Switch } from './Switch';

storiesOf('Components|Switch', module)
	.add('standard', () => (
		<Switch
			disabled={boolean('disabled', false)}
			toggled={boolean('toggled', false)}
			onChange={action('onChange')}
		/>
	))
	.add('Un-toggled', () => <Switch toggled={false} />)
	.add('Toggled', () => <Switch toggled />)
	.add('Disabled Un-toggled', () => <Switch disabled toggled={false} />)
	.add('Disabled Toggled', () => <Switch disabled toggled />);
