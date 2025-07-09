import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const fullScreenRoot = style({
	bottom: vars.space['5'],
	height: 'stretch',
	left: vars.space['5'],
	maxHeight: '100vh',
	overflowY: 'auto',
	paddingBottom: vars.space['5'],
	paddingTop: vars.space['2'],
	position: 'fixed',
	right: vars.space['5'],
	top: vars.space['5'],
	zIndex: 1001,

	':before': {
		backgroundColor: vars.colours.intent.secondary.background.standard,
		bottom: 0,
		content: '""',
		left: 0,
		pointerEvents: 'none',
		position: 'fixed',
		right: 0,
		top: 0,
		zIndex: 0,
	},
});

export const suggestionList = {
	defaults: style({
		display: 'grid',
		gridAutoFlow: 'row',
		gridGap: 0,
		maxHeight: '384px',
		overflowY: 'auto',
		overscrollBehavior: 'contain',
		zIndex: 2,
	}),
	blockOptions: style({
		borderRadius: vars.border.radius['md'],
		maxHeight: '384px',
		overflowY: 'auto',
	}),
	inlineOptions: style({
		maxHeight: '100%',
		overflowY: 'auto',
	}),
	inlineOptionsNoScroll: style({
		maxHeight: 'none',
		overflowY: 'visible',
	}),
};

export const inputPrimitive = style({
	marginBottom: `calc(-1 * ${vars.border.width['1']})`,
	marginTop: `calc(-1 * ${vars.border.width['1']})`,
});
export const input = style({
	backgroundColor: 'white',
	position: 'sticky',
	top: 0,
	zIndex: 2,
});
export const fullScreenInput = style({
	width: 'calc(100% - 40px)',
});

export const fullScreenCloseBtn = style({
	position: 'fixed',
	right: vars.space['2'],
	top: vars.space['5'],
	zIndex: 3,
});

export const spacer = style({
	height: vars.space['1'],
});

export const suggestion = style({
	backgroundColor: 'transparent',
	cursor: 'pointer',
	display: 'block',
	outline: 'none',
	padding: `${vars.space['3']} calc(${vars.space['3']} + 1px)`,
	textAlign: 'left',
	width: '100%',
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
	backgroundColor: vars.colours.background.light,
	color: vars.typography.colour.information,
});
