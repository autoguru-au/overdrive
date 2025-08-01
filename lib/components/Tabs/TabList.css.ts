import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const styledTabList = recipe({
	base: {},
	variants: {
		appearance: {
			underlined: {
				boxShadow: `inset 0 -1px 0 0 ${vars.border.colours.gray}`,
			},
			pill: {},
			minimal: {},
		},
		scroll: {
			true: {
				display: 'grid',
				gridGap: vars.space['2'],
				gridTemplateColumns: 'auto 1fr auto',
			},
		},
	},
});

export const listWrapperScroll = style({
	overflowX: 'auto',
	overflowY: 'hidden',
	overscrollBehavior: 'contain',
	scrollbarWidth: 'none',
	scrollBehavior: 'smooth',
	selectors: {
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
});
