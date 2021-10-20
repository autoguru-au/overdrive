import { createGlobalTheme } from '@vanilla-extract/css';
import { tokens } from './tokens';
import type { Tokens } from '../tokens';


export const vars = createGlobalTheme<Tokens>(':root', {
	...tokens,
});
