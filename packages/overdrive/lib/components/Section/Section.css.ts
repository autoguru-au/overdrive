import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const root = style({
	margin: '0 auto',
});
export const width = styleVariants(
	mapTokenToProperty(vars.contentWidth, 'maxWidth'),
);
