import { Properties } from 'csstype';
import { CSSProperties, Style } from 'treat';

type PropValue<T> = T extends Record<string | number, infer U> ? U : never;

export const mapTokenToProperty_Legacy = <T>(
	record: T,
	property: ((value: PropValue<T>) => CSSProperties) | keyof Properties,
): Record<keyof T, Style> =>
	Object.entries(record).reduce(
		(result, [key, value]) => ({
			...result,
			[key]: {
				...(typeof property === 'function'
					? property(value)
					: { [property]: value }),
			},
		}),
		{} as Record<keyof T, Style>,
	);
