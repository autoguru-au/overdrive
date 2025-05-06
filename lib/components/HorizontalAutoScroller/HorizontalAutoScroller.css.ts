import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { responsiveConditions } from '../../styles/sprinkles.css';
import { mediaQuery } from '../../themes/makeTheme';
import { overdriveTokens as vars } from '../../themes/theme.css';

const actionWidth = 50;
export const controllerBtn = style({
	top: 0,
	height: '100%',
	width: actionWidth,
	zIndex: 9,
});

export const controllerCol = style({
	width: actionWidth,
});

export const prevBtn = style({
	left: 0,
	background:
		'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6769301470588236) 70%, rgba(255,255,255,0) 100%)',
});

export const nextBtn = style({
	right: 0,
	background:
		'linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6769301470588236) 70%, rgba(255,255,255,0) 100%)',
});

export const itemMinWidth = style({
	minWidth: '50vw',
	'@media': {
		[mediaQuery.tablet]: {
			minWidth: 'auto',
		},
	},
});

export const item = style({
	userSelect: 'none',
	willChange: 'transform',
	transition: `opacity 0.3s ${vars.animation.easing.standard} 0s, transform 0.3s ${vars.animation.easing.standard} 0s`,
	transform: 'scale(0.9)',
	opacity: 0.6,
});

export const active = style({
	transform: 'scale(1)',
	opacity: 1,
});

const getSizeStyle = (scale: number) => `${scale * 100}%`;

const columnWidth = defineProperties({
	conditions: responsiveConditions,
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop', 'largeDesktop'],
	properties: {
		flexBasis: {
			'1/2': getSizeStyle(1 / 2),
			'1/3': getSizeStyle(1 / 3),
			'2/3': getSizeStyle(2 / 3),
			'1/4': getSizeStyle(1 / 4),
			'3/4': getSizeStyle(3 / 4),
			'1/5': getSizeStyle(1 / 5),
			'2/5': getSizeStyle(2 / 5),
			'3/5': getSizeStyle(3 / 5),
			'4/5': getSizeStyle(4 / 5),
			full: getSizeStyle(1),
			auto: 'auto',
		},
	},
});

export const sprinklesColumnWidth = createSprinkles(columnWidth);
export type SprinklesColumnWidth = Parameters<typeof sprinklesColumnWidth>[0];
