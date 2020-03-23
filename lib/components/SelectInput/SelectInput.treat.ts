import { style } from 'treat';

export const root = style({
	display: 'grid',
	gridTemplateColumns: '1fr auto',
	justifyContent: 'center',
	alignItems: 'center',
});

export const icon = style((theme) => ({
	marginRight: theme.space['4'],
}));
