import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const grid = {
	default: style({
		display: 'grid',
	}),
	gaps: makeResponsiveStyle(vars.space, 'gridGap'),
	topLeft: style({
		borderTopLeftRadius: vars.border.radius['sm'],
	}),
	topRight: style({
		borderTopRightRadius: vars.border.radius['sm'],
	}),
	bottomRight: style({
		borderBottomRightRadius: vars.border.radius['sm'],
	}),
	bottomLeft: style({
		borderBottomLeftRadius: vars.border.radius['sm'],
	}),
};
