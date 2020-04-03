import { style } from 'treat';

export const container = style({
	height: '100%',
	outline: '0',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const modal = style((theme) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100vw',
	height: 'auto',
	maxHeight: `calc(100vh - ${theme.space['8']})`,
	borderRadius: `${theme.space['2']} ${theme.space['2']} 0 0`,
	backgroundColor: 'white',
	marginTop: theme.space['8'],
	...theme.utils.responsiveStyle({
		desktop: {
			maxWidth: `calc(100% - ${theme.space['9']} * 2)`,
			height: 'auto',
			maxHeight: `calc(100vh - ${theme.space['9']} * 2)`,
			borderRadius: `${theme.space['1']}`,
			boxShadow:
				'0 0 32px 0 rgba(black, 0.08) 0 24px 96px 0 rgba(black, 0.012)',
			marginTop: 0,
		},
	}),
}));

export const modalSizeStandard = style((theme) =>
	theme.utils.responsiveStyle({
		desktop: {
			maxWidth: '800px',
		},
	}),
);

export const header = style((theme) => ({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	minHeight: '60px',
	padding: `${theme.space['6']} ${theme.space['5']}`,
}));

export const headerWithBorder = style((theme) => ({
	borderBottom: `1px solid ${theme.colours.gamut.gray200}`,
}));

export const headerCloseButton = style((theme) => ({
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	display: 'block',
	padding: theme.space['5'],
	cursor: 'pointer',
	border: 'none',
	outline: 'none',
	background: 'none',
}));

export const headerTitle = style({
	margin: 0,
});

export const content = style({
	overflowY: 'auto',
	flexGrow: 1,
	height: '100%',
	overscrollBehavior: 'contain',
	// @ts-ignore
	webkitOverflowScrolling: 'touch',
	'-webkit-overflow-scrolling': 'touch',
});
