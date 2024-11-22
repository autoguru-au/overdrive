import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Button } from '../Button';

import { OutsideClick } from '.';

export default {
	title: 'Utility/OutsideClick',
	component: OutsideClick,
	parameters: {
		chromatic: { disable: true },
	},
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof OutsideClick>;

const Template: StoryFn<typeof OutsideClick> = (args) => (
	<OutsideClick {...args}>
		<Button>Click anywhere but here</Button>
	</OutsideClick>
);

const standardProps: Omit<ComponentProps<typeof OutsideClick>, 'children'> = {
	onOutsideClick() {
		action('onOutsideClick');
		alert('clicking outside');
	},
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
