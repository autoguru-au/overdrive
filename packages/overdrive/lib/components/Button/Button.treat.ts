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
	small: styleMap((theme) => ({
		default: {
			minWidth: theme.space['8'],
			height: smallHeight,
			gridGap: theme.space['1'],
		},
		rounded: {
			minWidth: smallHeight,
		},
		iconOnly: {
			width: smallHeight,
		},
	})),
	medium: styleMap((theme) => ({
		default: {
			minWidth: theme.space['9'],
			height: theme.space['8'],
			gridGap: theme.space['2'],
		},
		rounded: {
			minWidth: theme.space['8'],
		},
		iconOnly: {
			width: theme.space['8'],
		},
	})),
};
export const variant = {
	primary: style((theme) => ({
		color: theme.colours.intent.primary.foreground,
		backgroundColor: theme.colours.intent.primary.background,
		boxShadow: `inset 0 0 0 1px ${shadedColour(theme.colours.intent.primary.background, theme.shadeIntensity.slight, 'backward', theme.isDark)}, ${theme.elevation['2']}`,
	})),
	secondary: style((theme) => ({
		color: theme.colours.intent.secondary.foreground,
		backgroundColor: theme.colours.intent.secondary.background,
		boxShadow: `inset 0 0 0 1px ${shadedColour(theme.colours.intent.secondary.background, theme.shadeIntensity.medium, 'backward', theme.isDark)}, ${theme.elevation['2']}`,
	})),
	danger: style((theme) => ({
		backgroundColor: theme.colours.intent.danger.background,
		boxShadow: `inset 0 0 0 1px ${shadedColour(theme.colours.intent.danger.background, theme.shadeIntensity.slight, 'backward', theme.isDark)}, ${theme.elevation['2']}`,
		color: theme.colours.gamut.white,
	})),
};

export const defaultStates = {
	primary: style((theme) => ({
		':hover': {
			color: theme.colours.intent.primary.foreground,
			backgroundColor: shadedColour(theme.colours.intent.primary.background, theme.shadeIntensity.slight, 'backward', theme.isDark),
			boxShadow: `inset 0 0 0 1px ${shadedColour(theme.colours.intent.primary.background, theme.shadeIntensity.slight, 'backward', theme.isDark)}, ${theme.elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			boxShadow: `inset 0 0 0 1px ${shadedColour(theme.colours.intent.primary.background, theme.shadeIntensity.medium, 'backward', theme.isDark)}, ${theme.elevation['1']}`,
			color: theme.colours.intent.primary.foreground,
			backgroundColor: shadedColour(theme.colours.intent.primary.background, theme.shadeIntensity.medium, 'backward', theme.isDark),
		},
	})),
	secondary: style((theme) => ({
		':hover': {
			color: theme.colours.gamut.gray700,
			backgroundColor: theme.colours.gamut.gray200,
			boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.gray400}, ${theme.elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.gray500}, ${theme.elevation['1']}`,
			backgroundColor: theme.colours.gamut.gray300,
			color: theme.colours.gamut.gray700,
		},
	})),
	danger: style((theme) => ({
		':hover': {
			backgroundColor: theme.colours.gamut.red700,
			boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.red800}, ${theme.elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.red900}, ${theme.elevation['1']}`,
			backgroundColor: theme.colours.gamut.red800,
		},
	})),
};

export const minimal = {
	defaults: style(({ colours }) => ({
		color: colours.gamut.gray700,
	})),
	noneRounded: style({
		minWidth: '50px',
	}),
};

export const minimalStates = {
	primary: style(({ colours }) => ({
		':hover': {
			color: colours.gamut.green900,
			backgroundColor: colours.gamut.green100,
			boxShadow: 'none',
		},
		':active': {
			color: colours.gamut.green900,
			backgroundColor: colours.gamut.green200,
			boxShadow: 'none',
		},
	})),
	secondary: style(({ colours }) => ({
		':hover': {
			color: colours.gamut.gray900,
			backgroundColor: colours.gamut.gray100,
			boxShadow: 'none',
		},
		':active': {
			color: colours.gamut.gray900,
			backgroundColor: colours.gamut.gray100,
			boxShadow: 'none',
		},
	})),
	danger: style(({ colours }) => ({
		':hover': {
			color: colours.gamut.red900,
			backgroundColor: colours.gamut.red100,
			boxShadow: 'none',
		},
		':active': {
			color: colours.gamut.red900,
			backgroundColor: colours.gamut.red200,
			boxShadow: 'none',
		},
	})),
};
