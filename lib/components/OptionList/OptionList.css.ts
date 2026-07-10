import { globalLayer, style } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

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
				color: tokens.color.gamut.gray['400'],
			},
		},
	},
]);

// === Option item styles
export const optionItemStyle = style([
	sprinkles({
		borderColor: 'default',
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
				background: tokens.color.background.default,
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
						background: tokens.color.gamut.gray['200'],
						cursor: 'pointer',
					},
					[selectors.focusVisible]: {
						background: tokens.color.gamut.gray['200'],
					},
					[selectors.disabled]: {
						background: tokens.color.background.default,
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
				background: tokens.color.background.default,
				borderColor: tokens.border.colours.gray,
				color: 'transparent',
				transitionDuration: '100ms',
				transitionProperty: 'background',
				transitionTimingFunction: 'ease-in',
				selectors: {
					[selectors.checked]: {
						background: tokens.color.gamut.gray['900'],
						borderColor: tokens.border.colours.dark,
						color: tokens.color.background.default,
					},
					[`${optionItemStyle}:hover &:not([data-checked],[data-disabled])`]:
						{
							background: tokens.color.gamut.gray['300'],
							color: tokens.color.background.default,
						},
				},
			},
		},
	},
]);
