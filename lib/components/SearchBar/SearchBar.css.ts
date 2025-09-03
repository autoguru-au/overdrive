import { style } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

const hideWebkitAppearance = style({
	'@layer': {
		[cssLayerComponent]: {
			selectors: {
				'&::-webkit-search-cancel-button, &::-webkit-search-decoration':
					{
						appearance: 'none',
					},
			},
		},
	},
});

const placeholder = style({
	'@layer': {
		[cssLayerComponent]: {
			selectors: {
				'&::placeholder': {
					color: tokens.colours.gamut.gray400,
				},
				'&:disabled::placeholder': {
					color: tokens.colours.gamut.gray300,
				},
			},
		},
	},
});

export const searchBarStyle = style([
	{
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				backgroundColor: tokens.colours.background.body,
				borderColor: tokens.border.colours.gray,
				borderRadius: tokens.border.radius['md'],
				borderStyle: 'solid',
				borderWidth: tokens.border.width[2],
				color: tokens.colours.gamut.gray400,
				display: 'flex',
				gap: tokens.space[2],
				padding: `0 ${tokens.space[4]}`,
				selectors: {
					'&:focus, &[data-focus], &[data-focused]': {
						borderColor: tokens.border.colours.dark,
						color: tokens.colours.gamut.gray900,
					},
					'&:disabled, &[data-disabled]': {
						borderColor: tokens.border.colours.light,
						color: tokens.colours.gamut.gray300,
						cursor: 'not-allowed',
					},
					'&:hover:not(:disabled,[data-disabled]), &[data-hover]:not(:disabled,[data-disabled])':
						{
							cursor: 'text',
						},
					'&:hover:not(:focus,[data-focus],[data-focused]):not(:disabled,[data-disabled]), &[data-hover]:not(:focus,[data-focus],[data-focused]):not(:disabled,[data-disabled])':
						{
							backgroundColor: tokens.border.colours.light,
							borderColor: tokens.border.colours.light,
						},
				},
			},
		},
	},
	focusOutlineStyle,
]);

export const inputStyle = style([
	{
		'@layer': {
			[cssLayerComponent]: {
				background: 'transparent',
				borderWidth: 0,
				cursor: 'inherit',
				fontSize: tokens.typography.size[8].fontSize,
				height: '72px',
				outlineStyle: 'none',
				textAlign: 'center',
				width: '100%',
			},
		},
	},
	hideWebkitAppearance,
	placeholder,
]);

export const clearButtonStyle = style([
	{
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				background: 'transparent',
				borderStyle: 'none',
				cursor: 'pointer',
				display: 'flex',
				justifyContent: 'center',
				opacity: 1,
				padding: 0,
				pointerEvents: 'auto',
				position: 'relative',
			},
		},
	},
	sprinkles({
		size: '6',
	}),
]);

export const clearButtonHidden = style({
	'@layer': {
		[cssLayerComponent]: {
			opacity: 0,
			pointerEvents: 'none',
		},
	},
});

export const fieldWrapper = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			display: 'flex',
			flexGrow: 1,
		},
	},
});
