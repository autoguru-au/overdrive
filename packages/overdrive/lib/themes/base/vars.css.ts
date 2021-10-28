import { createGlobalTheme } from '@vanilla-extract/css';
import { tokens } from './tokens';
import type { Tokens } from '../tokens';
import { BreakPoints } from '../tokens';


export const breakpoints: BreakPoints = {
	mobile: '0px',
	tablet: '768px', // IPad mini width (1024 - 25%)
	desktop: '1024px', // IPad Pro width (1366 - 25%)
	largeDesktop: '1440px', // 1080p width (1920 - 25%)
};

export const vars = createGlobalTheme<Tokens>(':root', {
	...tokens,
});
