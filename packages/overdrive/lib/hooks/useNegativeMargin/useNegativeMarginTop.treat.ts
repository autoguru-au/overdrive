import { makeResponsiveStyle } from '../../utils/responsiveProps';

export const negativeMarginTop = makeResponsiveStyle(
	(theme) => theme.space,
	(value) => ({ marginTop: `calc(-1 * ${value})` }),
);
