import { makeResponsiveStyle_legacy } from '../../utils/responsiveProps_legacy';

export const negativeMarginTop = makeResponsiveStyle_legacy(
	(theme) => theme.space,
	(value) => ({ marginTop: `calc(-1 * ${value})` }),
);
