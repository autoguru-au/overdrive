import {
	sprinkles,
	type Sprinkles,
	sprinklesLegacyColours,
	type SprinklesLegacyColours,
	sprinklesResponsive,
	type SprinklesResponsive,
} from '../styles/sprinkles.css';

type AnySprinklesKey =
	| keyof Sprinkles
	| keyof SprinklesResponsive
	| keyof SprinklesLegacyColours;

// Type for 'baseProps', containing only non-sprinkle properties from T
type RemainingProps<T extends object> = {
	[K in keyof T as K extends AnySprinklesKey ? never : K]: T[K];
};

interface SortedProps<T extends object> {
	sprinklesProps: Sprinkles;
	sprinklesResponsiveProps: SprinklesResponsive;
	sprinklesLegacyColourProps: SprinklesLegacyColours;
	baseProps: RemainingProps<T>;
}

/**
 * Typeguard function for base sprinkles (non-responsive) props
 */
export const isSprinklesProperty = (key: string) => {
	return sprinkles.properties.has(key as keyof Sprinkles);
};

/**
 * Typeguard function for legacy colour sprinkles props
 */
export const isSprinklesLegacyColourProperty = (key: string) => {
	return sprinklesLegacyColours.properties.has(
		key as keyof SprinklesLegacyColours,
	);
};

/**
 * Typeguard function for responsive sprinkles props
 */
export const isSprinklesResponsiveProperty = (key: string) => {
	return sprinklesResponsive.properties.has(key as keyof SprinklesResponsive);
};

/**
 * Filters out sprinkles and responsive sprinkles props, returning only the non-sprinkles props.
 *
 * @param props - Object containing all props to be filtered
 * @returns Object containing only non-sprinkles props
 */
export const filterNonSprinklesProps = <P extends object>(props: P) =>
	Object.entries(props).reduce((acc, [key, value]) => {
		if (
			!(
				isSprinklesProperty(key) ||
				isSprinklesResponsiveProperty(key) ||
				isSprinklesLegacyColourProperty(key)
			)
		) {
			acc[key] = value;
		}
		return acc;
	}, {} as RemainingProps<P>);

/**
 * Filters and separates props into four categories in a single pass:
 * base sprinkles, responsive sprinkles, legacy colour sprinkles, and all other props.
 *
 * @param props - Object containing all props to be classified.
 * @returns `{ sprinklesProps, sprinklesResponsiveProps, sprinklesLegacyColourProps, baseProps }`
 *  - `sprinklesProps`: Props matching base sprinkles
 *  - `sprinklesResponsiveProps`: Props matching responsive sprinkles
 *  - `sprinklesLegacyColourProps`: Props matching legacy colour sprinkles
 *  - `baseProps`: The remainder are the component's base props
 */
export const filterPropsWithStyles = <P extends object>(
	props: P,
): SortedProps<P> => {
	const acc = {
		sprinklesProps: {} as Record<string, unknown>,
		sprinklesResponsiveProps: {} as Record<string, unknown>,
		sprinklesLegacyColourProps: {} as Record<string, unknown>,
		baseProps: {} as Record<string, unknown>,
	};

	for (const key in props) {
		if (Object.prototype.hasOwnProperty.call(props, key)) {
			const value = props[key as keyof P];

			if (isSprinklesProperty(key)) {
				acc.sprinklesProps[key] = value;
			} else if (isSprinklesResponsiveProperty(key)) {
				acc.sprinklesResponsiveProps[key] = value;
			} else if (isSprinklesLegacyColourProperty(key)) {
				acc.sprinklesLegacyColourProps[key] = value;
			} else {
				acc.baseProps[key] = value;
			}
		}
	}

	return {
		sprinklesProps: acc.sprinklesProps as Sprinkles,
		sprinklesResponsiveProps:
			acc.sprinklesResponsiveProps as SprinklesResponsive,
		sprinklesLegacyColourProps:
			acc.sprinklesLegacyColourProps as SprinklesLegacyColours,
		baseProps: acc.baseProps as RemainingProps<P>,
	};
};
