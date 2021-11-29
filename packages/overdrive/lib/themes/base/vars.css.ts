import { createTheme } from '@vanilla-extract/css';

import type { Tokens } from '../tokens';

import { tokens } from './tokens';

export const [themeRef, vars] = createTheme<Tokens>(tokens, 'OD_Base');
