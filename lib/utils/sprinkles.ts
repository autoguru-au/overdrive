import { sprinkles, type Sprinkles } from '../styles/sprinkles.css';

// Type for 'baseProps', containing only non-sprinkle properties from T
type RemainingProps<T extends object> = {
	[K in keyof T as K extends Sprinkles ? never : K]: T[K];
};

interface SortedProps<T extends object> {
	sprinklesProps: Sprinkles;
	baseProps: RemainingProps<T>;
}

/**
 * Typeguard function for base sprinkles (non-responsive) props
 */
export const isSprinklesProperty = (key: string) => {
	return sprinkles.properties.has(key as keyof Sprinkles);
};

/**
 * Filters out sprinkles and responsive sprinkles props, returning only the non-sprinkles props.
 *
 * @param props - Object containing all props to be filtered
 * @returns Object containing only non-sprinkles props
 */
export const filterNonSprinklesProps = <P extends object>(props: P) =>
	Object.entries(props).reduce((acc, [key, value]) => {
		if (!isSprinklesProperty(key)) {
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
 *  - `sprinklesProps`: Props matching sprinkles
 *  - `baseProps`: The remainder are the component's base props
 */
export const filterPropsWithStyles = <P extends object>(
	props: P,
): SortedProps<P> => {
	const acc = {
		sprinklesProps: {} as Record<string, unknown>,
		sprinklesLegacyColourProps: {} as Record<string, unknown>,
		baseProps: {} as Record<string, unknown>,
	};

	for (const key in props) {
		if (Object.prototype.hasOwnProperty.call(props, key)) {
			const value = props[key as keyof P];

			if (isSprinklesProperty(key)) {
				acc.sprinklesProps[key] = value;
			} else {
				acc.baseProps[key] = value;
			}
		}
	}

	return {
		sprinklesProps: acc.sprinklesProps as Sprinkles,
		baseProps: acc.baseProps as RemainingProps<P>,
	};
};
