import { createTheme } from '@vanilla-extract/css';

import { themeContractVars } from '../theme.css';

import { tokens } from './tokens';

export const themeRef: string = createTheme(
	themeContractVars,
	tokens,
	'OD_Base',
);
