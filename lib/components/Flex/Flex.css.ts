import { globalStyle, style } from '@vanilla-extract/css';

globalStyle(`${inlineStyle}[data-expand] > *`, {
	flexGrow: '1',
});
