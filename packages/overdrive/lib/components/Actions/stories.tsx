import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Button } from '../Button';

import { Actions } from '.';

export default {
	title: 'Components/Actions',
	component: Actions,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 300, width: '100%' }}>{story()}</div>
		),
	],
} as ComponentMeta<typeof Actions>;

const template: ComponentStory<typeof Actions> = (args) => (
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
);

const standardProps: Pick<ComponentProps<typeof Actions>, 'noWrap'> = {
	noWrap: false,
};
const noWrapProps: typeof standardProps = {
	noWrap: true,
};

export const standard: ComponentStory<typeof Actions> = template.bind(
	standardProps,
);
export const noWrap: ComponentStory<typeof Actions> = template.bind(
	noWrapProps,
);

standard.args = standardProps;
noWrap.args = noWrapProps;
