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
		},
		scroll: {
			true: {
				display: 'grid',
				gridTemplateColumns: 'auto 1fr auto',
				gridGap: vars.space['2'],
			},
		},
	},
});

export const listWrapperScroll = style({
	overflowX: 'auto',
	overflowY: 'hidden',
	overscrollBehavior: 'contain',
	scrollBehavior: 'smooth',
	scrollbarWidth: 'none',
	selectors: {
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
});
