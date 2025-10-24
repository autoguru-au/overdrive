import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { themeTokensWithLayer } from '../makeTheme';
import { overdriveTokens } from '../theme.css';

import { tokens } from './tokens';
import { tokensDark } from './tokens.dark';

// global themes -- all themes can be declared here as they do not require exporting

// Light mode theme
export const baseThemeLight = createGlobalTheme(
	':root, [data-od-theme=base], [data-od-theme=base][data-od-color-mode=light]',
	overdriveTokens,
	themeTokensWithLayer(tokens),
);

// Dark mode theme
export const baseThemeDark = createGlobalTheme(
	'[data-od-color-mode=dark]',
	overdriveTokens,
	themeTokensWithLayer(tokensDark),
);

// base theme (defaults to light mode)
export const baseThemeClassName = createTheme(
	overdriveTokens,
	themeTokensWithLayer(tokens),
	'OD_Base',
);
