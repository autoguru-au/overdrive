import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Alert } from '.';

import { Text } from '../Text';

export default { title: 'Components|Alert', component: Alert };

export const Standard = () => (
	<div
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
		}}>
		<div>
			<Alert intent="success" onRequestClose={action('onRequestClose')}>
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>

		<div>
			<Alert dismissible intent="warning">
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert dismissible intent="danger">
				Something went wrong
			</Alert>
		</div>

		<div>
			<Alert dismissible intent="information">
				Something worth noting happened
			</Alert>
		</div>
	</div>
);

export const Inline = () => (
	<div
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
		}}>
		<div>
			<Alert inline intent="success">
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>

		<div>
			<Alert inline intent="warning">
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert inline intent="danger">
				Something went wrong
			</Alert>
		</div>

		<div>
			<Alert inline intent="information">
				Something worth noting happened
			</Alert>
		</div>
	</div>
);

export const NonDismissible = () => (
	<div
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
		}}>
		<div>
			<Alert intent="success" dismissible={false}>
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>

		<div>
			<Alert intent="warning" dismissible={false}>
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert intent="danger" dismissible={false}>
				Something went wrong
			</Alert>
		</div>

		<div>
			<Alert intent="information" dismissible={false}>
				Something worth noting happened
			</Alert>
		</div>
	</div>
);
