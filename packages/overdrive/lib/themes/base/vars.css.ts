import { createGlobalTheme } from '@vanilla-extract/css';
import { tokens } from './tokens';


export const vars = createGlobalTheme(':root', {
	...tokens,
});
