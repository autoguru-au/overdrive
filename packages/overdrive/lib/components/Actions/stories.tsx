import { boolean } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button } from '../Button';
import { Actions } from '.';

export default {
	title: 'Components|Actions',
	component: Actions,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 300, width: '100%' }}>{story()}</div>
		),
	],
};

export const standard = () => (
	<Actions noWrap={boolean('No Wrap', false)}>
		<Button>Login</Button>
		<Button variant="primary">Sign up</Button>
		<Button variant="secondary">Action 1</Button>
		<Button variant="secondary">Action 2</Button>
		<Button isLoading variant="secondary">
			Action 3
		</Button>
		<Button minimal variant="secondary">
			Action 4
		</Button>
	</Actions>
);
