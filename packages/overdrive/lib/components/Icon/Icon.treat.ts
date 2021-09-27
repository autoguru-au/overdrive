import { makeResponsiveStyle } from '../../utils/responsiveProps';


export const size = makeResponsiveStyle(
	({ icon }) => icon.size,
	(value) => ({
		width: value,
		height: value,
	}),
);
