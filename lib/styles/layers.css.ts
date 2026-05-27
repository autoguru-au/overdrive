import { globalLayer } from '@vanilla-extract/css';

/**
 * The canonical layer-order declaration for the Overdrive design system.
 *
 * Import this constant and call `globalLayer(LAYER_ORDER)` at the top of
 * any `.css.ts` file that uses cascade layers.  This guarantees the
 * `@layer` order declaration is emitted *inside that file's CSS output*,
 * so the ordering is correct regardless of how the bundler chunks and
 * loads the files.
 */
export const LAYER_ORDER = 'ag, reset, theme, styleprops, component, util';
globalLayer(LAYER_ORDER);

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
