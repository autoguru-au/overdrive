import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const sorterButton = style({ userSelect: 'text' });

export const text = style({
	selectors: {
		[`${sorterButton}:hover &`]: {
			color: vars.typography.colour.dark,
		},
	},
});

const sorterRoot = style({
	transformOrigin: 'center',
	transitionDuration: '0.3s',
	transitionProperty: 'transform, opacity, color',
	willChange: 'transform, opacity',
});

export const sorter = {
	root: [
		sorterRoot,
		style({
			color: vars.typography.colour.dark,
			transitionTimingFunction: vars.animation.easing.standard,
		}),
	],
	...styleVariants({
		asc: {
			opacity: '1',
			transform: 'rotateX(0)',
		},
		desc: {
			opacity: '1',
			transform: 'rotateX(180deg)',
		},
		none: {
			opacity: '0.5',
			transform: 'rotateX(0)',

			selectors: {
				[`${sorterButton}:hover &`]: {
					opacity: '1',
				},
			},
		},
	}),
};

export const sticky = style({
	position: 'sticky',
	top: 0,
	zIndex: 1,
});
