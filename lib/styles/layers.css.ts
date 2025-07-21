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

/**
 * Map of CSS layer names to their corresponding layer objects
 */
export const cssLayerMap = {
	reset: cssLayerReset,
	theme: cssLayerTheme,
	colorset: cssColorSet,
	typography: cssLayerTypography,
	styleprops: cssLayerStyleprops,
	component: cssLayerComponent,
	util: cssLayerUtil,
} as const;

export type CSSLayers = keyof typeof cssLayerMap;
