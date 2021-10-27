import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const root = style({
	listStyle: 'inside none',
});

export const firstOccurrence = style({
	paddingLeft: vars.space['6'],
});
