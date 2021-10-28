import { CSSProperties } from '@vanilla-extract/css';
import clsx from 'clsx';
import { Properties } from 'csstype';

import { breakpoints } from '../themes/base/tokens';

import { responsiveStyle } from './responsiveStyle';

export type ResponsiveProp<T> = T | T[];

type BreakpointStyleMap = Record<keyof typeof breakpoints, any>;

const responsiveTokenOrder: ReadonlyArray<keyof typeof breakpoints> = [
	'mobile',
	'tablet',
	'desktop',
	'largeDesktop',
] as const;

export const resolveResponsiveStyle = <Tokens extends string | number>(
	responsiveArgument: ResponsiveProp<Tokens> | null | undefined,
	breakpointTokenMap: Record<Tokens, BreakpointStyleMap>,
) => {
	if (responsiveArgument === void 0 || responsiveArgument === null)
		return void 0;

	if (!Array.isArray(responsiveArgument))
		return breakpointTokenMap[responsiveArgument]
			? breakpointTokenMap[responsiveArgument].mobile
			: void 0;

	return clsx([...buildClassFor(responsiveArgument, breakpointTokenMap)]);
};

export const makeResponsiveStyle = <Token extends Record<string | number, any>>(
	tokens,
	property: ((value: any) => CSSProperties) | keyof Properties,
): Record<keyof Token, any> => Object.entries(tokens || {})
	.reduce((results, [key, value]) => {
		const breakpointsKeys = Object.keys(breakpoints);
		return {
			...results,
			[key]: breakpointsKeys.reduce((bpList, bp) => {
				return {
					...bpList,
					[bp]: responsiveStyle({
						[bp]:
							typeof property === 'string'
								? { [property]: value }
								: property(value),
					}),
				};
			}, {}),
		};
	}, {} as Record<keyof Token, BreakpointStyleMap>);

function* buildClassFor<Tokens extends string | number>(
	responsiveArgument: Tokens[],
	breakpointTokenMap: Record<Tokens, BreakpointStyleMap>,
) {
	let counter = 0;
	const maxLoops = Math.max(
		responsiveArgument.length,
		responsiveTokenOrder.length,
	);

	while (counter < maxLoops) {
		const orderToken = responsiveTokenOrder[counter];
		const result =
			breakpointTokenMap[
				responsiveArgument?.[counter] ??
					getEarliestKnownToken(responsiveArgument, counter)
			];
		yield result ? result[orderToken] : void 0;
		++counter;
	}
}

export function getEarliestKnownToken<Tokens extends string | number | boolean>(
	responsiveArgument: Tokens[],
	counter: number,
): Tokens {
	let idx = counter;

	do {
		--idx;
		if (
			responsiveArgument[idx] !== undefined &&
			responsiveArgument[idx] !== null
		)
			return responsiveArgument[idx];
	} while (idx !== 0);

	return '' as Tokens;
}
