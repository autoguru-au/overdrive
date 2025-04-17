import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { themeContractVars } from '../../themes/theme.css';

// Define the properties for the sprinkles configuration
const properties = defineProperties({
	properties: {
		// Spacing
		padding: themeContractVars.space,
		paddingTop: themeContractVars.space,
		paddingRight: themeContractVars.space,
		paddingBottom: themeContractVars.space,
		paddingLeft: themeContractVars.space,
		margin: themeContractVars.space,
		marginTop: themeContractVars.space,
		marginRight: themeContractVars.space,
		marginBottom: themeContractVars.space,
		marginLeft: themeContractVars.space,
		// Layout
		display: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'],
		width: themeContractVars.contentWidth,
		height: themeContractVars.contentWidth,
		minWidth: themeContractVars.contentWidth,
		maxWidth: themeContractVars.contentWidth,
		minHeight: themeContractVars.contentWidth,
		maxHeight: themeContractVars.contentWidth,
		overflow: ['visible', 'hidden', 'auto', 'scroll'],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
		top: themeContractVars.space,
		right: themeContractVars.space,
		bottom: themeContractVars.space,
		left: themeContractVars.space,
		zIndex: themeContractVars.elevation,
		// Flexbox
		flex: ['1', 'auto', 'none'],
		flexGrow: ['0', '1'],
		flexShrink: ['0', '1'],
		flexBasis: themeContractVars.contentWidth,
		alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
		justifyContent: [
			'flex-start',
			'flex-end',
			'center',
			'space-between',
			'space-around',
			'space-evenly',
		],
		flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
		gap: themeContractVars.space,
		// Grid
		gridArea: ['auto', 'none'],
		gridColumn: ['auto', 'span 1', 'span 2', 'span 3', 'span 4'],
		gridRow: ['auto', 'span 1', 'span 2', 'span 3', 'span 4'],
		gridAutoFlow: ['row', 'column', 'row dense', 'column dense'],
		gridAutoColumns: ['auto', 'min-content', 'max-content'],
		gridAutoRows: ['auto', 'min-content', 'max-content'],
		gridTemplateColumns: [
			'none',
			'auto',
			'1fr',
			'repeat(2, 1fr)',
			'repeat(3, 1fr)',
			'repeat(4, 1fr)',
		],
		gridTemplateRows: [
			'none',
			'auto',
			'1fr',
			'repeat(2, 1fr)',
			'repeat(3, 1fr)',
			'repeat(4, 1fr)',
		],
		// Color
		color: themeContractVars.typography.colour,
		backgroundColor: themeContractVars.colours.background,
		// Typography
		fontSize: themeContractVars.typography.size,
		fontWeight: themeContractVars.typography.fontWeight,
		textAlign: ['left', 'center', 'right', 'justify'],
		// Borders
		borderWidth: themeContractVars.border.width,
		borderStyle: ['none', 'solid', 'dashed', 'dotted'],
		borderColor: themeContractVars.border.colours,
		borderRadius: themeContractVars.border.radius,
		// Shadows
		boxShadow: themeContractVars.elevation,
	},
	shorthands: {
		p: ['padding'],
		pt: ['paddingTop'],
		pr: ['paddingRight'],
		pb: ['paddingBottom'],
		pl: ['paddingLeft'],
		px: ['paddingLeft', 'paddingRight'],
		py: ['paddingTop', 'paddingBottom'],
		m: ['margin'],
		mt: ['marginTop'],
		mr: ['marginRight'],
		mb: ['marginBottom'],
		ml: ['marginLeft'],
		mx: ['marginLeft', 'marginRight'],
		my: ['marginTop', 'marginBottom'],
		bg: ['backgroundColor'],
	},
});

// Create the sprinkles function
export const sprinkles = createSprinkles(properties);

// Define the BoxSprinklesProps type, filtering out non-shorthand properties
export type BoxSprinklesProps = Parameters<typeof sprinkles>[0];

// Filter out non-shorthand properties from the BoxSprinklesProps type
export type ShorthandBoxSprinklesProps = Pick<
	BoxSprinklesProps,
	| 'p'
	| 'pt'
	| 'pr'
	| 'pb'
	| 'pl'
	| 'px'
	| 'py'
	| 'm'
	| 'mt'
	| 'mr'
	| 'mb'
	| 'ml'
	| 'mx'
	| 'my'
	| 'bg'
	| 'display'
	| 'width'
	| 'height'
	| 'minWidth'
	| 'maxWidth'
	| 'minHeight'
	| 'maxHeight'
	| 'overflow'
	| 'position'
	| 'top'
	| 'right'
	| 'bottom'
	| 'left'
	| 'zIndex'
	| 'flex'
	| 'flexGrow'
	| 'flexShrink'
	| 'flexBasis'
	| 'alignItems'
	| 'justifyContent'
	| 'flexDirection'
	| 'gap'
	| 'gridArea'
	| 'gridColumn'
	| 'gridRow'
	| 'gridAutoFlow'
	| 'gridAutoColumns'
	| 'gridAutoRows'
	| 'gridTemplateColumns'
	| 'gridTemplateRows'
	| 'color'
	| 'backgroundColor'
	| 'fontSize'
	| 'fontWeight'
	| 'textAlign'
	| 'borderWidth'
	| 'borderStyle'
	| 'borderColor'
	| 'borderRadius'
	| 'boxShadow'
>;

// Define the base recipe for the NewBox component
export const newBoxRecipe = recipe({
	base: {
		display: 'block',
		boxSizing: 'border-box',
	},
});
