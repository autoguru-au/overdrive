import { style, styleMap } from 'treat';

import { shadedColour } from '../../themes/helpers';

export const root = style(({ animation }) => ({
	transitionDelay: '0s',
	transitionTimingFunction: animation.easing.standard,
	transitionDuration: '0.1s',
	transitionProperty:
		'color, background-color, border-color, box-shadow, transform',
	transform: 'translate3d(0, 0, 1) scale(1)',
	willChange: 'transform',
}));

export const body = style(({ space }) => ({
	display: 'grid',
	gridAutoFlow: 'column dense',
	gridGap: space['1'],
}));

export const loading = style({
	cursor: 'not-allowed',
});

export const enabled = style({
	cursor: 'pointer',
});

export const disabled = style({
	cursor: 'not-allowed',
	opacity: '0.3',
});

export const spinner = style({
	margin: '0 auto',
});

const smallHeight = '36px';

export const size = {
	small: styleMap(({ space }) => ({
		default: {
			minWidth: space['8'],
			height: smallHeight,
			gridGap: space['1'],
		},
		rounded: {
			minWidth: smallHeight,
		},
		iconOnly: {
			width: smallHeight,
		},
	})),
	medium: styleMap(({ space }) => ({
		default: {
			minWidth: space['9'],
			height: space['8'],
			gridGap: space['2'],
		},
		rounded: {
			minWidth: space['8'],
		},
		iconOnly: {
			width: space['8'],
		},
	})),
};
export const variant = {
	primary: style(({ colours, shadeIntensity, isDark, elevation }) => ({
		color: colours.intent.primary.foreground,
		backgroundColor: colours.intent.primary.background,
		boxShadow: `inset 0 0 0 1px ${shadedColour(
			colours.intent.primary.background,
			shadeIntensity.slight,
			'backward',
			isDark,
		)}, ${elevation['2']}`,
	})),
	secondary: style(({ colours, elevation }) => ({
		color: colours.intent.secondary.foreground,
		backgroundColor: colours.intent.secondary.background,
		boxShadow: `inset 0 0 0 1px ${colours.intent.secondary.foreground}, ${elevation['2']}`,
	})),
	danger: style(({ colours, shadeIntensity, isDark, elevation }) => ({
		backgroundColor: colours.intent.danger.background,
		color: colours.intent.danger.foreground,
		boxShadow: `inset 0 0 0 1px ${shadedColour(
			colours.intent.danger.background,
			shadeIntensity.slight,
			'backward',
			isDark,
		)}, ${elevation['2']}`,
	})),
};

export const defaultStates = {
	primary: style(({ colours, shadeIntensity, isDark, elevation }) => ({
		':hover': {
			color: colours.intent.primary.foreground,
			backgroundColor: shadedColour(
				colours.intent.primary.background,
				shadeIntensity.slight,
				'backward',
				isDark,
			),
			boxShadow: `inset 0 0 0 1px ${shadedColour(
				colours.intent.primary.background,
				shadeIntensity.slight,
				'backward',
				isDark,
			)}, ${elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			boxShadow: `inset 0 0 0 1px ${shadedColour(
				colours.intent.primary.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			)}, ${elevation['1']}`,
			color: colours.intent.primary.foreground,
			backgroundColor: shadedColour(
				colours.intent.primary.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
		},
	})),
	secondary: style(({ colours, isDark, shadeIntensity, elevation }) => ({
		':hover': {
			color: colours.intent.secondary.foreground,
			backgroundColor: shadedColour(
				colours.intent.secondary.background,
				shadeIntensity.slight,
				'backward',
				isDark,
			),
			boxShadow: `inset 0 0 0 1px ${shadedColour(
				colours.intent.secondary.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			)}, ${elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			color: colours.intent.secondary.foreground,
			backgroundColor: shadedColour(
				colours.intent.secondary.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
			boxShadow: `inset 0 0 0 1px ${shadedColour(
				colours.intent.secondary.background,
				shadeIntensity.intense,
				'backward',
				isDark,
			)}, ${elevation['1']}`,
		},
	})),
	danger: style(({ colours, shadeIntensity, isDark, elevation }) => ({
		':hover': {
			color: colours.intent.danger.foreground,
			backgroundColor: shadedColour(
				colours.intent.danger.background,
				shadeIntensity.slight,
				'backward',
				isDark,
			),
			boxShadow: `inset 0 0 0 1px ${shadedColour(
				colours.intent.danger.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			)}, ${elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			color: colours.intent.danger.foreground,
			backgroundColor: shadedColour(
				colours.intent.danger.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
			boxShadow: `inset 0 0 0 1px ${shadedColour(
				colours.intent.danger.background,
				shadeIntensity.intense,
				'backward',
				isDark,
			)}, ${elevation['1']}`,
		},
	})),
};

export const minimal = {
	defaults: style(({ typography }) => ({
		color: typography.colour.neutral,
	})),
	noneRounded: style({
		minWidth: '50px',
	}),
};

export const minimalStates = {
	primary: style(({ colours, isDark, shadeIntensity, transparency }) => ({
		':hover': {
			color: shadedColour(
				colours.intent.primary.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
			backgroundColor: shadedColour(
				colours.intent.primary.background,
				shadeIntensity.intense,
				'forward',
				isDark,
				transparency.intense,
			),
			boxShadow: 'none',
		},
		':active': {
			color: shadedColour(
				colours.intent.primary.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
			backgroundColor: shadedColour(
				colours.intent.primary.background,
				shadeIntensity.intense,
				'backward',
				isDark,
				transparency.intense,
			),
			boxShadow: 'none',
		},
	})),
	secondary: style(
		({ colours, typography, shadeIntensity, isDark, transparency }) => ({
			':hover': {
				color: shadedColour(
					typography.colour.secondary,
					shadeIntensity.medium,
					'backward',
					isDark,
				),
				backgroundColor: shadedColour(
					colours.intent.secondary.foreground,
					shadeIntensity.intense,
					'forward',
					isDark,
					transparency.intense,
				),
				boxShadow: 'none',
			},
			':active': {
				color: shadedColour(
					typography.colour.secondary,
					shadeIntensity.medium,
					'backward',
					isDark,
				),
				backgroundColor: shadedColour(
					colours.intent.secondary.foreground,
					shadeIntensity.medium,
					'backward',
					isDark,
					transparency.intense,
				),
				boxShadow: 'none',
			},
		}),
	),
	danger: style(({ colours, shadeIntensity, isDark, transparency }) => ({
		':hover': {
			color: shadedColour(
				colours.intent.danger.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
			backgroundColor: shadedColour(
				colours.intent.danger.background,
				shadeIntensity.intense,
				'forward',
				isDark,
				transparency.intense,
			),
			boxShadow: 'none',
		},
		':active': {
			color: shadedColour(
				colours.intent.danger.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
			backgroundColor: shadedColour(
				colours.intent.danger.background,
				shadeIntensity.medium,
				'backward',
				isDark,
				transparency.intense,
			),
			boxShadow: 'none',
		},
	})),
};
