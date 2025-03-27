import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinklesResponsive } from '../../styles/sprinkles.css';
import { styledFont } from '../../styles/typography.css';
import { breakpoints } from '../../themes/makeTheme';
import { themeContractVars as tokens } from '../../themes/theme.css';
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
			backgroundColor: tokens.colours.background.body,
			borderRadius: tokens.border.radius['md'],
			color: tokens.colours.foreground.body,
			cursor: 'pointer',
			display: 'inline-flex',
			fontSize: 'md',
			justifyContent: 'center',
		},
		interactionStyle({
			hoverNotSelected: {
				backgroundColor: tokens.colours.gamut.gray200,
			},
			selected: {
				backgroundColor: tokens.colours.foreground.body,
				color: tokens.colours.background.body,
			},
			disabled: {
				backgroundColor: tokens.colours.background.body,
				color: tokens.colours.gamut.gray400,
				cursor: 'default',
			},
		}),
		sprinklesResponsive({
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
			backgroundColor: tokens.colours.background.body,
			borderColor: tokens.border.colours.gray,
			borderRadius: tokens.border.radius['md'],
			borderStyle: 'solid',
			borderWidth: tokens.border.width[1],
			color: tokens.colours.gamut.gray600,
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'center',
			padding: 0,
		},
		interactionStyle({
			hover: {
				backgroundColor: tokens.colours.gamut.gray200,
			},
			disabled: {
				backgroundColor: tokens.colours.background.body,
				borderColor: tokens.border.colours.light,
				color: tokens.colours.gamut.gray300,
				cursor: 'not-allowed',
			},
		}),
		sprinklesResponsive({
			size: '7',
		}),
		focusOutlineStyle,
	],
});

export const thStyle = style({
	color: tokens.colours.gamut.gray600,
});

export const tdStyle = style({
	padding: tokens.space[1],
	textAlign: 'center',
});

// -- Heading styles

export const headingStyle = styledFont({ size: '3xl', weight: 'bold' });

export const subheadingStyle = styledFont({ size: 'xl', weight: 'bold' });

export const titleStyle = style({
	fontWeight: tokens.typography.fontWeight.bold,
	margin: 0,
});
