import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { themeTokensWithLayer } from '../makeTheme';
import { overdriveTokens } from '../theme.css';

import { tokens } from './tokens';
import { tokensDark } from './tokens.dark';

// Neutral theme dark mode
export const neutralThemeDark = createGlobalTheme(
	'[data-od-color-mode=dark]',
	overdriveTokens,
	themeTokensWithLayer(tokensDark),
);

export const themeRef: string = createTheme(
	overdriveTokens,
	themeTokensWithLayer(tokens),
	'OD_Neutral',
);
