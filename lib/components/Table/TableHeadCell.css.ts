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
			transitionTimingFunction: vars.animation.easing.standard,
			color: vars.typography.colour.muted,
			selectors: {
				[`${sorterButton}:hover &`]: {
					color: vars.typography.colour.dark,
				},
			},
		}),
	],
	...styleVariants({
		none: {
			transform: 'translateY(10%) rotateX(0)',
			transitionProperty: 'transform, opacity',
			opacity: '0',

			selectors: {
				[`${sorterButton}:hover &`]: {
					transform: 'translateY(0px) rotateX(0)',
					opacity: '0.50',
				},
			},
		},
		asc: {
			transform: 'translateY(0px) rotateY(0)',
		},
		desc: {
			transform: 'translateY(0px) rotateX(180deg)',
		},
	}),
};

export const sticky = style({
	position: 'sticky',
	zIndex: 1,
	top: 0,
});
