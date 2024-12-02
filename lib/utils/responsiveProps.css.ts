import { CSSProperties, style } from '@vanilla-extract/css';
import { Properties } from 'csstype';

import { breakpoints } from '../themes/makeTheme';

import { responsiveStyle } from './responsiveStyle';

export type ResponsiveProp<T> = T | T[];

type BreakpointStyleMap = Record<keyof typeof breakpoints, unknown>;

export const makeResponsiveStyle = <
	Token extends Record<string | number, unknown>,
>(
	tokens,
	property: ((value: unknown) => CSSProperties) | keyof Properties,
): Record<keyof Token, ResponsiveProp<unknown>> =>
	Object.entries(tokens || {}).reduce(
		(results, [key, value]) => {
			const breakpointsKeys = Object.keys(breakpoints);
			return {
				...results,
				[key]: breakpointsKeys.reduce((bpList, bp) => {
					return {
						...bpList,
						[bp]: style(
							responsiveStyle({
								[bp]:
									typeof property === 'string'
										? { [property]: value }
										: property(value),
							}),
						),
					};
				}, {}),
			};
		},
		{} as Record<keyof Token, BreakpointStyleMap>,
	);
