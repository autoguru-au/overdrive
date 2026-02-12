import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { themeTokensWithLayer } from '../makeTheme';
import { overdriveTokens } from '../theme.css';

import { tokens } from './tokens';
import { tokensDark } from './tokens.dark';

// Flat Red theme dark mode
export const flatRedThemeDark = createGlobalTheme(
	'[data-od-color-mode=dark]',
	overdriveTokens,
	themeTokensWithLayer(tokensDark),
);

export const flatRedThemeClass = createTheme(
	overdriveTokens,
	themeTokensWithLayer(tokens),
	'OD_flatRed',
);
