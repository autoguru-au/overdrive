import { ArgTypes } from '@storybook/react';
import { ComponentProps } from 'react';

import { defaultGamut } from '../../themes/base/tokens';
import { Tokens } from '../../themes/tokens';

import { Box } from './Box';

export const scaleOptions: Array<keyof Tokens['space']> = [
	'none',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
];
const scaledProps: Array<keyof ComponentProps<typeof Box>> = [
	'padding',
	'paddingX',
	'paddingY',
	'paddingTop',
	'paddingRight',
	'paddingLeft',
	'margin',
	'marginX',
	'marginY',
	'marginTop',
	'marginRight',
	'marginLeft',
];

const boxShadowOptions: Array<keyof Tokens['elevation']> = [
	'none',
	'1',
	'2',
	'3',
	'4',
	'5',
];
const borderRadiusOptions: Array<keyof Tokens['border']['radius']> = [
	'none',
	'1',
	'min',
	'full',
	'pill',
];
const widthOptions: Array<ComponentProps<typeof Box>['width']> = [
	'full',
	'none',
];
const oderOptions: Array<ComponentProps<typeof Box>['order']> = [0, 1, 2];
export const boxArgTypes: Partial<ArgTypes<ComponentProps<typeof Box>>> = {
	backgroundColour: {
		options: Object.keys(defaultGamut),
		control: {
			type: 'select',
		},
	},
	boxShadow: {
		options: boxShadowOptions,
		control: {
			type: 'select',
		},
	},
	borderRadius: {
		options: borderRadiusOptions,
		control: {
			type: 'select',
		},
	},
	alignItems: {
		options: ['flexStart', 'center', 'flexEnd', 'stretch'],
		control: {
			type: 'select',
		},
	},
	justifyContent: {
		options: ['flexStart', 'center', 'flexEnd', 'spaceBetween'],
		control: {
			type: 'select',
		},
	},
	flexDirection: {
		options: ['row', 'rowReverse', 'column', 'columnReverse'],
		control: {
			type: 'select',
		},
	},
	flexShrink: {
		options: {
			default: undefined,
			'1': '1',
		},
	},
	pointerEvents: {
		options: {
			default: undefined,
			none: 'none',
		},
	},
	width: {
		options: widthOptions,
		defaultValue: null,
		control: {
			type: 'select',
		},
	},
	order: {
		options: oderOptions,
		defaultValue: null,
		control: {
			type: 'select',
		},
	},
	...scaledProps.reduce((argTypes, prop) => {
		argTypes[prop] = {
			options: scaleOptions,
			control: {
				type: 'select',
			},
		};
		return argTypes;
	}, {}),
};
