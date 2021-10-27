import { makeResponsiveStyle_legacy } from '../../utils/responsiveProps_legacy';

export const negativeMarginLeft = makeResponsiveStyle_legacy(
	(theme) => theme.space,
	(value) => ({
		marginLeft: `calc(-1 * ${value})`,
		width: `calc(100% + ${value})`,
	}),
);
