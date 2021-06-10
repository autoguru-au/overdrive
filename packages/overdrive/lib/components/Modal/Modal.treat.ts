import { style, styleMap } from 'treat';

import { shadedColour } from '../../themes/helpers';

const reducedMotion = style({
	'@media': {
		'screen and (prefers-reduced-motion)': {
			transform: 'none !important',
		},
	},
});

const place = style({
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
});

export const root = [place, style({ zIndex: 1000 })];

export const transition = style((theme) => ({
	transition: `transform .175s ${theme.animation.easing.standard}, opacity 0.3s ${theme.animation.easing.standard}`,
}));

export const entry = [
	reducedMotion,
	style({
		transform: 'scale(.95)',
	}),
];

const backdropRoot = styleMap(
	({ colours, shadeIntensity, isDark, transparency }) => ({
		default: {
			backgroundColor: shadedColour(
				colours.intent.neutral.background,
				shadeIntensity.intense,
				'backward',
				isDark,
				transparency.slight,
			),
			backdropFilter: 'blur(5px)',
		},
		invisible: {
			backgroundColor: 'transparent',
			backdropFilter: 'none',
		},
	}),
);

export const backdrop = {
	root: [
		backdropRoot.default,
		place,
		style({
			zIndex: 999,
		}),
	],
	invisible: backdropRoot.invisible,
};
