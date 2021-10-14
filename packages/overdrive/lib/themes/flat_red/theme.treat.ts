import { makeRuntimeTokens, makeTheme } from '../makeTheme';

import { tokens } from './tokens';

export const theme = makeTheme(tokens, 'flat_red');
export const runtimeTokens = makeRuntimeTokens(tokens);
