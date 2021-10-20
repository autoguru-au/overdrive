import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const label = style({
	lineHeight: vars.typography.size['2'].fontSize,
	textOverflow: 'ellipsis',
	letterSpacing: '0.5px',
	textTransform: 'uppercase',
});
