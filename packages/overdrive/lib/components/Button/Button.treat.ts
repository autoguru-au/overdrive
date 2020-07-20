import { style, styleMap } from 'treat';

export const root = style(({ animation }) => ({
	overflow: 'hidden',
	transitionDelay: '0s',
	transitionTimingFunction: animation.easing.standard,
	transitionDuration: '0.1s',
	transitionProperty:
		'color, background-color, border-color, box-shadow, transform',
	transform: 'translate3d(0, 0, 1) scale(1)',
	textAlign: 'center',
	textDecoration: 'none',
	background: 'none',
	willChange: 'transform',
}));

export const themedButton = style(({ typography }) => ({
	color: typography.colour.white,
	fontWeight: typography.fontWeight.semiBold,
}));

export const body = style(({ space }) => ({
	display: 'grid',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',
	gridAutoFlow: 'column dense',
	gridGap: space['1'],
}));

export const width = styleMap({
	default: {
		width: 'auto',
	},
	fullWidth: {
		width: '100%',
	},
});

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
			fontSize: theme.typography.size['3'].fontSize,
			lineHeight: theme.typography.size['3'].lineHeight,
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
			fontSize: theme.typography.size['4'].fontSize,
			lineHeight: theme.typography.size['4'].lineHeight,
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
		backgroundColor: theme.colours.intent.success.background,
		boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.green700}, ${theme.elevation['2']}`,
	})),
	secondary: style((theme) => ({
		color: theme.colours.intent.neutral.background,
		backgroundColor: theme.colours.gamut.white,
		boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.gray300}, ${theme.elevation['2']}`,
	})),
	danger: style((theme) => ({
		backgroundColor: theme.colours.intent.danger.background,
		boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.red700}, ${theme.elevation['2']}`,
		color: theme.colours.gamut.white,
	})),
};

export const defaultStates = {
	primary: style((theme) => ({
		':hover': {
			color: theme.colours.gamut.white,
			backgroundColor: theme.colours.gamut.green700,
			boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.green800}, ${theme.elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.green800}, ${theme.elevation['1']}`,
			color: theme.colours.gamut.white,
			backgroundColor: theme.colours.gamut.green800,
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
