import { style, styleMap } from 'treat';

import { mapTokenToProperty_Legacy } from '../../utils/mapTokenToProperty_Legacy';

export const root = style({
	margin: '0 auto',
});
export const width = styleMap(({ contentWidth }) =>
	mapTokenToProperty_Legacy(contentWidth, 'maxWidth'),
);
