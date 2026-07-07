import { globalLayer, style } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

export const calendarGridStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			width: '100%',
		},
	},
});

export const calendarStyle = style([
	sprinkles({
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'spaceBetween',
		mb: '2',
		px: '1',
	}),
]);

// === Cell styles

export const cellStyle = style([
	sprinkles({
		alignItems: 'center',
		borderRadius: 'md',
		display: 'flex',
		mx: 'auto',
		justifyContent: 'center',
		size: '7',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				background: tokens.color.background.default,
				color: tokens.color.foreground.primary,
				cursor: 'pointer',
				selectors: {
					[selectors.focusVisible]: {
						background: tokens.color.gamut.gray['200'],
					},
					[selectors.selected]: {
						background: tokens.color.foreground.primary,
						color: tokens.color.background.default,
					},
					[selectors.hoverNotSelected]: {
						background: tokens.color.gamut.gray['200'],
					},
					[`${selectors.disabled}, ${selectors.unavailable}`]: {
						background: tokens.color.background.default,
						color: tokens.color.gamut.gray['400'],
						cursor: 'default',
					},
				},
			},
		},
	},
	focusOutlineStyle,
]);

// === Button styles

export const buttonStyle = style([
	sprinkles({
		alignItems: 'center',
		borderColor: 'default',
		borderRadius: 'md',
		borderStyle: 'solid',
		borderWidth: '1',
		display: 'flex',
		justifyContent: 'center',
		padding: 'none',
		size: '7',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				background: tokens.color.background.default,
				color: tokens.color.gamut.gray['600'],
				cursor: 'pointer',
				selectors: {
					[selectors.hoverNotDisabled]: {
						background: tokens.color.gamut.gray['200'],
					},
					[selectors.focusVisible]: {
						background: tokens.color.gamut.gray['200'],
					},
					[selectors.disabled]: {
						background: tokens.color.background.default,
						borderColor: tokens.border.colours.light,
						color: tokens.color.gamut.gray['300'],
						cursor: 'not-allowed',
					},
				},
			},
		},
	},
	focusOutlineStyle,
]);

export const thStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			color: tokens.color.gamut.gray['600'],
		},
	},
});

export const tdStyle = sprinkles({
	padding: '1',
});

// === Heading styles
export const titleStyle = sprinkles({
	fontWeight: 'bold',
	margin: 'none',
});
