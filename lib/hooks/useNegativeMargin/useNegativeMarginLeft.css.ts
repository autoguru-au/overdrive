import { overdriveTokens as vars } from '../../themes/theme.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const negativeMarginLeft = makeResponsiveStyle(vars.space, (value) => ({
	marginLeft: `calc(-1 * ${value})`,
	width: `calc(100% + ${value})`,
}));
