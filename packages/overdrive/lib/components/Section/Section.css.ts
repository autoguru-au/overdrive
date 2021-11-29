import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const root = style({
	margin: '0 auto',
});
export const width = styleVariants(
	mapTokenToProperty(vars.contentWidth, 'maxWidth'),
);
