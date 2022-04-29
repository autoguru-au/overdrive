import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../../themes/base/vars.css';

export const input = {
	itself: styleVariants({
		root: {
			zIndex: 1,
			alignSelf: 'flex-end',
			background: 'transparent',
			outline: 'none',
			fontSize: vars.typography.size['4'].fontSize,
			lineHeight: vars.typography.size['4'].lineHeight,
			height: vars.space['8'],
			selectors: {
				'&[disabled]': {
					color: vars.typography.colour.muted,
					cursor: 'not-allowed',
				},
				'&::placeholder': {
					fontSize: vars.typography.size['4'].fontSize,
					lineHeight: vars.typography.size['4'].lineHeight,
					color: vars.typography.colour.muted,
					opacity: 1,
				},
			},
		},
	}),
};

const textAreaHeight = '107px';

export const types = styleVariants({
	textarea: {
		height: textAreaHeight,
		minHeight: textAreaHeight,
		lineHeight: 1.2,
		resize: 'vertical',
	},
});

export const size = {
	small: styleVariants({
		root: {
			padding: `${vars.space['2']} ${vars.space['2']}`,
		},
		prefixed: {
			paddingLeft: `calc(${vars.space['2']} + ${vars.space['5']} + ${vars.space['2']})`,
		},
		suffixed: {
			paddingRight: `calc(${vars.space['2']} + ${vars.space['5']} + ${vars.space['2']})`,
		},
	}),
	medium: styleVariants({
		root: {
			padding: `calc(((${vars.space['8']} - ${vars.typography.size['4'].fontSize}) / 2) - 3px) calc(${vars.space['4']} - 1px)`,
		},
		prefixed: {
			paddingLeft: `calc((${vars.space['3']} - 1px) + (${vars.space['4']} - 1px) + ${vars.space[4]})`,
		},
		suffixed: {
			paddingRight: `calc((${vars.space['3']} - 1px) + (${vars.space['4']} - 1px) + ${vars.space[4]})`,
		},
	}),
};

export const iconRoot = style({
	zIndex: 1,
	top: '50%',
	transform: 'translate3d(0, -50%, 0)',
	transition: `color 0.2s ${vars.animation.easing.decelerate} 0s`,
});

export const prefixIcon = style({
	left: 0,
});
export const suffixIcon = style({
	right: 0,
});
export const iconSize = styleVariants({
	small: {
		margin: `0 ${vars.space['2']}`,
	},
	medium: {
		margin: `0 calc(${vars.space['3']} - 1px)`,
	},
});
