import { element, resetVariants, type ResetVariantProps } from './elements.css';

/**
 * Returns the reset styles based on the `as` prop tag name passed in.
 * A wrapper around `resetVariants` recipe to allow any string to be passed in
 */
export const resetStyles = ({ as: _as }: { as: string | undefined }) => {
	if (!_as) return resetVariants();

	const as = (_as in element ? _as : 'div') as ResetVariantProps['as'];
	return resetVariants({ as });
};
