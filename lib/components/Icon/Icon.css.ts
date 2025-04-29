import { overdriveTokens as vars } from '../../themes/theme.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const size = makeResponsiveStyle(vars.icon.size, (value) => ({
	width: value,
	height: value,
}));
