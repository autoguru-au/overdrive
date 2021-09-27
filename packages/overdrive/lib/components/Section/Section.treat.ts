import { style, styleMap } from 'treat';

import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const root = style({
	margin: '0 auto',
});
export const width = styleMap(({ contentWidth }) =>
	mapTokenToProperty(contentWidth, 'maxWidth'),
);
