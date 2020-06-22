import { style, styleMap } from 'treat';

export const sorter = [
	style({
		transformOrigin: 'center',
	}),
	style((theme) => ({
		color: theme.typography.colour.muted,
		transition: `transform 0.3s ${theme.animation.easing.standard}`,
	})),
];

export const sortDirection = styleMap({
	up: {
		transform: 'rotate(0)',
	},
	down: {
		transform: 'rotate(180deg)',
	},
});

export const label = [
	style({
		display: 'grid',
		gridAutoFlow: 'column',
	}),
	style((theme) => ({
		gridGap: theme.space['1'],
	})),
];

export const sticky = style({
	position: 'sticky',
	top: 0,
	zIndex: 1,
});

export const textSelect = style({ userSelect: 'text' });
