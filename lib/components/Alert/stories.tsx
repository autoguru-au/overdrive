import { action } from '@storybook/addon-actions';
import React from 'react';

import { Text } from '../Typography';
import { Alert } from '.';
import { EAlertIntent } from './Alert';

export default { title: 'Components|Alert' };

export const Standard = () => (
	<div
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
		}}>
		<div>
			<Alert
				intent={EAlertIntent.success}
				onRequestClose={action('onRequestClose')}>
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>

		<div>
			<Alert dismissible intent={EAlertIntent.warning}>
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert dismissible intent={EAlertIntent.danger}>
				Something went wrong
			</Alert>
		</div>

		<div>
			<Alert dismissible intent={EAlertIntent.info}>
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
			<Alert inline intent={EAlertIntent.success}>
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>

		<div>
			<Alert inline intent={EAlertIntent.warning}>
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert inline intent={EAlertIntent.danger}>
				Something went wrong
			</Alert>
		</div>

		<div>
			<Alert inline intent={EAlertIntent.info}>
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
			<Alert intent={EAlertIntent.success} dismissible={false}>
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>

		<div>
			<Alert intent={EAlertIntent.warning} dismissible={false}>
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert intent={EAlertIntent.danger} dismissible={false}>
				Something went wrong
			</Alert>
		</div>

		<div>
			<Alert intent={EAlertIntent.info} dismissible={false}>
				Something worth noting happened
			</Alert>
		</div>
	</div>
);
