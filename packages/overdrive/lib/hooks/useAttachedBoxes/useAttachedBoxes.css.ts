import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const grid = {
	default: style({
		display: 'grid',
	}),
	gaps: makeResponsiveStyle(vars.space, 'gridGap'),
	topLeft: style({
		borderTopLeftRadius: vars.border.radius['1'],
	}),
	topRight: style({
		borderTopRightRadius: vars.border.radius['1'],
	}),
	bottomRight: style({
		borderBottomRightRadius: vars.border.radius['1'],
	}),
	bottomLeft: style({
		borderBottomLeftRadius: vars.border.radius['1'],
	}),
};
