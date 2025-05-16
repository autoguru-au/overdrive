import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { action } from 'storybook/actions';

import { Button } from '../Button/Button';

import { OutsideClick } from './OutsideClick';

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
