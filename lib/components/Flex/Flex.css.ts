import { globalStyle, style } from '@vanilla-extract/css';

export const inlineStyle = style({});
globalStyle(`${inlineStyle}[data-expand] > *`, {
	flexGrow: '1',
});
