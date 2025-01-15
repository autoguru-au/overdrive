import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';

export const styledGridContainer = recipe({
	base: odStyle({
		display: 'grid',
		gap: '3',
	}),
	variants: {
		columns: {
			double: { gridTemplateColumns: '1fr 1fr' },
		},
	},
});

export const styledItem = recipe({
	base: [
		{
			minHeight: '80px',
			userSelect: 'none',
		},
		odStyle({
			alignItems: 'center',
			borderColor: 'gray',
			borderRadius: '2',
			borderStyle: 'solid',
			borderWidth: '1',
			cursor: { hover: 'pointer' },
			display: 'flex',
			...focusOutline,
			gap: '2',
			padding: '3',
		}),
	],
	variants: {
		disabled: {
			true: {},
		},
		selected: {
			false: odStyle({
				background: { hover: 'gray200' },
				borderColor: { initial: 'gray', hover: 'light' },
			}),
			true: odStyle({
				borderColor: 'dark',
			}),
		},
		size: {},
	},
});

export type StyledItemProps = NonNullable<RecipeVariants<typeof styledItem>>;

export const iconContainer = style({
	height: '26px',
	width: '26px',
});

const checkedBaseTransition = style({
	transitionProperty: 'background',
	transitionTimingFunction: 'ease-in',
	transitionDuration: '80ms',
});

export const styledCheckbox = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: {
				initial: 'white',
				hover: 'gray300',
				checked: 'gray900',
			},
			borderColor: { initial: 'gray', checked: 'dark' },
			borderRadius: '1',
			borderStyle: 'solid',
			borderWidth: '1',
			color: { initial: 'transparent', checked: 'white', hover: 'white' },
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			size: '6',
		}),
		checkedBaseTransition,
	],
	variants: {
		checked: {
			false: { transitionDuration: '15ms' },
		},
		focused: {
			true: odStyle({ ...focusOutline, outlineWidth: 'default' }),
		},
	},
});

export type StyledCheckboxProps = NonNullable<
	RecipeVariants<typeof styledCheckbox>
>;
