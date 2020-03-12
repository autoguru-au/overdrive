import { style, styleMap } from 'treat';

export const fullScreenRoot = style(theme => ({
	position: 'fixed',
	zIndex: 10,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: 'grid',
	gridGap: `${theme.space['5']} ${theme.space['1']}`,
	gridTemplateColumns: '1fr auto',
	padding: theme.space['5'],
	gridTemplateRows: 'auto 1fr',
	overflowY: 'auto',
	maxHeight: '100vh',

	height: '100%',
	// @ts-ignore
	// eslint-disable-next-line  no-dupe-keys
	height: 'fill-available',
	// @ts-ignore
	// eslint-disable-next-line  no-dupe-keys
	height: '-webkit-fill-available',

	':before': {
		content: '""',
		position: 'fixed',
		zIndex: 0,
		backgroundColor: theme.colours.gamut.white,
		pointerEvents: 'none',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
}));

export const suggestionList = {
	defaults: style({
		display: 'grid',
		overflowY: 'auto',
		maxHeight: '256px',
		overscrollBehavior: 'contain',
		// @ts-ignore
		'-webkit-overflow-scrolling': 'touch',
		gridAutoFlow: 'row',
		gridGap: 0,
		zIndex: 2,
	}),
	blockOptions: style({
		overflowY: 'auto',
		maxHeight: '256px',
	}),
	inlineOptions: style({
		overflowY: 'visible',
		maxHeight: 'none',
	}),
};

export const flyout = style(theme => ({
	border: `1px solid ${theme.colours.gamut.gray200}`,
	borderRadius: theme.space['1'],
	backgroundColor: theme.colours.gamut.white,
	boxShadow: theme.elevation['2'],
}));

export const spacer = style(theme => ({
	height: theme.space['1'],
}));

export const suggestion = style(theme => ({
	display: 'block',
	padding: `${theme.space['3']} calc(${theme.space['3']} + 1px)`,
	width: '100%',
	cursor: 'pointer',
	textAlign: 'left',
	outline: 'none',
	backgroundColor: 'transparen',
}));

export const suggestionListItem = styleMap(() => ({
	default: {
		zIndex: 1,
	},
	skipped: {
		cursor: 'not-allowed',
	},
}));

export const suggestionHighlight = style(theme => ({
	color: theme.colours.gamut.blue500,
	backgroundColor: theme.colours.gamut.gray100,
}));
