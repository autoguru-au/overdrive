import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const root = style({
	zIndex: 3000,
	justifyItems: 'center',
	top: vars.space['3'],
	right: 0,
	left: 0,
});

export const alert = style({
	pointerEvents: 'initial',
});
