import { style, styleMap } from 'treat';

export const root = styleMap((theme) => ({
	default: {
		display: 'grid',
		gridTemplateColumns: 'min-content 1fr',
		gridGap: theme.space['4'],
		marginBottom: theme.space['2'],

		':last-of-type': {
			marginBottom: 0,
		},

		':before': {
			display: 'block',
			alignSelf: 'flex-start',
			width: theme.space['2'],
			height: theme.space['2'],
			marginTop: `calc((1.6em - ${theme.space['2']}) / 2)`,
			content: "' '",
			backgroundColor: theme.typography.colour.dark,
		},
	},
	circle: {
		':before': {
			borderRadius: '50%',
		},
	},
	disc: {
		':before': {
			border: `2px solid ${theme.typography.colour.dark}`,
			borderRadius: '50%',
			backgroundColor: 'transparent',
		},
	},
	square: {
		':before': {
			border: `2px solid ${theme.typography.colour.dark}`,
			backgroundColor: 'transparent',
		},
	},
}));

export const noDot = style({
	':before': {
		visibility: 'hidden',
	},
});
