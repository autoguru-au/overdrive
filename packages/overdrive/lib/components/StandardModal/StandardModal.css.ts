import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';
import { responsiveStyle } from '../../utils/responsiveStyle';

export const container = style({
	outline: '0',
});

export const modal = style({
	width: '100vw',
	height: 'auto',
	alignSelf: 'flex-end',
	minHeight: `calc(3 * ${vars.space['8']})`,
	maxHeight: `calc(100vh - ${vars.space['8']})`,
	borderRadius: `${vars.space['2']} ${vars.space['2']} 0 0`,
	...responsiveStyle({
		tablet: {
			alignSelf: 'center',
			borderRadius: `${vars.space['1']}`,
		},
		desktop: {
			maxWidth: `calc(100% - ${vars.space['9']} * 2)`,
			height: 'auto',
			maxHeight: `calc(100vh - ${vars.space['9']} * 2)`,
			boxShadow:
				'0 0 32px 0 rgba(0,0,0, 0.012), 0 24px 96px 0 rgba(0,0,0, 0.08)',
			marginTop: 0,
		},
	}),
});

export const modalSizeSkinny = style(responsiveStyle({
	tablet: {
		maxWidth: '420px',
	},
	desktop: {
		maxWidth: '420px',
	},
	largeDesktop: {
		width: '420px',
	},
}));

export const modalSizeNarrow = style(responsiveStyle({
	tablet: {
		maxWidth: '600px',
	},
	desktop: {
		maxWidth: '600px',
	},
	largeDesktop: {
		width: '600px',
	},
}));

export const modalSizeStandard = style(responsiveStyle({
	tablet: {
		width: '800px',
	},
}));

export const headerCloseButton = style({
	top: 0,
	right: 0,
	bottom: 0,
});

export const content = style({
	overflowY: 'auto',
	overscrollBehavior: 'contain',
	// @ts-ignore
	webkitOverflowScrolling: 'touch',
	'-webkit-overflow-scrolling': 'touch',
});
