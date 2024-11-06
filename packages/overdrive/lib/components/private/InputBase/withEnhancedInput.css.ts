import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../../themes/theme.css';

export const input = {
	itself: styleVariants({
		root: {
			zIndex: 1,
			alignSelf: 'flex-end',
			outline: 'none',
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

export const inputWrapperSize = {
	small: {
		root: styleVariants({
			textarea: {
				paddingTop: `${vars.space['2']}`,
			},
		}),
	},
	medium: {
		root: styleVariants({
			textarea: {
				paddingTop: `${vars.space['2']}`,
			},
		}),
	},
};

export const inputItselfSize = {
	small: {
		root: styleVariants({
			any: {
				fontSize: vars.typography.size['3'].fontSize,
				lineHeight: vars.typography.size['3'].lineHeight,
				padding: `${vars.space['2']}`,
				minHeight: `calc(${vars.typography.size['3'].lineHeight} + (2* ${vars.space['2']}))`,
			},
			textarea: {
				padding: `0 ${vars.space['2']} ${vars.space['2']}`,
			},
		}),
		prefixed: styleVariants({
			any: {
				paddingLeft: `calc(${vars.space['2']} + ${vars.space['4']} + ${vars.space['2']})`,
			},
			textarea: {
				paddingLeft: `calc(${vars.space['2']} + ${vars.space['5']} + ${vars.space['2']})`,
			},
		}),
		suffixed: styleVariants({
			any: {
				paddingRight: `calc(${vars.space['2']} + ${vars.space['5']} + ${vars.space['2']})`,
			},
			textarea: {
				paddingRight: `calc(${vars.space['2']} + ${vars.space['5']} + ${vars.space['2']})`,
			},
		}),
	},
	medium: {
		root: styleVariants({
			any: {
				fontSize: vars.typography.size['4'].fontSize,
				lineHeight: vars.typography.size['4'].lineHeight,
				height: vars.space['8'],
				padding: `calc(((${vars.space['8']} - ${vars.typography.size['4'].fontSize}) / 2) - 3px) calc(${vars.space['4']} - 1px)`,
			},
			textarea: {
				padding: `${vars.space['1']} calc(${vars.space['4']} - 1px) calc(((${vars.space['8']} - ${vars.typography.size['4'].fontSize}) / 2) - 3px)`,
			},
		}),
		prefixed: styleVariants({
			any: {
				paddingLeft: `calc((${vars.space['3']} - 1px) + (${vars.space['4']} - 1px) + ${vars.space[4]})`,
			},
		}),
		suffixed: styleVariants({
			any: {
				paddingRight: `calc((${vars.space['3']} - 1px) + (${vars.space['4']} - 1px) + ${vars.space[4]})`,
			},
		}),
	},
};

export const iconRoot = style({
	zIndex: 1,
	top: '50%',
	transform: 'translate(0, -50%)',
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
