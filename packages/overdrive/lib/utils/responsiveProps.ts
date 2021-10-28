import { CSSProperties } from '@vanilla-extract/css';
import clsx from 'clsx';
import { Properties } from 'csstype';
import { Theme } from 'treat/theme';

import { vars } from '../themes/base/vars.css';

import { responsiveStyle } from './responsiveStyle';

export type ResponsiveProp<T> = T | T[];

type BreakpointStyleMap = Record<keyof Theme['breakpoints'], any>;

const responsiveTokenOrder: ReadonlyArray<keyof Theme['breakpoints']> = [
	'mobile',
	'tablet',
	'desktop',
	'largeDesktop',
] as const;

export const resolveResponsiveStyle = <Tokens extends string | number>(
	responsiveArgument: ResponsiveProp<Tokens> | null | undefined,
	breakpointTokenMap: Record<Tokens, BreakpointStyleMap>,
) => {
	console.log({responsiveArgument, breakpointTokenMap});
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
): Record<keyof Token, any> =>{
	//console.log({ tokens });
	const map =  Object.entries(tokens || {})
		.reduce((results, [key, value]) => {

			//console.log({ key });
			//console.log({ value });
			const breakpoints = Object.keys(vars.breakpoints);
			console.log({ breakpoints });
			results[key] = breakpoints.reduce((bpList, bp) => {

				//console.log({ bpList, bp });
				return {
					...bpList,
					...responsiveStyle({
						[bp]:
							typeof property === 'string'
								? { [property]: value }
								: property(value),
					}),
				};
			}, {});
			//console.log({ results });
			return results;
			/*return {
				...results,
				[key]: breakpoints.reduce((bpList, bp) => {
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
			};*/
	}, {} as Record<keyof Token, BreakpointStyleMap>);
	console.log({map});
	console.log(JSON.stringify(map));
	return map;
};

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
