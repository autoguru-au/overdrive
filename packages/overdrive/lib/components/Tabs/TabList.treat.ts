import { style, styleMap } from 'treat';

export const root = styleMap((theme) => ({
	default: {
		boxShadow: `inset 0 -1px 0 0 ${theme.border.colours.gray}`,
	},
	scroll: {
		display: 'grid',
		gridTemplateColumns: 'auto 1fr auto',
		gridGap: theme.space['2'],
	},
}));

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
