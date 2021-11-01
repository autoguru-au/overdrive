import { style, styleVariants } from '@vanilla-extract/css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';
import { vars } from '../../themes/base/vars.css';

export const child = {
	spaces: styleVariants(mapTokenToProperty(vars.space, (value) => ({
		paddingBottom: value,
	}))),
	default: style({
		':last-child': {
			paddingBottom: 0,
		},
	}),
};
