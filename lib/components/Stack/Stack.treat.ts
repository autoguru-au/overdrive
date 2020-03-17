import { style, styleMap } from 'treat';

import { mapTokenToProperty } from '../../utils';

export const child = {
	spaces: styleMap(theme =>
		mapTokenToProperty(theme.space, value => ({
			paddingBottom: value,
		})),
	),
	default: style({
		':last-child': {
			paddingBottom: 0,
		},
	}),
};
