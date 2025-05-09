import { ArgTypes } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Box } from '../../components/Box/Box';
import { colourMap as baseColours } from '../../themes/base/colours';
import { tokens } from '../../themes/base/tokens';

export const scaleOptions = Object.values(tokens.space);
const boxShadowOptions = Object.keys(tokens.elevation);
const borderRadiusOptions = Object.keys(tokens.border.radius);

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

const widthOptions: Array<ComponentProps<typeof Box>['width']> = ['full'];

const orderOptions: Array<ComponentProps<typeof Box>['order']> = [0, 1, 2];

export const boxArgTypes: Partial<ArgTypes<ComponentProps<typeof Box>>> = {
	backgroundColour: {
		options: Object.keys(baseColours),
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
		defaultValue: undefined,
		options: ['1'],
	},
	pointerEvents: {
		defaultValue: undefined,
		options: ['none'],
	},
	width: {
		options: widthOptions,
		defaultValue: null,
		control: {
			type: 'select',
		},
	},
	order: {
		options: orderOptions,
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
