import { style, styleMap } from 'treat';

import { mapTokenToProperty_Legacy } from '../../utils/mapTokenToProperty_Legacy';

export const child = {
	spaces: styleMap((theme) =>
		mapTokenToProperty_Legacy(theme.space, (value) => ({
			paddingBottom: value,
		})),
	),
	default: style({
		':last-child': {
			paddingBottom: 0,
		},
	}),
};
