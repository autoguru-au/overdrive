import { makeResponsiveStyle } from '../../utils/responsiveProps';
import { vars } from '../../themes/base/vars.css';

export const size = makeResponsiveStyle(
	vars.icon.size,
	(value) => ({
		width: value,
		height: value,
	}),
);
