import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Text } from '../Text';

import { Alert } from '.';

const onRequestClose = action('onRequestClose');
type Intent = ComponentProps<typeof Alert>['intent'];
export default {
	title: 'Components/Alert',
	component: Alert,
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
} as ComponentMeta<typeof Alert>;

const template: ComponentStory<typeof Alert> = (args) => (
	<div
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
		}}
	>
		<div>
			<Alert {...args} onRequestClose={onRequestClose}>
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>
	</div>
);

const templateAllIntents: ComponentStory<typeof Alert> = (args) => (
	<div
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
		}}
	>
		<div>
			<Alert {...args} intent="success" onRequestClose={onRequestClose}>
				<Text>
					Your invoice was sent to <Text strong>abc@supplier.co</Text>
				</Text>
			</Alert>
		</div>

		<div>
			<Alert {...args} intent="warning" onRequestClose={onRequestClose}>
				This will affect job changes
			</Alert>
		</div>

		<div>
			<Alert {...args} intent="danger" onRequestClose={onRequestClose}>
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

const standardProps: Omit<
	ComponentProps<typeof Alert>,
	'onRequestClose' | 'children'
> = {
	dismissible: void 0,
	intent: void 0,
	inline: void 0,
	className: void 0,
};

export const Standard = template.bind(standardProps);
Standard.args = standardProps;

export const StandardAllIntents = templateAllIntents.bind(standardProps);
StandardAllIntents.args = standardProps;

const inlineProps: typeof standardProps = {
	...standardProps,
	inline: true,
};

export const InlineAllIntents = templateAllIntents.bind(inlineProps);
InlineAllIntents.args = inlineProps;

const noneDismissibleProps: typeof standardProps = {
	...standardProps,
	dismissible: false,
};

export const NoneDismissibleAllIntents =
	templateAllIntents.bind(noneDismissibleProps);
NoneDismissibleAllIntents.args = noneDismissibleProps;
