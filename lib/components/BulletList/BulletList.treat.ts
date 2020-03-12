import { style } from 'treat';

export const root = style({
	listStyle: 'inside none',
});

export const firstOccurrence = style(theme => ({
	paddingLeft: theme.space['6'],
}));
