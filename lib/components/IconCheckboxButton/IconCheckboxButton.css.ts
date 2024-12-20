import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';

export const styledWrapper = recipe({
	base: odStyle({
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
	},
});

export type StyledWrapperProps = NonNullable<
	RecipeVariants<typeof styledWrapper>
>;

const checkboxBaseTransition = style({
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
		checkboxBaseTransition,
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

export const styledIcon = recipe({
	base: {
		height: '26px',
		width: '26px',
	},
	variants: {
		hidden: {
			true: {
				display: 'none',
			},
		},
	},
});

export type StyledIconProps = NonNullable<RecipeVariants<typeof styledIcon>>;
