import { makeRuntimeTokens, makeTheme } from '../makeTheme';

import { tokens } from './tokens';

export const theme = makeTheme(tokens, 'base');
export const runtimeTokens = makeRuntimeTokens(tokens);
