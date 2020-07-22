import { style } from 'treat';

export const root = style((theme) => ({
	zIndex: 3000,
	justifyItems: 'center',
	top: theme.space['3'],
	right: 0,
	left: 0,
	pointerEvents: 'none',
}));

export const alert = style(() => ({
	pointerEvents: 'initial',
}));
