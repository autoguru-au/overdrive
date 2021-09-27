import { makeResponsiveStyle } from '../../utils/responsiveProps';


export const negativeMarginLeft = makeResponsiveStyle(
	(theme) => theme.space,
	(value) => ({
		marginLeft: `calc(-1 * ${value})`,
		width: `calc(100% + ${value})`,
	}),
);
