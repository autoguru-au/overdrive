import { style } from 'treat';

import { makeResponsiveStyle_legacy } from '../../utils/responsiveProps_legacy';

export const grid = {
	default: style({
		display: 'grid',
	}),
	gaps: makeResponsiveStyle_legacy(({ space }) => space, 'gridGap'),
	topLeft: style(({ border }) => ({
		borderTopLeftRadius: border.radius['1'],
	})),
	topRight: style(({ border }) => ({
		borderTopRightRadius: border.radius['1'],
	})),
	bottomRight: style(({ border }) => ({
		borderBottomRightRadius: border.radius['1'],
	})),
	bottomLeft: style(({ border }) => ({
		borderBottomLeftRadius: border.radius['1'],
	})),
};
