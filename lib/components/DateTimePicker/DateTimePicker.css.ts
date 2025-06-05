import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { styledFont } from '../../styles/typography.css';
import { overdriveTokens as tokens, overdriveTokens } from '../../themes';
import { breakpoints } from '../../themes/makeTheme';
import { interactionStyle } from '../../utils/css';

// --- Container styles

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

export const calendarStyle = style({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: tokens.space[2],
	padding: `0 ${tokens.space[1]}`,
});

// -- Cell styles

export const styledCell = recipe({
	base: [
		{
			alignItems: 'center',
			backgroundColor: overdriveTokens.colours.background.body,
			borderRadius: overdriveTokens.border.radius['md'],
			color: overdriveTokens.colours.foreground.body,
			cursor: 'pointer',
			display: 'inline-flex',
			fontSize: 'md',
			justifyContent: 'center',
		},
		interactionStyle({
			hoverNotSelected: {
				backgroundColor: overdriveTokens.colours.gamut.gray200,
			},
			selected: {
				backgroundColor: overdriveTokens.colours.foreground.body,
				color: overdriveTokens.colours.background.body,
			},
			disabled: {
				backgroundColor: overdriveTokens.colours.background.body,
				color: overdriveTokens.colours.gamut.gray400,
				cursor: 'default',
			},
		}),
		sprinkles({
			size: '7',
		}),
		focusOutlineStyle,
	],
});

// -- Button styles

export const styledButton = recipe({
	base: [
		{
			alignItems: 'center',
			backgroundColor: overdriveTokens.colours.background.body,
			borderColor: overdriveTokens.border.colours.gray,
			borderRadius: overdriveTokens.border.radius['md'],
			borderStyle: 'solid',
			borderWidth: overdriveTokens.border.width[1],
			color: overdriveTokens.colours.gamut.gray600,
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'center',
			padding: 0,
		},
		interactionStyle({
			hover: {
				backgroundColor: overdriveTokens.colours.gamut.gray200,
			},
			disabled: {
				backgroundColor: overdriveTokens.colours.background.body,
				borderColor: overdriveTokens.border.colours.light,
				color: overdriveTokens.colours.gamut.gray300,
				cursor: 'not-allowed',
			},
		}),
		sprinkles({
			size: '7',
		}),
		focusOutlineStyle,
	],
});

export const thStyle = style({
	color: overdriveTokens.colours.gamut.gray600,
});

export const tdStyle = style({
	padding: overdriveTokens.space[1],
	textAlign: 'center',
});

// -- Heading styles

export const headingStyle = styledFont({ size: '3xl', weight: 'bold' });

export const subheadingStyle = styledFont({ size: 'xl', weight: 'bold' });

export const titleStyle = style({
	fontWeight: overdriveTokens.typography.fontWeight.bold,
	margin: 0,
});
