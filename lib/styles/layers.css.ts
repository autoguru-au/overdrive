import { globalLayer } from '@vanilla-extract/css';

const LAYER_ORDER = 'ag, reset, theme, styleprops, component, util';
globalLayer(LAYER_ORDER);

/**
 * Call in any `.css.ts` file that uses cascade layers to guarantee the
 * `@layer` order declaration is emitted *inside that file's CSS output*.
 *
 * Vanilla Extract guarantees `@layer` declarations appear before `@layer`
 * blocks **within a single file**, but not across files.  Without this,
 * a bundler that loads `Button.css.js` before `layers.css.js` would see
 * `@layer component { … }` first, establishing `component` as the
 * lowest-priority layer and breaking the cascade.
 *
 * The call is idempotent — multiple invocations produce a single
 * `@layer ag, reset, theme, styleprops, component, util;` line.
 */
export const ensureLayerOrder = () => globalLayer(LAYER_ORDER);

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
