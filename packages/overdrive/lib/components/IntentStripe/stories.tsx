import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';

import { IntentStripe } from '.';

type Intent = ComponentProps<typeof IntentStripe>['intent'];
export default {
	title: 'Components/IntentStripe',
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
} as ComponentMeta<typeof IntentStripe>;

const MyStripe = (args)=>(
	<Box position='relative' width='full' padding='6' backgroundColour="gray200" borderRadius="1" overflow="hidden">
		<IntentStripe {...args} />
	</Box>
)

const template: ComponentStory<typeof IntentStripe> = (args) => (
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
);

const templateAllIntents: ComponentStory<typeof IntentStripe> = (args) => (
	<Box
		style={{
			display: 'grid',
			gridAutoFlow: 'row dense',
			gridGap: '24px',
			width: '100%',
		}}
	>
		<MyStripe {...args} intent='success' />
		<MyStripe {...args} intent='warning' />
		<MyStripe {...args} intent='danger' />
		<MyStripe {...args} intent='information' />
	</Box>
);

const standardProps: Omit<
	ComponentProps<typeof IntentStripe>,
	'onRequestClose' | 'children'
> = {
	intent: void 0,
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
