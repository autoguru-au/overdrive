import { vars } from '../../themes/base/vars.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const negativeMarginTop = makeResponsiveStyle(vars.space, (value) => ({
	marginTop: `calc(-1 * ${value})`,
}));
