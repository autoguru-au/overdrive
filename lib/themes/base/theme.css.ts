import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { cssLayerTheme } from '../../styles/layers.css';
import { overdriveTokens, themeContractVars } from '../theme.css';

import { globalTokens, tokens } from './tokens';

// global themes -- all themes can be declared here as they do not require exporting
export const baseThemeLight = createGlobalTheme(
	':root, [data-od-theme=base], [data-od-theme=base][data-od-color-mode=light]',
	overdriveTokens,
	{
		'@layer': cssLayerTheme,
		...globalTokens,
	},
);

// base theme
export const baseThemeClassName = createTheme(
	themeContractVars,
	tokens,
	'OD_Base',
);
