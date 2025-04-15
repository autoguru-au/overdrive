import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { themeContractVars, globalTokens } from '../theme.css';

import { tokens } from './tokens';

// global themes -- all themes can be declared here as they do not require exporting
export const globalBaseThemeLight = createGlobalTheme(
	':root, [data-od-theme=base], [data-od-theme=base][data-od-color-mode=light]',
	globalTokens,
	tokens,
);

// base theme
export const themeRef: string = createTheme(
	themeContractVars,
	tokens,
	'OD_Base',
);
