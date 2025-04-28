import {
	sprinkles,
	type Sprinkles,
	sprinklesResponsive,
	type SprinklesResponsive,
} from '../styles/sprinkles.css';

/**
 * Typeguard function for base sprinkles (non-responsive) props
 */
export const isSprinklesProperty = (key: string) => {
	return sprinkles.properties.has(key as keyof Sprinkles);
};

/**
 * Typeguard function for responsive sprinkles  props
 */
export const isSprinklesResponsiveProperty = (key: string) => {
	return sprinklesResponsive.properties.has(key as keyof SprinklesResponsive);
};

/**
 * Filters and separates sprinkles props into three categories that relate to base sprinkes, responsive sprinkles, and leftovers
 *
 * @param props - Object containing all props to be filtered
 * @returns `{ sprinklesProps, sprinklesResponsiveProps }`
 */
export const filterSprinklesProps = (props: object) =>
	Object.entries(props).reduce(
		(acc, [key, value]) => {
			if (isSprinklesProperty(key)) {
				acc.sprinklesProps[key] = value;
			} else if (isSprinklesResponsiveProperty(key)) {
				acc.sprinklesResponsiveProps[key] = value;
			}
			return acc;
		},
		{
			sprinklesProps: {} as Sprinkles,
			sprinklesResponsiveProps: {} as SprinklesResponsive,
		},
	);

/**
 * Filters out sprinkles and responsive sprinkles props, returning only the non-sprinkles props.
 *
 * @param props - Object containing all props to be filtered
 * @returns Object containing only non-sprinkles props
 */
export const filterNonSprinklesProps = <T extends object>(props: T) =>
	Object.entries(props).reduce(
		(acc, [key, value]) => {
			if (
				!(
					isSprinklesProperty(key) ||
					isSprinklesResponsiveProperty(key)
				)
			) {
				acc[key] = value;
			}
			return acc;
		},
		{} as {
			[K in keyof T]: T[K];
		},
	);
