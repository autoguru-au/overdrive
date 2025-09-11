import { createContainer, style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { breakpoints } from '../../themes/makeTheme';
import { overdriveTokens as tokens } from '../../themes/theme.css';

// === Container styles

export const queryContainer = createContainer();
export const queryContainerStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			containerName: queryContainer,
			containerType: 'inline-size',
		},
	},
});

export const layoutStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			'@container': {
				[`${queryContainer} (min-width: ${breakpoints.tablet})`]: {
					display: 'flex',
					gap: tokens.space[7],
				},
			},
		},
	},
});
