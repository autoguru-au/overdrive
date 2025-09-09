import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const inputContainer = style({
	display: 'grid',
	position: 'relative',
});

export const input = style({
	cursor: 'pointer',
	gridArea: '1 / 1',
	opacity: 0,
	position: 'relative',
	zIndex: 1,
	selectors: {
		'&::-webkit-calendar-picker-indicator': {
			background: 'transparent',
			color: 'transparent',
			cursor: 'pointer',
			height: '100%',
			left: 0,
			position: 'absolute',
			top: 0,
			width: '100%',
		},
	},
});

export const inputOverlay = style({
	gridArea: '1 / 1',
	pointerEvents: 'none',
	zIndex: 0,
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
