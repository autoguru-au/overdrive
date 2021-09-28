import { styleMap } from 'treat';

import { makeResponsiveStyle } from '../../utils/responsiveProps';

export const space = {
	spaceX: makeResponsiveStyle((theme) => theme.space, 'paddingLeft'),
	spaceY: makeResponsiveStyle((theme) => theme.space, 'paddingTop'),
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
