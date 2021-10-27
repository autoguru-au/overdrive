import { styleMap } from 'treat';

import { makeResponsiveStyle_legacy } from '../../utils/responsiveProps_legacy';

export const space = {
	spaceX: makeResponsiveStyle_legacy((theme) => theme.space, 'paddingLeft'),
	spaceY: makeResponsiveStyle_legacy((theme) => theme.space, 'paddingTop'),
};

export const wrapping = styleMap({
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

export const align = styleMap({
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
