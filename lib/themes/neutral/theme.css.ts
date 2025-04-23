import { createTheme } from '@vanilla-extract/css';

import { themeTokensWithLayer } from '../makeTheme';
import { overdriveTokens } from '../theme.css';

import { tokens } from './tokens';

export const themeRef: string = createTheme(
	overdriveTokens,
	themeTokensWithLayer(tokens),
	'OD_Neutral',
);
