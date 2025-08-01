import { style, styleVariants } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

const colorAccent = vars.colours.foreground.body;
const colorContrast = vars.colours.background.body;
const colorMid = vars.colours.background.neutral;
const colorLight = vars.colours.background.light;
const height = vars.space['6'];
const handleSize = '24px';

export const base = style({
	display: 'inline-block',
});

export const toggle = style([
	{
		backgroundColor: colorMid,
		borderRadius: vars.border.radius.pill,
		cursor: 'pointer',
		height: height,
		padding: '3px 4px',
		transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		width: `calc(2 * ${height} - 2px)`,
		selectors: {
			'&:not([data-disabled]):hover': {
				backgroundColor: colorAccent,
			},
		},
	},
	focusOutlineStyle,
]);

export const toggleOn = style({
	backgroundColor: colorAccent,
});

export const disabled = style({
	backgroundColor: colorLight,
	cursor: 'not-allowed',
});

const handleScale = 'scale(0.95)';
const handleTranslate = `translateX(calc(${handleSize} - 4px))`;

export const handle = styleVariants({
	active: {
		selectors: {
			[`${toggleOn} &`]: {
				transform: handleTranslate,
			},
			[`${toggle}:not([data-disabled]):hover &`]: {
				transform: `${handleScale} ${handleTranslate}`,
			},
		},
	},
	default: {
		aspectRatio: '1',
		backgroundColor: colorContrast,
		borderRadius: vars.border.radius.full,
		height: '100%',
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		willChange: 'transform',
		selectors: {
			[`${toggle}:not([data-disabled]):hover &`]: {
				transform: handleScale,
			},
		},
	},
});

export const storyLabel = style({
	display: 'flex',
	gap: vars.space['2'],
});
