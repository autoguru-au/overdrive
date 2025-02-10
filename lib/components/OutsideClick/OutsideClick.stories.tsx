import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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

type Story = StoryObj<typeof OutsideClick>;

export const Standard: Story = {
	args: {
		onOutsideClick() {
			action('onOutsideClick');
			alert('clicking outside');
		},
		children: <Button>Click anywhere but here</Button>,
	},
};
