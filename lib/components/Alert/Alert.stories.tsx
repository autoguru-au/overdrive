import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { Text } from '../Text';

import { Alert } from '.';

const onRequestClose = action('onRequestClose');
type Intent = ComponentProps<typeof Alert>['intent'];

const meta = {
	title: 'Components/Alert',
	component: Alert,
	args: {
		intent: 'success',
	},
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
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {
		onRequestClose,
		children: (
			<Text>
				Your invoice was sent to <Text strong>abc@supplier.co</Text>
			</Text>
		),
	},
	render: (args) => (
		<div
			style={{
				display: 'grid',
				gridAutoFlow: 'row dense',
				gridGap: '24px',
			}}
		>
			<div>
				<Alert {...args} />
			</div>
		</div>
	),
};

export const StandardAllIntents: Story = {
	render: (args) => (
		<div
			style={{
				display: 'grid',
				gridAutoFlow: 'row dense',
				gridGap: '24px',
			}}
		>
			<div>
				<Alert
					{...args}
					intent="success"
					onRequestClose={onRequestClose}
				>
					<Text>
						Your invoice was sent to{' '}
						<Text strong>abc@supplier.co</Text>
					</Text>
				</Alert>
			</div>
			<div>
				<Alert
					{...args}
					intent="warning"
					onRequestClose={onRequestClose}
				>
					This will affect job changes
				</Alert>
			</div>
			<div>
				<Alert
					{...args}
					intent="danger"
					onRequestClose={onRequestClose}
				>
					Something went wrong
				</Alert>
			</div>
			<div>
				<Alert
					{...args}
					intent="information"
					onRequestClose={onRequestClose}
				>
					Something worth noting happened
				</Alert>
			</div>
			<div>
				<Alert
					{...args}
					intent="information"
					onRequestClose={onRequestClose}
				>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Donec quam felis, ultricies nec, pellentesque
					eu, pretium quis, sem. Nulla consequat massa quis enim.
					Donec pede justo, fringilla vel, aliquet nec, vulputate
					eget, arcu. In enim justo, rhoncus ut, imperdiet a,
					venenatis vitae, justo. Nullam dictum felis eu pede mollis
					pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
					semper nisi. Aenean vulputate eleifend tellus. Aenean leo
					ligula, porttitor eu, consequat vitae, eleifend ac, enim.
					Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
				</Alert>
			</div>
		</div>
	),
};

export const InlineAllIntents: Story = {
	args: {
		inline: true,
	},
	render: StandardAllIntents.render,
};

export const NoneDismissibleAllIntents: Story = {
	args: {
		dismissible: false,
	},
	render: StandardAllIntents.render,
};
