import { style, styleMap } from 'treat';

export const sorterButton = style({ userSelect: 'text' });

const sorterRoot = style({
	transformOrigin: 'center',
	transitionProperty: 'transform',
	transitionDuration: '0.3s',
	willChange: 'transform',
});

export const sorter = {
	root: [
		sorterRoot,
		style((theme) => ({
			color: theme.typography.colour.muted,
			transitionTimingFunction: theme.animation.easing.standard,
		})),
	],
	...styleMap({
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
	top: 0,
	zIndex: 1,
});
