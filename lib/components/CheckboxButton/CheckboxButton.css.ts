import { recipe } from '@vanilla-extract/recipes';

import { sprinkles as style } from '../../styles/sprinkles.css';

export const checkbox = recipe({
	base: style({
		borderColor: 'light',
		borderRadius: '1',
		borderWidth: '1',
		display: 'flex',
		padding: '3',
		size: '6',
	}),
});

export const checkboxButton = recipe({
	base: style({
		borderColor: 'light',
		borderRadius: '1',
		borderWidth: '1',
		display: 'flex',
		padding: '3',
	}),
});
