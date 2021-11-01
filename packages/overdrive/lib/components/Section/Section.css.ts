import { style, styleVariants } from '@vanilla-extract/css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';
import { vars } from '../../themes/base/vars.css';


export const root = style({
	margin: '0 auto',
});
export const width = styleVariants(mapTokenToProperty(vars.contentWidth, 'maxWidth'));
