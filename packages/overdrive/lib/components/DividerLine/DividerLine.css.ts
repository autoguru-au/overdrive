import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import { Tokens } from '../../themes/tokens';

type Colours = keyof Tokens['colours']['intent'];
export const colours: Record<Colours, ReturnType<typeof style>> = {
	primary: style({
		backgroundColor: vars.colours.intent.primary.background.standard,
	}),
	secondary: style({
		backgroundColor: vars.colours.intent.secondary.background.standard,
	}),
	danger: style({
		backgroundColor: vars.colours.intent.danger.background.standard,
	}),
	information: style({
		backgroundColor: vars.colours.intent.information.background.standard,
	}),
	warning: style({
		backgroundColor: vars.colours.intent.warning.background.standard,
	}),
	success: style({
		backgroundColor: vars.colours.intent.success.background.standard,
	}),
	neutral: style({
		backgroundColor: vars.colours.intent.neutral.background.mild,
	}),
	shine: style({
		backgroundColor: vars.colours.intent.shine.foreground,
	}),
};

type Size = 1 | 2 | 3;
const sizes: Size[] = [1, 2, 3];
type SizeMap = Record<string | number, ComplexStyleRule>;
export const size = {
	horizontal: styleVariants<SizeMap>(
		sizes.reduce((sizes, size) => {
			sizes[size] = {
				height: size,
			};
			return sizes as SizeMap;
		}, {} as SizeMap),
	),
	vertical: styleVariants(
		sizes.reduce((sizes, size) => {
			sizes[size] = {
				width: size,
			};
			return sizes as SizeMap;
		}, {} as SizeMap),
	),
};
