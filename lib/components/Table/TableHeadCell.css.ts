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
	transitionProperty: 'transform',
	willChange: 'transform',
});

export const sorter = {
	root: [
		sorterRoot,
		style({
			color: vars.typography.colour.muted,
			transitionTimingFunction: vars.animation.easing.standard,
			selectors: {
				[`${sorterButton}:hover &`]: {
					color: vars.typography.colour.dark,
				},
			},
		}),
	],
	...styleVariants({
		asc: {
			transform: 'translateY(0px) rotateY(0)',
		},
		desc: {
			transform: 'translateY(0px) rotateX(180deg)',
		},
		none: {
			opacity: '0',
			transform: 'translateY(10%) rotateX(0)',
			transitionProperty: 'transform, opacity',

			selectors: {
				[`${sorterButton}:hover &`]: {
					opacity: '0.50',
					transform: 'translateY(0px) rotateX(0)',
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
