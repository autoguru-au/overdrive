import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const input = style({
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	opacity: 0,
	cursor: 'pointer',
	selectors: {
		'&::-webkit-calendar-picker-indicator': {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			background: 'transparent',
			cursor: 'pointer',
			width: 'auto',
			height: 'auto',
			color: 'transparent',
		},
	},
});

export const contents = styleVariants({
	default: {
		display: 'grid',
		gridTemplateColumns: 'auto',
		gridGap: vars.space['1'],
		alignItems: 'center',
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
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});
