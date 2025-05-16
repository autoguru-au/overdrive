import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button/Button';

import { Actions } from './Actions';

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

export const Standard: Story = {
	args: {
		noWrap: false,
	},
	render: (args) => (
		<Actions {...args}>
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
	),
};

export const NoWrap: Story = {
	args: {
		noWrap: true,
	},
	render: Standard.render,
};
