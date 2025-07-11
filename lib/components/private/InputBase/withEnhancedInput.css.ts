import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../../themes/theme.css';

export const input = {
	itself: styleVariants({
		root: {
			alignSelf: 'flex-end',
			outline: 'none',
			zIndex: 1,
			selectors: {
				'&[disabled]': {
					color: vars.colours.background.neutral,
					cursor: 'not-allowed',
				},
				'&::placeholder': {
					color: vars.typography.colour.muted,
					fontSize: vars.typography.size['4'].fontSize,
					lineHeight: vars.typography.size['4'].lineHeight,
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
		lineHeight: 1.2,
		minHeight: textAreaHeight,
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
	large: {
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
				minHeight: `calc(${vars.typography.size['3'].lineHeight} + (2* ${vars.space['2']}))`,
				padding: `${vars.space['2']}`,
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
				paddingRight: `calc(${vars.space['2']} + ${vars.space['4']} + ${vars.space['2']})`,
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
				height: vars.space['8'],
				lineHeight: vars.typography.size['4'].lineHeight,
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
	large: {
		root: styleVariants({
			any: {
				fontSize: vars.typography.size['7'].fontSize,
				height: '72px',
				lineHeight: vars.typography.size['7'].lineHeight,
				padding: '12px 25px',
				'::placeholder': {
					fontSize: vars.typography.size['7'].fontSize,
					// lineHeight: vars.typography.size['6'].lineHeight,
				},
			},
			textarea: {
				padding: `${vars.space['2']} calc(${vars.space['5']} - 1px) calc(((${vars.space['10']} - ${vars.typography.size['5'].fontSize}) / 2) - 3px)`,
			},
		}),
		prefixed: styleVariants({
			any: {
				paddingLeft: '64px',
			},
		}),
		suffixed: styleVariants({
			any: {
				paddingRight: '64px',
			},
		}),
	},
};

export type InputSize = keyof typeof inputItselfSize;

export const iconRoot = style({
	top: '50%',
	transform: 'translate(0, -50%)',
	transition: `color 0.2s ${vars.animation.easing.decelerate} 0s`,
	zIndex: 1,
});

export const prefixIcon = style({
	left: 0,
});
export const suffixIcon = style({
	right: 0,
});
export const iconSize = styleVariants({
	large: {
		margin: `0 calc(${vars.space['5']} - 1px)`,
	},
	medium: {
		margin: `0 calc(${vars.space['3']} - 1px)`,
	},
	small: {
		margin: `0 ${vars.space['2']}`,
	},
});
