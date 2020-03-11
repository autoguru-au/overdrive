import { makeResponsiveStyle } from '../../utils';

export const size = makeResponsiveStyle(
	({ icon }) => icon.size,
	value => ({
		width: value,
		height: value,
	}),
);
