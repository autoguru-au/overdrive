import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { tokens } from 'lib/themes/base/tokens';

import { odStyle, type ODStyle } from '../../styles/sprinkles.css';

const border: ODStyle = {
	borderColor: 'gray',
	borderStyle: 'solid',
	borderWidth: '1',
};

const focusOutline: ODStyle = {
	outlineColor: 'link',
	outlineStyle: 'solid',
	outlineOffset: 'md',
	outlineWidth: { initial: 'none', focusVisible: 'default' },
};

const buttonBorderRadius = tokens.border.radius['2'];

export const checkboxButton = recipe({
	base: [
		odStyle({
			background: {
				initial: 'white',
				hover: 'gray100',
			},
			...border,
			cursor: { hover: 'pointer' },
			display: 'flex',
			gap: '2',
			paddingX: '4',
			paddingY: '3',
			width: '100%',
		}),
		style({
			selectors: {
				['&+&']: {
					borderTopStyle: 'none',
				},
				['&:first-child']: {
					borderTopLeftRadius: buttonBorderRadius,
					borderTopRightRadius: buttonBorderRadius,
				},
				['&:last-child']: {
					borderBottomLeftRadius: buttonBorderRadius,
					borderBottomRightRadius: buttonBorderRadius,
				},
			},
		}),
	],
	variants: {
		disabled: {
			true: style({
				opacity: 0.6,
				selectors: {
					['&&']: {
						background: 'none',
						cursor: 'default',
					},
				},
			}),
		},
	},
});

export const checkbox = recipe({
	base: odStyle({
		alignItems: 'center',
		...border,
		borderRadius: '1',
		display: 'flex',
		flexShrink: 0,
		justifyContent: 'center',
		...focusOutline,
		size: '6',
	}),
	variants: {
		checked: {
			true: odStyle({
				background: 'gray900',
				borderColor: 'dark',
			}),
			false: odStyle({
				background: 'white',
			}),
		},
		focused: {
			true: odStyle({ ...focusOutline, outlineWidth: 'default' }),
		},
	},
});

export const groupLabel = recipe({
	base: odStyle({
		font: 'xxl',
		fontWeight: 'bold',
		marginBottom: '6',
	}),
});