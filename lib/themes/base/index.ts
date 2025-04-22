import { themeContractVars } from '../theme.css';

import { baseThemeClassName } from './theme.css';
import { tokens } from './tokens';

export default {
	name: 'baseTheme',
	themeRef: baseThemeClassName,
	vars: themeContractVars,
	tokens,
};
