import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

export const blockquote = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: tokens.color.gamut.gray[100],
			borderLeft: `${tokens.border.width['3']} solid ${tokens.color.gamut.gray[400]}`,
			color: tokens.color.gamut.gray[700],
			marginBottom: tokens.space[3],
			marginLeft: 0,
			marginRight: 0,
			marginTop: tokens.space[3],
			padding: tokens.space[4],
			paddingLeft: tokens.space[4],
		},
	},
});
