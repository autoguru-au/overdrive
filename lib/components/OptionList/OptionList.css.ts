import { style } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

// === Group styles
export const groupStyle = sprinkles({
	mt: '6',
});

export const groupLabelStyle = sprinkles({
	text: '7',
	fontWeight: 'bold',
	mb: '3',
});

export const descriptionStyle = style([
	sprinkles({
		text: '4',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				color: tokens.colours.gamut.gray400,
			},
		},
	},
]);

// === Option item styles
export const optionItemStyle = style([
	sprinkles({
		borderColour: 'gray',
		borderStyle: 'solid',
		borderWidth: '1',
		display: 'flex',
		gap: '2',
		paddingY: '3',
		paddingX: '4',
		userSelect: 'none',
		width: 'full',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				background: tokens.colours.background.body,
				selectors: {
					['&+&']: {
						borderTopStyle: 'none',
					},
					['&:first-child']: {
						borderTopLeftRadius: tokens.border.radius.md,
						borderTopRightRadius: tokens.border.radius.md,
					},
					['&:last-child']: {
						borderBottomLeftRadius: tokens.border.radius.md,
						borderBottomRightRadius: tokens.border.radius.md,
					},
					[selectors.hoverNotDisabled]: {
						background: tokens.colours.gamut.gray200,
						cursor: 'pointer',
					},
					[selectors.focusVisible]: {
						background: tokens.colours.gamut.gray200,
					},
					[selectors.disabled]: {
						background: tokens.colours.background.body,
						cursor: 'default',
					},
				},
			},
		},
	},
	focusOutlineStyle,
]);

export const itemLabelStyle = sprinkles({
	alignSelf: 'center',
	text: '3',
	width: 'full',
});

// === Checkbox styles
export const checkbox = style([
	sprinkles({
		alignItems: 'center',
		display: 'flex',
		flexShrink: '0',
		justifyContent: 'center',
		size: '6',
		borderRadius: 'sm',
		borderStyle: 'solid',
		borderWidth: '1',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				background: tokens.colours.background.body,
				borderColor: tokens.border.colours.gray,
				color: 'transparent',
				transitionDuration: '100ms',
				transitionProperty: 'background',
				transitionTimingFunction: 'ease-in',
				selectors: {
					[selectors.checked]: {
						background: tokens.colours.gamut.gray900,
						borderColor: tokens.border.colours.dark,
						color: tokens.colours.background.body,
					},
					[`${optionItemStyle}:hover &:not([data-checked],[data-disabled])`]:
						{
							background: tokens.colours.gamut.gray300,
							color: tokens.colours.background.body,
						},
				},
			},
		},
	},
]);
