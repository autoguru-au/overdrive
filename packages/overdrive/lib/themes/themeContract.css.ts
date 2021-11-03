import { createThemeContract } from '@vanilla-extract/css';

import { tokens } from './base/tokens';
import { Tokens } from './tokens';

export const contractVars = createThemeContract<Tokens>(tokens);
