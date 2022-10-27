import { styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const space = {
	spaceX: makeResponsiveStyle(vars.space, 'paddingLeft'),
	spaceY: makeResponsiveStyle(vars.space, 'paddingTop'),
};

export const wrapping = styleVariants({
	wrap: {
		flexWrap: 'wrap',
	},
	noWrap: {
		flexWrap: 'nowrap',
	},
	reverseWrap: {
		flexWrap: 'wrap-reverse',
	},
});

export const align = styleVariants({
	stretch: {
		alignContent: 'stretch',
		alignItems: 'stretch',
	},
	top: {
		alignContent: 'flex-start',
		alignItems: 'flex-start',
	},
	centre: {
		alignContent: 'center',
		alignItems: 'center',
	},
	bottom: {
		alignContent: 'flex-end',
		alignItems: 'flex-end',
	},
});
