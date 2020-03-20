import { style, styleMap } from 'treat';

import { mapTokenToProperty } from '../../utils';

export const root = style({
	width: '100%',
	margin: '0 auto',
});
export const width = styleMap(({ contentWidth }) =>
	mapTokenToProperty(contentWidth, 'maxWidth'),
);
