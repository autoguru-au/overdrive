import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Alert } from '.';
import { Text } from '../Typography';
import { EAlertIntent } from './Alert';

storiesOf('Components|Alert', module).add('default', () => (
	<div
		style={{ display: 'grid', gridAutoFlow: 'row dense', gridGap: '24px' }}>
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
			<Alert intent={EAlertIntent.warning}>
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert intent={EAlertIntent.danger}>Something went wrong</Alert>
		</div>

		<div>
			<Alert intent={EAlertIntent.info}>
				Something worth noting happened
			</Alert>
		</div>
	</div>
));
