import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { Text } from '../Text';
import { Alert } from '.';

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

		<div>
			<Alert dismissible intent="information">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
				commodo ligula eget dolor. Aenean massa. Cum sociis natoque
				penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
				quis, sem. Nulla consequat massa quis enim. Donec pede justo,
				fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
				rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
				felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
				Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
				Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
				enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
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
