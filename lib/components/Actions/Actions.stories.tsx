import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';

import { Actions } from '.';

const meta = {
	title: 'Components/Actions',
	component: Actions,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 300, width: '100%' }}>{story()}</div>
		),
	],
} satisfies Meta<typeof Actions>;

export default meta;

type Story = StoryObj<typeof Actions>;

const ActionsContent = () => (
	<>
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
	</>
);

export const Standard: Story = {
	args: {
		noWrap: false,
		children: <ActionsContent />,
	},
};

export const NoWrap: Story = {
	args: {
		noWrap: true,
		children: <ActionsContent />,
	},
};
