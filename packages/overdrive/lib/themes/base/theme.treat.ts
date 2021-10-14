import { makeRuntimeTokens, makeTheme } from '../makeTheme';

import { tokens } from './legacyTokens';

export const theme = makeTheme(tokens, 'base');
export const runtimeTokens = makeRuntimeTokens(tokens);
