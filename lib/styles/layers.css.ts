import { globalLayer } from '@vanilla-extract/css';

globalLayer('ag, reset, theme, styleprops, component, util');

export const cssLayerReset = globalLayer('reset');
export const cssLayerTheme = globalLayer('theme');
export const cssColorSet = globalLayer({ parent: cssLayerTheme }, 'colorset');
export const cssLayerTypography = globalLayer(
	{ parent: cssLayerTheme },
	'typography',
);
export const cssLayerStyleprops = globalLayer('styleprops');
export const cssLayerComponent = globalLayer('component');
export const cssLayerUtil = globalLayer('util');
