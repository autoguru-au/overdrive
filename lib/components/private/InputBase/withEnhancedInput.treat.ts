import { style, styleMap } from 'treat';

const iconRoot = style(({ space, animation }) => ({
	position: 'absolute',
	top: '50%',
	transform: 'translate3d(0, -50%, 0)',
	pointerEvents: 'none',
	transition: `color 0.2s ${animation.easing.decelerate} 0s`,
	margin: `0 calc(${space['3']} - 1px)`,
}));

export const icon = {
	prefix: [iconRoot, style({ left: 0 })],
	suffix: [iconRoot, style({ right: 0 })],
};

export const input = {
	root: style({
		height: '100%',
	}),
	itself: styleMap((theme) => ({
		root: {
			position: 'relative',
			zIndex: 1,
			display: 'flex',
			alignSelf: 'flex-end',
			background: 'transparent',
			outline: 'none',
			fontSize: theme.typography.size['4'].fontSize,
			lineHeight: 1,
			height: theme.space['8'],
			padding: `calc(((${theme.space['8']} - ${theme.typography.size['4'].fontSize}) / 2) - 3px) calc(${theme.space['4']} - 1px)`,
			selectors: {
				'&[disabled]': {
					color: theme.colours.gamut.gray400,
					cursor: 'not-allowed',
				},
				'&::placeholder': {
					fontSize: theme.typography.size['4'].fontSize,
					lineHeight: theme.typography.size['4'].lineHeight,
					color: theme.colours.gamut.gray400,
					opacity: 1,
				},
			},
		},
		prefixed: {
			paddingLeft: `calc((${theme.space['3']} - 1px) + (${theme.space['4']} - 1px) + ${theme.space[4]})`,
		},
		suffixed: {
			paddingRight: `calc((${theme.space['3']} - 1px) + (${theme.space['4']} - 1px) + ${theme.space[4]})`,
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
