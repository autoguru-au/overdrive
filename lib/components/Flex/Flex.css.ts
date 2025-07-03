import { globalStyle, style } from '@vanilla-extract/css';

export const component = style({});
globalStyle(`${component}[data-expand] > *`, {
	flexGrow: '1',
});
