import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	MagnifyIcon,
	PhoneIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Button } from '../Button';

import { Anchor } from '.';

const iconOptions = {
	MagnifyIcon,
	CarIcon,
	CarMultipleIcon,
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
	CheckIcon,
};

export default {
	title: 'Foundation/Typography/Anchor',
	component: Anchor,
	decorators: [],
	argTypes: {
		icon: {
			defaultValue: void 0,
			description: 'Input field Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		is: {
			control: {
				disable: true,
			},
		},
		children: {
			defaultValue: '07 5612 5347',
			control: {
				type: 'string',
			},
		},
	},
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

const standardProps: ComponentProps<typeof Anchor> = {
	href: 'tel:07 5612 5347',
	children: '07 5612 5347',
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;

const withIconProps: typeof standardProps = {
	...standardProps,
	icon: PhoneIcon,
};
export const withIcon = Template.bind(withIconProps);
withIcon.args = withIconProps;

const withButtonProps: ComponentProps<typeof Anchor> = {
	...withIconProps,
	is: Button,
};
export const withButton = Template.bind(withButtonProps);
withButton.args = withButtonProps;
