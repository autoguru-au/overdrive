import { style } from 'treat';

export const root = style((theme) => ({
	position: 'fixed',
	zIndex: 3000,
	top: theme.space['3'],
	right: 0,
	left: 0,
	display: 'grid',
	alignItems: 'center',
	pointerEvents: 'none',
	gridTemplateRows: '1fr',
	justifyItems: 'center',
}));

export const alert = style((theme) => ({
	pointerEvents: 'initial',
	marginBottom: theme.space['2'],
	':last-of-type': {
		marginBottom: 0,
	},
}));
