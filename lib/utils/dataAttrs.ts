export interface DataAttributes {
	[key: string]: string | boolean | undefined;
}

/**
 * Consistent mapping of props to data attributes
 */
export function dataAttrs(attrs: DataAttributes) {
	return Object.entries(attrs).reduce(
		(acc, [key, value]) => {
			if (value !== false && value !== undefined) {
				acc[`data-${key}`] =
					typeof value === 'boolean' ? 'true' : value;
			}
			return acc;
		},
		{} as { [key: string]: string },
	);
}
