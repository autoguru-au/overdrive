import { createGlobalTheme } from '@vanilla-extract/css';

import type { Tokens } from '../tokens';

import { tokens } from './tokens';

export const vars = createGlobalTheme<Tokens>(':root', {
	...tokens,
});
