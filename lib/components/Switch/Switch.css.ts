import { style, styleVariants } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { themeContractVars as vars } from '../../themes/theme.css';

const colorAccent = vars.border.colours.dark;
const colorContrast = vars.colours.background.body;
const colorLight = vars.border.colours.light;
const colorMid = vars.border.colours.gray;
const borderSize = vars.border.width['1'];
const height = vars.space['6'];
const handleSize = '24px';
const handleOffset = '3px';

export const base = style({
	display: 'inline-block',
});

export const focus = style(focusOutlineStyle);

export const toggle = style({
	cursor: 'pointer',
	backgroundColor: colorMid,
	height: height,
	width: `calc(2 * ${height})`,
	borderRadius: vars.border.radius.pill,
	padding: handleOffset,
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	selectors: {
		'&:not([data-disabled]):hover': {
			backgroundColor: colorAccent,
		},
	},
});

export const toggleOn = style({
	backgroundColor: colorAccent,
});

export const disabled = style({
	backgroundColor: colorLight,
	cursor: 'not-allowed',
});

const handleScale = 'scale(0.95)';
const handleTranslate = `translateX(${handleSize})`;

export const handle = styleVariants({
	default: {
		aspectRatio: '1',
		height: '100%',
		borderRadius: vars.border.radius.full,
		backgroundColor: colorContrast,
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		willChange: 'transform',
		selectors: {
			[`${toggle}:not([data-disabled]):hover &`]: {
				transform: handleScale,
			},
		},
	},
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
	disabled: {
		border: `${borderSize} solid ${vars.colours.intent.primary.background.mild}`,
	},
});
