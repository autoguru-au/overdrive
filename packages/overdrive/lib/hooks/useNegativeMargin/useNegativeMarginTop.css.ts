import { makeResponsiveStyle } from '../../utils/responsiveProps.css';
import { vars } from '../../themes/base/vars.css';

export const negativeMarginTop = makeResponsiveStyle(
	vars.space,
	(value) => ({ marginTop: `calc(-1 * ${value})` }),
);
