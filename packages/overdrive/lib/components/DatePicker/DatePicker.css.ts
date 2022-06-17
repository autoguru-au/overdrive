import { style } from '@vanilla-extract/css';

export const input = style({
	top: 0,
	right: 0,
	opacity: 0,
	cursor: 'pointer',
	display: 'grid',
	gridTemplateColumns: 'auto 50px',
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
export const disabled = style({
	cursor: 'not-allowed',
	opacity: '0.3',
});
