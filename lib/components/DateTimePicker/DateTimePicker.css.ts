import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import {
	disabled,
	focusVisible,
	hoverNotDisabled,
	hoverNotSelected,
	selected,
} from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { breakpoints } from '../../themes/makeTheme';
import { overdriveTokens as tokens } from '../../themes/theme.css';

// === Container styles

export const queryContainer = createContainer();
export const queryContainerStyle = style({
	containerName: queryContainer,
	containerType: 'inline-size',
});

export const layoutStyle = style({
	'@container': {
		[`${queryContainer} (min-width: ${breakpoints.tablet})`]: {
			display: 'flex',
			gap: tokens.space[7],
		},
	},
});

export const calendarGridStyle = style({
	width: '100%',
	'@container': {
		[`${queryContainer} (min-width: ${breakpoints.tablet})`]: {
			width: 'auto',
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

export const styledCell = recipe({
	base: [
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
						[focusVisible]: {
							background: tokens.colours.gamut.gray200,
						},
						[selected]: {
							background: tokens.colours.foreground.body,
							color: tokens.colours.background.body,
						},
						[hoverNotSelected]: {
							background: tokens.colours.gamut.gray200,
						},
						[disabled]: {
							background: tokens.colours.background.body,
							color: tokens.colours.gamut.gray400,
							cursor: 'default',
						},
					},
				},
			},
		},
		focusOutlineStyle,
	],
});

// === Button styles

export const styledButton = recipe({
	base: [
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
						[hoverNotDisabled]: {
							background: tokens.colours.gamut.gray200,
						},
						[focusVisible]: {
							background: tokens.colours.gamut.gray200,
						},
						[disabled]: {
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
	],
});

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
