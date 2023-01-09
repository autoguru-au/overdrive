import { ComplexStyleRule, styleVariants } from '@vanilla-extract/css';

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
