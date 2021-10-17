import { style } from 'treat';

export const container = style({
	outline: '0',
});

export const modal = style((theme) => ({
	width: '100vw',
	height: 'auto',
	alignSelf: 'flex-end',
	minHeight: `calc(3 * ${theme.space['8']})`,
	maxHeight: `calc(100vh - ${theme.space['8']})`,
	borderRadius: `${theme.space['2']} ${theme.space['2']} 0 0`,
	...theme.utils.responsiveStyle({
		tablet: {
			alignSelf: 'center',
			borderRadius: `${theme.space['1']}`,
		},
		desktop: {
			maxWidth: `calc(100% - ${theme.space['9']} * 2)`,
			height: 'auto',
			maxHeight: `calc(100vh - ${theme.space['9']} * 2)`,
			boxShadow:
				'0 0 32px 0 rgba(0,0,0, 0.012), 0 24px 96px 0 rgba(0,0,0, 0.08)',
			marginTop: 0,
		},
	}),
}));

export const modalSizeSkinny = style((theme) =>
	theme.utils.responsiveStyle({
		tablet: {
			maxWidth: '420px',
		},
		desktop: {
			maxWidth: '420px',
		},
		largeDesktop: {
			width: '420px',
		},
	}),
);

export const modalSizeNarrow = style((theme) =>
	theme.utils.responsiveStyle({
		tablet: {
			maxWidth: '600px',
		},
		desktop: {
			maxWidth: '600px',
		},
		largeDesktop: {
			width: '600px',
		},
	}),
);

export const modalSizeStandard = style((theme) =>
	theme.utils.responsiveStyle({
		tablet: {
			width: '800px',
		},
	}),
);

export const headerCloseButton = style(() => ({
	top: 0,
	right: 0,
	bottom: 0,
}));

export const content = style({
	overflowY: 'auto',
	overscrollBehavior: 'contain',
	// @ts-ignore
	webkitOverflowScrolling: 'touch',
	'-webkit-overflow-scrolling': 'touch',
});
