import { globalLayer } from '@vanilla-extract/css';

export const cssLayerReset = globalLayer('reset');
export const cssLayerTheme = globalLayer('theme');
export const cssLayerTypography = globalLayer(
	{ parent: cssLayerTheme },
	'typography',
);
