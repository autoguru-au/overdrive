import { Tokens } from '../../themes/tokens';
import { ComponentProps } from 'react';
import { Box } from './Box';
import { ArgTypes } from '@storybook/csf/dist/story';

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

export const boxArgTypes: Partial<ArgTypes<ComponentProps<typeof Box>>> = {
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
		options: [
			'flexStart',
			'center',
			'flexEnd',
		],
		control: {
			type: 'select',
		},
	},
	justifyContent: {
		options: [
			'flexStart',
			'center',
			'flexEnd',
			'spaceBetween',
		],
		control: {
			type: 'select',
		},
	},
	flexDirection: {
		options: [
			'row',
			'rowReverse',
			'column',
			'columnReverse',
		],
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
			'none': 'none',
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
