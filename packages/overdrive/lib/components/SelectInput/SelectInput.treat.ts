import { style } from 'treat';

export const input = style({});
export const paddedInput = style(({ space }) => ({
	selectors: {
		[`${input}&`]: {
			paddingRight: space['8'],
		},
	},
}));

export const arrow = style({
	top: '0',
	right: '0',
});
