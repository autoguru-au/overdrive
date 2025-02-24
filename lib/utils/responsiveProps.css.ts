import { CSSProperties, style } from '@vanilla-extract/css';
import { Properties } from 'csstype';

import { breakpoints } from '../themes/makeTheme';

import { responsiveStyle } from './responsiveStyle';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export type ResponsiveProp<T extends unknown> = T | T[];

type BreakpointStyleMap = Record<keyof typeof breakpoints, any>;

export const makeResponsiveStyle = <Token extends Record<string | number, any>>(
	tokens,
	property: ((value: any) => CSSProperties) | keyof Properties,
): Record<keyof Token, ResponsiveProp<any>> =>
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
