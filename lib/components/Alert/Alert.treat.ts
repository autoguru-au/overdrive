import { style, styleMap } from 'treat';

import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const root = style(theme => ({
	position: 'relative',
	display: 'grid',
	overflow: 'hidden',
	alignItems: 'flex-start',
	justifyContent: 'center',
	minWidth: '280px',
	maxWidth: '640px',
	border: `1px solid ${theme.colours.gamut.gray300}`,
	gridTemplateColumns: 'auto 1fr auto',
	gridGap: theme.space['2'],

	':before': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: theme.space['1'],
		height: '100%',
		content: '""',
	},
}));

export const closeButton = style({
	width: '36px',
	height: '36px',
	minWidth: 'auto',
});

export const closeButtonIcon = style(theme => ({
	color: theme.colours.gamut.gray400,
}));

export const icon = style(({ space }) => ({
	margin: `${space['2']} 0 ${space['2']} ${space['2']}`,
}));

export const content = style(theme => ({
	margin: `calc(${theme.space['2']} - 1px) 0`,
	color: theme.colours.gamut.gray900,
}));

export const intent = styleMap(theme =>
	mapTokenToProperty(theme.colours.intent, value => ({
		color: value.background,
		':before': {
			backgroundColor: value.background,
		},
	})),
);
