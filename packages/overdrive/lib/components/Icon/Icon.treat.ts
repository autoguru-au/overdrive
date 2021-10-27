import { makeResponsiveStyle_legacy } from '../../utils/responsiveProps_legacy';

export const size = makeResponsiveStyle_legacy(
	({ icon }) => icon.size,
	(value) => ({
		width: value,
		height: value,
	}),
);
