import * as React from 'react';
import { ComponentProps } from 'react';

import { Button } from '../Button';

import { OutsideClick } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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
			}
		}
	}
} as ComponentMeta<typeof OutsideClick>;

const Template: ComponentStory<typeof OutsideClick> = (args) => (
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

