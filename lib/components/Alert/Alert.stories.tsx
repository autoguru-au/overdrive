import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { action } from 'storybook/actions';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

import { Alert } from './Alert';

const onRequestClose = action('onRequestClose');
type Intent = ComponentProps<typeof Alert>['intent'];

const intents = ['information', 'success', 'warning', 'danger'] as Intent[];

const INVOICE_SENT = 'Your invoice was sent to abc@supplier.co';
const INVOICE_SENT_TITLE = 'Invoice sent';

const meta = {
	title: 'Components/Alert',
	component: Alert,
	args: {
		intent: 'success',
	},
	argTypes: {
		children: { control: false },
		intent: {
			options: intents,
			defaultValue: 'primary',
			control: {
				type: 'select',
			},
		},
		appearance: {
			options: [undefined, 'detail', 'message'],
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const Grid = ({ children }: { children: React.ReactNode }) => (
	<div
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
		}}
	>
		{children}
	</div>
);

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
		<Grid>
			<div>
				<Alert {...args} />
			</div>
		</Grid>
	),
};

export const StandardAllIntents: Story = {
	render: (args) => (
		<Grid>
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
		</Grid>
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

export const DetailAllIntents: Story = {
	args: {
		appearance: 'detail',
	},
	render: (args) => (
		<Grid>
			{intents.map((intent) => (
				<Alert {...args} key={intent} intent={intent}>
					{INVOICE_SENT}
				</Alert>
			))}
		</Grid>
	),
};

export const DetailWithTitleAndAction: Story = {
	args: {
		appearance: 'detail',
		title: INVOICE_SENT_TITLE,
		onRequestClose,
		action: (
			<Button variant="secondary" size="small" onClick={action('action')}>
				View invoice
			</Button>
		),
	},
	render: (args) => (
		<Grid>
			{intents.map((intent) => (
				<Alert {...args} key={intent} intent={intent}>
					{INVOICE_SENT}
				</Alert>
			))}
		</Grid>
	),
};

export const MessageAllIntents: Story = {
	args: {
		appearance: 'message',
	},
	render: (args) => (
		<Grid>
			{intents.map((intent) => (
				<Alert {...args} key={intent} intent={intent}>
					You have 1 new notification
				</Alert>
			))}
		</Grid>
	),
};

export const InteractionTest: Story = {
	args: {
		appearance: 'detail',
		title: INVOICE_SENT_TITLE,
		onRequestClose,
		children: INVOICE_SENT,
	},
	render: (args) => (
		<Grid>
			<Alert {...args} />
			<Alert {...args} appearance="message" title={undefined}>
				You have 1 new notification
			</Alert>
		</Grid>
	),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('the detail layout is announced as an alert', async () => {
			const [alert] = canvas.getAllByRole('alert');

			await expect(alert).toBeInTheDocument();
			await expect(alert).toHaveTextContent(INVOICE_SENT_TITLE);
		});

		await step('the message layout is a passive status', async () => {
			const [status] = canvas.getAllByRole('status');

			await expect(status).toHaveTextContent(
				'You have 1 new notification',
			);
		});

		await step('the message layout offers no close control', async () => {
			const closeButtons = canvas.getAllByLabelText('close');

			await expect(closeButtons).toHaveLength(1);
		});

		await step('the close control is reachable and clickable', async () => {
			const [close] = canvas.getAllByLabelText('close');

			await close.focus();
			await expect(close).toHaveFocus();

			await userEvent.click(close);
		});
	},
};
