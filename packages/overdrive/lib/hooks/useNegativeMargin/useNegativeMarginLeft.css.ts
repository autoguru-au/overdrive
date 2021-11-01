import { makeResponsiveStyle } from '../../utils/responsiveProps.css';
import { vars } from '../../themes/base/vars.css';

export const negativeMarginLeft = makeResponsiveStyle(
	vars.space,
	(value) => ({
		marginLeft: `calc(-1 * ${value})`,
		width: `calc(100% + ${value})`,
	}),
);
