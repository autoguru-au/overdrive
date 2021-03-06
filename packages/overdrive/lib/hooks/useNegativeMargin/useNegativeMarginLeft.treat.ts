import { makeResponsiveStyle } from '../../utils';

export const negativeMarginLeft = makeResponsiveStyle(
	(theme) => theme.space,
	(value) => ({
		marginLeft: `calc(-1 * ${value})`,
		width: `calc(100% + ${value})`,
	}),
);
