import { style, styleMap } from 'treat';

import { shadedColour } from '../../../themes/helpers';

const iconRoot = style(({ space, animation }) => ({
	top: '50%',
	transform: 'translate3d(0, -50%, 0)',
	transition: `color 0.2s ${animation.easing.decelerate} 0s`,
	margin: `0 calc(${space['3']} - 1px)`,
}));

export const icon = {
	prefix: [iconRoot, style({ left: 0 })],
	suffix: [iconRoot, style({ right: 0 })],
};

export const input = {
	itself: styleMap(({ typography, space, shadeIntensity, isDark }) => ({
		root: {
			zIndex: 1,
			alignSelf: 'flex-end',
			background: 'transparent',
			outline: 'none',
			fontSize: typography.size['4'].fontSize,
			lineHeight: 1,
			height: space['8'],
			padding: `calc(((${space['8']} - ${typography.size['4'].fontSize}) / 2) - 3px) calc(${space['4']} - 1px)`,
			selectors: {
				'&[disabled]': {
					color: shadedColour(
						typography.colour.muted,
						shadeIntensity.medium,
						'forward',
						isDark,
					),
					cursor: 'not-allowed',
				},
				'&::placeholder': {
					fontSize: typography.size['4'].fontSize,
					lineHeight: typography.size['4'].lineHeight,
					color: shadedColour(
						typography.colour.muted,
						shadeIntensity.medium,
						'forward',
						isDark,
					),
					opacity: 1,
				},
			},
		},
		prefixed: {
			paddingLeft: `calc((${space['3']} - 1px) + (${space['4']} - 1px) + ${space[4]})`,
		},
		suffixed: {
			paddingRight: `calc((${space['3']} - 1px) + (${space['4']} - 1px) + ${space[4]})`,
		},
	})),
};

export const types = {
	textarea: style((theme) => {
		const textAreaHeight = `calc((${theme.space['8']} * 2.5))`;
		const topSpacing = `calc(((${theme.space['8']} - ${theme.typography.size['4'].fontSize}) / 2) - 3px)`;

		return {
			height: `calc(${textAreaHeight} - ${topSpacing})`,
			minHeight: `calc(${textAreaHeight} - ${topSpacing})`,
			lineHeight: 1.2,
			resize: 'vertical',
		};
	}),
};
