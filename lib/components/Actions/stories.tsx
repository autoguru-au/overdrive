import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, EButtonVariant } from '../Button';
import { Actions } from '.';

storiesOf('Components|Actions', module)
	.addDecorator(story => (
		<div style={{ maxWidth: 300, width: '100%' }}>{story()}</div>
	))
	.add('default', () => (
		<Actions equalWidth={boolean('Equal Width', true)}>
			<Button>Login</Button>
			<Button variant={EButtonVariant.Primary}>Sign up</Button>
		</Actions>
	));
