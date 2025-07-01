import { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';

import { Box } from '../Box/Box';

import { IntentStripe } from './IntentStripe';

type Intent = ComponentProps<typeof IntentStripe>['intent'];
export default {
	title: 'Content/Intent Stripe',
	component: IntentStripe,
	argTypes: {
		intent: {
			options: [
				'information',
				'success',
				'warning',
				'danger',
			] as Intent[],
			defaultValue: 'primary',
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof IntentStripe>;

type Story = StoryObj<typeof IntentStripe>;

const MyStripe = (args: ComponentProps<typeof IntentStripe>) => (
	<Box
		position="relative"
		width="full"
		padding="6"
		backgroundColour="gray200"
		borderRadius="1"
		overflow="hidden"
	>
		<IntentStripe {...args} />
	</Box>
);

export const Standard: Story = {
	args: {
		intent: void 0,
		className: void 0,
	},
	render: (args) => (
		<Box
			style={{
				display: 'grid',
				gridAutoFlow: 'row dense',
				gridGap: '24px',
				width: '100%',
			}}
		>
			<MyStripe {...args} />
		</Box>
	),
};

export const StandardAllIntents: Story = {
	args: {
		intent: void 0,
		className: void 0,
	},
	render: (args) => (
		<Box
			style={{
				display: 'grid',
				gridAutoFlow: 'row dense',
				gridGap: '24px',
				width: '100%',
			}}
		>
			<MyStripe {...args} intent="success" />
			<MyStripe {...args} intent="warning" />
			<MyStripe {...args} intent="danger" />
			<MyStripe {...args} intent="information" />
		</Box>
	),
};
