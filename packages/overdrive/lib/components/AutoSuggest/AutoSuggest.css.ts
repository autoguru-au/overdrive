import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const fullScreenRoot = style({
	position: 'fixed',
	zIndex: 1001,
	top: vars.space['5'],
	right: vars.space['5'],
	bottom: vars.space['5'],
	left: vars.space['5'],
	paddingBottom: vars.space['5'],
	overflowY: 'auto',
	maxHeight: '100vh',
	height: 'fill-available',

	':before': {
		content: '""',
		position: 'fixed',
		zIndex: 0,
		backgroundColor: vars.colours.intent.secondary.background.standard,
		pointerEvents: 'none',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});

export const suggestionList = {
	defaults: style({
		display: 'grid',
		overflowY: 'auto',
		maxHeight: '384px',
		overscrollBehavior: 'contain',
		// @ts-ignore
		'-webkit-overflow-scrolling': 'touch',
		gridAutoFlow: 'row',
		gridGap: 0,
		zIndex: 2,
	}),
	blockOptions: style({
		overflowY: 'auto',
		maxHeight: '384px',
	}),
	inlineOptions: style({
		overflowY: 'auto',
		maxHeight: '100%',
	}),
	inlineOptionsNoScroll: style({
		overflowY: 'visible',
		maxHeight: 'none',
	}),
};

export const input = style({
	position: 'sticky',
	top: 0,
	zIndex: 2,
	backgroundColor: 'white',
});
export const fullScreenInput = style({
	width: 'calc(100% - 40px)',
});

export const fullScreenCloseBtn = style({
	position: 'fixed',
	top: vars.space['5'],
	right: vars.space['2'],
	zIndex: 3,
});

export const spacer = style({
	height: vars.space['1'],
});

export const suggestion = style({
	display: 'block',
	padding: `${vars.space['3']} calc(${vars.space['3']} + 1px)`,
	width: '100%',
	cursor: 'pointer',
	textAlign: 'left',
	outline: 'none',
	backgroundColor: 'transparent',
});

export const suggestionListItem = styleVariants({
	default: {
		zIndex: 1,
	},
	skipped: {
		cursor: 'not-allowed',
	},
});

export const suggestionHighlight = style({
	color: vars.typography.colour.information,
	backgroundColor: vars.colours.background.light,
});
