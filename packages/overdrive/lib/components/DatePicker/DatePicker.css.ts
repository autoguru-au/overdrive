import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const input = style({
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	opacity: 0,
	cursor: 'pointer',
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
		display: 'grid',
		gridTemplateColumns: 'auto',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gridGap: vars.space['1'],
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
