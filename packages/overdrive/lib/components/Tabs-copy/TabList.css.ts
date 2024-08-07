import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = styleVariants({
	default: {
		boxShadow: `inset 0 -1px 0 0 ${vars.border.colours.gray}`,
	},
	scroll: {
		display: 'grid',
		gridTemplateColumns: 'auto 1fr auto',
		gridGap: vars.space['2'],
	},
});

export const listWrapperScroll = style({
	overflowX: 'auto',
	overflowY: 'hidden',
	// @ts-ignore
	'-webkit-overflow-scrolling': 'auto',
	overscrollBehavior: 'contain',
	scrollBehavior: 'smooth',
	scrollbarWidth: 'none',
	selectors: {
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
});
