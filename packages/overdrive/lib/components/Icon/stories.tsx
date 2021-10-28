import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	MagnifyIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Icon } from '.';


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
	title: 'Foundation/Icon',
	component: Icon,
	decorators: [],
	argTypes: {
		icon: {
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof Icon>;


const template: ComponentStory<typeof Icon> = (args) => (
	<Icon {...args} />
);

const standardProps: ComponentProps<typeof Icon> = {
	icon: CalendarIcon,
};
export const standard = template.bind(standardProps);
standard.args = standardProps;

const responsiveProps: ComponentProps<typeof Icon> = {
	...standardProps,
	size: ['small', 'medium', 'large'],
};
export const responsive = template.bind(responsiveProps);
responsive.args = responsiveProps;

const mediumProps: ComponentProps<typeof Icon> = {
	...standardProps,
	size: 'medium',
};
export const medium = template.bind(mediumProps);
medium.args = mediumProps;

const largeProps: ComponentProps<typeof Icon> = {
	...standardProps,
	size: 'large',
};
export const large = template.bind(largeProps);
large.args = largeProps;
