import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const grid = {
	default: style({
		display: 'grid',
	}),
	gaps: makeResponsiveStyle(vars.space, 'gridGap'),
	topLeft: style({
		borderTopLeftRadius: vars.border.radius['xsmall'],
	}),
	topRight: style({
		borderTopRightRadius: vars.border.radius['xsmall'],
	}),
	bottomRight: style({
		borderBottomRightRadius: vars.border.radius['xsmall'],
	}),
	bottomLeft: style({
		borderBottomLeftRadius: vars.border.radius['xsmall'],
	}),
};
