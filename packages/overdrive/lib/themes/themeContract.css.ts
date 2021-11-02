import { createThemeContract } from '@vanilla-extract/css';
import { Tokens } from './tokens';
import { tokens } from './base/tokens';


export const contractVars = createThemeContract<Tokens>(tokens);
