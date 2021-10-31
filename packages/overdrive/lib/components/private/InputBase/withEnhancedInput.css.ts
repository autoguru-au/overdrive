import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../themes/base/vars.css';

const iconRoot = style({
	top: '50%',
	transform: 'translate3d(0, -50%, 0)',
	transition: `color 0.2s ${vars.animation.easing.decelerate} 0s`,
	margin: `0 calc(${vars.space['3']} - 1px)`,
});

export const icon = {
	prefix: [iconRoot, style({ left: 0 })],
	suffix: [iconRoot, style({ right: 0 })],
};

export const input = {
	itself: styleVariants({
		root: {
			zIndex: 1,
			alignSelf: 'flex-end',
			background: 'transparent',
			outline: 'none',
			fontSize: vars.typography.size['4'].fontSize,
			lineHeight: 1,
			height: vars.space['8'],
			padding: `calc(((${vars.space['8']} - ${vars.typography.size['4'].fontSize}) / 2) - 3px) calc(${vars.space['4']} - 1px)`,
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
		prefixed: {
			paddingLeft: `calc((${vars.space['3']} - 1px) + (${vars.space['4']} - 1px) + ${vars.space[4]})`,
		},
		suffixed: {
			paddingRight: `calc((${vars.space['3']} - 1px) + (${vars.space['4']} - 1px) + ${vars.space[4]})`,
		},
	}),
};

const textAreaHeight = `calc((${vars.space['8']} * 2.5))`;
const topSpacing = `calc(((${vars.space['8']} - ${vars.typography.size['4'].fontSize}) / 2) - 3px)`;
export const types = {
	textarea: {
		height: `calc(${textAreaHeight} - ${topSpacing})`,
		minHeight: `calc(${textAreaHeight} - ${topSpacing})`,
		lineHeight: 1.2,
		resize: 'vertical',
	},
};
