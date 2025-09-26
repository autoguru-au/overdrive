import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { elementReset } from '../../styles/elementReset.css';
import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

import { WIDTH_COMPACT_ORIENTATION } from './ToggleButtons';

const TOGGLE_BUTTON_HEIGHT = '40px';

export const toggleButtonsContainer = createContainer();
export const toggleButtonsContainerStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			containerName: toggleButtonsContainer,
			containerType: 'inline-size',
		},
	},
});

export const toggleButtonGroup = recipe({
	base: [
		{
			'@layer': {
				[cssLayerComponent]: {
					color: vars.color.gamut.gray[500],
					display: 'grid',
					gridTemplateColumns: '1fr',
					'@container': {
						[`${toggleButtonsContainer} (min-width: ${WIDTH_COMPACT_ORIENTATION}px)`]:
							{
								gridTemplateColumns:
									'repeat(auto-fit, minmax(0, 1fr))',
							},
					},
				},
			},
		},
	],
	variants: {
		iconOnly: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						color: vars.color.content.normal,
						display: 'block',
						lineHeight: 1,
						width: 'fit-content',
					},
				},
			},
		},
	},
	defaultVariants: {
		iconOnly: false,
	},
});

const selectorNotIconOnly = `${toggleButtonGroup.classNames.base}:not([data-icon-only])`;

export const toggleButton = style([
	elementReset.button,
	focusOutlineStyle,
	sprinkles({
		backgroundColor: 'page',
		borderColour: 'gray',
		borderStyle: 'solid',
		borderWidth: '1',
		px: '3',
		text: '4',
		textWrap: 'nowrap',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				appearance: 'none',
				color: 'inherit',
				height: TOGGLE_BUTTON_HEIGHT,
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				transitionDuration: '0.1s',
				transitionProperty:
					'background-color, border-color, box-shadow, color',
				transitionTimingFunction: vars.animation.easing.standard,
				userSelect: 'none',
				selectors: {
					'&:first-child': {
						borderBottomLeftRadius: vars.border.radius.md,
						borderTopLeftRadius: vars.border.radius.md,
					},
					'&:last-child': {
						borderBottomRightRadius: vars.border.radius.md,
						borderTopRightRadius: vars.border.radius.md,
					},
					'&:focus-visible': {
						position: 'relative',
						zIndex: 1,
					},
					'&+&': {
						borderLeftStyle: 'none',
					},
					[selectors.hoverNotDisabled]: {
						cursor: 'pointer',
					},
					[selectors.hoverNotSelected]: {
						backgroundColor: vars.color.gamut.gray[200],
						boxShadow:
							'inset 0 1px 5px 0 rgba(0, 0, 0, 0.03), inset 0 2px 2px 0 rgba(0, 0, 0, 0.03), inset 0 3px 1px -2px rgba(0, 0, 0, 0.05)',
						transitionDelay: '50ms',
						transitionDuration: '0.2s',
					},
					[selectors.selected]: {
						backgroundColor: vars.color.surface.hard,
						borderColor: vars.color.surface.hard,
						color: vars.color.content.inverse,
					},
					[selectors.disabled]: {
						cursor: 'not-allowed',
						opacity: 0.6,
					},
				},
				// Container-based responsive styles for mobile stacking (only for non-iconOnly)
				'@container': {
					[`${toggleButtonsContainer} (max-width: ${WIDTH_COMPACT_ORIENTATION}px)`]:
						{
							selectors: {
								[`${selectorNotIconOnly} &`]: {
									borderLeftStyle: 'solid',
								},
								[`${selectorNotIconOnly} &+&`]: {
									borderTopStyle: 'none',
								},
								[`${selectorNotIconOnly} &:first-child`]: {
									borderBottomLeftRadius: 0,
									borderTopLeftRadius: vars.border.radius.md,
									borderTopRightRadius: vars.border.radius.md,
								},
								[`${selectorNotIconOnly} &:last-child`]: {
									borderBottomLeftRadius:
										vars.border.radius.md,
									borderBottomRightRadius:
										vars.border.radius.md,
									borderTopRightRadius: 0,
								},
							},
						},
				},
			},
		},
	},
]);
