import {vars as baseVars} from '../base/vars.css';
import { createTheme } from '@vanilla-extract/css';

import { tokens } from './tokens';
import { Tokens } from '../tokens';

// Pass baseVars to your custom themes for css vars hashes to be consistent between both themes
// @ts-ignore
export const themeRef = createTheme<Tokens>(baseVars, tokens, 'flatRed');
