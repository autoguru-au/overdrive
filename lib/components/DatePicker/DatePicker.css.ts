import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const input = style({
	bottom: 0,
	cursor: 'pointer',
	left: 0,
	opacity: 0,
	right: 0,
	top: 0,
	selectors: {
		'&::-webkit-calendar-picker-indicator': {
			background: 'transparent',
			bottom: 0,
			color: 'transparent',
			cursor: 'pointer',
			height: 'auto',
			left: 0,
			position: 'absolute',
			right: 0,
			top: 0,
			width: 'auto',
		},
	},
});

export const contents = styleVariants({
	default: {
		alignItems: 'center',
		display: 'grid',
		gridGap: vars.space['1'],
		gridTemplateColumns: 'auto',
		justifyContent: 'flex-start',
	},
	withLabel: {
		gridTemplateColumns: 'auto auto',
	},
});
export const disabled = styleVariants({
	default: {
		cursor: 'not-allowed',
	},
	root: {
		opacity: '0.3',
	},
});

export const spinner = style({
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
});
