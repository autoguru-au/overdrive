import clsx from 'clsx';
import type { ElementType, ReactElement } from 'react';

import { element, resetVariants, type ResetVariantProps } from './element.css';
import { sprinkles, type Sprinkles } from './sprinkles.css';

/**
 * Returns the reset styles based on the `as` prop tag name passed in.
 * A wrapper around `resetVariants` recipe to allow any string to be passed in
 */
export const resetStyles = ({ as: _as }: { as: string | undefined }) => {
	if (!_as) return resetVariants();

	const as = (_as in element ? _as : 'div') as ResetVariantProps['as'];
	return resetVariants({ as });
};

/**
 * Generates reset styles for a given HTML element tag.
 *
 * @param tag - allows any value passed in so it can be used with `as` props which may be React elements
 */
export const elementResetStyles = (tag: unknown) => {
	if (typeof tag === 'string') return resetStyles({ as: tag });
	return '';
};

/**
 * Convenience function that combines element reset styles via `as` props and sprinkles utility styles
 *
 * @example <svg className={componentStyles({ as: 'svg', padding: '1', size: '4' })} ... />
 */
export const componentStyles = ({
	as,
	...styleProps
}: { as?: string | ElementType | ReactElement } & Sprinkles) =>
	clsx(elementResetStyles(as), sprinkles(styleProps));
