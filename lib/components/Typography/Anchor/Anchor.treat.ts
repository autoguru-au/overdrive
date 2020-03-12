import { style } from 'treat';

export const root = style(theme => ({
	fontSize: theme.typography.size['5'].fontSize,
	lineHeight: theme.typography.size['5'].lineHeight,
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	boxSizing: 'border-box',
	textDecoration: 'none',
	color: theme.colours.foreground.link,
	cursor: 'pointer',
}));

export const icon = style(theme => ({
	display: 'grid',
	flexShrink: 0,
	color: theme.colours.foreground.link,
	fill: 'currentColor',
}));

export const iconWithText = style({
	marginRight: '10px',
});
