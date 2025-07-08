import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const fullScreenRoot = style({
	position: 'fixed',
	zIndex: 1001,
	top: vars.space['5'],
	right: vars.space['5'],
	bottom: vars.space['5'],
	left: vars.space['5'],
	paddingTop: vars.space['2'],
	paddingBottom: vars.space['5'],
	height: 'stretch',
	maxHeight: '100vh',
	overflowY: 'auto',

	':before': {
		position: 'fixed',
		zIndex: 0,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: vars.colours.intent.secondary.background.standard,
		pointerEvents: 'none',
		content: '""',
	},
});

export const suggestionList = {
	defaults: style({
		zIndex: 2,
		display: 'grid',
		gridAutoFlow: 'row',
		gridGap: 0,
		maxHeight: '384px',
		overflowY: 'auto',
		overscrollBehavior: 'contain',
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
	marginTop: `calc(-1 * ${vars.border.width['1']})`,
	marginBottom: `calc(-1 * ${vars.border.width['1']})`,
});
export const input = style({
	position: 'sticky',
	zIndex: 2,
	top: 0,
	backgroundColor: 'white',
});
export const fullScreenInput = style({
	width: 'calc(100% - 40px)',
});

export const fullScreenCloseBtn = style({
	position: 'fixed',
	zIndex: 3,
	top: vars.space['5'],
	right: vars.space['2'],
});

export const spacer = style({
	height: vars.space['1'],
});

export const suggestion = style({
	display: 'block',
	outline: 'none',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	padding: `${vars.space['3']} calc(${vars.space['3']} + 1px)`,
	width: '100%',
	textAlign: 'left',
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
