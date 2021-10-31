import { CSSProperties, style } from '@vanilla-extract/css';
import { Properties } from 'csstype';

import { breakpoints } from '../themes/base/tokens';

import { responsiveStyle } from './responsiveStyle';

export type ResponsiveProp<T> = T | T[];

type BreakpointStyleMap = Record<keyof typeof breakpoints, any>;

export const makeResponsiveStyle = <Token extends Record<string | number, any>>(
	tokens,
	property: ((value: any) => CSSProperties) | keyof Properties,
): Record<keyof Token, any> =>
	Object.entries(tokens || {}).reduce((results, [key, value]) => {
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
	}, {} as Record<keyof Token, BreakpointStyleMap>);