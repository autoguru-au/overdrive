import { style, styleMap } from 'treat';

export const sorter = style((theme) => ({
	color: theme.typography.colour.muted,
	transformOrigin: 'center',
	transition: `transform 0.3s ${theme.animation.easing.standard}`,
}));

export const sortDirection = styleMap({
	up: {
		transform: 'rotate(0)',
	},
	down: {
		transform: 'rotate(180deg)',
	},
});

export const label = style((theme) => ({
	display: 'grid',
	gridAutoFlow: 'column',
	gridGap: theme.space['1'],
}));

export const sticky = style({
	position: 'sticky',
	top: 0,
	zIndex: 1,
});

export const textSelect = style({ userSelect: 'text' });
