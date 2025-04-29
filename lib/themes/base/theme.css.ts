import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { themeTokensWithLayer } from '../makeTheme';
import { overdriveTokens } from '../theme.css';

import { tokens } from './tokens';

// global themes -- all themes can be declared here as they do not require exporting
export const baseThemeLight = createGlobalTheme(
	':root, [data-od-theme=base], [data-od-theme=base][data-od-color-mode=light]',
	overdriveTokens,
	themeTokensWithLayer(tokens),
);

// base theme
export const baseThemeClassName = createTheme(
	overdriveTokens,
	themeTokensWithLayer(tokens),
	'OD_Base',
);
