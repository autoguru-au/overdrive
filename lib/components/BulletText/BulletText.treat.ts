import { style } from 'treat';

const bulletSize = '24px';

export const root = style({
	listStyle: 'none',
});

export const customBullet = style({
	alignSelf: 'center',
	position: 'relative',
	flexShrink: 0,
});

export const bullet = style(theme => ({
	position: 'relative',
	flexShrink: 0,
	lineHeight: theme.typography.size['2'].lineHeight,
	width: bulletSize,
	height: bulletSize,
}));

export const bulletText = style(theme => ({
	fontSize: theme.typography.size['2'].fontSize,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
}));

export const variant = {
	primary: style(theme => ({
		color: theme.colours.gamut.green900,
		backgroundColor: theme.colours.gamut.green200,
	})),
	secondary: style(theme => ({
		color: theme.colours.gamut.gray900,
		backgroundColor: theme.colours.gamut.gray200,
	})),
};
