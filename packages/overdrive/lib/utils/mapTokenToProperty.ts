import { CSSProperties } from '@vanilla-extract/css';
import { Properties } from 'csstype';

type PropValue<T> = T extends Record<string | number, infer U> ? U : never;

export const mapTokenToProperty = <T>(
	record: T,
	property: ((value: PropValue<T>) => CSSProperties) | keyof Properties,
	omitKeys: string[] = [],
): Record<keyof T, CSSProperties> =>
	Object.entries(record)
		.filter(([key]) => !omitKeys.includes(key))
		.reduce(
			(result, [key, value]) => ({
				...result,
				[key]: {
					...(typeof property === 'function'
						? property(value)
						: { [property]: value }),
				},
			}),
			{} as Record<keyof T, CSSProperties>,
		);
