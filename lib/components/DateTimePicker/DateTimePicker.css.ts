import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinklesResponsive } from '../../styles/sprinkles.css';
import { styledFont } from '../../styles/typography.css';
import { overdriveTokens as tokens, themeContractVars } from '../../themes';
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
			backgroundColor: themeContractVars.colours.background.body,
			borderRadius: themeContractVars.border.radius['md'],
			color: themeContractVars.colours.foreground.body,
			cursor: 'pointer',
			display: 'inline-flex',
			fontSize: 'md',
			justifyContent: 'center',
		},
		interactionStyle({
			hoverNotSelected: {
				backgroundColor: themeContractVars.colours.gamut.gray200,
			},
			selected: {
				backgroundColor: themeContractVars.colours.foreground.body,
				color: themeContractVars.colours.background.body,
			},
			disabled: {
				backgroundColor: themeContractVars.colours.background.body,
				color: themeContractVars.colours.gamut.gray400,
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
			backgroundColor: themeContractVars.colours.background.body,
			borderColor: themeContractVars.border.colours.gray,
			borderRadius: themeContractVars.border.radius['md'],
			borderStyle: 'solid',
			borderWidth: themeContractVars.border.width[1],
			color: themeContractVars.colours.gamut.gray600,
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'center',
			padding: 0,
		},
		interactionStyle({
			hover: {
				backgroundColor: themeContractVars.colours.gamut.gray200,
			},
			disabled: {
				backgroundColor: themeContractVars.colours.background.body,
				borderColor: themeContractVars.border.colours.light,
				color: themeContractVars.colours.gamut.gray300,
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
	color: themeContractVars.colours.gamut.gray600,
});

export const tdStyle = style({
	padding: themeContractVars.space[1],
	textAlign: 'center',
});

// -- Heading styles

export const headingStyle = styledFont({ size: '3xl', weight: 'bold' });

export const subheadingStyle = styledFont({ size: 'xl', weight: 'bold' });

export const titleStyle = style({
	fontWeight: themeContractVars.typography.fontWeight.bold,
	margin: 0,
});
