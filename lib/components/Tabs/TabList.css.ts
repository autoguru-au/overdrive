import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { overdriveTokens as vars } from '../../themes/theme.css';

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

export const styledTabList = recipe({
	base: {},
	variants: {
		appearance: {
			underlined: {
				boxShadow: `inset 0 -1px 0 0 ${vars.color.border.default}`,
			},
			pill: {},
			minimal: {},
			/**
			 * Segments cannot shrink past their own label, so a container narrower
			 * than the bar scrolls rather than hiding the trailing tabs.
			 */
			segmented: [
				listWrapperScroll,
				{
					maxWidth: '100%',
					width: 'fit-content',
				},
			],
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

export const stretchedSegments = style({
	width: '100%',
});

globalStyle(`${stretchedSegments} [role="tab"]`, {
	flex: '1 1 auto',
});
