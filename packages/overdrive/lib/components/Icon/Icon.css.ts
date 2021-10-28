import { makeResponsiveStyle } from '../../utils/responsiveProps';
import { vars } from '../../themes/base/vars.css';
import { styleVariants } from '@vanilla-extract/css';

console.log(styleVariants(makeResponsiveStyle(
	vars.icon.size,
	(value) => ({
		width: value,
		height: value,
	}),
)));
export const size = Object.entries(makeResponsiveStyle(
	vars.icon.size,
	(value) => ({
		width: value,
		height: value,
	}),
)).reduce((map, [key, value]) => {
	map[key] = styleVariants(value);
	return map;
}, {});
