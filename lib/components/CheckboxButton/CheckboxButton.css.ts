import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { odStyle, type ODStyle } from '../../styles/sprinkles.css';

const border: ODStyle = {
	borderColor: 'light',
	borderStyle: 'solid',
	borderWidth: '1',
};

const focusOutline: ODStyle = {
	outlineColor: 'link',
	outlineStyle: 'solid',
	outlineOffset: 'md',
	outlineWidth: { initial: 'none', focusVisible: 'default' },
};

export const container = recipe({
	base: [
		odStyle({
			background: { initial: 'gray100', hover: 'gray300' },
			...border,
			borderRadius: '2',
			cursor: { hover: 'pointer' },
			display: 'flex',
			gap: '2',
			padding: '2',
			width: '100%',
		}),
	],
});

export const checkbox = recipe({
	base: odStyle({
		size: '6',
		...border,
		borderRadius: '1',
		...focusOutline,
	}),
	variants: {
		checked: {
			true: odStyle({
				background: 'blue800',
			}),
			false: odStyle({
				background: 'white',
			}),
		},
		focused: {
			true: odStyle({ ...focusOutline, outlineWidth: 'default' }),
		},
	},
});

export const checkboxButton = recipe({
	base: [
		odStyle({
			display: 'flex',
			padding: '3',
		}),
	],
});
