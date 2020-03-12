import clsx from 'clsx';
import { Properties } from 'csstype';
import { ClassRef, CSSProperties, styleTree } from 'treat';
import { Theme } from 'treat/theme';

export type ResponsiveProp<T> = T | T[];

type BreakpointStyleMap = Record<keyof Theme['breakpoints'], ClassRef>;

const responsiveTokenOrder: ReadonlyArray<keyof Theme['breakpoints']> = [
	'mobile',
	'tablet',
	'desktop',
	'largeDesktop',
] as const;

export const resolveResponsiveStyle = <Tokens extends string | number>(
	responsiveArgument: ResponsiveProp<Tokens> | null | void,
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
	getTokens: (theme: Theme) => Token,
	property: ((value: any) => CSSProperties) | keyof Properties,
): Record<keyof Token, BreakpointStyleMap> => {
	return styleTree((theme, styleNode) => {
		const tokens = getTokens(theme);
		const breakpoints = Object.keys(theme.breakpoints);

		return Object.entries(tokens).reduce((results, [key, value]) => {
			return {
				...results,
				[key]: breakpoints.reduce((bpList, bp) => {
					return {
						...bpList,
						[bp]: styleNode(
							theme.utils.responsiveStyle({
								[bp]:
									typeof property === 'string'
										? { [property]: value }
										: property(value),
							}),
							`${key}_${bp}`,
						),
					};
				}, {}),
			};
		}, {} as Record<keyof Token, BreakpointStyleMap>);
	});
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

function getEarliestKnownToken<Tokens extends string | number>(
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
