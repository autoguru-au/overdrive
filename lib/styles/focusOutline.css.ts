import type { StyleRule } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../themes/theme.css';

import type { ODStyle } from './sprinkles.css';

export const focusOutline: ODStyle = {
	outlineColor: 'link',
	outlineStyle: { initial: 'none', focusVisible: 'solid' },
	outlineOffset: 'md',
	outlineWidth: { initial: 'none', focusVisible: 'default' },
};

export const focusOutlineStyle: StyleRule = {
	outline: `solid 2px ${vars.colours.foreground.link}`,
	outlineOffset: '2px',
};
