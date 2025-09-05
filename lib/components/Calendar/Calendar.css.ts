import { style } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

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
		display: 'flex',
		justifyContent: 'center',
		size: '7',
		borderRadius: 'md',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				background: tokens.colours.background.body,
				color: tokens.colours.foreground.body,
				cursor: 'pointer',
				selectors: {
					[selectors.focusVisible]: {
						background: tokens.colours.gamut.gray200,
					},
					[selectors.selected]: {
						background: tokens.colours.foreground.body,
						color: tokens.colours.background.body,
					},
					[selectors.hoverNotSelected]: {
						background: tokens.colours.gamut.gray200,
					},
					[selectors.disabled]: {
						background: tokens.colours.background.body,
						color: tokens.colours.gamut.gray400,
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
		borderColour: 'gray',
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
				background: tokens.colours.background.body,
				color: tokens.colours.gamut.gray600,
				cursor: 'pointer',
				selectors: {
					[selectors.hoverNotDisabled]: {
						background: tokens.colours.gamut.gray200,
					},
					[selectors.focusVisible]: {
						background: tokens.colours.gamut.gray200,
					},
					[selectors.disabled]: {
						background: tokens.colours.background.body,
						borderColor: tokens.border.colours.light,
						color: tokens.colours.gamut.gray300,
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
			color: tokens.colours.gamut.gray600,
		},
	},
});

export const tdStyle = sprinkles({
	padding: '1',
	textAlign: 'center',
});

// === Heading styles
export const titleStyle = sprinkles({
	fontWeight: 'bold',
	margin: 'none',
});
