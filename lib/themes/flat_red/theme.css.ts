import { createTheme } from '@vanilla-extract/css';

import { themeTokensWithLayer } from '../makeTheme';
import { overdriveTokens } from '../theme.css';

import { tokens } from './tokens';

export const flatRedThemeClass = createTheme(
	overdriveTokens,
	themeTokensWithLayer(tokens),
	'OD_flatRed',
);
