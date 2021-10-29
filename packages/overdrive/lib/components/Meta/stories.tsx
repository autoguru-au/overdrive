import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Meta } from '.';

const iconOptions = {
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CarMultipleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
};
export default {
	title: 'Components/Meta',
	component: Meta,
	argTypes: {
		icon: {
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof Meta>;

const Template: ComponentStory<typeof Meta> = (args) => <Meta {...args} />;

const standardProps: ComponentProps<typeof Meta> = {
	variant: 'primary',
	icon: CalendarIcon,
	label: 'Hello World',
};
export const primary = Template.bind(standardProps);
primary.args = standardProps;

const secondaryProps: ComponentProps<typeof Meta> = {
	variant: 'secondary',
	icon: CalendarIcon,
	label: 'Hello World',
};
export const secondary = Template.bind(secondaryProps);
secondary.args = secondaryProps;
