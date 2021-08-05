import { style, styleMap } from 'treat';

import { shadedColour } from '../../themes/helpers';

export const fullScreenRoot = style((theme) => ({
	position: 'fixed',
	zIndex: 1001,
	top: theme.space['5'],
	right: theme.space['5'],
	bottom: theme.space['5'],
	left: theme.space['5'],
	paddingBottom: theme.space['5'],
	overflowY: 'auto',
	maxHeight: '100vh',
	height: 'fill-available',

	':before': {
		content: '""',
		position: 'fixed',
		zIndex: 0,
		backgroundColor: theme.colours.intent.secondary.background,
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

export const fullScreenCloseBtn = style((theme) => ({
	position: 'fixed',
	top: theme.space['5'],
	right: theme.space['2'],
	zIndex: 3,
}));

export const spacer = style((theme) => ({
	height: theme.space['1'],
}));

export const suggestion = style((theme) => ({
	display: 'block',
	padding: `${theme.space['3']} calc(${theme.space['3']} + 1px)`,
	width: '100%',
	cursor: 'pointer',
	textAlign: 'left',
	outline: 'none',
	backgroundColor: 'transparent',
}));

export const suggestionListItem = styleMap(() => ({
	default: {
		zIndex: 1,
	},
	skipped: {
		cursor: 'not-allowed',
	},
}));

export const suggestionHighlight = style(
	({ colours, typography, shadeIntensity, isDark, transparency }) => ({
		color: typography.colour.information,
		backgroundColor: shadedColour(
			colours.background.body,
			shadeIntensity.slight,
			'backward',
			isDark,
			transparency.medium,
		),
	}),
);
